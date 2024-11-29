// app/longProjects/comgora.js

import { background } from "@chakra-ui/react";

const accessibility = {
    introduction: {
      title: "Adaptive Web Design for Aging Eyes: An AI-Driven Approach",
      description: "This thesis focuses on improving web accessibility for individuals over 40 with age-related visual impairments, using AI to create adaptive interfaces.",
      imageUrl: "/thesis_hero.png"
    },
  
    introCards: [
      {
        title: "Responsibilities",
        description: [
          "User Experience Design",
          "User Interface Design",
          "Frontend Development"
        ]
      },
      {
        title: "Duration",
        description: [
          "4 Months - Thesis Project"
        ]
      },
      {
        title: "Project Details",
        description: [
          "An AI-powered solution to optimize web design for aging users, focusing on adaptive UIs to tackle accessibility challenges from age-related visual decline."
        ]
      },
      {
        title: "Tool",
        description: [
          "Figma"
        ]
      }
    ],
  
    // tasks (Main Tasks & Challenges)
    tasks: {
      title: "Main Tasks & Challenges",
      tasksList: [
        {
          title: "Difficulty Accessing Information",
          description: "Users turn to customer service or Google when navigation is unclear, highlighting the need for intuitive design."
        },
        {
          title: "Optimal Viewing Preferences",
          description: "How frequently should a website check to ensure it aligns with the optimal viewing preferences of the current user? "
        },
        {
          title: "User Awareness of Vision Changes",
          description: "If a user’s vision is gradually deteriorating, are they able to self-identify this change?"
        }
      ],
      imageUrl: "/mainTasks_thesis.png"
    },
  
    tasksDetails: [
      {
        title: "User Testing",
        description: "Testing different AI interaction models with focus groups"
      },
      {
        title: "User Interviews",
        description: "In-depth interviews with knowledge workers and their audience"
      },
    ],
  
  
      objectivesIntro: {
        title: "Comgora - AI-Powered Community Platform",
        description: "A revolutionary platform that connects knowledge workers with their audience through AI-driven interactions and data analysis.",
        imageUrl: "/comgora-hero.png"
      },
    // objectives (Prioritize Objectives)
   
      objectives: {
        
      },
  
    // preStudy
    preStudy: {
      description: "Professionals who create and share content with their audience, seeking better engagement and understanding",
      imageUrl: "/comgora-prestudy.png"
    },
  
    // targetAudience
    targetAudience: [
      {
        title: "Web users 40+ with presbyopia",
        description: [
          "Name:  Mark, 45",
          "Occupation: Office Manager",
          "Background: Mark, with presbyopia, struggles with small text and static web designs. He values adaptive interfaces that adjust to his changing visual needs for seamless use."
        ],      
        imageUrl: "/TA_thesis.png"
      }
     
    ],
  
    // userExperience
    userExperience: [
      {
        title: "Online Interview",
        description: [
          "Conducted online interviews with five Mandarin-speaking participants over 40, recruited via pre-questionnaires in vision-impaired Facebook groups, focusing on web navigation habits and presbyopia challenges.",
          "Selected Taiwanese participants for practical communication and relevance, as Taiwan’s aging population (20% by 2026) provided valuable insights into the impact of presbyopia on web usability."
        ],
        imageUrl: "/UX1_comgora.png"
      },
      {
        title: "Wizard of OZ Testing (WOZ)",
        description: [
          "Conducted Wizard of Oz (WOZ) testing with five participants over 40 with presbyopia, using pre-test interviews, usability testing, and post-test interviews to gather insights.",
          "Simulated and refined a functional prototype, analyzing results through affinity diagrams and descriptive statistics to identify patterns and improve usability."
        ],
        imageUrl: "/woz_thesis.png"
      }
    ],
  
    userEvaluation:{
      imageUrl: "/comgora-prestudy.png"
    },
    
  
    // Feedback Collection and Analysis
    analysisProblemInfo:{
      descriptions: [
        "User feedback was compiled and organized in Excel for thorough review.",
        "Insights were analyzed using an affinity diagram in Miro to uncover themes, patterns, and key areas for improvement with MoSCoW method."
      ]
    },
  
    analysisProblem: [
      {
        title: "Qualitative Data",
        description: "Semi-structured interviews and user observations served as the primary methods for understanding usability, navigation, and user satisfaction. Insights were analyzed using affinity diagrams to uncover key themes and guide design improvements.",
        imageUrl: "/data1_thesis.png"
      },
      {
        title: "Quantitative Data",
        description: "Observational metrics, such as task completion times and click counts, were collected to complement the qualitative findings. However, these metrics alone were insufficient as the main data source, serving only to support and enhance observational insights.",
        imageUrl: "/data2_thesis.png"
      }
    ],
  
    // Define Problem
    defineMainPic:{
      imageUrl: "/define1_thesis.png",
      description: "Based on the interviews and data analysis, we identified two main features and four key objectives that users value the most. Within the user flow, Problems 1 and 2 emerged as the most critical and confusing pain points during the interviews, significantly impacting the overall user experience and the primary outcomes we aimed to test.",
    },
  
    definePrototype: [
      {
        title: "AI Chat Interface",
        description: "Figure 1: The process to integrate image recommendation algorithm into reCAPTCHA tool. The size of the bicycle in the photo can be used to infer the user’s preference for font size. The contrast between the bicycle and the image can be used to infer the user’s preference for color contrast. (a)The position of the image includes the bike. (b)The position of the bike includes the grid. (c) Transfer the size of the bike into a block. (d) Design the bike size, bike position, and image color contrast for each round. (e) Each round would not be overlapped. (f) Categorize the font size(bike size) and image contrast(bike image contrast)(g)image without bike",
        imageUrl: "/proposal1_thesis.png"
      },
      {
        title: "Analytics Dashboard",
        description: "The image recommendation algorithm in reCAPTCHA infers user preferences: bike size suggests font size, contrast indicates color contrast, and bike position helps identify blind spots. By testing varied parameters over three rounds, we capture users' natural viewing patterns, uncovering how visual impairments influence web navigation.",
        imageUrl: "/proposal2_thesis.png"
      },
      {
        title: "Analytics Dashboard",
        description: "In this case, if the user struggles to identify more bikes in future tests, it may indicate a worsening visual condition.",
        imageUrl: "/proposal3_thesis.png"
      },
      {
        title: "Analytics Dashboard",
        description: "Participants will undergo three tests, each consisting of three rounds. They interacted with the image reCAPTCHA, selecting images based on their preferences, with the tool recording selection order and time.",
        imageUrl: "/proposal4_thesis.png"
      },
    ],
    
    userTestFLow: 
      {
        title: "User Test Flow",
        description: "We recruited 7 Taiwanese participants to test the design",     
        imageUrl: "/userTestFlow_thesis.png",
      }
    ,

    result:{
        title: "Experiment Result",
        description: "Our study found varied impacts of age-related visual decline on web browsing. While some participants faced minimal challenges, others struggled with font size, contrast, and text-heavy content, favoring visual aids and simplified designs. Common strategies included zooming and avoiding difficult websites. Feedback on the re-imagined image reCAPTCHA and customized UI was positive, highlighting ease of use and visual comfort, though concerns about data privacy emphasized the need for strong protections.",     
        imageUrl: "/result_thesis.png",
        backgroundImage: "/bk_thesis-min.png"
      },

      prototype: [
        {
          title: "AI Chat Interface",
          description: "The process of redesigning the re-imagined image reCAPTCHA tool and enhancing the website user interface. (a) Analyze image color composition. (b) Add a (smore information) button on the tool. (c) Include a navigation list for more customized features. (d) Implement a test frequency adjustment function. (e) Integrate a text-to-image plugin. (f) Adjust the text and image ratio. (g) Incorporate a chat-to-website plugin.",
          imageUrl: "/iteration1_thesis.png",
          backgroundColor: "bg-stone-100",
        },
        {
          title: "Analytics Dashboard",
          // description: "Comprehensive view of audience engagement patterns and trending topics",
          imageUrl: "/iteration2_thesis.png",
          backgroundColor: "bg-stone-100",
        },
      ],

   
  
    // reflections
    reflections: [
      {
        title: "Sample Size and Diversity",
        description: "The study’s findings are limited by a small sample of five Asian presbyopia users, restricting generalizability. Future research should expand to a larger and more diverse participant pool for robust conclusions."
      },
      {
        title: "Technology Experience and Acceptance",
        description: "Variations in participants' computer skills and openness to new technologies were overlooked. Future studies should account for these factors to ensure more accurate and applicable results."
      },
      {
        title: "Privacy Concerns",
        description: "Cultural and educational differences influenced participants’ privacy awareness. Including a diverse range of participants will provide deeper insights into privacy-related concerns."
      },
      {
        title: "Device Compatibility",
        description: "The tool was tested primarily on computers, excluding mobile users. Future research should address mobile compatibility and analyze cross-device user interactions."
      },
      {
        title: "Long-Term Impact",
        description: "The study lacked a longitudinal perspective. Continuous use studies are needed to evaluate the tool’s long-term effects on user satisfaction, usability, and adaptation."
      }
    ],
  
    flow: {
      description: "The process to integrate image recommendation algorithm into reCAPTCHA tool. The size of the bicycle in the photo can be used to infer the user’s preference for font size. The contrast between the bicycle and the image can be used to infer the user’s preference for color contrast. (a)The position of the image includes the bike. (b)The position of the bike includes the grid. (c) Transfer the size of the bike into a block. (d) Design the bike size, bike position, and image color contrast for each round. (e) Each round would not be overlapped. (f) Categorize the font size(bike size) and image contrast(bike image contrast)(g)image without bike",
      imageUrl: "/otherFlow_thesis.png"
    },
  };
  
  export default accessibility;
  