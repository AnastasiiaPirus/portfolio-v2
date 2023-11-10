---
title: 'Multiple Fonts in Next.js 13'
excerpt: 'Learn how to use multiple fonts styling in Next.js 13 with CSS variables.'
coverImage: '/images/blog/nextjs-two-fonts/cover.jpg'
date: '2023-06-27T00:00:00.000Z'
---

![Preview](/images/blog/nextjs-two-fonts/1.webp)

When working on a project with Next.js, one of the exciting features to explore is the Font Module, which optimizes
fonts for enhanced privacy and performance. The official Next.js documentation provides a comprehensive guide on
utilizing this
module, [including instructions for using multiple fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts)
.

However, there’s an inconvenience that arises when working with the Font Module. By default, Next.js recommends using
variables within the *className* prop, which can become messy and impair code readability, when dealing with more than
one class.

The example in the documentation looks pretty clean:

```tsx
<h1 className={roboto_mono.className}>My page</h1>
```

But things get really complex once you want to add more classes, transforming it into an interpolated string for example
when using Tailwind CSS for styling:

```tsx 
<h1 className={`${roboto_mono.className} text-4xl font-bold text-zinc-800`}>
    My page
</h1> 
```

Yes, the code is still valid, but I find it extremely inconvenient to write *{\`${}\`}* for every text line.
So today’s goal is to apply the font with a string in className.

Here is how to achieve it step-by-step:

1. In *'layout.tsx'* import fonts from *‘next/font/google’* (or *‘next/font/local’*). Create constants for the font
   names. Make sure to include [CSS variables](https://nextjs.org/docs/app/api-reference/components/font#variable) for
   each font.

```tsx
import "./globals.css";
import {Advent_Pro, Capriola} from "next/font/google";

const capriola = Capriola({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-capriola",
});
const adventPro = Advent_Pro({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-advent-pro",
});
```

2. Add the font variables as *classNames* to the parent tag in your layout component.

```tsx
export default function RootLayout(
    {children}: { children: React.ReactNode; }) {
    return (
        <html lang="en" className={`${capriola.variable} ${adventPro.variable}`}>
        <body>{children}</body>
        </html>
    );
}
```

3. In your global stylesheet (e.g., *globals.css*), create classes for the fonts and apply any additional font styles
   if needed. Use variable names defined in the previous step.

```css
.text1 {
    font-family: var(--font-capriola);
}

.text2 {
    font-family: var(--font-advent-pro);
    font-weight: 200;
    color: #5c5cff;
}
```

4. Now, in your components and pages, you can simply add classes to apply the font family and styling.

```tsx
export default function Home() {
    return (
        <>
            <h1>Default</h1>
            <h1 className="text1">Capriola</h1>
            <h1 className="text2">Agdasima</h1>
        </>
    );
}
```

That’s how it is going to look in the browser:
![Preview](/images/blog/nextjs-two-fonts/2.webp)
By following these simple steps, you can conveniently apply the fonts using classes in Next.js without the need for
string interpolation in every line, making your code more readable.

For the full code together check
out [GitHub](https://github.com/AnastasiiaPirus/source-code-for-blogs/tree/main/nextjs-two-fonts).
