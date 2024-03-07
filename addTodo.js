const categories = []; // Array to store categories
const tasks = []; // Array to store tasks

// Function to add a new category
function addCategory() {
  const categoryName = prompt("Enter category name:");
  if (categoryName) {
    categories.push(categoryName);
    updateCategoryList();
    updateCategorySelect();
  }
}

// Function to update the category list in the UI
function updateCategoryList() {
  const categoryList = document.getElementById("categoryList");
  categoryList.innerHTML = ""; // Clear existing list items

  for (const category of categories) {
    const listItem = document.createElement("li");
    listItem.classList.add("category-item");
    listItem.textContent = category;
    categoryList.appendChild(listItem);
  }
}

// Function to update the category select element
function updateCategorySelect() {
  const selectElement = document.getElementById("categorySelect");
  selectElement.innerHTML = ""; // Clear existing options

  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.text = category;
    selectElement.appendChild(option);
  }
}

// Function to handle adding a task
function addTask(event) {
  event.preventDefault(); // Prevent default form submission

  const categorySelect = document.getElementById("categorySelect");
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDueDate = document.getElementById("taskDueDate").value;

  if (!taskTitle) {
    alert("Please enter a task title.");
    return;
  }

  const newTask = {
    category: categorySelect.value,
    title: taskTitle,
    description: taskDescription,
    dueDate: taskDueDate,
    completed: false,
  };

  tasks.push(newTask);
  updateTaskList();

  // Clear form fields after adding the task
  document.getElementById("taskForm").reset();
}

// Function to update the task list in the UI
function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear existing list items

  for (const task of tasks) {
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");

    const titleSpan = document.createElement("span");
    titleSpan.classList.add("task-title");
    titleSpan.textContent = task.title;
    listItem.appendChild(titleSpan);

    if (task.description) {
      const descriptionSpan = document.createElement("span");
      descriptionSpan.classList.add("task-description");
      descriptionSpan.textContent = task.description;
      listItem.appendChild(descriptionSpan);
    }

    if (task.dueDate) {
      const dueDateSpan = document.createElement("span");
      dueDateSpan.classList.add("task-due-date");
      dueDateSpan.textContent = `Due: ${task.dueDate}`;
      listItem.appendChild(dueDateSpan);
    }

    const completionBar = document.createElement("div");
    completionBar.classList.add("task-completion");
    listItem.appendChild(completionBar);

    // Add click event listener to toggle task completion
    listItem.addEventListener("click", () => {
      task.completed = !task.completed;
      updateTaskList(); // Update UI with completion status
    });

    taskList.appendChild(listItem);
  }
}

// Add event listeners to buttons
document.getElementById("addCategoryBtn").addEventListener("click", addCategory);
const taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", addTask);

// Call functions to update the UI initially (assuming categories exist)
updateCategoryList();
updateCategorySelect();
updateTaskList();
