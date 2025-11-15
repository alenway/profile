export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded px-4 py-2"
                            defaultValue="john_doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border rounded px-4 py-2"
                            defaultValue="john@example.com"
                        />
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
