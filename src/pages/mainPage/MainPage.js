import React, { useState } from 'react'
import News from '../news/News';
import classes from './mainPage.module.css';


function MainPage() {
  const [posts, setPost] = useState([{}]);

  const createPost = () => {
    setPost([...posts,
    {
      title: 'Новый пост',
      body: 'Содержание нового поста',
      date: new Date().toISOString()
    }
    ])
  }

  return (
    <>
      <h1>Main Page</h1>
      <div className={classes.countWrapper}  >
        <News propPost={posts} getPost={createPost} />
      </div>
    </>
  )
}

export default MainPage
