# LettuceBeFit

A responsive fitness website designed to help users explore workouts, calculate their daily calorie needs, and create a personalised athlete profile.

**LettuceBeFit** was developed as a collaborative web development project using HTML, CSS, JavaScript, and Bootstrap 5.

## About the Project

LettuceBeFit is a fitness-focused website that provides users with workout information and basic tools to support their fitness goals.

The website includes:

* A landing/home page introducing the platform
* Workout guides organised by muscle group
* An interactive calorie calculator
* A user profile/join form for training preferences
* Responsive navigation and layouts for different screen sizes

## My Contributions

I was responsible for developing the following two main features:

### Calorie Calculator

I developed the interactive calorie calculator using **HTML, CSS, and JavaScript**.

<img width="1896" height="852" alt="Screenshot 2026-09-03 142332" src="https://github.com/user-attachments/assets/d53a37c5-3b46-4498-ac46-c67db87ae2d4" />

Users can enter:

* Gender
* Age
* Height
* Weight
* Activity level

The calculator then estimates:

<img width="692" height="295" alt="Screenshot 2026-09-03 142416" src="https://github.com/user-attachments/assets/25dcd7d6-3f32-4396-a188-8e5cfa6cb95a" />


* **Maintenance calories**
* **Weight-loss calories**
* **Weight-gain calories**

The calculator uses the **Mifflin-St Jeor equation** to estimate Basal Metabolic Rate (BMR), followed by an activity multiplier to estimate Total Daily Energy Expenditure (TDEE).

I also implemented input validation so users receive an error message when invalid or incomplete information is entered.

### Workout Page

I developed the workout page, which presents exercises organised by:

* Biceps
* Triceps
* Back
* Shoulders
* Legs

<img width="1902" height="870" alt="Screenshot 2026-09-03 142219" src="https://github.com/user-attachments/assets/239a86ec-403f-4852-ae92-edb3f16fec21" />


The page includes exercise images, explanations of why each exercise is useful, and instructions on how to perform each exercise.

I also implemented responsive navigation and Bootstrap components to make the page easier to navigate across different screen sizes.

## Team Contributions

This was a collaborative project.

| Team Member      | Contributions                    |
| ---------------- | -------------------------------- |
| **Nafiz Hassan** | Workout page, Calorie Calculator |
| **Jun Kang**     | Home page, Join Us page          |

We combined our individual pages into a single website and maintained a consistent visual style across the project.

## Technologies Used

* **HTML5** — Page structure and content
* **CSS3** — Styling, layouts, animations, and responsive design
* **JavaScript** — Interactive calorie calculator and user input handling
* **Bootstrap 5** — Responsive grid, navigation, buttons, forms, and components
* **Google Fonts** — Barlow Condensed and Inter
* **GitHub** — Version control and project hosting

## Key Features

### Responsive Design

Bootstrap's responsive grid and navigation components were used to ensure the website works across desktop and mobile screen sizes.

### Interactive Calorie Calculator

The calculator dynamically processes user input with JavaScript and displays personalised calorie estimates without requiring the page to reload.

### Workout Navigation

The workout page includes navigation between different muscle groups, allowing users to quickly jump to the section they are interested in.

### Consistent UI

The website uses a consistent dark theme with green accents, typography, buttons, cards, and navigation across its different pages.

## Project Structure

```text
LettuceBeFit/
│
├── home.html
├── workouts.html
├── cal-calc.html
├── join.html
├── cal-calcJS.js
├── allPages.css
│
└── images/
    ├── barbell-close-grip-bench-press.webp
    ├── barbell-rows.webp
    ├── barbell-squat.webp
    ├── barbell-standing-shoulders-press.webp
    ├── cable-wide-neutral-grip-pulldown.webp
    ├── dumbbell-incline-biceps-curl.webp
    ├── dumbbell-lateral-raise.webp
    ├── hack-squat.webp
    ├── overhead-tricep-extention.webp
    └── weighted-chin-up.webp
```

## How to Run

No installation or build process is required.

1. Clone or download this repository.
2. Open `home.html` in a web browser.
3. Use the navigation bar to explore the different pages.

The project loads Bootstrap and Google Fonts through external CDNs, so an internet connection is recommended for the complete styling experience.

## What I Learned

This project gave me practical experience building a multi-page website and combining HTML, CSS, JavaScript, and Bootstrap.

Some of the main things I worked with were:

* Creating responsive layouts with Bootstrap's grid system
* Building responsive navigation bars
* Using JavaScript to process user input
* Performing calculations dynamically with JavaScript
* Validating form inputs
* Organising content across multiple HTML pages
* Using CSS to maintain a consistent design system
* Working collaboratively on a shared web development project

## Future Improvements

Some features that could be added in future versions include:

* Saving user profiles using a database
* More advanced calorie and nutrition tracking
* Personalised workout recommendations
* User accounts and authentication
* Workout progress tracking
* More detailed accessibility improvements
