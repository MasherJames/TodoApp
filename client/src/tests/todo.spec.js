import { shallowMount, mount } from "@vue/test-utils";
import Todo from "../@/views/Todos";

describe("Todos Test", () => {
  const wrapper = mount(Todo);

  it("Has a div", () => {
    expect(wrapper.contains("div")).toBe(true);
  });
});
