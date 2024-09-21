'use client';

import QuestionTextInput from "@/components/question-text-input";
import TypeOfSpeech from "@/components/type-of-speech";
import React, { useState } from 'react';

const inputComponents = [
    {
        type: "StoryTextInput",
        title: "What is your first name?",
        isTextarea: false,
        isRequired: true,
        placeholder: "Example: Lucy"
    },
    {
        type: "StoryTextInput",
        title: "What is your second name?",
        isTextarea: false,
        isRequired: false,
        placeholder: "Example: John"
    },
    {
        type: "TypeOfSpeech",
        title: "Select Type of Speech",
        isTextarea: false,
        isRequired: false,
        placeholder: ""
    }
];
const InfoPage = () => {
    const [components, setComponents] = useState(inputComponents.map(() => '')); // Initialize stories with empty strings
    const [isError, setIsError] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // Track current input index

    const handleNext = () => {
        if (!components[currentIndex].trim()) {
            setIsError(true);
            return; // Prevent proceeding if the current story is empty
        }
        console.log("Proceeding with story:", components[currentIndex]);
        setIsError(false);
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, components.length - 1)); // Move to next input
    };

    return (
      <>
        {currentIndex < components.length && inputComponents[currentIndex].type === "StoryTextInput" && (
          <QuestionTextInput
            isTextarea={inputComponents[currentIndex].isTextarea}
            title={inputComponents[currentIndex].title}
            value={components[currentIndex]}
            setValue={(value) => {
              const newComponents = [...components];
              newComponents[currentIndex] = value;
              setComponents(newComponents);
              setIsError(false);
            }}
            isError={isError}
            setIsError={setIsError}
            isRequired={inputComponents[currentIndex].isRequired}
            placeholder={inputComponents[currentIndex].placeholder}
            onNext={handleNext}
          />
        )}
        {currentIndex === 2 && <TypeOfSpeech />}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <button onClick={() => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))} style={{ cursor: 'pointer' }}>
            ← PREVIOUS
          </button>
          <button onClick={handleNext} style={{ cursor: 'pointer' }}>
            NEXT →
          </button>
        </div>
      </>
    );
};

export default InfoPage;