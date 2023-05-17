export const InitialState = {
  layout: false,
};

export const AuthReducer = (InitialState, action) => {
  switch (action.type) {
    case 'WITHOUT_HEADER':
      return {
        layout: true,
      };
    case 'WITH_HEADER':
      return {
        layout: false,
      };
    default:
      return {
        ...InitialState,
      };
  }
};
