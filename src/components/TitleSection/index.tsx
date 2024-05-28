import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  height: 38rem;
  width: 100vw;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Title = styled.div`
  color: white;
  font-size: 13rem;
  font-weight: bold;
`;

const SmallTitle = styled(Title)`
  font-size: 3rem;
  position: absolute;
  top: 26rem;
  left: 40%;
`;

const TitleSection = () => {
  const [bigTitle, setBigTitle] = useState("");
  const [smallTitle, setSmallTitle] = useState("");

  const [count, setCount] = useState(0);
  const haedal = "HAEDAL";
  const reactTitle = "2024 상반기 React 코스";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBigTitle((prevTitleValue) => {
        const result = prevTitleValue
          ? prevTitleValue + haedal[count]
          : haedal[0];
        setCount(count + 1);

        if (count >= haedal.length) {
          return haedal;
        }

        return result;
      });
    }, 400);

    return () => {
      clearInterval(typingInterval);
    };
  });

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setSmallTitle((prevTitleValue) => {
        const result = prevTitleValue
          ? prevTitleValue + reactTitle[count]
          : reactTitle[0];
        setCount(count + 1);

        if (count >= reactTitle.length) {
          return reactTitle;
        }

        return result;
      });
    }, 400);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <Container>
      <Title>{bigTitle}</Title>
      <SmallTitle>{smallTitle}</SmallTitle>
    </Container>
  );
};

export default TitleSection;
