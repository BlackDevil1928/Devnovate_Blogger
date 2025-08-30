// src/pages/AuthCallback.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const nav = useNavigate();

  useEffect(() => {
    // onAuthStateChange in AuthProvider will update the user.
    // Wait a short time for the SDK to process the redirect and session.
    const t = setTimeout(() => nav("/"), 800);
    return () => clearTimeout(t);
  }, [nav]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-medium">Finishing sign-in...</h2>
        <p className="text-sm text-gray-600 mt-2">If you are not redirected automatically, refresh this page.</p>
      </div>
    </div>
  );
}
