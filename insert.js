
// 1. Колекция students
db.students.insertMany([
  {
    first_name: "Иван",
    last_name: "Иванов",
    birth_date: new Date("2010-05-15"),
    gender: "M",
    email: "ivanov@school.bg",
    class_id: 1,
    address: { city: "София", street: "Цар Освободител 15" },
    subjects: ["Математика", "Физика"],
    created_at: new Date()
  },
]);

// 2. Колекция teachers
db.teachers.insertMany([
  {
    first_name: "Георги",
    last_name: "Георгиев",
    email: "georgiev@school.bg",
    subjects: ["Математика", "Физика"],
    years_experience: 10,
    classes: [1, 3],
    is_active: true
  },
]);

// 3. Колекция classes
db.classes.insertMany([
  {
    class_id: 1,
    name: "5A",
    room: "101",
    head_teacher_id: 1,
    student_count: 25,
    schedule: {
      monday: ["Математика", "Български"],
      tuesday: ["Физика", "История"]
    }
  },
]);

// 4. Колекция subjects
db.subjects.insertMany([
  {
    name: "Математика",
    code: "MATH",
    teacher_ids: [1, 5],
    hours_per_week: 4,
    is_elective: false
  },
]);

// 5. Колекция grades
db.grades.insertMany([
  {
    student_id: 1,
    subject_id: 1,
    grade: 5.50,
    teacher_id: 1,
    date: new Date("2023-10-15"),
    semester: 1,
    comments: "Добро представяне"
  },
]);