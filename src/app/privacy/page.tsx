export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-[70vh]">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-wider">
          Privacy <span className="text-[#00f0ff]">Policy</span>
        </h1>
        <div className="w-24 h-1 bg-[#00f0ff] mb-6 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            NextgridIT collects only the information needed to respond to inquiries, assess project fit, and deliver requested services. We do not sell inquiry data or use it for unrelated marketing.
          </p>
          <p>
            If you contact us by email or through the website, we may retain your message and contact details so we can follow up, scope work, and maintain service records when an engagement begins.
          </p>
          <p>
            If you need details about data retention, deletion requests, or security handling for a specific engagement, contact <a className="text-[#39ff14] hover:text-[#00f0ff] transition-colors" href="mailto:contact@nextgridit.com">contact@nextgridit.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
