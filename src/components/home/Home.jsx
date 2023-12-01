import BlogList from '../bloglist/BlogList';
import UseFetch from '../useFetch/UseFetch';
import './home.scss'
import { useEffect, useState } from "react";

const Home = () => {


    
    const {data: blogs, isPending, error} = UseFetch('http://localhost:8000/blogs');

    // const [blogs, setBlogs] = useState([
    //     {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id:1},
    //     {title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id:2},
    //     {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'can', id:3},
    //     {title: 'Hello there', body: 'lorem ipsum...', author: 'can', id:4},
    // ]); 


    // const handleDelete = (blogListId) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== blogListId);
    //     setBlogs(newBlogs);
    // }
    // useEffect Dependencies
    // const [name, setName] = useState('Can');
    // useEffect (()=> {
    //     console.log('useEffect Works');
    // }, [name]) // name 'e bağlı parametre sadece name değiştiğince 1 kez çalışır

    return ( 
        <div className='home'>
            {error && <div>{error}</div>} 
            {isPending && <div>Loading...</div>} 
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'can') } title="Can's Blog"/> */}
            {/* <button onClick={() => setName( (prev) => (prev==='OSMAN' ? 'Can' : 'OSMAN'))}>Change name</button> */}
            
        </div>
    );
}
 
export default Home;