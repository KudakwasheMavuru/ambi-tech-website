"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { contactPage } from "@/content/site";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  org: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: FormState = { name: "", org: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (v: FormState): Errors => {
    const next: Errors = {};
    if (!v.name.trim()) next.name = "Please enter your name.";
    if (!v.email.trim()) next.email = "Please enter your email.";
    else if (!emailPattern.test(v.email)) next.email = "Enter a valid email address.";
    if (!v.message.trim()) next.message = "Tell us a little about what you need.";
    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // TODO(client): wire this up to a real endpoint (e.g. an API route or form service like Formspree).
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setValues(initialState);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <CheckCircle2 className="size-10 text-teal-deep" aria-hidden="true" />
        <p className="font-display text-lg font-semibold text-ink">Message sent</p>
        <p className="max-w-sm text-sm text-muted">
          Thanks for reaching out — someone from AMBI Tech will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-teal-deep underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label={contactPage.form.fields.name}
          name="name"
          value={values.name}
          onChange={(v) => setValues((s) => ({ ...s, name: v }))}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label={contactPage.form.fields.org}
          name="org"
          value={values.org}
          onChange={(v) => setValues((s) => ({ ...s, org: v }))}
          autoComplete="organization"
        />
      </div>

      <Field
        label={contactPage.form.fields.email}
        name="email"
        type="email"
        value={values.email}
        onChange={(v) => setValues((s) => ({ ...s, email: v }))}
        error={errors.email}
        autoComplete="email"
      />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          {contactPage.form.fields.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-xl border border-teal-mid/25 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus-visible:border-teal-deep"
          placeholder="A few sentences about your project or need"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="mt-2 justify-center disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </span>
        ) : (
          contactPage.form.submitLabel
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-teal-mid/25 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus-visible:border-teal-deep"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
