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
<img width="150" height="300" alt="IMG_8541" src="https://github.com/user-attachments/assets/440df21d-220c-44c8-96d4-399c6b1976df" />
<img width="150" height="300" alt="IMG_8540" src="https://github.com/user-attachments/assets/300bbaf4-e520-4d2b-bb2e-8645d31b03b3" />
<img width="150" height="300" alt="IMG_8539" src="https://github.com/user-attachments/assets/2c59bebf-1d58-47aa-b9a1-ad1a9c9b6ef6" />
<img width="150" height="300" alt="IMG_8538" src="https://github.com/user-attachments/assets/e5277cf5-4ad6-474c-bffa-b3108270c554" />
<img width="150" height="300" alt="IMG_8537" src="https://github.com/user-attachments/assets/af184310-3567-4594-8691-950b631fd778" />
<img width="150" height="300" alt="IMG_8536" src="https://github.com/user-attachments/assets/7bad935a-014a-4660-9c6d-5ca7358b9212" />
<img width="150" height="300" alt="IMG_8535" src="https://github.com/user-attachments/assets/e066480d-c2cb-48dd-afc2-5812c4323d6b" />
<img width="150" height="300" alt="IMG_8534" src="https://github.com/user-attachments/assets/12f60123-3bca-437c-9352-959a90a0f71b" />
<img width="150" height="300" alt="IMG_8533" src="https://github.com/user-attachments/assets/a86ef1a6-f903-4513-a783-ddd7376743a8" />
<img width="150" height="300" alt="IMG_8531" src="https://github.com/user-attachments/assets/db681545-43ef-471f-9390-abbebd2ec667" />
<img width="150" height="300" alt="IMG_8530" src="https://github.com/user-attachments/assets/2eb81638-f549-4ae8-8e2b-9c0dd20d5e80" />
<img width="150" height="300" alt="IMG_8529" src="https://github.com/user-attachments/assets/713194d2-b83a-4b77-9bb5-e97858231d87" />
