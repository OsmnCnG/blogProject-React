import { useState } from 'react';
import './create.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Osman');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const blog = { title, body, author};

    //     setIsPending(true);

    //     fetch('http://localhost:8000/blogs', {
    //         method: 'POST',
    //         headers: {"content-Type" : "application/json" },
    //         body: JSON.stringify(blog)
    //     }).then(()=> {
    //         setIsPending(false);
    //         console.log('new blog added');
    //         history.push('/');
    //     }) 
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {
            setIsPending(false);
            console.log('new blog added');
            history.push('/');
        }) 
    }
    
    
    
    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} 
                ></textarea>
                <label>Blog Author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Osman">Osman</option>
                    <option value="John">John</option>
                    <option value="Emily">Emily</option>
                    <option value="Peter">Peter</option>
                </select>
                {!isPending && <button>Add Blog</button> }
                {isPending && <button disabled>Adding blog...</button> }
                

            </form>
        </div>
    );
}
 
export default Create;