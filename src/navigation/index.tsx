import React from "react";
import {  NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routNames } from "../global/routeNames";
import Splashscreen from "../screen/splashscreen";
import { navigationRef } from "../utils/NavigationUtils";





const RootStack =  createNativeStackNavigator();

const AppNavigator = React.forwardRef((props: any, ref: any) =>{
    return (
    <NavigationContainer ref={navigationRef} >
     <RootStack.Navigator screenOptions={{ headerShown: false}}>
     <RootStack.Screen name={routNames.Splashscreen} component={Splashscreen} />
     </RootStack.Navigator>
    </NavigationContainer>
    )
})

export default AppNavigator

