import { IoIosArrowUp } from "react-icons/io";
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    variants: 'primary',
    size: 'sm',
    disable: false,
    onClick: () => {},
    children: <IoIosArrowUp />,
  },
};
