import * as React from 'react';
import PropTypes from 'prop-types';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import metaLogoColor from '../assets/images/meta-logo-color.png'

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <svg width="250" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 250,0 170,50" className="bg" />
      <polygon points="0,50 0,0 250,0 170,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="220" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  
  overflow: visible;
  cursor: pointer;
  --main-color: #ffd500;
  --hover-color:#1c1700;
  --active-color: #ffd500;

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: #1c1400;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 3;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Quicksand, sans-serif;
      font-size: 14px;
      font-weight: 800;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
      
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref}  />;
});

export default function UnstyledButtonCustom(props) {
  return <SvgButton onClick={props.click}>{props.txt}<img src={metaLogoColor} width="20px" style={{marginRight:"40px",marginLeft:"7px"}}/></SvgButton>;
}
