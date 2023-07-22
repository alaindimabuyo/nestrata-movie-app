// components/UpcomingMovies.js
import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

const UpcomingMovies = ({data, error, isLoadin, refetch, setPage}) => {
  if (isLoadin) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const renderItem = ({item}) => (
    <View style={styles.movieContainer}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
        style={styles.moviePoster}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    refetch();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  movieContainer: {
    marginHorizontal: 10,
    width: 150,
    height: 220,
  },
  moviePoster: {
    width: 150,
    height: 220,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatListContent: {
    paddingLeft: 5,
  },
});

export default UpcomingMovies;
