import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="sm:hidden flex justify-center items-center">
				<p className="text-red-400 sm:hidden">This website is still under development</p>
			</div>
			<div className="flex justify-between items-center p-4">
				<p>0.10.0 - 07.09.23</p>
				<p className="text-red-400 hidden sm:block">This website is still under development</p>
				<p>© 2023 | Dylan Koevort</p>
			</div>
		</footer>
	);
};

export default Footer;
