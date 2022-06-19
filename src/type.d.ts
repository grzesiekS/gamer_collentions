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

type children = {
  children : JSX.Element
}

type positionList = {
  _id : string
  Name : string
}
