# 📝 Vibe Blog Platform  

A modern blogging platform built with **React (Vite + TypeScript)**, **TailwindCSS**, and **Supabase**.  
It supports **user authentication (email & Google OAuth)**, **blog publishing**, and an **Admin Dashboard** for moderation with role-based access.  

---

## ✨ Features  

- 🔐 **Authentication**
  - Email + Password signup & login  
  - Google OAuth integration  
  - Role-based access (User vs Admin)  

- 📝 **Blogging**
  - Users can create and submit blogs  
  - Blogs are stored in Supabase with `status= pending`  
  - Only approved blogs are visible publicly  

- ⚙️ **Admin Dashboard**
  - Accessible only to users with `role = admin`  
  - View pending blogs  
  - Approve ✅ or Reject ❌ blogs  
  - Secure with Supabase **Row Level Security (RLS)**  

- 🎨 **Modern UI**
  - TailwindCSS + Shadcn UI components  
  - Dark theme admin panel  
  - Responsive design  

---

## 🛠️ Tech Stack  

- **Frontend**: React (Vite + TypeScript), TailwindCSS, Shadcn UI  
- **Backend**: Supabase (Postgres + Auth + RLS policies)  
- **Auth**: Email/Password, Google OAuth (via Supabase)  
- **Deployment**: Vercel / Netlify (frontend), Supabase cloud  

---

## 🚀 Getting Started  

### 1. Clone the repo
```bash
  git clone https://github.com/your-username/vibe-blog.git
  cd vibe-blog 
```
Install dependencies:
```bash
  npm install
  or
  bun install
```
Setup environment variables

Create a .env file in the project root:
```
 VITE_SUPABASE_URL=your-supabase-url
 VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```
Run development server
```bash
npm run dev
```

## Future Scope

🖼 Add blog images (Supabase Storage)

💬 Add comments & likes system

📡 Realtime blog approval notifications

📱 Mobile-friendly PWA version

🧠 AI-powered blog summaries & recommendations

# 📜 License

MIT License © 2025 — Built with ❤️ for VIBE Hackathon 2025
