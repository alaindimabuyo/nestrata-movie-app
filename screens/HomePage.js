import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import SearchComponent from '../components/Search';
import GenreTags from '../components/GenreTags';
import MovieSlider from '../components/MovieSlider';
import {
  useGetNowPlayingMoviesQuery,
  useGetUpcomingMoviesQuery,
} from '../redux/series/api';
import {selectors, useSelector} from '../redux/index';
import MainMovie from '../components/MainMovie';
const HomePage = () => {
  const [UpcomingMoviepage, setUpcomingMoviePage] = useState(1);
  const [NowPlayingPage, setNowPlayingPage] = useState(1);

  const {
    data: upcomingMoviesData,
    error: upcomingMoviesError,
    isLoadin: upcomingMoviesLoading,
    refetch: upcomingMoviesRefetch,
  } = useGetUpcomingMoviesQuery(UpcomingMoviepage, {
    refetchOnMountOrArgChange: true,
  });

  const {
    data: nowPlayingMoviesData,
    error: nowPlayingMoviesError,
    isLoadin: nowPlayingMoviesLoading,
    refetch: nowPlayingMoviesRefetch,
  } = useGetNowPlayingMoviesQuery(NowPlayingPage, {
    refetchOnMountOrArgChange: true,
  });

  const selectSearchedMovies = useSelector(
    selectors?.series?.selectSearchedMovies,
  );

  return (
    <ScrollView style={styles.container}>
      <SearchComponent />
      <MainMovie />
      {selectSearchedMovies?.length < 1 && (
        <>
          <View style={styles.section}>
            <Text style={styles.mainText}>Categories</Text>
            <Text style={styles.secondaryText}>View All</Text>
          </View>
          <GenreTags />

          <View style={styles.section}>
            <Text style={styles.mainText}>Latest Movie</Text>
            <Text style={styles.secondaryText}>View All</Text>
          </View>
          <MovieSlider
            data={nowPlayingMoviesData}
            error={nowPlayingMoviesError}
            isLoadin={nowPlayingMoviesLoading}
            refetch={nowPlayingMoviesRefetch}
            setPage={setNowPlayingPage}
          />
          <View style={styles.section}>
            <Text style={styles.mainText}>Upcoming Movies</Text>
            <Text style={styles.secondaryText}>View All</Text>
          </View>
          <MovieSlider
            data={upcomingMoviesData}
            error={upcomingMoviesError}
            isLoadin={upcomingMoviesLoading}
            refetch={upcomingMoviesRefetch}
            setPage={setUpcomingMoviePage}
          />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  mainText: {
    color: '#fff',
    fontSize: 20,
  },
  secondaryText: {
    color: '#d16b23',
    fontSize: 12,
  },
  container: {
    margin: 20,
  },
  section: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomePage;
