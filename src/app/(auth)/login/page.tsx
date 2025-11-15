import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600 mb-6">Sign in to your account</p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-3 mb-6 text-sm">
                <p className="font-semibold">❌ NO Header/Footer/Sidebar</p>
                <p className="font-semibold">✅ Just centered card</p>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full border rounded px-4 py-2"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full border rounded px-4 py-2"
                        placeholder="••••••••"
                    />
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Sign In
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <Link
                    href="/register"
                    className="text-blue-600 hover:underline"
                >
                    Sign up
                </Link>
            </p>
        </div>
    );
}
