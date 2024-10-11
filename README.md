# ReactN-Expo-base

### 1. **Tech Stack:**

- **React Native** with **Expo**: Expo will be the base framework, providing an easier development experience.
- **Tailwind CSS**: Use **NativeWind** for Tailwind-like styling in React Native, allowing flexibility to add more design systems later.
- **TypeScript**: TypeScript will be supported, but you can switch between TypeScript and JavaScript as needed.

### 2. **Features:**

The following features will be included in the template:

- **Onboarding Screens**: A simple onboarding flow with multiple screens, possibly using a swipe-based navigation.
- **FlatList Integration**: Example usage of FlatLists to render lists of data dynamically.
- **Tab Navigation**: Using **Expo Router** or **React Navigation** for tab-based navigation, with placeholders for screens like **Teams**, **Settings**, and **Connection BLE**.
- **BLE (Bluetooth Low Energy)**: Placeholder screens for handling BLE connections, which you can further develop.
- **Expandable Design System**: NativeWind will be configured for Tailwind-style utility-first CSS. The template will allow you to add other design systems or libraries easily.

_You can use the [**React Native Directory**](https://reactnative.directory/) website to check the compatibility of third-party libraries with Expo. This ensures that the libraries you plan to add later will work seamlessly in your Expo project._

### 3. **Folder Structure (Following Expo Recommendations):**

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
