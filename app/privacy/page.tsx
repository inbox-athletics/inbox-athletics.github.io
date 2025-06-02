export default function PrivacyPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-blue max-w-none">
                <p>Inbox Athletics ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we
                    collect, use, and protect your information.</p>

                <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
                <ul className="list-disc list-inside">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, school, graduation
                        year, sport, etc.
                    </li>
                    <li><strong>Usage Data:</strong> How you interact with our platform (e.g., page visits, features
                        used).
                    </li>
                    <li><strong>Connected Account Data:</strong> If you connect your email or calendar, we may access
                        relevant metadata and message content strictly for functionality (e.g., syncing communication).
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside">
                    <li>To provide and improve the Service.</li>
                    <li>To personalize your experience.</li>
                    <li>To facilitate communication between athletes and coaches.</li>
                    <li>To send service notifications and updates.</li>
                    <li>For analytics and feature development.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">3. Sharing of Information</h2>
                <ul className="list-disc list-inside">
                    <li>We do not sell your personal information.</li>
                    <li>We may share data with trusted service providers who help us operate the Service (e.g., email
                        sync providers, hosting services).
                    </li>
                    <li>We may disclose information if required by law or to protect rights, safety, or property.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your data. However, no method of
                    transmission over the internet is 100% secure.</p>

                <h2 className="text-xl font-semibold mt-6">5. Your Choices</h2>
                <ul className="list-disc list-inside">
                    <li>You can access and update your personal information through your account settings.</li>
                    <li>You can disconnect third-party integrations at any time.</li>
                    <li>You may request deletion of your account and associated data.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">6. Children's Privacy</h2>
                <p>We do not knowingly collect personal information from children under 13. Users under 18 must have
                    parental consent.</p>

                <h2 className="text-xl font-semibold mt-6">7. Data Retention</h2>
                <p>We retain your data as long as necessary to provide the Service or comply with legal obligations.</p>

                <h2 className="text-xl font-semibold mt-6">8. Changes to This Policy</h2>
                <p>We may revise this Privacy Policy. Material changes will be communicated via the platform or
                    email.</p>

                <h2 className="text-xl font-semibold mt-6">9. Contact</h2>
                <p>For questions about this Privacy Policy, contact: <a className="text-blue-600 underline"
                                                                        href="mailto:privacy@inboxathletics.com">privacy@inboxathletics.com</a>
                </p>
            </div>
        </main>
    )
}