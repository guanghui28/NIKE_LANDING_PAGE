export default function Button({
	label,
	iconURL,
	backgroundColor,
	borderColor,
	textColor,
	fullWidth,
}) {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none rounded-full transition-all duration-300 hover:tracking-wider ${
				backgroundColor
					? `${backgroundColor} ${borderColor} ${textColor}`
					: "bg-coral-red text-white border-coral-red"
			}
			${fullWidth && "w-full"}
			`}
		>
			{label}{" "}
			{iconURL && (
				<img
					src={iconURL}
					alt="arrow right icon"
					className="ml-2 rounded-full w-5 h-5"
				/>
			)}
		</button>
	);
}
