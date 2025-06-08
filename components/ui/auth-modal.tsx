"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 flex" onClose={onClose}>
        <div
          className="fixed inset-0 dark:bg-black/80"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center px-4">
          <Transition.Child
            as={Fragment}
            enter="transition-all duration-300 ease-out"
            enterFrom="opacity-0 scale-95 translate-y-8"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="transition-all duration-200 ease-in"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-8"
          >
            <Dialog.Panel className="relative w-full max-w-2xl dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 md:p-12 border dark:border-zinc-800">
              <button
                onClick={onClose}
                className="absolute right-5 top-5 text-gray-400 hover:text-blue-600 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Close"
              >
                <X size={22} strokeWidth={2.5} className="scale-110" />
              </button>

              <Dialog.Title className="text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Welcome to uiview
              </Dialog.Title>
              <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Sign in to explore a world of design inspiration and creativity.
                Join our community of designers and developers to share, learn,
                and grow together.
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1 w-full">
                  <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-3 text-white text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Login
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <button className="w-full rounded-xl border-2 border-blue-600 py-3 text-blue-600 text-lg font-semibold bg-white/80 dark:bg-zinc-900/80 hover:bg-blue-50 dark:hover:bg-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Sign Up
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
