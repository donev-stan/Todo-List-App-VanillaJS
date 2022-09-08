import elements from "./domElements.js";

const handleEdit = (target) => {
	const itemText = target.parentElement.parentElement.querySelector(".list-item-text").textContent;

	elements.inputField().value = itemText;
	elements.inputField().style.borderColor = "lightseagreen";

	elements.inputBtn().textContent = "Edit Item";
};

export default handleEdit;
