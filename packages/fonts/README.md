# @ice/fonts

This package contains shared font assets for the ICE monorepo.

## Usage

1. Import fonts from this package in your apps or packages.
2. Example usage with next/font/local:

```js
import LocalFont from "next/font/local";
import { vazirmatnFontPath } from "@ice/fonts";

const vazirmatn = LocalFont({
    src: vazirmatnFontPath,
    display: "swap",
    variable: "--font-vazirmatn",
});
```
