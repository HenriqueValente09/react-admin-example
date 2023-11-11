import { Create, SimpleForm, TextInput, DateInput} from 'react-admin'


const PostCreate = (props) => {
    return (
        <Create title='Create A Post' {...props}>
            <SimpleForm>
                <TextInput source='title'></TextInput>
                <TextInput multiline source='content'></TextInput>
                <DateInput label='publishedAt' source='publishedAt'></DateInput>
            </SimpleForm>
        </Create>
    )
}

export default PostCreate