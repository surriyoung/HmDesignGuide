const FontSizeGuide = () => {
  const fontSizes = [
    { label: "Heading 1", size: "2rem" },
    { label: "Heading 2", size: "1.5rem" },
    { label: "Body Large", size: "1.25rem" },
    { label: "Body", size: "1rem" },
    { label: "Caption", size: "0.875rem" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>폰트 크기 가이드</h1>
      {fontSizes.map((item) => (
        <p
          key={item.label}
          style={{ fontSize: item.size, marginBottom: "1rem" }}
        >
          {item.label} - {item.size}
        </p>
      ))}
    </div>
  );
};

export default FontSizeGuide;
