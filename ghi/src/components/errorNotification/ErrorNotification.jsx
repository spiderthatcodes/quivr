function ErrorNotification(props) {
  if (!props.error) {
    return null;
  }

  return (
    <div className="notification is-danger">
      {props.error}
      <h1>Aww Snap!</h1>
    </div>
  );
}

export default ErrorNotification;
