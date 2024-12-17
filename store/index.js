export const state = () => ({
  isMobile: false, //mobile 사이즈 여부
});

export const mutations = {
  setIsMobile(state, value) {
    state.isMobile = value;
  },
};

export const actions = {
  updateIsMobile({ commit }) {
    commit("setIsMobile", window.innerWidth <= 768);
  },
};

export const getters = {
  isMobile: (state) => state.isMobile,
};
