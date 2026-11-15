# SanskritSetu – Digital Sanskrit-English Glossary for Indian Knowledge Systems

<p align="center">
  <strong>Bridging Sanskrit Knowledge with the Modern World</strong>
</p>

<p align="center">
  A searchable digital glossary of Sanskrit terminology from Indian Knowledge Systems (IKS).
</p>

<p align="center">
  <a href="https://sanskrit-setu-chi.vercel.app/">Live Website</a>
</p>

---

## About SanskritSetu

**SanskritSetu** is a web-based Sanskrit-English glossary designed to make terminology from Indian Knowledge Systems more accessible, searchable, and understandable.

The platform provides Sanskrit words, English equivalents, transliteration, definitions, and categorized terminology through a user-friendly interface.

It aims to bridge traditional Sanskrit knowledge and modern digital technology.

## Key Features

- **Searchable Glossary:** Search Sanskrit terminology and explore meanings.
- **Categories:** Browse terms organized into different knowledge categories.
- **Word Details:** View definitions, transliteration, and English equivalents.
- **User Authentication:** Secure login and registration functionality.
- **Favourites:** Save important glossary entries.
- **Recently Viewed:** Access previously explored words.
- **User Dashboard:** Manage personal account information.
- **Admin Dashboard:** Manage glossary words, categories, and users.
- **Notifications:** Receive application notifications.
- **Dark Mode:** Switch between light and dark themes.
- **Responsive Design:** Accessible across desktop, tablet, and mobile screens.

## Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Deployment
- Vercel – Frontend Hosting
- Render – Backend Hosting

### Version Control
- Git
- GitHub

## Project Structure

```text
SanskritSetu/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── index.html
│
├── backend/
│   ├── data/
│   ├── scripts/
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

## Live Application

**Frontend:**  
https://sanskrit-setu-chi.vercel.app/

**Backend:**  
https://sanskritsetu-backend.onrender.com/

## Local Installation

### Prerequisites

- Node.js
- npm
- MongoDB database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/kundan251/-SanskritSetu.git
```

### 2. Navigate to the Project

```bash
cd -SanskritSetu
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Configure Frontend Environment

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=http://localhost:5000
```

### 5. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 6. Configure Backend Environment

Create a `.env` file inside the backend directory and configure the required variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_NAME=your_admin_name
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Never commit actual credentials or environment secrets to GitHub.

### 7. Start the Backend

```bash
npm run dev
```

### 8. Start the Frontend

In another terminal:

```bash
cd frontend
npm run dev
```

Open the local frontend URL displayed by Vite in your browser.

## Project Objectives

1. Digitize frequently occurring Sanskrit terminology from Indian Knowledge Systems.
2. Provide English equivalents and understandable definitions.
3. Organize terminology into meaningful categories.
4. Make Sanskrit knowledge easier to discover through digital search.
5. Develop a responsive and accessible web-based glossary.

## Project Information

| Detail | Information |
|---|---|
| Project Name | SanskritSetu |
| Project Type | BCA Academic Project |
| Course | Bachelor of Computer Applications (BCA) |
| College | International School of Management, Patna |
| University | Aryabhatta Knowledge University, Patna |
| Session | 2024–2027 |
| Project Guide | Mr. Bhawesh Kumar |

## Future Scope

- Expansion of the Sanskrit terminology database.
- Improved search and filtering capabilities.
- Additional Indian Knowledge Systems categories.
- Enhanced SEO and search engine visibility.
- Further improvements in accessibility and user experience.

## License

This project is developed as an academic project. Please contact the project owner for permissions regarding reuse or distribution.

---

<p align="center">
  <strong>SanskritSetu – Connecting Sanskrit Knowledge with the Digital World.</strong>
</p>