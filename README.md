# Events Explorer

A mobile application built with React Native and Expo.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or newer)
- npm or yarn package manager
- Expo Go app on your mobile device (available on iOS App Store and Google Play Store)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/codeapp17/city-pulse.git
   cd city-pulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

## Run Commands

### Start the development server
```bash
npm start
```
This will open the Expo DevTools in your browser and display a QR code.

### Run on iOS Simulator (macOS only)
```bash
npm run ios
```

### Run on Android Emulator
```bash
npm run android
```

### Run on Physical Device
1. Start the development server with `npm start`
2. Open the Expo Go app on your mobile device
3. Scan the QR code displayed in the terminal or browser

### Run in Web Browser
```bash
npm run web
```

## Project Structure

```
├── App.tsx                 # Main application component
├── app.json              # Expo configuration
├── assets/               # Images, fonts, and other static files
├── components/           # Reusable React components
├── hooks/                 # Reusable custom hooks for storage user and language
├── screens/              # Screen components
├── navigator/           # Navigation configuration
├── package.json          # Project dependencies
├── .env                   # API Urls and keys
└── README.md            # This file
```

## Assumptions

- **Node Version**: The project is configured to work with Node.js 18 or newer. Older versions may cause compatibility issues.

- **Mobile Device**: For testing on a physical device, you'll need the Expo Go app installed and both your computer and device connected to the same Wi-Fi network.

- **Platform Support**: The app is designed to run on both iOS and Android platforms. Some features may require platform-specific configurations.

- **Dependencies**: All necessary dependencies are listed in `package.json`. The project uses Expo SDK version specified in the configuration.

## Troubleshooting

### Metro Bundler Issues
```bash
npm start -- --clear
```

### Dependency Issues
```bash
rm -rf node_modules
npm install
```

### Port Already in Use
```bash
npm start -- --port 8081
```
