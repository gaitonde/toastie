'use client'

import { useState } from 'react';

export interface MultipleChoiceCardProps {
  title: string;
  subTitle?: string;
  isRequired?: boolean;
  onNext: (value: string | string[]) => void; // Changed to accept a string
  onPrevious: () => void;
  relations: string[];
  value: string | string[]; // Added value prop
}

export function MultipleChoiceCard({ title, subTitle, isRequired = false, relations, onNext, onPrevious, value }: MultipleChoiceCardProps) {
  // Validate that relations has at least one item

  if (!relations || relations.length === 0) {
    throw new Error("At least one relation must be provided.");
  }

  console.log('XXX relations', relations);

  const [selectedRelation, setSelectedRelation] = useState<string | string[]>(value)

  const [isError, setIsError] = useState(false)

  const handleRelationSelect = (relation: string) => {
    console.log('XXX relation', relation)
    if (relation) {
      setSelectedRelation(relation)
      setIsError(false)
      // Automatically move to the next card
      onNext(relation)
    }
  }

  const handleNextClick = () => {
    if (isRequired && !selectedRelation) {
      setIsError(true)
    } else {
      console.log('XXX handleNextClick: ', selectedRelation)
      setIsError(false)
      onNext(selectedRelation as string)
    }
  }

  return (
    <div className="flex items-center justify-center bg-[#FAF7F2] p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className={`text-2xl mb-4 text-center ${isError ? 'text-red-500' : 'text-gray-800'}`}>
            {title}{isRequired && <span className="text-red-500">*</span>}
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            {subTitle}
          </p>

          <div className="grid grid-cols-2 gap-2">
            {relations.map((relation) => (
              <div
                key={relation}
                className={`border rounded-md py-2 px-3 flex items-center cursor-pointer transition-colors duration-200 ease-in-out
                  ${selectedRelation === relation ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                onClick={() => handleRelationSelect(relation)}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center
                    ${selectedRelation === relation
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                    }`}
                >
                  {selectedRelation === relation && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-gray-700">{relation}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#2F3E36] text-white p-4">
          <button onClick={onPrevious} className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            PREVIOUS
          </button>
          {isError && (
            <div className="bg-red-500 text-white text-sm py-1 px-3 rounded">
              A choice is required.
            </div>
          )}
          <button onClick={handleNextClick} className="flex items-center text-sm">
            NEXT
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}