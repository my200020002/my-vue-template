export default [
  {
    url: "/api/config/menu/list",
    method: "get",
    response: () => {
      return mockjs.mock({
        code: 0,
        msg: "",
      });
    },
  },
];
