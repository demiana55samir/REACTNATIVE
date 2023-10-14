import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          alignItems: "center",
          marginBottom: 30,
          justifyContent: "center",
        }}
      >
        {" "}
        Search{" "}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#c0c0c0c0",
          borderRadius: 10,
        }}
      >
        <TextInput placeholder="search for a doctor" />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <Image
        source={require("./assets/search.jpg")}
        style={{
          width: 300,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 50,
          marginTop: 100,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
});
