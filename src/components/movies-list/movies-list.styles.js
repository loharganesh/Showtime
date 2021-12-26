import styled from 'styled-components/native';

export const Container = styled.FlatList`
  ${({theme}) => `
    padding: 0px ${theme.spacing.regular} ${theme.spacing.regular} ${theme.spacing.regular};
  `}
`;
