import { NextResponse } from 'next/server';
import { getLocalizedRoute, localeForPath } from './data/i18n-routes';

export function proxy(request) {
  const { pathname, search } = request.nextUrl;
  if (pathname === '/fr' || pathname.startsWith('/fr/')) {
    const frenchRoute = getLocalizedRoute(pathname);
    if (frenchRoute && pathname !== frenchRoute.fr) {
      return NextResponse.redirect(new URL(`${frenchRoute.fr}${search}`, request.url), 308);
    }
  }

  const locale = pathname === '/de' || pathname === '/de/' || pathname.startsWith('/de/')
    ? 'de'
    : pathname === '/en' || pathname === '/en/' || pathname.startsWith('/en/')
      ? 'en'
      : null;
  if (locale) {
    const legacyPath = pathname === `/${locale}` || pathname === `/${locale}/` ? '/' : pathname.slice(locale.length + 1);
    const route = getLocalizedRoute(legacyPath);
    if (route) return NextResponse.redirect(new URL(`${route[locale]}${search}`, request.url), 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-mergiu-language', localeForPath(pathname));
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
