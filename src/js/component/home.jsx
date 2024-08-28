import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TodosListFetch } from "./TodosListFetch";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TodosListFetch/>
		</div>
	);
};

export default Home;
