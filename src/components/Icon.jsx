/* eslint-disable react/prop-types */
const Icon = ({ iconPath, icon, width, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="bg-gray-100 cursor-pointer flex items-center justify-center rounded-full w-10 h-10"
    >
      <img className={`${width} object-contain`} src={iconPath} alt={icon} />
    </div>
  );
};

export default Icon;
