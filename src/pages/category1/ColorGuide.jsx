import React, { useEffect, useState } from "react";

const ColorGuide = () => {
  const [theme, setTheme] = useState("light");
  const [colorValues, setColorValues] = useState({
    static: [],
    themed: {
      depth: [],
      text: [],
      contents: [],
    },
  });

  const staticColors = [
    { label: "Primary", var: "--color-primary" },
    { label: "Text Emphasis", var: "--text-emphasis" },
  ];

  const depthColors = [
    { label: "Depth1", var: "--depth1" },
    { label: "Depth2", var: "--depth2" },
    { label: "Depth3", var: "--depth3" },
  ];

  const textColors = [
    { label: "Text1", var: "--text1" },
    { label: "Text2", var: "--text2" },
    { label: "Text3", var: "--text3" },
    { label: "Text4", var: "--text4" },
  ];

  const contentsColors = [
    { label: "Background", var: "--bg" },
    { label: "Content Background", var: "--bg2" },
    { label: "TH", var: "--th" },
    { label: "TD Hover", var: "--td-hover" },
    { label: "Line", var: "--line" },
    { label: "Line2", var: "--line2" },
  ];

  const getColorsFromRoot = () => {
    const root = document.documentElement;
    const style = getComputedStyle(root);

    const staticValues = staticColors.map((item) => ({
      ...item,
      hex: style.getPropertyValue(item.var).trim(),
    }));

    const depthValues = depthColors.map((item) => ({
      ...item,
      hex: style.getPropertyValue(item.var).trim(),
    }));

    const textValues = textColors.map((item) => ({
      ...item,
      hex: style.getPropertyValue(item.var).trim(),
    }));

    const contentsValues = contentsColors.map((item) => ({
      ...item,
      hex: style.getPropertyValue(item.var).trim(),
    }));

    setColorValues({
      static: staticValues,
      themed: {
        depth: depthValues,
        text: textValues,
        contents: contentsValues,
      },
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    getColorsFromRoot();
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <div className="main-title-wrap">
        <h2 className="main-title">색상 가이드</h2>
        <div className="toggle-switch mode-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <section className="box">
        <h3 className="box-title">🎨 Static Colors</h3>
        <div className="box-content color-palette">
          {colorValues.static.map((color) => (
            <div key={color.var} className="color-box">
              <div
                className="color-chip"
                style={{ background: color.hex }}
              ></div>
              {color.label}: {color.var}
            </div>
          ))}
        </div>
      </section>

      <section className="box">
        <h3 className="box-title">
          {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </h3>

        {/* Depth Colors */}
        <div className="box-content">
          <h3 className="content-title">Depth Colors</h3>
          <div className="color-palette">
            {colorValues.themed.depth.map((color) => (
              <div key={color.var} className="color-box">
                <div
                  className="color-chip"
                  style={{ background: color.hex }}
                ></div>
                {color.label}: {color.var}
              </div>
            ))}
          </div>
          <h3 className="content-title">Text Colors</h3>
          <div className="color-palette">
            {colorValues.themed.text.map((color) => (
              <div key={color.var} className="color-box">
                <div
                  className="color-chip"
                  style={{ background: color.hex }}
                ></div>
                {color.label}: {color.var}
              </div>
            ))}
          </div>
          <h3 className="content-title">Contents Colors</h3>
          <div className="color-palette">
            {colorValues.themed.contents.map((color) => (
              <div key={color.var} className="color-box">
                <div
                  className="color-chip"
                  style={{ background: color.hex }}
                ></div>
                {color.label}: {color.var}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorGuide;
