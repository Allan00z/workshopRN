import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Image, Text, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Cart({navigation})
{
    const listFleurs = require("../fleurs.json");
    const [tulipes, setTulipes] = useState(null);
    const [roses, setRoses] = useState(null);
    const [lilas, setLilas] = useState(null);
    const [lavandes, setLavandes] = useState(null);
    const [priceTulipes, setPriceTulipes] = useState(null);
    const [priceRoses, setPriceRoses] = useState(null);
    const [priceLilas, setPriceLilas] = useState(null);
    const [priceLavandes, setPriceLavandes] = useState(null);

    useFocusEffect(
        useCallback(() => {
        const fetchFlowers = async () => {
            const tulipes = await AsyncStorage.getItem("Tulipe");
            const roses = await AsyncStorage.getItem("Rose");
            const lilas = await AsyncStorage.getItem("Lilas");
            const lavandes = await AsyncStorage.getItem("Lavande");
            setTulipes(tulipes);
            setRoses(roses);
            setLilas(lilas);
            setLavandes(lavandes);
            setPriceTulipes((tulipes * parseFloat(listFleurs[1].price)).toFixed(2))
            setPriceRoses((roses * parseFloat(listFleurs[0].price)).toFixed(2))
            setPriceLilas((lilas * parseFloat(listFleurs[2].price)).toFixed(2))
            setPriceLavandes((lavandes * parseFloat(listFleurs[3].price)).toFixed(2))
        };

        fetchFlowers();
    }, []));
    async function resetApp() {
        await AsyncStorage.setItem("Tulipe", "0");
        await AsyncStorage.setItem("Rose", "0");
        await AsyncStorage.setItem("Lilas", "0");
        await AsyncStorage.setItem("Lavande", "0");
        navigation.navigate("Home")
}
    return (
        <View style={{alignItems:"center"}}>
            {roses != 0 &&
                <View style={{width: 300, justifyContent:"space-between", padding:15, height: 110, margin:10, backgroundColor:"#BC71EF", flexDirection:"row", alignItems:"center"}}>
                    <Image source={require("../medias/rose.jpg")} style={{height: 70, width: 70, borderRadius: 10}}/>
                    <View style={{alignItems:"flex-end"}}>
                        <Text style={{fontSize:15, marginBottom: 10, fontWeight:"500", color:"white"}}>Roses x{roses}</Text>
                        <Text style={{fontSize:20, fontWeight:"500", color:"white"}}>{(roses * parseFloat(listFleurs[0].price)).toFixed(2)}€</Text>
                    </View>
                </View>
            }
            {tulipes != 0 &&
                <View style={{width: 300, justifyContent:"space-between", padding:15, height: 110, margin:10, backgroundColor:"#BC71EF", flexDirection:"row", alignItems:"center"}}>
                    <Image source={require("../medias/tulipe.jpg")} style={{height: 70, width: 70, borderRadius: 10}}/>
                    <View style={{alignItems:"flex-end"}}>
                        <Text style={{fontSize:15, marginBottom: 10, fontWeight:"500", color:"white"}}>Tulipes x{tulipes}</Text>
                        <Text style={{fontSize:20, fontWeight:"500", color:"white"}}>{(tulipes * parseFloat(listFleurs[1].price)).toFixed(2)}€</Text>
                    </View>
                </View>
            }
            {lilas != 0 &&
                <View style={{width: 300, justifyContent:"space-between", padding:15, height: 110, margin:10, backgroundColor:"#BC71EF", flexDirection:"row", alignItems:"center"}}>
                    <Image source={require("../medias/lilas.jpg")} style={{height: 70, width: 70, borderRadius: 10}}/>
                    <View style={{alignItems:"flex-end"}}>
                        <Text style={{fontSize:15, marginBottom: 10, fontWeight:"500", color:"white"}}>Lilas x{lilas}</Text>
                        <Text style={{fontSize:20, fontWeight:"500", color:"white"}}>{(lilas * parseFloat(listFleurs[2].price)).toFixed(2)}€</Text>
                    </View>
                </View>
            }
            {lavandes != 0 &&
                <View style={{width: 300, justifyContent:"space-between", padding:15, height: 110, margin:10, backgroundColor:"#BC71EF", flexDirection:"row", alignItems:"center"}}>
                    <Image source={require("../medias/lavande.png")} style={{height: 70, width: 70, borderRadius: 10}}/>
                    <View style={{alignItems:"flex-end"}}>
                        <Text style={{fontSize:15, marginBottom: 10, fontWeight:"500", color:"white"}}>Lavandes x{lavandes}</Text>
                        <Text style={{fontSize:20, fontWeight:"500", color:"white"}}>{(lavandes * parseFloat(listFleurs[3].price)).toFixed(2)}€</Text>
                    </View>
                </View>
            }
            <TouchableOpacity onPress={() => resetApp()} style={{ marginTop: 20, borderRadius:10, backgroundColor:"#BC71EF", padding: 20}}>
                <Text style={{color:"white", fontWeight:"bold"}}>Payer {(parseFloat(priceLavandes) + parseFloat(priceLilas) + parseFloat(priceRoses) + parseFloat(priceTulipes)).toFixed(2)}€</Text>
            </TouchableOpacity>
        </View>
    )
}