export default function ItemListContainer(props) {
  const greeting = props.greeting;

  return (
    <div className="">
      <h1 className="d-flex justify-content-center align-items-center p-5">
        {greeting}
      </h1>
    </div>
  );
}
