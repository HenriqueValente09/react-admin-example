import { List, Datagrid, TextField} from 'react-admin'


const Postlist = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id'></TextField>
            <TextField source='content'></TextField>
            {/* <EditButton basePath="/posts"></EditButton>
            <DeleteButton basePath="/posts"></DeleteButton> */}
        </Datagrid>

    </List>
}

export default Postlist