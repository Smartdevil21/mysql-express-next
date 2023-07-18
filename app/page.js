"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Task from "@/components/task/Task";
import { getTasks, createTask } from "@/services/tasks.service";

export default function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTaskTrigger = async () => {
    const data = await getTasks();
    setTasks(data.data);
  };

  useEffect(() => {
    getTaskTrigger();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Todo Manager</h1>
      <h3>A simple todo manager app created using NextJS 13 and MySQL.</h3>
      <div className={styles.add_task_container}>
        <input
          type="text"
          placeholder={"Enter your task here"}
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button
          onClick={async () => {
            await createTask(newTask);
            await getTaskTrigger();
            // setTasks(data.data)
          }}
          disabled={!newTask}
        >
          Add
        </button>
      </div>
      <div className={styles.todo_container}>
        {tasks.map((ele, index) => {
          return (
            <Task key={index} id={ele.id} completed={ele.completed} createdOn={ele.deadline} task_name={ele.task_name} getTaskTrigger={getTaskTrigger} />
          );
        })}
      </div>
    </main>
  );
}
