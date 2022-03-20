import React from "react";

function Home() {
	const link = "https://github.com/sambabhouria";
	const target = "_blank";

	return (
		<div className="container">
			<h1>MERN Stack CRUD</h1>
			<p>
				<b>Front-end</b>: React.js v17+ with RRDv6+
			</p>
			<p>
				<b>Back-end</b>: Node.js, Express.js
			</p>
			<p>
				<b>Database</b>: MongoDB Atlas with Mongoose ODM
			</p>
			<p>
				<b>Developed By</b>: Samba Mamadou. Diallo
				<p>
					<a href={link} target={target}>
						https://github.com/sambabhouria
					</a>
				</p>
			</p>
		</div>
	);
}

export default Home;