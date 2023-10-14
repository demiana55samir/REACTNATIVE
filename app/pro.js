import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            margin: 10,
            padding: 10,
            borderColor: "#ffff",
            borderRadius: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
              Hello Ahmed
            </Text>
            <Text style={{ color: "grey", marginLeft: 20 }}>
              Let Us Make You Feel Better
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#6e6e6ec0",
              width: 70,
              borderRadius: 25,
              padding: 0,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#ffff",
                width: 40,
                borderRadius: 25,
                padding: 3,
                marginLeft: 0,
              }}
            >
              <AntDesign name="picture" size={22} color="Black" />
            </View>
          </View>
        </View>

        <ImageBackground
          source={require("./assets/pic3.jpg")}
          style={{
            width: 380,
            height: 200,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: 50,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              margin: 0,
              width: 180,
              height: 110,
              padding: 0,
              backgroundColor: "#292929c0",
              position: "absolute", // child
              top: 10, // position where you want
              left: 5,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Nurse Required
            </Text>
            <Text style={{ color: "#E6E5E5", fontSize: 8 }}>
              we need Nurses in different hospitals
            </Text>

            <TouchableOpacity>
              <Text style={styles.button}>Click To View</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Discover
        </Text>
        <ImageBackground
          source={require("./assets/pic.jpg")}
          style={{
            width: 350,
            height: 180,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: 50,
            marginLeft: 35,
            marginTop: 10,
          }}
        >
          <View
            style={{
              margin: 0,
              width: 180,
              height: 110,
              padding: 0,
              position: "absolute", // child
              top: 10, // position where you want
              left: 5,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Find Doctors
            </Text>
            <Text style={{ color: "grey", fontSize: 8 }}>
              Consult A Doctor Anytime Anywhere
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("./assets/nur.jpg")}
          style={{
            width: 350,
            height: 180,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: 50,
            marginLeft: 35,
            marginTop: 10,
          }}
        >
          <View
            style={{
              margin: 0,
              width: 180,
              height: 110,
              padding: 0,
              position: "absolute", // child
              top: 10, // position where you want
              left: 5,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Find Nurses
            </Text>
            <Text style={{ color: "grey", fontSize: 8 }}>
              Consult A Doctor Anytime Anywhere
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("./assets/sin.jpg")}
          style={{
            width: 350,
            height: 180,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: 50,
            marginLeft: 35,
            marginTop: 10,
            shadowColor: "grey",
            shadowOpacity: ".5",
          }}
        >
          <View
            style={{
              margin: 0,
              width: 180,
              height: 110,
              padding: 0,
              position: "absolute", // child
              top: 10, // position where you want
              left: 5,
              borderRadius: 10,
              padding: 10,
              shadowColor: "grey",
              shadowOpacity: ".5",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Find Laboratory Analist
            </Text>
            <Text style={{ color: "grey", fontSize: 8 }}>
              Done With The Labs
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#292929c0",
    color: "white",
    borderRadius: 5,
    borderColor: "#292929c0",
    textAlign: "center",
    marginTop: 10,
    padding: 2,
    fontSize: 12,
    borderBlockColor: "white",
  },
});
