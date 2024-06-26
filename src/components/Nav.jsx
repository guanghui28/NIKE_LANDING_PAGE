import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

export default function Nav() {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Logo" width={130} height={29} />
				</a>
				<ul className="hidden flex-1 lg:flex items-center justify-center gap-16 ">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-slate-gray"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="block lg:hidden">
					<img src={hamburger} alt="menu" width={25} height={25} />
				</div>
			</nav>
		</header>
	);
}
