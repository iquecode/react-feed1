import { Header } from "./components/Headers";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      name: 'John Doe',
      role: 'Admin'
    },
    content: [
      { type: 'paragraph', content: 'This is a paragraph' },
      { type: 'paragraph', content: 'This is another paragraph' },
      { type: 'link', content: 'https://www.google.com' },
    ],
    publishedAt: new Date('2022-06-09 07:10:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      name: 'Fulado de Tal',
      role: 'Vendedor'
    },
    content: [
      { type: 'paragraph', content: 'This is a paragraph' },
      { type: 'paragraph', content: 'This is another paragraph' },
      { type: 'link', content: 'https://www.google.com' },
    ],
    publishedAt: new Date('2022-06-08 10:30:00'),
  }

  
]

export function App() {
  return (
    
    <div>
      <Header />  
    
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }) }
        </main>
      </div>


    </div>
  )
}


