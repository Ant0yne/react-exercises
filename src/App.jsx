import Header from "./components/Header";
import ExercisesList from "./components/ExercisesList";
import Footer from "./components/Footer";

import dataExercises from "./json/data_exercises.json";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<ExercisesList dataExercises={dataExercises} />
			<Footer />
		</>
	);
}

export default App;
