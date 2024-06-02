import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

export default function SpecialOffers() {
	return (
		<section className="max-container flex flex-col-reverse xl:flex-row xl:items-center gap-10">
			<div className="flex-1">
				<img
					src={offer}
					alt="offer"
					className="sm:w-[100%] aspect-auto object-contain"
				/>
			</div>
			<div className="flex flex-1 flex-col">
				<h2 className="font-bold font-palanquin text-4xl xl:max-w-lg">
					<span className="text-coral-red">Special</span> Offer
				</h2>
				<p className="font-montserrat text-xl leading-normal text-slate-gray mt-4 xl:max-w-lg">
					Embark a shopping journey that redefines your experience with
					unbeatable deals. From premier selections to incredible savings, we
					offer unparalleled value that sets us apart.
				</p>
				<br />
				<p className="font-montserrat text-xl leading-normal text-slate-gray xl:max-w-lg">
					Navigate a team of possibilities designed to fulfill your unique
					desires, surpassing the loftiest expectations. Your journey with us is
					nothing short of exceptional.
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="Shop now" iconURL={arrowRight} />
					<Button
						label="Learn more"
						backgroundColor="bg-white"
						borderColor="border-slate-gray"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
}
