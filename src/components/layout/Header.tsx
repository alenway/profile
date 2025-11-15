import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold">
                        🚀 MyApp
                    </Link>

                    <nav className="flex gap-6">
                        <Link href="/" className="hover:text-blue-200">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-blue-200">
                            About
                        </Link>
                        <Link href="/contact" className="hover:text-blue-200">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex gap-3">
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
