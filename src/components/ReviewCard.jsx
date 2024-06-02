import { star } from "../assets/icons";

export default function ReviewCard({ imgURL, customerName, rating, feedback }) {
	return (
		<div className="flex flex-1 flex-col items-center">
			<img
				src={imgURL}
				alt={customerName}
				className="w-[100px] aspect-square rounded-full"
			/>
			<p className="font-montserrat text-slate-gray text-xl leading-normal mt-4 text-center md:max-w-md">
				{feedback}
			</p>
			<div className="mt-3 flex items-center gap-2.5">
				<img
					src={star}
					alt="star"
					className="w-[24px] aspect-square object-contain"
				/>
				<p className="font-montserrat text-slate-gray font-semibold text-xl leading-normal">
					({rating})
				</p>
			</div>
			<h3 className="font-palanquin mt-1 text-3xl font-bold">{customerName}</h3>
		</div>
	);
}
