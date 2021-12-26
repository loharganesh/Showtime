import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  ${({theme}) => `
    background-color:${theme.color.background.primary}
    padding:${theme.spacing.regular}
  `}
`;
