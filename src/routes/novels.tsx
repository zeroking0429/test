import { useState } from "react";
import styled from "styled-components";
import { dyingloop, he, losemoney, madman, misgirl, monster, petti, picturegirl, theman } from "../components/novel";

const Wrapper = styled.div`
  height: auto;
  user-select: none;
`;

const NovelInfo = styled.div`
  width: auto;
  height: 75%;
  display: grid;
  overflow: auto;
  border: 1px solid white;
  margin-right: 20px;
`;

const NovelDiv = styled.div`
  width: auto;
  height: auto;
  overflow: auto;
  padding-top: 20px;
  margin-right: 20px;
`

const Text = styled.h1`
  font-size: 30pt;
  padding-bottom: 20px;
`;

const Back = styled.span`
  font-size: 30pt;
  &:hover {
    cursor: pointer;
  }
`

const NovelBtn = styled.button`
  font-size: 1em;
  color: white;
  background-color: black;
  margin: 5px 10px;
  border: 2px solid white;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const Novel = styled.p`
  color: white;
`;

export default function Novels() {
  const [isNovel, setIsNovel] = useState(false);
  const [novel, setNovel] = useState("");

  return (
    <Wrapper>
      {isNovel ? <Back onClick={() => {setIsNovel(false); setNovel("");}}>&larr; 돌아가기</Back> : <Text>소설 선택</Text>}
      {isNovel ?
        <NovelDiv>
          <Novel>{novel}</Novel>
        </NovelDiv>
        :
        <NovelInfo>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(he);
              }
            }>
            그는 결국 막지 못했다
          </NovelBtn>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(petti);
              }
            }>
            패티 협박범
          </NovelBtn>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(madman);
              }
            }>
            미친 남자와 함께 산다
          </NovelBtn>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(picturegirl);
              }
            }>
            사진 속의 여자
          </NovelBtn>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(misgirl);
              }
            }>
            여학생의 불행
          </NovelBtn>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(dyingloop);
              }
            }>
            죽음의 루프
          </NovelBtn>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(monster);
              }
            }>
            괴생명체를 사랑한 남자
          </NovelBtn>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(losemoney);
              }
            }>
            돈 잃고 외양간 고치는 남자
          </NovelBtn>
          <NovelBtn onClick={
            () => {
                setIsNovel(true);
                setNovel(theman);
              }
            }>
            그 남자
          </NovelBtn>
        </NovelInfo>
      }
    </Wrapper>
  );
}