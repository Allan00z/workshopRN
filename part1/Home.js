import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlowerCard } from "../components/FlowerCard";

export function Home({navigation})
{
    const listFleurs = require("../fleurs.json");
    return (
        <View style={{flex:1, paddingTop:20, alignItems:"center", backgroundColor:"#FFF9EE"}}>
            // Il faudrait afficher la liste des fleurs disponibles
            <[...]
                data={[...]} // La liste des fleurs disponibles
                renderItem={({item}) => <FlowerCard item={item}/>}
            />
        </View>
    )
}