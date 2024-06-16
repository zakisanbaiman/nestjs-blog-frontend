import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "@/styles/src/styles/Home.module.css";
import { getAllPosts } from "@/utils/api";
import { PostType } from "@/utils/Types";

type Props = {
  posts: PostType[];
};

export async function getStaticProps() {
  const posts: PostType = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/inter-var-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style>{`
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 100 900;
            font-display: swap;
            src: url('/fonts/inter-var-latin.woff2') format('woff2');
          }
        `}</style>
      </Head>

      <div className={styles.container}>
        <h1>
          Nest.js blog frontend
        </h1>
        <ul className={styles.postList}>
          {posts.map((post: PostType) => (
            <li key={post.id} className={styles.post}>
              <h2 className={styles.title}>
                {post.title}
              </h2>
              {/* <p className={styles.author}></p> */}
            </li>
          ))}
          <li className={styles.post}>
            <h2 className={styles.title}>
              1st post
            </h2>
            {/* <p className={styles.author}></p> */}
          </li>
        </ul>
      </div>
    </>
  );
}
