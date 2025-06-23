//CRUD операции и агрегации за school_management система

// ========== CRUD ОПЕРАЦИИ ==========
// Четене (Read)
db.students.find();//Всичко 
db.students.find({ class_id: 1 });// Всички ученици от клас 1
db.students.find({ "address.city": "София" });// Ученици от София
db.students.find({ "address.city": "София", class_id: 2 });// Ученици от софия и от клас 2
// ========== ЧЕТЕНЕ (READ) ==========

// 1. Колекция students
db.students.find(); // Всички ученици
db.students.find({ class_id: 1 }); // Всички ученици от клас 1
db.students.find({ "address.city": "София" }); // Ученици от София
db.students.find({ "address.city": "София", class_id: 2 }); // Ученици от София и от клас 2

// 2. Колекция teachers
db.teachers.find(); // Всички учители
db.teachers.find({ years_experience: { $gt: 5 } }); // Учители с повече от 5 години опит
db.teachers.find({ "subjects": "Математика" }); // Учители по Математика
db.teachers.find({ "subjects": "Математика", is_active: true }); // Активни учители по Математика

// 3. Колекция classes
db.classes.find(); // Всички класове
db.classes.find({ student_count: { $gt: 10 } }); // Класове с повече от 20 ученика
db.classes.find({ "head_teacher_id": 1 }); // Класове с класен ръководител 1
db.classes.find({ student_count: { $gt: 20 }, "head_teacher_id": 3 }); // Малки класове с класен ръководител 3

// 4. Колекция subjects
db.subjects.find(); // Всички предмети
db.subjects.find({ is_elective: true }); // Избираеми предмети
db.subjects.find({ "details.difficulty": "Висока" }); // Трудни предмети
db.subjects.find({ is_elective: true, "details.difficulty": "Средна" }); // Средни, избираеми предмети

// 5. Колекция grades
db.grades.find(); // Всички оценки
db.grades.find({ "assessment.grade": { $gte: 5.50 } }); // Оценки над 5.50
db.grades.find({ subject_id: 5 }); // Оценки по Математика (subject_id 1)
db.grades.find({ subject_id: 1, "assessment.grade": { $gte: 5.30 } }); // Добри оценки по Математика

// Актуализиране на ученик
db.students.updateOne(
  { first_name: "Иван", last_name: "Иванов" },
  { 
    $set: { 
      email: "ivanov_updated@school.bg",
      "address.street": "Цар Освободител 20" 
    },
    $currentDate: { updated_at: true }
  }
);

// Актуализиране на учител
db.teachers.updateOne(
  { first_name: "Георги", last_name: "Георгиев" },
  { 
    $inc: { years_experience: 1 },
    $set: { is_active: false },
    $currentDate: { last_modified: true }
  }
);

// Актуализиране на клас
db.classes.updateOne(
  { class_id: 1 },
  { 
    $set: { "schedule.monday": ["Математика", "Физика", "Английски"] },
    $inc: { student_count: 2 }
  }
);

// Актуализиране на предмет
db.subjects.updateOne(
  { name: "Математика" },
  { 
    $set: { "details.difficulty": "Много висока" },
    $push: { "requirements.materials": "Графичен калкулатор" }
  }
);

// Актуализиране на оценка
db.grades.updateOne(
  { student_id: 1, subject_id: 1 },
  { 
    $set: { 
      "assessment.grade": 5.75,
      "teacher.comments": "Подобрено представяне"
    }
  }
);

// Изтриване (Delete)

// Изтриване на ученик
db.students.deleteOne({ first_name: "Николай", last_name: "Димитров" });

// Изтриване на учител
db.teachers.deleteOne({ first_name: "Румяна", last_name: "Румянова" });

// Изтриване на клас
db.classes.deleteOne({ class_id: 10 });

// Изтриване на предмет
db.subjects.deleteOne({ name: "Психология" });

// Изтриване на оценка
db.grades.deleteOne({ student_id: 10, subject_id: 4 });

// ========== АГРЕГАЦИИ ==========

// 1. Агрегации за students
// Брой ученици по класове и градове
db.students.aggregate([
  {
    $group: {
      _id: {
        class: "$class_id",
        city: "$address.city"
      },
      count: { $sum: 1 },
      average_age: { $avg: { $subtract: [new Date(), "$birth_date"] } }
    }
  },
  { $sort: { "_id.class": 1, count: -1 } }
]);

// 2. Агрегации за teachers
// Среден стаж на учители по предмети
db.teachers.aggregate([
  { $unwind: "$subjects" },
  {
    $group: {
      _id: "$subjects",
      average_experience: { $avg: "$years_experience" },
      count: { $sum: 1 }
    }
  },
  { $sort: { average_experience: -1 } }
]);

// 3. Агрегации за classes
// Класове с най-много ученици и техните учители
db.classes.aggregate([
  { $sort: { student_count: -1 } },
  { $limit: 3 },
  {
    $lookup: {
      from: "teachers",
      localField: "head_teacher_id",
      foreignField: "_id",
      as: "head_teacher"
    }
  },
  { $unwind: "$head_teacher" },
  {
    $project: {
      class_name: "$name",
      student_count: 1,
      head_teacher: "$head_teacher.first_name"
    }
  }
]);

// 4. Агрегации за subjects
// Брой учители по предмети и среден брой часове
db.subjects.aggregate([
  {
    $project: {
      name: 1,
      teacher_count: { $size: "$teacher_ids" },
      hours_per_week: 1
    }
  },
  {
    $group: {
      _id: null,
      average_teachers: { $avg: "$teacher_count" },
      average_hours: { $avg: "$hours_per_week" }
    }
  }
]);

// 5. Агрегации за grades
// Среден успех по предмети с информация за предмета
db.grades.aggregate([
  {
    $group: {
      _id: "$subject_id",
      average_grade: { $avg: "$assessment.grade" }
    }
  },
  {
    $lookup: {
      from: "subjects",
      localField: "_id",
      foreignField: "_id",
      as: "subject"
    }
  },
  { $unwind: "$subject" },
  {
    $project: {
      subject_name: "$subject.name",
      average_grade: 1,
      difficulty: "$subject.details.difficulty"
    }
  },
  { $sort: { average_grade: -1 } }
]);
