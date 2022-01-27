import React from 'react'
import { Text, TouchableOpacity, Image, Share } from 'react-native'
import { Images } from '@/Theme'
import i18n from '@/Translations'

// Styles
import styles from './ShareButtonStyles'

interface Props {
    msg: string
}

const ShareButton = ({ msg }: Props) => {

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: msg,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                // shared with activity type of result.activityType
                } else {
                // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TouchableOpacity style={[{flex:1, flexDirection:'row'}]} onPress={onShare}>
            <Image source={Images.share} />
            <Text style={[styles.share]}>{i18n.t('share.name')}</Text>
        </TouchableOpacity>
    )
}

export default ShareButton
