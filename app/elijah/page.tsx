import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function ElijahPage() {
  const filePath = path.join(process.cwd(), 'content/elijah/fire-on-mount-carmel.mdx')
  const mdxContent = fs.readFileSync(filePath, 'utf-8')

  return (
    <main style={{ padding: '2rem', fontFamily: 'serif', maxWidth: '700px', margin: 'auto' }}>
      <MDXRemote source={mdxContent} />
    </main>
  )
}
