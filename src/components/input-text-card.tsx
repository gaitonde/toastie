'use client'

import { useEffect, useRef, useState, useCallback } from 'react';

export interface InputTextCardProps {
  title: string;
  subTitle?: string;
  isRequired?: boolean;
  placeholder?: string;
  caption?: string;
  value: string;
  onNext: (str: string) => void;
  onPrevious: () => void;
}

export function InputTextCard({ title, subTitle, isRequired = false, placeholder, caption, value, onNext, onPrevious }: InputTextCardProps) {
  const [inputValue, setInputValue] = useState(value)
  const [isError, setIsError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleNextClick = useCallback(() => {
    if (isRequired && inputValue.trim() === '') {
      setIsError(true)
    } else {
      setIsError(false);
      const val = inputValue;
      setInputValue('');
      onNext(val);
    }
  }, [isRequired, inputValue, onNext]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleNextClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNextClick]);

  // Update inputValue and inputRef when value prop changes
  useEffect(() => {
    setInputValue(value);
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (e.target.value.trim() !== '') {
      setIsError(false)
    }
  }

  const handleInputBlur = () => {
    if (isRequired && inputValue.trim() === '') {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className={`text-2xl text-center ${isError ? 'text-red-500' : 'text-gray-800'}`}>
            {title}
            {isRequired && <span className="text-red-500">*</span>}
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            {subTitle}
          </p>

          <div className="mb-2">
            <input
              ref={inputRef}
              type="text"
              className={`w-full p-3 border rounded-md ${
                isError ? 'border-red-500' : 'border-blue-300'
              } text-black`}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder={placeholder}
              aria-label={title}
            />
          </div>

          <p className="text-sm text-gray-500">
            {caption}
          </p>
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
            <div className="bg-red-500 text-white text-sm py-1 px-2 rounded text-center w-auto mx-auto">
              This field is required.
            </div>
          )}
          <button onClick={handleNextClick} className="flex items-center text-sm ml-auto">
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