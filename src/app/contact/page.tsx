import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoiseBg from "@/components/NoiseBg";
import ChatWidget from "@/components/ChatWidget";
import Contact from "@/components/Contact";
import { CONTACT } from "@/data/contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen relative">
      <NoiseBg />
      <Header />
      <main className="relative">
        <section className="py-section relative z-10">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="space-y-12">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-antonio font-bold mb-5">Get in Touch</h1>
                <p className="text-base leading-relaxed max-w-3xl">
                  We’d love to hear about your business. Whether you’re ready to start or just exploring options,
                  our team will help you find the right path forward.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div>
                  <div className="text-base font-semibold">Call Today :</div>
                  <div className="text-base">{CONTACT.phone}</div>
                </div>
                <div>
                  <div className="text-base font-semibold">Email :</div>
                  <div className="text-base">{CONTACT.email}</div>
                </div>
                <div>
                  <div className="text-base font-semibold">Follow us :</div>
                  <div className="flex flex-wrap gap-3 md:gap-4 text-base">
                    <a className="underline" href={CONTACT.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
                    <a className="underline" href={CONTACT.socials.twitter} target="_blank" rel="noreferrer">Twitter</a>
                    <a className="underline" href={CONTACT.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
                    <a className="underline" href={CONTACT.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="underline" href={CONTACT.socials.reddit} target="_blank" rel="noreferrer">Reddit</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <Contact id="contact" />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default ContactPage;
