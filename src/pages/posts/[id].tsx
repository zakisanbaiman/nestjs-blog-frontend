import React from "react";
import styles from "@/styles/src/styles/Home.module.css";
import { getAllPosts, getPostById } from "@/utils/api";
import { PostType } from "@/utils/Types";

type Props = {
  post: PostType;
};

export async function getStaticProps({params}: any) {
  const post: PostType = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post: PostType) => ({
    params: {id: post.id},
  }));

  return {
    paths,
    fallback: false, // 静的ルーティングにないページに対しては404ページを表示する
  }
}

const Post = ({ post }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
    </div>
  )
};

export default Post;