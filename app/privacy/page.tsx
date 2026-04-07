import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/" className="inline-block mb-8">
        <img src="/inbox-athletics-logo-without-tagline.svg" alt="Inbox Athletics" className="h-8 w-auto" />
      </Link>
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-8">
        <strong>Inbox Athletics LLC</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to being transparent about how we handle your data. This Privacy Policy explains what information we collect, how we use it, who we share it with, and what rights you have — including specific disclosures required for our use of Google account data.
      </p>
      <p className="mb-8"><strong>Effective Date:</strong> February 18, 2026</p>
      <div className="prose prose-blue max-w-none">
        <hr />

        <h2 className="text-xl font-semibold mt-6">1. Who We Are and Who This Policy Covers</h2>
        <p>Inbox Athletics LLC operates the Inbox Athletics platform, a recruiting communication tool designed for high school student-athletes (ages 13–18) and their families. Because many of our users are minors, we take data privacy seriously and apply heightened care to how we collect, use, and protect personal information.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">2. Information We Collect</h2>

        <h3 className="text-lg font-semibold mt-4">a. Information You Provide Directly</h3>
        <ul className="list-disc list-inside">
          <li>Name, email address, phone number, graduation year, school, sport, and position</li>
          <li>Profile information such as GPA, recruiting status, and athletic highlights</li>
          <li>Coach contact information and notes you enter manually</li>
          <li>Messages and content you compose within the platform</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">b. Information We Collect Automatically</h3>
        <ul className="list-disc list-inside">
          <li>Usage data: how you interact with the platform (pages visited, features used, actions taken)</li>
          <li>Device and browser information</li>
          <li>IP address and approximate location (city/region level)</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">c. Google Account Data (Gmail Integration)</h3>
        <p>When you connect your Google account, we request access to the following Google OAuth scopes:</p>
        <table className="w-full text-left border-collapse my-4">
          <thead>
            <tr>
              <th className="border-b border-border py-2 pr-4 font-semibold">Scope</th>
              <th className="border-b border-border py-2 font-semibold">What It Enables</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-border py-2 pr-4"><code>gmail.readonly</code></td>
              <td className="border-b border-border py-2">Reading your recruiting-related emails to populate your inbox and relationship history</td>
            </tr>
            <tr>
              <td className="border-b border-border py-2 pr-4"><code>gmail.send</code></td>
              <td className="border-b border-border py-2">Sending emails to coaches on your behalf from within the platform</td>
            </tr>
            <tr>
              <td className="border-b border-border py-2 pr-4"><code>gmail.compose</code></td>
              <td className="border-b border-border py-2">Creating and pre-filling draft emails using AI-assisted suggestions</td>
            </tr>
            <tr>
              <td className="border-b border-border py-2 pr-4"><code>userinfo.email</code> / <code>profile</code></td>
              <td className="border-b border-border py-2">Identifying your Google account to connect it to your Inbox Athletics profile</td>
            </tr>
          </tbody>
        </table>
        <p><strong>What we access from Gmail:</strong> We access email body content, subject lines, sender and recipient information, and message timestamps — but only for emails relevant to your recruiting communications. We use this data to power your recruiting inbox, assess your coach relationships, and help you draft outreach.</p>
        <p><strong>What we store:</strong> We store full email body content in our database while your account is active. This is necessary to provide relationship health assessments and AI-assisted content drafting across sessions.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">3. How We Use Your Information</h2>
        <p>We use the information we collect solely to operate and improve the Inbox Athletics platform. Specifically:</p>
        <ul className="list-disc list-inside">
          <li>To display and organize your recruiting communications in one place</li>
          <li>To analyze your coach relationships and surface recruiting insights</li>
          <li>To assist you in drafting emails, subject lines, and follow-up messages using AI</li>
          <li>To extract coach contact information from your email history and populate your recruiting network</li>
          <li>To send you service notifications and platform updates</li>
          <li>To understand how features are being used so we can improve the product (using anonymized, aggregated behavioral data)</li>
        </ul>
        <p><strong>We do not use your data to serve advertisements.</strong> We do not build advertising profiles. We do not sell your personal information or your Google account data to any third party.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">4. Google API Data — Limited Use Disclosure</h2>
        <p>Our use of data obtained through Google APIs complies with the <a className="text-blue-600 underline" href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
        <p>Specifically:</p>
        <ul className="list-disc list-inside">
          <li>We use Google account data <strong>only</strong> to provide the features described in this Privacy Policy — organizing recruiting communications, assessing coach relationships, and assisting with email drafting.</li>
          <li>We do <strong>not</strong> use Google account data to develop, improve, or train generalized AI or machine learning models.</li>
          <li>We do <strong>not</strong> transfer Google account data to third parties except as necessary to provide the features you have requested, as described in Section 6 below.</li>
          <li>We do <strong>not</strong> allow humans to read your Gmail content except: (a) with your explicit permission; (b) as necessary for security or abuse investigation; or (c) as required by law.</li>
          <li>We do <strong>not</strong> use Gmail data for any purpose that is not directly related to your use of Inbox Athletics.</li>
        </ul>

        <hr />

        <h2 className="text-xl font-semibold mt-6">5. AI-Powered Features and Data Processing</h2>
        <p>Inbox Athletics uses artificial intelligence to power several core features, including email drafting assistance, subject line suggestions, coach contact extraction, and relationship analysis. To provide these features, we send relevant data to third-party AI providers.</p>

        <h3 className="text-lg font-semibold mt-4">Anthropic (Claude)</h3>
        <p>We use Anthropic&apos;s Claude API to power features including email drafting, subject line generation, and coach contact extraction from email history. This may involve sending email body content, subject lines, and sender/recipient metadata to Anthropic&apos;s API for processing. Anthropic processes this data on our behalf and is contractually prohibited from using it for their own purposes. For more information, see <a className="text-blue-600 underline" href="https://www.anthropic.com/privacy">Anthropic&apos;s Privacy Policy</a>.</p>

        <h3 className="text-lg font-semibold mt-4">Google (Gemini)</h3>
        <p>We use Google&apos;s Gemini API (Gemini 2.5 Flash) to power high-volume analytical features including message classification, tone analysis, intent parsing, and thread summarization. These features analyze your recruiting communications to help organize your inbox and surface insights about your coach relationships. This may involve sending email body content, subject lines, and sender/recipient metadata to Google&apos;s Gemini API for processing. Google processes this data on our behalf as a service provider. For more information, see <a className="text-blue-600 underline" href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</a>.</p>

        <p>Data sent to AI providers is used only to generate responses for your specific request. It is not used to train AI models on your personal information.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">6. How We Share Your Information</h2>
        <p>We do not sell your personal information. We share data only in the following limited circumstances:</p>
        <ul className="list-disc list-inside">
          <li><strong>AI Processing Partners:</strong> As described in Section 5, we share relevant email and message content with Anthropic and Google to power AI features. These providers act as data processors on our behalf.</li>
          <li><strong>Infrastructure and Hosting Providers:</strong> We use third-party services for hosting, database management, and authentication (including Auth0 for login). These providers access data only as necessary to perform services for us.</li>
          <li><strong>Analytics:</strong> We use PostHog for product analytics. PostHog receives anonymized behavioral and UI event data only — it does not receive email content, coach data, or any personally identifiable recruiting information.</li>
          <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect the rights, safety, or property of Inbox Athletics, our users, or the public.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before your data becomes subject to a different privacy policy.</li>
        </ul>

        <hr />

        <h2 className="text-xl font-semibold mt-6">7. Data Retention</h2>
        <p><strong>While your account is active:</strong> We retain your profile information, coach contacts, notes, and email content for as long as your account is active and in good standing.</p>
        <p><strong>After disconnecting your Google account:</strong> If you disconnect your Google account but keep your Inbox Athletics account, we will delete your cached email body content within <strong>30 days</strong> of disconnection. Your coach contacts, notes, profile, and other non-email data will remain in your account unless you delete it manually.</p>
        <p><strong>After account deletion:</strong> When you delete your Inbox Athletics account, we delete your personal data within <strong>30 days</strong>, except where we are required to retain certain records for legal or compliance purposes (e.g., billing records).</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">8. Disconnecting Google Account Access</h2>
        <p>You can disconnect your Google account from Inbox Athletics at any time through your account settings, or by revoking access directly through your <a className="text-blue-600 underline" href="https://myaccount.google.com/permissions">Google Account permissions page</a>. Revoking access through Google will immediately stop our ability to access your Gmail data going forward. Cached email content will be purged within 30 days as described in Section 7.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">9. Data Security</h2>
        <p>We take the security of your data seriously, particularly given that we handle email content and communications with college coaches. Our security measures include:</p>
        <ul className="list-disc list-inside">
          <li>All data transmitted between your device and our servers is encrypted using TLS (Transport Layer Security)</li>
          <li>Email content and personal data stored in our database is encrypted at rest</li>
          <li>Google OAuth tokens are stored securely and never in plaintext</li>
          <li>Access to production data is limited to authorized personnel only</li>
          <li>We conduct periodic reviews of our security practices</li>
        </ul>
        <p>No method of data transmission or storage is 100% secure. If you believe your account has been compromised, please contact us immediately at <a className="text-blue-600 underline" href="mailto:security@inboxathletics.com">security@inboxathletics.com</a>.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">10. Children&apos;s Privacy and Parental Consent</h2>
        <p>Inbox Athletics is designed for student-athletes ages 13 and older. We do not knowingly collect personal information from children under 13. If we learn that we have collected data from a child under 13 without verifiable parental consent, we will delete that information promptly.</p>
        <p><strong>Users ages 13–17:</strong> Because many of our users are minors, we notify parents and guardians at the time of account creation. When a user under 18 signs up, we send an informational email to the parent or guardian email address provided at signup. That email explains what Inbox Athletics is, what data we collect (including name, athletic profile, and email communications with college coaches), how it is used, and the rights parents have to review, delete, or stop further collection of their child&apos;s information.</p>
        <p>Parents and guardians may exercise the following rights at any time by contacting us at <a className="text-blue-600 underline" href="mailto:privacy@inboxathletics.com">privacy@inboxathletics.com</a>:</p>
        <ul className="list-disc list-inside">
          <li>Review the personal information we have collected from their child</li>
          <li>Request deletion of their child&apos;s personal information</li>
          <li>Refuse to allow any further collection or use of their child&apos;s information</li>
        </ul>
        <p>We do not use data from users under 18 for advertising, profiling, or any purpose beyond providing the recruiting platform features described in this policy.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">11. Your Rights and Choices</h2>
        <p>Regardless of where you live, you have the following rights with respect to your personal data:</p>
        <ul className="list-disc list-inside">
          <li><strong>Access:</strong> You can view your profile information and coach data through your account settings.</li>
          <li><strong>Correction:</strong> You can update your personal information at any time through account settings.</li>
          <li><strong>Deletion:</strong> You can request deletion of your account and associated data by contacting us at <a className="text-blue-600 underline" href="mailto:privacy@inboxathletics.com">privacy@inboxathletics.com</a> or through account settings.</li>
          <li><strong>Data Export:</strong> You can request an export of your coach contacts, notes, and communication history before closing your account.</li>
          <li><strong>Disconnect Google:</strong> You can revoke Gmail access at any time without deleting your account (see Section 8).</li>
          <li><strong>Opt Out of Promotional Communications:</strong> You can opt out of non-essential emails using the unsubscribe link in any promotional message.</li>
        </ul>
        <p><strong>California Residents (CCPA):</strong> You have the right to know what personal information we collect, request deletion, and opt out of the sale of personal information (we do not sell personal information). To exercise these rights, contact <a className="text-blue-600 underline" href="mailto:privacy@inboxathletics.com">privacy@inboxathletics.com</a>.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">12. Third-Party Links and Services</h2>
        <p>The platform may contain links to third-party websites or resources (e.g., college athletic department pages). We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">13. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we make material changes — particularly changes affecting how we use Google account data or AI processing — we will notify you via email and/or a prominent notice within the platform at least 14 days before the changes take effect. Your continued use of the platform after that date constitutes acceptance of the updated policy.</p>

        <hr />

        <h2 className="text-xl font-semibold mt-6">14. Contact Us</h2>
        <p>If you have questions, concerns, or requests related to this Privacy Policy, please contact us:</p>
        <p>
          <strong>Inbox Athletics LLC</strong><br />
          Email: <a className="text-blue-600 underline" href="mailto:privacy@inboxathletics.com">privacy@inboxathletics.com</a><br />
          Website: <a className="text-blue-600 underline" href="https://www.inboxathletics.com">www.inboxathletics.com</a>
        </p>
        <p>For security-related concerns: <a className="text-blue-600 underline" href="mailto:security@inboxathletics.com">security@inboxathletics.com</a></p>
      </div>
    </main>
  )
}
