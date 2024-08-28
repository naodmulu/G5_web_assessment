# Project Name

## Overview

This project is a Next.js application integrated with Redux for state management, Tailwind CSS for styling, and Google Fonts for typography. It includes features like a navigation bar, blog cards, and custom fonts.

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/naodmulu/g5_web_assessment.git
   cd g5_web_assessment\blog_app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

#### Tailwind CSS

The project uses Tailwind CSS for styling. To configure Tailwind:

1. **Tailwind Configuration**

   Update `tailwind.config.mjs` to include custom fonts:

   ```js
   /** @type {import('tailwindcss').Config} */
   const nextConfig = {
     content: [
       './src/**/*.{js,ts,jsx,tsx}',
       './node_modules/flowbite-react/**/*.js',
     ],
     theme: {
       extend: {
         fontFamily: {
           montserrat: ['Montserrat', 'sans-serif'],
           'im-fell': ['IM Fell French Canon', 'serif'],
         },
       },
     },
     plugins: [require('flowbite/plugin')],
   };

   module.exports = nextConfig;
   ```


### Pages
- **Home Page**:
  ![BlogList](assets/Bloglist.png)
  ![Footer](assets/footer.png)
  
- **Discription Page**:
  ![BlogDiscription](assets/blogdiscription.png)
  ![RelatedBlogs](assets/relatedblogs.png)


- **Font not loading**: Ensure that the font links in the `Head` component are correct and accessible.
- **Redux not working**: Check that the store and slices are properly configured and that you are using the correct hooks in your components.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
