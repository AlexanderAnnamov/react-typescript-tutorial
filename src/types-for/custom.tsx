interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
}
  
export const CustomButton = ({ children, className, isDanger, ...attributes }: ButtonProps) => {
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

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
}
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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    className?: string;
    isDanger?: boolean;
}
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