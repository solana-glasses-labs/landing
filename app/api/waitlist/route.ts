import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

export const runtime = "nodejs"; // googleapis needs Node env

const Body = z.object({
  email: z.string().email(),
  source: z.string().optional(), // like "landing-page"
});

function getSheetsClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const key = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");
  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const { email } = Body.parse(json);

    const sheets = getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
    const source =
      json.source ||
      req.headers.get("referer") ||
      req.headers.get("origin") ||
      "unknown";

    // Optional duplicate guard, cheap and cheerful
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!B:B", // Email column
    });
    const already = new Set((existing.data.values || []).flat());
    if (already.has(email)) {
      return NextResponse.json(
        { ok: true, duplicated: true, message: "You are already on the list" },
        { status: 200 }
      );
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString(), email, String(source)]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err.message || "Failed to save" },
      { status: 500 }
    );
  }
}
