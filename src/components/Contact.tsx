import { useState } from "react";
import { useForm } from "react-hook-form";
import { emailRules, formFailure, formSuccess, nameRules, subjectRules, type FormValues } from "../data/portfolio";
import { sendToFormspree } from "../../lib/utils";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ErrorMessage({ message, id }: { message?: string; id: string }) {
  return message ? (
    <p id={id} className="mt-2 text-sm font-semibold text-error" role="alert">
      {message}
    </p>
  ) : null;
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onChange", reValidateMode: "onChange" });

  const [status, setStatus] = useState("");
  const subject = watch("subject") || "";
  const { executeRecaptcha } = useGoogleReCaptcha();
  const onSubmit = async (data: FormValues) => {
    setStatus("");

    if (!executeRecaptcha) {
      setStatus(formFailure);
      return;
    }

    const token = await executeRecaptcha("contact_form");

    const response = await sendToFormspree({ ...data, "g-recaptcha-response": token });

    if (response.ok) {
      reset();
      setStatus(formSuccess);
    } else {
      setStatus(formFailure);
    }
  };
  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1fr] lg:px-8 lg:py-28">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 className="section-title mt-4">Let's get in touch</h2>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
          Want to discuss anything? I'm open to new projects and ideas. Feel free to leave a message, and I'll reply ASAP.
        </p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            Name
            <input
              className="field-input"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
              {...register("name", nameRules)}
            />
            {errors.name && <ErrorMessage id="name-error" message={errors.name?.message} />}
          </label>
          <label className="field-label">
            Email
            <input
              className="field-input"
              type="email"
              placeholder="email@example.com"
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              {...register("email", emailRules)}
            />
            {errors.email && <ErrorMessage id="email-error" message={errors.email?.message} />}
          </label>
        </div>
        <div className="flex flex-col">
          <label className="field-label">Subject</label>
          <textarea
            className="field-input min-h-32 resize-y"
            placeholder="Your message here"
            aria-invalid={!!errors.subject}
            aria-describedby="subject-error"
            {...register("subject", subjectRules)}
          />
          <div className="flex items-center">
            {errors.subject && <ErrorMessage id="subject-error" message={errors.subject?.message} />}
            <span className={`mt-2 text-xs ml-auto ${subject.length > 500 ? "text-error" : "text-muted-foreground"}`} aria-live="polite">
              {subject.length} / 500
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="button-primary cursor-pointer flex justify-center" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
          <p role="status" aria-live="polite" className={`text-center text-sm ${status !== "" && "text-error"} text-muted-foreground`}>
            {status}
          </p>
        </div>
      </form>
    </section>
  );
}
