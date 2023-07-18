export async function getTasks() {
    try {
      const result = await fetch("/api/tasks", { method: "GET" });
      const data = await result.json();
        return data;
    } catch (error) {
        console.log(`Err in getting tasks!: ${error}`)
        return [];
    }
}

export async function createTask(title) {
  try {
    const result = await fetch("/api/tasks", { method: "POST", body: JSON.stringify({title}) });
    const data = await result.json();
        return data;
  } catch (error) {
    console.log(`Err in creating task!: ${error}`)
        return [];
  }
}

export async function deleteTask(id) {
  try {
    const result = await fetch("/api/tasks", { method: "DELETE", body: JSON.stringify({id}) });
    const data = await result.json();
        return data;
  } catch (error) {
    console.log(`Err in deleting tasks!: ${error}`)
        return [];
  }
}

export async function updateTask(id, completed) {
  try {
    const result = await fetch("/api/tasks", { method: "PATCH", body: JSON.stringify({id, completed}) });
    const data = await result.json();
        return data;
  } catch (error) {
    console.log(`Err in deleting tasks!: ${error}`)
        return [];
  }
}