import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

export default function Hero() {
	return (
		<section
			id="home"
			className="max-container w-full min-h-screen flex flex-col xl:flex-row justify-center gap-10"
		>
			<div className="w-full xl:w-2/5 max-xl:padding-x flex flex-col justify-center items-start pt-28">
				<p className="text-xl font-montserrat text-coral-red">
					Our Summer collections
				</p>
				<h1 className="mt-10 text-palanquin text-[72px] sm:text-8xl font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">Nike</span> Shoes
				</h1>
				<p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
					Discover stylish Nike arrivals, quality comfort, and innovation for
					your active life.
				</p>

				<Button label="Shop now" iconURL={arrowRight} />

				<div className="w-full mt-20 flex flex-wrap justify-start items-start gap-16">
					{statistics.map((stat) => (
						<div key={stat.label}>
							<p className="font-palanquin text-4xl font-bold">{stat.value}</p>
							<p className="font-montserrat text-slate-gray leading-7">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<img
					src={bigShoe1}
					alt="shoe collection"
					width={610}
					height={500}
					className="object-contain relative z-10"
				/>
			</div>
		</section>
	);
}
