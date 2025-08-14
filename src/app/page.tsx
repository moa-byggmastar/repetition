import React from 'react'
import Card from '../../components/Card'

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Could not fetch data')
  }

  const posts: { id: number; title: string; body: string }[] = await res.json()

  const firstThree = posts.slice(0, 3)

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {firstThree.map((post) => (
        <Card key={post.id} title={post.title} description={post.body} />
      ))}
    </div>
  )
}
