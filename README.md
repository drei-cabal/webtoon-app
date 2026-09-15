# Webtoon App

A minimal webtoon-reader UI built to practice React Native fundamentals:
flexbox layouts, StyleSheet.create() styling, and nested navigation
(drawer → tabs → stack). The cover image is displayed with the built-in
`<Image>` component; real photo picking/cropping is included as commented-out,
optional code.

## Structure
```
Drawer
  └── Tab Navigator
        ├── Home (Stack: grid -> detail -> reader)
        ├── Library
        └── Profile
```

## Setup

### Option A: Expo Snack
Don't use Snack's "Import from GitHub" repo importer — it can fail during
import (e.g. `Failed to upload file asset` errors). Instead:
1. Go to https://snack.expo.dev and start a blank project
2. Create matching files/folders (`screens/`, `navigation/`, `data/`) using the "+" file button
3. Copy-paste each file's content in
4. Add dependencies via the Snack sidebar's dependency search: `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`, `@react-navigation/drawer`, `react-native-gesture-handler`, `react-native-reanimated`, `react-native-safe-area-context`, `react-native-screens`, `@expo/vector-icons`

### Option B: Local project
```bash
npx create-expo-app my-app
cd my-app
npx expo install react-native-safe-area-context react-native-screens
npx expo install react-native-gesture-handler react-native-reanimated
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer
npx expo install @expo/vector-icons
```

Copy this project's files into your project root, matching the existing
folder structure (`screens/`, `navigation/`, `data/`).

```bash
npx expo start
```

## What each screen demonstrates

| Screen | Flexbox concept | Notes |
|---|---|---|
| `HomeScreen` | `flexWrap` grid layout | Tapping a card navigates to Detail with its id as a param |
| `DetailScreen` | — | "Edit Cover" swaps in a remote placeholder image via `<Image>`; a full photo-picker with crop is included but commented out |
| `ReaderScreen` | Stacked flex-column "panels" | Receives the webtoon title via route params |
| `LibraryScreen` | `flexDirection: row` list rows | Static placeholder list |
| `ProfileScreen` | `flexDirection: row` header | Avatar + text side by side |

## Cover image — how it works
`DetailScreen` shows a color placeholder until "Edit Cover" is tapped, which
swaps in a remote placeholder photo via `<Image source={{ uri: ... }}>`.
A remote URL is used instead of a bundled local asset specifically because
Expo Snack's "Import from GitHub" feature can fail on binary asset files
(`Failed to upload file asset` errors) — keeping the repo asset-free avoids
that entirely.

If you want the user to actually pick and crop their own photo, `DetailScreen.js`
has a commented-out block using `expo-image-picker`. To enable it:
1. `npx expo install expo-image-picker`
2. Uncomment the import and the `pickCoverImage` function at the top of the file
3. Change the "Edit Cover" button's `onPress` from `cycleCover` to `pickCoverImage(setCoverUri)`

## Troubleshooting
Same gotchas as any React Navigation setup:
- `import 'react-native-gesture-handler'` must be the first line of `App.js`
- `react-native-reanimated/plugin` must be last in `babel.config.js`, then restart with `npx expo start -c`
