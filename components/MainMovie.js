import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useGetMainMovieQuery} from '../redux/series/api';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainMovie = () => {
  const [id, setID] = useState(5);
  const {data, error, isLoadin} = useGetMainMovieQuery(id);

  if (isLoadin) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  console.log('MAINMOVIE', data);
  return (
    <View>
      <View style={styles.movieContainer}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`}}
          style={styles.moviePoster}
          resizeMode="cover"
        />
        <View style={styles.gradientContainer}>
          <View style={styles.gradient} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="play-circle-o" size={20} color="#fff" />
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="info-circle" size={20} color="#fff" />
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gradientContainer: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    width: 100,
  },
  gradient: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  movieContainer: {
    width: 350,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  moviePoster: {
    width: '100%',
    height: 500,
  },
  buttonContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    top: 400,
    left: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default MainMovie;
