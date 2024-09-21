// app/projects/superfake.js

export const superfakeData = {
  
 // introduction
 introduction: {
  title: "Discover, Create, \nand Share AI-Driven\n Inspiration",      
  description: "For AI creators, find creative inspiration from\n the daily trending topics.\nShare and explore AI-generated content\n with. a global community.",
  // imageUrl: "/hommap-intro-bkg.png",
  // backgroundColor: "#f0f8ff",
  backgroundImageUrl: "/super-intro.png",
  contentImageUrl: "/hommap-landing-laptop.png",
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
      "The quality of today’s video game was not at all there when video game first conceptualized and played ever. During the formative years, video games were created by using various interactive electronic devices with various display.",
    imageUrl: "/super-market.png", // Replace with actual image path
    statistics: [
      { value: 100, label: 'Total Users' },
      { value: 50, label: 'Active Users' },
      { value: 25, label: 'New Users' },
    ]
  },

  // solution
  solution: {
    title: "Solutions",
    features: [
      {
        icon: '📊',
        name: 'Trendy Ideas Resource',
        impact: 2,
        urgency: 4,
        marketSize: 2,
        overall: 14
      },
      {
        icon: '🔄',
        name: 'Only For AI Posts',
        impact: 2,
        urgency: 4,
        marketSize: 2,
        overall: 12
      },
      {
        icon: '🧠',
        name: 'AI Tools Compare Visualized UI',
        impact: 2,
        urgency: 4,
        marketSize: 2,
        overall: 11
      },
      {
        icon: '📋',
        name: 'Product Check List',
        impact: 2,
        urgency: 4,
        marketSize: 2,
        overall: 8
      }
    ]
  },

// branding
branding: {
  title: "Branding",
  description: "Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.",
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
  description: "Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.",
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
  wideImageSrc: "/laptop-frame.png",
  narrowImageSrc: "/iphone-frame.png",
  cards: [
    {
      imageUrl: "/path-to-image1.png",
      date: "01 May 2020",
      heading: "Heading",
      description: "Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    },
    {
      imageUrl: "/path-to-image2.png",
      date: "01 May 2020",
      heading: "Two line header example",
      description: "Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    },
    {
      imageUrl: "/path-to-image3.png",
      date: "01 May 2020",
      heading: "Heading",
      description: "Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    },
    {
      imageUrl: "/path-to-image4.png",
      date: "01 May 2020",
      heading: "Two line header example cool",
      description: "Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.",
    }
  ]
},

// tech
tech: {
  title: "Tech",
  description: 
    "You will likely be required to install the fixed mounts. These are what will keep the apparatus stable and secure with your computer monitor in it. Follow directions carefully so that you can be sure to get everything.",
  imageUrl: "/super-architecture.png",
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
  description: "Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.",
  steps: [
    { title: "Step 1", description: "Install the fixed mounts to keep the apparatus stable." },
    { title: "Step 2", description: "Install the fixed mounts to keep the apparatus stable." },
    { title: "Step 3", description: "Install the fixed mounts to keep the apparatus stable." },

  ]
},
};
