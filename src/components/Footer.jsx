import React from 'react';

const Footer = () => {
	return (
		<>
			<div className="sm:hidden flex justify-center items-center">
				<p className="text-red-400 sm:hidden">This website is still under development</p>
			</div>
			<div className="flex justify-between items-center p-4">
				<p>0.8.0 - 23.09.25</p>
				<p className="text-red-400 hidden sm:block">This website is still under development</p>
				<p>© 2023 | Dylan Koevort</p>
			</div>
		</>
	);
};

export default Footer;
