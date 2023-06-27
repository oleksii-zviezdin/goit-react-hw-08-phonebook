import styled from '@emotion/styled';

export const Container = styled.div`
  @media screen and (min-width: 375px) {
    width: calc(375px - 20px);
  }
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;

export const FormTitle = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  font-size: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const ContnactsTitle = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Error = styled.p`
  margin-top: 24px;
  color: #ff62b693;
  text-shadow: 0 0 10px #ff62b6d3;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
`;
export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
