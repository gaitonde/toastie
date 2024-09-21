'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

const ResultsContent = () => {
  const [generatedSpeech, setGeneratedSpeech] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const speech = searchParams.get('speech');
    setGeneratedSpeech(speech);
  }, [searchParams]);

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Your Generated Speech</h1>
        {generatedSpeech ? (
          <div className="generated-speech text-black whitespace-pre-wrap">{generatedSpeech}</div>
        ) : (
          <p className="text-center text-gray-600">No speech generated yet.</p>
        )}
      </div>
    </div>
  );
};

const ResultsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ResultsContent />
      </Suspense>
    </div>
  );
};

export default ResultsPage;
