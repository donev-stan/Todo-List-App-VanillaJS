const elements = {
	inputField: () => document.getElementById("list-item-input"),
	inputBtn: () => document.getElementById("list-item-add-btn"),

	checkBtns: () => document.querySelectorAll(".check-item-img-btn"),
	deleteBtns: () => document.querySelectorAll(".delete-item-img-btn"),

	completedTasksResult: () => document.getElementById("completed-tasks-result"),
	ongoingTasksResult: () => document.getElementById("ongoing-tasks-result"),
};

export default elements;
