# Little Lemon Newsletter App

A clean and elegant React Native application showcasing modern mobile development practices through a newsletter subscription flow for the Little Lemon Mediterranean Bistro.

![](little_lemon.gif)

## 🚀 Project Overview

This mobile application demonstrates a complete navigation flow between a welcome screen and subscription screen, featuring polished UI components, form validation, and responsive design principles. Built as a showcase of React Native development skills.

## ✨ Features

- **Modern Navigation**: Implements React Navigation 6 with native stack navigator
- **Clean UI Design**: Professional styling with consistent color scheme and typography
- **Form Validation**: Real-time email validation with visual feedback
- **Responsive Layout**: Optimized for various screen sizes using SafeAreaView
- **User Experience**: Smooth transitions and intuitive navigation flow
- **State Management**: Controlled components with React hooks

## 🛠 Tech Stack

- **Framework**: React Native 0.69.9
- **Development Platform**: Expo SDK 46
- **Navigation**: React Navigation 6
- **State Management**: React Hooks (useState)
- **UI Components**: Native React Native components
- **Safe Areas**: React Native Safe Area Context
- **Form Validation**: Custom regex-based email validation

## 📱 App Flow

1. **Welcome Screen**: 
   - Displays Little Lemon branding and logo
   - Professional welcome message
   - Call-to-action button to access newsletter

2. **Newsletter Subscription**:
   - Email input with real-time validation
   - Dynamic button states (enabled/disabled)
   - Success feedback upon subscription

## 🏗 Architecture

```
little-lemon-starter-code/
├── App.js                 # Root component with NavigationContainer
├── navigators/
│   └── RootNavigator.js   # Stack navigator configuration
├── screens/
│   ├── WelcomeScreen.js   # Landing page with branding
│   └── SubscribeScreen.js # Newsletter subscription form
├── utils/
│   └── index.js           # Email validation utility
└── assets/                # Images and branding assets
```

## 🎨 Design Highlights

- **Color Palette**: Professional Mediterranean-inspired theme (#495E57)
- **Typography**: Bold, readable fonts with proper spacing
- **Layout**: Centered components with proper margins and padding
- **Interactive Elements**: Pressable buttons with hover states
- **Visual Hierarchy**: Strategic use of font sizes and weights

## 🔧 Key Development Skills Demonstrated

- **React Native Core Concepts**: Components, props, state management
- **Navigation Implementation**: Multi-screen app with React Navigation
- **Form Handling**: Controlled inputs with validation
- **Styling**: StyleSheet usage with responsive design
- **Asset Management**: Image handling and optimization
- **Code Organization**: Modular file structure and separation of concerns
- **User Experience**: Intuitive navigation and feedback systems

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd little-lemon-starter-code
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npx expo start
```

4. Run on your preferred platform
```bash
npx expo start --ios     # iOS Simulator
npx expo start --android # Android Emulator
npx expo start --web     # Web browser
```

## 📋 Development Features

- **Hot Reload**: Instant updates during development
- **Cross-Platform**: Runs on iOS, Android, and web
- **Expo Integration**: Simplified development and testing workflow
- **Component-Based Architecture**: Reusable and maintainable code structure

## 🎯 Skills Showcased

This project effectively demonstrates:

- **Mobile App Development**: Complete React Native application development
- **Modern JavaScript**: ES6+ features, destructuring, and arrow functions
- **Component Design**: Custom reusable components with proper styling
- **Navigation Patterns**: Industry-standard navigation implementation
- **Form Validation**: Client-side validation with user feedback
- **State Management**: Efficient use of React hooks
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Code Quality**: Clean, organized, and well-documented code

## 📱 Screenshots

The app features a professional design with:
- Branded welcome screen with Little Lemon logo
- Clean newsletter subscription interface
- Responsive button states and form validation
- Consistent visual design throughout the application

---

**Built with React Native** | **Developed by Charan** | **Portfolio Project**

This project serves as a demonstration of React Native development capabilities, showcasing clean code practices, modern mobile app development patterns, and professional UI/UX design implementation.
