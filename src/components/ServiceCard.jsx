export default function ServiceCard({ imgURL, label, subtext }) {
	return (
		<div className="flex-1 min-w-[350px] shadow-3xl rounded-[20px] px-10 py-16 ">
			<div className="w-11 h-11 rounded-full flex items-center justify-center bg-coral-red">
				<img src={imgURL} alt={label} className="w-[24px] aspect-square" />
			</div>
			<h3 className="font-bold font-palanquin mt-5 text-3xl leading-normal">
				{label}
			</h3>
			<p className="mt-3 break-words font-montserrat text-slate-gray text-lg leading-normal">
				{subtext}
			</p>
		</div>
	);
}
