import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";

interface PropsInterface {
  onClick: () => void;
  children: any;
  className?: string;
  iconClassName?: string;
  iconActiveClassName?: string;
  isActive: boolean;
}

const Radio = ({
  onClick,
  children,
  isActive,
  className,
  iconClassName,
  iconActiveClassName,
}: PropsInterface) => (
  <div className={className}>
    {isActive ? (
      <IoMdRadioButtonOn
        className={`${iconClassName} ${iconActiveClassName}`}
      />
    ) : (
      <IoMdRadioButtonOff className={iconClassName} />
    )}
    <span onClick={onClick}>{children}</span>
  </div>
);

export default Radio;
