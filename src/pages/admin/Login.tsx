import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppData } from "@/context/AppDataContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAdminAuthenticated } = useAppData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAdminAuthenticated) return <Navigate to="/admin/dashboard/blogs" replace />;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(username, password);
    if (!ok) {
      setError("Invalid credentials. Use admin / admin123");
      return;
    }
    navigate("/admin/dashboard/blogs");
  };

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-card rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-headline font-extrabold text-on-surface mb-2">Admin Login</h1>
        <p className="text-secondary mb-8">Login to manage blog posts.</p>
        <form onSubmit={onSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary/30"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="w-full bg-primary text-primary-foreground rounded-xl py-3 font-headline font-bold">
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
