import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the desired icon library

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#707071" style={styles.icon} />
      <TextInput
        placeholder="Search Movie"
        style={styles.input}
        placeholderTextColor="#707071"
        // Add your search logic here (e.g., onChangeText, onSubmitEditing, etc.)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#2e2e35',
    marginVertical: 26,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
  },
});

export default SearchComponent;
