import { shoe8 } from "../assets/images";
import Button from "../components/Button";

export default function SuperQuality() {
	return (
		<section
			id="about-us"
			className="max-container flex flex-col lg:flex-row justify-between items-center gap-10 w-full"
		>
			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					We provide you <span className="text-coral-red">Super</span>{" "}
					<span className="text-coral-red">Quality</span> Shoes
				</h2>
				<p className="font-montserrat text-slate-gray mt-4 lg:max-w-lg leading-normal text-xl">
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate your experience, providing you with unmatched
					quality, innovation, and a touch of elegance
				</p>
				<p className="mt-6 lg:max-w-lg leading-normal text-slate-gray font-montserrat">
					Our dedication to detail and excellence ensures your satisfaction
				</p>
				<div className="mt-11">
					<Button label="View details"></Button>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<img
					src={shoe8}
					alt="shoe"
					className="w-[100%] aspect-auto lg:w-[570px]"
				/>
			</div>
		</section>
	);
}
