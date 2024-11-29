// app/longProjects/bumbleRedesign.js

import { background } from "@chakra-ui/react";

const bumbleRedesign = {
    introduction: {
      title: "Data-Driven Profile Optimization & Tailored Icebreakers for Bumble",
      description: "Double-tap a profile detail you like, and AI will generate a personalized icebreaker for you. Meanwhile, the other person gets a dashboard with analytics on profile clicks and time spent. (This is a proposal practice for a Bumble premium feature, designed in Bumble's style and UI.",
      imageUrl: "/bumble_hero.png"
    },
  
    introCards: [
      {
        title: "Responsibilities",
        description: [
          "User Experience Design",
          "User Interface Design",
          "Business Strategy"
        ]
      },
      {
        title: "Duration",
        description: [
          "1 week Solo work - 2024/11"
        ]
      },
      {
        title: "Project Details",
        description: [
          "An AI-powered Dating App, This is solely a proposal exercise, designed in line with Bumble's design style."
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
          title: "Difficulty Understanding Profile Performance",
          description: "Users struggle to identify which parts of their profile attract the most engagement, making it hard to optimize for better matches."
        },
        {
          title: "Effort in Crafting Icebreakers",
          description: "Coming up with attractive and meaningful icebreakers takes time and creativity, leaving users feeling stuck or unmotivated to start conversations."
        }
      ],
      imageUrl: "/bumble_task1.png"
    },
  
    // targetAudience
    targetAudience: [
      {
        title: "Matcher",
        description: [
          "Name:  Lisa, 36",
          "Occupation: Senior HR",
          "Background: Lisa, a confident Senior HR Manager, knows what she wants in a relationship but struggles to find time due to her busy career. She values efficiency and meaningful connections."
        ],      
        imageUrl: "/bumble_user1.png"
      },
      {
        title: "Potential Match",
        description: [
          "Name:  Mark, 30",
          "Occupation: Master Student",
          "Background: Mark is new to dating and often unsure how to start conversations. He needs a supportive platform with personalized icebreakers and analytics to build confidence and connect meaningfully."
        ],      
        imageUrl: "/bumble_user2.png"
      }
     
    ],
  
    // userExperience
    userExperience: [
      {
        title: "Method & Painpoints",
        description: [
          "Using Python to Identify Pain Points on Reddit",
          "Subreddits: Bumble, datingapps.",
          "Focus on topics that potentially show the negative feedback from Bumble like [‘profile', 'analytics', 'insight', 'optimize', 'improve', 'clicks', 'views', 'time spent', ['conversation', 'icebreaker', 'opener', 'start talking', 'intro', 'awkward', 'don’t know how to']"
        ],
        imageUrl: "/bumble_data1.png"
      },
      {
        title: "Data Extraction",
        description: [
          "Python (PRAW) extracts 669 posts without filters for initial exploration.",
          "Code Example in the picture."
        ],
        imageUrl: "/bumble_data2.png"
      }
    ],
  
    userEvaluation:{
      imageUrl: "/-bumble_data1.png"
    },
    
  
    analysisProblemInfo:{
      descriptions: [
        "I used Reddit user feedback analysis as the research basis for this proposal."
          ]
    },
  
    analysisProblem: [
      {
        title: "Refine Dataset",
        description: "Apply filters: Timeframe: Past 12 months. - Score: Posts with scores >10. - Reduced posts: 383.",
        imageUrl: "/bumble_data3.png"
      },
      {
        title: "Categorize by UX Topics",
        description: "Profile Performance (31 mentions): Users struggle to understand and optimize profiles. / Icebreaker Creation (19 mentions): Starting conversations is challenging. / Issues like \"algorithm\" excluded as non-UI/UX.",
        imageUrl: "/bumble_data4.png"
      }
    ],
  
    // Define Problem
    defineMainPic:{
      imageUrl: "/bumble_problem1.png",
      description: "We will initially categorize issues related to algorithms, personal values, and dishonest behavior as problems to be addressed later, marking them with a triangle",
    },
  
    definePrototype: [
      {
        title: "AI Chat Interface",
        // description: "Figure 1: The process to integrate image recommendation algorithm into reCAPTCHA tool. The size of the bicycle in the photo can be used to infer the user’s preference for font size. The contrast between the bicycle and the image can be used to infer the user’s preference for color contrast. (a)The position of the image includes the bike. (b)The position of the bike includes the grid. (c) Transfer the size of the bike into a block. (d) Design the bike size, bike position, and image color contrast for each round. (e) Each round would not be overlapped. (f) Categorize the font size(bike size) and image contrast(bike image contrast)(g)image without bike",
        imageUrl: "/bumble_problem2.png"
      },
      {
        title: "Analytics Dashboard",
        // description: "The image recommendation algorithm in reCAPTCHA infers user preferences: bike size suggests font size, contrast indicates color contrast, and bike position helps identify blind spots. By testing varied parameters over three rounds, we capture users' natural viewing patterns, uncovering how visual impairments influence web navigation.",
        imageUrl: "/bumble_problem3.png"
      }
    ],
    
      prototype: [
        {
          title: "AI Chat Interface",
        //   description: "The process of redesigning the re-imagined image reCAPTCHA tool and enhancing the website user interface. (a) Analyze image color composition. (b) Add a (smore information) button on the tool. (c) Include a navigation list for more customized features. (d) Implement a test frequency adjustment function. (e) Integrate a text-to-image plugin. (f) Adjust the text and image ratio. (g) Incorporate a chat-to-website plugin.",
          imageUrl: "/bumble_solution1.png",
          backgroundColor: "#F1B000",
        },
        {
          title: "Analytics Dashboard",
          // description: "Comprehensive view of audience engagement patterns and trending topics",
          imageUrl: "/bumble_solution2.png",
          backgroundColor: "#F1B000",
        },
        {
            title: "Analytics Dashboard",
            // description: "Comprehensive view of audience engagement patterns and trending topics",
            imageUrl: "/bumble_solution3.png",
            backgroundColor: "#F1B000",
          },
      ],

   
  
    // reflections
    reflections: [
      {
        title: "Addressing Data Privacy",
        description: "We ensured anonymized data collection and full compliance with EU and US regulations, prioritizing user trust and transparency."
      },
      {
        title: "Exploring Potential Areas for Improvement",
        description: "Additional features could boost engagement, such as: Gamification for profile optimization, Personalized, actionable tips from analytics, Feedback loops to celebrate user progress."
      },
      {
        title: "Conducting Real User Testing",
        description: "Real user testing is yet to be conducted. This step is critical for validating assumptions, uncovering pain points, and refining the design."
      },
      {
        title: "Encouraging Deeper Value Through UI/UX",
        description: "Take more time to think deeper—can matchmaking on dating apps move away from superficial personal profile presentations?"
      }
    ],
  
    flow: {
      description: "The redesign introduces a Profile Performance Dashboard for insights on profile engagement and an AI Icebreaker Generator for personalized conversation starters. These features enhance user experience, streamline interactions, and encourage premium plan adoption, all within Bumble's design framework.",
      imageUrl: "/flows_bumble.png"
    },
  };
  
  export default bumbleRedesign;
  