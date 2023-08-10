import React from 'react';
import { CSharp, Css, Git, Html, Java, JavaScript, jQuery, Npm, ReactIcon, Sql, TailwindIcon, vsCode, VS } from 'assets';

const About = () => {
	const iconsLanguages = [
		{
			image: CSharp,
			label: 'C Sharp'
		},
		{
			image: Css,
			label: 'CSS'
		},
		{
			image: Html,
			label: 'HTML'
		},
		{
			image: Java,
			label: 'Java'
		},
		{
			image: JavaScript,
			label: 'JavaScript'
		},
		{
			image: jQuery,
			label: 'jQuery'
		},
		{
			image: ReactIcon,
			label: 'React'
		},
		{
			image: Sql,
			label: 'SQL'
		}
	];

	const iconsTools = [
		{
			image: Git,
			label: 'Git'
		},
		{
			image: Npm,
			label: 'NPM'
		},
		{
			image: TailwindIcon,
			label: 'Tailwind CSS'
		},
		{
			image: vsCode,
			label: 'VS Code'
		},
		{
			image: VS,
			label: 'Visual Studio'
		}
	];

	return (
		<section id="about" className="border-b-2 border-b-white bg-[#050815]">
			<div className="max-w-[1240px] mx-auto w-full py-12 px-8 md:px-16 p-4 pb-16">
				<h2 className="text-5xl pb-4 text-[#c1c2c9] font-bold">About Me</h2>
				<div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 ">
					<div className="p-1 lg:p-8 sm:p-4">
						<h2 className="text-white text-md sm:text-xl pb-8 ">The languages I've spoken</h2>
						<div className="grid grid-cols-4 gap-x-4 gap-y-8 sm:gap-y-16 sm:gap-x-8 text-white text-sm">
							{iconsLanguages.map((icon) => (
								<div
									key={icon.label}
									className="flex align-center flex-col text-center h-[60px] w-[60px] lg:h-[90px] lg:w-[90px] md:h-[60px] md:w-[60px] sm:h-[90px] sm:w-[90px] mx-auto hover:scale-110 transition-transform"
								>
									<img src={icon.image} alt={icon.label} />
									<p className="text-md lg:text-xl">{icon.label}</p>
								</div>
							))}
						</div>
					</div>
					<div className="p-1 lg:p-8 sm:p-4">
						<h2 className="text-white text-md sm:text-xl pb-8">The tools I've used</h2>
						<div className="grid grid-cols-4 gap-x-4 gap-y-8 sm:gap-y-16 sm:gap-x-8 text-white text-sm">
							{iconsTools.map((icon) => (
								<div
									key={icon.label}
									className="flex align-center flex-col text-center h-[60px] w-[60px] lg:h-[90px] lg:w-[90px] md:h-[60px] md:w-[60px] sm:h-[90px] sm:w-[90px] mx-auto hover:scale-110 transition-transform"
								>
									<img src={icon.image} alt={icon.label} />
									<p className="text-md lg:text-xl">{icon.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex justify-end align-center text-sm font-medium text-[#474747]">
					<a href="https://iconscout.com/contributors/tomsdesign" target="_blank">
						Icons by Toms Design
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
