import styled from "styled-components";
import Difficulty from "./Difficulty";

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 280px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 15px 0;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  font-size: 14px;
  background: #f8f8f8;
  padding: 10px;
  border-radius: 12px;
`;

function Dishes({ photo, title, time, serving, cal, difficulty }) {
  return (
    <Card>
      <Image src={photo} alt={title} />
      <Title>{title}</Title>
      <InfoRow>
        <p>⏱ {time} min</p>
        <p>🍽 {serving} servings</p>
        <p>🔥 {cal} cal</p>
      </InfoRow>
      <Difficulty difficulty={difficulty} />
    </Card>
  );
}

export default Dishes;
