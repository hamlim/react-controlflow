import React from 'react'

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
  if (Array.isArray(maybeChild) && maybeChild.length > 0) {
    return maybeChild
  } else {
    const childArr = Children.toArray(children)
    return childArr[childArr.length - 1]
  }
}
