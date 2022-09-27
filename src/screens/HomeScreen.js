import { React, useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://www.mocky.io/v2/59cc13f726000062106b773d")
            .then(response => response.json())
            .then(response => setData(response));
    }, []);

    return (
        <SafeAreaView style={styles.background}>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View>
                        {
                        <TouchableOpacity onPress={() =>
                                navigation.navigate("News Detail", {
                                    newsId: item.uuid,
                                    newsTit: item.title,
                                    newsSum: item.summary,
                                    newsDet: item.content,
                                    newsImg: item.main_image.url,
                                    newsShare: item.share_url
                                })}>
                                    <View style={styles.card}>
                                        <Image style={styles.imagestyle} source={{ uri: item.main_image.url }} />
                                        <Text numberOfLines={2} style={styles.textstyle}>{item.title}</Text>
                                    </View>
                            </TouchableOpacity>
                        }
                    </View>}
                keyExtractor={item => item.uuid}
            />
        </SafeAreaView>
    )
}

const fonts = {
    Raleway: {
        bold: 'Raleway-Bold',
        italic: 'Raleway-Italic',
        medium: 'Raleway-Medium'
    },
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#ECECEC',
    },
    card: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#D8C9FF',
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
    },
    imagestyle: {
        width: '100%',
        height: 200,
        borderRadius: 4
    },
    textstyle: {
        fontFamily: fonts.Raleway.bold,
        fontSize: 17,
        color: 'black',
        height: 60,
        width: '98%',
        padding:5,
       
       
    }
});

