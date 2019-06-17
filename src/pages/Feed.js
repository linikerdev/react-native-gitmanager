import React, { Component } from 'react'

import { View, Text } from 'react-native'
export default class Feed extends Component {
  render() {
    const { navigation } = this.props
    console.log(this.props)
    return (
        <View >
          <Text>Pagina de noticias</Text>
        </View>
      )
  }
}
