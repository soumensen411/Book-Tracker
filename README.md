# 📚 Book Tracker

A personal book tracking app built with React. Track books you want to read, are currently reading, or have already finished.

--- 
🔗 Live Demo:
<a href="https://soumensen411.github.io/Book-Tracker/" target="_blank" rel="noopener noreferrer">
  https://soumensen411.github.io/Book-Tracker/
</a>


---

## Features

- **Add Books** — Add a book with title, author, and reading status
- **Track Status** — Move books through three stages: Want to Read → Reading → Completed
- **Filter Books** — Filter your list by All, Wishlist, Reading, or Finished
- **Delete Books** — Remove books from your list
- **Live Stats** — See total, wishlist, reading, and completed counts update in real time
- **Persistent Storage** — All data is saved to localStorage and survives page refresh

---


## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| DaisyUI | UI component library |
| localStorage | Data persistence |

---

## React Concepts Used

This project was built while learning React fundamentals:

- `useState` — managing books array, filter state, form inputs
- `useEffect` — syncing state to localStorage
- Custom Hook (`useBooks`) — separating logic from UI
- Props & data flow — lifting state up to parent
- Controlled inputs — form fields managed by React state
- Derived state — filtered book list computed from existing state
- Conditional rendering — status badges, button labels
- List rendering with keys — `.map()` over books array
- Event handling — onClick, onChange, onKeyDown

---
