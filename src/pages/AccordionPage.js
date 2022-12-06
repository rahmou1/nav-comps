import Accordion from "../components/Accordion";
const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: "First Element",
      content:
        "first Content we have everything we need to learn more about reactJS",
    },
    {
      id: 2,
      label: "Second Element",
      content: "Don't forget we need to learn also about NextJS",
    },
    {
      id: 3,
      label: "Third Element",
      content:
        "Also we don't mind if we learned about ThreeJS to make 3D models on Blender and import it to our websites ",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
