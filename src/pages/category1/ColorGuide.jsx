import React, { useEffect, useState } from "react";
import PaletteSection from "../../components/PaletteSection";
import BoxLayout from "../../components/BoxLayout";
import ContentTitle from "../../components/ContentTitle";

const ColorGuide = ({ theme }) => {
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
    getColorsFromRoot();
  }, [theme]);

  return (
    <div>
      <ContentTitle title={"색상 가이드"} />

      <BoxLayout title="Static Colors">
        <PaletteSection colors={colorValues.static} colorPalette />
      </BoxLayout>

      <BoxLayout title="Theme Colors">
        <PaletteSection
          title="Depth Colors"
          colors={colorValues.themed.depth}
          colorPalette
        />
        <PaletteSection
          title="Text Colors"
          colors={colorValues.themed.text}
          colorPalette
        />
        <PaletteSection
          title="Contents Colors"
          colors={colorValues.themed.contents}
          colorPalette
        />
      </BoxLayout>
    </div>
  );
};

export default ColorGuide;
