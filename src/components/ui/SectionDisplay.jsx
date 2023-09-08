import { Link } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { BsChatLeftDots } from 'react-icons/bs';

const SectionDisplay = () => {
	const navItems = [
		{
			name: 'Home',
			label: 'Home',
			path: 'home',
			duration: 500,
			width: 'w-24',
			Icon: AiOutlineHome
		},
		{
			name: 'About',
			label: 'About',
			path: 'about',
			duration: 600,
			width: 'w-24',
			Icon: IoPersonOutline
		},
		// {
		// 	name: 'Experience',
		// 	label: 'Experience',
		// 	path: 'experience',
		// 	duration: 700,
		// 	width: 'w-32'
		// },
		{
			name: 'Projects',
			label: 'Projects',
			path: 'projects',
			duration: 800,
			width: 'w-28',
			Icon: HiMiniComputerDesktop
		},
		{
			name: 'Contact',
			label: 'Contact',
			path: 'contact',
			duration: 900,
			width: 'w-28',
			Icon: BsChatLeftDots
		}
	];

	return (
		<div className="hidden lg:flex fixed right-8 h-full z-50 hover:cursor-pointer">
			<ul id="menu" className="h-fit my-auto">
				{navItems.map((item) => (
					<Link
						key={item.path}
						activeClass="text-red-400"
						to={item.path}
						spy={true}
						smooth={true}
						offset={-70}
						duration={item.duration}
						className="my-8 hover:text-red-400 transition-colors block"
					>
						<item.Icon size={24} />
					</Link>
				))}
			</ul>
		</div>
	);
};

export default SectionDisplay;
