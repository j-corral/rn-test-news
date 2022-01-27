import React, { useEffect } from 'react'
import { SafeAreaView, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Common, Images } from '@/Theme'
import i18n from '@/Translations'
import { getNews } from '@/ActionCreators/NewsActionCreator'
import { logout } from '@/ActionCreators/AuthActionCreator'
import { Header, NewsPreview } from '@/Components'

import styles from './NewsScreenStyles'

const NewsScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const news = useSelector(state => state.news)

    const onLogout = () => {
        dispatch(logout())
        navigation.navigate('LoginScreen')
    }

    const showNewsDetail = (id: number) => {
        navigation.push('NewsDetailScreen', {newsId: id})
    }

    const NewsItem = ({id, title, date, image, fallback}) => (
        <View style={[]}>
            <TouchableOpacity onPress={() => showNewsDetail(id)}>
                <NewsPreview uri={image} title={title} date={date} />
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({item}) => (
        <NewsItem id={item.id} title={item.title} date={item.date} image={item.image} fallback={{uri: Images.loginBackground}} />
    );

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
            <Header title={i18n.t('news.title')} uri={Images.logout} onPress={() => onLogout()}></Header>
            {!news.isLoading && news.news?.length > 0 && (
                <FlatList
                    data={news.news}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )}
            {news.isLoading && (
                <View style={[{flex:1, justifyContent: "center"}]}>
                    <ActivityIndicator size="large" color="#2479C2" />
                </View>
            )}
        </SafeAreaView>
    )
}

export default NewsScreen
