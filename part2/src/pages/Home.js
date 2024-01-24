import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import { FlowerCard } from "../components/FlowerCard";

export function Home({navigation})
{
    const listFleurs = require("../fleurs.json");
    return (
        <View style={{flex:1, paddingTop:20, alignItems:"center", backgroundColor:"#FFF9EE"}}>
            <FlatList
                data={listFleurs}
                renderItem={({item}) => <FlowerCard item={item}/>}
            />
        </View>
    )
}