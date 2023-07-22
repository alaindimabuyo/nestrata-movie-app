// components/UpcomingMovies.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UpcomingMovies = ({data}) => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CastDetails', {
          castID: item?.id,
        })
      }>
      <View style={styles.movieContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item?.profile_path}`,
          }}
          alt="cast-image"
          style={styles.movieActorImage}
          resizeMode="cover"
        />

        <Text style={styles.mainText}>{item?.name}</Text>
        <Text style={styles.secondaryText}>{item?.character}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
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
    marginHorizontal: 5,
    width: 60,
    alignItems: 'center',
    height: 150,
    borderWidth: 1,
  },
  movieActorImage: {
    width: '90%',
    height: 50,
    borderRadius: 100,
    marginBottom: 5,
  },
  flatListContent: {
    paddingLeft: 5,
  },
  mainText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    margin: 2,
  },
  secondaryText: {
    color: '#9696a3',
    lineHeight: 15,
    textAlign: 'center',
    fontSize: 10,
  },
});

export default UpcomingMovies;
