import React, { useState, useRef, useEffect } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Animated,
} from 'react-native'

const FollowButton = _ => {
  const [isFollowing, setIsFollowing] = useState(false)
  const [textCompletition, setTextCompletition] = useState('')
  const animationTime = 300
  const resizeAnim = useRef(new Animated.Value(61)).current

  useEffect(() => {
    isFollowing ? setTextCompletition("ing") : setTextCompletition("")
  }, [isFollowing])

  const switchFollow = _ => {
    setTextCompletition("")
    Animated.timing(resizeAnim, {
      toValue: isFollowing ? 65 : 80,
      duration: animationTime,
      useNativeDriver: false
    }).start(() => setIsFollowing(prev => !prev))
  }

  return (
    <TouchableHighlight onPress={switchFollow}>
      <Animated.View style={[styles.buttonContainer, { width: resizeAnim }]}>
        <Text>follow{textCompletition}</Text>
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