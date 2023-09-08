import { MeGrad } from 'assets';
import ScrollingIcons from 'src/components/ui/ScrollingIcons';

const About = () => {
	return (
		<section id="about">
			<div className="max-w-[1540px] mx-auto w-full py-12 px-8 md:px-16 p-4 pb-16">
				<h2 className="text-xl pb-4 text-light-darkGreyThree font-medium">About</h2>
				<h2 className="text-5xl pb-4 text-light-tertiary font-semibold">Get to know me</h2>
				<div className="h-fit w-full grid grid-cols-1 lg:grid-cols-2 sm:p-8">
					<div className="flex justify-center items-center p-4">
						<img src={MeGrad} alt="" className="h-[90%] md:h-[367px] max-h-[350px] w-auto rounded-3xl border-2 border-white" />
					</div>
					<div className="flex flex-col items-center justify-center gap-4 text-justify">
						<p>
							With 2 years of experience in the industry as a developer, I have cultivated a profound understanding of the ever-evolving
							technology landscape. My journey has been marked by the successful navigation of intricate projects, a testament to my strong
							organisational acumen, unwavering discipline, and reliable work ethic.
						</p>
						<p>
							I take pride in my reputation for effectively managing multiple priorities while upholding a positive attitude. I am always eager to
							acquire new skills and stay abreast of emerging technologies, driven by my unwavering commitment to our team&apos;s success. I
							readily embrace additional responsibilities to ensure our collective achievements.
						</p>
						<p>
							Fueled by a passion for delivering exceptional results and bolstered by a track record of tangible accomplishments, I am confident
							in my ability to make valuable contributions to any team.
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
