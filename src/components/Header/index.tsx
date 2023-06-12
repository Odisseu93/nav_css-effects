import * as C from './styles';
import { ReactNode } from 'react';

const Header: React.FC<{ children: ReactNode }> = (
	{ children }) => (<C.Header>{children}</C.Header>);

export default Header;