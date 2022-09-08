import { updateLocalStorageTaskByID } from "./localStorage.js";
import {
  decrementDoneTasks,
  decrementOngoingTasks,
  images,
  incrementDoneTasks,
  incrementOngoingTasks,
} from "./variables.js";

const handleCheck = (imgBtn) => {
  const checked = imgBtn.dataset.checked;
  const isChecked = checked === "true" ? false : true;

  const textDiv = imgBtn.parentElement.nextElementSibling;

  imgBtn.dataset.checked = isChecked;

  if (isChecked) {
    imgBtn.src = images.checkedImgPath;
    textDiv.classList.add("task-done");
    incrementDoneTasks();
    decrementOngoingTasks();
  } else {
    imgBtn.src = images.uncheckedImgPath;
    textDiv.classList.remove("task-done");
    decrementDoneTasks();
    incrementOngoingTasks();
  }

  const taskId = textDiv.parentElement.querySelector(".task-id").dataset.id;
  updateLocalStorageTaskByID(taskId);
};

export default handleCheck;
