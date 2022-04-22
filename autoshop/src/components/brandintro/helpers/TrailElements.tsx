import styled from 'styled-components';
import { PreTrailText } from './PreTrailText';

export const TrailText = styled(PreTrailText)`
position: relative;
width: 100%;
height: 80px;
line-height: 80px;
color: black;
font-size: 5em;
font-weight: 700;
letter-spacing: -0.05em;
will-change: transform, opacity;
overflow: hidden;
/* margin-left: 30%; */

& > div: {
    padding-right: 0.05em;
    overflow: hidden;
}

`
  