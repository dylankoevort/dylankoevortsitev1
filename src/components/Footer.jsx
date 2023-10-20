const Footer = () => {
	return (
		<footer>
			<div className="sm:hidden flex justify-center items-center">
				<p className="text-red-400 sm:hidden">This website is still under development</p>
			</div>
			<div className="flex justify-between items-center p-4">
				<p>0.13.0 - 20.10.23</p>
				<p>© 2023 | Dylan Koevort</p>
			</div>
		</footer>
	);
};

export default Footer;
