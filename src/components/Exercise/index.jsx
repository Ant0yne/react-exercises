import "./exercise.css";

const Exercise = ({ exercise }) => {
	const { id, title, website, repository, img, description } = exercise;

	return (
		<>
			<nav className="exercise" style={{ backgroundImage: `url(${img})` }}>
				<h3>{title}</h3>
				<a href={website}> Website</a>
				<a href={repository}> Website</a>
				<p>{description}</p>
			</nav>
		</>
	);
};

export default Exercise;
