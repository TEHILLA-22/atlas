// src/app/auth/login/page.tsx
import LoginForm from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg" />
            <span className="text-2xl font-bold text-white">Atlas</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Sign in to your account</h1>
          <p className="text-gray-400 mt-2">Welcome back! Please enter your details.</p>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Sign up link */}
        <p className="text-center text-gray-400 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 underline">
            Sign up
          </Link>
        </p>

        {/* Terms */}
        <p className="text-center text-xs text-gray-500 mt-8">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}