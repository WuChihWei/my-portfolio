// app/projects/davincin.js

export const davincinData = {

   // introduction
   introduction: {
    title: "AI CRM for Knowledge Workers Engaging and Analyzing ",      
    description: "An AI-powered CRM platform for knowledge workers, offering customized assistants to satisfy and analyze audience curiosity.",
    // imageUrl: "/hommap-intro-bkg.png",
    // backgroundColor: "#f0f8ff",
    backgroundImageUrl: "/davincin-intro.png",
    contentImageUrl: "/davincin-intro.png",
    websiteLink: "https://hommap.com",
  },


   // userStoryFeature
  userStoryFeature: {
    title: "User Story + Main Feature",
    description:
      "The U.S. TAM for an AI-powered CRM platform targeting knowledge workers is $2 billion, based on 10 million professionals. The SAM focuses on the 30% actively engaging with their audience, valued at $600 million. The SOM, with a 5% short-term market capture, is estimated at $30 million.",
    imageUrl: "/davincin-story.png",
  },

    // marketResearch
    marketResearch: {
      title: "Market Research",
      description:
        "The U.S. TAM for an AI-powered CRM platform targeting knowledge workers is $2 billion, based on 10 million professionals. The SAM focuses on the 30% actively engaging with their audience, valued at $600 million. The SOM, with a 5% short-term market capture, is estimated at $30 million.",
      imageUrl: "/davincin-market.png", // Replace with actual image path
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
          name: 'Historical Environment Data',
          impact: 2,
          urgency: 4,
          marketSize: 2,
          overall: 14
        },
        {
          icon: '🔄',
          name: 'Realtime Environment Data',
          impact: 2,
          urgency: 4,
          marketSize: 2,
          overall: 12
        },
        {
          icon: '🧠',
          name: 'AI Interior Design Suggestion',
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
    largeImageUrl: "/davincin-branding.png", // replace with actual path
    smallImages: [
      "/dacincin-brand1.png", 
      "/dacincin-brand2.png",
      "/dacincin-brand3.png"
      ] // replace with actual paths
    },

    // uiGuideline
  uiGuideline: {
    title: "UI Guideline",
    description: "Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.",
    images: [
      "/davincin-font.png",
      "/davincin-color.png",
    ], 
    backgroundColor: "#2563EB",
    logoImage: "/davincin-logo.png",
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
    imageUrl: "/davincin-architecture.png",
    backgroundColor: "#ffe4e1", // Example color for Davinci
    keyFeatures: [
      "Update Study List",
      "AI Chat to Data (Embedding)",
      "Analyze Users’ Questions",
      "Paid Consultant"
    ],
    userFlow: [
      "Knowledge worker updates their study list with current topics of interest.",
      "Audience members interact with the AI chat assistant, which responds using the study list and external data sources.",
      "The platform analyzes audience questions to identify patterns and trends, providing feedback to the knowledge worker.",
      "Audience members can pay for a one-on-one consultation through the paid consultant feature."
    ],
    apiAndData: [
      "Integration with external data sources for real-time updates in AI Chat.",
      "Database for storing and updating the knowledge worker’s study list and analyzing audience queries.",
      "Data analysis and AI suggestions powered by Python.",
      "Data analysis followers’ chat date powered by Python.",
      "Draw the analysis diagram with python."
    ]
  },

  // scrumPlan
  planPage: {
    imageUrl: "/davincin-plan.png",
  },

  // userTesting
  userTesting: {
    title: "User Testing",
    description: "Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.",
    steps: [
      { title: "Accuracy of AI Chat", description: "Knowledge workers can update their study list." },
      { title: "User Chat Experience", description: "AI chatbot can respond to audience questions using curated data." },
      { title: "Analysis", description: "Audience questions are analyzed, and insights are provided." },
      { title: "User Experience", description: "User Feedback, open ended interview questions will be conducted." },
    ]
  },
};
