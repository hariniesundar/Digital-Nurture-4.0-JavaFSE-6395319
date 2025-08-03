import { render, screen } from '@testing-library/react';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe("CohortDetails component", () => {
  test("should show technology field", () => {
    render(<CohortDetails cohort={CohortData[0]} />);
    const techElement = screen.getByText(/Technology:/i);  // match label
    expect(techElement).toBeInTheDocument();
  });

  test("should match snapshot", () => {
    const { asFragment } = render(<CohortDetails cohort={CohortData[0]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
