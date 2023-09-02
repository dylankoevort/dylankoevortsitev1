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
			label: 'Home',
			path: 'home',
			duration: 500,
			width: 'w-24'
		},
		{
			name: 'About',
			label: 'About',
			path: 'about',
			duration: 600,
			width: 'w-24'
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
			width: 'w-28'
		},
		{
			name: 'Contact',
			label: 'Contact',
			path: 'contact',
			duration: 900,
			width: 'w-28'
		}
	];

	return (
		<>
			<nav
				className="top-0 sticky z-50 flex justify-end md:justify-center items-center h-20 max-w-[1240px] md:max-w-full mx-auto px-4
	 dark:text-dark-secondary text-light-secondary 
	 md:bg-slate-50 md:dark:bg-slate-900 md:border-gray-200 dark:md:border-slate-800 md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-30 dark:md:bg-opacity-20 md:border-b firefox:bg-opacity-90
	 "
			>
				<ul className="hidden md:flex w-fit">
					{navItems.map((item) => (
						<Link
							key={item.path}
							activeClass="active"
							to={item.path}
							spy={true}
							smooth={true}
							offset={-70}
							duration={item.duration}
							className={`p-4 hover:cursor-pointer ${item.width} flex items-center hover:text-red-400`}
						>
							{item.label}
						</Link>
					))}
				</ul>
				<div className="hidden md:flex hover:cursor-pointer py-4 pl-1 pr-3 w-16 items-center justify-end" onClick={toggleDarkMode}>
					{isDarkMode ? <CiLight size={30} /> : <CiDark size={30} />}
				</div>
				<div className="block md:hidden" onClick={toggleMenuOpen}>
					{isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
				</div>
			</nav>
			<nav
				className={
					isMenuOpen
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-light-secondary bg-slate-100 dark:border-r-gray-500 dark:bg-gray-900 ease-in-out duration-300 md:hidden z-50'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className="w-full text-3xl font-bold text-light-tertiary dark:text-dark-tertiary pt-2 pr-4 m-4">Dylan</h1>
				<ul className="uppercase p-4">
					{navItems.map((item) => (
						<Link
							key={item.path}
							activeClass="active"
							to={item.path}
							spy={true}
							smooth={true}
							offset={-70}
							duration={item.duration}
							onClick={toggleMenuOpen}
							className="p-4 border-b border-gray-700 hover:text-red-400 transition-colors block"
						>
							{item.label}
						</Link>
					))}
				</ul>
				<div className="mx-auto hover:cursor-pointer p-4 w-16" onClick={toggleDarkMode}>
					{isDarkMode ? <CiLight size={30} /> : <CiDark size={30} />}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
