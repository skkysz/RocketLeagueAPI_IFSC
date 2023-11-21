import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';

import TelaLogin from './TelaLogin';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}} backBehavior='history'>
                <Tab.Screen  name="IMC" component={TelaInicial}
                    options={{ tabBarIcon: () => <FontAwesome name="calculator" size={24} color="black" /> }}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    );  
}