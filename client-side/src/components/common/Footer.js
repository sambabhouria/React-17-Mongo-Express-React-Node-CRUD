const Footer = () => {
	const link = "https://henok.us";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Diallo M. Samba{" "}
			<a href={link} target={target}>
				https://github.com/sambabhouria
			</a>
		</div>
	);
};

export default Footer;
