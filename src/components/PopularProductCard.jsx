import { star } from "../assets/icons";

export default function PopularProductCard({ imgURL, name, price }) {
	return (
		<div className="flex flex-col w-full">
			<div className="flex justify-center items-center">
				<img
					src={imgURL}
					alt={name}
					className="w-full max-w-[400px] aspect-square rounded-xl"
				/>
			</div>
			<div className="mt-8 flex items-center justify-start gap-2.5">
				<img src={star} alt="rating" className="w-[24px] aspect-square" />
				<p className="font-montserrat text-slate-gray text-xl leading-normal">
					(4.5)
				</p>
			</div>
			<h3 className="font-palanquin font-bold text-2xl mt-2 leading-normal">
				{name}
			</h3>
			<p className="font-montserrat text-coral-red text-xl font-semibold mt-2 leading-normal">
				{price}
			</p>
		</div>
	);
}
