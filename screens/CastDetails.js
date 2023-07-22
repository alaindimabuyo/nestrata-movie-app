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
import {useGetCastDetailsQuery} from '../redux/person/api';
import MovieSlider from '../components/MovieSlider';

const CastDetails = ({route}) => {
  const navigation = useNavigation();

  const {data, error, isLoadin} = useGetCastDetailsQuery(route.params.castID);

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
        <Text style={styles.mainText}>{data?.name}</Text>
        <TouchableOpacity>
          <Icon name="hearto" size={20} color="#707071" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.biography}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data?.profile_path}`,
          }}
          style={styles.movieActorImage}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.secondaryText}>
            {data?.biography?.length > 400
              ? data.biography.substring(0, 400) + '...'
              : data?.biography}
          </Text>
        </View>
      </View>
      <Text style={styles.mainText}>Best Movies</Text>
      <MovieSlider data={data?.cast} error={error} isLoadin={isLoadin} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  biography: {
    flexDirection: 'row',
    height: 450,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  movieActorImage: {
    width: '40%',
    height: 450,
    borderRadius: 20,
  },
  container: {
    margin: 20,
  },
  icon: {
    marginRight: 8,
  },
  mainText: {
    color: '#fff',
    fontSize: 20,
    margin: 20,
  },
  secondaryText: {
    color: '#9696a3',
    lineHeight: 25,
    width: '8%',
    margin: 10,
  },
});
export default CastDetails;
