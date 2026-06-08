import { Anthropic } from '@anthropic-ai/sdk';

export async function POST(request) {
  try {
    const { query } = await request.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const client = new Anthropic({
      apiKey: apiKey,
    });

    const response = await client.messages.create({
      model: 'claude-opus-4-1-20250805',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: `You are an expert on EU automotive market. Answer this question about the European automotive industry: ${query}`,
        },
      ],
    });

    return Response.json({
      response: response.content[0].type === 'text' ? response.content[0].text : 'No response',
    });
  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      { error: error.message || 'Failed to process request' },
      { status: 500 }
    );
  }
}
