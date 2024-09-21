import { Sparkles } from 'lucide-react'
import Link from 'next/link'; // {{ edit_1 }}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#f5f5f5] shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
          <span className="text-2xl font-semibold text-[#3c4a3e]">ShaadiToast.ai</span>
        </div>
        <Link href="/wiz">
          <button className="bg-[#3c4a3e] text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-[#2a3329] transition-colors duration-300">
            Get started
          </button>
        </Link>
      </div>
    </header>
  )
}