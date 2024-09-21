import { NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(request: Request) {
    const { prompt } = await request.json();

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{
                    role: 'user',
                    content: `Write a heartfelt and engaging 2-minute wedding speech or toast. Use the following information to create a personalized speech:
                    Speaker's name: ${prompt.firstName}
                    Speaker's relationship to the couple: ${prompt.requestorRelationshipToYou}
                    Who is giving the speech (e.g., best man, maid of honor): ${prompt.requestorType}
                    Tone of the speech (e.g., humorous, sentimental, formal, light-hearted): ${prompt.speechTone}
                    Name of the person who requested the speech: ${prompt.requestor}
                    Pronouns of the person who requested the speech: ${prompt.requestorPronouns}
                    How long the speaker has known the person: ${prompt.timeKnown}
                    Three words to describe the person who requested the speech: ${prompt.threeWordsForRequestor}
                    Who the person is marrying: ${prompt.spouseName}
                    Pronouns of the person they are marrying: ${prompt.spousePronouns}
                    Three words to describe the person they are marrying: ${prompt.spouseThreeWordsWho}
                    How and when the speaker first met the person they are marrying, including a memorable early story: ${prompt.firstMetStory}
                    A story about a time that wasn't enjoyable but now brings a smile or laugh: ${prompt.smileStory}
                    What makes the couple's relationship unique, including a favorite story or key description: ${prompt.favoriteStory}
                    The speaker's hopes and dreams for the couple's life together: ${prompt.hopesAndDreams};
                    Write the speech in a way that reflects the speaker's connection to the couple, incorporates their personal stories, and delivers a warm, memorable message that honors their relationship and special day.`
                }],
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json({ speech: data.choices[0].message.content });
    } catch (error) {
        console.error('Error generating speech:', error);
        return NextResponse.json({ error: 'Failed to generate speech' }, { status: 500 });
    }
}