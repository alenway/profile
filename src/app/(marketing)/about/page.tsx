export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-gray-600 mb-4">
                This page has header and footer from Marketing Layout.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="font-semibold">✅ Header visible</p>
                <p className="font-semibold">✅ Footer visible</p>
            </div>
        </div>
    );
}
