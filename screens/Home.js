import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import AsyncStorage from "@react-native-community/async-storage";


const Home = ({ navigation }) => {


    const [listAuxHeroes, setAuxHeroes] = React.useState(null)
    const [listHeroes, setHeroes] = React.useState(null)



    function setFavoriteItem(favoriteItem) {
        let filterList = listHeroes.filter(a => a.biography.publisher == "Marvel Comics")
        filterList.map((item) => {
            item.id == favoriteItem.id ? item.isFavorite = !favoriteItem.isFavorite : item.isFavorite = item.isFavorite
        })
        AsyncStorage.setItem('listHeroes', JSON.stringify(filterList))
        setHeroes(filterList)
        setAuxHeroes(filterList)

    }

    function triggerQuery(query){
        var filterList = []
        if (query == ''){
            filterList = listAuxHeroes.filter(a => a.biography.publisher == "Marvel Comics")
        }else{
            filterList = listAuxHeroes.filter(a => a.name.toLowerCase().includes(query.toLowerCase()))
        }
        setHeroes(filterList)
    }


    function renderMainCategories() {
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Heroes</Text>
                <TextInput
                    style={{ width: "100%",
                        fontSize:25,
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: COLORS.lightGray,
                        borderRadius: 15,
                        marginTop: SIZES.padding * 2,
                        ...styles.shadow}}
                    placeholder="Busqueda"
                    onChangeText={(text) => triggerQuery(text)}
                />
            </View>
        )
    }

    function renderHeroList() {
        const renderItem = ({ item }) => (
            <View
                style={{ marginBottom: SIZES.padding * 5 }}
            >
                {}
                <View
                
                    style={{
                        marginBottom: SIZES.padding
                    }}
                    
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Hero", {
                            item
                        })}
                    >
                        <Image
                            source={{uri: item.images.md  }}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 300,
                                borderRadius: SIZES.radius
                            }}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        
                        onPress={() => setFavoriteItem(item)}
                    >
                        <Image
                            source={icons.like}
                            style={{
                                position: 'absolute',
                                bottom: -25,
                                right:0,
                                height: 50,
                                width: 50,
                                tintColor: item.isFavorite ? COLORS.primary : COLORS.secondary
                            }}

                        />
                    </TouchableOpacity>
                </View>
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
            </View>
        )

        return (
            <FlatList
                data={listHeroes}
                extraData={listHeroes}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    function evaluateFlow(){
        listHeroes == null ? getHeroesService() : console.log(listHeroes.length)
    }

    readData = () => {
        
        AsyncStorage.getItem('listHeroes').then((res) => {
            console.log(res)
            var items = []
            items = JSON.parse(res)
            setHeroes(items)
            setAuxHeroes(items)
        })
    }

    evaluateFavs = (listWebService) => {
        AsyncStorage.getItem('listHeroes').then((res) => {
            if (res !== null) {
                var items = []
                items = JSON.parse(res)
                let filterList = items.filter(a => a.isFavorite == true)
                listWebService.map((itemWeb) => {
                    filterList.map((itemLocal) => {
                        itemWeb.id == itemLocal.id ? itemWeb.isFavorite = true : itemWeb.isFavorite = false
                    })
                })   
            }
            setHeroes(listWebService)
            setAuxHeroes(listWebService)
            AsyncStorage.setItem('listHeroes', JSON.stringify(listWebService))
            
        })
        
    }


    getHeroesService = () => {
        fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json',{
          method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            responseJson.map((item) => {
                item.isFavorite = false
            })
            let filterList = responseJson.filter(a => a.biography.publisher == "Marvel Comics" && a.biography.alignment == "good")
            //setHeroes(filterList)
            //setAuxHeroes(filterList)
            //AsyncStorage.setItem('listHeroes', JSON.stringify(filterList))
            evaluateFavs(filterList)
        })
        .catch((error) => {
          console.log(error)
          
        AsyncStorage.getItem('listHeroes').then((res) => {
              console.log(res)
              readData()
          })
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            {evaluateFlow()}
            {renderMainCategories()}
            {renderHeroList()}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;