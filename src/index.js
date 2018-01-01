import { Children } from 'react'

export const Case = ({ children }) => children

export const Default = ({ children }) => children

export const Switch = ({ children, on }) => {
  const maybeChild = Children.map(children, child => {
    if (child.type === Case) {
      if (child.props.condition === on) {
        return child
      }
    }
  })
  return maybeChild
}
