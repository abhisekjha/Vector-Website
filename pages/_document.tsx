import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" 
          rel="stylesheet" 
        />
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Cache bust: ${Date.now()} */
          /* Tailwind CSS Base */
          *, ::before, ::after {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #e5e7eb;
          }
          
          html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            -moz-tab-size: 4;
            tab-size: 4;
            font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-feature-settings: normal;
            font-variation-settings: normal;
          }
          
          body {
            margin: 0;
            line-height: inherit;
            background-color: #fafafa;
            color: #000;
          }
          
          /* Tailwind CSS Utilities */
          .min-h-screen { min-height: 100vh; }
          .bg-\\[\\#FAFAFA\\] { background-color: #fafafa; }
          .text-black { color: #000; }
          .sticky { position: sticky; }
          .top-0 { top: 0px; }
          .z-40 { z-index: 40; }
          .border-b { border-bottom-width: 1px; }
          .border-black\\/10 { border-color: rgba(0, 0, 0, 0.1); }
          .bg-white\\/80 { background-color: rgba(255, 255, 255, 0.8); }
          .backdrop-blur { backdrop-filter: blur(8px); }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .w-full { width: 100%; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .sm\\:px-6 { @media (min-width: 640px) { padding-left: 1.5rem; padding-right: 1.5rem; } }
          .lg\\:px-8 { @media (min-width: 1024px) { padding-left: 2rem; padding-right: 2rem; } }
          .max-w-7xl { max-width: 80rem; }
          .flex { display: flex; }
          .h-16 { height: 4rem; }
          .items-center { align-items: center; }
          .justify-between { justify-content: space-between; }
          .rounded-xl { border-radius: 0.75rem; }
          .border { border-width: 1px; }
          .border-gray-200 { border-color: #e5e7eb; }
          .bg-gray-50 { background-color: #f9fafb; }
          .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .text-xs { font-size: 0.75rem; line-height: 1rem; }
          .font-semibold { font-weight: 600; }
          .text-gray-600 { color: #4b5563; }
          .text-gray-400 { color: #9ca3af; }
          .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
          .rounded-2xl { border-radius: 1rem; }
          .bg-white { background-color: #ffffff; }
          .p-4 { padding: 1rem; }
          .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
          .bg-gray-800 { background-color: #1f2937; }
          .text-white { color: #ffffff; }
          .bg-yellow-100 { background-color: #fef3c7; }
          .bg-yellow-500 { background-color: #eab308; }
          .bg-blue-100 { background-color: #dbeafe; }
          .bg-blue-500 { background-color: #3b82f6; }
          .h-2 { height: 0.5rem; }
          .w-2 { width: 0.5rem; }
          .rounded-full { border-radius: 9999px; }
          .inline-flex { display: inline-flex; }
          .items-center { align-items: center; }
          .gap-2 { gap: 0.5rem; }
          .gap-4 { gap: 1rem; }
          .space-y-2 > * + * { margin-top: 0.5rem; }
          .space-y-3 > * + * { margin-top: 0.75rem; }
          .grid { display: grid; }
          .grid-cols-\\[1fr\\,auto\\,1fr\\,auto\\,1fr\\] { grid-template-columns: 1fr auto 1fr auto 1fr; }
          .min-h-\\[200px\\] { min-height: 200px; }
          .h-5 { height: 1.25rem; }
          .w-5 { width: 1.25rem; }
          .h-16 { height: 4rem; }
          .h-12 { height: 3rem; }
          .mt-3 { margin-top: 0.75rem; }
          .bg-gray-100 { background-color: #f3f4f6; }
          .rounded-lg { border-radius: 0.5rem; }
          .text-gray-800 { color: #1f2937; }
          
          /* Additional CSS for workflow diagram */
          .grid-cols-\\[1fr\\,auto\\,1fr\\,auto\\,1fr\\] { 
            grid-template-columns: 1fr auto 1fr auto 1fr; 
            display: grid;
          }
          .space-y-2 > * + * { margin-top: 0.5rem; }
          .space-y-3 > * + * { margin-top: 0.75rem; }
          .items-center { align-items: center; }
          .gap-4 { gap: 1rem; }
          .gap-8 { gap: 2rem; }
          .w-full { width: 100%; }
          .min-h-\\[200px\\] { min-height: 200px; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .h-5 { height: 1.25rem; }
          .w-5 { width: 1.25rem; }
          .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
          .h-16 { height: 4rem; }
          .h-12 { height: 3rem; }
          .mt-3 { margin-top: 0.75rem; }
          .bg-gray-100 { background-color: #f3f4f6; }
          .rounded-lg { border-radius: 0.5rem; }
          .rounded-xl { border-radius: 0.75rem; }
          .rounded-2xl { border-radius: 1rem; }
          .rounded-3xl { border-radius: 1.5rem; }
          .border { border-width: 1px; }
          .border-gray-200 { border-color: #e5e7eb; }
          .border-black\\/10 { border-color: rgba(0, 0, 0, 0.1); }
          .bg-white { background-color: #ffffff; }
          .bg-gray-50 { background-color: #f9fafb; }
          .bg-gray-800 { background-color: #1f2937; }
          .bg-yellow-100 { background-color: #fef3c7; }
          .bg-yellow-500 { background-color: #eab308; }
          .bg-blue-100 { background-color: #dbeafe; }
          .bg-blue-500 { background-color: #3b82f6; }
          .text-white { color: #ffffff; }
          .text-gray-600 { color: #4b5563; }
          .text-gray-400 { color: #9ca3af; }
          .text-gray-800 { color: #1f2937; }
          .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .p-4 { padding: 1rem; }
          .p-6 { padding: 1.5rem; }
          .text-xs { font-size: 0.75rem; line-height: 1rem; }
          .font-semibold { font-weight: 600; }
          .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
          .h-2 { height: 0.5rem; }
          .w-2 { width: 0.5rem; }
          .rounded-full { border-radius: 9999px; }
          .inline-flex { display: inline-flex; }
          .gap-2 { gap: 0.5rem; }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
