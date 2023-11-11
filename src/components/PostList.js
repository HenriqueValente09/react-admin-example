import { List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'


const Postlist = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id'></TextField>
            <TextField source='title'></TextField>
            <TextField source='content'></TextField>
            <DateField source='publishedAt'></DateField>
            <EditButton basePath="/posts"></EditButton>
            <DeleteButton basePath="/posts"></DeleteButton>
        </Datagrid>

    </List>
}

export default Postlist