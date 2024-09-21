// app/projects/hommap.js

import PlanPage from "../../components/PlanPage";

export const hommapData = {

    // introduction
    introduction: {
      title: "Allergy First\nPrinciple Solution\nwith just an Address",      
      description: "Solving home allergy issues through first\n principles interior design, using data analysis and \nAI for a healthier living environment.",
      // imageUrl: "/hommap-intro-bkg.png",
      // backgroundColor: "#f0f8ff",
      backgroundImageUrl: "/hommap-intro-bkg.png",
      contentImageUrl: "/hommap-landing-laptop.png",
      websiteLink: "https://hommap.com",
    },


     // userStoryFeature
    userStoryFeature: {
      title: "User Story + Main Feature",
      description:
        "Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.",
      imageUrl: "/hommap-userstory.png",
    },

      // marketResearch
      marketResearch: {
        title: "Market Research",
        description:
          "Taiwan’s allergy-focused market includes up to 2.7 million households (TAM), with a subset of 720,000 to 1.35 million households looking for smart home solutions (SAM). In the early stages, 7,200 to 67,500 households (SOM) can be realistically captured.",
        imageUrl: "/hommap-market.png", // Replace with actual image path
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
            name: 'Update Study List',
            impact: 2,
            urgency: 4,
            marketSize: 2,
            overall: 14
          },
          {
            icon: '🔄',
            name: 'AI Chat to data',
            impact: 2,
            urgency: 4,
            marketSize: 2,
            overall: 12
          },
          {
            icon: '🧠',
            name: 'Analyze Users’ Questions',
            impact: 2,
            urgency: 4,
            marketSize: 2,
            overall: 11
          },
          {
            icon: '📋',
            name: 'Paid Consultant',
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
      largeImageUrl: "/hommap-branding.png", // replace with actual path
      smallImages: [
        "/hommap-branding-1.png",
        "/hommap-branding-2.png",
        "/hommap-branding-3.png"
        ] // replace with actual paths
      },

      // uiGuideline
    uiGuideline: {
      title: "UI Guideline",
      description: "Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card.",
      images: [
        "/hommap-font.png",
        "/hommap-color.png",
      ], 
      backgroundColor: "#199B4D",
      logoImage: "/hommap-logo.png",
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
      imageUrl: "/hommap-architecture.png",
      backgroundColor: "#ffe4e1", // Example color for Davinci
      keyFeatures: [
        "Local Historical Environment Data",
        "Local Real-time Environment Data",
        "AI-Based Interior Design Suggestions",
        "Product Checklist (based on AI suggestions)"
      ],
      userFlow: [
        "User inputs location to view local historical and real-time environmental data.",
        "AI analyzes the data and provides interior design suggestions to reduce allergies.",
        "Based on AI advice, a product checklist is generated for the user."
      ],
      apiAndData: [
        "Integrate local environment data APIs (historical and real-time).",
        "Use AI models to process data and generate design suggestions.",
        "Data analysis and AI suggestions powered by Python.",
        "Frontend built with React and Next.js.",
        "Data analysis and AI suggestions powered by Python."
      ]
    },

    // scrumPlan
    planPage: {
      imageUrl: "/hommap-plan.png",
    },

    // userTesting
    userTesting: {
      title: "User Testing",
      description: "Acceptance Criteria",
      steps: [
        { title: "Data Accuracy", description: "Users can view local historical and real-time data." },
        { title: "AI Accuracy", description: "AI successfully generates interior design suggestions." },
        { title: "Product List Accuracy", description: "Product checklist reflects the AI suggestions." },
        { title: "User Experience", description: "User Feedback, open ended interview questions will be conducted."},

      ]
    },
  };
