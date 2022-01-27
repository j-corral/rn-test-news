import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { Common, Images, Layout } from '@/Theme'
import i18n from '@/Translations'
import { Header } from '@/Components'

import styles from './NewsDetailScreenStyles'


const NewsDetailScreen = ({ route, navigation }) => {
    const { newsId } = route.params
    const currentNews = useSelector(state => state.news?.news?.find(item => item.id === newsId))

    useEffect(() => {
    }, [])

    return (
        <View style={[Common.basicPage]}>
            <Header title={i18n.t('post.title')} uri={Images.leftArrow} onPress={() => navigation.goBack()}></Header>
            <View>
                <ImageBackground source={{uri: currentNews.image}} style={[styles.newsItem]} imageStyle={[{borderRadius:15}]}>
                    <View style={[styles.newsItemContent]}>
                        <Text style={[styles.newsTitle]}>{currentNews.title}</Text>
                    </View>
                </ImageBackground>
                <Text style={[]}>{currentNews.date}</Text>
                <Text style={[]}>{currentNews.body}</Text>
            </View>
        </View>
    )
}

export default NewsDetailScreen
