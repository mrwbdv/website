import styled from 'styled-components';

export const TextSection = () => {
  return (
    <Wrapper>
      <Title>Aqmaral Serikova</Title>
      <Description>currently building software in Astana(KZ)</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  text-transform: uppercase;
  font-size: 2rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
