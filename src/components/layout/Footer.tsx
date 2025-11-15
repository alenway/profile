export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold mb-3">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Product</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-3">Legal</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    © 2024 MyApp. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
