"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const WeddingSpeechForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        speechType: 'Best man',
        speechTone: 'Casual & funny',
        requestor: '',
        spouseName: '',
        firstMetStory: '',
        smileStory: '',
        uniqueRelationshipStory: '',
        hopesAndDreams: '',
    });

    const updateFormData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardContent className="p-8">
                <h2 className="text-3xl font-semibold text-[#2F4858] text-center mb-4">Wedding Speech Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        placeholder="Your First Name"
                        className="border-2 border-[#2F4858] rounded-lg p-3 text-lg w-full"
                    />
                    <Input
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="Your Email Address"
                        className="border-2 border-[#2F4858] rounded-lg p-3 text-lg w-full"
                    />
                    <Label className="text-lg">Type of Speech:</Label>
                    <RadioGroup
                        value={formData.speechType}
                        onValueChange={(value) => updateFormData('speechType', value)}
                        className="flex flex-col space-y-2"
                    >
                        {['Best man', 'Maid of honor', 'Father of the bride', 'Groom', 'Wedding guest'].map(option => (
                            <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={option} />
                                <Label htmlFor={option} className="text-lg">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                    <Label className="text-lg">Tone of Speech:</Label>
                    <RadioGroup
                        value={formData.speechTone}
                        onValueChange={(value) => updateFormData('speechTone', value)}
                        className="flex flex-col space-y-2"
                    >
                        {['Casual & funny', 'Heartfelt & touching', 'Encouraging & supportive', 'Formal & elevated'].map(option => (
                            <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={option} />
                                <Label htmlFor={option} className="text-lg">{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                    <Input
                        value={formData.requestor}
                        onChange={(e) => updateFormData('requestor', e.target.value)}
                        placeholder="Who is asking you to give the speech?"
                        className="border-2 border-[#2F4858] rounded-lg p-3 text-lg w-full"
                    />
                    <Input
                        value={formData.spouseName}
                        onChange={(e) => updateFormData('spouseName', e.target.value)}
                        placeholder="Who is the person getting married?"
                        className="border-2 border-[#2F4858] rounded-lg p-3 text-lg w-full"
                    />
                    <Textarea
                        value={formData.firstMetStory}
                        onChange={(e) => updateFormData('firstMetStory', e.target.value)}
                        placeholder="How and when did you first meet?"
                        className="border-2 border-[#2F4858] rounded-lg p-3 text-lg w-full"
                        rows={4}
                    />
                    <Textarea
                        value={formData.smileStory}
                        onChange={(e) => updateFormData('smileStory', e.target.value)}
                        placeholder="Share a funny story."
                        className="border-2 border-[#2F4858] rounded-lg p-3 text-lg w-full"
                        rows={4}
                    />
                    <Textarea
                        value={formData.uniqueRelationshipStory}
                        onChange={(e) => updateFormData('uniqueRelationshipStory', e.target.value)}
                        placeholder="What makes the couple's relationship unique?"
                        className="border-2 border-[#2F4858] rounded-lg p-3 text-lg w-full"
                        rows={4}
                    />
                    <Textarea
                        value={formData.hopesAndDreams}
                        onChange={(e) => updateFormData('hopesAndDreams', e.target.value)}
                        placeholder="What are your hopes and dreams for the couple?"
                        className="border-2 border-[#2F4858] rounded-lg p-3 text-lg w-full"
                        rows={4}
                    />
                    <Button type="submit" className="bg-[#2F4858] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#1D2D38]">
                        Generate Speech
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default WeddingSpeechForm;