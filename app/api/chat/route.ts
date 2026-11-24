import { NextRequest, NextResponse } from "next/server";
import { getDemoChatbotReply } from "@/lib/chatbot";
import { Locale } from "@/lib/i18n";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const locale: Locale =
      body?.locale === "ru" || body?.locale === "tj" ? body.locale : "en";

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const reply = getDemoChatbotReply(message, locale);

    return NextResponse.json({
      reply,
      mode: "demo",
      note: "Demo response mode active (no external AI API configured).",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process chat request." },
      { status: 500 }
    );
  }
}
