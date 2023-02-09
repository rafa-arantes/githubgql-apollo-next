export const issue_mock = {
  data: {
    repository: {
      id: "ab",
      issue: {
        author: {
          avatarUrl:
            "https://avatars.githubusercontent.com/u/8963736?u=fbfd05f584a40f6432de9fd3da918abf465f11fa&v=4",
          login: "afenton90",
          url: "https://github.com/afenton90",
          __typename: "User",
        },
        id: "MDU6SXNzdWU0MzY3MTIwOTk=",
        bodyText:
          "What is the current behavior?\nopen attribute does not synchronise with the virtual dom on the details element, when using the details element as a controlled component.\nI have a codesandbox here that demonstrates the current behaviour.\nWhat is the expected behavior?\nThe open attribute stays synchronised with the virtual dom and is added/removed.\nWhich versions of React, and which browser / OS are affected by this issue? Did this work in previous versions of React?\nReact: 16.8.6\nBrowser: Chrome\nDid this work in previous versions of React? No",
        title: "Issue Title",
        updatedAt: "2022-09-16T09:17:58Z",
        comments: {
          id: 'id2',
          pageInfo: {
            hasNextPage: true,
            endCursor: "Y3Vyc29yOnYyOpHOHSuczg==",
            __typename: "PageInfo",
          },
          nodes: [
            {
              id: "MDEyOklzc3VlQ29tbWVudDQ4NjI2Mzk4NQ==",
              author: {
                login: "baruchvlz",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/14321495?u=b0e1e56a57d15c532442fce3f8e8a8822dd90e05&v=4",
                resourcePath: "/baruchvlz",
                url: "https://github.com/baruchvlz",
                __typename: "User",
              },
              bodyText:
                "It looks like it does synchronizes with the virtual dom.\n\nAlso, you don't need to do open={open} for the details element. HTML understands that clicking on the <summary> toggles the details. You can keep the onClick={onToggle} too. Check it here",
              __typename: "IssueComment",
            },
            {
              id: "MDEyOklzc3VlQ29tbWVudDQ4NjI2NzIyNQ==",
              author: {
                login: "afenton90",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/8963736?u=fbfd05f584a40f6432de9fd3da918abf465f11fa&v=4",
                resourcePath: "/afenton90",
                url: "https://github.com/afenton90",
                __typename: "User",
              },
              bodyText:
                "Thats a user answer",
              __typename: "IssueComment",
            },
            {
              id: "MDEyOklzc3VlQ29tbWVudDQ4ODAyODQzMQ==",
              author: {
                login: "alejandronanez",
                avatarUrl: "https://avatars.githubusercontent.com/u/464978?v=4",
                resourcePath: "/alejandronanez",
                url: "https://github.com/alejandronanez",
                __typename: "User",
              },
              bodyText:
                'I just ran into the same issue today, and I fixed it by adding an event.preventDefault to the onClick handler. It is not crystal clear to me why this works tbh.\nconst onToggle = event => {\n  event.preventDefault();\n  setOpen(!open);\n};\n\n// Later on...\nreturn (\n  <div className="App">\n    <details open={open} onClick={onToggle}>...</details>\n  </div>\n)\nCodesandbox',
              __typename: "IssueComment",
            },
            {
              id: "MDEyOklzc3VlQ29tbWVudDQ4ODIyNDQzOQ==",
              author: {
                login: "afenton90",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/8963736?u=fbfd05f584a40f6432de9fd3da918abf465f11fa&v=4",
                resourcePath: "/afenton90",
                url: "https://github.com/afenton90",
                __typename: "User",
              },
              bodyText:
                "Awesome @alejandronanez I'll go with that for now.\nI'll let the maintainers decide whether this issue is a bug or just a quirk of the details element.",
              __typename: "IssueComment",
            },
            {
              id: "MDEyOklzc3VlQ29tbWVudDQ4OTM5NzQ1NA==",
              author: {
                login: "zgoby",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/29146620?u=6eded75d0ac7a08614e3068156d2a43ff72ad3b5&v=4",
                resourcePath: "/zgoby",
                url: "https://github.com/zgoby",
                __typename: "User",
              },
              bodyText:
                "@alejandronanez is right!details element have Default behavior! So,it is not controlled by onclickEvent",
              __typename: "IssueComment",
            },
          ],
          __typename: "IssueCommentConnection",
        },
        __typename: "Issue",
      },
      __typename: "Repository",
    },
  },
};
