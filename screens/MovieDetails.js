import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useGetMainMovieQuery} from '../redux/series/api';
import CastSlider from '../components/CastSlider';

const MovieDetails = ({route}) => {
  const navigation = useNavigation();

  const {data, error, isLoadin} = useGetMainMovieQuery(route.params.movieID);

  if (isLoadin) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}>
          <Icon name="left" size={20} color="#707071" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="hearto" size={20} color="#707071" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`}}
        style={styles.moviePoster}
        resizeMode="cover"
      />
      <Text style={styles.mainText}>{data?.title || data?.original_title}</Text>
      <View style={styles.details}>
        <Text style={styles.secondaryText}>
          {data?.release_date.split('-')[0]}
        </Text>
        {data?.genres?.map(item => (
          <Text key={item.id} style={styles.secondaryText}>
            {item?.name}
          </Text>
        ))}
        <Text style={styles.secondaryText}>{`${Math.floor(
          data?.runtime / 60,
        )} : ${data?.runtime % 60}`}</Text>
      </View>

      <Text style={styles.textSections}>Plot Summary</Text>
      <Text style={styles.secondaryText}>{data?.overview}</Text>

      <Text style={styles.textSections}>Cast</Text>
      <CastSlider data={data?.credits?.cast} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textSections: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  movieActorImage: {
    width: '15%',
    height: 50,
    borderRadius: 100,
  },
  mainText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  secondaryText: {
    color: '#9696a3',
    lineHeight: 25,
  },
  moviePoster: {
    width: '100%',
    height: 500,
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    marginRight: 8,
  },
  container: {
    margin: 20,
  },
});
export default MovieDetails;
