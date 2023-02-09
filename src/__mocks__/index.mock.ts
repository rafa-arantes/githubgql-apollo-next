export const search_issues_mock = {
  data: {
    search: {
      id: 1,
      pageInfo: {
        hasNextPage: true,
        endCursor: "Y3Vyc29yOjU=",
        __typename: "PageInfo",
      },
      edges: [
        {
          cursor: "Y3Vyc29yOjE=",
          node: {
            id: "I_kwDOAJy2Ks5WdnU7",
            number: 25690,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-16T00:59:02Z",
            title:
              "Bug: Fetch | `Response` hangs with large responses due to usage of `Response.clone()` in `cachedFetch`",
            bodyText:
              'Looks like this is a known limitation in node-fetch where large responses hang when cloned.\nReact version: 18.3.0-next-4bd245e9e-20221104\nSteps To Reproduce\n\nTry with a large response\n\nCode example:\nconst response = await fetch("https://www.example.com/some-large-response");\nif (response.ok) {\n  const data = await response.text();\n}\nThe current behavior\nHanges with Response.text() in the above example\nThe expected behavior\nShouldn\'t hang',
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/62549492?u=0fef281992bca0daa967c88acda28e09cddd3577&v=4",
              login: "alizeait",
              url: "https://github.com/alizeait",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjI=",
          node: {
            id: "I_kwDOAJy2Ks5WcDY0",
            number: 25687,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-15T22:46:28Z",
            title: "Support All of Structure Clone in RSC Serialization",
            bodyText:
              "The React Server Components payload is a custom protocol that extends what is serializable beyond just JSON. Beyond just JSON we also support all React primitives (React.lazy, ReactNode) and global named symbols (Symbol.for). We also already have plan to expand this support with these as well:\n\nPromises\nTyped Arrays / DataView\nBigInt\nundefined, Infinity, NaN, -0\n\nWe don't have plans to make this algorithm pluggable from the outside because we're concerned about the complexity this puts on the ecosystem and that components won't be reusable in different contexts where they're not configured or configurations are conflicting.\nHowever, it might make sense to expand support to the types supported by the Structured clone algorithm which is already standardized and specified.\n\nCyclic references: We already support references in the protocol. This is mostly just an implementation detail for the perf cost whether something should be inlined as JSON or defined as a separate row.\nArrayBuffer: For Typed Arrays we might stick to using the underlying buffer coming from the stream instead of cloning the data. All values are considered immutable anyway. For ArrayBuffers we can't use that trick though so it would require a new clone of the data which might be a bit of a foot gun when switching between buffers and typed arrays.\nError objects: We already support thrown errors and we could support more errors in the encoding. However, we intentionally don't pass them through with all information. We cover them up with digests since the error message and stack can sometimes include sensitive information that only the server should have access to. We would likely have to do the same here.\nBoolean/String objects: We don't currently support the object wrappers around primitives e.g. new String(). You're not really supposed to use these in modern JS so it's kind of annoying to have to add extra code to handle this case.\nRegExp: These are pretty straightforward but can possibly have security implications.\nDate, Map, Set: These are fairly straightforward to serialize so it's mostly a matter of allowing these as special cases. Why are these special? Because Structured Clone says so.\n(Temporal: It seems appropriate that this would be added to structured clone but we need to confirm.)\n\nWe probably won't support Web specific APIs that don't necessarily have an equivalent on the Server or isn't directly transferrable such as if it has handles to local hardware or file system resources. The only one that might be easy to support:\n\nBlob: This would just be a wrapper around the raw buffer from the stream same as Typed Arrays. I don't think any servers really support this yet though so it would only once that's the case.",
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/63648?u=f1387d49fb1d3a6e7b26f0e5847eca5fa82c26a5&v=4",
              login: "sebmarkbage",
              url: "https://github.com/sebmarkbage",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjM=",
          node: {
            id: "I_kwDOAJy2Ks5WbDdS",
            number: 25684,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-15T15:05:12Z",
            title: "Bug: ",
            bodyText:
              "Strange and inconsistent behaviour of suspense boundary.\nReact version: 18\nSteps To Reproduce\n\nIf you run the application you will se a warning Text content did not match.\nDo one of the following things to fix the issue:\na. Wrap the Components2 in suspense in App.js.\nb. Change the type of DOM node returned by Component2.\nc. Remove the DOM node <h2>sdfsdf{val}</h2> in App.js file\n\nLink to code example:\nhttps://github.com/sachin-hg/react-suspense\nBranch Name => suspense\nThe current behavior\nSeems like if you throw a promise inside suspense, the suspense boundary is getting resolved with partial tree.\nThe expected behavior\nIf error is thrown inside suspense the whole tree which comes under that suspense boundary, should resolve fully and not in pieces. But some how deleting some html is also fixing this issue, not sure how suspense boundary is behaving. It will be really helpful if someone can explain what exactly is react doing and how it is resolving tree inside suspense boundary.",
            author: {
              avatarUrl: "https://avatars.githubusercontent.com/u/13482825?v=4",
              login: "sachTyagi",
              url: "https://github.com/sachTyagi",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjQ=",
          node: {
            id: "I_kwDOAJy2Ks5WXbpA",
            number: 25682,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-15T08:13:36Z",
            title: "Bug: `<img fetchPriority>` attribute is not supported",
            bodyText:
              'React version: 18.0.0\nSteps To Reproduce\n\nRender an <img src="#" fetchPriority="high" /> tag\n\n\nLink to code example: https://playcode.io/1011424\n\nThe current behavior\nA warning is logged:\nWarning: React does not recognize the `fetchPriority` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fetchpriority` instead. If you accidentally passed it from a parent component, remove it from the DOM element.\n    at img\n    at div\n    at App\n\nThe expected behavior\nReact should recognize the fetchPriority prop and emit it as fetchpriority into HTML.\nTo be clear, using <img fetchpriority="high"> works and doesn’t log a warning. However, it is inconsistent with other DOM APIs. In the JS DOM API, the attribute is camel-cased as HTMLImageElement.fetchPriority.\nfetchPriority has been supported in Chromium browsers since Chromium 101 (Apr 26, 2022). Per Patrick Meenan, Mozilla is working on an implementation as well.',
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/2953267?u=eb2ca17f30b0616c9de9b36ea54fb65341c4eb06&v=4",
              login: "iamakulov",
              url: "https://github.com/iamakulov",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjU=",
          node: {
            id: "I_kwDOAJy2Ks5WS58X",
            number: 25677,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-14T13:12:47Z",
            title: "Bug: Portals doesn't participate in Suspense",
            bodyText:
              "It appears Portals does not participate in suspense. I came over this by accident, and I'm not sure if it's intended behavior or not. I could not find any documentation related to suspense and portals specifically.\n\nReact version: 18.2.0\nSteps To Reproduce\n\nCreate a component that can suspend, while also rendering a portal\nSuspend component\n\n\nLink to code example:\nhttps://codesandbox.io/s/youthful-tree-vikl09?file=/src/App.tsx\n\nThe current behavior\nPortal content rendered from a suspending component is visible if the component suspends.\nThe expected behavior\nPortal should behave like any other child and not be shown when it's under a suspense that fallbacks.",
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/11387548?u=d48f100314f3eec5866927f6071fe0fb5b3bc97c&v=4",
              login: "h3rmanj",
              url: "https://github.com/h3rmanj",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
      ],
      __typename: "SearchResultItemConnection",
    },
  },
};

export const search_issues_last_page_mock = {
  data: {
    search: {
      id: 2,
      pageInfo: {
        hasNextPage: false,
        endCursor: "Y3Vyc29yOjEw",
        __typename: "PageInfo",
      },
      edges: [
        {
          cursor: "Y3Vyc29yOjE=",
          node: {
            id: "I_kwDOAJy2Ks5WdnU7",
            number: 25690,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-16T00:59:02Z",
            title:
              "Bug: Fetch | `Response` hangs with large responses due to usage of `Response.clone()` in `cachedFetch`",
            bodyText:
              'Looks like this is a known limitation in node-fetch where large responses hang when cloned.\nReact version: 18.3.0-next-4bd245e9e-20221104\nSteps To Reproduce\n\nTry with a large response\n\nCode example:\nconst response = await fetch("https://www.example.com/some-large-response");\nif (response.ok) {\n  const data = await response.text();\n}\nThe current behavior\nHanges with Response.text() in the above example\nThe expected behavior\nShouldn\'t hang',
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/62549492?u=0fef281992bca0daa967c88acda28e09cddd3577&v=4",
              login: "alizeait",
              url: "https://github.com/alizeait",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjI=",
          node: {
            id: "I_kwDOAJy2Ks5WcDY0",
            number: 25687,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-15T22:46:28Z",
            title: "Support All of Structure Clone in RSC Serialization",
            bodyText:
              "The React Server Components payload is a custom protocol that extends what is serializable beyond just JSON. Beyond just JSON we also support all React primitives (React.lazy, ReactNode) and global named symbols (Symbol.for). We also already have plan to expand this support with these as well:\n\nPromises\nTyped Arrays / DataView\nBigInt\nundefined, Infinity, NaN, -0\n\nWe don't have plans to make this algorithm pluggable from the outside because we're concerned about the complexity this puts on the ecosystem and that components won't be reusable in different contexts where they're not configured or configurations are conflicting.\nHowever, it might make sense to expand support to the types supported by the Structured clone algorithm which is already standardized and specified.\n\nCyclic references: We already support references in the protocol. This is mostly just an implementation detail for the perf cost whether something should be inlined as JSON or defined as a separate row.\nArrayBuffer: For Typed Arrays we might stick to using the underlying buffer coming from the stream instead of cloning the data. All values are considered immutable anyway. For ArrayBuffers we can't use that trick though so it would require a new clone of the data which might be a bit of a foot gun when switching between buffers and typed arrays.\nError objects: We already support thrown errors and we could support more errors in the encoding. However, we intentionally don't pass them through with all information. We cover them up with digests since the error message and stack can sometimes include sensitive information that only the server should have access to. We would likely have to do the same here.\nBoolean/String objects: We don't currently support the object wrappers around primitives e.g. new String(). You're not really supposed to use these in modern JS so it's kind of annoying to have to add extra code to handle this case.\nRegExp: These are pretty straightforward but can possibly have security implications.\nDate, Map, Set: These are fairly straightforward to serialize so it's mostly a matter of allowing these as special cases. Why are these special? Because Structured Clone says so.\n(Temporal: It seems appropriate that this would be added to structured clone but we need to confirm.)\n\nWe probably won't support Web specific APIs that don't necessarily have an equivalent on the Server or isn't directly transferrable such as if it has handles to local hardware or file system resources. The only one that might be easy to support:\n\nBlob: This would just be a wrapper around the raw buffer from the stream same as Typed Arrays. I don't think any servers really support this yet though so it would only once that's the case.",
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/63648?u=f1387d49fb1d3a6e7b26f0e5847eca5fa82c26a5&v=4",
              login: "sebmarkbage",
              url: "https://github.com/sebmarkbage",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjM=",
          node: {
            id: "I_kwDOAJy2Ks5WbDdS",
            number: 25684,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-15T15:05:12Z",
            title: "Bug: ",
            bodyText:
              "Strange and inconsistent behaviour of suspense boundary.\nReact version: 18\nSteps To Reproduce\n\nIf you run the application you will se a warning Text content did not match.\nDo one of the following things to fix the issue:\na. Wrap the Components2 in suspense in App.js.\nb. Change the type of DOM node returned by Component2.\nc. Remove the DOM node <h2>sdfsdf{val}</h2> in App.js file\n\nLink to code example:\nhttps://github.com/sachin-hg/react-suspense\nBranch Name => suspense\nThe current behavior\nSeems like if you throw a promise inside suspense, the suspense boundary is getting resolved with partial tree.\nThe expected behavior\nIf error is thrown inside suspense the whole tree which comes under that suspense boundary, should resolve fully and not in pieces. But some how deleting some html is also fixing this issue, not sure how suspense boundary is behaving. It will be really helpful if someone can explain what exactly is react doing and how it is resolving tree inside suspense boundary.",
            author: {
              avatarUrl: "https://avatars.githubusercontent.com/u/13482825?v=4",
              login: "sachTyagi",
              url: "https://github.com/sachTyagi",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjQ=",
          node: {
            id: "I_kwDOAJy2Ks5WXbpA",
            number: 25682,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-15T08:13:36Z",
            title: "Bug: `<img fetchPriority>` attribute is not supported",
            bodyText:
              'React version: 18.0.0\nSteps To Reproduce\n\nRender an <img src="#" fetchPriority="high" /> tag\n\n\nLink to code example: https://playcode.io/1011424\n\nThe current behavior\nA warning is logged:\nWarning: React does not recognize the `fetchPriority` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fetchpriority` instead. If you accidentally passed it from a parent component, remove it from the DOM element.\n    at img\n    at div\n    at App\n\nThe expected behavior\nReact should recognize the fetchPriority prop and emit it as fetchpriority into HTML.\nTo be clear, using <img fetchpriority="high"> works and doesn’t log a warning. However, it is inconsistent with other DOM APIs. In the JS DOM API, the attribute is camel-cased as HTMLImageElement.fetchPriority.\nfetchPriority has been supported in Chromium browsers since Chromium 101 (Apr 26, 2022). Per Patrick Meenan, Mozilla is working on an implementation as well.',
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/2953267?u=eb2ca17f30b0616c9de9b36ea54fb65341c4eb06&v=4",
              login: "iamakulov",
              url: "https://github.com/iamakulov",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjU=",
          node: {
            id: "I_kwDOAJy2Ks5WS58X",
            number: 25677,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-14T13:12:47Z",
            title: "Bug: Portals doesn't participate in Suspense",
            bodyText:
              "It appears Portals does not participate in suspense. I came over this by accident, and I'm not sure if it's intended behavior or not. I could not find any documentation related to suspense and portals specifically.\n\nReact version: 18.2.0\nSteps To Reproduce\n\nCreate a component that can suspend, while also rendering a portal\nSuspend component\n\n\nLink to code example:\nhttps://codesandbox.io/s/youthful-tree-vikl09?file=/src/App.tsx\n\nThe current behavior\nPortal content rendered from a suspending component is visible if the component suspends.\nThe expected behavior\nPortal should behave like any other child and not be shown when it's under a suspense that fallbacks.",
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/11387548?u=d48f100314f3eec5866927f6071fe0fb5b3bc97c&v=4",
              login: "h3rmanj",
              url: "https://github.com/h3rmanj",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjY=",
          node: {
            id: "I_kwDOAJy2Ks5WSm6c",
            number: 25676,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-14T10:37:16Z",
            title:
              "undefined is not an object (evaluating 'ReactSharedInternals.ReactCurrentDispatcher')",
            bodyText:
              "I created the next js app using bun but I am getting the following error after I added redux packages in it.\nError loading app: /Users/uni/Projects/NFTDD/nftdd-wallet/pages/_app\n989 |       error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');\n990 |     }\n991 |   }\n992 | }\n993 | \n994 | var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;\n                                 ^\nTypeError: undefined is not an object (evaluating 'ReactSharedInternals.ReactCurrentDispatcher')\n      at /Users/uni/Projects/NFTDD/nftdd-wallet/node_modules/react-dom/cjs/react-dom.development.js:994:29\n      at /Users/uni/Projects/NFTDD/nftdd-wallet/node_modules/react-dom/cjs/react-dom.development.js:29864:71\n      at http://localhost:3000/blob:node_modules.server.bun:1:16360\n      at /Users/uni/Projects/NFTDD/nftdd-wallet/node_modules/react-dom/index.js:37:27\n      at http://localhost:3000/blob:node_modules.server.bun:1:16360\n      at /Users/uni/Projects/NFTDD/nftdd-wallet/node_modules/react-redux/es/utils/reactBatchedUpdates.js:1:0\n989 |       error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');\n990 |     }\n991 |   }\n992 | }\n993 | \n994 | var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;\n                                 ^\nTypeError: undefined is not an object (evaluating 'ReactSharedInternals.ReactCurrentDispatcher')\n      at /Users/uni/Projects/NFTDD/nftdd-wallet/node_modules/react-dom/cjs/react-dom.development.js:994:29\n      at /Users/uni/Projects/NFTDD/nftdd-wallet/node_modules/react-dom/cjs/react-dom.development.js:29864:71\n      at http://localhost:3000/blob:node_modules.server.bun:1:16360\n      at /Users/uni/Projects/NFTDD/nftdd-wallet/node_modules/react-dom/index.js:37:27\n      at http://localhost:3000/blob:node_modules.server.bun:1:16360\n      at /Users/uni/Projects/NFTDD/nftdd-wallet/node_modules/react-redux/es/utils/reactBatchedUpdates.js:1:0\n\nReact version:\n\"react\": \"^18.2.0\",\nSteps To Reproduce\n\ninstall bun\nclone https://github.com/ZeeshanAhmadKhalil/react-bug\nbun dev\n\nLink to code example:\nhttps://github.com/ZeeshanAhmadKhalil/react-bug\nThe current behavior\nGetting error:\n undefined is not an object (evaluating 'ReactSharedInternals.ReactCurrentDispatcher')\nThe expected behavior\nShould run the next app with redux store added",
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/41861952?u=8c96cc9b619edb7bad760d09b840add6ce627509&v=4",
              login: "ZeeshanAhmadKhalil",
              url: "https://github.com/ZeeshanAhmadKhalil",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjc=",
          node: {
            id: "I_kwDOAJy2Ks5WSenM",
            number: 25675,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-14T09:17:39Z",
            title:
              "Bug: False positive warning with nested roots: Attempted to synchronously unmount a root while React was already rendering.",
            bodyText:
              'we get a warning on (legitimate?) use case, if there is a manually added react root inside another parent root\n(for example for part of Backbone view that is inserted into parent react component)\non unmount we can see that child root is in commit context, so we cant unmount it\nReact version: 18.2\nSteps To Reproduce\n\nhave nested react roots, child is manually added/removed on parent mount/unmount\nunmount parent root\n\nI have 2 way bindings for backbone.marionette and react\n\nreactToMarionette\nuseMarionetteInReact hook\nwhen root/parent component gets rendered/destroyed React gives this warning\n\nWarning: Attempted to synchronously unmount a root while React was already rendering.\nReact cannot finish unmounting the root until the current render has completed,\nwhich may lead to a race condition.\n\nI am looking for ways to fix this warning\nI think ReactChild node is somehow marked as toBeRendered at the app render, even though I would expect that app.root would not know about nested/inserted MView react root\nLink to code example: https://codesandbox.io/s/my-test-adapters-forked-tdbgdb\nproblematic code \nimport { View } from "backbone.marionette";\nimport React, { useCallback, useRef, useState } from "react";\n\nimport { createRoot } from "react-dom/client";\n\nexport function App() {\n  // create a reason to render inner component\n  const [isVisible, setVisible] = useState(true);\n  const toggle = useCallback(() => setVisible((i) => !i), []);\n\n  console.log("render app", isVisible);\n  return (\n    <>\n      <button onClick={toggle}>{`toggle: ${isVisible}`}</button>\n      {isVisible ? <SomeComponent /> : null}\n    </>\n  );\n}\n\n// component that children are controlled from outside (by marionette)\nconst SomeComponent = () => {\n  console.log("render SomeComponent");\n  const ref = useMarionetteInReact();\n  return <div ref={ref} className="stable-react-div"></div>;\n};\n\n// hook, for rendering marionette view\nconst useMarionetteInReact = () => {\n  const viewRef = useRef(null);\n\n  const divRef = useCallback((el) => {\n    if (el === null) {\n      console.log("MView destroy in useCallback", viewRef.current);\n      viewRef.current && viewRef.current.destroy();\n    } else {\n      console.log("created MView");\n      const MView = new reactToMarionette({\n        className: "reactToMarionette",\n        template: false,\n        component: <ReactChild />\n      });\n      viewRef.current = MView;\n      MView.render();\n      el.appendChild(MView.el);\n    }\n  }, []);\n\n  return divRef;\n};\n\nclass reactToMarionette extends View {\n  constructor(options) {\n    super(options);\n    this.component = options.component;\n    this.el.textContent = "I am Marionette";\n\n    console.log("create root", this.el);\n    this.divEl = document.createElement("div");\n    this.divEl.classList.add("portal-root");\n    this.root = createRoot(this.divEl);\n    this.el.append(this.divEl);\n  }\n\n  render() {\n    console.log("MView render");\n    this.root.render(this.component);\n  }\n\n  onBeforeDestroy() {\n    console.log("onBeforeDestroy", this.root);\n    if (this.root) {\n      // setTimeout(() => this.root.unmount());\n      this.root.unmount();\n    }\n  }\n}\n\nconst ReactChild = () => {\n  console.log("render ReactChild");\n  return <div> Hello, I am react child </div>;\n};\n\nThe current behavior\nwarning is displayed\nThe expected behavior\nno warning ?',
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/3647829?u=a933c1ac1ad0c4d26e96198fb095ef363f94abbc&v=4",
              login: "aovchinn",
              url: "https://github.com/aovchinn",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjg=",
          node: {
            id: "I_kwDOAJy2Ks5WMaO_",
            number: 25669,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-12T12:32:14Z",
            title:
              'Bug: Allow suppressing warning message "Warning: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop."',
            bodyText:
              "React version:\nSteps To Reproduce\n\nPass key property to a component.\nUse JS logger (or simply console log) that deeply serializes to JSON.\n\n\nLink to code example:\nhttps://codesandbox.io/s/intelligent-moon-17p3rq?file=/src/App.js\n\nThe current behavior\nShows following warning:\nWarning: ListItem: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)\n\nThe expected behavior\nSome JS logging frameworks are trying to serialize the entire object so they don't know if they should access the key property, for example:\nLogger.log(props);\nIn this case, we get an error message because it tries to reach the key property internally. Having an option to suppress this message allows us to optionally enable/disable it. Actually, accessing any object's property (unless private thus you cannot access anyways) should not generate a runtime warning/error.",
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/6571483?u=3bee8e93b2ec5decec236a376c964e31d368a079&v=4",
              login: "reyou",
              url: "https://github.com/reyou",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjk=",
          node: {
            id: "I_kwDOAJy2Ks5WKYjL",
            number: 25668,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-11T17:32:07Z",
            title:
              " throwing Promise.resolve cause unmount, remount. but Promise.reject doesn't?",
            bodyText:
              "Hi,   I'm not sure it's bug or intended,\nI want to deep dive how/when Suspense works as intended for rendering pattern aka fetch as you render.\nas I working with some codes,   I found three  different component responses in below states\nthrowing Promise pending - unmount , remount\nthrowing Promise fulfilled - unmount, remount\nthrowing Promise reject - doesn't unmount, remount.\nthrowing otherwise - cause Errorboundary work.\nwhy throwing Promise pending , fulfilled cause rerender?\nAnd why Promise.reject doesn't?",
            author: {
              avatarUrl:
                "https://avatars.githubusercontent.com/u/6510430?u=50d1ed7bcafe292e9090e57e7042d9ab42f865bd&v=4",
              login: "dante01yoon",
              url: "https://github.com/dante01yoon",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
        {
          cursor: "Y3Vyc29yOjEw",
          node: {
            id: "I_kwDOAJy2Ks5WJutF",
            number: 25667,
            closed: false,
            state: "OPEN",
            updatedAt: "2022-11-11T12:15:45Z",
            title:
              "[DevTools Bug]: react-devtools depends on vulnerable version of electron",
            bodyText:
              'Website or app\nhttps://github.com/facebook/react/blob/main/packages/react-devtools/package.json\nRepro steps\nIssue\nelectron package versions <18.3.7 suffer from a security vulnerability: "Exfiltration of hashed SMB credentials on Windows via file:// redirect".\nSee GHSA-p2jh-44qj-pf2v\nSolution\nUpgrade electron dependency in react-devtools to >18.3.7\nHow often does this bug happen?\nEvery time\nDevTools package (automated)\nNo response\nDevTools version (automated)\nNo response\nError message (automated)\nNo response\nError call stack (automated)\nNo response\nError component stack (automated)\nNo response\nGitHub query string (automated)\nNo response',
            author: {
              avatarUrl: "https://avatars.githubusercontent.com/u/1782771?v=4",
              login: "slobo80",
              url: "https://github.com/slobo80",
              __typename: "User",
            },
            __typename: "Issue",
          },
          __typename: "SearchResultItemEdge",
        },
      ],
      __typename: "SearchResultItemConnection",
    },
  },
};
