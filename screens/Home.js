import { View, Text, StyleSheet } from "react-native";
export default function Home() {
  return (
    <View style = {styles.container}>
      <Text>Home</Text>
    </View>
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
});
