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
      features: [
        { name: "Feature 1", icon: "⭐" },
        { name: "Feature 2", icon: "⭐" },
        { name: "Feature 3", icon: "⭐" },
        { name: "Feature 4", icon: "⭐" },
      ],
      imageUrl: "/hommap-intro-bkg.png", // Replace with the actual image path
    },

      // marketResearch
      marketResearch: {
        title: "Market Research",
        description:
          "The quality of today’s video game was not at all there when video game first conceptualized and played ever. During the formative years, video games were created by using various interactive electronic devices with various display.",
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
      largeImageUrl: "/hommap-branding.png", // replace with actual path
      smallImages: [
        "/path-to-small-image1.png",
        "/path-to-small-image2.png",
        "/path-to-small-image3.png"
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
      description: "Each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe.",
      steps: [
        { title: "Step 1", description: "Install the fixed mounts to keep the apparatus stable." },
        { title: "Step 2", description: "Install the fixed mounts to keep the apparatus stable." },
        { title: "Step 3", description: "Install the fixed mounts to keep the apparatus stable." },

      ]
    },
  };
