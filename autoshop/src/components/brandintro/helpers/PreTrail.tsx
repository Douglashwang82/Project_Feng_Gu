import React from 'react';
import { useTrail, a } from '@react-spring/web';
import {
  TrailText
} from './TrailElements';



export const Trail: React.FC<{}> = ({ children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      to: { opacity: 1, x: 0, height: 80 },
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
            <TrailText key={index} style={style}>
              <a.div style={{height}}>{items[index]}</a.div>
            </TrailText>
        ))}
      </div>
    )
  }