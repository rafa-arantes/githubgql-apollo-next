import { render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MockedProvider } from "@apollo/client/testing";

import Issue from "../../pages/issue/[number]";
import { dark } from "../../styles/themes/dark";
import { issue_mock } from "../../__mocks__/issue.mock";
import { ISSUE_QUERY } from "../../hooks/useIssueQuery";

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

const mocks = [
  {
    request: {
      query: ISSUE_QUERY,
      variables: {
        number: 25682,
      },
    },
    result: issue_mock,
  },
];

describe("Issue Page Testing", () => {
  it("Renders loading", async () => {
    const screen = render(
      <MockedProvider mocks={mocks}>
        <ThemeProvider theme={dark}>
          <Issue number={25682} />
        </ThemeProvider>
      </MockedProvider>
    );
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("Shows Issue and Answers Headers", async () => {
    const screen = render(
      <MockedProvider mocks={mocks}>
        <ThemeProvider theme={dark}>
          <Issue number={25682} />
        </ThemeProvider>
      </MockedProvider>
    );

    await waitFor(() => screen.getByText("Issue"));
    await waitFor(() => screen.getByText("Answers"));

    // Checks if answer header, only loaded after loading, is on screen
    expect(screen.getByText("Answers")).toBeInTheDocument();

    // Checks if main header is on screen
    expect(screen.getByText("Issue")).toBeInTheDocument();
  });

  it("Shows IssueCard and Answers", async () => {
    const screen = render(
      <MockedProvider mocks={mocks}>
        <ThemeProvider theme={dark}>
          <Issue number={25682} />
        </ThemeProvider>
      </MockedProvider>
    );

    // Wait for Loading to finish
    await waitFor(() => screen.getByText("Answers"));

    // Check if issue title is on screen
    expect(screen.getByText("Issue Title")).toBeInTheDocument();

    // Check if there are answers on screen
    expect(screen.getByText("Thats a user answer")).toBeInTheDocument();
  });
});
