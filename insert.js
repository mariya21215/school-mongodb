// 1. Колекция students (10 записа)
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
  {
    first_name: "Мария",
    last_name: "Петрова",
    birth_date: new Date("2011-03-22"),
    gender: "F",
    email: "petrova@school.bg",
    class_id: 2,
    address: { city: "Пловдив", street: "Гладстон 10" },
    subjects: ["Биология", "Химия"],
    created_at: new Date()
  },
  {
    first_name: "Георги",
    last_name: "Георгиев",
    birth_date: new Date("2010-11-10"),
    gender: "M",
    email: "georgiev@school.bg",
    class_id: 1,
    address: { city: "София", street: "Гурко 5" },
    subjects: ["Математика", "Информатика"],
    created_at: new Date()
  },
  {
    first_name: "Елена",
    last_name: "Димитрова",
    birth_date: new Date("2011-07-18"),
    gender: "F",
    email: "dimitrova@school.bg",
    class_id: 3,
    address: { city: "Варна", street: "Сливница 20" },
    subjects: ["Английски", "История"],
    created_at: new Date()
  },
  {
    first_name: "Анна",
    last_name: "Тодорова",
    birth_date: new Date("2010-09-05"),
    gender: "F",
    email: "todorova@school.bg",
    class_id: 2,
    address: { city: "Пловдив", street: "Мария Луиза 33" },
    subjects: ["Биология", "География"],
    created_at: new Date()
  },
  {
    first_name: "Димитър",
    last_name: "Стоянов",
    birth_date: new Date("2011-01-25"),
    gender: "M",
    email: "stoyanov@school.bg",
    class_id: 3,
    address: { city: "Бургас", street: "Александровска 12" },
    subjects: ["Физика", "Химия"],
    created_at: new Date()
  },
  {
    first_name: "Светла",
    last_name: "Иванова",
    birth_date: new Date("2010-12-30"),
    gender: "F",
    email: "ivanova@school.bg",
    class_id: 1,
    address: { city: "София", street: "Васил Левски 8" },
    subjects: ["Математика", "Информатика"],
    created_at: new Date()
  },
  {
    first_name: "Кристиян",
    last_name: "Петров",
    birth_date: new Date("2011-04-17"),
    gender: "M",
    email: "petrov@school.bg",
    class_id: 2,
    address: { city: "Русе", street: "Дунав 45" },
    subjects: ["История", "География"],
    created_at: new Date()
  },
  {
    first_name: "Виктория",
    last_name: "Георгиева",
    birth_date: new Date("2010-08-22"),
    gender: "F",
    email: "vgeorgieva@school.bg",
    class_id: 3,
    address: { city: "Варна", street: "Княз Борис I 15" },
    subjects: ["Английски", "Музика"],
    created_at: new Date()
  },
  {
    first_name: "Николай",
    last_name: "Димитров",
    birth_date: new Date("2011-02-14"),
    gender: "M",
    email: "ndimitrov@school.bg",
    class_id: 1,
    address: { city: "София", street: "Граф Игнатиев 3" },
    subjects: ["Физика", "Информатика"],
    created_at: new Date()
  }
]);

// 2. Колекция teachers (10 записа)
db.teachers.insertMany([
  {
    first_name: "Георги",
    last_name: "Георгиев",
    email: "georgiev@school.bg",
    subjects: ["Математика", "Физика"],
    address: { city: "Ботевград", street: "Цар Освободител 45" },
    years_experience: 10,
    classes: [1, 3],
    is_active: true
  },
  {
    first_name: "Елена",
    last_name: "Димитрова",
    email: "dimitrova@school.bg",
    subjects: ["Биология", "Химия"],
    address: { city: "Плевен", street: "Цар Шишман 15" },
    years_experience: 7,
    classes: [2, 4],
    is_active: true
  },
  {
    first_name: "Иван",
    last_name: "Петров",
    email: "ipetrov@school.bg",
    subjects: ["История", "География"],
    address: { city: "Русе", street: "Освобождение 5" },
    years_experience: 12,
    classes: [1, 2, 3],
    is_active: true
  },
  {
    first_name: "Мария",
    last_name: "Иванова",
    email: "mivanova@school.bg",
    subjects: ["Английски", "Немски"],
    address: { city: "Сандански", street: "Цар Освободител 15" },
    years_experience: 5,
    classes: [2, 3],
    is_active: true
  },
  {
    first_name: "Стоян",
    last_name: "Стоянов",
    email: "sstoyanov@school.bg",
    subjects: ["Информатика", "Технологии"],
    address: { city: "София", street: "Ботевградко шосе 5" },
    years_experience: 8,
    classes: [1, 3],
    is_active: true
  },
  {
    first_name: "Антоанета",
    last_name: "Николова",
    email: "anikolova@school.bg",
    subjects: ["Музика", "Изобразително изкуство"],
    address: { city: "Пловдив", street: "Петър Берон 4" },
    years_experience: 15,
    classes: [1, 2, 3],
    is_active: true
  },
  {
    first_name: "Васил",
    last_name: "Василев",
    email: "vvasilev@school.bg",
    subjects: ["ФВС", "Плажен волейбол"],
    address: { city: "София", street: "Дружба" },
    years_experience: 6,
    classes: [1, 2, 3],
    is_active: true
  },
  {
    first_name: "Пенка",
    last_name: "Пенкова",
    email: "ppenkova@school.bg",
    subjects: ["Български", "Литература"],
    address: { city: "София", street: "Аспарух 35" },
    years_experience: 20,
    classes: [1, 2, 3],
    is_active: true
  },
  {
    first_name: "Кирил",
    last_name: "Кирилов",
    email: "kkirilov@school.bg",
    subjects: ["Философия", "Психология"],
    address: { city: "София", street: "Цар Симеон 5" },
    years_experience: 9,
    classes: [3],
    is_active: true
  },
  {
    first_name: "Румяна",
    last_name: "Румянова",
    email: "rrumyanova@school.bg",
    subjects: ["Френски", "Испански"],
    address: { city: "София", street: "Ноември 5" },
    years_experience: 11,
    classes: [2, 3],
    is_active: true
  }
]);

