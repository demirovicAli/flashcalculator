import React from "react";
import * as Google from "expo-auth-session/providers/google";
import { Button } from "react-native";
import { Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

// const useGoogleAuth = () => {
//   const [name, setName] = React.useState("");

//   const discovery = {
//     authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
//     tokenEndpoint: "https://oauth2.googleapis.com/token",
//     revocationEndpoint: "https://oauth2.googleapis.com/revoke",
//   };
//   const expoProjectName = "flashcalc";
//   const expoUsername = "flashcalc";

//   const [request, response, promptAsync] = AuthSession.useAuthRequest(
//     {
//       clientId:
//         "125660700772-lvlmjkfahhqiqlatdr224buaqm59jfvu.apps.googleusercontent.com", // From Google Cloud Console
//       scopes: ["profile", "email"],
//       // Include projectNameForProxy in the makeRedirectUri call
//       redirectUri: AuthSession.makeRedirectUri({
//         useProxy: true,
//       }),
//     },
//     discovery
//   );

//   React.useEffect(() => {
//     if (response?.type === "success") {
//       const { access_token } = response.params;
//       fetch("https://www.googleapis.com/userinfo/v2/me", {
//         headers: { Authorization: `Bearer ${access_token}` },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           setName(data.name);
//         });
//     }
//   }, [response]);

//   return { promptAsync, name };
// };

function SignIn() {
  //   const { promptAsync, name } = useGoogleAuth();

  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "125660700772-lvlmjkfahhqiqlatdr224buaqm59jfvu.apps.googleusercontent.com",
  });
  return (
    <View>
      <Button title="Sign in" onPress={() => promptAsync()} />
    </View>
  );
}

export default SignIn;
