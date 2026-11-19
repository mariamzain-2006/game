import { useState } from 'react';

const Contact = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      surname: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div id="contact-us" className="w-full">
      {/* بانر الصفحة */}
      <section
        style={{
          background:
            'linear-gradient(120deg, #0071f8 0%, #0d79ff 55%, #2488ff 100%)',
        }}
        className="relative w-full text-white pt-36 sm:pt-44 pb-24 sm:pb-32 rounded-b-[90px] sm:rounded-b-[130px] lg:rounded-b-[170px] overflow-hidden text-center"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-32 w-[620px] h-[620px] sm:w-[820px] sm:h-[820px] rounded-full bg-white/[0.08]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-6 -right-12 w-[480px] h-[480px] sm:w-[660px] sm:h-[660px] rounded-full bg-white/[0.11]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide mb-4">
            CONTACT US
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="text-sm sm:text-base font-medium text-white/95"
          >
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>
            <span className="mx-2">&gt;</span>
            <span>Contact Us</span>
          </nav>
        </div>
      </section>

      {/* محتوى صفحة Contact Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* العمود الأيسر: Say Hello + بيانات التواصل */}
          <div className="lg:col-span-6 bg-[#f7f7f7] rounded-[25px] p-8 sm:p-12">
            <span className="text-[#ee626b] font-bold uppercase text-xs sm:text-sm tracking-wider block mb-2">
              CONTACT US
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e] mb-6">
              Say Hello!
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-8 text-sm sm:text-base">
              LUGX Gaming Template is based on the latest Bootstrap 5 CSS
              framework. This template is provided by TemplateMo and it is
              suitable for your gaming shop ecommerce websites. Feel free to use
              this for any purpose. Thank you.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#1e1e1e] mb-1">
                  Address
                </h3>
                <p className="text-sm text-[#7a7a7a]">
                  Sunny Isles Beach, FL 33160, United States
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#1e1e1e] mb-1">Phone</h3>
                <p className="text-sm text-[#7a7a7a]">+123 456 7890</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#1e1e1e] mb-1">Email</h3>
                <p className="text-sm text-[#7a7a7a]">lugx@contact.com</p>
              </div>
            </div>
          </div>

          {/* العمود الأيمن: الخريطة + فورم إرسال الرسالة */}
          <div className="lg:col-span-6 space-y-8">
            <div className="w-full h-72 sm:h-80 rounded-[25px] overflow-hidden shadow-sm bg-[#f7f7f7]">
              <iframe
                title="Sunny Isles Beach Map"
                src="https://www.google.com/maps?q=Sunny+Isles+Beach,+FL+33160&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name..."
                  className="w-full h-12 px-5 rounded-full bg-[#f7f7f7] border border-gray-200 text-sm text-[#1e1e1e] placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#0071f8]"
                />
                <input
                  type="text"
                  name="surname"
                  required
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Your Surname..."
                  className="w-full h-12 px-5 rounded-full bg-[#f7f7f7] border border-gray-200 text-sm text-[#1e1e1e] placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#0071f8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your E-mail..."
                  className="w-full h-12 px-5 rounded-full bg-[#f7f7f7] border border-gray-200 text-sm text-[#1e1e1e] placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#0071f8]"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject..."
                  className="w-full h-12 px-5 rounded-full bg-[#f7f7f7] border border-gray-200 text-sm text-[#1e1e1e] placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#0071f8]"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-5 rounded-[25px] bg-[#f7f7f7] border border-gray-200 text-sm text-[#1e1e1e] placeholder:text-[#7a7a7a] focus:outline-none focus:border-[#0071f8] resize-y"
              />

              {submitted && (
                <p className="text-sm font-medium text-[#0071f8]">
                  Your message has been sent successfully!
                </p>
              )}

              <button
                type="submit"
                className="h-12 px-7 rounded-full bg-[#ee626b] hover:bg-[#0071f8] text-white font-semibold uppercase text-xs sm:text-sm tracking-wider transition-colors cursor-pointer"
              >
                SEND MESSAGE NOW
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;