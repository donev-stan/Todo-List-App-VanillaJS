import attachEventListeners from "./attachEventListeners.js";
import generateTaskId from "./generateTaskId.js";
import { pushTaskToLocalStorage } from "./localStorage.js";
import { images, incrementDoneTasks, incrementOngoingTasks } from "./variables.js";

const addListItem = (todoText, idFromLocal, checkedFromLocal) => {
	const list = document.querySelector(".list");

	const itemDiv = document.createElement("div");
	itemDiv.classList.add("item");

	// ID
	const itemIdDiv = document.createElement("div");
	itemIdDiv.classList.add("task-id");
	const taskId = generateTaskId();
	itemIdDiv.dataset.id = idFromLocal ? idFromLocal : taskId;
	itemDiv.appendChild(itemIdDiv);

	// Edit
	const editItemDiv = document.createElement("div");
	editItemDiv.classList.add("edit-item-box");
	editItemDiv.classList.add("unselectable");
	itemDiv.appendChild(editItemDiv);

	const editItemImgBtn = document.createElement("img");
	editItemImgBtn.classList.add("edit-item-img-btn");
	editItemImgBtn.src = images.editImgPath;
	editItemImgBtn.title = "Edit";
	editItemDiv.appendChild(editItemImgBtn);

	// Delete
	const deleteItemDiv = document.createElement("div");
	deleteItemDiv.classList.add("delete-item-box");
	deleteItemDiv.classList.add("unselectable");
	itemDiv.appendChild(deleteItemDiv);

	const deleteItemImgBtn = document.createElement("img");
	deleteItemImgBtn.classList.add("delete-item-img-btn");
	deleteItemImgBtn.src = images.deleteImgPath;
	deleteItemImgBtn.title = "Delete";
	deleteItemDiv.appendChild(deleteItemImgBtn);

	// Check
	const checkItemDiv = document.createElement("div");
	checkItemDiv.classList.add("check-item-box");
	checkItemDiv.classList.add("unselectable");
	itemDiv.appendChild(checkItemDiv);

	const checkItemImgBtn = document.createElement("img");
	checkItemImgBtn.classList.add("check-item-img-btn");
	checkItemImgBtn.dataset.checked = checkedFromLocal ? true : false;
	checkItemImgBtn.src = checkedFromLocal ? images.checkedImgPath : images.uncheckedImgPath;
	checkItemDiv.appendChild(checkItemImgBtn);

	// Text
	const listItemText = document.createElement("div");
	listItemText.classList.add("list-item-text");
	listItemText.innerText = todoText;
	itemDiv.appendChild(listItemText);

	list.appendChild(itemDiv);

	checkedFromLocal ? incrementDoneTasks() : incrementOngoingTasks();

	attachEventListeners(editItemImgBtn, deleteItemImgBtn, checkItemImgBtn);

	if (!idFromLocal) pushTaskToLocalStorage({ id: taskId, checked: false, todoText });
};

export default addListItem;
