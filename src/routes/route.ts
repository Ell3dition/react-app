import { lazy } from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

const LazyLayoutPage = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayoutPage,
    name: 'Lazy Layout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },

]
