import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames'; 
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <View>

            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={tw` bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name='menu' />
            </TouchableOpacity>

            <View style={tw`h-1/2`}>
               
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>

                 
 

                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen;