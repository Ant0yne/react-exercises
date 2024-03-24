import Exercise from "../Exercise";

import "./exercisesList.css";

const ExercisesList = ({ dataExercises }) => {
	return (
		<>
			<main>
				<div className="container">
					{dataExercises.map((exercise) => {
						return <Exercise key={exercise.id} exercise={exercise} />;
					})}
				</div>
			</main>
		</>
	);
};

export default ExercisesList;
