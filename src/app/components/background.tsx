//Handles smooth transition between light and dark mode for gradient background
//Since the background is a gradient, normal color transitions dont work
//Instead, before pseudo elements are used to create a gradient that transitions between light and dark mode
const BackgroundComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      id="background-layer-light"
      className="background-layer transition-colors before:bg-gradient-to-b dark:before:from-default-200 dark:before:to-default-300 before:from-default-800 before:to-default-700 before:opacity-0 dark:before:opacity-100"
    >
      <div
        id="background-layer-dark"
        className="background-layer transition-colors before:bg-gradient-to-b before:from-default-200 before:to-default-300 dark:before:from-default-800 dark:before:to-default-700 dark:before:opacity-0 before:opacity-100"
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundComponent;
