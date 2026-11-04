import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ar", "en"];
const defaultLocale = "ar";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // التحقق إن كان الرابط يحتوي على لغة
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // التحويل التلقائي إلى اللغة الافتراضية (العربية)
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // استثناء ملفات النظام (_next) وأي ملف له امتداد مثل (.js, .ico, .png, إلخ)
    "/((?!_next|.*\\..*).*)",
  ],
};