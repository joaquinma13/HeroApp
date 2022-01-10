import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
import { isIphoneX } from 'react-native-iphone-x-helper'

import { icons, COLORS, SIZES, FONTS } from '../constants'

const Hero = ({route, navigation}) => {

    const [HeroSelect, setHero] = React.useState();

    React.useEffect(() => {
        let {item} = route.params
        //console.log(item.name)
        setHero(item)
    })



    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h1 }}>{HeroSelect?.name}</Text>
                    </View>
                </View>
                
                <View
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                />

            </View>
        )
    }

    function renderFoodInfo() {
        return(
            <ScrollView>
            <View
                style={{ padding: SIZES.padding}}
            >
                <Image
                            source={{uri: HeroSelect?.images.md  }}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 300,
                                borderRadius: SIZES.radius
                            }}
                />
                <Image
                            source={icons.like}
                            style={{
                                position: 'absolute',
                                top: 275,
                                right:SIZES.padding,
                                height: 50,
                                width: 50,
                                tintColor: HeroSelect?.isFavorite ? COLORS.primary : COLORS.secondary
                            }}

                        />
                {setSuperPowers()}
                {setAppearance()}
                {setBiography()}
                {setWork()}
                {setConnections()}
                

                


            </View>
            </ScrollView>
        )
    }

    function setSuperPowers(){
        return(
            <View>
                <Text style={{
                    marginTop:20,
                ...FONTS.h1 }}>Superpoderes:</Text>  
                <View
                    style={{
                        marginTop: 5 ,
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Inteligencia:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.powerstats.intelligence}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Fuerza:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.powerstats.strength}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Velocidad:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.powerstats.speed}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Resistencia:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.powerstats.durability}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Poder:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.powerstats.power}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Habilida :</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.powerstats.power}</Text>
                </View>
            </View>
        )
    }

    function setAppearance(){
        return(
            <View>
                <Text style={{
                    marginTop:20,
                ...FONTS.h1 }}>Apariencia:</Text>  
                <View
                    style={{
                        marginTop: 5 ,
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Genero:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.appearance.gender}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Raza:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.appearance.race}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Altura:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.appearance.height[1]}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Peso:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.appearance.weight[1]}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Color ojos:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.appearance.eyeColor}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Cabello :</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.appearance.hairColor}</Text>
                </View>
            </View>
        )
    }

    function setBiography(){
        return(
            <View>
                <Text style={{
                    marginTop:20,
                ...FONTS.h1 }}>Biografia:</Text>  
                <View
                    style={{
                        marginTop: 5 ,
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Nombre:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.biography.fullName}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Alteregos:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.biography.alterEgos}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Apodos:</Text>

                    {HeroSelect?.biography.aliases.map((item) => {
                        
                        <Text style={{
                            marginLeft : 10,
                            ...FONTS.body2 }}>{item}</Text>
                    })
                    }
                    
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Lugar de nacimiento:</Text>

                    
                </View>
                <Text style={{
                        marginLeft : 20,
                        ...FONTS.body2 }}>{HeroSelect?.biography.placeOfBirth}</Text>
                <View
                    style={{
                        flexDirection : 'row',
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Primera aparicion:</Text>

                </View>
                <Text style={{
                        marginLeft : 20,
                        ...FONTS.body2 }}>{HeroSelect?.biography.firstAppearance}</Text>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Publisher:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.biography.publisher}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Bando:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.biography.alignment}</Text>
                </View>
            </View>
        )
    }

    function setWork(){
        return(
            <View>
                <Text style={{
                    marginTop:20,
                ...FONTS.h1 }}>Trabajo:</Text>  
                <View
                    style={{
                        marginTop: 5 ,
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Ocupacion:</Text>

                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>{HeroSelect?.work.occupation}</Text>
                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Base: {HeroSelect?.work.base}</Text>

                </View>
            </View>
        )
    }

    function setConnections(){
        return(
            <View>
                <Text style={{
                    marginTop:20,
                ...FONTS.h1 }}>Conexiones:</Text>  
                <View
                    style={{
                        marginTop: 5 ,
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Afilacion: {HeroSelect?.connections.groupAffiliation}</Text>

                </View>
                <View
                    style={{
                        flexDirection : 'row'
                    }}
                >
                    <Text style={{
                        marginLeft : 10,
                        ...FONTS.body2 }}>- Relatives: {HeroSelect?.connections.relatives}</Text>

                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFoodInfo()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Hero;