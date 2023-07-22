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
  }),
  overrideExisting: false,
});

export const {useGetCastDetailsQuery} = authenticationApi;
