'use client';

import LandingPage from "@/components/landing-page";

import { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [speech, setSpeech] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const data = await response.json();
      setSpeech(data.speech);
    } catch (err) {
      console.log(err);
      setError('Failed to generate speech. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main>

        {/* <TypeOfSpeech /> */}
        {/* <Wizard /> */}

        <LandingPage />

         {/* <TypeOfSpeech /> */}

        {/* <WeddingSpeechWriter /> */}


        {/* <StoryTextareaInputForm isTextarea={false} /> */}
        {/* <WeddingSpeech /> */}
{/*
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your prompt for the wedding speech"
            className="w-full p-2 border border-gray-300 rounded text-black" // {{ edit_1 }}
            rows={4}
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Speech'}
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {speech && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <h2 className="font-semibold">Generated Speech:</h2>
            <p>{speech}</p>
          </div>
        )}
         */}
      </main>
    </>
  );
}
