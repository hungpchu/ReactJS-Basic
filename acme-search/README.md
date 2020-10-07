### About:

1. This project's framework is ReactJS
2. Please install all required node package for ReactJS

### Instruction to run project:

1. Go to the main directory acme-search with `cd acme-search`
2. Run `yarn start` or `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. `yarn start` will open the browser automatically and locate to the right URL

### Instruction to run test:

1. Locate to acme-search directory
2. Run `yarn test`

### Additional features that I implement:

1. User can add the new data to dataSource with form which store the newly updated data in the state of the search component.
   When re-running the search engine with a search key matches the updated data, the newly updated data will be shown
2. User can type the searchKey in the input search box and hitting the Enter key will return all matching results

### My approach to the product:

1. Design decision:
   I choose ReactJS with 2 main reasons for reusable components and testing. With reusable components, we will not so many duplicate codes
   in the application as well as maintain the readability for other code-readers. With testing, reactJS has so many supporting libraries for developers like jest to write testing codes.
2. Tradeoff:
   Since I am using reactJS, my application will require additional react libraries like react or react-dom and other libraries for testing like enzyme.
