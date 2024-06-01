export default function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
	const isSelected = bigShoeImg === imgURL.bigShoe;
	const handleClick = () => {
		if (!isSelected) {
			changeBigShoeImage(imgURL.bigShoe);
		}
	};
	return (
		<div
			className={`border-2 rounded-xl ${
				isSelected ? "border-coral-red" : "border-transparent"
			} cursor-pointer max-sm:flex-1`}
			onClick={handleClick}
		>
			<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl sm:p-4">
				<img
					src={imgURL.thumbnail}
					alt="shoe collection"
					width={127}
					height={103}
					className="object-contain"
				/>
			</div>
		</div>
	);
}
