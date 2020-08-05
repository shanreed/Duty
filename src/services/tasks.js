export function fetchTasks() {
    // let currentDay = new Date();
    // let previousMonth = new Date();
    // previousMonth.setMonth(previousMonth.getMonth() - 1);
  
    return fetch(
      `http://localhost:8000/assignertasks//tasks`
    )
      .then(res => res.json())
      .catch(err => console.log(err));
  }