import { Edit, SimpleForm, TextInput, DateInput} from 'react-admin'


const PostEdit = (props) => {
    return (
        <Edit title='Edit A Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'></TextInput>
                <TextInput source='title'></TextInput>
                <TextInput multiline source='content'></TextInput>
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit