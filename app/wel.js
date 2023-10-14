import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <Image
        source={require("./assets/wel.webp")}
        style={{
          width: 300,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 50,
          marginTop: 50,
        }}
      />
      <Text style={{ fontSize: 27, fontWeight: "bold", marginLeft: 20 }}>
        Complete Health Solutions
      </Text>
      <Text style={{ color: "grey", marginLeft: 20 }}>
        Early Protection For Family Health
      </Text>
      <TouchableOpacity>
        <Text style={styles.signup}>Join Now</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.login}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signup: {
    backgroundColor: "#3366ff",
    color: "white",
    width: "75%",
    borderRadius: 5,
    borderColor: "#3366ff",
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "11%",
    padding: "2%",
    fontSize: 20,
    marginTop: "40%",
  },
  login: {
    backgroundColor: "white",
    color: "#0066cc",
    width: "75%",
    borderRadius: 5,
    borderColor: "#0066cc",
    borderWidth: 1,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "11%",
    padding: "2%",
    fontSize: 20,
    marginTop: "5%",
  },
});
