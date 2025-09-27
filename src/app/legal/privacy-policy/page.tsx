import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At{" "}
        <a
          href="https://zyforge.com"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zyforge
        </a>
        , we value your privacy and are committed to protecting the personal
        information you share with us. This Privacy Policy explains what
        information we collect and how we use it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="mb-4">
        The only personal information we collect is what you voluntarily provide
        through the contact section of our website. This may include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Name</li>
        <li>Email address</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        We use the information you provide solely to respond to your inquiries.
        We do not sell, trade, or share your information with third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Data Retention</h2>
      <p className="mb-4">
        Emails and the personal details you provide will be automatically
        deleted after 2 months. This ensures we only keep your information as
        long as it is necessary to respond to your inquiry.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Security</h2>
      <p className="mb-4">
        We take reasonable steps to protect your information from unauthorized
        access. However, please note that no method of internet transmission or
        electronic storage is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You may request access to or deletion of your information at any time by
        contacting us. If you do so, we will delete your details immediately,
        even before the 2-month period.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please reach out to
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

export default PrivacyPolicyPage;
