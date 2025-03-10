# E-LEARNING-PLATFORM-UI

*COMPANY*: CODETECH IT SOLUTION

*NAME*: CAROL TWINKAL CRYSTAL LOBO

*INTERN ID*: CT08TKY

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

# DESCRIPTION

This code creates the front-end structure for an e-learning platform, utilizing HTML, CSS, and JavaScript to deliver a user-friendly online learning experience. The HTML establishes the framework, starting with a header that prominently displays the platform's title, "E-Learning Platform." The main content area is divided into three sections: "Course List," "Course Content," and "Progress Tracking." The "Course List" section presents an unordered list (`<ul>`) of courses, each housed within a `course-card` list item (`<li>`). These cards provide a concise overview of each course, featuring a title (e.g., "Course 1") and a brief description (e.g., "Introduction to Programming").

The "Course Content" section is designed to display the actual learning material. It utilizes an `iframe` element (`video-frame`) to embed video content, likely sourced from a platform like YouTube. Initially, the `iframe` has an empty `src` attribute, waiting for user interaction to load a specific course video. The "Progress Tracking" section aims to provide learners with a visual representation of their course completion status. It includes a progress bar element (`progress-bar`) and a text element (`progress-text`) to display the percentage of completion.

The CSS code styles the visual presentation of the e-learning platform. It sets basic styles for the body, including font, margins, padding, background color, and text alignment. The header is styled with a distinct background color, white text, and padding. The main content area employs a flexbox layout to arrange the sections in a column and center them on the page. The "Course List" section is also styled with flexbox, ensuring proper alignment and spacing of course cards. Each course card is designed with a visually appealing background, padding, rounded corners, and a subtle shadow effect. Hover effects provide visual feedback to users, with the card slightly shifting upward and the shadow becoming more pronounced. The course title and description within the card are styled for clarity and readability. Media queries are implemented to adapt the layout for different screen sizes, ensuring a responsive design for optimal viewing on various devices.

The JavaScript code adds interactivity to the platform. It waits for the DOM (Document Object Model) to fully load before executing. The primary function is `loadCourse`, which takes a video URL as an argument. When a user clicks on a course card, the `onclick` event triggers this function, updating the `src` attribute of the `iframe` with the provided video URL. This dynamically loads the selected course's video content into the "Course Content" section. Additionally, the function resets the progress bar value to 0 and updates the progress text to "0% completed," indicating the start of a new course.

In essence, this code sets the stage for an e-learning platform, providing the basic structure and functionality for users to browse courses and view video content. The combination of HTML, CSS, and JavaScript creates a visually appealing and interactive learning environment. However, it represents a foundational step, with further development needed to implement features like user authentication, progress tracking, quizzes, and interactive exercises to create a fully functional e-learning platform.

# OUTPUT

![Image](https://github.com/user-attachments/assets/51a91a9d-e38e-4949-a851-5758c37ed063)
![Image](https://github.com/user-attachments/assets/d815bf03-562f-4492-bde0-383365cc817d)
