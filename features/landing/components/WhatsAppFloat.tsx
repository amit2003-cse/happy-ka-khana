"use client";

import React from "react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917488574616?text=Hi,%20I%20want%20to%20know%20more%20about%20Happy%20Ka%20Khana%20tiffin%20subscriptions."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-40 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce group"
      style={{ animationDuration: "3s" }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm12.035-2.03c1.797 0 3.548-.482 5.077-1.393l.363-.216 3.775.99-.208-3.679.237-.377a9.92 9.92 0 0 0 1.517-5.26c.003-5.485-4.48-9.948-9.984-9.948-5.502 0-9.98 4.463-9.983 9.948-.001 1.93.546 3.81 1.58 5.48l.245.39-.63 2.302 2.355-.618.377.224a9.94 9.94 0 0 0 5.12 1.452zm4.953-6.793c-.271-.135-1.602-.789-1.85-.878-.247-.089-.427-.135-.607.135-.18.271-.697.878-.854 1.057-.158.18-.315.2-.585.065-.27-.135-1.14-.42-2.172-1.34-.803-.715-1.345-1.6-1.503-1.871-.158-.271-.017-.417.118-.552.122-.122.271-.315.405-.471.135-.158.18-.271.27-.45.09-.18.045-.338-.022-.472-.068-.135-.608-1.464-.833-2.005-.22-.53-.44-.457-.607-.466-.157-.008-.337-.01-.517-.01-.18 0-.472.067-.72.338-.247.271-.944.923-.944 2.25 0 1.328.966 2.61 1.101 2.79.135.18 1.9 2.9 4.606 4.074.645.278 1.148.445 1.542.57.647.206 1.236.177 1.702.107.518-.077 1.602-.653 1.828-1.284.225-.63.225-1.17.157-1.284-.067-.113-.247-.203-.518-.338z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-secondary text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
        Order on WhatsApp
      </span>
    </a>
  );
}
