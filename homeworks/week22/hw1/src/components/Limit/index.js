import { useEffect, useState } from "react";
import {
  Limit,
  Wrapper,
  LimitButton,
  Dots,
  Button,
  NextButton,
} from "./LimitElements";

const Limits = ({ page, setPage, lastPage }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages([]);
    for (let i = 1; i <= lastPage; i++) {
      if (i - page > 2 && i !== lastPage && i + 1 !== lastPage) {
        setPages((prev) => [...prev, <Dots key={i}>...</Dots>]);
        i = lastPage - 1;
        continue;
      }
      if (page - i > 3 && i !== 1) {
        setPages((prev) => [...prev, <Dots key={i}>...</Dots>]);
        i = page - 3;
        continue;
      }

      setPages((prev) => {
        return [
          ...prev,
          i === page ? (
            <Button key={i} $active={true}>
              {i}
            </Button>
          ) : (
            <Button key={i} $active={false} onClick={() => setPage(i)}>
              {i}
            </Button>
          ),
        ];
      });
    }
  }, [page, setPage, lastPage]);

  return (
    <Wrapper>
      {page > 1 ? (
        <Limit onClick={() => setPage((prev) => prev - 1)}>
          <NextButton>上一頁</NextButton>
        </Limit>
      ) : (
        <Limit $active={false} />
      )}
      <LimitButton $active={true}>{[...pages]}</LimitButton>
      {page < lastPage ? (
        <Limit onClick={() => setPage((prev) => prev + 1)}>
          <NextButton>下一頁</NextButton>
        </Limit>
      ) : (
        <Limit $active={false} />
      )}
    </Wrapper>
  );
};

export default Limits;
