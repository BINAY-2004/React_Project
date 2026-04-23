# 🔐 Password Generator App

A modern and responsive **Password Generator** built using React and Tailwind CSS.  
Designed with a **hacker-style UI**, this app allows users to generate secure passwords with customizable options.

![Preview](https://github.com/BINAY-2004/React_Project/blob/7e605b6e42708ff342e8c9ec4e7a9955e2a04094/Password-Generator/password.png)

## 🚀 Features

- 🔢 Adjustable password length (4–10)
- 🔘 Option to include numbers
- 🔣 Option to include special characters
- ⚡ Instant password generation on change
- 📋 One-click copy to clipboard
- 🎨 Stylish UI with background and responsive design

---

## 🛠️ Tech Stack

- React (Hooks: useState, useEffect, useCallback, useRef)
- Tailwind CSS
- JavaScript (ES6+)

---

## 🧠 How It Works

### 1. State Management
- `length` → controls password length
- `number` → toggle numbers
- `character` → toggle special characters
- `pass` → stores generated password

---

### 2. Password Generation Logic

- Base characters:
  - Alphabets (A–Z, a–z)
- Optional:
  - Numbers (0–9)
  - Special characters (!@#$%^&*)

📌 Learnings
Controlled components in React (value vs checked)
Handling form inputs
Using useCallback for optimization
Using useRef for DOM interaction
Dynamic styling with Tailwind + inline styles

