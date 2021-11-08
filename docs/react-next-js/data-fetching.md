---
sidebar_position: 1

---

# [Next.js] Data Fetching

## 前言

接續上一章 [Page](/page)，介紹了兩種形式的 Pre-rendering：**Static Generation**、**SSR**，接著我們繼續深入了解這三個 Next.js 獨有的函式：

- **getStaticProps** (Static Generation)：在 Build 的時候去抓資料
- **getStaticPaths** (Static Generation)：在動態路由的時後去抓資料
- **getServerSideProps** (SSR)：每個請求都去抓資料



## getStaticProps

```jsx
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

In TypeScript：

```tsx
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
}
```

**Input**：`context` 包含以下參數

| 參數            | 敘述                                               | 補充                                                         |
| --------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| `params`        | 動態路由的參數，應該與 `getStaticPaths` 一起使用。 | [Dynamic Routing documentation](https://nextjs.org/docs/routing/dynamic-routes) |
| `preview`       | `(true | undefined)` 是否進入 Preview Mode。       | [Preview Mode documentation](https://nextjs.org/docs/advanced-features/preview-mode) |
| `previewData`   | 根據 `setPreviewData` 傳入的內容。                 | [Preview Mode documentation](https://nextjs.org/docs/advanced-features/preview-mode) |
| `locale`        | 目前的 active locale                               | [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing) |
| `locales`       | 支援的所有 locales                                 | [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing) |
| `defaultLocale` | 預設的 locale                                      | [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing) |

**Output**：`getStaticProps` 回傳的物件

| 參數         | Required/Optional | 敘述                                                         |
| ------------ | ----------------- | ------------------------------------------------------------ |
| `props`      | Optional          | 回傳可以被序列化 ([serializable object](https://en.wikipedia.org/wiki/Serialization)) 的物件，簡單來說就是回傳可以被使用資料。 |
| `revalidate` | Optional          | Default `false`，表示間隔多久 (秒) 頁面會重新 re-generation，設定 false 表示畫面從這次 build 之後會被 cached，直到下次執行 build。參考 [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration) |
| `notFound`   | Optional          | `Boolean`，告訴頁面是不是該回傳 404 Not Found。              |
| `redirect`   | Optional          | `{ destination: string, permanent: boolean }`<br />表示重新導向到指定的位置去 (內部或是外部都行) |



## Incremental Static Regeneration (ISR)



