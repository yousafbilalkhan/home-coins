import { router } from "expo-router";
import { useState, useEffect } from "react";
import { DrawerLayoutAndroid, Image, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isloading, setIsloading] = useState(false);

  let navigate_to_welcome = () => {
    router.push("/Home"); //just for now   /welcome/WelcomeScreen1
  };

  useEffect(() => {
    setIsloading(true);
    const timeoutId = setTimeout(navigate_to_welcome, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200">
      <Image className="h-80 w-80" source={require('../assets/images/logo.png')} />
    </SafeAreaView>
  );
}
