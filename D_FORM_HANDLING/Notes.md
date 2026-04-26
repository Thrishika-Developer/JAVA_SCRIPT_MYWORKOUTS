### 1. Basic Concept
- A form = collects user data (name, email, etc.)
- A submit event = triggered when form is submitted
- Form handling = controlling what happens when user submits


### 2. Selecting Form ⭐
```
const form = document.querySelector("#myform");
```

👉 Select the form using id, class, or tag



### 3. Submit Event (Important)

```
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload
  console.log("Form submitted!");
});
```

👉 Default behavior:

- Page reloads ❌
👉 Using preventDefault():
- No reload ✅
- You control everything

### 4. Getting Input Values

```const input = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});```

👉 input.value → user entered data


### 5. Multiple Inputs Example

```const name = document.querySelector("#name");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Name:", name.value);
  console.log("Email:", email.value);
});```


### 6. Form Validation 🔥


```form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (name.value === "") {
    alert("Name is required!");
  } else {
    console.log("Form submitted");
  }
});```

👉 Check before submitting

### 7. Reset Form


```form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submitted!");
  form.reset();
});```

👉 Clears all input fields

### 8. Real-Time Input Handling

```
input.addEventListener("input", (e) => {
  console.log("Typing:", e.target.value);
});
```
👉 Runs while typing

### 9. Access Form Elements Directly


```form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target.name.value);
});```

👉 Access using:

- e.target.inputName


### 10. Real Example (Mini App)
```
const form = document.querySelector("#myform");
const input = document.querySelector("#task");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  li.textContent = input.value;

  list.appendChild(li);

  input.value = "";
});```

👉 Adds items to list (like Todo app)

### Summary
- Use submit event for forms
- Always use e.preventDefault()
- Use .value to get input data
- Validate before submitting
- Use form.reset() to clear fields
- Real apps use form handling heavily

🚀 Next step (recommended)

👉 Learn:

- Form validation (email, password rules)
- Storing data (localStorage)
- Building a Todo app