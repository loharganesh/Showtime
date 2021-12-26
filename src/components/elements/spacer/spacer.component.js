import React from 'react';
import styled, {useTheme} from 'styled-components/native';

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const value = theme.spacing[size];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({variant}) => variant};
`;

export const Spacer = React.memo(
  ({position = 'top', size = 'small', children}) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return <SpacerView variant={variant}>{children}</SpacerView>;
  },
);
