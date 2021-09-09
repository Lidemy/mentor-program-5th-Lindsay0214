import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Page,
  Title,
  MessageForm,
  MessageTextArea,
  SubmitButton,
  MessageList,
  AlertMessage,
  ErrorMessage,
  MessageBody,
  MessageTime,
  MessageAuthor,
  MessageHead,
  MessageContainer,
  Loading,
} from "./CommentsElements";
// import PropTypes from "prop-types";

const API_ENDPOINT =
  "https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc";

function Messages({ author, time, children }) {
  return (
    <MessageContainer>
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <MessageTime>{time}</MessageTime>
      </MessageHead>
      <MessageBody>{children}</MessageBody>
    </MessageContainer>
  );
}

//   Messages.propTypes = {
//     author: PropTypes.string,
//     time: PropTypes.string,
//     children: PropTypes.node
//   };

function Comments() {
  const [messages, setMessages] = useState(null);
  const [messageApiError, setMessagesApiError] = useState(null);
  const [value, setValue] = useState();
  const [postMessageError, setPostMessageError] = useState();
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false);

  const fetchMessages = () => {
    return fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => {
        setMessagesApiError(err.message);
      });
  };

  const handleTextareaChange = (e) => {
    setValue(e.target.value);
  };

  const handleTextareaFocus = () => {
    setPostMessageError(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLoadingPostMessage) {
      return;
    }
    setIsLoadingPostMessage(true);

    fetch("https://student-json-api.lidemy.me/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nickname: "00",
        body: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsLoadingPostMessage(false);
        if (data.ok === 0) {
          setPostMessageError(data.message);
          return;
        }
        setValue("");

        fetchMessages();
      })
      .catch((err) => {
        setIsLoadingPostMessage(false);
        setPostMessageError(err.message);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <Wrapper>
      <Page>
        {isLoadingPostMessage && <Loading>Loading...</Loading>}
        <Title>Comments</Title>
        <MessageForm>
          <MessageTextArea
            rows={5}
            value={value}
            onChange={handleTextareaChange}
            onFocus={handleTextareaFocus}
          />
          <SubmitButton onClick={handleFormSubmit}>送出</SubmitButton>
          {postMessageError && <ErrorMessage>{postMessageError}</ErrorMessage>}
        </MessageForm>
        {messageApiError && (
          <ErrorMessage>{messageApiError.toString()}</ErrorMessage>
        )}
        {messages && messages.length === 0 && (
          <AlertMessage>搶頭香喔～～～！</AlertMessage>
        )}
        <MessageList>
          {messages &&
            messages.map((message) => (
              <Messages
                key={message.id}
                author={message.nickname}
                time={new Date(message.createdAt).toLocaleString()}
              >
                {message.body}
              </Messages>
            ))}
        </MessageList>
      </Page>
    </Wrapper>
  );
}

export default Comments;
