import { ComponentType, FC, ReactNode } from 'react'

interface PropsForComponent {
    text: string
}

interface IComponent {
    text: string;
    children?: ReactNode | JSX.Element;
    Component?: ComponentType;
    ComponentWithProps?: ComponentType<PropsForComponent>;
}

// Способы типизации функциональных компонентов //

const Component1: FC<IComponent> = (props: IComponent) => {
const {ComponentWithProps} = props;
  return (<>
            <div>{props.text}</div>
            {ComponentWithProps && <ComponentWithProps text='text'/>}
        </>
  )
}

//////////////////////////////////////////////////

const Component2 = ({ text }: IComponent): JSX.Element => {
    return (
      <div>{text}</div>
    )
}

//////////////////////////////////////////////////

const Component3: FC<IComponent> = ({ text }) => {
    return (
      <div>{text}</div>
    )
}

//////////////////////////////////////////////////

const Component4: FC<IComponent> = (props) => {
    return (
      <div>{props.text}</div>
    )
}

//////////////////////////////////////////////////

const Component5 = ({ text }: IComponent): ReactNode => {
    return (
      <div>{text}</div>
    )
}

//////////////////////////////////////////////////

const Component6 = ({ children }: IComponent): ReactNode => {
    return (
      <div>
        {children}
      </div>
    )
}

//////////////////////////////////////////////////