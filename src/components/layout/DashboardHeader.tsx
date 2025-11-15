export default function DashboardHeader() {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-semibold">
                        Welcome back, John!
                    </h1>
                    <p className="text-sm text-gray-600">
                        Here's what's happening today
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded">
                        🔔
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            JD
                        </div>
                        <div>
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-gray-600">Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
