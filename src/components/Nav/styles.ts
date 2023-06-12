import styled, { css } from 'styled-components';

type NavState = {
  isOpened : boolean
};

export enum  AnimationType  {
	SLIDEDOWN = 'SLIDEDOWN',
  SLIDELEFT = 'SLIDELEFT',
	UPTODOWN = 'UPTODOWN',
	SIZETOGGLE = 'SIZETOGGLE',
	WIDTHTOGGLE = 'WIDTHTOGGLE',
}

interface NavProps extends NavState {
  animation: AnimationType | string
}

// Animations
const slidedown = css<NavState>`
	left: 0;
	height: ${({ isOpened })=> !isOpened ? 0 : '200px'};
`;

const slideleft = css<NavState>`
	left: ${({ isOpened })=> !isOpened ? '-300px' : 0};
`;

const uptToDown = css<NavState>`
	top: ${({ isOpened })=> !isOpened ? '-300px' : '5.8rem'};
	
	@media (min-width: 768px) {
		top: ${({ isOpened })=> !isOpened ? '-300px' : '5.06rem'};
	}
`;

const SizeToggle = css<NavState>`
	transform: scale(${({ isOpened })=> !isOpened ? 0 : 1});
`;

const WidthToggle = css<NavState>`
	transform: scaleX(${({ isOpened })=> !isOpened ? 0 : 1});
`;

export const Nav = styled.nav<NavProps>`

.dropdown {
	background: #000;
	
	left: 0;
	position: fixed;
	line-height: 2rem;

	padding: ${({ isOpened })=> !isOpened? 0 : '1rem'};;

	list-style: none;
	overflow: hidden;
	
	${({animation})=> {
		switch (animation) {
		case AnimationType.SLIDEDOWN:
			return slidedown;
	
		case AnimationType.SLIDELEFT:
			return slideleft;

		case AnimationType.UPTODOWN:
			return uptToDown;

		case AnimationType.SIZETOGGLE:
			return SizeToggle;

		case AnimationType.WIDTHTOGGLE:
			return WidthToggle;
		}
	}}
	
	transition: all .5s ease-in-out;
}
`;