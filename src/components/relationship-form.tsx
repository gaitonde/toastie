'use client'

import { useState } from 'react'
import Link from 'next/link'

export function RelationshipFormComponent() {
  const [selectedRelation, setSelectedRelation] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  const relations = [
    'Mother', 'Father',
    'Friend', 'Brother',
    'Sister', 'Grandfather',
    'Grandmother', 'Cousin',
    'Son', 'Daughter',
    'Aunt', 'Uncle'
  ]

  const handleNextClick = () => {
    if (selectedRelation === null) {
      setIsError(true)
    } else {
      setIsError(false)
      // Handle navigation to next page
    }
  }

  const handleRelationSelect = (relation: string) => {
    setSelectedRelation(relation)
    setIsError(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className={`text-2xl mb-4 text-center ${isError ? 'text-red-500' : 'text-gray-800'}`}>
            Johnson is your...<span className="text-red-500">*</span>
          </h1>
          
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
          <Link href="#" className="flex items-center text-sm">
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
          </Link>
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