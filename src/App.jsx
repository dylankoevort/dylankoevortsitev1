import { Navbar, Footer } from 'components';
import { useEffect } from 'react';
import { Hero, About, Projects, Contact } from 'sections';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';
import SectionDisplay from './components/ui/SectionDisplay';
import TempPage from './sections/TempPage';

const App = () => {
	useEffect(() => {
		logEvent(analytics, 'page_view');
	});
	return (
		<div className="text-light-secondary dark:text-dark-greyOne bg-light-whiteOne dark:bg-dark-primary ease-in-out duration-300">
			<Navbar />
			<SectionDisplay />
			<Hero />
			<div className="dark:bg-[#1c1c1c]">
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
		// <>
		// 	<TempPage />
		// </>
	);
};

export default App;
