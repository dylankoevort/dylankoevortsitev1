import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
			<h1 className="w-full text-3xl font-bold text-[#00df9a]">Dylan Koevort</h1>
			<ul className="hidden md:flex">
				<li className="p-4">Home</li>
				<li className="p-4">About</li>
				<li className="p-4">Experience</li>
				<li className="p-4">Portfolio</li>
				<li className="p-4">Contact</li>
			</ul>
			<div className="block md:hidden" onClick={toggleMenuOpen}>
				{isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					isMenuOpen
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-gray-800 ease-in-out duration-500 md:hidden'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Dylan Koevort</h1>
				<ul className="uppercase p-4">
					<li>
						<li className="p-4 border-b border-gray-700">Home</li>
						<li className="p-4 border-b border-gray-700">About</li>
						<li className="p-4 border-b border-gray-700">Experience</li>
						<li className="p-4 border-b border-gray-700">Portfolio</li>
						<li className="p-4">Contact</li>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