// 3. Колекция classes (10 записа)
db.classes.insertMany([
  {
    class_id: 1,
    name: "5A",
    room: "101",
    head_teacher_id: 1,
    student_count: 25,
    schedule: {
      monday: ["Математика", "Български"],
      tuesday: ["Физика", "История"],
      wednesday: ["ФВС", "Английски"],
      thursday: ["Информатика", "Музика"],
      friday: ["Изобразително изкуство", "Литература"]
    }
  },
  {
    class_id: 2,
    name: "5B",
    room: "102",
    head_teacher_id: 2,
    student_count: 22,
    schedule: {
      monday: ["Биология", "Английски"],
      tuesday: ["Химия", "Музика"],
      wednesday: ["История", "ФВС"],
      thursday: ["География", "Литература"],
      friday: ["Математика", "Български"]
    }
  },
  {
    class_id: 3,
    name: "6A",
    room: "201",
    head_teacher_id: 3,
    student_count: 20,
    schedule: {
      monday: ["Информатика", "Физика"],
      tuesday: ["Английски", "Математика"],
      wednesday: ["Химия", "Биология"],
      thursday: ["История", "География"],
      friday: ["ФВС", "Музика"]
    }
  },
  {
    class_id: 4,
    name: "6B",
    room: "202",
    head_teacher_id: 4,
    student_count: 18,
    schedule: {
      monday: ["Френски", "Литература"],
      tuesday: ["Математика", "Физика"],
      wednesday: ["Български", "История"],
      thursday: ["Информатика", "Изобразително изкуство"],
      friday: ["Английски", "ФВС"]
    }
  },
  {
    class_id: 5,
    name: "7A",
    room: "301",
    head_teacher_id: 5,
    student_count: 24,
    schedule: {
      monday: ["Философия", "Психология"],
      tuesday: ["Математика", "Физика"],
      wednesday: ["Английски", "Информатика"],
      thursday: ["История", "География"],
      friday: ["ФВС", "Музика"]
    }
  },
  {
    class_id: 6,
    name: "7B",
    room: "302",
    head_teacher_id: 6,
    student_count: 19,
    schedule: {
      monday: ["Изобразително изкуство", "Музика"],
      tuesday: ["Биология", "Химия"],
      wednesday: ["Френски", "История"],
      thursday: ["Математика", "Физика"],
      friday: ["ФВС", "Литература"]
    }
  },
  {
    class_id: 7,
    name: "8A",
    room: "401",
    head_teacher_id: 7,
    student_count: 23,
    schedule: {
      monday: ["Информатика", "Математика"],
      tuesday: ["Английски", "География"],
      wednesday: ["Физика", "Химия"],
      thursday: ["История", "Български"],
      friday: ["ФВС", "Изобразително изкуство"]
    }
  },
  {
    class_id: 8,
    name: "8B",
    room: "402",
    head_teacher_id: 8,
    student_count: 21,
    schedule: {
      monday: ["Литература", "Български"],
      tuesday: ["Математика", "Информатика"],
      wednesday: ["Английски", "История"],
      thursday: ["География", "ФВС"],
      friday: ["Музика", "Изобразително изкуство"]
    }
  },
  {
    class_id: 9,
    name: "9A",
    room: "501",
    head_teacher_id: 9,
    student_count: 26,
    schedule: {
      monday: ["Физика", "Химия"],
      tuesday: ["Математика", "Български"],
      wednesday: ["Английски", "История"],
      thursday: ["Информатика", "География"],
      friday: ["ФВС", "Литература"]
    }
  },
  {
    class_id: 10,
    name: "9B",
    room: "502",
    head_teacher_id: 10,
    student_count: 20,
    schedule: {
      monday: ["Биология", "География"],
      tuesday: ["История", "Литература"],
      wednesday: ["Математика", "Физика"],
      thursday: ["Английски", "ФВС"],
      friday: ["Информатика", "Музика"]
    }
  }
]);

