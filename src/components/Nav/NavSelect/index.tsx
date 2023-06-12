import * as C from './styles';
import { useRef } from 'react';

import { AnimationType } from '../styles';

type NavSelectProps = {
	animation: AnimationType | string;
	setAnimation: React.Dispatch<React.SetStateAction<AnimationType | string>>
}

const NavSelect: React.FC<NavSelectProps> = ({ animation, setAnimation }) => {
	const selectRef = useRef<HTMLSelectElement>(null);

	const Options = Object.keys(AnimationType).filter((k) => isNaN(Number(k)));

	const handleChange = () => {
		if (selectRef.current) setAnimation(selectRef.current.value);
	};

	return (
		<div style={{
			display: 'grid',
			gap: '0.25rem',
		}}>
			<p>Choose the animation</p>
			<C.NavSelect ref={selectRef} onChange={handleChange}>
				{Options.map((AnimationOpt, index: number) => (
					<option
						key={index}
						defaultValue={animation === AnimationOpt ? AnimationOpt : ''}
						value={AnimationOpt}>{AnimationOpt}
					</option>))}
			</C.NavSelect>
		</div>
	);
};

export default NavSelect;