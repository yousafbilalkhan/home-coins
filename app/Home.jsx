import { DrawerLayoutAndroid, Image, Text, View, Button, TouchableOpacity, Modal, StyleSheet, ImageBackground } from "react-native";
import React, { useState } from 'react';
// import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

const Home = () => {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'SquadaOne-Regular': require('../assets/fonts/SquadaOne-Regular.ttf'),
    });

    const [isModalVisible, setModalVisible] = useState(false); // State to manage bottom sheet visibility

    if (!fontsLoaded) {
        return undefined;
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // useFocusEffect(
    //     React.useCallback(() => {
    //         // Reset modal visibility when the screen is focused
    //         setModalVisible(false);
    //         return () => {
    //             setModalVisible(false); // Reset when leaving the screen
    //         };
    //     }, [])
    // );

    return (


        <SafeAreaView className="flex-1 items-center justify-around bg-gray-200 pt-3">

            {/* top Bar */}

            <View style={{ width: wp(90) }} className="flex-row items-center justify-between">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity
                        onPress={() => router.push("")}
                        className="bg-blue-900 p-2.5 mr-5 flex items-center justify-center rounded-full"
                    >
                        <MaterialIcons name="home" size={hp(3.5)} color="white" />
                    </TouchableOpacity>
                    <View>
                        <Text
                            style={{
                                fontSize: hp(3.5), fontFamily: 'SquadaOne-Regular', fontWeight: '600',
                            }}>
                            Welcome,
                        </Text>
                        <View className="flex-row items-center justify-start">
                            <Image className="w-5 h-5 mr-2" source={require('../assets/images/Vector.png')} />
                            <Text
                                style={{
                                    fontSize: hp(2.5), fontWeight: '200', fontFamily: 'Roboto-Regular'
                                }}>
                                Hi ,There
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => router.push("")}
                    className="bg-blue-900 p-2.5 flex items-center justify-center rounded-full"
                >
                    <MaterialIcons name="notifications" size={hp(3.5)} color="white" />
                </TouchableOpacity>
            </View>

            {/* Home Screen */}

            <View style={{ width: wp(90) }} className="flex-1 items-center justify-around mt-5">

                {/* Section 1 */}
                <View style={{ width: wp(88) }} className="bg-blue-900 flex-row items-center justify-evenly px-7 py-5 rounded-2xl">
                    <View className="w-44">
                        <View className="flex-row items-center justify-start">
                            <Text
                                className="mr-2"
                                style={{
                                    fontSize: hp(4.2), fontWeight: '200', fontFamily: 'SquadaOne-Regular', color: 'white'
                                }}>
                                20%
                            </Text>
                            <MaterialIcons name="local-fire-department" size={hp(4.2)} color="#F8BD00" />
                        </View>
                        <View>
                            <Text
                                className="pt-4"
                                style={{
                                    fontSize: hp(3), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#F8BD00'
                                }}>
                                Today’s Special!
                            </Text>
                            <Text
                                className="pt-2"
                                style={{
                                    fontSize: hp(1.8), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'white'
                                }}>
                                Get Discount for every Service. Only Valid for today
                            </Text>
                        </View>
                    </View>
                    <View className="w-40">
                        <Image source={require('../assets/images/Group 34595.png')} />
                    </View>
                </View>


                {/* Section 2 */}
                <View className="flex-col items-center justify-around">

                    <View
                        className="pt-1 pb-1 pr-12 pl-12 mb-7"
                        style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: 'gray'
                        }}>
                        <Text style={{
                            fontSize: hp(2.7), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#000000',
                        }}>
                            Our Services
                        </Text>
                    </View>

                    <View className="flex-row items-center justify-center">

                        {/* Section 2 box 1 */}
                        <View style={{ width: wp(26) }}>
                            <TouchableOpacity
                                onPress={() => router.push("/services/Plumbing")}
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: '#F8BD00',
                                    backgroundColor: '#3292EB1F',
                                    height: hp(10)
                                }}>
                                <View
                                    className="bg-blue-900 w-8 h-8 -mt-3 -ml-3 flex items-center justify-center rounded-full"
                                >
                                    <MaterialCommunityIcons name="pipe" size={hp(3)} color="white" />
                                </View>
                                <Text
                                    className="-top-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                                    }}>
                                    Plumbing
                                </Text>

                                <View
                                    className="flex-row items-center justify-center rounded pb-2"
                                >
                                    <Text
                                        className="text-white"
                                        style={{
                                            fontSize: hp(1.3), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                        }}>
                                        Read More
                                    </Text>
                                    <MaterialIcons name="arrow-forward" size={hp(1.1)} color="black" />
                                </View>
                            </TouchableOpacity>

                        </View>

                        {/* Section 2 box 2 */}
                        <View style={{ width: wp(26) }} className="mx-5">
                            <TouchableOpacity
                                onPress={() => router.push("/services/ElectricalWork")}
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: '#F8BD00',
                                    backgroundColor: '#3292EB1F',
                                    height: hp(10)
                                }}>
                                <View
                                    className="bg-blue-900 w-8 h-8 -mt-3 -ml-3 flex items-center justify-center rounded-full"
                                >
                                    <MaterialIcons name="electric-bolt" size={hp(3)} color="white" />
                                </View>
                                <Text
                                    className="-top-2 px-4 text-center"
                                    style={{
                                        fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                                    }}>
                                    Electrical work
                                </Text>

                                <View
                                    className="flex-row items-center justify-center rounded pb-2"
                                >
                                    <Text
                                        className="text-white"
                                        style={{
                                            fontSize: hp(1.3), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                        }}>
                                        Read More
                                    </Text>
                                    <MaterialIcons name="arrow-forward" size={hp(1.1)} color="black" />
                                </View>
                            </TouchableOpacity>

                        </View>

                        {/* Section 2 box 3 */}
                        <View style={{ width: wp(26) }}>
                            <TouchableOpacity
                                onPress={() => router.push("/services/HVAC")}
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: '#F8BD00',
                                    backgroundColor: '#3292EB1F',
                                    height: hp(10)
                                }}>
                                <View
                                    className="bg-blue-900 w-8 h-8 -mt-3 -ml-3 flex items-center justify-center rounded-full"
                                >
                                    <FontAwesome6 name="screwdriver-wrench" size={hp(2.5)} color="white" />
                                </View>
                                <Text
                                    className="-top-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                                    }}>
                                    HVAC Maintenance
                                </Text>

                                <View
                                    className="flex-row items-center justify-center rounded pb-2"
                                >
                                    <Text
                                        className="text-white"
                                        style={{
                                            fontSize: hp(1.3), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                        }}>
                                        Read More
                                    </Text>
                                    <MaterialIcons name="arrow-forward" size={hp(1.1)} color="black" />
                                </View>
                            </TouchableOpacity>

                        </View>



                    </View>

                </View>


                {/* Section 3 */}
                <View className="flex-col items-center justify-around">

                    <View
                        className="pt-1 pb-1 pr-12 pl-12 mb-7"
                        style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: 'gray'
                        }}>
                        <Text style={{
                            fontSize: hp(2.7), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#000000',
                        }}>
                            Our Plans
                        </Text>
                    </View>

                    <View className="flex-row items-start justify-center">

                        {/* Section 3 box 1 */}
                        <View style={{ width: wp(28) }}>
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: 'darkblue',
                                    height: hp(16)
                                }}>
                                <Text
                                    className="py-1.5 text-center"
                                    style={{
                                        fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#FFFFFF', backgroundColor: '#8A98E4', borderBottomWidth: 1, borderColor: 'darkblue'
                                    }}>
                                    Essentials
                                </Text>
                                <Text
                                    className="px-2 py-2 text-center"
                                    style={{
                                        fontSize: hp(1.1), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Standard 9 to 5 service calls for plumbing and electrical Works.
                                </Text>
                                <Text
                                    className="pb-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(1.2), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Starting From <Text style={{ color: '#283891' }}>150$/month</Text>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={toggleModal}
                                className="bg-blue-900 flex items-center justify-center rounded mt-1.5"
                            >
                                <Text
                                    className="text-white"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'white'
                                    }}>
                                    BOOK NOW
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {/* Bottom Sheet box 1  */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={isModalVisible}
                            onRequestClose={toggleModal}
                        >
                            <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0, 0, 0, 0.5)", }}>


                                <View
                                    className="flex-col items-center justify-start bg-gray-200"
                                    style={{
                                        width: wp(100),
                                        height: hp(80),
                                        borderColor: 'black',
                                        borderTopWidth: 5,
                                        borderLeftWidth: 1,
                                        borderRightWidth: 1,
                                        borderTopStartRadius: 35,
                                        borderTopEndRadius: 35,

                                    }}>

                                    {/* Bottom Sheet box 1 inner Sec 1 */}

                                    <ImageBackground
                                        style={{
                                            width: wp(100),
                                            height: hp(30),
                                            

                                        }} source={require('../assets/images/plans.png')}>
                                        <View style={{ width: wp(100), height: hp(12) }} className="flex-col items-start justify-center">

                                            {/* Back Navigation */}
                                            <TouchableOpacity onPress={toggleModal} style={{ paddingLeft: 25, paddingTop: 15 }}>
                                                <FontAwesome6 name="arrow-left-long" size={hp(4)} color="black" />
                                            </TouchableOpacity>

                                        </View>

                                    </ImageBackground>

                                    {/* Bottom Sheet box 1 inner Sec 2 */}

                                    <View style={{ width: wp(90) }}>
                                        <View className="flex-col items-center justify-center">
                                            <View
                                                className="pt-1 pb-1 pr-12 pl-12 my-10"
                                                style={{
                                                    borderTopWidth: 1,
                                                    borderBottomWidth: 1,
                                                    borderColor: 'gray'
                                                }}>
                                                <Text style={{
                                                    fontSize: hp(3), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#000000',
                                                }}>
                                                    Our Plans
                                                </Text>
                                            </View>

                                        </View>

                                        <View className="flex-col items-start justify-center">

                                            <Text
                                                style={{
                                                    fontSize: hp(3), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#C89801',
                                                }}>
                                                HomeCoin Essentials:
                                            </Text>

                                            <Text
                                                className="pt-4 pb-8"
                                                style={{
                                                    fontSize: hp(2.1), fontWeight: '400', fontFamily: 'Roboto-Regular', color: 'gray'
                                                }}>
                                                This Package covers essential maintenance tasks about standard 9 to 5 service calls for plumbing and electrical Works.
                                            </Text>

                                            <View style={{ width: wp(90) }} className="flex-row items-center justify-start">
                                                <TouchableOpacity
                                                    onPress={() => router.push("/services/Plumbing")}
                                                    className="flex-col justify-between ml-3 mr-10"
                                                    style={{
                                                        borderTopWidth: 1,
                                                        borderBottomWidth: 1,
                                                        borderRightWidth: 1,
                                                        borderLeftWidth: 1,
                                                        borderColor: '#283891',
                                                        backgroundColor: '#3292EB1F',
                                                        width: wp(35),
                                                        height: hp(5)
                                                    }}>
                                                    <View
                                                        style={{ backgroundColor: "#032936" }}
                                                        className="w-8 h-8 -mt-3 -ml-3 flex items-center justify-center rounded-full"
                                                    >
                                                        <MaterialCommunityIcons name="pipe" size={hp(3)} color="white" />
                                                    </View>
                                                    <Text
                                                        className="-top-2 px-2 text-center"
                                                        style={{
                                                            fontSize: hp(2.2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                                                        }}>
                                                        Plumbing
                                                    </Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    onPress={() => router.push("/services/Plumbing")}
                                                    className="flex-col justify-between"
                                                    style={{
                                                        borderTopWidth: 1,
                                                        borderBottomWidth: 1,
                                                        borderRightWidth: 1,
                                                        borderLeftWidth: 1,
                                                        borderColor: '#283891',
                                                        backgroundColor: '#3292EB1F',
                                                        width: wp(35),
                                                        height: hp(5)
                                                    }}>
                                                    <View
                                                        style={{ backgroundColor: "#032936" }}
                                                        className="w-8 h-8 -mt-3 -ml-3 flex items-center justify-center rounded-full"
                                                    >
                                                        <MaterialIcons name="electric-bolt" size={hp(3)} color="white" />
                                                    </View>
                                                    <Text
                                                        className="-top-2 px-2 text-center"
                                                        style={{
                                                            fontSize: hp(2.2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: 'black'
                                                        }}>
                                                        Electric
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ width: wp(90) }} className="flex-row items-center justify-between my-10">
                                                <View
                                                    style={{ height: hp(5.5), width: wp(35) }}
                                                    className="bg-gray-300 flex-col items-start justify-around px-7 rounded-2xl">
                                                    <Text
                                                        className="pt-1"
                                                        style={{ fontSize: hp(1.4), fontWeight: '400', fontFamily: 'Roboto-Regular', color: '#0000008F' }}>
                                                        Price
                                                    </Text>
                                                    <Text
                                                        className="pb-1"
                                                        style={{ fontSize: hp(1.8), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black' }}>
                                                        $150/month
                                                    </Text>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => router.push("../user/UserWelcome")}
                                                    style={{ height: hp(5.5), width: wp(50) }}
                                                    className="bg-blue-900 flex items-center justify-center rounded-2xl"
                                                >
                                                    <Text
                                                        style={{ fontSize: hp(2.3), fontWeight: '600', fontFamily: 'Roboto-Regular', color: 'white' }}>
                                                        BOOK NOW
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>

                                </View>



                            </View>
                        </Modal>


                        {/* Section 3 box 2 */}
                        <View style={{ width: wp(28) }} className="mx-3">
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: 'darkblue',
                                    height: hp(16)
                                }}>
                                <Text
                                    className="py-1.5 pr-2 pl-2 text-center"
                                    style={{
                                        fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#FFFFFF', backgroundColor: '#8A98E4', borderBottomWidth: 1, borderColor: 'darkblue'
                                    }}>
                                    Plus
                                </Text>
                                <Text
                                    className="px-2 py-2 text-center"
                                    style={{
                                        fontSize: hp(1.1), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    24/7 emergency services for plumbing, electrical, and handyman services.
                                </Text>
                                <Text
                                    className="pb-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(1.2), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Starting From <Text style={{ color: '#283891' }}>250$/month</Text>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => router.push("")}
                                className="bg-blue-900 flex items-center justify-center rounded mt-1.5"
                            >
                                <Text
                                    className="text-white"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'white'
                                    }}>
                                    BOOK NOW
                                </Text>
                            </TouchableOpacity>
                        </View>
                        


                        {/* Section 3 box 3 */}
                        <View style={{ width: wp(28) }}>
                            <View
                                className="flex-col justify-between"
                                style={{
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1,
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderColor: 'darkblue',
                                    height: hp(16)
                                }}>
                                <Text
                                    className="py-1.5 pr-2 pl-2 text-center"
                                    style={{
                                        fontSize: hp(2), fontWeight: '400', fontFamily: 'SquadaOne-Regular', color: '#FFFFFF', backgroundColor: '#8A98E4', borderBottomWidth: 1, borderColor: 'darkblue'
                                    }}>
                                    Elite
                                </Text>
                                <Text
                                    className="px-2 py-1 text-center"
                                    style={{
                                        fontSize: hp(1.1), fontWeight: '500', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Comprehensive coverage including HVAC, 24/7 emergency plumbing and electrical services, handyman services
                                </Text>
                                <Text
                                    className="pb-2 px-2 text-center"
                                    style={{
                                        fontSize: hp(1.2), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'black'
                                    }}>
                                    Starting From <Text style={{ color: '#283891' }}>400$/month</Text>
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => router.push("")}
                                className="bg-blue-900 flex items-center justify-center rounded mt-1.5"
                            >
                                <Text
                                    className="text-white"
                                    style={{
                                        fontSize: hp(1.7), fontWeight: '700', fontFamily: 'Roboto-Regular', color: 'white'
                                    }}>
                                    BOOK NOW
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>


            </View>

            {/* Tab Navigation */}

            <View style={{ width: wp(100) }} className="bg-blue-900 rounded-t-xl mt-7">
                <TouchableOpacity
                    onPress={() => router.push("")}
                    className="flex-col items-start justify-center pl-3 py-1"
                >
                    <MaterialIcons name="home-filled" size={hp(6)} color="#F8BD00" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}

export default Home