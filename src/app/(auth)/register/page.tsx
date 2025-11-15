import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-600 mb-6">Sign up to get started</p>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded px-4 py-2"
                        placeholder="John Doe"
                    />
                </div>

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
                    Create Account
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                    Sign in
                </Link>
            </p>
        </div>
    );
}
