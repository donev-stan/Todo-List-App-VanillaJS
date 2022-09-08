import displayTasksStatus from "./displayTasksStatus.js";

let doneTasks = 0;

const getDoneTasks = () => doneTasks;

const incrementDoneTasks = () => {
	doneTasks += 1;
	displayTasksStatus();
};

const decrementDoneTasks = () => {
	doneTasks -= 1;
	displayTasksStatus();
};

let ongoingTasks = 0;

const getOngoingTasks = () => ongoingTasks;

const incrementOngoingTasks = () => {
	ongoingTasks += 1;
	displayTasksStatus();
};

const decrementOngoingTasks = () => {
	ongoingTasks -= 1;
	displayTasksStatus();
};

const checkedImgPath = "./images/checked.png";
const uncheckedImgPath = "./images/unchecked.png";
const deleteImgPath = "./images/delete.png";
const editImgPath = "./images/edit.png";

const images = {
	checkedImgPath,
	uncheckedImgPath,
	deleteImgPath,
	editImgPath,
};

export {
	getDoneTasks,
	incrementDoneTasks,
	decrementDoneTasks,
	images,
	getOngoingTasks,
	incrementOngoingTasks,
	decrementOngoingTasks,
};
