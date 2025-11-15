import Link from "next/link";
import { Home, Settings, Users, BarChart } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white p-6">
            <div className="mb-8">
                <h2 className="text-xl font-bold">📊 Dashboard</h2>
            </div>

            <nav className="space-y-2">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition"
                >
                    <Home size={20} />
                    <span>Dashboard</span>
                </Link>

                <Link
                    href="/dashboard/analytics"
                    className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition"
                >
                    <BarChart size={20} />
                    <span>Analytics</span>
                </Link>

                <Link
                    href="/dashboard/users"
                    className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition"
                >
                    <Users size={20} />
                    <span>Users</span>
                </Link>

                <Link
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-800 transition"
                >
                    <Settings size={20} />
                    <span>Settings</span>
                </Link>
            </nav>
        </aside>
    );
}
