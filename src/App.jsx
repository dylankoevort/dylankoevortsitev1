import { Navbar, Footer } from 'components';
import { useEffect } from 'react';
import { Hero, About, Projects, Contact } from 'sections';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';

const App = () => {
	useEffect(() => {
		logEvent(analytics, 'page_view');
	});
	return (
		<div className="text-light-secondary dark:text-dark-secondary ease-in-out duration-500">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
