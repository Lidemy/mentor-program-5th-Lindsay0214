import { useState, useEffect } from "react";
import { getPost, getUser } from "../../WebAPI";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  Title,
  Info,
  Author,
  Time,
  Content,
  Page,
  Post
} from "./PosElements";

const PosPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data);
    });
  }, [id]);

  useEffect(() => {
    if (!post) return;
    getUser(post.userId).then((data) => {
      setUser(data);
    });
  }, [post]);

  return (
    <>
      {post && user && (
        <Wrapper>
          <Page>
            <Title>{post.title}</Title>
            <Post>
              <Info>
                <Author>{user && user.nickname}</Author>
                <Time>{new Date(post.createdAt).toLocaleString()}</Time>
              </Info>
            </Post>
            <Content>{post.body}</Content>
          </Page>
        </Wrapper>
      )}
    </>
  );
};

export default PosPage;
