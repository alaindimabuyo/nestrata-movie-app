import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const ScrollableTags = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <Text style={styles.tag}>Action</Text>
      <Text style={styles.tag}>Comedy</Text>
      <Text style={styles.tag}>Romance</Text>
      <Text style={styles.tag}>Adventure</Text>
      <Text style={styles.tag}>Thriller</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: 20,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ScrollableTags;
