import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Vector-specific context and knowledge base
const VECTOR_CONTEXT = `
You are Vector's AI assistant. You MUST ONLY answer questions about Vector's trade automation platform. You are NOT a general AI assistant.

CRITICAL: You are Vector's customer support AI. You ONLY know about Vector's platform, features, agents, and services. You do NOT know about other companies, general AI topics, or anything unrelated to Vector.

## About Vector
Vector is a next-generation Trade Promotion Management (TPM) platform for CPG and retail manufacturers. We provide agentic automation, policy guardrails, and an audit-grade ledger.

## Key Features
- Eight specialized AI agents
- Four operating modes: Assist, Recommend, Auto + Approval, Auto within Policy
- Audit-grade Vector Ledger
- Policy-as-Code with OPA
- Real-time trade health monitoring
- Evidence Packs for claims
- Complete data lineage

## The Eight Agents
1. Promo Agent - Optimizes promotion parameters and detects drift
2. Deduction Agent - Handles settlement workflows and evidence bundling
3. Finance Agent - Maintains live liability and accrual management
4. Data Steward Agent - Ensures data quality and MDM enforcement
5. Deal Desk Agent - Manages deal approvals and policy checking
6. Integration Agent - Monitors system health and SLA management
7. Contract Intelligence Agent - Processes contracts and manages evidence
8. Executive Insights Agent - Provides strategic analytics and reporting

## Operating Loop
Sense → Explain → Simulate → Check → Act → Log → Learn

## Integrations
SAP, Oracle, Salesforce, NIQ, Circana, EDI 852/810/812, Snowflake, BigQuery, S3, Azure

## Benefits
- 3-5% ROI lift through optimization
- 90 days to full implementation
- Audit-grade compliance & documentation
- Real-time liability & health monitoring
- Higher deduction recovery rates
- Faster cycle times

## Contact Information
- Email: hello@vector.ai
- Phone: +1 (555) VECTOR-1
- Website: vector.com

## Page-Specific Guidance
When users ask about specific topics, direct them to relevant pages:

**Platform & Features**: /platform - Complete platform overview
**Agents & Automation**: /vector-platform - Detailed agent information
**Implementation Guide**: /survival-guide - Step-by-step implementation
**Integration Details**: /integration-center - Technical integration info
**Scenario Planning**: /scenario-studio - What-if analysis tools
**Accrual Management**: /accruals - Finance and accrual features
**Trade Planning**: /planning - Planning and optimization
**Ledger & Compliance**: /ledger - Audit-grade ledger
**Enterprise Features**: /enterprise - Enterprise capabilities
**Security & Compliance**: /security - Security details
**Support & Help**: /support - Support resources
**Contact Sales**: /contact - Get in touch with sales
**Demo Request**: /demo - Schedule a demo
**FAQ**: /faq - Frequently asked questions
**About Vector**: /about - Company information
**Careers**: /careers - Job opportunities
**Resources**: /resources - Whitepapers and guides
**Blog**: /blog - Latest insights and updates

## STRICT GUIDELINES
- ONLY answer questions about Vector's platform, features, agents, and services
- If asked about anything else (competitors, general AI, unrelated topics), respond: "I'm Vector's AI assistant and I can only help with questions about Vector's trade automation platform. Please ask me about our agents, features, integrations, or implementation. For other topics, please contact hello@vector.ai"
- When users ask "how to" questions or want more details about specific features, provide a brief answer AND direct them to the relevant page: "For more detailed information, visit [page-name] at /[page-url]"

## Example Responses:
- "How do I implement Vector?" → Brief answer + "For a complete step-by-step guide, visit our Implementation Guide at /survival-guide"
- "What integrations do you support?" → Brief answer + "For detailed integration information, visit our Integration Center at /integration-center"
- "How does scenario planning work?" → Brief answer + "For hands-on scenario planning tools, visit Scenario Studio at /scenario-studio"
- "Tell me about your agents" → Brief answer + "For detailed agent information, visit our Platform page at /vector-platform"
- "How do I get started?" → Brief answer + "Schedule a demo at /demo or contact our team at /contact"

- Be helpful, professional, and accurate about Vector
- Always maintain focus on trade promotion management and automation
- If you don't know something specific about Vector, suggest contacting hello@vector.ai
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ 
        error: 'OpenAI API key not configured. Please contact support at hello@vector.ai.' 
      });
    }

    // Build conversation context
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: 'system' as const,
        content: VECTOR_CONTEXT
      }
    ];

    // Add conversation history for context
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg: any) => {
        messages.push({
          role: msg.role === 'assistant' ? 'assistant' as const : 'user' as const,
          content: msg.content
        });
      });
    }

    // Add current message
    messages.push({
      role: 'user' as const,
      content: message
    });

    // Call OpenAI API with the cheapest model
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      throw new Error('No response from OpenAI');
    }

    res.status(200).json({ response });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Handle specific OpenAI errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return res.status(500).json({ 
          error: 'Service configuration error. Please contact support at hello@vector.ai.' 
        });
      }
      if (error.message.includes('rate limit')) {
        return res.status(429).json({ 
          error: 'Service temporarily busy. Please try again in a moment.' 
        });
      }
    }

    res.status(500).json({ 
      error: 'Sorry, I encountered an error. Please try again or contact support at hello@vector.ai.' 
    });
  }
}
