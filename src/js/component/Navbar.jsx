import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand p-2" href="#">TodoCraft</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse "
					id="navbarText">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item p-2">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item p-2">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item p-2">
							<a className="nav-link" href="#">Services</a>
						</li>
						<li className="nav-item p-2">
							<a className="nav-link" href="#">Channels</a>
						</li>
					</ul>

				</div>
			</div>
		</nav>

	);
}

export default Navbar;