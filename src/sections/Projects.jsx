import { LoquiMobile, LoquiDesktop } from 'assets';

const Projects = () => {
	return (
		<section id="projects">
			<div className="max-w-[1540px] mx-auto h-full w-full pt-12 px-8 md:px-16 pb-16">
				<h2 className="text-xl pb-4 text-light-darkGreyThree font-medium place-self-end text-right">Projects</h2>
				<h2 className="text-5xl pb-12 text-light-tertiary font-semibold text-right">What I&apos;ve worked on</h2>
				<div className="mx-auto flex min-w-[250px] items-center justify-center rounded-3xl">
					<div className="sm:h-[500px] lg:h-full min-h-[450px] lg:min-h-[850px] w-[1540px] relative sm:grid sm:grid-cols-2 sm:gap-4 lg:block p-4 sm:p-8 md:p-0">
						<div className="mx-auto my-auto lg:absolute lg:bottom-0 lg:left-0 w-fit lg:max-w-[50%] dark:bg-light-whiteOne bg-dark-primary dark:text-light-secondary text-dark-secondary dark:border dark:border-dark-primary z-10 p-4 sm:p-8 rounded-[20px] shadow-sm shadow-neutral-800">
							<h2 className="text-2xl font-medium pb-4">Loqui Chat</h2>
							<p className="px-2 py-4">
								A simple chat application that utilises Firebase Cloud Firestore and Anonymous Authentication to enable real-time communication
								between users.
							</p>
							<p className="px-2 py-4">React. Firebase. Redux. Styled Components.</p>
							<a href="https://loquichat.com" target="_blank" rel="noreferrer" className="px-2 py-4 font-medium text-2xl text-light-tertiary">
								loquichat.com
							</a>
						</div>

						<div className="">
							<img
								src={LoquiMobile}
								alt=""
								className="hidden sm:block mx-auto my-auto max-h-[500px] w-auto lg:hidden z-10 rounded-[10px] object-contain border-4 border-blue-300"
							/>
						</div>
						<div className="hidden lg:block absolute top-0 right-0 pl-20 h-fit w-fit">
							<img src={LoquiDesktop} alt="" className=" rounded-xl object-contain" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
