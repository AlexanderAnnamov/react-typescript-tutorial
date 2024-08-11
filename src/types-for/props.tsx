import { CSSProperties, FC, ReactNode, ButtonHTMLAttributes,
         InputHTMLAttributes, AnchorHTMLAttributes, 
         ComponentType,
         ComponentProps} from "react"

interface Props<T, E> {
    // style
    styles: CSSProperties;
    className: string;

    // Component JSX
    children: ReactNode | JSX.Element;
    Component: ComponentType;

    // HTML Atributes
    buttonAtributes: ButtonHTMLAttributes<HTMLButtonElement>;
    inputAtributes: InputHTMLAttributes<HTMLInputElement>;
    linkAtributes: AnchorHTMLAttributes<HTMLAnchorElement>;

    // events
    onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onAnimationStart: (event: React.AnimationEvent<HTMLDivElement>) => void;
    onCompositionEnd: (event: React.CompositionEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
    onWheel: (event: React.WheelEvent<HTMLDivElement>) => void;
    onTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void;
    onTransitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => void;

    // Generic
    items: T[] | E[]
}



export const props: FC<Props<string, number>> = ({ styles, children, buttonAtributes, className,
                            inputAtributes, linkAtributes, onClick, Component}) => {
  return (<>
            <div className={className} style={styles}>{children}</div>
            <button onClick={onClick} {...buttonAtributes}></button>
            <input {...inputAtributes}/>
            <a {...linkAtributes}></a>
            <Component/>
        </>
  )
}

interface GenericProps<T> {
    lists: T[]
}

export const genericProps = <T extends string | number | { id: number }>({ lists }: GenericProps<T>): JSX.Element[] => {
    return lists.map((item) => {
      const displayValue = typeof item === 'object' && 'id' in item ? item.id : item;
      return <div key={displayValue.toString()}>{displayValue.toString()}</div>;
    });
};

// Restricting Props

type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
}

type Zero = RandomNumberType & {
    isZero: boolean;
    isNegative?: never;
    isPositive?: never;
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RadomNumber = ({value, isZero, isNegative, isPositive}: RandomNumberProps) => {
    return <div>
        {value} {isZero && 'zero'} {isPositive && 'poziive'} { isNegative && 'negative'}
    </div>
}

// Literals and Exclude

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: `${HorizontalPosition}-${VerticalPosition}`
}

export const Toast = ({ position }: ToastProps) => {
    return <div>
        {position}
    </div>
}

// Extracting Component Props

export const ToastNew = (props: ComponentProps<typeof Toast>) => {
    return (
        <div>
            {props.position}
        </div>
    )
}

// Polymorphic Components

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary';
    as?: E;
    children: ReactNode
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export const Text = <E extends React.ElementType = 'div'> ({as, size, color, children}: TextProps<E>) => {
    const Component = as || 'div';
    return <Component className={`class-with-${color}-${size}`}>{children}</Component>
}