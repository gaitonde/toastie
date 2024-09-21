'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InputTextCard } from '@/components/input-text-card';
import { MultipleChoiceCard } from '@/components/multiple-choice-card';

const Wizard = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    speechType: '',
    speechTone: '',
    requestor: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Last step reached', formData);
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
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

      const data = await response.json();
      console.log('Generated speech:', data.speech);

      // Redirect to results page with the generated speech
      router.push(`/results?speech=${encodeURIComponent(data.speech)}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Error generating speech');
    }
  };

  const steps = [
    {
      component: (
        <InputTextCard
          title="What is your first name?"
          placeholder="Example: Lucy"
          isRequired={true}
          onNext={(str: string) => {
            updateFormData('firstName', str)
            handleNext()
          }}
          onPrevious={handlePrevious}
          value={formData.firstName}
        />
      )
    },
    {
      component: (
        <InputTextCard
          title="What's the email address for sending over your speech?"
          placeholder="example@example.com"
          isRequired={true}
          onNext={(str: string) => {
            updateFormData('email', str)
            handleNext()
          }}
          onPrevious={handlePrevious}
          // onChange={(value) => updateFormData('email', value)}
          value={formData.email}
        />
      )
    },
    // {
    //   component: (
    //     <MultipleChoiceCard
    //       title="Type of speech you want to generate"
    //       isRequired={true}
    //       relations={[
    //         'Best man', 'Maid of honor', 'Father of the bride', 'Groomsmen', 'Bridesmaid', 'Mother of the bride', 'Father of the groom', 'Mother of the groom', 'Wedding guest'
    //       ]}
    //       onNext={(str: string) => {
    //         updateFormData('speechType', str)
    //         handleNext()
    //       }}
    //       onPrevious={handlePrevious}
    //       // onSelect={(value) => updateFormData('speechType', value)}
    //       selectedValue={formData.speechType}
    //     />
    //   )
    // },
    // {
    //   component: (
    //     <MultipleChoiceCard
    //       title="Select the tone for your speech"
    //       isRequired={true}
    //       relations={[
    //         'Casual and funny', 'Heartfelt and touching', 'Encouraging and supportive', 'Formal and elevated'
    //       ]}
    //       onNext={() => handleNext()} // Refactored to inline function
    //       onPrevious={handlePrevious}
    //       onSelect={(value) => updateFormData('speechTone', value)}
    //       selectedValue={formData.speechTone}
    //     />
    //   )
    // },
    // {
    //   component: (
    //     <InputTextCard
    //       title="Who is asking you to give the speech?"
    //       subTitle="Enter the name of the Bride or Groom"
    //       placeholder="Example: John"
    //       isRequired={true}
    //       onNext={() => handleNext()} // Refactored to inline function
    //       onPrevious={handlePrevious}
    //       onChange={(value) => updateFormData('requestor', value)}
    //       value={formData.requestor}
    //     />
    //   )
    // },
  ];

  return (
    <div>
      {steps[currentStep].component}
    </div>
  );
};

export default Wizard;