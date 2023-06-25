import styled from '@emotion/styled';

export const ContainerAppBar = styled.header`
  position: sticky;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(-45deg, rgb(7, 0, 59), rgb(14, 0, 92));
  &:hover,
  &:focus {
    box-shadow: 0px 4px 12px 8px rgb(36, 10, 162);
  }
`;

export const AppBarCSS = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
  background-color: rgb(18 8 42);
  box-shadow: 0 0 10px 5px #001aff;
`;
