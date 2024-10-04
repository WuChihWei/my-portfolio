// app/projects/superfake.js

export const superfakeData = {
  
 // introduction
 introduction: {
  title: "Discover, Create, and Share - an exclusive content lab for AI creators",      
  description: "For AI creators, find creative inspiration from\n the daily trending topics.\nShare and explore AI-generated content\n with. a global community.",
  // imageUrl: "/hommap-intro-bkg.png",
  // backgroundColor: "#f0f8ff",
  // backgroundImageUrl: "/super-intro.png",
  contentImageUrl: "/super-intro.png",
  websiteLink: "https://hommap.com",
},


 // userStoryFeature
userStoryFeature: {
  title: "User Story + Main Feature",
  description:
    "Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.",
  imageUrl: "/super-story.png",
},

  // marketResearch
  marketResearch: {
    title: "Market Research",
    description:
      "The U.S. TAM for an AI creator platform is $1 billion, covering all content creators. SAM focuses on AI-driven creators, worth $150 million. SOM, the realistic short-term market capture, is estimated at $4.5 million with 3% market penetration.",
    imageUrl: "/super-market.png", // Replace with actual image path
    statistics: [
      { value: 100, label: 'per AI creator spend on this service annually' }
    ]
  },

  // solution
  solution: {
    title: "Solutions",
    features: [
      {
        icon: '📊',
        name: 'Trendy Ideas Resource',
        impact: 4,
        urgency: 4,
        marketSize: 5,
        overall: 13
      },
      {
        icon: '🔄',
        name: 'Only For AI Posts',
        impact: 5,
        urgency: 4,
        marketSize: 3,
        overall: 12
      },
      {
        icon: '🧠',
        name: 'AI Tools Compare Visualized UI',
        impact: 4,
        urgency: 4,
        marketSize: 3,
        overall: 11
      },
      {
        icon: '📋',
        name: 'Share Works',
        impact: 3,
        urgency: 4,
        marketSize: 3,
        overall: 10
      }
    ]
  },

// branding
branding: {
  title: "Branding",
  description: "The branding evokes a mysterious, psychedelic atmosphere with theatrical design and ironic humor.",
  iconUrl: "/path-to-icon.png", // replace with actual path
  largeImageUrl: "/super-branding.png", // replace with actual path
  smallImages: [
    "/super-brand1.png",
    "/super-brand2.png",
    "/super-brand3.png"
    ] // replace with actual paths
  },

  // uiGuideline
uiGuideline: {
  title: "UI Guideline",
  description: "Dominated by purple, it sparks intrigue and creative exploration, while playful, surreal imagery invites users into a limitless world of AI-driven creativity.",
  images: [
    "/super-font.png",
    "/super-color.png",
  ], 
  backgroundColor: "#735AA9",
  logoImage: "/super-logo.png",
},

// wireframeUIs
wireframeUIs:{
  title: "Wireframe + UIs",
  wideImageSrc: "/super-laptop.png",
  narrowImageSrc: "/super-mobile.png",
  cards: [
    {
      imageUrl: "/super-wireframe1.png",
      heading: "Heading",
    },
    {
      imageUrl: "/super-wireframe2.png",
      heading: "Two line header example",
    },
    {
      imageUrl: "/super-wireframe3.png",
      heading: "Heading",
    },
    {
      imageUrl: "/super-wireframe4.png",
      heading: "Two line header example cool",
    },
    {
      imageUrl: "/super-wireframe5.png",
      heading: "Two line header example cool",
    },
    {
      imageUrl: "/super-wireframe6.png",
      heading: "Two line header example cool",
    }
  ]
},

// tech
tech: {
  title: "Tech",
  description: 
    "Create a platform for AI creators to find inspiration from trending topics, share AI-generated content, and engage with a global AI-focused community.",
  imageUrl: "/super-tech.png",
  backgroundColor: "#ffe4e1", // Example color for Davinci
  keyFeatures: [
    "Access daily trending topics to inspire AI-generated content.",
    "A platform exclusively for AI-generated content, separating it from other types of posts.",
    "Compare different AI tools and platforms to help creators choose the best options.",
    "A user-friendly, visually-driven interface designed for seamless exploration of AI content."
  ],
  userFlow: [
    "User logs in and views daily trending topics under the “Trendy Ideas Resource.",
    "User selects a topic for inspiration and creates AI-generated content.",
    "User explores AI-generated content using the platform’s visualized, intuitive UI for easy engagement."
  ],
  apiAndData: [
    "Integration with APIs for trending topics (e.g., Google Trends, Twitter API) to pull in real-time data.",
    "API integration for data on popular AI tools (e.g., features, pricing, user ratings).",
    "Frontend: React for dynamic UI, with visualized content and interactions.",
    "Backend: Node.js with Firebase for real-time updates, data storage, and user authentication.",
  ]
},

// scrumPlan
planPage: {
  imageUrl: "/super-plan.png",
},

// userTesting
userTesting: {
  title: "User Testing",
  description: "Acceptance Criteria",
  steps: [
    { title: "Trendy Inspiration", description: "Users can browse trending topics and compare AI tools." },
    { title: "Community", description: "Users can post and explore AI-generated content exclusively." },
    { title: "System Stability", description: "System is stable, with no critical bugs affecting performance or usability." },
    { title: "User Experience", description: "User Feedback, open ended interview questions will be conducted." },
  ]
},
};
