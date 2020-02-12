# awesome-react-custom-hooks

> An awesome list of useful react custom hooks.

[![NPM](https://img.shields.io/npm/v/awesome-react-custom-hooks.svg)](https://www.npmjs.com/package/awesome-react-custom-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save awesome-react-custom-hooks
```

## Usage

### useFetch

```jsx
  import React from 'react'
  import { useFetch } from 'awesome-react-custom-hooks'

  const App = () => {
    const [res, error, isLoading] = useFetch(
      'https://api.github.com/users/lcnogueira'
    )

    if (error) {
      return <div>Error</div>
    }
    return (
      <>
        <h1>useFetch Example</h1>
        {isLoading ? <div>Loading...</div> : JSON.stringify(res)}
      </>
    )
  }
```

### useLocalStorageState

```jsx
import React from 'react'
import { useLocalStorageState } from 'awesome-react-custom-hooks'

function App() {
  const [counter, setCounter] = useLocalStorageState('counter', 0)

  return (
    <>
      <h1>useLocalStorageState Example</h1>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Add counter
      </button>
    </>
  )
}
```

### useMousePosition

```js
import React from "react";
import { useMousePosition } from "awesome-react-custom-hooks";

function App() {
  const position = useMousePosition();

  return (
    <>
      <h1>useMousePosition Example</h1>
      {position.x}:{position.y}
    </>
  );
}
```

```js
import React, { useState } from "react";
import { useMousePosition } from "awesome-react-custom-hooks";

function App() {
  const [query, setQuery] = useState("redux");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://hn.algolia.com/api/v1/search?query=${query}`,
    {
      hits: []
    }
  );
  return (
    <>
      <h1>useDataApi Example</h1>
      <form
        onSubmit={event => {
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

```

## License

MIT © [lcnogueira](https://github.com/lcnogueira)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
