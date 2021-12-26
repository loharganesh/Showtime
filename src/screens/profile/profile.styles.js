import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  ${({theme}) => `
    padding:${theme.spacing.regular}
  `}
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
