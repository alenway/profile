export default function EditorPage() {
    return (
        <div className="h-screen bg-gray-900 text-white p-8 flex flex-col">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Code Editor</h1>
                <p className="text-gray-400">
                    Fullscreen mode - no header, footer, or sidebar
                </p>
            </div>

            <div className="bg-red-900 border-l-4 border-red-500 p-4 mb-6">
                <p className="font-semibold">❌ NO Header/Footer/Sidebar</p>
                <p className="font-semibold">✅ Takes full screen</p>
            </div>

            <div className="flex-1 bg-gray-800 rounded-lg p-6 font-mono text-sm overflow-auto">
                <div className="text-green-400">// Your code here...</div>
                <div className="text-blue-400">
                    function <span className="text-yellow-400">hello</span>(){" "}
                    {"{"}
                </div>
                <div className="pl-4 text-gray-300">
                    console.log(
                    <span className="text-orange-400">"Hello World!"</span>)
                </div>
                <div className="text-blue-400">{"}"}</div>
            </div>
        </div>
    );
}
