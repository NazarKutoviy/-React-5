import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Button = styled.span`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  background: ${({ active, color }) => (active ? color : "#f5f5f5")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  box-shadow: ${({ active }) =>
    active ? "0 2px 6px rgba(0,0,0,0.2)" : "none"};
  transition: all 0.3s ease;
`;

function Difficulty({ difficulty }) {
  return (
    <Wrapper>
      <Label>Difficulty</Label>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button active={difficulty === 0} color="#f48fb1">
          Easy
        </Button>
        <Button active={difficulty === 1} color="#ffca28">
          Medium
        </Button>
        <Button active={difficulty === 2} color="#e53935">
          Hard
        </Button>
      </div>
    </Wrapper>
  );
}

export default Difficulty;
