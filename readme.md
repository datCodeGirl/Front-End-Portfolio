# Instructions

Please Read the Instructions all the way through before starting to code

### Setting Up the React Project

1. **GitHub Repository**: *Do not fork this repo!* Create a new GitHub repository for your project. Initialize Git in your project folder and connect it to your GitHub repository.

2. **Create a new React app**: Use Vite to create a new React app.

3. **Readme File**: Create a `readme.md` file in the root of your project directory (`my-portfolio`). Include setup instructions for your React application, including how to install dependencies, run the development server, and build for deployment.

4. **Deployment**: Deploy your React application to a hosting service of your choice, such as Netlify or Vercel. Include the URL to your deployed website in the `readme.md` file.

### Front-end Development with React

1. **Component Structure**: Organize your application into reusable components. You'll have components for different sections of your portfolio, such as Header, Footer, About, Projects, Contact, etc.

2. **Styling**: Use CSS Modules or a CSS-in-JS solution like styled-components or tailwind for styling your components. Each component should have its own CSS file.

3. **Responsive Design**: Implement responsive design using CSS media queries to ensure your application looks good on various screen sizes.

4. **API Requests**: Utilize React's `useEffect` hook to make API requests when components mount. Update the component's state with the fetched data to trigger re-renders.

5. **Form Handling**: Use controlled components to handle form inputs. Prevent the default form submission behavior using `e.preventDefault()` in the form's onSubmit handler. Manage form state using React's state hooks (e.g., `useState`). The form submission could update something in your local state (doesn't persist) and not make an API call. 

6. **Error Handling**: Display error messages on the DOM when form submissions are incorrect. You can conditionally render error messages based on form validation. Don't use the built-in `required` html attribute! 

7. **External APIs**: Make requests to external APIs like Star Wars API, Weather API, or others listed in the instructions. Update component state with the fetched data and render it accordingly.

1. [Star Wars](https://swapi.dev/)
1. [Weather](https://openweathermap.org/api)
1. [News](https://newsapi.org/)
1. [Giphy](https://developers.giphy.com/)
1. [Pokemon](http://pokeapi.co/)
1. [Card Deck](https://deckofcardsapi.com/)
1. [Google Books](https://developers.google.com/books/)
1. [City of Chicago](https://data.cityofchicago.org/)
1. [Chuck Norris](http://www.icndb.com/)
1. [Rick and Morty](https://rickandmortyapi.com/documentation/#rest)

The following two websites provide access to a number of APIs. Not all of these APIs are easy to access and some will be paid. Please be careful before engaging with an unknown API.

1. [GitHub: Public APIs](https://github.com/toddmotto/public-apis)
1. [Rapid API](https://rapidapi.com/)

8. Your project should include at least 4 routes, utilizing react-router-dom to create navigation for `About Me` `Home` `Form` and a `Show Page` for a single resource. Ensure each route is accessible and navigable, providing a seamless user experience.

### Mastery Rubric

1. **Code Quality**: Write clean, readable, and maintainable code following best practices. Break down complex logic into smaller functions or components.

2. Code Accessibility: Evaluate the project's adherence to accessibility standards, ensuring that the codebase is designed and implemented with accessibility in mind. You should at least use labels in your forms and the `alt` attribute for img 

3. **State Management**: Use React's state and props effectively to manage the state of your application.

### Stretch Goals

Only start a stretch goal when your basic app is fully functional and fully styled

1. **CSS Transitions**: Enhance user experience with CSS transitions and animations. Use libraries like React Transition Group for more advanced animations.

2. **Local Storage**: Implement local storage to persist user data or application state across sessions. Utilize `localStorage` API to store and retrieve data locally.

3. **CSS Framework**: Integrate a CSS framework like Bootstrap, Tailwind or Material-UI to expedite development and enhance UI consistency.

4. **Your own stretch goals**: If you want to implement any other stretch goal, consult a coach and get it approved first.

### Presentation Rubric

1. **Project Presentation**: Prepare a presentation showcasing your project, including its features, technologies used, and challenges faced.

2. **Code Presentation**: Discuss your code structure, design decisions, and any notable algorithms or patterns you've implemented.

3. **Demonstration**: Provide a live demonstration of your application, highlighting its key features and functionalities.

## External APIs

Choose an external API from the provided list or explore other options based on your project requirements. Ensure the API can be accessed directly from the front-end application without requiring server-side code.

## Project Submission

1. **GitHub Repository**: Share the URL of your GitHub repository with your instructors for evaluation.
  
2. **Canvas Submission**: Submit the GitHub repository URL on Canvas for grading.

Make sure to follow the instructions carefully and seek clarification from your instructors often. Happy coding!

## How to start?

Head over to [The planning docs template](planning_docs_template.md) and make a copy of it. Work through the template, fill it out and follow the prompts there. 

Once you complete working through the template you should have a solid understanding of what your website should look like and what 