import { useState } from "react";
import "./exercise.css";

const Exercise = ({ exercise }) => {
	const [isHover, setIsHover] = useState(false);

	const { id, title, website, repository, img, description } = exercise;

	return (
		<>
			<nav
				className="exercise"
				style={{ backgroundImage: `url(${img})` }}
				onMouseEnter={() => {
					setIsHover(true);
				}}
				onMouseLeave={() => {
					setIsHover(false);
				}}>
				<h3
					style={
						isHover
							? { marginBottom: 10 + "px" }
							: { margin: 4 + "px " + 0 + "px" }
					}>
					{title}
				</h3>
				{isHover && (
					<>
						<div className="links">
							<a href={website} target="_blank">
								Website
							</a>
							<a href={repository} target="_blank">
								Repository
							</a>
						</div>
						<p>{description}</p>
					</>
				)}
			</nav>
		</>
	);
};

export default Exercise;
