import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  useSearchMoviesQuery,
  useLazySearchMoviesQuery,
} from '../redux/series/api';
import {selectors, actions, useSelector, useDispatch} from '../redux/index';
import {useNavigation} from '@react-navigation/native';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const {data, error, isSuccess, isFetching, refetch} =
    useSearchMoviesQuery(query);

  const handleSearch = () => {
    refetch();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && !isFetching) {
      dispatch(actions.series.setSearchedMovies(data));
    }
  }, [data, dispatch, isFetching, isSuccess]);

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#707071" style={styles.icon} />
      <TextInput
        placeholder="Search Movie"
        style={styles.input}
        placeholderTextColor="#707071"
        onChangeText={setQuery}
        onEndEditing={handleSearch}
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
  moviePoster: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  movieContainer: {
    width: 150,
    marginHorizontal: 5,
  },
});

export default SearchComponent;
