import { LoquiDesktop, SimonsGolfDesktop } from 'assets';

const Projects = () => {
	const projects = [
		{
			title: 'Loqui Chat',
			description:
				'A simple chat application that utilises Firebase Cloud Firestore and Anonymous Authentication to enable real-time communication between users.',
			stack: 'React. Firebase. Redux. Styled Components.',
			url: 'https://loquichat.com',
			actionLabel: 'loquichat.com',
			image: LoquiDesktop
		},
		{
			title: "Simon's Town Country Club",
			description: "A remake and slight modern improvement of a country club's website.",
			stack: 'Next.js. Tailwind CSS.',
			url: 'https://simonstowncountryclub.vercel.app/',
			actionLabel: 'Live Demo',
			image: SimonsGolfDesktop
		}
	];

	return (
		<section id="projects" className="bg-slate-100 dark:bg-[#232323]">
			<div className="max-w-[1540px] mx-auto h-full w-full pt-12 px-8 md:px-16 pb-16">
				<h2 className="text-xl pb-4 text-light-darkGreyThree font-medium place-self-end text-right">Projects</h2>
				<h2 className="text-4xl pb-12 text-light-tertiary font-semibold text-right">WHAT I HAVE WORKED ON</h2>

				<div className="flex flex-col w-full">
					{projects.map((project, index) => (
						<div key={index}>
							<div className="flex flex-col mx-auto w-full p-8 my-4 rounded-xl bg-white dark:bg-[#1c1c1c]">
								<div className="text-center">
									<h3 className="text-2xl p-1">{project.title}</h3>
									<p className="p-1">{project.description}</p>
									<p className="p-1">{project.stack}</p>
									<a href={project.url} target="_blank" rel="noreferrer" className="p-1 font-medium text-2xl text-light-tertiary">
										{project.actionLabel}
									</a>
								</div>
								<div className="flex justify-center mt-4 sm:mt-8">
									<img src={project.image} alt={project.title} className=" rounded lg:rounded-lg" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
