import { useState } from "react";
import { useHistory } from "react-router-dom";
import { newPost } from "../../WebAPI";
import {
  Wrapper,
  Page,
  Form,
  Title,
  TextArea,
  Input,
  Button,
  FormH1,
} from "./NewPostElements";

const NewPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleInputChange = (e) => {
      setTitle(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newPost(title, content);
    history.push("/article");
  };

  return (
    <Wrapper>
      <Page>
        <Form onSubmit={handleSubmit}>
          <Title>new post</Title>
          <FormH1>
            <label htmlFor="title">文章標題</label>
          </FormH1>
          <br />
          <Input
            type="text"
            id="title"
            name="content"
            value={title}
            onChange={handleInputChange}
          />
          <br />
          <FormH1>
            <label htmlFor="content">文章內容</label>
          </FormH1>
          <br />
          <TextArea
            id="content"
            name="content"
            value={content}
            onChange={handleTextareaChange}
          />
          <br />
          <Button>送出文章</Button>
        </Form>
      </Page>
    </Wrapper>
  );
};

export default NewPostPage;
