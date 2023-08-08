import React from 'react';
import Typed from 'react-typed';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

const Hero = () => {
	return (
		<div className="text-[#e9e9e9]">
			{/* mt-[-90px] */}
			<div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="uppercase md:text-3xl sm:text-2xl text-xl text-[#405DE6] font-bold p-2 px-4">Welcome to the world of</p>
				<h1 className="md:text-8xl sm:text-7xl text-6xl font-bold md:py-6">Dylan Koevort</h1>
				<div className="flex justify-center items-center mt-4">
					<p className="md:text-3xl sm:text-2xl text-xl">A passionate</p>
					<Typed
						className="md:text-3xl sm:text-2xl text-xl font-bold pl-1 md:pl-2 text-[#405DE6]"
						strings={['Web', 'Full-Stack', 'Mobile']}
						typeSpeed={100}
						backSpeed={120}
						loop
					/>
					<p className="md:text-3xl sm:text-2xl text-xl pl-1">Developer</p>
				</div>
				<p className="md:text-2xl sm:text-md text-sm font-bold text-red-500 mt-20 px-5">/* this website is still under construction */</p>
				<div></div>
				<p className="md:text-3xl sm:text-xl text-xl mt-20 px-5">
					In the meantime, <span className="font-bold text-[#405DE6]">connect</span> with me elsewhere
				</p>
				<div className="md:w-[420px] w-[360px] flex justify-between items-center mx-auto mt-5 px-10">
					<a href="https://www.linkedin.com/in/dylankoevort/" target="_blank" rel="noreferrer">
						<AiOutlineLinkedin size={75} className="md:scale-100 scale-75 hover:scale-125" />
						<p className="mt-1 font-bold text-[#405DE6]">LinkedIn</p>
					</a>
					<a href="https://github.com/dylankoevort" target="_blank" rel="noreferrer">
						<AiOutlineGithub size={75} className="md:scale-100 scale-75 hover:scale-125" />
						<p className="mt-1 font-bold text-[#405DE6]">GitHub</p>
					</a>
					<a href="https://www.instagram.com/dylankoevort/" target="_blank" rel="noreferrer">
						<AiOutlineInstagram size={75} className="md:scale-100 scale-75 hover:scale-125" />
						<p className="mt-1 font-bold text-[#405DE6]">Instagram</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
