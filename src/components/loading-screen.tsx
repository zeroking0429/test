import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 24px;
`;

export default function LoadingScreen() {
  return (
    <>
      <title>문학이 꿈틀</title>
      <Wrapper>
        <Text>Loading...</Text>
      </Wrapper>
    </>
  );
}