import * as C from './styles';
import { AnimationType } from './styles';

import { useState } from 'react';

import { Container } from './Container';
import NavButton from './NavButton';
import { IconContext } from 'react-icons';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import NavSelect from './NavSelect';

const Nav: React.FC = () => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [animation, setAnimation] = useState<AnimationType | string>(AnimationType.SLIDEDOWN);

	
	return (
		<Container>
			<C.Nav isOpened={isOpened} animation={animation}>				
				<NavButton isOpened={isOpened} name={
					<>
						<IconContext.Provider value={{ className: 'hamburger-icon' }}>
							<RxHamburgerMenu />
						</IconContext.Provider>
						<IconContext.Provider value={{ className: 'close-icon' }}>
							<AiOutlineClose />
						</IconContext.Provider>
					</>
				} onclick={() => setIsOpened(!isOpened)} />
				<h2>{animation}</h2>
				<ul className='dropdown'>
					<li className='dropdown__item'>lorem</li>
					<li className='dropdown__item'>ipsum</li>
					<li className='dropdown__item'>dolor</li>
					<li className='dropdown__item'>sit</li>
					<li className='dropdown__item'>amet</li>
				</ul>
			</C.Nav>
			<NavSelect animation={animation} setAnimation={ setAnimation } />
		</Container>
	);
};

export default Nav;