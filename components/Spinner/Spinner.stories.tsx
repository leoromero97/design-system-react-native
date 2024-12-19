import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Spinner from '../Spinner'

const SpinnerMeta = {
  title: "Spinner",
  component: Spinner,
  args: {
    primaryColor: '#070808',
    secondaryColor: '#DBDBDB',
    size: 'extraSmall'
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default SpinnerMeta;

type Story = StoryObj<typeof SpinnerMeta>;

export const Basic: Story = {
  render: (args) => <Spinner {...args} />,
};
