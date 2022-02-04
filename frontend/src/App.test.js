// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from "react";
import CommentBox from "./containers/CommentBox"; // NEW

function App() {
  return (
  	<CommentBox /> 		// MODIFIED
  )
}

export default App;