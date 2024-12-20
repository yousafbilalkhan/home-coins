import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";


const SignUp = () => {
    const router = useRouter();

    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [personalData, setPersonalData] = useState(false);

    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
        "SquadaOne-Regular": require("../../assets/fonts/SquadaOne-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (

        <>
            <StatusBar style="light" backgroundColor="transparent" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">

                    <View style={{ backgroundColor: "#283891" }} className="flex-1 items-start justify-start">

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
                                Get Started
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
                            }}
                        >
                            <View style={{ marginBottom: hp(4) }}>

                                {/* Enter Full Name */}

                                <Text style={{ color: "black", fontSize: hp(1.5), width: wp(18), paddingLeft: 8, marginLeft: 16, marginBottom: -7.5, backgroundColor: "#E5E7EB", zIndex: 2 }}>Full Name</Text>

                                <TextInput
                                    style={{
                                        height: hp(7.5),
                                        width: wp(80),
                                        borderWidth: 1,
                                        borderColor: "#A9A8A8",
                                        borderRadius: 10,
                                        paddingHorizontal: 10,
                                        marginBottom: hp(4),
                                    }}
                                    placeholder="Enter Full Name"
                                    value={Name}
                                    onChangeText={setName}
                                />

                                {/* Enter Email */}

                                <Text style={{ color: "black", fontSize: hp(1.5), width: wp(12), paddingLeft: 8, marginLeft: 16, marginBottom: -7.5, backgroundColor: "#E5E7EB", zIndex: 2 }}>Email</Text>

                                <TextInput
                                    style={{
                                        height: hp(7.5),
                                        width: wp(80),
                                        borderWidth: 1,
                                        borderColor: "#A9A8A8",
                                        borderRadius: 10,
                                        paddingHorizontal: 10,
                                        marginBottom: hp(4),
                                    }}
                                    placeholder="Enter Email"
                                    value={email}
                                    onChangeText={setEmail}
                                />

                                {/* Enter Password */}

                                <Text style={{ color: "black", fontSize: hp(1.5), width: wp(18), paddingLeft: 8, marginLeft: 16, marginBottom: -7.5, backgroundColor: "#E5E7EB", zIndex: 2 }}>Password</Text>


                                <TextInput
                                    style={{
                                        height: hp(7.5),
                                        width: wp(80),
                                        borderWidth: 1,
                                        borderColor: "#A9A8A8",
                                        borderRadius: 10,
                                        paddingHorizontal: 10,
                                    }}
                                    placeholder="Enter Password"
                                    value={password}
                                    secureTextEntry
                                    onChangeText={setPassword}
                                />
                            </View>

                            {/* I agree to the Processing of Personal Data */}

                            <View
                                className="flex-row justify-between items-center"
                                style={{
                                    marginBottom: hp(3),
                                    width: wp(80),
                                }}
                            >
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center" }}
                                    onPress={() => setPersonalData(!personalData)}
                                >
                                    <View
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderWidth: 1,
                                            borderColor: "#000",
                                            borderRadius: 4,
                                            backgroundColor: personalData ? "#0000FF" : "#FFFFFF",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {personalData && <FontAwesome6 name="check" size={14} color="#FFFFFF" />}
                                    </View>

                                    <Text style={{ marginLeft: 8, color: "#808080" }}>I agree to the Processing of</Text>

                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => router.push("")}>
                                    <Text style={{ color: "#0000FF" }}>Personal Data</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                onPress={() => router.push("/user/SignUp")}
                                style={{ height: hp(7.5), width: wp(80) }}
                                className="bg-blue-900 m-5 flex items-center justify-center rounded-2xl"
                            >
                                <Text
                                    style={{ fontSize: hp(3), fontWeight: '800', fontFamily: 'Roboto-Regular', color: 'white' }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>

                            {/* Log in Section */}
                            <View style={{ marginTop: hp(1), alignItems: "center" }}>
                                <Text style={{ color: "#808080" }}>
                                    Already have an account? {" "}
                                    <Text
                                        style={{ color: "#0000FF", fontWeight: "bold" }}
                                        onPress={() => router.push("/user/LogIn")}
                                    >
                                        Log in
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

export default SignUp;
