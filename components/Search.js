import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSearchMoviesQuery} from '../redux/series/api';
import {actions, useDispatch} from '../redux/index';

import {useSearchPersonQuery} from '../redux/person/api';
const SearchComponent = ({isActor}) => {
  const [personQuery, setPersonQuery] = useState('');
  const [movieQuery, setMovieQuery] = useState('');
  const [page, setPage] = useState(1);
  const {
    data: movieData,
    error,
    isSuccess,
    isFetching,
    refetch,
  } = useSearchMoviesQuery(movieQuery);

  const {
    data: personData,
    error: personError,
    isSuccess: personSuccess,
    isFetching: personIsFetching,
    refetch: personRefetch,
  } = useSearchPersonQuery(personQuery);

  const handleSearch = () => {
    isActor ? personRefetch() : refetch();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && !isFetching) {
      dispatch(actions.series.setSearchedMovies(movieData));
    }

    if (personSuccess && !personIsFetching) {
      dispatch(actions.person.setSearchPerson(personData));
    }
  }, [
    movieData,
    dispatch,
    isFetching,
    isSuccess,
    personSuccess,
    personIsFetching,
    personData,
  ]);

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#707071" style={styles.icon} />
      <TextInput
        placeholder={isActor ? 'Search Actor' : 'Search Movie'}
        style={styles.input}
        placeholderTextColor="#707071"
        onChangeText={isActor ? setPersonQuery : setMovieQuery}
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
