import React from 'react'
import {Image, View } from 'react-native'

import styles from './styles'

const Login = () => {
    return (
        <View style={styles.fundoBlack}>
            <Image style={styles.logo} source={require('../../assets/logoNetflix.png')} />
        </View>
    )
}



export default Login 