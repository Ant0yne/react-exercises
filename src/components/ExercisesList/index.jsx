import Exercise from "../Exercise";

import "./exercisesList.css";

const ExercisesList = ({ dataExercises }) => {
	return (
		<>
			<main>
				{dataExercises.map((exercise) => {
					return <Exercise key={exercise.id} exercise={exercise} />;
				})}
			</main>
		</>
	);
};

export default ExercisesList;
