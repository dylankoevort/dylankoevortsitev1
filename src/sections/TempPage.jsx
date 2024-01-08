import React from 'react';
import Typed from 'react-typed';
import { HiExternalLink } from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { CV } from '../assets';

const TempPage = () => {
	const resumeLink = (
		<a
			href={CV}
			target="_blank"
			rel="noopener noreferrer"
			className="w-[150px] flex justify-center items-center gap-1 border-2 rounded-xl px-2 py-1 hover:cursor-pointer text-slate-300 hover:bg-slate-300 hover:text-black ease-in-out duration-300 transition-all"
		>
			Resume
			<HiExternalLink />
		</a>
	);

	const linkedinLink = (
		<a href="https://www.linkedin.com/in/dylankoevort/" target="_blank" rel="noreferrer" aria-label="linkedin.com/in/dylankoevort">
			<div className="flex justify-center flex-col p-3 sm:px-8 sm:py-4 gap-1 sm:gap-2 text-slate-300 hover:cursor-pointer hover:shadow-md rounded-xl">
				<AiOutlineLinkedin size={40} className="mx-auto" />
				<p className="text-center">LinkedIn</p>
			</div>
		</a>
	);

	const githubLink = (
		<a href="https://github.com/dylankoevort" target="_blank" rel="noreferrer" aria-label="github.com/dylankoevort">
			<div className="flex justify-center flex-col p-3 sm:px-8 sm:py-4 gap-1 sm:gap-2 text-slate-300 hover:cursor-pointer hover:shadow-md rounded-xl">
				<AiOutlineGithub size={40} className="mx-auto" />
				<p className="text-center">GitHub</p>
			</div>
		</a>
	);

	return (
		<div
			className="w-full h-screen mx-auto text-center flex flex-col justify-center 
                            bg-[url(assets/me.jpg)] bg-blend-overlay bg-gray-900 bg-cover bg-no-repeat bg-center duration-100"
		>
			<p className="md:text-3xl sm:text-2xl text-xl text-light-tertiary font-medium p-2 px-4">Hellooooo, I'm</p>
			<h1 className="md:text-8xl sm:text-7xl text-6xl font-bold md:py-6 text-slate-200">Dylan Koevort</h1>
			<div className="flex justify-center items-center mt-4">
				<p className="md:text-3xl sm:text-2xl text-xl text-slate-300">A passionate</p>
				<Typed
					className="md:text-3xl sm:text-2xl text-xl font-bold pl-1 md:pl-2 text-light-tertiary"
					strings={['Web', 'Full-Stack', 'Mobile']}
					typeSpeed={60}
					backSpeed={60}
					backDelay={2000}
					loop
				/>
				<p className="md:text-3xl sm:text-2xl text-xl pl-1 text-slate-300">Developer</p>
			</div>
			<p className="mt-8 md:text-lg sm:text-base text-sm text-slate-300 p-2 px-4">
				Currently, I'm putting the finishing touches on this portfolio to showcase my work.
				<br />
				In the mean time, view my resume or connect with me on other platforms!
			</p>

			<div className="md:hidden flex flex-col justify-center items-center gap-4 mt-4 ">
				{resumeLink}
				<div className="flex justify-center items-center">
					{linkedinLink}
					{githubLink}
				</div>
			</div>
			<div className="hidden md:flex justify-center items-center gap-8 mt-4">
				{linkedinLink}
				{resumeLink}
				{githubLink}
			</div>
		</div>
	);
};

export default TempPage;
