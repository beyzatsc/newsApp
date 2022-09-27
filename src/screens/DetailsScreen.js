import { React, useState } from "react";
import { View,Share, Text, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import WebViewAutoHeight from './WebViewAutoHeight'
import ShareButton from "../components/CustomButton/ShareButton"
import { ImageGallery } from '@georstat/react-native-image-gallery';

export default DetailsScreen = () => {

    const [isOpen, setIsOpen] = useState(false);
        const openGallery = () => setIsOpen(true);
        const closeGallery = () => setIsOpen(false);

    const onShare = async () => {
        const result = await Share.share({
            message: link,
        });
    }

    const navigation = useNavigation()
    const route = useRoute()

    const id = route.params.newsId
    const title = route.params.newsTit
    const sum = route.params.newsSum
    const det = route.params.newsDet
    const img = route.params.newsImg
    const link = route.params.newsShare

    const images = [
        {
          id: 1,
          url: img,
          
        },
    ]

     
    return (
        <ScrollView style={styles.background}>
            <SafeAreaView>
                <TouchableOpacity onPress={openGallery}>
                <ImageGallery close={closeGallery} isOpen={isOpen} images={images} />
                    <Image style={styles.imgStyle} source={{ uri: img }} />
                </TouchableOpacity>
                    <Text style={styles.titStyle}>{title} </Text>
                    <Text style={styles.sumStyle}>{sum} </Text>
                <WebViewAutoHeight html={det} />
                <View style={{flexDirection: 'row'}}>
                    <ShareButton text="Go Back News" onPress={()=>navigation.navigate("News")}/>
                    <ShareButton text="Share the News" onPress={onShare} />
                </View>
            </SafeAreaView>
        </ScrollView>
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
        backgroundColor: '#ffffff',
    },
    imgStyle: {
        width: 385,
        height: 300,
        borderWidth: 1,
        margin: 3,
        resizeMode: 'stretch'
    },
    titStyle: {
        fontFamily:'Raleway-Medium',
        fontSize: 25,
        color: 'black',
        margin: 5,
    },
    sumStyle: {
        fontFamily:'Raleway-Medium',
        color: 'purple',
        margin: 5,
        fontSize: 18,
    },
    detStyle: {
        color: 'black',
        margin: 5,
        fontSize: 20,
    },
})
