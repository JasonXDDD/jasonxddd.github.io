---
sidebar_position: 1
---

# [Next.js] Pages

## 基本使用

- Route：只需要在 `pages/` 底下新增檔案 (EX: `pages/hello.jsx`)，就能夠產生路徑 `/hello`

- Dynamic Route：檔案命名為 `pages/[id].jsx`，就會產生動態路徑，`id` 可以在 `router.query` 取得

  ```jsx
  // pages/[id].jsx
  import { useRouter } from 'next/router'
  
  const Post = () => {
    const router = useRouter()
    const { id } = router.query
  
    return <p>Post: {id}</p>
  }
  
  export default Post
  ```



## Pre-rendering

Default 是開的 (P.S. 注意要分清楚 pre-render 的載入資料、以及動態產生的資料分界)

兩種形式

- **Static Generation**：HTML 在 build 的時候就已經建立完成，在處理每個 Request 的時候，可以 reuse 這些打包好的資源。
- **SSR**：HTML 會再處理每個 Request 的時候產生。



## Static Generation

分兩種狀況

- **Without Data**：就單純靜態頁面啦，會 build 出純 HTML

- **With Data**：就是需要動態資料產生畫面，分成兩種時機：

  - Page **Content** Depends：頁面透過 AJAX 產生資料，要用 `getStaticProps()` 預處理資料載入

    ```jsx
    // pages/blog.jsx
    function Blog({ posts }) {
      // Render posts...
    }
    
    // This function gets called at build time
    export async function getStaticProps() {
      // Call an external API endpoint to get posts
      const res = await fetch('https://.../posts')
      const posts = await res.json()
    
      // By returning { props: { posts } }, the Blog component
      // will receive `posts` as a prop at build time
      return {
        props: {
          posts,
        },
      }
    }
    
    export default Blog
    ```

  - Page **Path** Depends：動態路由產生的 query 並動態取得資料，用 `getStaticPaths()` 預處理載入，當然也可以用 `getStaticProps({params})` 裡的 params 來取 query 值也行。

    ```jsx
    // pages/[id].jsx
    
    // This function gets called at build time
    export async function getStaticPaths() {
      // Call an external API endpoint to get posts
      const res = await fetch('https://.../posts')
      const posts = await res.json()
    
      // Get the paths we want to pre-render based on posts
      const paths = posts.map((post) => ({
        params: { id: post.id },
      }))
    
      // We'll pre-render only these paths at build time.
      // { fallback: false } means other routes should 404.
      return { paths, fallback: false }
    }
    //-------------------------------------------------------------------------
    // same with
    function Post({ post }) {
      // Render post...
    }
    
    export async function getStaticPaths() {
      // ...
    }
    
    // This also gets called at build time
    export async function getStaticProps({ params }) {
      // params contains the post `id`.
      // If the route is like /posts/1, then params.id is 1
      const res = await fetch(`https://.../posts/${params.id}`)
      const post = await res.json()
    
      // Pass post data to the page via props
      return { props: { post } }
    }
    
    export default Post
    ```

    

## SSR

處理全部的 Request 請求，用 `getServerProps()` 來預處理資料

```jsx
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page
```

