import React, { useState, useRef, } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Animated,
} from 'react-native'

const FollowButton = _ => {
  const [isFollowing, setIsFollowing] = useState(false)

  const resizeAnim = useRef(new Animated.Value(61)).current

  const switchFollow = _ => {
    Animated.timing(resizeAnim, {
      toValue: isFollowing ? 65 : 80,
      duration: 300,
      useNativeDriver: false
    }).start(() => setIsFollowing(prev => !prev))
  }

  return (
    <TouchableHighlight onPress={switchFollow}>
      <Animated.View style={[styles.buttonContainer, { width: resizeAnim }]}>
        {/* <Text>follow{ isFollowing && 'ing' }</Text> */}
        <Text>follow</Text>
      </Animated.View>
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