import React from "react";

const PaletteSection = ({ title, colors, colorPalette, children }) => {
  return (
    <>
      {title && <h3 className="box-content-title">{title}</h3>}
      <div className="palette">
        {colorPalette
          ? colors.map((color) => (
              <div key={color.var} className="palette-box">
                <div
                  className="color-chip"
                  style={{ background: color.hex }}
                ></div>
                {color.label}: {color.var}
              </div>
            ))
          : children}
      </div>
    </>
  );
};

export default PaletteSection;
