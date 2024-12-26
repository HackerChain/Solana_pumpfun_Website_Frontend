import LoadingComponent from "./LoadingComponent";

export const TableLoading: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full absolute z-1">
        <LoadingComponent />
      </div>
    </>
  );
};
