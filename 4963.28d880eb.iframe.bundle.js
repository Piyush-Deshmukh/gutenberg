"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4963],{"./packages/components/build-module/toggle-group-control/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useToggleGroupControlContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ToggleGroupControlContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useToggleGroupControlContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ToggleGroupControlContext),__WEBPACK_DEFAULT_EXPORT__=ToggleGroupControlContext},"./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>component});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{ButtonContentView:()=>ButtonContentView,LabelView:()=>LabelView,backdropView:()=>backdropView,buttonView:()=>buttonView,labelBlock:()=>labelBlock});var react=__webpack_require__("./node_modules/react/index.js"),X2PAO7C6=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/X2PAO7C6.js"),use_reduced_motion=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),motion=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),context=__webpack_require__("./packages/components/build-module/toggle-group-control/context.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),reduce_motion=__webpack_require__("./packages/components/build-module/utils/reduce-motion.js");const LabelView=(0,emotion_styled_base_browser_esm.Z)("div",{target:"et6ln9s1"})({name:"sln1fl",styles:"display:inline-flex;max-width:100%;min-width:0;position:relative"}),labelBlock={name:"82a6rk",styles:"flex:1"},buttonView=({isDeselectable,isIcon,isPressed,size})=>(0,emotion_react_browser_esm.iv)("align-items:center;appearance:none;background:transparent;border:none;border-radius:",config_values.Z.controlBorderRadius,";color:",colors_values.D.gray[700],";fill:currentColor;cursor:pointer;display:flex;font-family:inherit;height:100%;justify-content:center;line-height:100%;outline:none;padding:0 12px;position:relative;text-align:center;transition:background ",config_values.Z.transitionDurationFast," linear,color ",config_values.Z.transitionDurationFast," linear,font-weight 60ms linear;",(0,reduce_motion.r)("transition")," user-select:none;width:100%;z-index:2;&::-moz-focus-inner{border:0;}&:active{background:",config_values.Z.toggleGroupControlBackgroundColor,";}",isDeselectable&&deselectable," ",isIcon&&isIconStyles({size})," ",isPressed&&pressed,";","","",""),pressed=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.white,";&:active{background:transparent;}","","",""),deselectable=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[900],";&:focus{box-shadow:inset 0 0 0 1px ",colors_values.D.white,",0 0 0 ",config_values.Z.borderWidthFocus," ",colors_values.D.theme.accent,";outline:2px solid transparent;}","","",""),ButtonContentView=(0,emotion_styled_base_browser_esm.Z)("div",{target:"et6ln9s0"})("display:flex;font-size:",config_values.Z.fontSize,";line-height:1;"),isIconStyles=({size="default"})=>(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[900],";width:",{default:"30px","__unstable-large":"34px"}[size],";padding-left:0;padding-right:0;","","",""),backdropView=(0,emotion_react_browser_esm.iv)("background:",colors_values.D.gray[900],";border-radius:",config_values.Z.controlBorderRadius,";position:absolute;inset:0;z-index:1;outline:2px solid transparent;outline-offset:-3px;","","","");var use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js"),tooltip=__webpack_require__("./packages/components/build-module/tooltip/index.js");const{ButtonContentView:component_ButtonContentView,LabelView:component_LabelView}=styles_namespaceObject,REDUCED_MOTION_TRANSITION_CONFIG={duration:0},WithToolTip=({showTooltip,text,children})=>showTooltip&&text?(0,react.createElement)(tooltip.Z,{text,placement:"top"},children):(0,react.createElement)(react.Fragment,null,children);const ConnectedToggleGroupControlOptionBase=(0,context_connect.Iq)((function ToggleGroupControlOptionBase(props,forwardedRef){const shouldReduceMotion=(0,use_reduced_motion.J)(),toggleGroupControlContext=(0,context.L)(),id=(0,use_instance_id.Z)(ToggleGroupControlOptionBase,toggleGroupControlContext.baseId||"toggle-group-control-option-base"),buttonProps=(0,use_context_system.y)({...props,id},"ToggleGroupControlOptionBase"),{isBlock=!1,isDeselectable=!1,size="default"}=toggleGroupControlContext,{className,isIcon=!1,value,children,showTooltip=!1,onFocus:onFocusProp,...otherButtonProps}=buttonProps,isPressed=toggleGroupControlContext.value===value,cx=(0,use_cx.I)(),labelViewClasses=(0,react.useMemo)((()=>cx(isBlock&&labelBlock)),[cx,isBlock]),itemClasses=(0,react.useMemo)((()=>cx(buttonView({isDeselectable,isIcon,isPressed,size}),className)),[cx,isDeselectable,isIcon,isPressed,size,className]),backdropClasses=(0,react.useMemo)((()=>cx(backdropView)),[cx]),commonProps={...otherButtonProps,className:itemClasses,"data-value":value,ref:forwardedRef};return(0,react.createElement)(component_LabelView,{className:labelViewClasses},(0,react.createElement)(WithToolTip,{showTooltip,text:otherButtonProps["aria-label"]},isDeselectable?(0,react.createElement)("button",{...commonProps,onFocus:onFocusProp,"aria-pressed":isPressed,type:"button",onClick:()=>{isDeselectable&&isPressed?toggleGroupControlContext.setValue(void 0):toggleGroupControlContext.setValue(value)}},(0,react.createElement)(component_ButtonContentView,null,children)):(0,react.createElement)(X2PAO7C6.Y,{render:(0,react.createElement)("button",{...commonProps,onFocus:event=>{onFocusProp?.(event),event.defaultPrevented||toggleGroupControlContext.setValue(value)}}),value},(0,react.createElement)(component_ButtonContentView,null,children))),isPressed?(0,react.createElement)(motion.E.div,{className:backdropClasses,transition:shouldReduceMotion?REDUCED_MOTION_TRANSITION_CONFIG:void 0,role:"presentation",layoutId:"toggle-group-backdrop-shared-layout-id"}):null)}),"ToggleGroupControlOptionBase"),component=ConnectedToggleGroupControlOptionBase},"./packages/components/build-module/toggle-group-control/toggle-group-control/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>toggle_group_control_component});var react=__webpack_require__("./node_modules/react/index.js"),LayoutGroup=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/ui/context/context-connect.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js"),base_control=__webpack_require__("./packages/components/build-module/base-control/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js");const enclosingBorders=isBlock=>{const enclosingBorder=(0,emotion_react_browser_esm.iv)("border-color:",colors_values.D.ui.border,";","","","");return(0,emotion_react_browser_esm.iv)(isBlock&&enclosingBorder," &:hover{border-color:",colors_values.D.ui.borderHover,";}&:focus-within{border-color:",colors_values.D.ui.borderFocus,";box-shadow:",config_values.Z.controlBoxShadowFocus,";z-index:1;outline:2px solid transparent;outline-offset:-2px;}","","","")},toggleGroupControlSize=size=>(0,emotion_react_browser_esm.iv)("min-height:",{default:"36px","__unstable-large":"40px"}[size],";","","",""),block={name:"7whenc",styles:"display:flex;width:100%"},VisualLabelWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"eakva830"})({name:"zjik7",styles:"display:flex"});var radio_store=__webpack_require__("./node_modules/@ariakit/react-core/esm/radio/radio-store.js"),radio_group=__webpack_require__("./node_modules/@ariakit/react-core/esm/radio/radio-group.js"),component=__webpack_require__("./packages/components/build-module/view/component.js"),context=__webpack_require__("./packages/components/build-module/toggle-group-control/context.js"),use_previous=__webpack_require__("./packages/compose/build-module/hooks/use-previous/index.js");function useComputeControlledOrUncontrolledValue(valueProp){const hasEverBeenUsedInControlledMode=(0,react.useRef)(!1),previousValueProp=(0,use_previous.Z)(valueProp);let value,defaultValue;return(0,react.useEffect)((()=>{hasEverBeenUsedInControlledMode.current||(hasEverBeenUsedInControlledMode.current=void 0!==valueProp&&void 0!==previousValueProp&&valueProp!==previousValueProp)}),[valueProp,previousValueProp]),hasEverBeenUsedInControlledMode.current?value=null!=valueProp?valueProp:"":defaultValue=valueProp,{value,defaultValue}}const ToggleGroupControlAsRadioGroup=(0,react.forwardRef)((function UnforwardedToggleGroupControlAsRadioGroup({children,isAdaptiveWidth,label,onChange:onChangeProp,size,value:valueProp,id:idProp,...otherProps},forwardedRef){const generatedId=(0,use_instance_id.Z)(ToggleGroupControlAsRadioGroup,"toggle-group-control-as-radio-group"),baseId=idProp||generatedId,{value,defaultValue}=useComputeControlledOrUncontrolledValue(valueProp),wrappedOnChangeProp=onChangeProp?v=>{onChangeProp(null!=v?v:void 0)}:void 0,radio=(0,radio_store.sg)({defaultValue,value,setValue:wrappedOnChangeProp}),selectedValue=radio.useState("value"),setValue=radio.setValue,groupContextValue=(0,react.useMemo)((()=>({baseId,isBlock:!isAdaptiveWidth,size,value:selectedValue,setValue})),[baseId,isAdaptiveWidth,size,selectedValue,setValue]);return(0,react.createElement)(context.Z.Provider,{value:groupContextValue},(0,react.createElement)(radio_group.E,{store:radio,"aria-label":label,as:component.Z,...otherProps,id:baseId,ref:forwardedRef},children))}));var use_controlled_value=__webpack_require__("./packages/components/build-module/utils/hooks/use-controlled-value.js");const ToggleGroupControlAsButtonGroup=(0,react.forwardRef)((function UnforwardedToggleGroupControlAsButtonGroup({children,isAdaptiveWidth,label,onChange,size,value:valueProp,id:idProp,...otherProps},forwardedRef){const generatedId=(0,use_instance_id.Z)(ToggleGroupControlAsButtonGroup,"toggle-group-control-as-button-group"),baseId=idProp||generatedId,{value,defaultValue}=useComputeControlledOrUncontrolledValue(valueProp),[selectedValue,setSelectedValue]=(0,use_controlled_value.O)({defaultValue,value,onChange}),groupContextValue=(0,react.useMemo)((()=>({baseId,value:selectedValue,setValue:setSelectedValue,isBlock:!isAdaptiveWidth,isDeselectable:!0,size})),[baseId,selectedValue,setSelectedValue,isAdaptiveWidth,size]);return(0,react.createElement)(context.Z.Provider,{value:groupContextValue},(0,react.createElement)(component.Z,{"aria-label":label,...otherProps,ref:forwardedRef,role:"group"},children))}));const ToggleGroupControl=(0,context_connect.Iq)((function UnconnectedToggleGroupControl(props,forwardedRef){const{__nextHasNoMarginBottom=!1,className,isAdaptiveWidth=!1,isBlock=!1,isDeselectable=!1,label,hideLabelFromVision=!1,help,onChange,size="default",value,children,...otherProps}=(0,use_context_system.y)(props,"ToggleGroupControl"),baseId=(0,use_instance_id.Z)(ToggleGroupControl,"toggle-group-control"),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx((({isBlock,isDeselectable,size})=>(0,emotion_react_browser_esm.iv)("background:",colors_values.D.ui.background,";border:1px solid transparent;border-radius:",config_values.Z.controlBorderRadius,";display:inline-flex;min-width:0;padding:2px;position:relative;",toggleGroupControlSize(size)," ",!isDeselectable&&enclosingBorders(isBlock),";","","",""))({isBlock,isDeselectable,size}),isBlock&&block,className)),[className,cx,isBlock,isDeselectable,size]),MainControl=isDeselectable?ToggleGroupControlAsButtonGroup:ToggleGroupControlAsRadioGroup;return(0,react.createElement)(base_control.ZP,{help,__nextHasNoMarginBottom},!hideLabelFromVision&&(0,react.createElement)(VisualLabelWrapper,null,(0,react.createElement)(base_control.ZP.VisualLabel,null,label)),(0,react.createElement)(MainControl,{...otherProps,className:classes,isAdaptiveWidth,label,onChange,ref:forwardedRef,size,value},(0,react.createElement)(LayoutGroup.S,{id:baseId},children)))}),"ToggleGroupControl"),toggle_group_control_component=ToggleGroupControl},"./packages/components/build-module/utils/reduce-motion.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function reduceMotion(prop="transition"){let style;switch(prop){case"transition":style="transition-duration: 0ms;";break;case"animation":style="animation-duration: 1ms;";break;default:style="\n\t\t\t\tanimation-duration: 1ms;\n\t\t\t\ttransition-duration: 0ms;\n\t\t\t"}return`\n\t\t@media ( prefers-reduced-motion: reduce ) {\n\t\t\t${style};\n\t\t}\n\t`}__webpack_require__.d(__webpack_exports__,{r:()=>reduceMotion})}}]);