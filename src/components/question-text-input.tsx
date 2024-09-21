'use client';

import React from 'react';

interface StoryTextInputProps {
  isTextarea?: boolean; // New prop to determine input type
  title: string; // New title prop
  subText?: string; // New optional subText prop
  value: string; // New value prop
  setValue: (value: string) => void; // New setter for value
  isError: boolean; // New error state prop
  setIsError: (value: boolean) => void; // New setter for isError
  isRequired?: boolean; // New optional prop to determine if the field is required
  placeholder?: string; // New optional placeholder prop
  onNext: () => void; // Ensure this is defined
  onPrevious?: () => void; // New optional prop for handling previous action
}

export default function QuestionTextInput({
  title,
  subText,
  isTextarea = true,
  value,
  setValue,
  isError,
  setIsError,
  isRequired = false,
  placeholder,
  onNext,
  onPrevious,
}: StoryTextInputProps) {

  const handleNext = () => {
    console.log("isRequired:", isRequired);
    console.log("value:", value);

    // Validation logic
    if (isRequired && !value.trim()) {
      setIsError(true); // Set error if required and empty
      return; // Prevent proceeding
    }

    console.log("Proceeding with value:", value);
    setIsError(false); // Reset error state if valid
    onNext(); // Call onNext if validation passes
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fdf7f2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '40rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '2rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'normal',
            color: isError ? '#e53e3e' : '#333',
            marginBottom: '0.5rem',
            textAlign: 'center',
            transition: 'color 0.3s ease'
          }}>
            {title}{isRequired && <span style={{ color: '#e53e3e' }}>*</span>}
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            {subText}
          </p>
          <div style={{ marginBottom: '0.5rem' }}>
            {isTextarea ? (
              <textarea
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setIsError(false); // Reset error state on change
                }}
                style={{
                  width: '100%',
                  height: '200px',
                  padding: '0.75rem',
                  border: `1px solid ${isError ? '#e53e3e' : '#3b82f6'}`,
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                  color: 'black'
                }}
                placeholder={placeholder}
              />
            ) : (
              <input
                type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setIsError(false); // Reset error state on change
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${isError ? '#e53e3e' : '#3b82f6'}`,
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  color: 'black'
                }}
                placeholder={placeholder}
              />
            )}
          </div>
        </div>
        <div style={{
          backgroundColor: '#2d4739',
          color: 'white',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {onPrevious && (
            <button onClick={onPrevious} style={{ marginRight: '1rem' }}>
              ← PREVIOUS
            </button>
          )}
          <button
            onClick={handleNext} // Call handleNext for validation
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '0.875rem',
              padding: '0.5rem 1rem'
            }}
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
}