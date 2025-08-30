// src/pages/Admin.tsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type BlogRow = {
  id: string;
  title: string;
  content: string;
  author_id: string;
  status: string;
  created_at: string;
};

export default function Admin() {
  const { user, loading } = useAuth();
  const { toast } = useToast ? useToast() : { toast: (opts: any) => alert(opts.title || opts) };
  const [blogs, setBlogs] = useState<BlogRow[]>([]);
  const [fetching, setFetching] = useState(true);

  // 1) load pending blogs (runs when component mounts)
  useEffect(() => {
    if (!user) return;
    (async () => {
      setFetching(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("id, title, content, author_id, status, created_at")
        .eq("status", "pending")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Failed to load pending blogs:", error);
        toast({ title: "Failed to load pending blogs", description: error.message, variant: "destructive" });
      } else {
        setBlogs(data || []);
      }
      setFetching(false);
    })();
  }, [user]);

  // 2) protect the page: redirect to login if not logged in
  if (loading) return <div className="p-8">Loading auth...</div>;
  if (!user) return <Navigate to="/login" replace />;

  // 3) block non-admins
  if (user.role !== "admin") {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold">Access Denied</h2>
          <p className="mt-2 text-gray-300">You must be an admin to see this page.</p>
        </div>
      </div>
    );
  }

  // 4) approve or reject a blog
  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    // optimistic UI: remove from list right away
    setBlogs(prev => prev.filter(b => b.id !== id));

    const { error } = await supabase
      .from("blogs")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Update failed:", error);
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
      // if failed put it back (simple way)
      await loadPending(); // re-fetch
    } else {
      toast({ title: status === "approved" ? "Approved" : "Rejected" });
    }
  };

  // helper to re-fetch pending blogs
  const loadPending = async () => {
    setFetching(true);
    const { data, error } = await supabase
      .from("blogs")
      .select("id, title, content, author_id, status, created_at")
      .eq("status", "pending")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Failed to reload:", error);
    } else {
      setBlogs(data || []);
    }
    setFetching(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard — Pending Blogs</h1>

        {fetching ? (
          <p>Loading pending blogs…</p>
        ) : blogs.length === 0 ? (
          <p>No pending blogs right now 🎉</p>
        ) : (
          <div className="space-y-6">
            {blogs.map((b) => (
              <div key={b.id} className="bg-neutral-900 p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{b.title}</h2>
                    <p className="text-sm text-gray-300 mt-1">
                      by <code className="text-xs">{b.author_id}</code> • {new Date(b.created_at).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-green-600" onClick={() => updateStatus(b.id, "approved")}>Approve</Button>
                    <Button className="bg-red-600" onClick={() => updateStatus(b.id, "rejected")}>Reject</Button>
                  </div>
                </div>

                <p className="mt-3 text-gray-200">{b.content.length > 300 ? b.content.slice(0, 300) + "..." : b.content}</p>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
