import baseAPI from '../baseApi';
import {gql} from 'graphql-request';
export const authenticationApi = baseAPI.injectEndpoints({
  endpoints: build => ({
    getUpcomingMovies: build.query({
      query: page => ({
        body: gql`
          query {
            upcomingMovies(page: ${page}) {
              page,
              results{
                  id,
                  title,
                  original_title,
                  name,
                  poster_path
              }
            }
          }
        `,
      }),
      transformResponse: response => response.upcomingMovies.results,
    }),
    getNowPlayingMovies: build.query({
      query: page => ({
        body: gql`
          query {
            nowPlayingMovies(page: ${page}) {
              page,
              results{
                  id,
                  title,
                  original_title,
                  name,
                  poster_path
              }
            }
          }
        `,
      }),
      transformResponse: response => response.nowPlayingMovies.results,
    }),
    getMainMovie: build.query({
      query: id => ({
        body: gql`
          query {
            movie(id: ${id}) {
              id,
              title,
              original_title,
              name,
              poster_path,
              release_date,
              backdrop_path,
              vote_average,
              homepage,
              overview,
              runtime,
              popularity,
              genres{
                id,
                name
              },
              credits{
                id,
                cast{
                  name,
                  character,
                  profile_path,
                  id,
              },
              }
            }
          }
        `,
      }),
      transformResponse: response => response.movie,
    }),
    searchMovies: build.query({
      query: text => ({
        body: gql`
          query {
            searchMovies(query: "${text}", page: 1) {
              results {
                id
                title
                original_title
                name
                overview
                release_date
                poster_path
                credits {
                  cast {
                    name
                    character
                    profile_path
                    id
                  }
                }
              }
            }
          }
        `,
      }),
      transformResponse: response => response.searchMovies.results,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetMainMovieQuery,
  useSearchMoviesQuery,
  useLazySearchMoviesQuery,
} = authenticationApi;
