# 🌌 Sylphara AI

<div align="center">

### AI-Powered Conversational Platform Built for Modern Developers

A full-stack AI application that enables users to create conversations, interact with advanced language models through OpenRouter, manage chat history, and personalize their profiles through a modern, responsive interface.

![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge\&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge\&logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-black?style=for-the-badge\&logo=prisma)
![OpenRouter](https://img.shields.io/badge/OpenRouter-AI-orange?style=for-the-badge)

</div>

---

## 🚀 Live Applications

| Platform    | URL                                 |
| ----------- | ----------------------------------- |
| Frontend    | https://sylphara.vercel.app         |
| Backend API | https://sylphara-backend.vercel.app |

---

# ✨ Overview

Sylphara AI is a modern AI-driven chat application engineered with scalability, performance, and developer experience in mind.

The platform combines:

* Secure Authentication
* Persistent Conversations
* AI-Powered Responses
* Profile Management
* Role-Based Authorization
* Modern UI/UX

Built using a production-ready architecture, Sylphara demonstrates best practices in full-stack TypeScript development while integrating cutting-edge AI capabilities through OpenRouter.

---

# 🧠 Core Features

## AI Conversations

* Generate AI responses using OpenRouter
* Context-aware conversation management
* Persistent chat history
* Fast response generation
* Markdown rendering support
* Syntax-highlighted code responses

---

## Conversation Management

* Create conversations dynamically
* Retrieve user-specific conversations
* Search conversations instantly
* Organize AI interactions efficiently
* Automatic conversation tracking

---

## Message System

* User & Assistant role tracking
* Conversation-based message retrieval
* Persistent message storage
* Optimized database queries

---

## Authentication & Security

* JWT Authentication
* Refresh Token Strategy
* Protected API Endpoints
* Role-Based Access Control
* Password Hashing using bcrypt
* Secure Cookie Handling

---

## Profile Management

* Personalized User Profiles
* GitHub Integration
* LinkedIn Integration
* Dynamic Avatar Generation
* Profile Updates

---

# 🏗️ System Architecture

```text id="1fj6s5"
┌────────────────────┐
│     Frontend       │
│      Next.js       │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│    Express API     │
│   Authentication   │
│   Conversations    │
│      Messages      │
│      Profile       │
│         AI         │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│     PostgreSQL     │
│      Prisma ORM    │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│     OpenRouter     │
│      AI Models     │
└────────────────────┘
```

---

# ⚡ Technology Stack

---

## Backend

```text id="ms3e3o"
Node.js
Express.js
TypeScript
PostgreSQL
Prisma ORM
JWT
bcrypt
Cookie Parser
OpenRouter SDK
```

---

# 📂 Project Structure

```bash id="w8ccab"
src
│
├── modules
│   ├── ai
│   ├── auth
│   ├── conversation
│   ├── message
│   └── profile
│
├── middleware
│
├── utils
│
├── config
│
├── routes
│
└── server.ts
```

---

# 🔐 Authentication Flow

```text id="if7x1q"
User Login
    │
    ▼
Generate Access Token
Generate Refresh Token
    │
    ▼
Protected Resource Access
    │
    ▼
Access Token Expired
    │
    ▼
Refresh Token Verification
    │
    ▼
Issue New Access Token
```

---

# 📡 REST API

## Authentication

### Register User

```http id="j3s9qg"
POST /api/auth/register
```

### Login User

```http id="v9i6dx"
POST /api/auth/login
```

### Refresh Access Token

```http id="5pj9vi"
POST /api/auth/refresh-token
```

---

## AI Module

### Chat With AI

```http id="p4epmu"
POST /api/ai/chat
```

Authentication Required

---

## Conversation Module

### Create Conversation

```http id="nq4n6x"
POST /api/conversation/create-conversation
```

### Get All Conversations

```http id="0bpxa2"
GET /api/conversation/all-conversations
```

### Get Conversation By ID

```http id="wy8ovd"
GET /api/conversation/:id
```

### Search Conversations

```http id="nhjysx"
GET /api/conversation/search
```

---

## Message Module

### Create Message

```http id="m5e6zw"
POST /api/message/create-message
```

### Get Messages

```http id="6rx1mx"
GET /api/message/:conversationId
```

---

## Profile Module

### Get Current Profile

```http id="8cynk8"
GET /api/profile/me
```

### Update Profile

```http id="qv31y5"
PATCH /api/profile/me
```



# 🤖 OpenRouter Integration

Sylphara leverages OpenRouter to communicate with advanced AI models.

### Benefits

* Multiple AI Models
* Cost Optimization
* Flexible Provider Switching
* Future-Proof Architecture
* High Availability

Example Flow:

```text id="i8n63v"
User Prompt
      │
      ▼
Express API
      │
      ▼
OpenRouter SDK
      │
      ▼
AI Model Response
      │
      ▼
Database Storage
      │
      ▼
Frontend Rendering
```

---

# ⚙️ Environment Variables

```env id="6b3r9t"
PORT=5000

DATABASE_URL=

JWT_ACCESS_SECRET=
JWT_ACCESS_EXPIRES_IN=

JWT_REFRESH_SECRET=
JWT_REFRESH_EXPIRES_IN=

OPENROUTER_API_KEY=

BCRYPT_SALT_ROUNDS=
```

---

# 🚀 Local Development

## Clone Repository

```bash id="0n4o6s"
git clone https://github.com/ehasunulislam/sylphara-backend.git
```

## Install Dependencies

```bash id="71r4mf"
npm install
```

## Run Prisma Migration

```bash id="v4gvop"
npx prisma migrate dev
```

## Start Development Server

```bash id="0g1t5o"
npm run dev
```

---

# 🎯 Future Roadmap

### Phase 1

* AI Memory System
* File Upload Support
* Image Generation

### Phase 2

* Multi-Agent Workflows
* Team Collaboration
* Voice Conversations
* Custom AI Personas

### Phase 3

* Jarvis Mode
* Autonomous Agents
* Workflow Automation
* AI Productivity Assistant

---

# 👨‍💻 Author

## Ehasun Ul Islam Orko

Full Stack Developer

Specialized in building scalable web applications using modern JavaScript technologies and AI integrations.

### Connect With Me

* GitHub: https://github.com/ehasunulislam
* LinkedIn: https://www.linkedin.com/in/ehasun/

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star.

Built with ❤️ using Next.js, Express, PostgreSQL, Prisma & OpenRouter.

</div>
