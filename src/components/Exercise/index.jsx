import { useState } from "react";
import "./exercise.css";

const Exercise = ({ exercise }) => {
	const [isHover, setIsHover] = useState(false);

	const { id, title, website, repository, img, description } = exercise;

	return (
		<>
			<nav
				className="exercise"
				style={
					isHover
						? {
								backgroundColor: "rgba(0, 0, 0, 0.85",
								backgroundBlendMode: "darken",
								color: "var(--white)",
								backgroundImage: `url(${img})`,
						  }
						: {
								backgroundColor: "rgba(255, 255, 255, 0.9",
								backgroundBlendMode: "lighten",
								color: "var(--black)",
								backgroundImage: `url(${img})`,
						  }
				}
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
							<a
								href={website}
								target="_blank"
								style={
									isHover
										? { color: "var(--white)" }
										: { color: "var(--black)" }
								}>
								Website
							</a>
							<a
								href={repository}
								target="_blank"
								style={
									isHover
										? { color: "var(--white)" }
										: { color: "var(--black)" }
								}>
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
