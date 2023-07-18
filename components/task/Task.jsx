import React from "react";
import Styles from "./task.module.scss";
import { deleteTask, updateTask } from "@/services/tasks.service";

function Task({ id, task_name, completed, createdOn, getTaskTrigger }) {
  return (
    <div className={Styles.task}>
      <span>
        {" "}
        <strong>Title: </strong>
        {task_name}
      </span>
      <span>Created: {new Date().toDateString(createdOn)}</span>
      <div className={Styles.btns}>
        <button
          onClick={async () => {
            await updateTask(id, !completed);
            await getTaskTrigger();
          }}
          className={completed !== 0 ? Styles.completed : ""}
        >
          {completed === 0 ? "Incomplete" : "Completed"}
        </button>
        <button
          onClick={async () => {
            await deleteTask(id);
            await getTaskTrigger();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
