// ========== CRUD ОПЕРАЦИИ ==========

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