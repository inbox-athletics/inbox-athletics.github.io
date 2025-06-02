export default function TermsPage() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-blue max-w-none">
                <h2 className="text-xl font-semibold mt-6">1. Eligibility</h2>
                <ul className="list-disc list-inside">
                    <li>You must be at least 13 years old to use Inbox Athletics. If you are under 18, you must have
                        permission from a parent or legal guardian.
                    </li>
                    <li>By using the Service, you represent and warrant that you meet all eligibility requirements.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">2. Use of the Service</h2>
                <ul className="list-disc list-inside">
                    <li>You agree to use the Service only for its intended purposes.</li>
                    <li>You may not:
                        <ul className="list-disc list-inside ml-6">
                            <li>Misrepresent your identity or affiliations.</li>
                            <li>Upload or transmit unlawful, offensive, or harmful content.</li>
                            <li>Interfere with or disrupt the Service or its infrastructure.</li>
                        </ul>
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">3. Accounts and Security</h2>
                <ul className="list-disc list-inside">
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>You agree to notify us immediately of any unauthorized use or suspected breach.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">4. Subscription and Payment</h2>
                <ul className="list-disc list-inside">
                    <li>Some features may require a paid subscription. Fees and billing terms will be presented at the
                        time of purchase.
                    </li>
                    <li>All payments are non-refundable unless stated otherwise.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">5. Communications</h2>
                <ul className="list-disc list-inside">
                    <li>By signing up, you agree to receive essential notifications and service-related
                        communications.
                    </li>
                    <li>With your consent, we may send promotional messages. You can opt out at any time.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">6. User Content</h2>
                <ul className="list-disc list-inside">
                    <li>You retain ownership of the content you upload but grant us a license to use, store, and process
                        it solely to provide and improve the Service.
                    </li>
                    <li>We reserve the right to remove content that violates these Terms.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">7. Intellectual Property</h2>
                <p>All materials provided by Inbox Athletics, including branding, design, and code, are our intellectual
                    property and may not be copied or reused without permission.</p>

                <h2 className="text-xl font-semibold mt-6">8. Termination</h2>
                <p>We reserve the right to suspend or terminate your account if you violate these Terms or if we deem
                    your use harmful to the Service.</p>

                <h2 className="text-xl font-semibold mt-6">9. Disclaimers and Limitation of Liability</h2>
                <p>The Service is provided "as is" and "as available." We do not guarantee outcomes from using the
                    platform (e.g., recruitment success). To the maximum extent permitted by law, we are not liable for
                    any damages resulting from your use of the Service.</p>

                <h2 className="text-xl font-semibold mt-6">10. Governing Law</h2>
                <p>These Terms are governed by the laws of the State of New Jersey, without regard to its conflict of
                    law principles.</p>

                <h2 className="text-xl font-semibold mt-6">11. Changes to Terms</h2>
                <p>We may update these Terms from time to time. We will notify you of any material changes.</p>

                <h2 className="text-xl font-semibold mt-6">12. Contact</h2>
                <p>If you have questions about these Terms, contact us at: <a className="text-blue-600 underline"
                                                                              href="mailto:support@inboxathletics.com">support@inboxathletics.com</a>
                </p>
            </div>
        </main>
    )
}