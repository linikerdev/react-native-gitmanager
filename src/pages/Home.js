import React, { Component } from 'react'

import { View, Text, Button } from 'react-native'
export default class Home extends Component { 
  
  render() {
    const { navigation } = this.props
    return (
        <View >
          <Text>Essa é a pagina Home</Text>
          <Button 
          title="Noticias"
          onPress={() => navigation.navigate('Feed') }
          />
        </View>
      )
  }
}
