import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import globalcss from "./global.css?url";
import AppName from "./components/custom/app-name";
import { Zap } from "lucide-react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import ProgressBar from "./components/navigation/progress-bar";
import { Button } from "./components/ui/button";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;600;700;800;900&display=swap"
    //   href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: globalcss },

  { rel: "preconnect", href: "https://www.googletagmanager.com" },
  { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
];

export const meta: MetaFunction = () => {
  return [
    { name: "title", content: "OwenaHub | Build your career with expert mentors" },
    { name: "description", content: "Join OwenaHub and connect with top industry mentors to advance your career. Get expert guidance, career advice, and skill development in your field." },
    { name: "keywords", content: "mentorship, career growth, expert mentors, skill development, professional guidance, tech, software" },
    { name: "author", content: "OwenaHub" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "OwenaHub | Build Your Career with Expert Mentors" },
    { property: "og:description", content: "Join OwenaHub and connect with top industry mentors to advance your career." },
    { property: "og:image", content: "https://owenahub.com/images/logos/banner_image.png" }, // image URL
    { property: "og:url", content: "https://owenahub.com" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "OwenaHub | Build Your Career with Expert Mentors" },
    { name: "twitter:description", content: "Join OwenaHub and connect with top industry mentors to advance your career." },
    { name: "twitter:image", content: "https://owenahub.com/images/logos/banner_image.png" }, // image URL
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          OwenaHub | Build your career with expert mentors
        </title>
        <Meta />
        <Links />

        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HSLS7K2448"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HSLS7K2448');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Toaster />
        <Sonner />
        <ProgressBar />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src="/images/logos/logo.png" alt="..." width={30} />
          <div className="text-center mb-3">
            <AppName size="text-base" />
          </div>
        </div>
        <span className="w-full h-1 animate-pulse bg-gray-300 rounded-md block mb-3" />
        <p className="flex items-center gap-1 justify-center">
          <Zap size={14} />
          <span className="text-gray-700 text-xs font-light">Learn by doing</span>
        </p>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";

    details = error.status === 404
      ? "The requested page could not be found."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="fixed top-1/2 left-1/2 w-max transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex gap-4 px-2">
        <div>
          <img src="/images/logos/logo.png" alt="..." width={30} />
        </div>
        <div>
          <h1 className="text-gray-500">{message} 😵</h1>
          <p>{details}</p>
          {stack && (
            <pre className="w-full p-4 overflow-x-auto">
              <code>{stack}</code>
            </pre>
          )}

          <div className="mt-3 flex gap-5 items-center">
            <Link to={"/"} >
              <Button variant={"outline"} className="text-xs h-8 py-0">
                Go home
              </Button>
            </Link>

            <Button
              onClick={() => window.location.reload()}
              variant={"secondary"} className="text-xs h-8 py-0"
            >
              Reload
            </Button>
          </div>
        </div>
      </div>
    </main >
  );
}
