import baseAPI from '../baseApi';
import {gql} from 'graphql-request';
export const authenticationApi = baseAPI.injectEndpoints({
  endpoints: build => ({
    getCastDetails: build.query({
      query: id => ({
        body: gql`
          query {
            person(id: ${id}) {
              id,
              name,
              biography,
              birthday,
              deathday,
              place_of_birth,
              profile_path,
              cast{
                id,
                title,
                original_title,
                name,
                poster_path,
                genres{
                  id,
                  name
                }
              }
            }
          }
        `,
      }),
      transformResponse: response => response.person,
    }),
    searchPerson: build.query({
      query: text => ({
        body: gql`
          query {
            searchPerson(query: "${text}", page: 1) {
              results{
                id,
               	name,
                biography,
                birthday,
                deathday,
                place_of_birth,
                profile_path,
                cast{
                  name,
                  poster_path,
                  id,
                  title,
                  original_title
                }
              }
            }
          }
        `,
      }),
      transformResponse: response => response.searchPerson.results,
    }),
  }),
  overrideExisting: false,
});

export const {useSearchPersonQuery, useGetCastDetailsQuery} = authenticationApi;
