import { Navbar, Footer } from 'components';
import { useEffect } from 'react';
import { Hero, About, Projects, Contact } from 'sections';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';
import SectionDisplay from './components/ui/SectionDisplay';
import ScrollingIcons from './components/ui/ScrollingIcons';

const App = () => {
	useEffect(() => {
		logEvent(analytics, 'page_view');
	});
	return (
		<div className="text-light-secondary dark:text-dark-secondary bg-light-whiteOne dark:bg-dark-primary ease-in-out duration-300">
			<Navbar />
			<SectionDisplay />
			<Hero />
			<div className="bg-gradient-to-br dark:from-[#050815] dark:to-[#161f41]">
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default App;
