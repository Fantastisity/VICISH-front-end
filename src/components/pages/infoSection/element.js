import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const InfoContainer = styled.div`
  color: #fff;
  background: no-repeat center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  vertical-align: middle;
  height: 720px;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 10px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-left: 150px;
`;

export const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? '#fff' : '#0B3F78')};
  font-size: 35px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: ${({ topspace }) => (topspace)};
`;

export const Heading = styled.h1`
  margin-bottom: 27px;
  margin-top: 20px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#fff' : '#0B3F78')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 600px;
  margin-bottom: -10px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#0B3F78' : '#fff')};
`;

export const Button = styled(Link)`
  width: 12rem;
  border-radius: 50px;
  background: ${({ col }) => (col)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 40px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: 520;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#808cab')};
  }
`;

export const BtnWrap = styled.div`
  display: inline-block;
  padding:10px 2px;
  margin-left: 160px;
  margin-right: -88px;
  font-size:0;
  justify-content: space-evenly;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const CardWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-left: -55px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardLayout = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 150px;
  width: 150px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: black
`;

export const CardP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: black
`;

export const CardIcon = styled.img`
  height: 150px;
  width: 250px;
  margin-bottom: 15px;
  margin-top: -4px;
  object-fit: cover;
`;
