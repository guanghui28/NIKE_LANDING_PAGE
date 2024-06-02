import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

export default function Services() {
	return (
		<section className="max-container flex flex-wrap justify-center gap-9">
			{services.map((service) => (
				<ServiceCard key={service.label} {...service} />
			))}
		</section>
	);
}
