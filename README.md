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

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/SanduPalii/ReactN-Expo-base.git
cd ReactN-Expo-base
```

**Rename your React Native project**

Update `app.json`
`"name": "YourProjectName",`
`"slug": "yourprojectname",`

Note: The "slug" field should be a URL-friendly version of the name (all lowercase, no spaces).

Rename in the `package.json` File
`"name": "newprojectname",`

### iOS Steps:

<details>
<summary><code>Rename iOS Directory </code></summary>
1. **Open the iOS Project in Xcode**:
   - Navigate to the `ios/` directory.
   - Open the `.xcworkspace` file (or `.xcodeproj` if no `.xcworkspace` is available) in Xcode.
2. **Rename the iOS Project in Xcode**:
   - In Xcode, click on the project name in the left sidebar.
   - Right-click the project and select "Rename". Enter the new name.
3. **Update Bundle Identifier**:
   - In Xcode, select the project in the left sidebar and go to the **General** tab.
   - Update the **Bundle Identifier** to reflect your new project name. For example, `com.yourname.newprojectname`.
4. **Rename iOS Directory**:
   - In your project folder, manually rename the `ios/MyOldProject` folder to `ios/NewProjectName`.
5. **Update `Info.plist`**:
   - In Xcode, select the `Info.plist` file under the `ios/NewProjectName` directory.
   - Update the `CFBundleName` field to your new project name.
   </details>

### Android Steps:

<details>
<summary><code>Rename Android Directory </code></summary>

1. **Update `android/app/build.gradle`**:
   - Open `android/app/build.gradle`.
   - Update the `applicationId` to match your new package name (e.g., `com.yourname.newprojectname`).
2. **Rename the Package in the Manifest**:
   - Open `android/app/src/main/AndroidManifest.xml`.
   - Update the `package` attribute to your new package name (e.g., `com.yourname.newprojectname`).
3. **Rename the Java Package**:

   - Navigate to `android/app/src/main/java/com/yourname/oldprojectname/`.
   - Rename the folder to `newprojectname`.
   - Open each Java file (e.g., `MainActivity.java`) and update the package name at the top of each file:

   ```java
   package com.yourname.newprojectname;
   ```

4. **Update `strings.xml`**:

   - Open `android/app/src/main/res/values/strings.xml`.
   - Update the `app_name` field to the new project name:

   ```xml
   <string name="app_name">NewProjectName</string>
   ```

5. **Clean and Rebuild the Project**:

   - Run the following commands to clean and rebuild the Android project:

   ```bash
   cd android
   ./gradlew clean
   ```

   </details>

Clearing the cache can help ensure that the old project name doesn’t interfere with the new setup:

```bash
expo start -c
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npx expo start
```

**Expo Go**

Download the [Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

**iOS Simulator**

Navigate to the [Expo documentation](https://docs.expo.dev/workflow/ios-simulator/) to learn how to install and run your application on an iOS Simulator for local development.

**Android Emulator**

Navigate to the [Expo documentation](https://docs.expo.dev/workflow/android-studio-emulator/) to learn how to install and run your application on an Android Emulator for local development.

Note: `expo prebuild` generates the native `android` and `ios` directories, allowing you to add custom native code or native modules.

<details>
<summary><code>Structure that fits most projects</code></summary>

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

</details>

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
