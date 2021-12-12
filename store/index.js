export const state = () => ({
  drawer: false,
  notifications: false,
  courses: [{
    name: 'Calculus I Supplements',
    type: 'academic',
    description: 'Simple practice papers and tutoring for students taking basic calculus'
  }, {
    name: 'Calculus II Supplements',
    type: 'academic',
    description: 'Practice papers and reinforced learning of more advanced calculus'
  }, {
    name: 'Calculus III Supplements',
    type: 'academic',
    description: 'Practice papers of very advanced calculus'
  }, {
    name: 'Calculus IV Supplements',
    type: 'academic',
    description: 'University level calculus'
  }, {
    name: 'Calculus V Supplements',
    type: 'academic',
    description: 'Listen to our PhD in Integration on his newest research'
  }, {
    name: 'Simple Physics',
    type: 'academic',
    description: 'Helps the child learn about forces'
  }, {
    name: 'Advanced Physics',
    type: 'academic',
    description: 'Helps the child grasp concepts related to quantum better'
  }, {
    name: '作文辅导',
    type: 'academic',
    description: '帮助您的孩子写出漂亮的文字'
  }, {
    name: 'Beginner in Piano',
    type: 'arts',
    description: ''
  }, {
    name: 'Intermediate Piano',
    type: 'arts',
    description: ''
  }, {
    name: 'Master in Piano',
    type: 'arts',
    description: ''
  }, {
    name: 'Violin Beginner Class',
    type: 'arts',
    description: ''
  }, {
    name: 'Violin Intermediate Class',
    type: 'arts',
    description: ''
  }, {
    name: 'Violin Advanced Class',
    type: 'arts',
    description: ''
  }, {
    name: 'Violin Master Class',
    type: 'arts',
    description: ''
  }, {
    name: 'Introduction to Programming: Python',
    type: 'academic',
    description: 'Help your child learn better with computational thinking'
  }, {
    name: 'Football',
    type: 'fun',
    description: 'Sponsored by local Football Club: "Balls Kicking"'
  }, {
    name: 'Swimming',
    type: 'fun',
    description: 'Prevent unhappy accidents if your child fall into deep water puddles'
  }, {
    name: 'SMO Practice',
    type: 'academic',
    description: '2004-2016 Papers'
  }, {
    name: 'SPhO Practice',
    type: 'academic',
    description: '2008-2016 Papers'
  }, {
    name: 'Speech Skills',
    type: 'holistic',
    description: 'Speaking? Confidence problems? Make your child a bright and confident speaker today, with our easy to learn and instantly effective course!'
  }, {
    name: 'Cooking Skills',
    type: 'holistic',
    description: 'Simple cooking related skills'
  }],
  children: [
    {
      name: "Su Liling",
      age: 17,
      courses: [{
        name: "Calculus I Supplements",
        type: "academic",
        cap: 4,
        progress: 1,
        motivation: 6
      }, {
        name: "Calculus II Supplements",
        type: "academic",
        cap: 2.5,
        progress: 0.4,
        motivation: 3
      }, {
        name: "Advanced Physics",
        type: "academic",
        cap: 1.9,
        progress: 0.4,
        motivation: 2
      }, {
        name: "作文辅导",
        type: "academic",
        cap: 4.0,
        progress: 0.8,
        motivation: 6
      }, {
        name: "Beginner in Piano",
        type: "arts",
        cap: 4.5,
        progress: 0.9,
        motivation: 8
      }, {
        name: "Violin Master Class",
        type: "arts",
        cap: null,
        progress: 0.1,
        motivation: 10
      }, {
        name: "Violin Beginner Class",
        type: "arts",
        cap: 5,
        progress: 1,
        motivation: 7
      }, {
        name: "Violin Intermediate Class",
        type: "arts",
        cap: 4.8,
        progress: 1,
        motivation: 8
      }, {
        name: "Violin Advanced Class",
        type: "arts",
        cap: 5,
        progress: 1,
        motivation: 9
      }]
    },
    {
      name: "Su Aotian",
      age: 12,
      courses: [{
        name: "Introduction to Programming: Python",
        type: "academic",
        cap: 5,
        progress: 0.1,
        motivation: 10
      }, {
        name: "Football",
        type: "fun",
        progress: 0.5,
        motivation: 10
      }, {
        name: "Swimming",
        type: "fun",
        progress: 0.5,
        motivation: 10
      }]
    },
    {
      name: "Su Congming",
      age: 16,
      courses: [{
        name: "SMO Practice",
        type: "academic",
        progress: 0.69
      }, {
        name: "SPhO Practice",
        type: "academic",
        progress: 0.69
      }, {
        name: "Beginner in Piano",
        type: "arts",
        cap: 5,
        progress: 0.9
      }, {
        name: "Speech Skills",
        type: "holistic",
        progress: 0.1,
        motivation: 0
      }]
    }
  ]
})

export const mutations = {
  setDrawer(state, drawer) {
    state.drawer = drawer;
  },
  setNotifications(state, notifications) {
    state.notifications = notifications;
  }
}
