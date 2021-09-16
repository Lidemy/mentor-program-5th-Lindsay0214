import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import {
  Wrapper,
  Page,
  Title,
  PostContainer,
  PostTitle,
  PostDate,
  LimitPage,
  Loading,
} from "./ArticlesElements";
import PropTypes from "prop-types";
import { getPosts, getLimitPosts } from "../../WebAPI";
import Limits from "../Limit";

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`posts/${post.id}`}>{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default function Articles() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isLimitLoading, setLimitIsLoading] = useState(false);

  useEffect(() => {
    getPosts().then((posts) => {
      setLastPage(Math.ceil(posts.length / 5));
    });
  }, []);

  useEffect(() => {
    setLimitIsLoading(true);
    getLimitPosts(page).then((posts) => {
      setPosts(posts);
      setLimitIsLoading(false);
    });
  }, [page]);

  return (
    <Wrapper>
      <LimitPage>
        <Page>
          <Title>Articles</Title>
          {isLimitLoading
            ? !!posts.length &&
              !!lastPage && (
                <Loading>
                  <ReactLoading type={"bubbles"} />
                </Loading>
              )
            : posts.map((post) => <Post key={post.id} post={post} />)}
        </Page>
        {!!posts.length && !!lastPage && (
          <Limits page={page} setPage={setPage} lastPage={lastPage} />
        )}
      </LimitPage>
    </Wrapper>
  );
}
