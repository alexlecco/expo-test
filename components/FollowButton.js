import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native'

const FollowButton = () => (
  <TouchableHighlight>
    <View style={styles.buttonContainer}>
      <Text>follow</Text>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  }
})

export default FollowButton