import { useState } from "react";

const Folder = ({ label, children }) => {
  const [abre, setAbrir] = useState(false);

  const handleToggle = () => {
    setAbrir(!abre);
  };

  return (
    <div className="folder__container">
      <input
        type="button"
        onClick={handleToggle}
        className="subtitulo btn__geral"
        value={label}
      />

      <hr />

      {abre && <div className="toggle">{children}</div>}
    </div>
  );
};

export default Folder;
