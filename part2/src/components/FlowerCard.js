import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/Ionicons"

async function getValue(name, callback) {
    try {
        const temp = await AsyncStorage.getItem(name);
        callback(temp);
    } catch (e) {
        console.log(e);
        callback("0");
    }
}

async function addOne(name, callback) {
    const numberString = await AsyncStorage.getItem(name);
    let number = parseInt(numberString);
    if (number < 99)
        number += 1;
    await AsyncStorage.setItem(name, number.toString());
    callback(number.toString());
}

async function removeOne(name, callback) {
    const numberString = await AsyncStorage.getItem(name);
    let number = parseInt(numberString);
    if (number > 0)
        number -= 1;
    await AsyncStorage.setItem(name, number.toString());
    callback(number.toString());
}

export function FlowerCard({ item }) {
    const images = {
        Rose: require('../medias/rose.jpg'),
        Tulipe: require('../medias/tulipe.jpg'),
        Lilas: require('../medias/lilas.jpg'),
        Lavande: require('../medias/lavande.png'),
    };
    const [fleur, setFleur] = useState("0");
    const [buttonPressed, setButtonPressed] = useState(false);
        useCallback(
            useFocusEffect(() => {
        const fetchValue = async () => {
            await getValue(item.name, value => {
                setFleur(value !== null ? value : "0");
            });
        };
        fetchValue();
        if (buttonPressed)
            setButtonPressed(false)
    }), [item, buttonPressed]);

    const handleButtonPress = () => {
        setButtonPressed(true);
    };

    return (
        <View style={{backgroundColor:"#BC71EF", margin: 5, borderRadius:10, padding: 10, width: 250}}>
            <View style={{flexDirection:"row", width: "100%"}}>
                <Image style={{height: 70, width: 70}} source={images[item.name]} />
                <View style={{alignItems:"flex-end", flex: 1}}>
                    <Text style={{fontSize:15, marginBottom: 7, fontWeight:"500", color:"white"}}>{item.name}</Text>
                    <Text style={{fontSize:20, fontWeight:"500", color:"white"}}>{item.price}€</Text>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                <TouchableOpacity onPress={() => {handleButtonPress(); removeOne(item.name, newFleur => setFleur(newFleur))}} style={{backgroundColor:"white", borderRadius: 20, margin:8}}>
                    <Icon color="#BC71EF" name="remove" size={25}/>
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 25, marginHorizontal: 8, marginVertical:5}}
                >
                    {fleur}</Text>
                <TouchableOpacity onPress={() => {handleButtonPress(); addOne(item.name, newFleur => setFleur(newFleur))}} style={{backgroundColor:"white", margin:8, borderRadius: 20}}>
                    <Icon color="#BC71EF" name="add" size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}