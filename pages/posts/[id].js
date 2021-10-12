import Layout from '../../components/layout'
//import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'

export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map(({id}) => ({params: {id:  `${id}`}}))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
      console.log(error)
  }
}
export async function getStaticProps () {
  try {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await res.json(); 
          return {props: {data}}
  } catch (error) {
      console.log(error)
  }
}

export default function primerPost({ data }) {
  return (
    <Layout>
      <Head><title>{data.title}</title>
      </Head>
      
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
    </Layout>
  );
}
