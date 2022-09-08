import handleCheck from "./handleCheck.js";
import handleDelete from "./handleDelete.js";
import handleEdit from "./handleEdit.js";

const attachEventListeners = (editImgBtn, deleteImgBtn, checkboxImgBtn) => {
	editImgBtn.addEventListener("click", ({ target }) => handleEdit(target));
	deleteImgBtn.addEventListener("click", ({ target }) => handleDelete(target));
	checkboxImgBtn.addEventListener("click", ({ target }) => handleCheck(target));
};

export default attachEventListeners;
