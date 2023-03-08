import { Sandpack } from '@codesandbox/sandpack-react'
import React from 'react'

export default function CodePreview({ code, className = "", ...props}) {
  return (
    <Sandpack
      customSetup={{ dependencies: { "@jokay03j-v2/sasslib": "^1.1.5" } }}
      options={{
        showNavigator: true,
        showLineNumbers: true,
        showTabs: true,
      }}
      files={{
        "index.html": code,
        "package.json": `
              {
                "entry": "index.html",
                "dependencies": {
                  "@jokay03j-v2/sasslib": "^1.1.5"
                }
            }`,
        "index.js": `import "@jokay03j-v2/sasslib"`,
      }}
      className={className}
      {...props}
    ></Sandpack>
  );
}
