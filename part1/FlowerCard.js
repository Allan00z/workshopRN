export function FlowerCard() {
    const [buttonPressed, setButtonPressed] = //l'état du bouton doit etre vrai ou faux
    useEffect(() => {
        const fetchValue = async () => {
            await getValue(item.name, value => {
                setFleur(value = null ? value : "0");
            });
        };
        fetchValue();
        if (buttonPressed)
            setButtonPressed(false)
    }, [item, buttonPressed]);
    const handleButtonPress = () => {
        setButtonPressed(true);
    };
    return (
        <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
        </*bouton avec une view*/ onPress={() ⇒ {/*changement de statut du bouton*/; removeOne (item.name, newFleur ⇒ setFleur(newFleur))}>
            <Icon color="#BC71EF" name="remove" size={25} />
        </ /*bouton avec une view*/>
        <Text style={{ color: 'white', fontSize: 25, marginHorizontal: 8, marginVertical:5}}
            {fleur}
        </Text>
        </*bouton avec une view*/ onPress={() ⇒ {/*changement de statut du bouton*/; addOne(item.name, newFleur ⇒ setFleur (newFleur))}}>
            <Icon color="#BC71EF" name="add" size={25} />
        </*bouton avec une view*/>
        </View>
    )
}