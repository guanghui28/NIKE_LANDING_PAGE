import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

export default function CustomerReviews() {
	return (
		<section className="max-container">
			<h3 className="capitalize font-palanquin text-4xl font-bold text-center">
				what our <span className="text-coral-red">customers</span> says?
			</h3>
			<p className="text-xl font-montserrat leading-normal mt-4 text-center">
				Hear genuine stories from our satisfied customers about their
				exceptional experiences with us.
			</p>
			<div className="mt-24 flex flex-1 justify-evenly items-center flex-col xl:flex-row gap-14">
				{reviews.map((review) => (
					<ReviewCard key={review.customerName} {...review} />
				))}
			</div>
		</section>
	);
}
