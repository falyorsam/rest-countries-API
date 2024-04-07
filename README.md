# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a good understanding of HTML, CSS, and JavaScript.**

## The challenge

Your challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.

You can use any JavaScript framework/library on the front-end such as [React](https://reactjs.org) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like make HTTP requests or style your project.

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

**⚠️ NOTE ⚠️: Sometimes the REST Countries API can go down. We've added a `data.json` file with all the country data if you prefer to use that instead. However, please be aware that the data in the JSON file might not be up-to-date.**

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder.

In this challenge, you will find mobile and desktop designs in light and dark mode color schemes for both pages.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries API](https://restcountries.com) and you can use an icon font library for the icons.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [community](https://www.frontendmentor.io/community).
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback.

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
/_ /_
===============
Variables
===============
_/
/_
:root {
--clr-primary: #645cff;
--clr-primary-dark: #282566;
--clr-primary-light: #a29dff;
--clr-grey-1: #102a42;
--clr-grey-5: #617d98;
--clr-grey-10: #f1f5f8;
--clr-white: #fff;
--clr-red-dark: hsl(360, 67%, 44%);
--clr-red-light: hsl(360, 71%, 66%);
--transition: all 0.3s linear;
--spacing: 0.25rem;
--radius: 0.25rem;
--large-screen-width: 1170px;
--small-screen-width: 90vw;
--fixed-width: 50rem;
}

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
  }
  a {
  text-decoration: none;
  }
  img {
  width: 100%;
  display: block;
  }
  h1,
  h2,
  h3,
  h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  }
  h1 {
  font-size: 3rem;
  }
  h2 {
  font-size: 2rem;
  }
  h3 {
  font-size: 1.5rem;
  }
  h4 {
  font-size: 0.875rem;
  }
  p {
  margin-bottom: 1.25rem;
  }
  @media screen and (min-width: 800px) {
  h1 {
  font-size: 4rem;
  }
  h2 {
  font-size: 2.5rem;
  }
  h3 {
  font-size: 2rem;
  }
  h4 {
  font-size: 1rem;
  }
  body {
  font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
  line-height: 1;
  }
  }
  /_ more global css _/

.btn {
text-transform: uppercase;
background: var(--clr-primary);
color: var(--clr-white);
padding: 0.375rem 0.75rem;
letter-spacing: var(--spacing);
display: inline-block;
font-weight: 700;
transition: var(--transition);
font-size: 0.875rem;
border: none;
cursor: pointer;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.btn:hover {
color: var(--clr-primary);
background: var(--clr-primary-light);
}

/_
===============
Navbar
===============
_/
.loading {
text-align: center;
margin-top: 5rem;
}
nav {
background: var(--clr-primary);
padding: 1.25rem 2rem;
}
.nav-center {
max-width: var(--fixed-width);
width: 100%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
}
nav h3 {
margin-bottom: 0;
letter-spacing: 1px;
color: var(--clr-white);
}
.nav-container {
display: block;
position: relative;
}
nav svg {
width: 40px;
color: var(--clr-white);
}
.amount-container {
position: absolute;
top: -0.6rem;
right: -0.6rem;
width: 1.75rem;
height: 1.75rem;
border-radius: 50%;
background: var(--clr-primary-light);
display: flex;
align-items: center;
justify-content: center;
}
.total-amount {
color: var(--clr-white);
margin-bottom: 0;
font-size: 1.25rem;
}
/_
===============
Cart
===============
_/
.cart {
min-height: calc(100vh - 120px);
width: 90vw;
margin: 0 auto;
margin-top: 40px;
padding: 2.5rem 0;
max-width: var(--fixed-width);
}
.cart h2 {
text-transform: uppercase;
text-align: center;
margin-bottom: 3rem;
}
.empty-cart {
text-transform: lowercase;
color: var(--clr-grey-5);
margin-top: 1rem;
text-align: center;
}
.cart footer {
margin-top: 4rem;
text-align: center;
}
.cart-total h4 {
text-transform: capitalize;
display: flex;
justify-content: space-between;
margin-top: 1rem;
}
.clear-btn,
.confirm-btn {
background: transparent;
padding: 0.5rem 1rem;
color: var(--clr-red-dark);
border: 1px solid var(--clr-red-dark);
margin-top: 2.25rem;
border-radius: var(--radius);
}
.clear-btn:hover {
background: var(--clr-red-light);
color: var(--clr-red-dark);
border-color: var(--clr-red-light);
}
.confirm-btn {
border-color: var(--clr-primary);
color: var(--clr-primary);
}
/_
===============
Cart Item
===============
_/
.cart-item {
display: grid;
align-items: center;
grid-template-columns: auto 1fr auto;
grid-column-gap: 1.5rem;
margin: 1.5rem 0;
}
.cart-item img {
width: 5rem;
height: 5rem;
object-fit: cover;
}
.cart-item h4 {
margin-bottom: 0.5rem;
font-weight: 500;
letter-spacing: 2px;
}
.item-price {
color: var(--clr-grey-5);
}
.remove-btn {
color: var(--clr-primary);
letter-spacing: var(--spacing);
cursor: pointer;
font-size: 0.85rem;
background: transparent;
border: none;
margin-top: 0.375rem;
transition: var(--transition);
}
.remove-btn:hover {
color: var(--clr-primary-light);
}
.amount-btn {
width: 24px;
background: transparent;
border: none;
cursor: pointer;
}
.amount-btn svg {
color: var(--clr-primary);
}
.amount-btn:hover svg {
color: var(--clr-primary-light);
}
.amount {
text-align: center;
margin-bottom: 0;
font-size: 1.25rem;
line-height: 1;
}
hr {
background: var(--clr-grey-5);
border-color: transparent;
border-width: 0.25px;
}

.modal-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.7);
z-index: 10;
display: flex;
align-items: center;
justify-content: center;
}

.modal {
background: var(--clr-white);
width: 80vw;
max-width: 400px;
border-radius: var(--radius);
padding: 2rem 1rem;
text-align: center;
}
.modal h4 {
margin-bottom: 0;
line-height: 1.5;
}
.modal .clear-btn,
.modal .confirm-btn {
margin-top: 1rem;
}
.btn-container {
display: flex;
justify-content: space-around;
}
