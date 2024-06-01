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
			<div className="flex justify-center items-center bg-card bg-center bg-cover w-30 h-30 sm:w-40 sm:h-40 rounded-xl p-4 md:p-6">
				<img
					src={imgURL.thumbnail}
					alt="shoe collection"
					className="object-contain w-[100px] h-[81px] sm:w-[127px] sm:h-[103px]"
				/>
			</div>
		</div>
	);
}
