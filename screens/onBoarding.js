import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/themed";
import GestureRecognizer, {
} from "react-native-swipe-gestures";

onBoarding = [
  {
    title: "Find new friends",
    description:
      "Make friends in your local area with shared hobbies for a more exciting walk",
    image: require("../assets/pic1.png"),
    order: 1,
  },
  {
    title: "Explore new routes",
    description:
      "Our app will suggest new routes that suitable with you and your friends to create new experiences",
    image: require("../assets/pic2.png"),
    order: 2,
  },
  {
    title: "Fancy social networks",
    description:
      "Create a social network that you can share your moment with your friends",
    image: require("../assets/pic3.png"),
    order: 3,
  },
];

function NavigateControl({ currentScreen }) {
  return (
    <View style={{ flexDirection: "row", marginVertical: 16 }}>
      {onBoarding.map((item, index) =>
        index + 1 === currentScreen ? (
          <View key = {index} style={{ ...styles.circle, backgroundColor: "#48c78e" }}></View>
        ) : (
          <View key = {index} style={styles.circle}></View>
        )
      )}
    </View>
  );
}

function OnBoardingScreen({ item, navigation, isFinal }) {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  return (
    <GestureRecognizer
      onSwipeLeft={() => !isFinal && navigation.navigate(`OnBoardingScreen${item.order + 1}`)}
      onSwipeRight={() => item.order !== 1 && navigation.goBack()}
      style={{
        flex: 1,
      }}
      config={config}
    >
      <View style={styles.container}>
        <Image style={styles.pic} source={item.image} />
        <Text style={styles.heading}>{item.title}</Text>
        <Text style={{ textAlign: "center" }}>{item.description}</Text>

        <View style={styles.naviControl}>
          {!isFinal ? (
            <>
              <Button
                title="Skip"
                type="clear"
                titleStyle={{ color: "#48c78e" }}
                onPress={() => navigation.navigate("Home")}
              />
              <Button
                title="Next"
                color="#48c78e"
                radius={8}
                titleStyle={{
                  paddingHorizontal: 4,
                }}
                onPress={() =>
                  navigation.navigate(`OnBoardingScreen${item.order + 1}`)
                }
              />
            </>
          ) : (
            <Button
              title="Get started"
              onPress={() => navigation.navigate("Home")}
              radius="30"
              color="#48c78e"
              titleStyle={{
                paddingVertical: 4,
              }}
              containerStyle={{ width: "100%" }}
            />
          )}
        </View>

        <NavigateControl currentScreen={item.order} />
      </View>
    </GestureRecognizer>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
      paddingBottom: 120,
    },
  
    pic: {
      width: "100%",
      height: 300,
      resizeMode: "contain",
  
      marginBottom: 30,
    },
    heading: {
      fontWeight: "bold",
      fontSize: 20,
      padding: 20,
    },
  
    naviControl: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      marginTop: "auto",
      justifyContent: "space-between",
      position: "absolute",
      bottom: 20,
    },
  
    circle: {
      width: 12,
      marginHorizontal: 8,
      height: 12,
      borderRadius: 100,
      backgroundColor: "#ccc",
    },
  });
  
export default OnBoardingScreen