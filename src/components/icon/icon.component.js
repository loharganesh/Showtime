import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {memo} from 'react';
import {ICONS} from './icon.registry';

const IconComp = props => {
  const {name = '', color = '#4A4D55', size = 26, badge = false} = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d={ICONS[name]}
        fill={color}
      />
      {badge && (
        <Circle
          cx={19}
          cy={5}
          r={4.25}
          fill="#F77"
          stroke="#D15050"
          strokeWidth={1.5}
        />
      )}
    </Svg>
  );
};

export const Icon = memo(IconComp);
