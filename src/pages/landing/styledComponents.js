import { styled } from 'styled-components';

const StyledLandingPage = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		height: 300px;
		width: 600px;
		margin-left: 10px;
		margin-right: 10px;
		border: 1px solid white;
		border-radius: 20px;
		background-color: #1a1a1a;

		.title {
			height: 130px;
			width: 500px;

			text-align: center;
			color: white;
			border-bottom: 1px solid white;

			h2 {
				margin: 10px auto;
				font-weight: 400;
				font-size: 60px;
			}
		}

		.icon-container {
			margin-top: 25px;
			height: 100px;
			width: 300px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.icon {
				color: white;
				height: 60px;
				width: auto;

				&:hover {
					cursor: pointer;
					transform: scale(1.2);
				}
			}
		}
	}
`;

export { StyledLandingPage };
