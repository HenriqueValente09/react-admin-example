import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple';
import { gql } from '@apollo/client';

const myBuildQuery = introspection => (fetchType, resource, params) => {
    const builtQuery = buildQuery(introspection)(fetchType, resource, params);

    if (resource === 'Post' && fetchType === 'GET_LIST') {
        return {
            ...builtQuery,
            query: gql`
                query {
                    data: posts {
                        content
                    }
                }`,
        };
    }

    return builtQuery;
};

export default buildGraphQLProvider({ buildQuery: myBuildQuery })