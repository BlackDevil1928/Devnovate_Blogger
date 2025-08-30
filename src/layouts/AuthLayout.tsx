// src/layouts/AuthLayout.tsx
import Navigation from "@/components/Navigation";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <Navigation />

      {/* Content */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-neutral-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
