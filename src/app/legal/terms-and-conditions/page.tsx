import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>

      <p className="mb-4">
        Welcome to{" "}
        <a
          href="https://zyforge.com"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zyforge
        </a>
        . By accessing or using this website, you agree to abide by these Terms
        & Conditions. If you disagree with any part of these terms, please do
        not use our site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of the Website</h2>
      <p className="mb-4">
        You may use our site for lawful purposes only. You agree not to misuse
        the site (for example, by interfering with it, introducing viruses, or
        attempting unauthorized access). We reserve the right to restrict or
        block access to any user for violation of these rules.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Intellectual Property
      </h2>
      <p className="mb-4">
        All content on Zyforge — including text, graphics, logos, images, and
        software — is the property of Zyforge or its licensors and is protected
        by copyright, trademark, and other laws. You may not reproduce,
        distribute, modify, or create derivative works from our content without
        prior written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Disclaimers &amp; Limitations of Liability
      </h2>
      <p className="mb-4">
        The site is provided “as is” and “as available” without warranties of
        any kind, either express or implied. To the maximum extent permitted by
        law, Zyforge disclaims all warranties, including but not limited to
        merchantability, fitness for a particular purpose, non-infringement, and
        accuracy of content.
      </p>
      <p className="mb-4">
        Under no circumstances will Zyforge be liable for any indirect,
        incidental, special, consequential or punitive damages arising from your
        use (or inability to use) the site, even if we’ve been advised of the
        possibility of such damages.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Links</h2>
      <p className="mb-4">
        You may find links to external websites on Zyforge. We do not control
        those sites and are not responsible for their content, policies, or any
        damages resulting from their use. Linking to other sites does not imply
        endorsement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms &amp; Conditions from time to time. Changes
        take effect when posted on this page. It is your responsibility to check
        this page periodically. Continued use of the site after changes means
        you accept the new terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Governing Law</h2>
      <p className="mb-4">
        These terms are governed by the laws of the Philippines. Any dispute
        arising under or in connection with these Terms shall be subject to the
        exclusive jurisdiction of the courts in the Philippines.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have questions about these Terms &amp; Conditions, reach out to
        us at:
      </p>
      <p className="mb-4">
        Email:{" "}
        <a
          href="mailto:zyforge.dev@gmail.com"
          className="text-blue-600 underline"
        >
          zyforge.dev@gmail.com
        </a>
      </p>

      <p className="text-sm text-gray-500">Last Updated: September 27, 2025</p>
    </div>
  );
};

export default TermsAndConditionsPage;
