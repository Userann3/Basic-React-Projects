# 🔐 Advanced Password Generator

A modern, user-friendly password generator built with **React.js** and **Tailwind CSS**, featuring real-time password generation, customizable options, light/dark mode, and React Toastify for copying.

## 🌙 Dark Mode
![Password Generator - Dark](public/password-generator-dark.png)

## ☀️ Light Mode
![Password Generator - Light](public/password-generator-light.png)

---

## 🚀 Features
- ✅ **Real-time password generation**
- 🎨 **Light & Dark Mode Toggle**
- 📏 **Adjustable password length**
- 🔢 **Include numbers, symbols, uppercase & lowercase letters**
- 📋 **One-click copy functionality (with toast notification)**
- 🔒 **Secure & Randomized Passwords**
- 📱 **Responsive and user-friendly design**

---

## 📂 Folder Structure
```
📦 password-generator
├── 📁 public
│   ├── password-generator-dark.png   # Dark mode screenshot
│   ├── password-generator-light.png  # Light mode screenshot
├── 📁 src
│   ├── 📁 components
│   │   ├── PasswordGenerator.js  # Main password generator component
│   │   ├── ThemeToggle.js  # Light/Dark mode toggle button
│   ├── 📁 styles
│   │   ├── App.css  # Global styles
│   ├── 📁 context
│   │   ├── ThemeContext.js  # Context for dark/light mode
│   ├── App.js
│   ├── index.js
│   ├── ...
├── .gitignore
├── package.json
├── README.md
```

---

## 🔧 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/password-generator.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd password-generator
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm start
   ```

---

## 🛠 Customization

### ✅ Modify **Toast Notifications** (React Toastify) in `PasswordGenerator.js`:
```js
toast.success("Password Copied!", { position: "top-right", autoClose: 2000 });
```

### 🎨 Change **Password Text Color** in Light Mode (Inside `PasswordGenerator.js`):
```js
<span className={`text-lg font-mono ${darkMode ? "text-white" : "text-gray-800"}`}>
  {password}
</span>
```

---

## 💡 Technologies Used
- **React.js** (Functional Components, Hooks)
- **Tailwind CSS** (For styling)
- **React Toastify** (For copy notifications)
- **Context API** (For theme management)

---

## 🎯 Future Enhancements
- 🔑 **Generate Passphrases** (e.g., `"BlueRocket#42!"`)
- 📂 **Save & Retrieve Passwords**
- 🌐 **Deploy to GitHub Pages or Vercel**
- 🎨 **More Customization Options (Fonts, Backgrounds, Animations)**

---

## 👤 Author
- **Your Name**
- GitHub: [Userann3] (https://github.com/Userann3)

---

## 📜 License
This project is licensed under the **MIT License**.

---

### **How to Add This README.md to Your Project**
1. Create a new file in the root directory and name it `README.md`.
2. Copy and paste the above content into the file.
3. Save and commit the file:
   ```sh
   git add README.md
   git commit -m "Added README file"
   git push origin main
   ```

