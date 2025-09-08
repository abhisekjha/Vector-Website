# Vector Chat Setup Guide

## Overview
The Vector chat window provides an AI-powered assistant that can answer questions specifically about Vector's trade automation platform, features, agents, and services.

## Features
- **Vector-specific knowledge**: Only answers questions about Vector's platform
- **Real-time chat**: Instant responses using OpenAI's GPT-3.5-turbo (cost-optimized)
- **Context awareness**: Maintains conversation history for better responses
- **Consistent design**: Matches Vector's design system and branding
- **Minimizable interface**: Can be minimized and restored

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure OpenAI API Key
Create a `.env.local` file in the root directory:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

Get your API key from: https://platform.openai.com/api-keys

### 3. Usage
The chat window is available on the contact page (`/contact`) and can be:
- Opened by clicking "Start Chat" in the contact methods
- Opened by clicking the floating "Chat with Vector" button
- Minimized and restored as needed

## Chat Capabilities

The AI assistant can answer questions about:

### Platform Features
- Eight specialized AI agents
- Four operating modes (Assist, Recommend, Auto + Approval, Auto within Policy)
- Audit-grade Vector Ledger
- Policy-as-Code with OPA
- Real-time trade health monitoring

### Agents
- Promo Agent (optimization and drift detection)
- Deduction Agent (settlement workflows)
- Finance Agent (accrual management)
- Data Steward Agent (data quality)
- Deal Desk Agent (policy checking)
- Integration Agent (SLA management)
- Contract Intelligence Agent (evidence processing)
- Executive Insights Agent (strategic analytics)

### Integrations
- SAP, Oracle, Salesforce
- NIQ, Circana
- EDI formats (852, 810, 812)
- Snowflake, BigQuery, S3, Azure

### Implementation
- 90-day go-live timeline
- ROI improvements (3-5% lift)
- Security and compliance features

## Technical Details

### Components
- `ChatWindow.tsx`: Main chat interface component
- `ChatToggle.tsx`: Floating button to open chat
- `/api/chat.ts`: API endpoint for OpenAI integration

### API Endpoint
The chat API (`/api/chat`) handles:
- Message processing
- OpenAI API integration
- Context management
- Error handling
- Rate limiting

### Security
- API key stored in environment variables
- Input validation and sanitization
- Error handling for API failures
- Conversation history limited to last 10 messages

## Customization

### Styling
The chat window uses Vector's design system:
- Playfair Display font family
- Blue gradient color scheme
- Consistent spacing and borders
- Responsive design

### Knowledge Base
The AI's knowledge is defined in the `VECTOR_CONTEXT` constant in `/api/chat.ts`. Update this to modify what the AI can answer about.

### Behavior
- Model: gpt-3.5-turbo (cost-effective option)
- Temperature: 0.7 (balanced creativity/consistency)
- Max tokens: 500 (concise responses)
- Presence penalty: 0.1 (avoids repetition)
- Frequency penalty: 0.1 (encourages variety)

## Troubleshooting

### Common Issues
1. **"OpenAI API key not configured"**: Add your API key to `.env.local`
2. **"Service temporarily busy"**: OpenAI rate limit hit, try again later
3. **Chat not responding**: Check browser console for errors

### Error Handling
The chat includes comprehensive error handling:
- API key validation
- Rate limit detection
- Network error recovery
- Fallback error messages

## Support
For technical issues with the chat functionality, contact: hello@vector.ai
