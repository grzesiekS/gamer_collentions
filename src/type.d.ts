interface MainLayoutProps {
  children
}

interface NavBarProps {
  listOfPositions : positionList[]
}

interface PageTitleProps {
  titleContent : string
}

interface LogoProps {
  size : string
}

interface LinkProps {
  name : string
  reference ?: string
  size : string
}

interface TitleProps {
  content : string
  size : string
  align : string
}

interface ButtonProps {
  content ?: string
  children?
  OnClickFunc ?: () => void
}

interface IconsGeneratorProps {
  iconName : string
  iconsList : any
  alternativeIcon : IntrinsicAttributes & FontAwesomeIconProps
  children?
}

interface InfoElementProps {
  title : string
  description : string
}

interface NewsInfoProps {
  children
}

interface NewsElementProps {
  title : string
  description : string
  date : Date
}

type children = {
  children : JSX.Element
}

type positionList = {
  _id : string
  Name : string
}
