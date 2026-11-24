"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

interface FormState {
  fullName: string;
  phone: string;
  course: string;
  preferredTime: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  course?: string;
  preferredTime?: string;
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    course: "",
    preferredTime: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = t.form.errors.fullName;
    }
    const cleanPhone = form.phone.replace(/[\s\-()]/g, "");
    if (!cleanPhone || !/^\+?\d{7,15}$/.test(cleanPhone)) {
      nextErrors.phone = t.form.errors.phone;
    }
    if (!form.course) {
      nextErrors.course = t.form.errors.course;
    }
    if (!form.preferredTime) {
      nextErrors.preferredTime = t.form.errors.preferredTime;
    }
    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 750));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ fullName: "", phone: "", course: "", preferredTime: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div
      id="enrollment-form"
      className="lg:col-span-6 bg-white text-navy rounded-3xl p-5 sm:p-8 shadow-2xl border border-slate-100"
    >
      <h3 className="font-display font-extrabold uppercase tracking-tight text-xl sm:text-2xl text-navy text-center mb-6">
        {t.form.heading}
      </h3>

      {submitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-display font-bold text-xl text-navy">
            {t.form.successTitle}
          </h4>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            {t.form.successBody}
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            {t.form.submitAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                {t.form.fullNameLabel} <span className="text-orange">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder={t.form.fullNamePlaceholder}
                value={form.fullName}
                onChange={(e) => {
                  setForm({ ...form, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-electric focus:ring-electric/20"
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                {t.form.phoneLabel} <span className="text-orange">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder={t.form.phonePlaceholder}
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-electric focus:ring-electric/20"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                {t.form.courseLabel} <span className="text-orange">*</span>
              </label>
              <select
                id="course"
                name="course"
                required
                value={form.course}
                onChange={(e) => {
                  setForm({ ...form, course: e.target.value });
                  if (errors.course) setErrors({ ...errors, course: undefined });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-white text-navy focus:outline-none focus:ring-2 transition-all ${
                  errors.course
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-electric focus:ring-electric/20"
                }`}
              >
                <option value="">{t.form.coursePlaceholder}</option>
                {t.courses.items.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
              {errors.course && (
                <p className="text-xs text-red-600 mt-1">{errors.course}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredTime"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                {t.form.timeLabel} <span className="text-orange">*</span>
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                required
                value={form.preferredTime}
                onChange={(e) => {
                  setForm({ ...form, preferredTime: e.target.value });
                  if (errors.preferredTime)
                    setErrors({ ...errors, preferredTime: undefined });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-white text-navy focus:outline-none focus:ring-2 transition-all ${
                  errors.preferredTime
                    ? "border-red-500 focus:ring-red-200"
                    : "border-slate-200 focus:border-electric focus:ring-electric/20"
                }`}
              >
                <option value="">{t.form.timePlaceholder}</option>
                {t.form.times.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.preferredTime && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.preferredTime}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark disabled:opacity-70 text-white font-semibold text-base px-6 py-3.5 rounded-full shadow-lg shadow-orange/25 transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.form.submitting}</span>
              </>
            ) : (
              <>
                <span>{t.form.submit}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
