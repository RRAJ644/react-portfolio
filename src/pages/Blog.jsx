import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchBlogs } from './data'
import './blog.css'

const Blog = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)

  const getBlog = async () => {
    try {
      const data = await fetchBlogs(slug)
      return data
    } catch (error) {
      console.error('Error fetching blog:', error)
    }
  }

  const fetchBlogData = async () => {
    const data = await getBlog()
    if (data) {
      setBlog(data)
    }
  }

  useEffect(() => {
    fetchBlogData()
  }, [slug])

  if (!blog) {
    return <section>Loading...</section>
  }

  return (
    <section className='container'>
      <h1>{blog?.title}</h1>
      <div
        className='container content'
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </section>
  )
}

export default Blog
