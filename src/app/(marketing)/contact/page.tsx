export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <form className="max-w-md space-y-4">
                <div>
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full border rounded px-4 py-2"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full border rounded px-4 py-2"
                        placeholder="your@email.com"
                    />
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Send Message
                </button>
            </form>
        </div>
    );
}
