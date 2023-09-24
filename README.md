# Uber Clone App

<img src="Screenshot.png" width="300" alt="Uber Clone App Screenshot">

## Overview

This project is an Uber Clone app built with React Native. The goal is to provide a functional and clean UI similar to Uber, including ride selection and real-time navigation. Thanks to [YouTube Tutorial](https://www.youtube.com/watch?v=bvn_HYpix6s&list=PLf16UKl7nR5AjcrYOe1niifJSAls3spDk) for inspiring me.

## Built With Expo

This project uses [Expo](https://expo.dev/), a framework and platform for React Native. It enables faster development and includes a variety of libraries and tools.

To run the Expo project locally:

1. Install the Expo CLI: `npm install -g expo-cli`
2. In your project directory, run: `expo start`

## Google APIs Used

This project utilizes the following Google APIs:

### Google Maps JavaScript API

- Used for displaying maps and handling map events.

### Google Places API

- Powers the location search and autocomplete functionality.

### Google Directions API

- Used for getting driving directions and route information.

### Google Distance Matrix API

- Provides travel distance and time between multiple locations.

### Google Geocoding API

- Converts between addresses and geographic coordinates (latitude & longitude).

Please make sure to get your own API keys for these services from the [Google Cloud Console](https://console.cloud.google.com/).

## Features

- Real-time navigation
- Selection of different types of rides (Uber Go, Uber XL, Uber X)
- Current location and destination selection
- Estimated travel time and distance
- Order Food (Feature in Progress)

## Technologies Used

- React Native
- Redux for state management
- React Navigation
- REST APIs
- React Native Elements (UI library)

## Installation

### Prerequisites

- Node.js
- NPM or Yarn
- React Native CLI
- Android Studio or Xcode (for running on a simulator)

### Clone the repository and install dependencies

```sh
git clone https://github.com/your-github-username/uberclone.git
cd uberclone
npm install
```

### To run the app

npx react-native run-ios
