import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/use-toast";
import AuthLayout from "@/layouts/AuthLayout";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { email, password, username } = form;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } },
      });

      if (error) throw error;

      toast({
        title: "Account created!",
        description: "Check your email to confirm.",
      });
      navigate("/login");
    } catch (err: any) {
      toast({
        title: "Signup failed",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const redirectTo = window.location.origin + "/auth/callback";
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      });
    } catch (err: any) {
      toast({ title: "OAuth failed", description: err.message, variant: "destructive" });
    }
  };

  return (
    <AuthLayout title="Create your account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
        <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />

        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </Button>

        <div className="text-center text-gray-400">or</div>

        <Button type="button" variant="outline" className="w-full" onClick={signUpWithGoogle}>
          Continue with Google
        </Button>

        <p className="text-sm text-center text-gray-300 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 underline">
            Login
          </a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signup;
