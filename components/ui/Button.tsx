interface ButtonProps {
    text: string;
    onClick: () => void;
  }
  
  export default function Button({ text, onClick }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {text}
      </button>
    );
  }
  