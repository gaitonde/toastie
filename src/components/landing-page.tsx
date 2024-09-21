import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'
import { ClipboardList, Sparkles, Wine } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  return (
    <div className={`min-h-screen bg-[#f5f5f5] ${inter.className}`}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#3c4a3e] mb-6">
            Craft the Perfect Wedding Speech with AI! 🥂
          </h1>
          <p className="text-xl text-[#3c4a3e] mb-8">
            Harness the power of ChatGPT 4 to help you find the perfect words for an unforgettable wedding speech.
          </p>
          <button
            className="bg-[#3c4a3e] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#2a3329] transition-colors duration-300"
            onClick={() => window.location.href='/wiz'} // {{ edit_1 }}
          >
            Get started
          </button>
        </section>

        <section className="mb-16">
          <Image
            src="/images/placeholder.webp"
            alt="Wedding toast"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </section>

        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3c4a3e] mb-6">How it works</h2>
          <p className="text-xl text-[#3c4a3e] max-w-3xl mx-auto mb-12">
            Creating your custom, unforgettable wedding speech with the assistance of artificial intelligence is as easy as 1-2-3! Follow these simple steps and get ready to make a memorable impact on the special day.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#e8e8e8] rounded-full p-4 mb-4">
                <ClipboardList className="w-8 h-8 text-[#3c4a3e]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#3c4a3e] mb-2">1. Complete Our Form</h3>
              <p className="text-[#3c4a3e]">
                Fill out our quick form. Answer some questions and provide us with the context and tone you desire for your speech.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#e8e8e8] rounded-full p-4 mb-4">
                <Sparkles className="w-8 h-8 text-[#3c4a3e]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#3c4a3e] mb-2">2. AI Writes Your Speech</h3>
              <p className="text-[#3c4a3e]">
                Sit back and relax as AI works its magic! Your personalized and impactful wedding speech will be generated automatically.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#e8e8e8] rounded-full p-4 mb-4">
                <Wine className="w-8 h-8 text-[#3c4a3e]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#3c4a3e] mb-2">3. Deliver Your Speech</h3>
              <p className="text-[#3c4a3e]">
                Practice and deliver your speech with confidence! You'll be sure to make a lasting impression on the special day.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16 bg-[#e8e8e8] py-16 px-4 rounded-lg">
          <div className="inline-block bg-[#d1d5db] text-[#3c4a3e] text-sm font-semibold px-3 py-1 rounded-full mb-6">
            ✨ Uses ChatGPT 4
          </div>
          <h2 className="text-4xl font-bold text-[#3c4a3e] mb-6">
            Your Own Personal AI-Powered Speech Assistant
          </h2>
          <p className="text-xl text-[#3c4a3e] max-w-3xl mx-auto">
            Discover the game-changing benefits of crafting your wedding speech with the assistance of advanced AI. Enjoy ease, personalization, and confidence as you deliver the perfect words on the special day.
          </p>
        </section>
      </main>
    </div>
  )
}