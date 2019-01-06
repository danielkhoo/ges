const sample = [
  {
    degree: 'Bachelor of Accountancy (Hons)',
    employment: 94.5,
    mean: 3121,
    median: 3000,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  },
  {
    degree:
      'Double Degree in Bachelor of Accountancy (Hons) and Bachelor of Business (Hons)',
    employment: 94.3,
    mean: 3830,
    median: 3500,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Business (Hons)',
    employment: 80.8,
    mean: 3530,
    median: 3300,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  },
  {
    degree:
      'Double Degree in Bachelor of Business (Hons) and Bachelor of Engineering (Hons) (Computer Science)',
    employment: 95.0,
    mean: 5036,
    median: 4750,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  },

  {
    degree: 'Bachelor of Engineering (Hons) (Aerospace Engineering)',
    employment: 75.0,
    mean: 3645,
    median: 3492,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Engineering (Hons) (Bioengineering)',
    employment: 65.2,
    mean: 3326,
    median: 3200,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree:
      'Bachelor of Engineering (Hons) (Chemical And Biomolecular Engineering)',
    employment: 75.3,
    mean: 3326,
    median: 3200,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Engineering (Hons) (Civil Engineering)',
    employment: 96.9,
    mean: 3373,
    median: 3300,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Engineering (Hons) (Computer Engineering)',
    employment: 87.8,
    mean: 3667,
    median: 3600,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Engineering (Hons) (Computer Science)',
    employment: 86.7,
    mean: 4078,
    median: 3750,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree:
      'Bachelor of Engineering (Hons) (Electrical & Electronic Engineering)',
    employment: 85.0,
    mean: 3532,
    median: 3500,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Engineering (Hons) (Environmental Engineering)',
    employment: 64.1,
    mean: 3538,
    median: 3475,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Engineering (Hons) (Information Engineering & Media)',
    employment: 78.7,
    mean: 3685,
    median: 3677,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Science (Hons) (Maritime Studies)',
    employment: 92.2,
    mean: 3279,
    median: 3200,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Engineering (Hons) (Materials Engineering)',
    employment: 75.6,
    mean: 3288,
    median: 3200,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Engineering (Hons) (Mechanical Engineering)',
    employment: 74.9,
    mean: 3422,
    median: 3300,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  },

  {
    degree: 'Bachelor of Fine Arts (Hons)',
    employment: 54.0,
    mean: 2862,
    median: 2800,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts (Hons) in Chinese',
    employment: 67.7,
    mean: 3119,
    median: 3300,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Communication Studies (Hons)',
    employment: 62.2,
    mean: 3134,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts (Hons) in Economics',
    employment: 75.5,
    mean: 3286,
    median: 3200,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts (Hons) in English',
    employment: 50.8,
    mean: 3042,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts (Hons) in History',
    employment: 68.4,
    mean: 3206,
    median: 3100,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },

  {
    degree: 'Bachelor of Arts (Hons) in Linguistics And Multilingual Studies',
    employment: 60.0,
    mean: 3042,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts (Hons) in Psychology',
    employment: 59.2,
    mean: 3107,
    median: 3107,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts (Hons) in Public Policy And Global Affairs',
    employment: 66.7,
    mean: 3353,
    median: 3300,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts (Hons) in Sociology',
    employment: 62.1,
    mean: 3263,
    median: 3200,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  },

  {
    degree:
      'Double Degree in Bachelor of Science (Hons) in Biomedical Sciences and Bachelor of Medicine (Chinese Medicine)',
    employment: 80.0,
    mean: 2722,
    median: 2928,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Science (Hons) in Biological Sciences',
    employment: 62.6,
    mean: 3177,
    median: 3100,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Science (Hons) in Chemistry & Biological Chemistry',
    employment: 51.1,
    mean: 3035,
    median: 3000,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Science (Hons) in Mathematical Sciences',
    employment: 79.5,
    mean: 3517,
    median: 3400,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Science (Hons) in Mathematics & Economics',
    employment: 83.1,
    mean: 3504,
    median: 3290,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Science (Hons) in Physics/Applied Physics',
    employment: 61.8,
    mean: 3367,
    median: 3300,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  },

  {
    degree: 'Bachelor of Science (Hons) (Sport Science & Management)',
    employment: 48.6,
    mean: 3372,
    median: 3285,
    group: 'NTU - Sport Science and Management',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Arts (Hons) (Education)',
    employment: 100.0,
    mean: 3489,
    median: 3600,
    group: 'National Institute of Education (NIE)',
    school: 'NTU'
  },
  {
    degree: 'Bachelor of Science (Hons) (Education)',
    employment: 100.0,
    mean: 3610,
    median: 3603,
    group: 'National Institute of Education (NIE)',
    school: 'NTU'
  },
  {
    degree: 'Accountancy',
    employment: 96.6,
    mean: 3569,
    median: 3000,
    group: 'SMU - School of Accountancy',
    school: 'SMU'
  },
  {
    degree: 'Accountancy (Cum Laude and above)',
    employment: 97.8,
    mean: 4037,
    median: 3200,
    group: 'SMU - School of Accountancy',
    school: 'SMU'
  },
  {
    degree: 'Business Management',
    employment: 85.7,
    mean: 3862,
    median: 3475,
    group: 'SMU - School of Business',
    school: 'SMU'
  },
  {
    degree: 'Business Management (Cum Laude and above)',
    employment: 92.0,
    mean: 4364,
    median: 3880,
    group: 'SMU - School of Business',
    school: 'SMU'
  },
  {
    degree: 'Economics',
    employment: 82.6,
    mean: 4013,
    median: 3600,
    group: 'SMU - School of Economics',
    school: 'SMU'
  },
  {
    degree: 'Economics (Cum Laude and above)',
    employment: 90.5,
    mean: 4591,
    median: 4000,
    group: 'SMU - School of Economics',
    school: 'SMU'
  },
  {
    degree: 'Information Systems Management',
    employment: 91.3,
    mean: 3922,
    median: 3905,
    group: 'SMU - School of Information Systems',
    school: 'SMU'
  },
  {
    degree: 'Information Systems Management (Cum Laude and above)',
    employment: 94.1,
    mean: 4211,
    median: 4334,
    group: 'SMU - School of Information Systems',
    school: 'SMU'
  },
  {
    degree: 'Social Sciences',
    employment: 78.0,
    mean: 3344,
    median: 3250,
    group: 'SMU - School of Social Sciences',
    school: 'SMU'
  },
  {
    degree: 'Social Sciences (Cum Laude and above)',
    employment: 81.8,
    mean: 3810,
    median: 3600,
    group: 'SMU - School of Social Sciences',
    school: 'SMU'
  },
  {
    degree: 'Law',
    employment: 94.0,
    mean: 4778,
    median: 4500,
    group: 'SMU - School of Social Sciences',
    school: 'SMU'
  },
  {
    degree: 'Law (Cum Laude and above)',
    employment: 97.9,
    mean: 5163,
    median: 5450,
    group: 'SMU - School of Social Sciences',
    school: 'SMU'
  }
];
export default sample;
