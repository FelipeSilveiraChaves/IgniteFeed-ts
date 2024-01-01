import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/felipesilveirachaves.png",
      name: "Felipe Silveira Chaves",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋"},
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: 'link', content: "👉 jane.design/DoctorCare" },
    ],
    publishedAt: new Date('2023-10-18 20:48:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: "Eae guys 🚀🚀"},
      { type: 'paragraph', content: "Lancei a nova trilha de java no ignite. Da um conferida lá 🚀"},
      { type: 'link', content: "👉 https://app.rocketseat.com.br/java" },
    ],
    publishedAt: new Date('2023-09-29 15:28:53')
  }
]

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                post={post}

              />
            ))
          }
        </main>

      </div>
    </>
  )
}

export default App
