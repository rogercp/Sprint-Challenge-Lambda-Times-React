##1
Props-types are used to check if your incoming data is what you wanted. They are important because it will eventually get harder to track your data in larger applications so its a typechecker for developers.



##2
An application lifecycle has three main methods. The mounting updating and unmounting. The mounting phase is where your application first renders after the constructor then the componentDidMount method will run; the mounting and unmounting phase will only happen once in an app. The updating phase is where most activity happens, if props should change or setState is called then the application will render again.



##3
A higher order component is useful for when you need to reuse the same logic for two other components. A HOC is a component that takes in a component as an argument and return a new component.



##4
I would say there is more than three but four I know are styling libraries/frameworks, inline-styling, external css sheets, and css modules.

1 Styling libraries/frameworks are useful because some come with already built styles that helps you keep your focus on react.

2 Inline-styling is useful for convenience and how easy it is to write css right in your jsx however you cannot use some things like psuedo selectors or hover methods.

3 External Stylesheets are easy to use but come with downfalls like; the styles are globally scoped and can add style to an element with the same name somewhere where you did not intend.

4 CSS Modules are similar to external stylesheets however the scope is localized so styling rules wont bleed into other components.



