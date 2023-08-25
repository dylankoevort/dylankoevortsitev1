import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
	return (
		<section
			id="home"
			className="text-[#e9e9e9] bg-[url(assets/me.jpg)] bg-blend-overlay dark:bg-gray-900 bg-light-greyTwo bg-cover bg-no-repeat bg-center duration-100"
		>
			<div className="max-w-[800px] mt-[-74px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="uppercase md:text-3xl sm:text-2xl text-xl text-light-tertiary font-bold p-2 px-4">Welcome to the world of</p>
				<h1 className="md:text-8xl sm:text-7xl text-6xl font-bold md:py-6 text-light-darkGreyTwo dark:text-dark-secondary">Dylan Koevort</h1>
				<div className="flex justify-center items-center mt-4">
					<p className="md:text-3xl sm:text-2xl text-xl text-light-darkGreyTwo dark:text-dark-secondary">A passionate</p>
					<Typed
						className="md:text-3xl sm:text-2xl text-xl font-bold pl-1 md:pl-2 text-light-tertiary"
						strings={['Web', 'Full-Stack', 'Mobile']}
						typeSpeed={100}
						backSpeed={120}
						loop
					/>
					<p className="md:text-3xl sm:text-2xl text-xl pl-1 text-light-darkGreyTwo dark:text-dark-secondary">Developer</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
