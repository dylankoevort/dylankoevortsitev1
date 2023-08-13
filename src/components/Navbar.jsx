import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CiDark, CiLight } from 'react-icons/ci';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(localStorage.theme === 'dark');

	const toggleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		localStorage.theme = localStorage.theme == 'light' || localStorage.theme == '' ? 'dark' : 'light';

		if (localStorage.theme === 'dark') {
			document.getElementsByTagName('html')[0].classList.add('dark');
		} else {
			document.getElementsByTagName('html')[0].classList.remove('dark');
		}
	};

	const navItems = [
		{
			name: 'Home',
			label: '0. Home',
			path: 'home',
			duration: 500,
			width: 'w-24'
		},
		{
			name: 'About',
			label: '1. About',
			path: 'about',
			duration: 600,
			width: 'w-24'
		},
		// {
		// 	name: 'Experience',
		// 	label: '2. Experience',
		// 	path: 'experience',
		// 	duration: 700,
		// 	width: 'w-32'
		// },
		{
			name: 'Projects',
			label: '2. Projects',
			path: 'projects',
			duration: 800,
			width: 'w-28'
		},
		{
			name: 'Contact',
			label: '3. Contact',
			path: 'contact',
			duration: 900,
			width: 'w-28'
		}
	];

	return (
		<div
			className="flex justify-end md:justify-center items-center h-20 max-w-[1240px] md:max-w-full mx-auto px-4
		 dark:text-dark-secondary text-light-secondary sticky top-0 bg-gradient-to-b from-slate-50 via-slate-50 to-transparent
		  dark:from-slate-900 dark:via-slate-900 dark:to-transparent z-50"
		>
			<ul className="hidden md:flex w-fit sticky top-0">
				{navItems.map((item) => (
					<li
						key={item.path}
						className={`p-4 pr-3 hover:cursor-pointer ${item.width} flex items-center hover:text-red-400 hover:scale-110 transition-transform font-medium`}
					>
						<Link activeClass="active" to={item.path} spy={true} smooth={true} offset={-70} duration={item.duration}>
							{item.label}
						</Link>
					</li>
				))}
				<li>
					<div className="hidden sm:flex hover:cursor-pointer py-4 pl-1 pr-3 w-16 items-center justify-end" onClick={toggleDarkMode}>
						{isDarkMode ? <CiLight size={30} /> : <CiDark size={30} />}
					</div>
				</li>
			</ul>
			<div className="block md:hidden" onClick={toggleMenuOpen}>
				{isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					isMenuOpen
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-light-secondary bg-light-greyThree dark:border-r-gray-500 dark:bg-gray-900 ease-in-out duration-500 md:hidden'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className="w-full text-3xl font-bold text-light-tertiary dark:text-dark-tertiary pt-2 pr-4 m-4">Dylan</h1>
				<ul className="uppercase p-4">
					{navItems.map((item) => (
						<li key={item.path} className="p-4 border-b border-gray-700">
							<Link
								activeClass="active"
								to={item.path}
								spy={true}
								smooth={true}
								offset={-70}
								duration={item.duration}
								onClick={toggleMenuOpen}
								className="hover:text-red-400 transition-colors"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="mx-auto hover:cursor-pointer p-4 w-16" onClick={toggleDarkMode}>
					{isDarkMode ? <CiLight size={30} /> : <CiDark size={30} />}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
