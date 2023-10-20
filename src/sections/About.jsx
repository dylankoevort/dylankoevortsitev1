import ScrollingIcons from 'src/components/ui/ScrollingIcons';

const About = () => {
	return (
		<section id="about">
			<div className="max-w-[1540px] mx-auto w-full py-12 px-8 md:px-16 p-4 pb-16">
				<h2 className="text-4xl pb-4 text-light-tertiary font-semibold text-center">About me</h2>
				<div className="h-fit w-full sm:p-8">
					<div className="flex flex-col items-center justify-center gap-4 text-center sm:max-w-[80%] mx-auto">
						<p>
							I am an intermediate-level software developer with proficiency in both front-end and back-end web application development, including
							database management. While I gravitate toward front-end development for its creative and visually logical nature, I am also
							well-versed in back-end work, boasting almost two years of experience in full-stack development.
						</p>
						<p>
							My commitment to programming is evident through my proactive pursuit of new skills, such as self-learning React, and my recent
							exploration of mobile development using React Native and Flutter. I am recognized for my strong work ethic, sense of responsibility,
							and ability to function effectively as both a team player and an independent contributor.
						</p>
					</div>
				</div>
				<br />
				<ScrollingIcons />
			</div>
		</section>
	);
};

export default About;
