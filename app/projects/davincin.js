// app/projects/davincin.js

export const davincinData = {

   // introduction
   introduction: {
    title: "AI CRM for Knowledge Workers Engaging and Analyzing ",      
    description: "An AI-powered CRM platform for knowledge workers, offering customized assistants to satisfy and analyze audience curiosity.",
    contentImageUrl: "/davincin-intro.png",
    websiteLink: "https://hommap.com",
  },


   // userStoryFeature
  userStoryFeature: {
    title: "User Story + Main Feature",
    description:
      "Name: John, 30 </br>Occupation: Knowledge Worker (CRM Manager)</br>Background: John is a 30-year-old CRM manager who wants to streamline client management tasks and improve client interactions through AI.",
    imageUrl: "/davincin-userstory.png",
  },

    // marketResearch
    marketResearch: {
      title: "Market Research",
      description:
        "The U.S. TAM for an AI-powered CRM platform targeting knowledge workers is $2 billion, based on 10 million professionals. The SAM focuses on the 30% actively engaging with their audience, valued at $600 million. The SOM, with a 5% short-term market capture, is estimated at $30 million.",
      imageUrl: "/davincin-market.png", // Replace with actual image path
      statistics: [
        { value: 200, label: 'per knowledge workers spend on this issues annually' }
      
      ]
    },

    // solution
    solution: {
      title: "Solutions",
      features: [
        {
          icon: '📋',
          name: 'Update Study List',
          impact: 5,
          urgency: 4,
          marketSize: 5,
          overall: 14
        },
        {
          icon: '🔄',
          name: 'AI Chat to data',
          impact: 4,
          urgency: 5,
          marketSize: 3,
          overall: 12
        },
        {
          icon: '🧠',
          name: 'Analyze Users’ Questions',
          impact: 3,
          urgency: 3,
          marketSize: 5,
          overall: 11
        },
        {
          icon: '💬',
          name: 'Paid Consultant',
          impact: 2,
          urgency: 5,
          marketSize: 4,
          overall: 11
        }
      ]
    },

  // branding
  branding: {
    title: "Branding",
    description: "The brand concept, inspired by Da Vinci to the nth power, is embodied in an hourglass-shaped logo, symbolizing efficient learning across disciplines through AI. Blue, the primary color, represents intelligent technology and innovation.",
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
    description: "hourglass-shaped logo, symbolizing efficient learning across disciplines through AI.",
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
    wideImageSrc: "/davincin-laptop.png",
    narrowImageSrc: "/davincin-mobile.png",
    cards: [
      {
        imageUrl: "/davincin-wireframe1.png",
        heading: "Heading",
      },
      {
        imageUrl: "/davincin-wireframe2.png",
        heading: "Two line header example",
        
      },
      {
        imageUrl: "/davincin-wireframe3.png",
        heading: "Heading",
        
      },
      {
        imageUrl: "/davincin-wireframe4.png",
        heading: "Two line header example cool",
        
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
    description: "Acceptance Criteria",
    steps: [
      { title: "Accuracy of AI Chat", description: "Knowledge workers can update their study list." },
      { title: "User Chat Experience", description: "AI chatbot can respond to audience questions using curated data." },
      { title: "Analysis", description: "Audience questions are analyzed, and insights are provided." },
      { title: "User Experience", description: "User Feedback, open ended interview questions will be conducted." },
    ]
  },
};
