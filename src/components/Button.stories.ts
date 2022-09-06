// Button.stories.ts
import { Meta, Story } from "@storybook/vue3";
import Button from "./Button.vue";

export default {
  component: Button,
} as Meta;

export const Primary: Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args" />`,
});

Primary.args = {};