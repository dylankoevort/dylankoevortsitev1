import React from 'react';
import { CSharp, Css, Git, Html, Java, JavaScript, jQuery, Npm, ReactIcon, Sql, TailwindIcon, vsCode, VS, MeGrad } from 'assets';
import HoverCard from 'src/components/ui/hoverCard';

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
		<section id="about" className="sectionClass">
			<div className="max-w-[1540px] mx-auto w-full py-12 px-8 md:px-16 p-4 pb-16">
				<h2 className="text-xl pb-4 text-light-darkGreyThree font-medium ">About</h2>
				<h2 className="text-5xl pb-4 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-blue-500 via-violet-800 to-white">
					Get to know me
				</h2>
				{/* <div className="h-[500px] flex items-center justify-center gap-16">
					<img src={MeGrad} alt="" className="h-[350px] w-[380px] rounded-xl border-2 border-white" />
					<HoverCard className="flex items-center justify-center"></HoverCard>
					<HoverCard />
					<HoverCard />
				</div> */}
				<div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 ">
					<div className="p-1 lg:p-8 sm:p-4 pb-8">
						<h2 className="text-md sm:text-xl pb-8">The languages I've spoken</h2>
						<div className="grid grid-cols-4 gap-x-4 gap-y-8 sm:gap-y-16 sm:gap-x-8">
							{iconsLanguages.map((icon) => (
								<div
									key={icon.label}
									className="flex align-center flex-col text-center h-[60px] w-[60px] lg:h-[70px] lg:w-[70px] md:h-[60px] md:w-[60px] sm:h-[70px] sm:w-[70px] mx-auto hover:scale-110 transition-transform"
								>
									<img src={icon.image} alt={icon.label} />
									<p className="text-md">{icon.label}</p>
								</div>
							))}
						</div>
					</div>
					<div className="p-1 lg:p-8 sm:p-4">
						<h2 className="text-md sm:text-xl pb-8">The tools I've used</h2>
						<div className="grid grid-cols-4 gap-x-4 gap-y-8 sm:gap-y-16 sm:gap-x-8">
							{iconsTools.map((icon) => (
								<div
									key={icon.label}
									className="flex align-center flex-col text-center h-[60px] w-[60px] lg:h-[70px] lg:w-[70px] md:h-[60px] md:w-[60px] sm:h-[70px] sm:w-[70px] mx-auto hover:scale-110 transition-transform"
								>
									<img src={icon.image} alt={icon.label} />
									<p className="text-md">{icon.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