// 4. Колекция subjects (10 записа)
db.subjects.insertMany([
  {
    name: "Математика",
    code: "MATH",
    teacher_ids: [1, 5],
    classroom: { number: 5, floor: 3},
    hours_per_week: 4,
    is_elective: false
  },
  {
    name: "Биология",
    code: "BIO",
    teacher_ids: [2],
    classroom: { number: 12, floor: 1},
    hours_per_week: 3,
    is_elective: true,
    lab_required: true
  },
  {
    name: "История",
    code: "HIST",
    teacher_ids: [3],
    classroom: { number: 16, floor: 3},
    hours_per_week: 2,
    is_elective: false
  },
  {
    name: "Физика",
    code: "PHYS",
    teacher_ids: [1],
    classroom: { number: 54, floor: 2},
    hours_per_week: 3,
    is_elective: false,
    lab_required: true
  },
  {
    name: "Английски",
    code: "ENG",
    teacher_ids: [4, 10],
    classroom: { number: 7, floor: 4},
    hours_per_week: 3,
    is_elective: false
  },
  {
    name: "Химия",
    code: "CHEM",
    teacher_ids: [2],
    classroom: { number: 34, floor: 2},
    hours_per_week: 2,
    is_elective: true,
    lab_required: true
  },
  {
    name: "Информатика",
    code: "IT",
    teacher_ids: [5],
    classroom: { number: 8, floor: 4},
    hours_per_week: 2,
    is_elective: true
  },
  {
    name: "География",
    code: "GEO",
    teacher_ids: [3],
    classroom: { number: 15, floor: 3},
    hours_per_week: 2,
    is_elective: false
  },
  {
    name: "ФВС",
    code: "PE",
    teacher_ids: [7],
    classroom: { number: 6, floor: 1},
    hours_per_week: 2,
    is_elective: false
  },
  {
    name: "Музика",
    code: "MUS",
    teacher_ids: [6],
    classroom: { number: 11, floor: 4},
    hours_per_week: 1,
    is_elective: true
  }
]);

// 5. Колекция grades 
db.grades.insertMany([
  {
    student_id: 1,
    subject_id: 1,
    grade: 5.30,
    teacher_id: 1,
    date: new Date("2023-10-15"),
    semester: 1,
    comments: [{user: "Георги Иванов", text: "Добре!"}]
  },
  {
    student_id: 2,
    subject_id: 2,
    grade: 6.00,
    teacher_id: 2,
    date: new Date("2023-10-16"),
    semester: 1,
    comments: [{user: "Мария Татарова", text: "Браво!"}]
  },
  {
    student_id: 3,
    subject_id: 1,
    grade: 4.75,
    teacher_id: 1,
    date: new Date("2023-10-17"),
    semester: 1,
    comments: [{user: "Виктор Петков", text: "Учи повече!"}]
  },
  {
    student_id: 4,
    subject_id: 5,
    grade: 5.25,
    teacher_id: 4,
    date: new Date("2023-10-18"),
    semester: 1,
    comments: [{user: "Пламен Маринов", text: "Може и по-добре!"}]
  },
  {
    student_id: 5,
    subject_id: 2,
    grade: 5.75,
    teacher_id: 2,
    date: new Date("2023-10-19"),
    semester: 1,
    comments: [{user: "Преслав Николов", text: "Много добре!"}]
  },
  {
    student_id: 6,
    subject_id: 4,
    grade: 4.50,
    teacher_id: 1,
    date: new Date("2023-10-20"),
    semester: 1,
    comments: [{user: "Павел Панчев", text: "Лоша работа!"}]
  },
  {
    student_id: 7,
    subject_id: 1,
    grade: 5.90,
    teacher_id: 1,
    date: new Date("2023-10-21"),
    semester: 1,
    comments: [{user: "Марио Стойков" , text: "Отлична работа!"}]
  },
  {
    student_id: 8,
    subject_id: 3,
    grade: 5.00,
    teacher_id: 3,
    date: new Date("2023-10-22"),
    semester: 1,
    comments: [{user: "Питър Петров", text: "Не е зле!"}]
  },
  {
    student_id: 9,
    subject_id: 5,
    grade: 5.50,
    teacher_id: 4,
    date: new Date("2023-10-23"),
    semester: 1,
    comments: [{user: "Николета Шипкова", text: "Добре!"}]
  },
  {
    student_id: 10,
    subject_id: 4,
    grade: 5.00,
    teacher_id: 1,
    date: new Date("2023-10-24"),
    semester: 1,
    comments: [{user: "Никола Войнов", text: "Можеш повече!"}]
  }
]);
