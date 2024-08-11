interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
}

type ButtonProps2 = {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
} & React.ComponentProps<'button'>

type ButtonProps3 = {
    children: string;
    className?: string;
    isDanger?: boolean;
} & Omit<React.ComponentProps<'button'>, 'children'>
  
export const CustomButton1 = ({ children, className, isDanger, ...attributes }: ButtonProps) => {
    return (
      <button
        type="button"
        className={className}
        style={{backgroundColor: isDanger ? 'red' : ''}}
        {...attributes}>
        {children}
      </button>
    );
}

export const CustomButton2 = ({ children, className, isDanger, ...attributes }: ButtonProps2) => {
    return (
      <button
        type="button"
        className={className}
        style={{backgroundColor: isDanger ? 'red' : ''}}
        {...attributes}
      >
        {children}
      </button>
    );
}

export const CustomButton3 = ({ children, className, isDanger, ...attributes }: ButtonProps3) => {
    return (
      <button
        type="button"
        className={className}
        style={{backgroundColor: isDanger ? 'red' : ''}}
        {...attributes}
      >
        {children}
      </button>
    );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
}

type LinkProps2 = {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
} & React.ComponentProps<'a'>

export const CustomLink = ({isDanger, className, ...attributes }: LinkProps) => {
    return (
      <a
        type="button"
        className={className}
        style={{borderColor: isDanger ? 'red' : ''}}
        {...attributes}
      />
    );
}

export const CustomLink2 = ({isDanger, className, ...attributes }: LinkProps2) => {
    return (
      <a
        type="button"
        className={className}
        style={{borderColor: isDanger ? 'red' : ''}}
        {...attributes}
      />
    );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
}

type InputProps2 = {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
} & React.ComponentProps<'input'>
export const CustomInput = ({isDanger, className, ...attributes }: InputProps) => {
    return (
      <input
        type="button"
        className={className}
        style={{borderColor: isDanger ? 'red' : ''}}
        {...attributes}
      />
    );
}

export const CustomInput2 = ({isDanger, className, ...attributes }: InputProps2) => {
    return (
      <input
        type="button"
        className={className}
        style={{borderColor: isDanger ? 'red' : ''}}
        {...attributes}
      />
    );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const CustomForm: React.FC<FormProps> = ({ onSubmit }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      onSubmit(event); 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  };