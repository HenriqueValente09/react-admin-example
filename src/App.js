import React from 'react'
import { Admin, Resource} from 'react-admin'
import crudProvider from 'ra-data-nestjsx-crud'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'

const dataProvider = crudProvider('http://localhost:3001');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="Post" list={PostList} create={PostCreate} edit={PostEdit} />
  </Admin>
);
export default App;
