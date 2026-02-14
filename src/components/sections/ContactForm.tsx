"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

// Formspree endpoint - Chi needs to create a free account at formspree.io
// and replace this with their form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
            "Something went wrong. Please try again or contact via WhatsApp."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again or contact via WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-background rounded-xl p-8 shadow-soft text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-semibold text-text mb-3">
          Message Sent
        </h3>
        <p className="text-text-muted font-body">
          Thank you for reaching out. I will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-primary-dark hover:underline text-sm font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputStyles =
    "w-full px-4 py-3 rounded-lg border border-sand bg-background font-body text-text placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors duration-300";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background rounded-xl p-8 shadow-soft space-y-5"
    >
      <h3 className="font-heading text-2xl font-semibold text-text mb-2">
        Send a Message
      </h3>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputStyles}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputStyles}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text mb-1.5">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={inputStyles}
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputStyles + " resize-y"}
          placeholder="Tell me what you need..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
