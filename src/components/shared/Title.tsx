const Title = ({
  title1,
  title2,
  description,
}: {
  title1: string;
  title2: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center xl:mx-8">
      <h1 className="text-2xl font-medium text-white capitalize lg:text-3xl ">
        {title1} <span className=" text-primary">{title2}</span>
      </h1>

      <div className="mt-4">
        <span className="inline-block w-40 h-1 rounded-full bg-primary"></span>
        <span className="inline-block w-3 h-1 mx-1 rounded-full bg-primary"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-primary"></span>
      </div>

      <p className="max-w-4xl mt-4 text-lg font-medium clear-start text-text">
        {description}
      </p>
    </div>
  );
};

export default Title;
