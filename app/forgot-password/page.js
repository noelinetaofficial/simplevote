"use client";
export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-center mb-3 text-gray-900">Reset Password</h1>
        <p className="text-center text-gray-500 text-sm mb-8">Enter your registered email and we will send a reset link.</p>
        <form className="space-y-6">
          <input type="email" placeholder="Email Address" className="w-full border-2 border-gray-100 p-3 rounded-lg outline-none focus:border-zinc-800" required />
          <button className="w-full bg-zinc-800 text-white py-4 rounded-lg font-bold hover:bg-black transition shadow-lg">Send Reset Link</button>
        </form>
        <a href="/login" className="block text-center mt-8 text-sm text-gray-400 hover:text-black transition">Back to Login</a>
      </div>
    </div>
  );
}