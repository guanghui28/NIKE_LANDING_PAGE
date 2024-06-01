import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

export default function PopularProducts() {
	return (
		<section id="products" className="max-container max-sm:mt-12">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="font-palanquin text-4xl font-bold">
					Our <span className="text-coral-red">Popular</span> products
				</h2>
				<p className="font-montserrat text-slate-gray mt-2 md:max-w-lg">
					Experience top-notch quality and style with our sought-after
					selections. Discover a world of comfort, design and value
				</p>

				<div className="mt-16 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
					{products.map((product) => (
						<PopularProductCard key={product.name} {...product} />
					))}
				</div>
			</div>
		</section>
	);
}
