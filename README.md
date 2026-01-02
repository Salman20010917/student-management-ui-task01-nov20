## **📘 Student Management UI – React + TypeScript**
**Topics**

A simple Student Management System UI built using React + TypeScript, featuring student listing, searching, and student creation via modal form. This project is part of the Frontend Intern – Task 01 assignment.

## **Demo Video**
https://youtu.be/R_bZGCndxNY

## **🚀 Features**
**✅ Core Features**
- View list of students (loaded from mock data)
- Search students by name (real-time filtering)
- Add new student using a modal form
- Form validation (required fields, email validation)
- Organized folder structure
- Fully typed using TypeScript

**⭐ Optional Features Implemented (If Applicable)**

- Good UI spacing
- Reusable component architecture
- Simple responsive behavior

**⚡ Quickstart**
1. Clone the Repository
```bash
git clone https://github.com/Salman20010917/student-management-ui-task01-nov20.git
cd student-management-ui-task01-nov20
```

2. Install Dependencies
```bash
npm install
```

3. Run the Project
```bash
npm run dev
```

**The project runs at:**
👉 http://localhost:5173

## **📁 Project Structure**
```bash
src/
 ├── components/
 │    ├── CreateStudentModal.tsx
 │    ├── SearchBar.tsx
 │    └── StudentTable.tsx
 │
 ├── data/
 │    └── students.ts
 │
 ├── types/
 │    └── student.ts
 │
 ├── pages/
 │    └── StudentsPage.tsx
 │
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

## **🧰 Tech Stack Used**
**Frontend**
- React (Vite)
- TypeScript
- HTML5 / CSS3

**Build Tools**
- Vite
- ESBuild

**Package Management**
- npm

## **🧩 Component Architecture**
1. StudentsPage.tsx
- Main screen
- Holds state (students, searchTerm)
- Renders SearchBar, Add Student Modal, and StudentTable


2. SearchBar.tsx
   - Controlled input field
   - Passes search value back to parent

3. StudentTable.tsx
   - Displays the student list in a table format
   - Receives filtered data via props

4. CreateStudentModal.tsx
   - Modal component with form for creating new student
   - Performs validation before submitting

5. students.ts
   - Mock data source

7. student.ts
   - TypeScript interface for strong typing

## **📜 Available Scripts**
| Command         | Description                |
|-----------------|----------------------------|
| `npm run dev`   | Start development server   |
| `npm run build` | Create production build    |
| `npm run preview` | Preview production build |
| `npm install`   | Install dependencies       |

## **🔍 Features Breakdown**
**✔ Student Listing**
- Loads initial data from data/students.ts
- Displays in table form
- Fully typed using Student interface

**✔ Search Function**
- Case-insensitive name filtering
- Runs on every keystroke

**✔ Add Student Modal**
- Opens on “+ Add Student”
- Validates:
  - Name: required
  - Email: required + proper email format
  - Level: must be 4–7

- Adds student to list and closes modal

  
## **✔ Data Validation**
Name
- Required

Email
- Required
- Pattern: test@example.com

Level
- Allowed values: 4, 5, 6, 7

Validation happens before adding a student.

## **🔮 Future Enhancements**
- Sorting: by name and level
- Edit student
- Save to localStorage
- Pagination for large lists
- Accessibility improvements
- Dark mode support

## **⚡ Performance**
- Very fast due to Vite + React + TypeScript
- State is kept minimal
- Functional components for lightweight rendering
- Only filtered list is re-rendered

## **🌐 Browser Support**
- Chrome	✅
- Firefox	✅
- Edge	✅
- Safari	✅

## **👨‍💻 Author**
**Mohamed Salman**
Frontend Intern – SimHealth AI

## **🙏 Acknowledgment**
Thanks to **SimHealth AI** for providing the internship task and guidance.

## **📚 Learning Resources**
- React Docs: https://react.dev
- TypeScript Docs: https://www.typescriptlang.org
- Vite Docs: https://vitejs.dev
- MDN Web Docs: https://developer.mozilla.org

## **🎯 Use Cases**
- This project can be used for:
  - Basic CRUD UI training
  - React + TS component structuring practice
  - Form handling and validation demos
  - Searching and filtering example
  - Building a real-world student admin interface

## **⭐ Key Highlights**
- Clean and modular folder structure
- Strong TypeScript typing
- Reusable UI components
- Beginner-friendly and scalable architecture
