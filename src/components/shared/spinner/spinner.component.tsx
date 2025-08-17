import { spinnerContainer, spinner, spinnerText } from './spinner.css';

interface SpinnerProps {
  message?: string;
}

const Spinner = ({ message = 'Loading...' }: SpinnerProps) => {
  return (
    <div className={spinnerContainer}>
      <div className={spinner}></div>
      <p className={spinnerText}>{message}</p>
    </div>
  );
};

export default Spinner;
