# Clidrive Frontend take-home coding test

## Assignment

You are a developer at the new Car Search team at Clidrive. Implement a simple
portal where a user can see a list of cars with the most relevant details and filter by
some attributes.

To complete your assignment:

- Find a free API that exposes details about cars. There’s plenty - we want to see what you find out there. No need to display car images.

- Implement a home page using Next.js and Typescript that shows the cars returned by the API with a pagination or infinite scroll that loads 50 cars at the time. You can also use any libraries you think make sense.

- Implement a filter system so the user can filter by a few of the most relevant attributes using a Next.js API function.

- Deploy it somewhere we can access it.

- Don’t spend too much time working on this assignment. We are looking for a good basic structure that follows best practices, not something very pretty and comprehensive.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

I used the free version of [carapi.app](https://carapi.app)'s API. There's a limitation imposed to free users that partially censors data of cars from years different than 2020. That means that selecting any other year will not display full data.
