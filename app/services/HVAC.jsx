import { DrawerLayoutAndroid, Image, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import React from 'react'
import { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import ReviewStars from "../../components/ReviewStars";
import { Rating } from 'react-native-ratings';
import { SafeAreaView } from "react-native-safe-area-context";


const HVAC = () => {
    const router = useRouter();
    const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);

    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
        'SquadaOne-Regular': require('../../assets/fonts/SquadaOne-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return undefined;
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="bg-white flex items-center"
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View className="flex-1 flex-wrap items-center justify-between pb-10">

                    {/* HVAC Maintenance Services Screen */}

                    {/* Section 1 */}
                    <View style={{ width: wp(100) }} className="flex-col items-start justify-start">
                        <Image className="w-full" source={require('../../assets/images/HVAC Maintenance.png')} />
                        <TouchableOpacity onPress={() => router.back()} className="pt-12 pl-8 absolute">
                            <FontAwesome6 name="arrow-left-long" size={hp(4)} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* Section 2 */}
                    <View style={{ width: wp(90) }} className="flex-col items-start justify-center flex-wrap">

                        {/* main heading */}
                        <Text
                            className="py-7"
                            style={{
                                fontSize: hp(3), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                            }}>
                            HVAC Maintenance
                        </Text>

                        {/* about worker */}
                        <View className="flex-row items-center justify-center">

                            <Image source={require('../../assets/images/image 2363.png')} />

                            <View className="flex-col items-start justify-center ml-2">
                                <Text
                                    style={{
                                        fontSize: hp(2.2), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Jhon Abrahm
                                </Text>


                                <ReviewStars />


                                <View className="flex-row items-center">
                                    <MaterialIcons name="location-on" size={hp(1.6)} color="black" />
                                    <Text
                                        className="pl-1"
                                        style={{
                                            fontSize: hp(1.6), fontWeight: '600', fontFamily: 'Roboto-Regular', color: 'gray'
                                        }}>
                                        New York, USA
                                    </Text>
                                </View>

                            </View>
                        </View>

                        {/* column 1 */}
                        <View>
                            <Text
                                className="pt-5"
                                style={{
                                    fontSize: hp(1.8), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                Inspection Fee
                            </Text>

                            <Text
                                className="pt-4 pb-2"
                                style={{
                                    fontSize: hp(2.2), fontWeight: '600', fontFamily: 'Roboto-Regular', color: '#319F43'
                                }}>
                                Free
                            </Text>

                            <Text
                                style={{
                                    fontSize: hp(1.8), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                Our goal is to provide peace of mind to homeowners by offering affordable and reliable coverage for home services.
                            </Text>
                        </View>

                        {/* column 2 */}
                        <View>
                            <Text
                                className="pt-4 pb-2"
                                style={{
                                    fontSize: hp(2.2), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                About me
                            </Text>

                            <Text
                                style={{
                                    fontSize: hp(1.8), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'gray'
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                {isReadMoreVisible && (
                                    <Text style={{ color: 'gray' }}>
                                        {' '}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor neque in velit venenatis, ac dapibus magna tincidunt. Nullam a arcu ut arcu luctus ultricies. Suspendisse et urna eu justo consequat vestibulum.
                                    </Text>
                                )}
                                <Text
                                    style={{ color: '#4558C7', fontWeight: '600' }}
                                    onPress={() => setIsReadMoreVisible(!isReadMoreVisible)}
                                >
                                    {isReadMoreVisible ? ' Read less' : ' Read more...'}
                                </Text>
                            </Text>

                        </View>

                        {/* column 3 */}
                        <View>
                            <Text
                                className="pt-4 pb-2"
                                style={{
                                    fontSize: hp(2.2), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                }}>
                                Review
                            </Text>

                            <View
                                className="flex-col items-start justify-start"
                                style={{
                                    height: hp(20),
                                    width: wp(90),
                                    paddingHorizontal: 10,
                                    paddingTop: 15,
                                    marginVertical: 10,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    borderRadius: 15,
                                }}
                            >
                                <Rating
                                    type='star'
                                    ratingCount={5}
                                    showRating={false}
                                    ratingTextColor="gray"
                                    imageSize={14}
                                    readonly
                                    showReadOnlyText={false}
                                    fractions={1} // 0-20
                                    jumpValue={0.1}
                                    startingValue={4.5}
                                />
                                <TextInput
                                    style={{
                                        fontFamily: 'Roboto-Regular',
                                        fontSize: hp(2),
                                        color: 'black',
                                    }}
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                                    placeholderTextColor="gray"
                                    multiline={true}
                                    onChangeText={(text) => {
                                        if (text.split('\n').length === 1 && text.length >= wp(90) / hp(1.7)) {
                                            text += '\n';
                                        }
                                    }}
                                />

                            </View>

                        </View>
                    </View>

                    {/* Section 3 */}
                    <View style={{ width: wp(90) }} className="flex-row items-center justify-around flex-wrap">
                        <View
                            style={{ height: hp(6), width: wp(35) }}
                            className="bg-gray-300 flex-col items-start justify-around px-7 rounded-2xl">
                            <Text
                                className="pt-1"
                                style={{ fontSize: hp(1.4), fontWeight: '400', fontFamily: 'Roboto-Regular', color: '#0000008F' }}>
                                Price
                            </Text>
                            <Text
                                className="pb-1"
                                style={{ fontSize: hp(1.8), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black' }}>
                                $34.00/Hr
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => router.push("../user/UserWelcome")}
                            style={{ height: hp(6), width: wp(50) }}
                            className="bg-blue-900 flex items-center justify-center rounded-2xl"
                        >
                            <Text 
                                style={{ fontSize: hp(2.3), fontWeight: '600', fontFamily: 'Roboto-Regular', color: 'white' }}>
                                BOOK NOW
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default HVAC