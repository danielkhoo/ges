const sample = [
  {
    degree: 'Bachelor of Arts',
    employment: 56.6,
    mean: 3169,
    median: 3070,
    group: 'NUS - Faculty of Arts & Social Sciences',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Arts (Hons)',
    employment: 60.8,
    mean: 3290,
    median: 3300,
    group: 'NUS - Faculty of Arts & Social Sciences',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Social Science',
    employment: 74.5,
    mean: 3459,
    median: 3400,
    group: 'NUS - Faculty of Arts & Social Sciences',
    school: 'NUS'
  },

  {
    degree: 'Bachelor of Dental Surgery',
    employment: 100.0,
    mean: 4148,
    median: 4050,
    group: 'NUS - Faculty Of Dentistry',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Biomedical Engineering)',
    employment: 69.8,
    mean: 3357,
    median: 3300,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Chemical Engineering)',
    employment: 84.1,
    mean: 3768,
    median: 3700,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Civil Engineering)',
    employment: 89.8,
    mean: 3520,
    median: 3500,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Electrical Engineering)',
    employment: 83.4,
    mean: 3712,
    median: 3600,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Engineering Science) (2017)',
    employment: 64.7,
    mean: 3783,
    median: 3600,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Environmental Engineering)',
    employment: 74.6,
    mean: 3411,
    median: 3300,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Industrial and Systems Engineering)',
    employment: 87.8,
    mean: 3889,
    median: 3800,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Materials Science And Engineering)',
    employment: 86.4,
    mean: 3550,
    median: 3600,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Mechanical Engineering)',
    employment: 86.9,
    mean: 3684,
    median: 3500,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Laws',
    employment: 92.6,
    mean: 5070,
    median: 5000,
    group: 'NUS - Faculty of Law',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science',
    employment: 47.2,
    mean: 3146,
    median: 3000,
    group: 'NUS - Faculty of Science',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science (Hons)',
    employment: 72.8,
    mean: 3371,
    median: 3300,
    group: 'NUS - Faculty of Science',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science (Pharmacy)',
    employment: 93.2,
    mean: 3549,
    median: 3500,
    group: 'NUS - Faculty of Science',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Business Administration',
    employment: 84.8,
    mean: 3633,
    median: 3150,
    group: 'NUS Business School',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Business Administration (Hons)',
    employment: 90.9,
    mean: 4286,
    median: 3800,
    group: 'NUS Business School',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Business Administration (Accountancy)',
    employment: 95.2,
    mean: 3209,
    median: 3000,
    group: 'NUS Business School',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Business Administration (Accountancy) (Hons)',
    employment: 95.3,
    mean: 3643,
    median: 3100,
    group: 'NUS Business School',
    school: 'NUS'
  },

  {
    degree: 'Bachelor of Computing (Computer Science)',
    employment: 91.8,
    mean: 4577,
    median: 4280,
    group: 'NUS - School of Computing',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Computing (Information Systems)',
    employment: 95.3,
    mean: 4338,
    median: 4375,
    group: 'NUS - School of Computing',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science (Business Analytics)',
    employment: 93.5,
    mean: 4432,
    median: 4400,
    group: 'NUS - School of Computing',
    school: 'NUS'
  },

  {
    degree: 'Bachelor of Arts (Architecture) (2017)',
    employment: 86.4,
    mean: 4037,
    median: 4000,
    group: 'NUS - School of Design and Environment',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Arts (Industrial Design)',
    employment: 69.6,
    mean: 3309,
    median: 3200,
    group: 'NUS - School of Design and Environment',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science (Project and Facilities Management)',
    employment: 84.6,
    mean: 3189,
    median: 3040,
    group: 'NUS - School of Design and Environment',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science (Real Estate)',
    employment: 85.1,
    mean: 3295,
    median: 3300,
    group: 'NUS - School of Design and Environment',
    school: 'NUS'
  },

  {
    degree: 'Bachelor of Medicine And Bachelor Of Surgery (2017)',
    employment: 100.0,
    mean: 4367,
    median: 4500,
    group: 'NUS - Yong Loo Lin School (Medicine)',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science (Nursing)',
    employment: 94.6,
    mean: 3230,
    median: 3250,
    group: 'NUS - Yong Loo Lin School (Medicine)',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science (Nursing) (Hons)',
    employment: 98,
    mean: 3306,
    median: 3350,
    group: 'NUS - Yong Loo Lin School (Medicine)',
    school: 'NUS'
  },

  {
    degree: 'Bachelor of Music',
    employment: 23.8,
    mean: 2000,
    median: 1750,
    group: 'NUS - YST Conservatory Of Music',
    school: 'NUS'
  },

  {
    degree: 'Bachelor of Arts with Honours (Yale-NUS)',
    employment: 81.1,
    mean: 4283,
    median: 3600,
    group: 'Yale-NUS College',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Science with Honours (Yale-NUS)',
    employment: 78.9,
    mean: 5017,
    median: 4800,
    group: 'Yale-NUS College',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Engineering (Computer Engineering)',
    employment: 84.3,
    mean: 4105,
    median: 3800,
    group: 'NUS - Multi-Disciplinary Programme',
    school: 'NUS'
  },
  {
    degree: 'Bachelor of Environmental Studies',
    employment: 55.3,
    mean: 3371,
    median: 3414,
    group: 'NUS - Multi-Disciplinary Programme',
    school: 'NUS'
  },
  {
    degree: 'Accountancy ',
    employment: 92.2,
    mean: 3214,
    median: 3000,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  },
  {
    degree: 'Double Degree in Accountancy and Business',
    employment: 97.7,
    mean: 4391,
    median: 4000,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  },
  {
    degree: 'Business',
    employment: 84.3,
    mean: 3646,
    median: 3500,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  },
  {
    degree: 'Double Degree in Business and Computing',
    employment: 100.0,
    mean: 4536,
    median: 4450,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  },

  {
    degree: 'Aerospace Engineering',
    employment: 88.4,
    mean: 3710,
    median: 3625,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bioengineering',
    employment: 66.2,
    mean: 3457,
    median: 3500,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Chemical And Biomolecular Engineering',
    employment: 86.0,
    mean: 3461,
    median: 3500,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Civil Engineering',
    employment: 96.5,
    mean: 3521,
    median: 3400,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Computer Engineering',
    employment: 95.8,
    mean: 3749,
    median: 3700,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Computer Science',
    employment: 93.0,
    mean: 3970,
    median: 3800,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Electrical & Electronic Engineering',
    employment: 91.0,
    mean: 3625,
    median: 3500,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Environmental Engineering',
    employment: 81.6,
    mean: 3388,
    median: 3360,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Information Engineering & Media',
    employment: 89.0,
    mean: 3724,
    median: 3725,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Maritime Studies',
    employment: 90.0,
    mean: 3351,
    median: 3300,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Materials Engineering',
    employment: 81.9,
    mean: 3457,
    median: 3400,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Mechanical Engineering',
    employment: 81.1,
    mean: 3448,
    median: 3500,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },

  {
    degree: 'Art, Design and Media',
    employment: 53.8,
    mean: 2930,
    median: 2800,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Chinese',
    employment: 76.3,
    mean: 3149,
    median: 3150,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Communication Studies',
    employment: 84.2,
    mean: 3085,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Economics',
    employment: 84.0,
    mean: 3604,
    median: 3500,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'English',
    employment: 59.2,
    mean: 3051,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'History',
    employment: 56.4,
    mean: 3593,
    median: 3500,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },

  {
    degree: 'Linguistics And Multilingual Studies',
    employment: 45.8,
    mean: 3074,
    median: 3200,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Philosophy',
    employment: 76.0,
    mean: 3031,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Psychology',
    employment: 78.0,
    mean: 3316,
    median: 3300,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Public Policy And Global Affairs',
    employment: 71.0,
    mean: 3501,
    median: 3350,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Sociology',
    employment: 60.4,
    mean: 3275,
    median: 3175,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Biological Sciences',
    employment: 67.0,
    mean: 3232,
    median: 3200,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Double Degree in Biomedical Sciences and Chinese Medicine',
    employment: 81.8,
    mean: 2941,
    median: 3000,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Chemistry and Biological Chemistry',
    employment: 63.9,
    mean: 3205,
    median: 3167,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Environmental Earth Systems Science',
    employment: 57.1,
    mean: 3347,
    median: 3440,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Mathematical Sciences',
    employment: 75.9,
    mean: 3661,
    median: 3600,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Mathematics and Economics',
    employment: 83.3,
    mean: 3481,
    median: 3500,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Physics and Applied Physics',
    employment: 74.1,
    mean: 3468,
    median: 3300,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },

  {
    degree: 'Sport Science & Management',
    employment: 61.1,
    mean: 3172,
    median: 3200,
    group: 'NTU - Sport Science and Management',
    school: 'NTU'
  },
  {
    degree: 'Arts (With Education)',
    employment: 99.2,
    mean: 3618,
    median: 3750,
    group: 'National Institute of Education (NIE)',
    school: 'NTU'
  },
  {
    degree: 'Science (With Education)',
    employment: 100.0,
    mean: 3600,
    median: 3800,
    group: 'National Institute of Education (NIE)',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts in Game Design  (2017)',
    employment: 92.3,
    mean: 3040,
    median: 3000,
    group: 'DigiPen Institute of Technology',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Fine Arts in Digital Arts & Animation (2017)',
    employment: 69.2,
    mean: 2859,
    median: 2825,
    group: 'DigiPen Institute of Technology',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Science in Computer Science & Game Design (2017)',
    employment: 100.0,
    mean: 3232,
    median: 3250,
    group: 'DigiPen Institute of Technology',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Science in Computer Science in Real- Time Interactive Simulation  (2017)',
    employment: 90.6,
    mean: 3898,
    median: 3800,
    group: 'DigiPen Institute of Technology',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Arts with Honours in Communication Design (2017)',
    employment: 68.5,
    mean: 2819,
    median: 2600,
    group: 'The Glasgow School of Art',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Arts with Honours in Interior Design (2017)',
    employment: 87.2,
    mean: 2818,
    median: 2700,
    group: 'The Glasgow School of Art',
    school: 'SIT'
  },

  {
    degree: 'Bachelor of Engineering with Honours in Chemical Engineering (2017)',
    employment: 62.1,
    mean: 3061,
    median: 3100,
    group: 'Newcastle University',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Engineering with Honours in Electrical Power Engineering (2017)',
    employment: 88.9,
    mean: 3191,
    median: 3200,
    group: 'Newcastle University',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Engineering with Honours in Marine Engineering (2017)',
    employment: 88.5,
    mean: 3461,
    median: 3300,
    group: 'Newcastle University',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Engineering with Honours in Mechanical Design & Manufacturing Engineering (2017)',
    employment: 85.7,
    mean: 3063,
    median: 3000,
    group: 'Newcastle University',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Engineering with Honours in Naval Architecture (2017)',
    employment: 95.5,
    mean: 3451,
    median: 3300,
    group: 'Newcastle University',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Engineering with Honours in Offshore Engineering (2017)',
    employment: 86.7,
    mean: 3792,
    median: 3300,
    group: 'Newcastle University',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Science with Honours in Food & Human Nutrition (2017)',
    employment: 79.1,
    mean: 2784,
    median: 2600,
    group: 'Newcastle University',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Science in Chemical Engineering (2017)',
    employment: 74.1,
    mean: 3061,
    median: 3000,
    group: 'Technische Universität München',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Science in Electrical Engineering & Information Technology (2017)',
    employment: 82.8,
    mean: 3504,
    median: 3175,
    group: 'Technische Universität München',
    school: 'SIT'
  },

  {
    degree: 'Bachelor of Professional Studies in Culinary Arts Management (2017)',
    employment: 54.4,
    mean: 2357,
    median: 2300,
    group: 'The Culinary Institute of America',
    school: 'SIT'
  },
  {
    degree: 'Bachelor in Science (Occupational Therapy) (2017)',
    employment: 97.1,
    mean: 3217,
    median: 3250,
    group: 'Singapore Institute of Technology - Trinity College Dublin / Trinity College Dublin',
    school: 'SIT'
  },
  {
    degree: 'Bachelor in Science (Physiotherapy) (2017)',
    employment: 96.8,
    mean: 3483,
    median: 3350,
    group: 'Singapore Institute of Technology - Trinity College Dublin / Trinity College Dublin',
    school: 'SIT'
  },

  {
    degree: 'Bachelor of Engineering with Honours in Aeronautical Engineering (2017)',
    employment: 65.6,
    mean: 3367,
    median: 3100,
    group: 'University of Glasgow',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Engineering with Honours in Aerospace Systems (2017)',
    employment: 52.5,
    mean: 3207,
    median: 3125,
    group: 'University of Glasgow',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Engineering with Honours in Mechanical Design Engineering (2017)',
    employment: 87.9,
    mean: 3608,
    median: 3100,
    group: 'University of Glasgow',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Engineering with Honours in Mechatronics (2017)',
    employment: 86.5,
    mean: 3412,
    median: 3050,
    group: 'University of Glasgow',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Science with Honours in Computing Science (2017)',
    employment: 85.9,
    mean: 3633,
    median: 3600,
    group: 'University of Glasgow',
    school: 'SIT'
  },

  {
    degree: 'Bachelor of Science with Honours in Nursing Practice (2017)',
    employment: 96.5,
    mean: 3507,
    median: 3400,
    group: 'University of Manchester',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Arts with Honours in Criminology and Security (2017)',
    employment: 69.5,
    mean: 3759,
    median: 3800,
    group: 'University of Liverpool',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Science in Early Childhood Education (2017)',
    employment: 92.9,
    mean: 2883,
    median: 2900,
    group: 'Wheelock College',
    school: 'SIT'
  },
  {
    degree: 'Bachelor of Accountancy with Honours (2017)',
    employment: 92.1,
    mean: 3073,
    median: 3050,
    group: 'Singapore Institute of Technology',
    school: 'SIT'
  },
  {
    degree: ' Bachelor of Hospitality Business with Honours (2017)',
    employment: 84.2,
    mean: 2713,
    median: 2700,
    group: 'Singapore Institute of Technology',
    school: 'SIT'
  }
];
export default sample;
