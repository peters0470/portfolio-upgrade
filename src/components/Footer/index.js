import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/peters0470"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src='https://user-images.githubusercontent.com/71112436/111097901-71ca8200-8510-11eb-88bf-1b241dd51024.png'
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/ryan-peters-482747112/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src='https://user-images.githubusercontent.com/71112436/111097980-94f53180-8510-11eb-834e-01909eb25723.png'
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			
		</footer>
	);
}

export default Footer;