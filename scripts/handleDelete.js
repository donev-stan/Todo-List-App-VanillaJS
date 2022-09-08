import { deleteLocalStorageTaskById } from "./localStorage.js";
import { decrementDoneTasks, decrementOngoingTasks } from "./variables.js";

const handleDelete = (target) => {
  const wholeElement = target.parentElement.parentElement;
  const taskId = wholeElement.querySelector(".task-id").dataset.id;

  const isChecked =
    target.parentElement.parentElement.querySelector(".check-item-img-btn")
      .dataset.checked === "true"
      ? true
      : false;

  if (isChecked) decrementDoneTasks();
  else decrementOngoingTasks();

  wholeElement.remove();

  deleteLocalStorageTaskById(taskId);
};

export default handleDelete;
