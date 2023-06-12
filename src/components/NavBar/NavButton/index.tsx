import * as C from './styles';
import { ReactNode} from 'react';

type NavButtonProps = {
	isOpened: boolean,
	name: ReactNode,
	onclick: () => void,
}

const NavButton: React.FC<NavButtonProps> = ({
	isOpened,
	name,
	onclick }) => {
	return (
		<C.NavButton isOpened={isOpened} onClick={onclick}>
			{name}
		</C.NavButton>
	);
};

export default NavButton;