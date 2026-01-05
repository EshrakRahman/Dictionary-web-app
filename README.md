# 📖 Dictionary Web App

![Dictionary Web App Preview](./preview.jpg)

A modern dictionary web application built as part of the **Frontend Mentor – Dictionary Web App Challenge**.  
The app allows users to search for word definitions, hear pronunciations, and customize the reading experience with font and theme controls.

🔗 **Live Site:** https://dictionarywebe.netlify.app/  
🔗 **GitHub Repo:** https://github.com/EshrakRahman/Dictionary-web-app

---

## 📌 Overview

### 🎯 The Challenge

Users should be able to:

- Search for words using the input field
- View definitions from the **Free Dictionary API**
- See validation feedback when submitting an empty search
- Play pronunciation audio when available
- Switch between **Sans Serif**, **Serif**, and **Monospace** fonts
- Toggle between **Light** and **Dark** themes
- Experience a responsive layout across devices
- See hover and focus states for all interactive elements
- **Bonus:** Automatically respect system color preference using `prefers-color-scheme`

---

## 🖼 Screenshot

> Add a file named `preview.jpg` at the root of your project to display the image above.

---

## 🛠 Installation & Setup

To run this project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/EshrakRahman/Dictionary-web-app.git
```

### 2️⃣ Navigate to the project directory

```bash
cd Dictionary-web-app
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🛠 My Process

### 🚀 Built With

- Semantic HTML5
- Tailwind CSS (v4 theme tokens)
- CSS custom properties
- Mobile-first workflow
- **React + Vite**
- React Context API (state management)
- Axios (API requests)
- Free Dictionary API

---

### 📚 What I Learned

- Managing **global state** cleanly using multiple contexts
- Proper handling of **async API states** (loading, success, error)
- Implementing **audio playback** safely with React refs
- Avoiding common hook pitfalls (rules of hooks)
- Creating **theme + font switching** using CSS variables
- Building scalable UI logic instead of hard-coded components

Example of safe audio handling:

```js
useEffect(() => {
  if (!audioSrc) return;
  audioRef.current = new Audio(audioSrc);

  return () => {
    audioRef.current.pause();
    audioRef.current = null;
  };
}, [audioSrc]);
```

---

### 🔮 Continued Development

- Improve accessibility (ARIA roles, keyboard support)
- Cache previous searches
- Add animations for transitions
- Improve error UI with illustrations
- Add language support

---

### 🔗 Useful Resources

- [Free Dictionary API](https://dictionaryapi.dev/)
- [Frontend Mentor](https://www.frontendmentor.io/)
- [React Docs – Context](https://react.dev/reference/react/useContext)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 👤 Author

- **GitHub:** [@EshrakRahman](https://github.com/EshrakRahman)
- **Frontend Mentor:** [@EshrakRahman](https://www.frontendmentor.io/profile/EshrakRahman)

---

## 🙏 Acknowledgments

- Frontend Mentor for the excellent challenge
- The open-source community for tools and documentation
- Free Dictionary API for providing pronunciation data

---

⭐ If you like this project, consider giving it a star!
