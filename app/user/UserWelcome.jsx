import { DrawerLayoutAndroid, Image, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";


const UserWelcome = () => {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'SquadaOne-Regular': require('../../assets/fonts/SquadaOne-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return undefined;
    }

    return (

        <>

            <StatusBar style="light" backgroundColor="transparent" />

            <View style={{ backgroundColor: "#283891" }} className="flex-1 items-start justify-start">

                {/* UserWelcome Screen */}

                {/* Back Navigation */}
                <View style={{ width: wp(100), height: hp(15) }}>
                    <SafeAreaView>
                        <TouchableOpacity onPress={() => router.back()} style={{ paddingLeft: 25, paddingTop: 25 }}>
                            <FontAwesome6 name="arrow-left-long" size={hp(4)} color="white" />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>


                {/* Section 1 */}
                <View style={{ width: wp(100), height: hp(20) }} className="flex-col items-center justify-center">

                    <Text
                        style={{
                            fontSize: hp(7), fontFamily: 'SquadaOne-Regular', fontWeight: '600', color: "#FFFFFF", paddingBottom: 50,
                        }}>
                        Welcome!
                    </Text>

                </View>

                {/* Section 2 */}
                <View
                    className="pt-10 flex-col items-center justify-start bg-gray-200"
                    style={{
                        width: wp(100),
                        height: hp(70),
                        borderColor: 'black',
                        borderTopWidth: 10,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderTopStartRadius: 35,
                        borderTopEndRadius: 35,

                    }}>
                    <View style={{ width: wp(90) }} className="flex-col items-center justify-center">

                        <Image className="h-60 w-60" source={require('../../assets/images/logo.png')} />

                        <Text
                            className="pt-5 pb-10"
                            style={{
                                fontSize: hp(1.6), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'gray', textAlign: "center"
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>

                        <TouchableOpacity
                            onPress={() => router.push("/user/LogIn")}
                            style={{ height: hp(6), width: wp(50) }}
                            className="bg-blue-900 flex items-center justify-center rounded-3xl"
                        >
                            <Text
                                style={{ fontSize: hp(3), fontWeight: '800', fontFamily: 'Roboto-Regular', color: 'white' }}>
                                Log In
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => router.push("/user/SignUp")}
                            style={{ height: hp(6), width: wp(50) }}
                            className="bg-blue-900 mt-3 flex items-center justify-center rounded-3xl"
                        >
                            <Text
                                style={{ fontSize: hp(3), fontWeight: '800', fontFamily: 'Roboto-Regular', color: 'white' }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

        </>
    )
}

export default UserWelcome