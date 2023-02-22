import { render, screen } from '@testing-library/react';
import App from './App';
import { initialData } from './App.fixtures';

describe("App", () => {
  it("should render all the phrases", () => {
    render(<App />);
    initialData.forEach(({content}) => {
      expect(screen.getByText(content)).toBeVisible()
    })
  })
})

