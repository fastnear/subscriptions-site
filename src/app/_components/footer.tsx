import '../globals.css';

export default function Footer() {
    return (
        <footer className="footer">
            {/*<h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-600">FASTNEAR Subscriptions</h1>*/}

            <div className="footer-content">
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                <p>
                    <a href="/privacy">Privacy Policy</a> |
                    <a href="/terms"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
}
