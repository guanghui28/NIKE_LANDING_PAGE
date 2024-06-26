import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
	return (
		<footer className="max-container">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img src={footerLogo} className="w-[150px] aspect-auto" />
					</a>
					<p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
						Get shoes ready for the new term at your nearest Nike store. Find
						your perfect size In Store. Get Rewards.
					</p>
					<div className="flex items-center gap-5 mt-8">
						{socialMedia.map((icon) => (
							<div
								key={icon.alt}
								className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
							>
								<img
									src={icon.src}
									alt={icon.alt}
									className="w-[24px] aspect-auto"
								/>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-1 justify-between flex-wrap lg:gap-10 gap-20">
					{footerLinks.map((section) => (
						<div key={section.title} className="">
							<h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										key={link.name}
										className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
									>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
				<div className="flex justify-center items-center gap-2 font-montserrat cursor-pointer">
					<img
						src={copyrightSign}
						alt="copyright"
						className="w-[20px] aspect-auto rounded-full m-0"
					/>
					<p>Copyright. ALl rights reversed.</p>
				</div>
				<p className="font-montserrat cursor-pointer">Terms & conditions.</p>
			</div>
		</footer>
	);
}
