import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const Trending = () => {
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
export default Trending;
