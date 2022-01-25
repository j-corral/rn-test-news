import { Dimensions, PixelRatio, Platform, NativeModules } from 'react-native'

const { width, height } = Dimensions.get('window')

const Metrics = {
    paddingHorizontal: 15,
    marginHorizontal: 15,
    buttonHeight: 55,
    buttonRadius: 10,
    screenWidth: width,
    screenHeight: height,

    widthPercentageToDP: (widthPercent: string) => {
        const screenWidth = Dimensions.get('window').width
        // Convert string input to decimal number
        const elemWidth = parseFloat(widthPercent)
        return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100)
    },
    heightPercentageToDP: (heightPercent: string) => {
        const screenHeight = Dimensions.get('window').height
        // Convert string input to decimal number
        const elemHeight = parseFloat(heightPercent)
        return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100)
    },
    isIpad: () => {
        const { PlatformConstants } = NativeModules
        const deviceType = PlatformConstants.interfaceIdiom
        return Platform.OS === 'ios' && deviceType === 'pad'
    },
    isIphoneX: () => {
        const dim = Dimensions.get('window')
        const ratio = PixelRatio.get()

        return (
            // This has to be iOS
            Platform.OS === 'ios' &&
            (((dim.height === 812 || dim.width === 812) && ratio === 3) || // iphone X / XS / 11 PRO
                ((dim.height === 896 || dim.width === 896) && ratio === 2) || // iphone XR / 11
                ((dim.height === 896 || dim.width === 896) && ratio === 3) || // iphone XS MAX / 11 PRO MAX
                ((dim.height === 844 || dim.width === 844) && ratio === 3) || // iphone 12 / iphone 12 Pro
                ((dim.height === 926 || dim.width === 926) && ratio === 3)) // iPhone 12 Pro Max
        )
    },
    isTablet: () => {
        let pixelDensity = PixelRatio.get()
        const adjustedWidth = width * pixelDensity
        const adjustedHeight = height * pixelDensity
        if (
            pixelDensity < 2 &&
            (adjustedWidth >= 1000 || adjustedHeight >= 1000)
        ) {
            return true
        }
        return (
            pixelDensity === 2 &&
            (adjustedWidth >= 1920 || adjustedHeight >= 1920)
        )
    },
}

export default Metrics
