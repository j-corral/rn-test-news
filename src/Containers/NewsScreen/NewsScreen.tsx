import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Common, Images, Layout } from '@/Theme'
import i18n from '@/Translations'
import { getNews } from '@/ActionCreators/NewsActionCreator'

import styles from './NewsScreenStyles'

const NewsItem = ({id, title, date, image, fallback}) => (
  <View style={[]}>
    <TouchableOpacity onPress={() => console.log('article pressed:', id)}>
        <ImageBackground source={{uri: image ?? fallback}} style={[styles.newsItem]} imageStyle={[{borderRadius:15}]}>
            <View style={[styles.newsItemContent]}>
                <Text style={[styles.newsDate]}>{date}</Text>
                <Text style={[styles.newsTitle]}>{title}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
  </View>
);

const renderItem = ({item}) => (
    <NewsItem id={item.id} title={item.title} date={item.date} image={item.image} fallback={{uri: Images.loginBackground}} />
);

const NewsScreen = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const news = useSelector(state => state.news)

    const onLogout = () => {
        props.navigation.navigate('LoginScreen')
    }

    const fetchNews = () => {
        if(auth.token?.length > 0) {
            dispatch(getNews(auth.token))
        } else {
            onLogout()
        }
    }

    useEffect(() => {
        fetchNews()
    }, [auth])

    return (
        <SafeAreaView style={[Common.basicPage]}>
            <View style={[Layout.rowWrap, {alignItems:"flex-end"}]}>
                <TouchableOpacity style={[{flex:1}]} onPress={() => onLogout()}>
                    <Image style={[Layout.row]} source={Images.leftArrow} />
                </TouchableOpacity>
                <Text style={[styles.title, {flex:10}]}>{i18n.t('news.title')}</Text>
            </View>
            {news.news?.length > 0 && (
                <FlatList
                    data={news.news}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )}
            {news.isLoading && (
                <Text>Loading...</Text>
            )}
        </SafeAreaView>
    )
}

export default NewsScreen
