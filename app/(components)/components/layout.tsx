"use client";
import { ComponentsNav } from "@/components/components-nav";
import { docsConfig } from "@/config/docs";
import { motion } from "framer-motion";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="mx-auto flex items-start px-4 py-6 md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-5">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block"
        >
          <div className="no-scrollbar ml-4 h-full overflow-y-auto rounded-xl bg-background/70 px-4 py-6 shadow-md backdrop-blur-md transition-colors dark:bg-[#1e1e1e]/60 lg:ml-1 lg:py-8">
            <ComponentsNav items={docsConfig.sidebarNav} />
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="min-h-screen w-full overflow-hidden rounded-xl bg-muted/10 p-4 shadow-inner dark:bg-muted/20 sm:p-6 md:p-8"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
