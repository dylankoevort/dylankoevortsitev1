import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
			<h1 className="w-full text-3xl font-bold text-[#405DE6]">Dylan</h1>
			<ul className="hidden md:flex">
				<li className="p-4 hover:cursor-pointer">
					<Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={100}>
						Home
					</Link>
				</li>
				{/* <li className="p-4 hover:cursor-pointer">
					<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={200}>
						About
					</Link>
				</li>
				<li className="p-4 hover:cursor-pointer">
					<Link activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={300}>
						Experience
					</Link>
				</li>
				<li className="p-4 hover:cursor-pointer">
					<Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={400}>
						Portfolio
					</Link>
				</li> */}
				<li className="p-4 hover:cursor-pointer">
					<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			<div className="block md:hidden" onClick={toggleMenuOpen}>
				{isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					isMenuOpen
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-gray-900 ease-in-out duration-500 md:hidden'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className="w-full text-3xl font-bold text-[#405DE6] pt-2 pr-4 m-4">Dylan</h1>
				<ul className="uppercase p-4">
					<li>
						<li className="p-4 border-b border-gray-700">
							<Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
								Home
							</Link>
						</li>
						{/* <li className="p-4 border-b border-gray-700">About</li>
						<li className="p-4 border-b border-gray-700">Experience</li>
						<li className="p-4 border-b border-gray-700">Portfolio</li> */}
						<li className="p-4">
							<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
								Contact
							</Link>
						</li>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
