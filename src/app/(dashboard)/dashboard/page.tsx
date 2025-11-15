export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="font-semibold">✅ Has Sidebar (left side)</p>
                <p className="font-semibold">✅ Has Dashboard Header</p>
                <p className="font-semibold">❌ NO Footer</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">
                        Total Users
                    </h3>
                    <p className="text-3xl font-bold mt-2">1,234</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">
                        Revenue
                    </h3>
                    <p className="text-3xl font-bold mt-2">$12,543</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">
                        Growth
                    </h3>
                    <p className="text-3xl font-bold mt-2">+23%</p>
                </div>
            </div>
        </div>
    );
}
