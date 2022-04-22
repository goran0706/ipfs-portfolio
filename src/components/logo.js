import { FaCode } from 'react-icons/fa';
import { Link } from './';

export default function Logo({ path, children, ...rest }) {
	return (
		<Link path={path} className='logo'>
			<span className='stylish'>G</span>
			<FaCode />
			<span className='stylish'>Gavrovski;</span>
		</Link>
	);
}
