import React, { useState } from 'react'

export default function TypeOfSpeech() {
  const [selectedSpeech, setSelectedSpeech] = useState("")
  const [isError, setIsError] = useState(false)

  const options = [
    "Best man", "Maid of honor", "Father of the bride", "Groomsmen",
    "Bridesmaid", "Mother of the bride", "Father of the groom", "Mother of the groom",
    "Wedding guest"
  ]

  const handleNext = () => {
    if (!selectedSpeech) {
      setIsError(true);
    } else {
      // Handle navigation to next page
      console.log("Proceeding with selected speech:", selectedSpeech);
      setIsError(false); // Reset error state on valid selection
    }
  }

  const handleSelect = (option: string) => {
    setSelectedSpeech(option)
    setIsError(false)
  }

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
        <div style={{ padding: '1.5rem 2rem' }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 'normal',
            color: isError ? '#e53e3e' : '#333',
            marginBottom: '1.5rem',
            textAlign: 'center',
            transition: 'color 0.3s ease'
          }}>
            Type of speech you want to generate<span style={{ color: '#e53e3e' }}>*</span>
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem'
          }}>
            {options.map((option) => (
              <div
                key={option}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 0.75rem',
                  border: `1px solid ${selectedSpeech === option ? '#007bff' : '#d1d5db'}`,
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  backgroundColor: selectedSpeech === option ? '#e6f3ff' : 'transparent',
                  transition: 'all 0.2s',
                  height: '2.5rem'
                }}
                onClick={() => handleSelect(option)}
                onMouseEnter={(e) => {
                  if (selectedSpeech !== option) {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedSpeech !== option) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: `1px solid ${selectedSpeech === option ? '#007bff' : '#d1d5db'}`,
                    marginRight: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  {selectedSpeech === option && (
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#007bff'
                      }}
                    />
                  )}
                </div>
                <label
                  htmlFor={option}
                  style={{
                    fontSize: '0.875rem',
                    color: '#4a5568',
                    cursor: 'pointer',
                    flex: 1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {option}
                </label>
                <input
                  type="radio"
                  id={option}
                  name="speech"
                  value={option}
                  checked={selectedSpeech === option}
                  onChange={() => handleSelect(option)}
                  style={{ position: 'absolute', opacity: 0 }}
                />
              </div>
            ))}
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
          <button style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '0.875rem',
            padding: '0.5rem 1rem'
          }}>
            ← PREVIOUS
          </button>
          {isError && (
            <div style={{
              backgroundColor: '#c53030',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem'
            }}>
              This field is required.
            </div>
          )}
          <button
            onClick={() => {
              if (!selectedSpeech) {
                setIsError(true);
              } else {
                handleNext();
              }
            }}
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
  )
}