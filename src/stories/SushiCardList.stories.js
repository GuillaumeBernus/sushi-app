import React from "react";

import SushiCardList from "../SushiCardList";
export default {
  title: "SushiApp/SushiCardList",
  component: SushiCardList,
};

const Template = (args) => <SushiCardList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  search: "tho",
};

export const Secondary = Template.bind({});
Secondary.args = {
  search: "saumon",
};
