import React, { useState } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native'

const FollowButton = _ => {
  const [isFollowing, setIsFollowing] = useState(false)

  const switchFollow = _ => {
    setIsFollowing(!isFollowing)
  }

  return (
    <TouchableHighlight onPress={switchFollow}>
      <View style={styles.buttonContainer}>
        <Text>{ isFollowing ? 'following' : 'follow' }</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
  }
})

export default FollowButton