import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/" className="inline-block mb-8">
        <img src="/inbox-athletics-logo-without-tagline.svg" alt="Inbox Athletics" className="h-8 w-auto" />
      </Link>
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="mb-8">
        <strong>Inbox Athletics LLC</strong> (&ldquo;Inbox Athletics,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides a recruiting communication platform for high school student-athletes. By creating an account or using the Inbox Athletics platform (the &ldquo;Service&rdquo;), you agree to these Terms of Service (&ldquo;Terms&rdquo;). Please read them carefully.
      </p>
      <p className="mb-8"><strong>Effective Date:</strong> February 18, 2026</p>
      <div className="prose prose-blue max-w-none">
        <hr />

        <h2 className="text-xl font-semibold mt-6">1. Eligibility</h2>
        <ul className="list-disc list-inside">
          <li>You must be at least 13 years old to use Inbox Athletics.</li>
          <li>If you are under 18, your parent or legal guardian must be notified of your account creation. By signing up, you represent that you have provided an accurate parent or guardian email address so that we may send the required parental notification.</li>
          <li>By using the Service, you represent and warrant that you meet all eligibility requirements and that the information you provide at signup is accurate.</li>
          <li>Parents or guardians may contact us at <a className="text-blue-600 underline" href="mailto:privacy@inboxathletics.com">privacy@inboxathletics.com</a> to review, modify, or request deletion of a minor&apos;s account and data at any time.</li>
        </ul>

        <hr />

        <h2 className="text-xl font-semibold mt-6">2. Accounts and Security</h2>
        <ul className="list-disc list-inside">
          <li>You are responsible for maintaining the confidentiality of your account credentials. Do not share your password with anyone.</li>
          <li>You agree to notify us immediately at <a className="text-blue-600 underline" href="mailto:support@inboxathletics.com">support@inboxathletics.com</a> if you suspect any unauthorized access to your account.</li>
          <li>You are responsible for all activity that occurs under your account.</li>
          <li>You may not create an account on behalf of another person without their authorization, or create multiple accounts to circumvent platform limitations.</li>
        </ul>

        <hr />

        <h2 className="text-xl font-semibold mt-6">3. Use of the Service</h2>
        <p>You agree to use the Service only for its intended purpose: managing and improving your recruiting communications with college coaches.</p>
        <p><strong>You may not use the Service to:</strong></p>
        <ul className="list-disc list-inside">
          <li>Misrepresent your identity, athletic credentials, academic record, or affiliations to coaches or any other party</li>
          <li>Send unsolicited bulk or spam messages to college coaches or coaching staff</li>
          <li>Impersonate a coach, athletic department staff member, or any other person</li>
          <li>Upload, transmit, or generate content that is unlawful, harassing, defamatory, or obscene</li>
          <li>Use AI-assisted features to fabricate athletic statistics, honors, or eligibility information</li>
          <li>Circumvent, disable, or interfere with the security or functionality of the Service</li>
          <li>Scrape, copy, or systematically extract data from the platform</li>
          <li>Use the Service for any commercial purpose unrelated to your own recruiting process</li>
        </ul>
        <p>Violations of these restrictions may result in immediate account suspension or termination.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">4. Google Account Integration</h2>
        <p>If you connect your Google account to Inbox Athletics, you authorize us to access your Gmail data as described in our <a className="text-blue-600 underline" href="/privacy">Privacy Policy</a> and consistent with the permissions you grant through Google&apos;s OAuth authorization flow.</p>
        <ul className="list-disc list-inside">
          <li>You may revoke Google account access at any time through your Inbox Athletics account settings or directly through your <a className="text-blue-600 underline" href="https://myaccount.google.com/permissions">Google Account permissions page</a>.</li>
          <li>You represent that you are authorized to connect the Google account you link to Inbox Athletics.</li>
          <li>We will use your Google account data solely as described in our Privacy Policy. We do not use Gmail data for advertising or any purpose unrelated to providing the Service.</li>
          <li>Revoking Google account access does not delete your Inbox Athletics account. See Section 10 for account deletion.</li>
        </ul>

        <hr />

        <h2 className="text-xl font-semibold mt-6">5. AI-Assisted Features</h2>
        <p>Inbox Athletics provides AI-powered tools to help you draft emails, analyze your recruiting relationships, and manage communications. By using these features, you acknowledge and agree that:</p>
        <ul className="list-disc list-inside">
          <li><strong>You are responsible for all content sent in your name.</strong> AI-generated suggestions are drafts only. You must review and approve any message before sending it to a coach.</li>
          <li>AI-generated content may contain errors, inaccuracies, or language that is not appropriate for your specific situation. We do not guarantee the quality, accuracy, or effectiveness of any AI-generated content.</li>
          <li>Using AI-assisted drafting does not transfer responsibility for the content of your communications to Inbox Athletics.</li>
          <li>To provide AI features, we share relevant message data with third-party AI providers (Anthropic and Google). This is described in detail in our <a className="text-blue-600 underline" href="/privacy">Privacy Policy</a>.</li>
        </ul>

        <hr />

        <h2 className="text-xl font-semibold mt-6">6. NCAA, NAIA, and Recruiting Compliance</h2>
        <p>Inbox Athletics is a communication management tool. We do not provide legal, compliance, or eligibility advice.</p>
        <p><strong>You are solely responsible for ensuring that your use of the platform complies with all applicable rules and regulations</strong>, including those of the NCAA, NAIA, NJCAA, or any other governing body that oversees your recruiting process. This includes rules governing permissible contact with coaches, communication timing, and the use of third-party services in the recruiting process.</p>
        <p>Inbox Athletics makes no representation that use of the platform is compliant with any particular governing body&apos;s rules. If you have compliance questions, consult your high school athletic director or a qualified compliance advisor.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">7. Coach and Contact Data</h2>
        <p>The coach contact records in your Inbox Athletics account are created and managed by you. Inbox Athletics does not verify, guarantee, or warrant the accuracy of any coach contact information you enter or import.</p>
        <p>You are responsible for ensuring that the contact information you add is accurate and that your use of that information complies with applicable law. We are not liable for communications sent to incorrect or outdated contact information.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">8. User Content</h2>
        <p>You retain ownership of the content you create within Inbox Athletics, including coach notes, profile information, and manually written messages (&ldquo;User Content&rdquo;).</p>
        <p>By using the Service, you grant Inbox Athletics LLC a limited, non-exclusive license to store, process, and display your User Content solely as necessary to provide the Service to you.</p>
        <p><strong>We do not use your User Content — including your email communications or AI-generated drafts — to train AI models, build advertising profiles, or for any purpose beyond operating the Service.</strong> This license terminates when you delete your account, subject to our data retention practices described in our Privacy Policy.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">9. Subscriptions and Payment</h2>

        <h3 className="text-lg font-semibold mt-4">Plans</h3>
        <p>Inbox Athletics offers the following paid subscription plans:</p>
        <ul className="list-disc list-inside">
          <li><strong>Monthly:</strong> Billed once per month</li>
          <li><strong>Annual:</strong> Billed once per year at a discounted rate</li>
        </ul>
        <p>Specific pricing is presented at the time of purchase and may be updated with notice as described in Section 14.</p>

        <h3 className="text-lg font-semibold mt-4">Billing</h3>
        <p>Subscriptions are billed in advance on a recurring basis. By subscribing, you authorize Inbox Athletics to charge your payment method on each renewal date until you cancel. Payments are processed by Stripe. You agree to Stripe&apos;s terms of service in connection with payment processing.</p>

        <h3 className="text-lg font-semibold mt-4">Cancellation</h3>
        <p>You may cancel your subscription at any time through your account settings or via the billing portal. Cancellation takes effect at the end of your current billing period — you will retain access to paid features through the end of the period you have already paid for. We do not issue partial-period refunds upon cancellation.</p>

        <h3 className="text-lg font-semibold mt-4">Refunds</h3>
        <p>All subscription fees are non-refundable except as follows: if you request a refund within <strong>7 days of your initial subscription purchase</strong>, we will issue a full refund upon request. To request a refund, contact <a className="text-blue-600 underline" href="mailto:support@inboxathletics.com">support@inboxathletics.com</a> within 7 days of your initial charge. Refund requests outside this window are evaluated on a case-by-case basis at our discretion. This refund policy applies to initial purchases only and does not apply to renewal charges.</p>

        <h3 className="text-lg font-semibold mt-4">Free Tier</h3>
        <p>We may offer a free tier with limited functionality. Free tier access does not require payment and may be modified or discontinued at any time with reasonable notice.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">10. Termination and Account Deletion</h2>

        <h3 className="text-lg font-semibold mt-4">Termination by You</h3>
        <p>You may delete your account at any time through your account settings. Upon deletion, we will remove your personal data within 30 days in accordance with our Privacy Policy.</p>

        <h3 className="text-lg font-semibold mt-4">Termination by Inbox Athletics</h3>
        <p>We reserve the right to suspend or terminate your account if you:</p>
        <ul className="list-disc list-inside">
          <li>Violate these Terms</li>
          <li>Use the Service in a way that harms other users, coaches, or the platform</li>
          <li>Engage in fraudulent, abusive, or illegal activity</li>
        </ul>
        <p>For non-urgent violations, we will attempt to provide notice and an opportunity to remedy the issue before termination. For serious violations (e.g., fraud, abuse, security threats), we may terminate immediately without notice.</p>
        <p>Upon termination for cause, you forfeit any remaining subscription period and are not entitled to a refund.</p>

        <h3 className="text-lg font-semibold mt-4">Effect of Termination</h3>
        <p>Upon account deletion or termination, your right to access the Service ends. You may request an export of your coach contacts and notes before deletion by contacting <a className="text-blue-600 underline" href="mailto:support@inboxathletics.com">support@inboxathletics.com</a>.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">11. Intellectual Property</h2>
        <p>All materials provided by Inbox Athletics — including the platform design, branding, code, and proprietary features — are the intellectual property of Inbox Athletics LLC and are protected by applicable intellectual property laws. You may not copy, reproduce, modify, or distribute any Inbox Athletics materials without our prior written permission.</p>
        <p>Nothing in these Terms transfers any intellectual property rights to you beyond the limited right to use the Service as described herein.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">12. Disclaimers</h2>
        <p>The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied. We do not warrant that:</p>
        <ul className="list-disc list-inside">
          <li>The Service will be uninterrupted, error-free, or secure</li>
          <li>AI-generated content will be accurate, appropriate, or effective</li>
          <li>Use of the platform will result in recruiting success, scholarship offers, or any particular outcome</li>
          <li>Coach contact data will be accurate or up to date</li>
        </ul>
        <p>We are not responsible for the actions of college coaches, athletic programs, or third-party services you interact with through or in connection with the platform.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">13. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, Inbox Athletics LLC, its founders, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — the Service, including but not limited to lost recruiting opportunities, reputational harm, or NCAA compliance violations.</p>
        <p>Our total liability to you for any claim arising from these Terms or your use of the Service shall not exceed the greater of (a) the amount you paid to Inbox Athletics in the 12 months preceding the claim, or (b) $100.</p>
        <p>Some jurisdictions do not allow the exclusion of certain warranties or limitations on liability. In those jurisdictions, our liability is limited to the maximum extent permitted by law.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">14. Dispute Resolution</h2>

        <h3 className="text-lg font-semibold mt-4">Accounts Involving Minors</h3>
        <p>Because Inbox Athletics is primarily used by student-athletes under the age of 18, we recognize that a parent or legal guardian is typically the responsible party in any dispute. By providing parental notification consent at the time of account creation — or by permitting or facilitating a minor&apos;s use of the Service — a parent or legal guardian agrees to be bound by this Section 14 on behalf of themselves and their minor child.</p>

        <h3 className="text-lg font-semibold mt-4">Informal Resolution First</h3>
        <p>Before initiating any formal proceeding, the user (or parent/guardian on behalf of a minor user) agrees to contact us at <a className="text-blue-600 underline" href="mailto:support@inboxathletics.com">support@inboxathletics.com</a> and allow 30 days to attempt to resolve the dispute informally. We take user concerns seriously and believe most issues can be resolved without formal proceedings.</p>

        <h3 className="text-lg font-semibold mt-4">Binding Arbitration</h3>
        <p>If a dispute cannot be resolved informally, the parent or guardian (on behalf of themselves and any minor user) and Inbox Athletics LLC agree to resolve it through binding individual arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, rather than in court. The arbitration will be conducted in New Jersey or by videoconference at either party&apos;s election.</p>
        <p>For users who are 18 or older, this arbitration agreement binds the user directly.</p>

        <h3 className="text-lg font-semibold mt-4">Class Action Waiver</h3>
        <p><strong>All disputes must be resolved on an individual basis. Neither you nor your minor child may participate in a class action lawsuit or class-wide arbitration against Inbox Athletics. This waiver is agreed to by the parent or guardian on behalf of themselves and their minor child at the time of account creation.</strong></p>

        <h3 className="text-lg font-semibold mt-4">Exceptions</h3>
        <p>Either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm, including unauthorized use of intellectual property or platform security threats. Claims within the jurisdiction of small claims court may also be brought there without first proceeding to arbitration.</p>

        <h3 className="text-lg font-semibold mt-4">Right to Opt Out</h3>
        <p>If you do not wish to be bound by arbitration, you may opt out by sending written notice to <a className="text-blue-600 underline" href="mailto:support@inboxathletics.com">support@inboxathletics.com</a> within 30 days of first creating an account. Opting out does not affect any other provision of these Terms.</p>

        <h3 className="text-lg font-semibold mt-4">Governing Law</h3>
        <p>These Terms are governed by the laws of the State of New Jersey, without regard to conflict of law principles.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">15. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. When we make material changes, we will notify you by email and/or a prominent notice within the platform at least <strong>14 days before</strong> the changes take effect. Your continued use of the Service after the effective date constitutes your acceptance of the updated Terms.</p>
        <p>If you do not agree to the updated Terms, you may cancel your account before the changes take effect.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">16. Miscellaneous</h2>
        <ul className="list-disc list-inside">
          <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Inbox Athletics LLC regarding the Service.</li>
          <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</li>
          <li><strong>No Waiver:</strong> Our failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce it in the future.</li>
          <li><strong>Assignment:</strong> You may not assign your rights under these Terms without our written consent. We may assign our rights in connection with a merger, acquisition, or sale of assets.</li>
        </ul>

        <hr />

        <h2 className="text-xl font-semibold mt-6">17. Contact</h2>
        <p>For questions about these Terms:</p>
        <p>
          <strong>Inbox Athletics LLC</strong><br />
          Email: <a className="text-blue-600 underline" href="mailto:support@inboxathletics.com">support@inboxathletics.com</a><br />
          Website: <a className="text-blue-600 underline" href="https://www.inboxathletics.com">www.inboxathletics.com</a>
        </p>
      </div>
    </main>
  )
}
