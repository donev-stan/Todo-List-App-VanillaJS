import elements from "./domElements.js";
import { getDoneTasks, getOngoingTasks } from "./variables.js";

const displayTasksStatus = () => {
  // Check if animation is needed for completed tasks
  const completedTasksResult = elements.completedTasksResult().textContent;
  if (completedTasksResult != getDoneTasks()) {
    elements.completedTasksResult().classList.add("start-animation");
  }

  // Check if animation is needed for ongoing tasks
  const ongoingTasksResult = elements.ongoingTasksResult().textContent;
  if (ongoingTasksResult != getOngoingTasks()) {
    elements.ongoingTasksResult().classList.add("start-animation");
  }

  // Update Text
  elements.completedTasksResult().textContent = getDoneTasks();
  elements.ongoingTasksResult().textContent = getOngoingTasks();

  // Remove the animation class
  setTimeout(() => {
    elements.completedTasksResult().classList.remove("start-animation");
    elements.ongoingTasksResult().classList.remove("start-animation");
  }, 500);
};

export default displayTasksStatus;
