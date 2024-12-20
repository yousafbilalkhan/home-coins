import { Stack, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Import your global CSS file
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
