# Online Voting Platform - Simple Vote

This is a secure Voting platform built for the White Matrix Internship assignment.

## Features
- **OAuth Login:** Support for Google and LinkedIn authentication.
- **Candidate Portal:** View profiles for Candidate A and Candidate B with LinkedIn links.
- **One-Time Voting:** Secure logic to ensure each user can only vote once.
- **Voter List:** Displays a live list of names and LinkedIn profiles after a vote is cast.
- **Persistence:** Uses LocalStorage to remember votes even after a page refresh.
- **Forgot Password:** Dedicated UI for password reset requests.

## Tech Stack
- **Frontend:** Next.js (App Router), Tailwind CSS
- **Auth:** NextAuth.js
- **Icons:** Lucide React / SVG

├── app/
│   ├── api/auth/[...nextauth]/
│   │   └── route.js         <-- OAuth logic & Admin role assignment
│   ├── admin/
│   │   └── page.js          <-- Admin Dashboard with charts & reset tools
│   ├── home/
│   │   └── page.js          <-- Main Landing page with the "Simple Vote" logo
│   ├── login/
│   │   └── page.js          <-- Glass-morphism Login UI
│   ├── signup/
│   │   └── page.js          <-- Matching Sign-up UI
│   ├── layout.js            <-- Global background & Auth Wrapper
│   └── page.js              <-- The Voting Portal (Main App logic)
├── public/
│   └── logo.jpeg            <-- "Simple Vote" circular logo
|       voting.jpeg 
|       background.png    
├── .env.local               <-- Google & LinkedIn API Keys
└── README.md                <-- Project documentation

##  How to Run
1. **Clone & Install:**
   ```bash
   npm install