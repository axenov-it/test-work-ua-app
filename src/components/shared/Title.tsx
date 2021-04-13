interface PropsInterface {
  text: string;
  isRequired?: boolean;
  classTitleName?: string;
  classRequiredName?: string;
}

const Title = ({
  text,
  isRequired,
  classTitleName,
  classRequiredName,
}: PropsInterface) => {
  const requiredElement = isRequired ? (
    <span className={classRequiredName}>*</span>
  ) : null;

  if (!text) return null;

  return (
    <h2 className={classTitleName}>
      {text}
      {requiredElement}
    </h2>
  );
};

export default Title;
