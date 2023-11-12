import React from 'react'
import { Component } from 'react';
import { Admin, Resource} from 'react-admin'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
import buildGraphQLProvider from 'ra-data-graphql-simple';
import myBuildQuery from './dataProvider.js'

function App() {
  const [dataProvider, setDataProvider] = React.useState(null);
    React.useEffect(() => {
        try {
        buildGraphQLProvider({ clientOptions: { uri: 'http://localhost:8080/graphql' }, buildQuery: myBuildQuery })
            .then(graphQlDataProvider => setDataProvider(() => graphQlDataProvider));
        } catch (error) {
            console.log(error)
        }
    }, []);

    if (!dataProvider) {
        return <div>Loading </div>;
    }

    return (
        <Admin dataProvider= { dataProvider } >
            <Resource name="Post" list = { PostList } edit = { PostEdit } create = { PostCreate } />
        </Admin>
    );
}

export default App;
