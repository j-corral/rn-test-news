import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

// Styles
import styles from './NewsPreviewStyles'

interface Props {
    uri: string
    title: string
    date?: string | number
}

const NewsPreview = ({ uri, title, date  }: Props) => {
    return (
        <View style={[styles.newsContainer]}>
            <ImageBackground source={{uri: uri}} resizeMode="cover" style={[styles.newsItem]} imageStyle={[{borderRadius:15}]}>
                <View style={[styles.newsItemContent]}>
                    {date != undefined && <Text style={[styles.newsDate]}>{new Date(date).toLocaleString('fr-FR')}</Text>}
                    <Text style={[styles.newsTitle]}>{title}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default NewsPreview
