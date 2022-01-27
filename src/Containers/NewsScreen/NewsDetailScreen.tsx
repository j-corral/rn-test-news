import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Common, Images } from '@/Theme'
import i18n from '@/Translations'
import { Header, NewsPreview, ShareButton } from '@/Components'

import styles from './NewsDetailScreenStyles'

const NewsDetailScreen = ({ route, navigation }) => {
    const { newsId } = route.params
    const currentNews = useSelector(state => state.news?.news?.find(item => item.id === newsId))

    return (
        <View style={[Common.basicPage]}>
            <Header title={i18n.t('post.title')} uri={Images.leftArrow} onPress={() => navigation.goBack()}></Header>
            <ScrollView style={[styles.content]}>
                <NewsPreview uri={currentNews.image} title={currentNews.title} />
                <View style={[styles.meta]}>
                    <Text style={[styles.date]}>{new Date(currentNews.date).toLocaleString('fr-FR')}</Text>
                    <ShareButton msg={currentNews.title} />
                </View>
                <Text style={[styles.body]}>{currentNews.body}</Text>
                <ShareButton msg={currentNews.title} />
            </ScrollView>
        </View>
    )
}

export default NewsDetailScreen
