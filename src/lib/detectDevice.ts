import { headers } from "next/headers";

export async function detectDevice() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  return /Mobi|Android|iPhone/i.test(userAgent);
}
