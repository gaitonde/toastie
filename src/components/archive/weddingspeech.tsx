'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const speechTypes = [
  "Best man", "Maid of honor", "Father of the bride", "Groomsmen",
  "Bridesmaid", "Mother of the bride", "Father of the groom", "Mother of the groom",
  "Wedding guest"
]

export default function WeddingSpeech() {
  const [step, setStep] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [speechType, setSpeechType] = useState('')

  const nextStep = () => setStep((prevStep) => prevStep + 1)
  const prevStep = () => setStep((prevStep) => prevStep - 1)

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {step === 0 && (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-black">Toastie</h1>
            <p className="text-xl mb-8 text-black">
              We're excited to help you create a memorable speech! Let's start by
              completing a few questions to personalize your speech.
            </p>
            <p className="mb-8 text-black">20 Questions</p>
            <Button
              onClick={nextStep}
              className="w-full bg-[#2d3748] hover:bg-[#4a5568] text-white py-3 rounded-md text-lg"
            >
              START →
            </Button>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">What is your first name?*</h2>
            {/* <Input
              type="text"
              placeholder="Example: Lucy"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full mb-4 p-3 border border-[#cbd5e0] rounded-md"
            /> */}
            <div className="flex justify-end">
              <Button
                onClick={nextStep}
                className="bg-[#2d3748] hover:bg-[#4a5568] text-white py-2 px-4 rounded-md"
              >
                NEXT →
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              What's the email address for sending over your speech?*
            </h2>
            <Input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 border border-[#cbd5e0] rounded-md"
            />
            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                className="bg-[#2d3748] hover:bg-[#4a5568] text-white py-2 px-4 rounded-md"
              >
                ← PREVIOUS
              </Button>
              <Button
                onClick={nextStep}
                className="bg-[#2d3748] hover:bg-[#4a5568] text-white py-2 px-4 rounded-md"
              >
                NEXT →
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Type of speech you want to generate*
            </h2>
            <RadioGroup value={speechType} onValueChange={setSpeechType} className="grid grid-cols-2 gap-4">
              {speechTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <RadioGroupItem value={type} id={type} className="sr-only" />
                  <Label
                    htmlFor={type}
                    className="flex-grow py-2 px-4 border border-[#cbd5e0] rounded-md cursor-pointer hover:bg-[#edf2f7] transition-colors"
                  >
                    {type}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex justify-between mt-4">
              <Button
                onClick={prevStep}
                className="bg-[#2d3748] hover:bg-[#4a5568] text-white py-2 px-4 rounded-md"
              >
                ← PREVIOUS
              </Button>
              <Button
                onClick={nextStep}
                className="bg-[#2d3748] hover:bg-[#4a5568] text-white py-2 px-4 rounded-md"
              >
                NEXT →
              </Button>
            </div>
          </div>
        )}

        {step > 0 && (
          <div className="mt-8">
            <div className="w-full bg-[#e2e8f0] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#2d3748] h-full rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${(step / 20) * 100}%` }}
              ></div>
            </div>
            <p className="text-center mt-2 text-black">{step} of 20</p>
          </div>
        )}
      </div>
    </div>
  )
}