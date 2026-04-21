import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,15}$/, { message: "Please enter a valid phone number" }),
});

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse({ name, phone });
    if (!result.success) {
      const fieldErrors: { name?: string; phone?: string } = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as "name" | "phone";
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({
      title: "Consultation requested",
      description: "Our solar expert will reach out to you shortly.",
    });
    setName("");
    setPhone("");
  };

  const channels = [
    { icon: "call", label: "For Phone Calls", value: "+91 6005280698", bg: "bg-surface-container", iconColor: "text-on-surface" },
    { icon: "chat", label: "WhatsApp Messages", value: "+91 7006737200", bg: "bg-tertiary-container/40", iconColor: "text-tertiary", cta: "Chat Now" },
    { icon: "mail", label: "Email Us", value: "karsaazsolar@gmail.com", bg: "bg-surface-container", iconColor: "text-on-surface" },
  ];

  return (
    <div className="bg-surface-container-low text-on-surface font-body min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-8 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6">
            Let's talk solar.
          </h1>
          <p className="text-secondary text-lg max-w-xl mx-auto leading-relaxed">
            Whether you have technical questions or are ready to install, our team is here to help.
          </p>
        </section>

        {/* Contact channels */}
        <section className="max-w-7xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c) => (
              <div
                key={c.label}
                className="bg-card rounded-[2rem] p-10 text-center flex flex-col items-center shadow-sm"
              >
                <div className={`w-14 h-14 rounded-full ${c.bg} flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined ${c.iconColor}`}>{c.icon}</span>
                </div>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-secondary mb-3">
                  {c.label}
                </p>
                <p className="font-headline font-bold text-xl mb-4">{c.value}</p>
                {c.cta && (
                  <a
                    href={`https://wa.me/${c.value.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-tertiary text-tertiary-foreground px-6 py-2 rounded-full font-label font-bold text-sm hover:opacity-90 transition-all"
                  >
                    {c.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-8 mb-16">
          <div className="bg-card rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h3 className="font-headline font-extrabold text-2xl mb-3">Our Branches</h3>
            <p className="text-secondary text-base leading-relaxed">
              Pulwama | Sangrama | Sopore
            </p>
          </div>
        </section>

        {/* Booking form */}
        <section className="max-w-3xl mx-auto px-8">
          <div className="bg-card rounded-[2rem] p-10 md:p-12 shadow-sm">
            <h2 className="font-headline font-extrabold text-2xl md:text-3xl mb-8">
              Book a Free Consultation
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <label className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wider">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  maxLength={100}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-card transition-all placeholder:text-outline-variant outline-none text-on-surface"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wider">
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  maxLength={20}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 999 999 9999"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-card transition-all placeholder:text-outline-variant outline-none text-on-surface"
                />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-inverse-surface text-inverse-on-surface py-5 rounded-2xl font-headline font-bold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Done
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
