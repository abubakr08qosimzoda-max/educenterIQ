"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import gsap from "gsap";
import { Bot, Minimize2, Send, Sparkles, X } from "lucide-react";
import { ChatMessage, getDemoChatbotReply } from "@/lib/chatbot";
import { prefersReducedMotion } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

export default function AIChatbot() {
  const { locale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: t.floating.welcome,
      timestamp: "Now",
      isDemo: true,
    },
  ]);

  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === "welcome") {
        return [{ ...prev[0], content: t.floating.welcome }];
      }
      return prev;
    });
  }, [t.floating.welcome]);

  useEffect(() => {
    if (prefersReducedMotion() || !btnRef.current) return;
    gsap.fromTo(
      btnRef.current,
      { scale: 0.5, opacity: 0, y: 16 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, delay: 0.85, ease: "back.out(1.7)" }
    );
  }, []);

  useEffect(() => {
    if (isOpen && panelRef.current && !prefersReducedMotion()) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen, isMinimized]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, locale }),
      });

      let replyText: string;
      if (res.ok) {
        const data = await res.json();
        replyText = data.reply || getDemoChatbotReply(trimmed, locale);
      } else {
        replyText = getDemoChatbotReply(trimmed, locale);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "assistant",
          content: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isDemo: true,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "assistant",
          content: getDemoChatbotReply(trimmed, locale),
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isDemo: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <div className="group relative flex items-center justify-end">
        <span
          role="tooltip"
          className="pointer-events-none hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-navy text-white text-xs font-semibold shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all whitespace-nowrap border border-white/10"
        >
          {t.floating.chatbotTooltip}
        </span>

        <button
          ref={btnRef}
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setIsMinimized(false);
          }}
          aria-label={t.floating.chatbotTooltip}
          title={t.floating.chatbotTooltip}
          aria-expanded={isOpen}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-electric to-[#6D28D9] text-white shadow-[0_8px_28px_rgba(82,107,255,0.55)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-electric/40"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={t.floating.assistantTitle}
          className={`fixed z-50 left-0 right-0 bottom-0 sm:left-auto sm:right-6 sm:bottom-24 sm:w-[390px] bg-white text-navy sm:rounded-3xl rounded-t-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all ${
            isMinimized ? "h-16" : "h-[78dvh] max-h-[600px] sm:h-[540px]"
          }`}
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="bg-navy text-white px-4 py-3.5 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-electric to-[#6D28D9] flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </span>
              <div>
                <p className="font-display font-bold text-sm leading-tight">
                  {t.floating.assistantTitle}
                </p>
                <p className="text-[11px] text-slate-300">
                  {t.floating.assistantSubtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsMinimized((prev) => !prev)}
                aria-label="Minimize chat"
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close AI Assistant"
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream/60">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-line leading-relaxed shadow-sm ${
                        msg.role === "user"
                          ? "bg-electric text-white rounded-br-sm"
                          : "bg-white text-navy border border-slate-200/80 rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200/80 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-electric animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-electric animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <span className="w-2 h-2 rounded-full bg-electric animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                )}

                {messages.length <= 2 && !isTyping && (
                  <div className="pt-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      {t.floating.suggestedLabel}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.floating.suggestedQuestions.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => sendMessage(q)}
                          className="text-left text-xs font-medium bg-white hover:bg-electric hover:text-white text-navy border border-slate-200 hover:border-electric px-3 py-1.5 rounded-full transition-colors shadow-sm"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.floating.inputPlaceholder}
                  aria-label="Type your message"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 text-base sm:text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-electric/30"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="w-10 h-10 rounded-xl bg-electric hover:bg-electric-dark disabled:opacity-45 text-white flex items-center justify-center transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
