import styled from "styled-components";

const Write = () => {
  return (
    <StContainer>
      <StHeader>비밀 편지를 써보세요!</StHeader>
      <StWriteForm>
        <StInputBox>
          <StLabel>이름</StLabel>
          <StInput placeholder="이름이 뭐에요?"></StInput>
        </StInputBox>
        <StInputBox>
          <StLabel>내용</StLabel>
          <StInput placeholder="무슨 내용의 편지를 써볼까요?"></StInput>
        </StInputBox>
        <StInputBox>
          <StLabel>비밀번호</StLabel>
          <StInput
            type="password"
            placeholder="비밀번호를 통해 편지를 잠궈보아요."
          ></StInput>
        </StInputBox>
        <StInputBox>
          <StLabel>비밀번호 힌트</StLabel>
          <StInput placeholder="누군가 내 비밀편지를 보도록 비밀번호 힌트를 주세요."></StInput>
        </StInputBox>
        <StInputBox>
          <StLabel>썸네일</StLabel>
          <StFileBtn type="button">이미지 업로드 (jpg,jpeg,png)</StFileBtn>
          <StInput type="file" className="hidden" />
        </StInputBox>
        <StSubmitBtn type="submit">비밀편지 보내기</StSubmitBtn>
      </StWriteForm>
    </StContainer>
  );
};

export default Write;

const StContainer = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;
`;

const StHeader = styled.header`
  font-size: 50px;
  font-weight: bold;
  margin: 30px 0;
`;

const StWriteForm = styled.form`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  background-color: #ffffbf;

  border-radius: 35px;

  padding: 40px;
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  & .hidden {
    display: none;
  }
`;
const StLabel = styled.label`
  font-size: 30px;
`;
const StInput = styled.input`
  height: 50px;
  font-size: 20px;
  padding: 0 10px;

  border-radius: 20px;
  border: none;
`;
const StFileBtn = styled.button`
  height: 50px;
  background-color: #f1b74c;
  font-size: 20px;
  border-radius: 15px;
  border: none;
`;

const StSubmitBtn = styled.button`
  height: 70px;
  background-color: orange;

  font-size: 30px;
  border-radius: 15px;
  border: none;
  color: white;
  font-weight: bold;

  cursor: pointer;
`;
