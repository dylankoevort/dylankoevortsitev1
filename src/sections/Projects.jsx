import React from 'react';
import { Loqui } from 'assets';

const Projects = () => {
	return (
		<div id="projects" className="dark:border-b-2 dark:border-b-white bg-light-whiteOne dark:bg-dark-primary duration-500">
			<div className="max-w-[1240px] mx-auto w-full py-12 px-8 md:px-16 p-4 pb-16 border-b-2 border-light-secondary dark:border-none">
				<h2 className="text-xl pb-4 text-light-darkGreyThree font-medium">2. Projects</h2>
				<h2 className="text-5xl pb-12 text-light-tertiary font-semibold">What I've worked on</h2>
				<div className="mx-auto flex h-full min-w-[250px] w-[30%] items-center justify-center rounded-3xl">
					<div className="h-96 w-full rounded-3xl bg-gradient-to-br from-blue-700 to-slate-900 p-2 hover:scale-110 transition-transform border-2 border-dark-primary dark:border-white">
						<div className="h-full w-full rounded-3xl flex flex-col p-4 text-center text-white">
							<h2 className="text-2xl  font-medium pb-4">Loqui</h2>
							<img src={Loqui} alt="" className="w-[50%] mx-auto rounded-lg" />
							<p className="px-2 py-4">A React-based chat application that utilises Firebase Cloud Firestore and Google authentication.</p>
							<a href="https://loqui.co.za" target="_blank" className="pt-4 font-medium text-2xl text-light-tertiary dark:text-dark-tertiary">
								loqui.co.za
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
