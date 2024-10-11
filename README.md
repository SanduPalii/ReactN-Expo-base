<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-expo-black?style=for-the-badge&logoColor=white&logo=expo&color=FD366E" alt="expo" />
    <img src="https://img.shields.io/badge/NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
  </div>

  <h3 align="center">React Native basic template for TAP</h3>

   <div align="center">
     Follow instructions step by step with our detailed tutorial.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- **React Native** with **Expo**: Expo will be the base framework, providing an easier development experience.
- **Tailwind CSS**: Use **NativeWind** for Tailwind-like styling in React Native, allowing flexibility to add more design systems later.
- **TypeScript**: TypeScript will be supported, but you can switch between TypeScript and JavaScript as needed.

## <a name="features">🔋 Features</a>

The following features will be included in the template:

- **Onboarding Screens**: A simple onboarding flow with multiple screens, possibly using a swipe-based navigation.
- **FlatList Integration**: Example usage of FlatLists to render lists of data dynamically.
- **Tab Navigation**: Using **Expo Router** or **React Navigation** for tab-based navigation, with placeholders for screens like **Teams**, **Settings**, and **Connection BLE**.
- **BLE (Bluetooth Low Energy)**: Placeholder screens for handling BLE connections, which you can further develop.
- **Expandable Design System**: NativeWind will be configured for Tailwind-style utility-first CSS. The template will allow you to add other design systems or libraries easily.

_You can use the [**React Native Directory**](https://reactnative.directory/) website to check the compatibility of third-party libraries with Expo. This ensures that the libraries you plan to add later will work seamlessly in your Expo project._

## <a name="quick-start">🤸 Quick Start</a>

The folder structure will be simple and scalable. Expo recommends a structure that fits most projects:

**`npx expo prebuild` Command**:

- Running `expo prebuild` generates the native `android` and `ios` directories, allowing you to add custom native code or native modules.

```
my-app/
├── android/                # Native Android project files
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── AndroidManifest.xml
│   │   │   │   └── java/
│   │   │   │       └── com/
│   │   │   │           └── myapp/
│   │   │   │               └── MainActivity.java
│   │   │   └── debug/
│   │   │   └── release/
│   │   ├── build.gradle
│   │   └── proguard-rules.pro
│   ├── build.gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle
│   └── gradle/             # Gradle wrapper files
│       └── wrapper/
│           ├── gradle-wrapper.jar
│           └── gradle-wrapper.properties
├── ios/                    # Native iOS project files
│   ├── MyApp/
│   │   ├── AppDelegate.h
│   │   ├── AppDelegate.m
│   │   ├── Info.plist
│   │   ├── main.m
│   │   └── Assets.xcassets
│   ├── MyApp.xcodeproj/    # Xcode project files
│   │   ├── project.pbxproj
│   │   └── xcshareddata/
│   ├── MyApp.xcworkspace/  # Xcode workspace files
│   └── Podfile             # CocoaPods dependencies
├── assets/                 # Images, fonts, etc.
├── components/             # Reusable components
├── screens/                # App screens
├── services/               # BLE and other services
├── navigation/             # Navigation configuration
├── types/                  # TypeScript types
├── App.tsx                 # Entry point of the app
├── app.json                # Expo configuration
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── babel.config.js         # Babel configuration
├── metro.config.js         # Metro bundler configuration
├── tailwind.config.js      # Tailwind configuration
└── node_modules/           # Project dependencies

```

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

</details>

## <a name="links">🔗 Links</a>

## <a name="more">🚀 More</a>
