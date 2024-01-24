import { View } from "react-native";
import { Home } from "./src/pages/Home";
import { Cart } from "./src/pages/Cart";
import Icon from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

async function initData() 
{
    await AsyncStorage.setItem("Tulipe", "0");
    await AsyncStorage.setItem("Lilas", "0");
    await AsyncStorage.setItem("Rose", "0");
    await AsyncStorage.setItem("Lavande", "0");
}

const HeadApp = () => {
    /*si vous êtes chauds, vous pouvez refaire le Header ici*/
};

export default function App()
{
    useEffect(() => {
        initData();
    }, []);
    return (
        /*ici on doit avoir notre navigation entre les écrans
            en consultant la documentation de react-navigation : https://reactnavigation.org/docs/hello-react-navigation
        */
        <>
        </>
    )
}