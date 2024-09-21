'use client';

import { useSearchParams } from 'next/navigation';

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const generatedSpeech = searchParams.get('speech');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Your Generated Speech</h1>
          <div className="generated-speech text-black whitespace-pre-wrap">{generatedSpeech}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
