import Input from "./input";

export default {
  title: "Input",
  component: Input,
};

const handleOnChange = (event) => {
  console.log('1->event',event);
}

export const Large = () => <Input onChange={handleOnChange} size="large" />;
export const Medium = () => <Input size="medium" />;
export const Small = () => <Input size="small" />;
