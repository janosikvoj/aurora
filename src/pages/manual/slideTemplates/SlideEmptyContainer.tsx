interface SlideEmptyContainerProps {
  children: React.ReactNode;
}

const SlideEmptyContainer: React.FC<SlideEmptyContainerProps> = ({
  children,
}) => {
  return (
    <div className="absolute inset-16 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default SlideEmptyContainer;
