import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "src/components/MyButton";

/**
 * This is a custom button component. You can use it in your apps.
 */
const meta = {
  title: "Example/MyButton",
  component: MyButton,
  tags: ["autodocs"],
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleMyButton: Story = {
  render: () => {
    return (
      <MyButton onClick={() => alert("I am a re-usable button")}>
        Click Me
      </MyButton>
    );
  },
};
