import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the desired icon library

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#333" style={styles.icon} />
      <TextInput
        placeholder="Search Movie"
        style={styles.input}
        // Add your search logic here (e.g., onChangeText, onSubmitEditing, etc.)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default SearchComponent;
