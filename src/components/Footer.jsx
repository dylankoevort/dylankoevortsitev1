import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-[#1a1a1a]">
			<div className="sm:hidden flex justify-center items-center">
				<p className="text-red-400 sm:hidden">This website is still under development</p>
			</div>
			<div className="flex justify-between items-center p-4">
				<p>0.9.0 - 01.09.25</p>
				<p className="text-red-400 hidden sm:block">This website is still under development</p>
				<p>© 2023 | Dylan Koevort</p>
			</div>
		</footer>
	);
};

export default Footer;
