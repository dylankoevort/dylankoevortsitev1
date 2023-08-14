import React from 'react';
import { Loqui, LoquiBlack, LoquiMobile, LoquiTablet } from 'assets';

const Projects = () => {
	return (
		<div id="projects" className="dark:border-b-2 dark:border-b-white bg-light-whiteOne dark:bg-dark-primary duration-500 h-full">
			<div className="max-w-[1540px] mx-auto h-full w-full pt-12 px-8 md:px-16 pb-16 border-b-2 border-light-secondary dark:border-none">
				<h2 className="text-xl pb-4 text-light-darkGreyThree font-medium">2. Projects</h2>
				<h2 className="text-5xl pb-12 text-light-tertiary font-semibold">What I've worked on</h2>
				<div className="mx-auto flex h-full min-w-[250px] items-center justify-center rounded-3xl">
					<div className="sm:h-[500px] lg:h-full min-h-[450px] lg:min-h-[900px] w-[1540px] relative sm:grid sm:grid-cols-2 sm:gap-4 lg:block p-4 sm:p-8 md:p-0">
						<div className="mx-auto my-auto lg:absolute lg:bottom-40 xl:bottom-20 lg:left-0 w-fit lg:max-w-[50%] h-fit bg-light-darkGreyTwo dark:bg-dark-darkGreyOne text-white z-10 p-4 sm:p-8 rounded-[30px] md:rounded-[50px] shadow-sm shadow-neutral-800">
							<h2 className="text-2xl font-medium pb-4">Loqui</h2>
							<p className="px-2 py-4">A simple React-based chat application that utilises Firebase Cloud Firestore and Google authentication.</p>
							<p className="px-2 py-4">React. Firebase. Redux. Styled Components.</p>
							<a
								href="https://loqui.co.za"
								target="_blank"
								className="px-2 py-4 font-medium text-2xl text-light-tertiary dark:text-dark-tertiary"
							>
								loqui.co.za
							</a>
							<p className="px-2 py-4 text-red-400">*Current project, work in progress</p>
						</div>

						<div className="">
							<img
								src={LoquiMobile}
								alt=""
								className="hidden sm:block mx-auto my-auto max-h-[500px] w-auto lg:hidden z-10 rounded-[40px] object-contain"
							/>
						</div>
						<div className="hidden lg:block absolute top-0 right-0 pl-20 h-fit w-fit">
							<img src={LoquiTablet} alt="" className=" rounded-xl object-contain" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
