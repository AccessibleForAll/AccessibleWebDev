# Coding Standards

## Naming

Choosing good names is critical to creating code that is easy to use and easy to understand. You
should always take the time to think about whether you have chosen the right name for something.

#### English

All code, names, comments, etc. must be in English.

#### Use one name for one thing

Do not reuse names. Do not use names that can mean multiple things. Always use the same name for the
same thing. 

#### Descriptive

Names must be descriptive for the working or usage of the class, method or variable.

###### The name should always end with what the object is.

For example: a button must always end with `Button`.

- `MenuButton` a button used in the menu
- `ButtonMenu` a menu with buttons
- `MenuButtonIcon` an icon in the button of the menu

There is no limit for the length of a name, so prefer a long name which is clear and descriptive
than a short name which is not clear.

#### Context

A name should make sense within its context and should not have unnecessary information for that
context. For example a variable that holds the name of a user can be named `name` within a `User`
context. However if you need to hold the name of a user in another place, `userName` might be a
better name. Adding `user` within a `User` context (`user.userName`) is redundant and should be
avoided.

#### Interfaces

Interfaces should use the `I` as prefix. Like `IMyInterface`

#### Functions

Prefer using a verb as a name to indicate it will do something. Like `render`, `open` or `getData`.

#### Variables, properties, etc.

All non-functions should have a noun as a name, not a verb.

#### Booleans

Should start with `is`, `has`, `will` or `should`. Like `isValid` or `hasValues`.

#### Always Affirmative

Avoid negations. Prefer `isShown` over `isHidden` or
`isEnabled` over `isDisabled`. Do not use names like `notEditable`.

### Casing

#### Classes, Interfaces, Types, Enums and Generics

**PascalCase** Every individual word start with an upper case character, no underscores, no dashes.

#### Functions, properties, arguments and variables

**camelCase** Starts with a lower case character, every following individual word start with an
upper case character, no underscores, no dashes.

#### Globally used constants

**SNAKE_UPPER_CASE** Only use upper case characters, individual words must be separated with an underscore.

### File names

#### Page files, data files and hook files

**camelCase** Starts with a lower case character, every following individual word start with an
upper case character, no underscores, no dashes.

#### Component files

**PascalCase** Every individual word start with an upper case character, no underscores, no dashes.


## Coding

### Functions

Deconstructed props in the function parameters rather than inside the function body

```ts
interface IProps {
  propOne: string
  propTwo: string
}

const Component = ({ propOne, propTwo }: IProps) => { ... }

// rather than

const Component = (props: IProps) => {
  const { propOne, propTwo } = props
  ... 
}
```

Named export rather than default export

```ts
export const Component = () => { ... }

// rather than

const Component = () => { ... }

export default Component
```
### CSS

When in need to use a colour, use the defined variable from the `globals.ccs` file rather than adding hex codes.

```css
.class {
	color: var(--text);
}

/* rather than */

.class {
	color: #272727;
}
```


