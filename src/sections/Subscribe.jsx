import Button from "../components/Button";

export default function Subscribe() {
	return (
		<section
			id="contact-us"
			className="max-container flex flex-col xl:flex-row gap-10 items-center justify-between"
		>
			<h3 className="font-palanquin font-bold text-4xl leading-[67px] xl:max-w-lg text-center capitalize">
				sign up from <span className="text-coral-red">Updates</span> &
				newsletter
			</h3>
			<div className="flex w-full justify-between lg:max-w-[50%] max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
				<input
					type="text"
					placeholder="subscribe@nike.com"
					className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full"
				/>
				<div className="flex items-center max-sm:flex-end max-sm:w-full">
					<Button label="Sign Up" fullWidth />
				</div>
			</div>
		</section>
	);
}
