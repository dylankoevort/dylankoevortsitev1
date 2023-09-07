import React from 'react';
import { SiHtml5, SiJavascript, SiTypescript, SiReact, SiCss3, SiCsharp, SiTailwindcss } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';

const ScrollingIcons = () => {
	const logos = [
		{ name: 'HTML', Icon: SiHtml5 },
		{ name: 'CSS', Icon: SiCss3 },
		{ name: 'Tailwind CSS', Icon: SiTailwindcss },
		{ name: 'JavaScript', Icon: SiJavascript },
		{ name: 'React & Native', Icon: SiReact },
		{ name: 'TypeScript', Icon: SiTypescript },
		{ name: 'Java', Icon: FaJava },
		{ name: 'C#', Icon: SiCsharp },
		{ name: 'SQL', Icon: TbSql }
	];

	return (
		<div className="h-fit w-full flex justify-center items-center flex-wrap gap-6">
			{logos.map((logo, index) => (
				<div
					key={index}
					className="flex justify-center flex-col sm:min-h-[132px] p-3 sm:px-8 sm:py-4 gap-1 sm:gap-2 text-slate-800 dark:text-slate-300 border-light-tertiary border-2 rounded-2xl
                            hover:scale-105 transition-all duration-300 ease-in 
                            hover:shadow-[0_0px_80px_0px] hover:shadow-violet-700 hover:border-violet-500"
				>
					<logo.Icon size={40} className="mx-auto" />
					<p className="text-center">{logo.name}</p>
				</div>
			))}
		</div>
	);
};

export default ScrollingIcons;
