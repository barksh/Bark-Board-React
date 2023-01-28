/**
 * @author WMXPY
 * @namespace Board
 * @description Board
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BarkBoard } from "../src";

export default {
  title: "Board",
  component: BarkBoard,
} as ComponentMeta<typeof BarkBoard>;

const Template: ComponentStory<typeof BarkBoard> = (args: any) => {

  return (
    <BarkBoard>
      {args.children}
    </BarkBoard>);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
