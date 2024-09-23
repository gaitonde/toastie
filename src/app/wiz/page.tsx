'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InputTextCard } from "@/components/input-text-card";
import { MultipleChoiceCard } from "@/components/multiple-choice-card";

type CommonProps = {
  title: string;
  isRequired?: boolean;
  value: string | string[];
  onNext: (value: string | string[]) => void;
  onPrevious: () => void;
};

export type InputTextCardProps = CommonProps & {
  placeholder?: string;
};

export type MultipleChoiceCardProps = CommonProps & {
  relations: string[];
};

const wizardCards =[
  {
    type: 'input',
    key: 'firstName',
    props: {
      title: "What is your first name?",
      placeholder: "Example: Lucy",
      isRequired: true,
    },
  },
  {
    type: 'input',
    key: 'email',
    props: {
      title: "What's the email address for sending over your speech?",
      placeholder: "example@example.com",
      isRequired: true,
    },
  },
  {
    type: 'multipleChoice',
    key: 'speechType',
    props: {
      title: "Type of speech you want to generate",
      isRequired: true,
      relations: [
        'Best man', 'Maid of honor', 'Father of the bride', 'Groomsmen', 'Bridesmaid', 'Mother of the bride', 'Father of the groom', 'Mother of the groom', 'Wedding guest'
      ],
    },
  },
  {
    type: 'multipleChoice',
    key: 'speechTone',
    props: {
      title: "Select the tone for your speech",
      isRequired: true,
      relations: [
        'Casual and funny', 'Heartfelt and touching', 'Encouraging and supportive', 'Formal and elevated'
      ],
    },
  },
  {
    type: 'input',
    key: 'requestor',
    props: {
      title: "Who is asking you to give the speech?",
      subTitle: "Enter the name of the Bride or Groom",
      placeholder: "Example: John",
      isRequired: true,
    },
  },
];

const Wizard = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});

  const handleNext = async (value: string | string[]) => {
    const currentCard = wizardCards[currentStep];

    setFormData(prevData => {
      const newData = { ...prevData, [currentCard.key]: value };
      console.log(`Saving ${currentCard.key}:`, value);
      console.log('Updated form data:', newData);
      return newData;
    });

    if (currentStep < wizardCards.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Final form data:', formData);

      // Make API call to generate speech
      try {
        const response = await fetch('/api/generate-speech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: formData }),
        });

        if (!response.ok) {
          throw new Error('Failed to generate speech');
        }

        const result = await response.json();

        // Redirect to results page with the generated speech data
        router.push(`/results?speech=${result.speech}`);
      } catch (error) {
        console.error('Error generating speech:', error);
        // Handle error (e.g., show error message to user)
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCard = () => {
    const card = wizardCards[currentStep];
    const commonProps = {
      onNext: handleNext,
      onPrevious: handlePrevious,
      value: formData[card.key] || (card.type === 'multipleChoice' ? '' : ''),
    };

    if (card.type === 'input') {
      return <InputTextCard {...card.props} {...commonProps as Omit<typeof commonProps, 'value'>} value={commonProps.value as string} />;
    } else if (card.type === 'multipleChoice') {
      return <MultipleChoiceCard {...card.props as MultipleChoiceCardProps} {...commonProps} value={commonProps.value as string} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
      {renderCard()}
    </div>
  );
};

export default Wizard;