import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import SearchComponent from '../components/Search';
import GenreTags from '../components/GenreTags';
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Nestrata</Text>
      <Text style={styles.text}>Lets Relax and Watch a Movie</Text>
      <SearchComponent />
      <View style={styles.section}>
        <Text style={styles.text}>Categories</Text>
        <Text style={styles.text}>View All</Text>
      </View>
      <GenreTags />
      <View style={styles.section}>
        <Text style={styles.text}>Latest Movie</Text>
        <Text style={styles.text}>View All</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  container: {
    margin: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomePage;
