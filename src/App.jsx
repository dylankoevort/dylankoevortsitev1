import { Navbar, Footer } from 'components';
import { useEffect } from 'react';
import { Hero, About, Projects, Contact } from 'sections';

const App = () => {
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
