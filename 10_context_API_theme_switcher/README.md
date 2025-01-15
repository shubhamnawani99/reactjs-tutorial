# Creating Context and Provider in same .js File

```js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider =  ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
```
- Now, we can use useTheme() directly