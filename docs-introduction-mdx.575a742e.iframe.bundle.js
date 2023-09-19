"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2057],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./storybook/stories/docs/introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>introduction});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),components_dist=__webpack_require__("./node_modules/@storybook/components/dist/index.mjs");const StyledIcons=(0,emotion_styled_base_browser_esm.Z)(components_dist.Icons,{target:"e1sqd5x60"})({name:"p9t351",styles:"display:inline-block!important;width:14px"}),InlineIcon=props=>(0,jsx_runtime.jsx)(StyledIcons,{"aria-hidden":!0,...props});function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Docs/Introduction",name:"page"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"introduction",children:"Introduction"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"welcome",children:"Welcome!"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The WordPress Gutenberg project uses Storybook to view and work with the UI components developed in WordPress packages, especially ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/WordPress/gutenberg/tree/trunk/packages/components",target:"_blank",rel:"nofollow noopener noreferrer",children:"@wordpress/components"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"On this interactive site you can browse individual components, their controls, options, and settings in isolation. You can also modify controls and arguments and see the changes right away."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The components displayed on this site can be used in your code to build the editor's UI for your custom blocks or other pages.\nImport them from the components root directory like in below example:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Button } from '@wordpress/components';\n\nexport default function MyButton() {\n\treturn <Button>Click Me!</Button>;\n}\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"how-this-site-works",children:"How this site works"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The site shows the individual components in the sidebar and the Canvas on the right. Select the component you’d like to explore, and you’ll see the display on the ",(0,jsx_runtime.jsx)(_components.strong,{children:"Canvas"})," tab. If the component also has controls/arguments, you can modify them on the ",(0,jsx_runtime.jsx)(_components.strong,{children:"Controls"})," tab on the lower half of the screen."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To view the documentation for each component use the ",(0,jsx_runtime.jsx)(_components.strong,{children:"Docs"})," menu item in the top toolbar."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To view the source code for the component and its stories on GitHub, click the ",(0,jsx_runtime.jsx)(InlineIcon,{icon:"repository"})," View Source Repository button in the top right corner."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To use it in your local development environment run the following command in the top level Gutenberg directory:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm run storybook:dev\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"resources-to-learn-more",children:"Resources to learn more:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://storybook.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook.js.org"})," - Storybook is a frontend workshop for building UI components and pages in isolation."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/WordPress/gutenberg/issues?q=is%3Aopen+is%3Aissue+label%3A%22%5BPackage%5D+Components%22",target:"_blank",rel:"nofollow noopener noreferrer",children:"[Package] Components"})," - Open Issue Gutenberg Repo"]}),"\n"]})]})}InlineIcon.displayName="InlineIcon",InlineIcon.__docgenInfo={description:"",methods:[],displayName:"InlineIcon"};const introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);