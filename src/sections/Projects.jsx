import React from 'react';
import { Loqui } from 'assets';

const Projects = () => {
	return (
		<div id="projects" className="border-b-2 border-b-white bg-[#020202]">
			<div className="max-w-[1240px] mx-auto w-full py-12 px-8 md:px-16 p-4 pb-16">
				<h2 className="text-5xl pb-8 text-[#c1c2c9] font-bold">Projects</h2>
				<div className="mx-auto flex h-full min-w-[250px] w-[30%] items-center justify-center rounded-3xl">
					<div className="h-96 w-full rounded-3xl bg-gradient-to-br from-violet-900 to-blue-900 p-2 hover:scale-110 transition-transform border-2 border-white">
						<div className="h-full w-full rounded-3xl flex flex-col p-4 text-white text-center">
							<h2 className="text-2xl  font-medium pb-4">Loqui</h2>
							<img src={Loqui} alt="" className="w-[50%] mx-auto rounded-lg" />
							<p className="px-2 py-4">A React-based chat application that utilises Firebase Cloud Firestore and Google authentication.</p>
							<a href="https://loqui.co.za" target="_blank" className="pt-4 font-medium text-2xl hover:text-[#405DE6]">
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
