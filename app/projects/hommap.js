// app/projects/hommap.js

import PlanPage from "../../components/PlanPage";

export const hommapData = {

    // introduction
    introduction: {
      title: "Solve your home allergy issues with data-driven interior design — starting with your address",      
      description: "Solving home allergy issues through first\n principles interior design, using data analysis and \nAI for a healthier living environment.",
      // imageUrl: "/hommap-intro-bkg.png",
      // backgroundColor: "#f0f8ff",
      // backgroundImageUrl: "/hommap-intro.png",
      contentImageUrl: "/hommap-intro.png",
      websiteLink: "https://hommap.com",
    },


     // userStoryFeature
    userStoryFeature: {
      title: "User Story + Main Feature",
      description:
        "Name: Sarah, 30</br>Occupation: Parent and First-Time Homebuyer</br>Background: Sarah is a 30-year-old parent focused on designing a new home that provides a healthier, allergen-free environment for her family.",
      imageUrl: "/hommap-userstory.png",
    },

      // marketResearch
      marketResearch: {
        title: "Market Research",
        description:
          "Taiwan’s allergy-focused market includes up to 2.7 million households (TAM), with a subset of 720,000 to 1.35 million households looking for smart home solutions (SAM). In the early stages, 7,200 to 67,500 households (SOM) can be realistically captured.",
        imageUrl: "/hommap-market.png", // Replace with actual image path
        statistics: [
          { value: 1500, label: 'per household spend on allergy issues' }
        ]
      },

      // solution
      solution: {
        title: "Solutions",
        features: [
          {
            icon: '📊',
            name: 'Historical Environment Data',
            impact: 5,
            urgency: 5,
            marketSize: 5,
            overall: 15
          },
          {
            icon: '🔄',
            name: 'Realtime Environment Data',
            impact: 4,
            urgency: 5,
            marketSize: 3,
            overall: 12
          },
          {
            icon: '🧠',
            name: 'AI Interior Suggestion',
            impact: 2,
            urgency: 4,
            marketSize: 5,
            overall: 11
          },
          {
            icon: '📋',
            name: 'Product Check List',
            impact: 3,
            urgency: 2,
            marketSize: 4,
            overall: 9
          }
        ]
      },

    // branding
    branding: {
      title: "Branding",
      description: "Hommap tackles home allergy issues through first principles interior design, leveraging data analysis and AI to create a healthier living environment. Green dominates the palette, representing clean energy and a commitment to health and well-being.",
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
      description: "The logo blends the imagery of a compass and a home, with smooth curves symbolizing harmony.",
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
      wideImageSrc: "/hommap-laptop.png",
      narrowImageSrc: "/hommap-mobile.png",
      cards: [
        {
          imageUrl: "/hommap-wireframe1.png",
          heading: "Heading",
        },
        {
          imageUrl: "/hommap-wireframe2.png",
          heading: "Two line header example",
        },
        {
          imageUrl: "/hommap-wireframe3.png",
          heading: "Heading",
        },
        {
          imageUrl: "/hommap-wireframe4.png",
          heading: "Two line header example cool",
        }
      ]
    },

    // tech
    tech: {
      title: "Tech",
      description: 
        "Develop a website to address home allergy issues through data analysis and AI, promoting a healthier living environment.",
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
