function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<p
				>
					Katie Page, Marriage and Family Therapist Trainee
				</p>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
