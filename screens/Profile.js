import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SearchComponent from '../components/Search';
import {selectors, useSelector} from '../redux/index';
import SearchResults from '../components/SearchResults';

const Profile = () => {
  const selectedSearchedPerson = useSelector(
    selectors?.person?.selectSearchedPerson,
  );

  return (
    <ScrollView style={styles.container}>
      <SearchComponent isActor={true} />
      <SearchResults
        data={selectedSearchedPerson}
        error={false}
        isLoadin={false}
        isActor={true}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: '#fff',
    fontSize: 20,
  },
  container: {
    margin: 20,
  },
});
export default Profile;
