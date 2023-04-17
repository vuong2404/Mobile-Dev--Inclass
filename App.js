import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Provider} from 'react-redux'
import OnBoardingScreen from "./screens/onBoarding";
import Home from "./screens/Home";
import Login from "./screens/login";
import store from './redux/store'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
          {onBoarding.map((item, index) => (
            <Stack.Screen
              options={{
                headerShown: false,
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
              name={`OnBoardingScreen${item.order}`}
              key={index}
              item={item}
            >
              {(props) => (
                <OnBoardingScreen
                  item={item}
                  isFinal={item.order === onBoarding.length}
                  {...props}
                />
              )}
            </Stack.Screen>
          ))}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
