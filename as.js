let todos = [
  { text: "HTML va CSS ni o'rganish", done: true },
  { text: "JavaScript asoslarini o'rganish", done: false },
  { text: "API bilan ishlashni o'rganish", done: false },
  { text: "Loyiha uchun dizayn tayyorlash", done: true },
];

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const div = document.createElement("div");
    div.className = "todo-item";

    div.innerHTML = `
          <div class="left">
            <input type="checkbox"
              ${todo.done ? "checked" : ""}
              onchange="toggleTodo(${index})"
            >

            <span>${todo.text}</span>
          </div>

          <div class="actions">
            <span class="status ${todo.done ? "done" : "not-done"}">
              ${todo.done ? "Bajarilgan" : "Bajarilmagan"}
            </span>

            <button class="edit-btn" onclick="editTodo(${index})">✏</button>
            <button class="delete-btn" onclick="deleteTodo(${index})">🗑</button>
          </div>
        `;

    todoList.appendChild(div);
  });

  document.getElementById("count").innerText = todos.length;
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (text === "") return;

  todos.push({
    text,
    done: false,
  });

  input.value = "";
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodo(index) {
  const newText = prompt("Vazifani tahrirlash:", todos[index].text);

  if (newText !== null && newText.trim() !== "") {
    todos[index].text = newText;
    renderTodos();
  }
}

function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

renderTodos();
