import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  margin-bottom: 1em;
`;

const CommentHeader = styled.div`
  border-bottom: 1px solid #ffbc05;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export interface CommentProps {
  id: string;
  body: string;
  name: string;
  title: string;
}
const Comment: React.FC<CommentProps> = (props) => {
  const { title, body, name } = props;

  return (
    <CommentWrapper>
      <CommentHeader>
        <div>{title}</div>
        <div>{name}</div>
      </CommentHeader>
      <div>{body}</div>
    </CommentWrapper>
  );
};

export default Comment;