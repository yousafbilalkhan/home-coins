import { DrawerLayoutAndroid, Image, Text, View, Button, TouchableOpacity } from "react-native";
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from "expo-router";

const WelcomeScreen3 = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 items-center justify-around bg-gray-200">
            <View style={{ height: hp(10), width: wp(90) }} className="flex items-end justify-center">
                <TouchableOpacity
                    onPress={() => router.push("/Home")}
                    style={{ height: hp(5), width: wp(20) }}
                    className="bg-blue-900 flex items-center justify-center rounded-full"
                >
                    <Text style={{ fontSize: hp(2.5) }} className="text-white">
                    Skip
                    </Text>
                </TouchableOpacity>
            </View>

            <View className="flex items-center justify-center">
                <Image className="h-70 w-70 z-10" source={require('../../assets/images/image 2360.png')} />
                <Image className="h-85 w-85 absolute" source={require('../../assets/images/Ellipse 232.png')} />
            </View>

            <View style={{ width: wp(90) }} className="flex items-center justify-center">
                <Text style={{ fontSize: hp(3.5), fontFamily: 'Roboto', fontWeight: '700', }} className="text-center">Protect Your Home with HomeCoin Warranties!</Text>
            </View>

            <View className="flex flex-row justify-center items-center mt-4">
                <View style={{ width: 6, height: 6, borderRadius: 5, backgroundColor: 'white', margin: 5 }} />
                <View style={{ width: 6, height: 6, borderRadius: 5, backgroundColor: 'white', margin: 5 }} />
                <View style={{ width: 25, height: 6, borderRadius: 5, backgroundColor: 'black', margin: 5 }} />
            </View>

            <View>
                <View style={{ height: hp(8), width: wp(90) }} className="flex items-center justify-center">
                    <TouchableOpacity
                        onPress={() => router.push("Home")}
                        style={{ height: hp(8), width: wp(18) }}
                        className="bg-blue-900 flex items-center justify-center rounded-2xl"
                    >
                        <MaterialIcons name="arrow-forward-ios" size={hp(3.5)} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen3
