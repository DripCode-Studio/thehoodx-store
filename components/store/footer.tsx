"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-lg">THE-HØØDX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Streetwear premium. Conçu pour le confort, pensé pour le style.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">
              Boutique
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/collections">Collections</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>thehoodxuk@gmail.com</li>
              <li>+1 (581) 991-6263</li>
              <li>Quebec, Canada</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} THE-HØØDX. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
