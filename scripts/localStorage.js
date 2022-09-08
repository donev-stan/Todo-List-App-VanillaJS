const pushTaskToLocalStorage = (newTaskObj) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"))
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  savedTasks.push(newTaskObj);

  localStorage.setItem("tasks", JSON.stringify(savedTasks));
};

const updateLocalStorageTaskByID = (taskId) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));

  const updatedTasks = savedTasks.map((taskObj) => {
    if (taskObj.id === taskId) {
      taskObj.checked = !taskObj.checked;
    }
    return taskObj;
  });

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

const deleteLocalStorageTaskById = (taskId) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));

  const indexOfTask = savedTasks.map((task) => task.id).indexOf(taskId);

  savedTasks.splice(indexOfTask, 1);

  localStorage.setItem("tasks", JSON.stringify(savedTasks));
};

export {
  pushTaskToLocalStorage,
  updateLocalStorageTaskByID,
  deleteLocalStorageTaskById,
};
