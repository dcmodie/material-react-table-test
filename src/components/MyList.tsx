interface Props {
  data: object;
  error: '';
  isLoading: boolean;
}

const MyList = ({ myObj }: { myObj: Props }) => {
  const { data, error, isLoading } = myObj;

  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default MyList;
