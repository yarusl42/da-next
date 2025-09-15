import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import contactImage from "@/assets/about/about.avif";

interface ContactProps {
  id?: string;
}

const Contact = ({ id = "contact" }: ContactProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contactInView = useInView(sectionRef, { once: true });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(null);
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const payload = {
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        message: String(fd.get("message") || ""),
      };
      const res = await fetch("https://adamskaya.at/api/notify/skynex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted("ok");
      form.reset();
    } catch (err) {
      setSubmitted("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-section relative z-10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 [900px]:px-6">
        <div className="flex flex-row max-[900px]:flex-col gap-12 max-[900px]:gap-8 items-start">
          <motion.div 
            className="shrink-0 sm:self-center sm:mb-8"
            initial={{ opacity: 0, rotateY: -90, x: -100 }}
            animate={contactInView ? { opacity: 1, rotateY: 0, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={contactImage}
              alt="Professional team collaboration"
              width={370}
              height={476}
              className="w-full max-w-[370px] h-auto object-cover rounded-3xl shadow-strong rotate-[-2deg] mx-auto"
              priority
            />
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <Card className="w-full p-6 [900px]:p-8 pt-0 bg-transparent shadow-none border-0">
              <CardContent className="p-0">
                <h2 className="text-4xl [900px]:text-5xl font-antonio font-bold mb-4">
                  Let's Work Together
                </h2>
                <p className="text-base [900px]:text-lg mb-8">
                  Ready to transform your online presence? Let's discuss your project and create something amazing together.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-primary mb-2">Name</label>
                      <Input name="name" className="bg-gray-200 border border-gray-300 font-light placeholder:text-gray-500 placeholder:font-sans rounded-full py-3 px-5" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm text-primary mb-2">Email</label>
                      <Input name="email" className="bg-gray-200 border border-gray-300 font-light placeholder:text-gray-500 placeholder:font-sans rounded-full py-3 px-5" type="email" placeholder="john.smith@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-primary mb-2">Message</label>
                    <Textarea name="message" className="bg-gray-200 border border-gray-300 font-light placeholder:text-gray-500 placeholder:font-sans rounded-2xl py-3 px-5" rows={5} placeholder="Hello! I'd like to enquire about..." />
                  </div>
                  <Button type="submit" variant="ghost" disabled={submitting} className="text-[20px] [900px]:text-[26px] h-11 [900px]:h-12 px-8 [900px]:px-10">
                    {submitting ? "Sending..." : "Get Started"}
                  </Button>
                  {submitted === "ok" && (
                    <div className="text-sm text-primary mt-2">Thanks! We’ll get back to you shortly.</div>
                  )}
                  {submitted === "error" && (
                    <div className="text-sm text-red-600 mt-2">Something went wrong. Please try again.</div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
