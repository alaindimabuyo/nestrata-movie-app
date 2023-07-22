import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
const Games = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: '#fff',
    fontSize: 20,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default Games;
