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
      <Text style={styles.tag}>Horror</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#2e2e35',
    color: '#bcbcbd',
    borderRadius: 20,
    marginRight: 10,
    fontSize: 10,
  },
});

export default ScrollableTags;
