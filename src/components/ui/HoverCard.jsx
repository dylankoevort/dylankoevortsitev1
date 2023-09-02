const HoverCard = ({ children, className }) => {
	return (
		<div
			className={`h-[300px] w-[300px]
                        border-2 border-light-tertiary rounded-xl 
                        hover:scale-105 transition-all duration-300 ease-in 
                        hover:shadow-[0_0px_80px_0px] hover:shadow-violet-700 hover:border-violet-500 ${className}`}
		>
			{children}
		</div>
	);
};

export default HoverCard;
