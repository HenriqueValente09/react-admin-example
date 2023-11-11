import { Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}></Resource>
  </Admin>;
}

export default App;
