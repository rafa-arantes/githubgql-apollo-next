import {
  render,
  waitFor,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";
import Home from "@pages/index";
import { dark } from "@styles/themes/dark";
import {
  search_issues_last_page_mock,
  search_issues_mock,
} from "../../__mocks__/index.mock";
import { SEARCH_ISSUES_QUERY } from "@hooks/useSearchIssuesQuery";

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => ({
    query: {}
  }),
}));

const mocks = [
  {
    request: {
      query: SEARCH_ISSUES_QUERY,
      variables: {
        after: "Y3Vyc29yOjU=",
        query: "repo:facebook/react is:issue is:OPEN ",
      },
    },
    result: search_issues_last_page_mock,
  },
  {
    request: {
      query: SEARCH_ISSUES_QUERY,
      variables: {
        after: undefined,
        query: "repo:facebook/react is:issue is:OPEN ",
      },
    },
    result: search_issues_mock,
  },
];

describe("Homepage Testing", () => {
  it("Renders loading", async () => {
    const screen = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <ThemeProvider theme={dark}>
          <Home />
        </ThemeProvider>
      </MockedProvider>
    );
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("Shows IssueCard", async () => {
    const screen = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <ThemeProvider theme={dark}>
          <Home />
        </ThemeProvider>
      </MockedProvider>
    );
    await waitFor(() => screen.getByText("Issues"));
    expect(
      screen.getByText("Support All of Structure Clone in RSC Serialization")
    ).toBeInTheDocument();
  });

  it("Clicks on View More", async () => {
    const screen = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <ThemeProvider theme={dark}>
          <Home />
        </ThemeProvider>
      </MockedProvider>
    );

    // Wait for Loading to finish
    await waitFor(() => screen.getByText("Issues"));

    // Check if View More button is on screen
    expect(screen.getByText("View More")).toBeInTheDocument();

    // Click on View More button
    await userEvent.click(screen.getByText("View More"));

    // Expect View more to not be in the screen
    expect(screen.queryByText("View More")).not.toBeInTheDocument();
    expect(await screen.findByText("Loading")).toBeInTheDocument();

    console.log(screen.queryAllByTestId("titletest").length)
  });
});
