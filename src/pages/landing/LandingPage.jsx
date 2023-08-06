import React from 'react';
import { StyledLandingPage } from './styledComponents';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const LandingPage = () => {
	return (
		<StyledLandingPage>
			<div className="container">
				<div className="title">
					<h2>Dylan Koevort</h2>
				</div>
				<div className="icon-container">
					<LinkedInIcon className="icon" onClick={() => window.open('https://www.linkedin.com/in/dylankoevort/')} />
					<GitHubIcon className="icon" onClick={() => window.open('https://github.com/dylankoevort')} />
					<InstagramIcon className="icon" onClick={() => window.open('https://www.instagram.com/dylankoevort/')} />
				</div>
			</div>
		</StyledLandingPage>
	);
};

export default LandingPage;
