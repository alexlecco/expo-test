import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import TestButton from './components/FollowButton'

export default function App() {
  return (
    <View style={styles.container}>
      <TestButton />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 50
  },
})
