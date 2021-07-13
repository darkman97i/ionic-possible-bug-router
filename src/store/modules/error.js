const getDefaultState = () => {
  return {
    errors: [],
    errorPropagation: true
  };
};

const state = getDefaultState();

const getters = {
  errors(state) {
    return state.errors;
  },
  hasErrors(state) {
    return (state.errors && state.errors.length > 0);
  },
  errorPropagation(state) {
    return state.errorPropagation;
  },
  warningPropagation(state) {
    return state.warningPropagation;
  },
  lastErrorMessage(state) {
    if (state.errors.length > 0) {
      const error = state.errors[state.errors.length - 1];
      let text = '';
      if (error.statusText) {
        text = error.statusText + ': ';
      } else if (error.status) {
        text = 'Error code ' + error.status + ': ';
      }
      text += error.message; // Always include the error message at the end
      return text;
    } else {
      return '';
    }
  }
};

const mutations = {
  resetErrorState(state) {
    // acquire initial state
    const s = getDefaultState();
    Object.keys(s).forEach(key => {
      state[key] = s[key];
    });
  },
  addError(state, error) {
    const newError = {
      name: error.name,
      message: error.message,
      status: (error.status ? error.status : ''),
      statusText: (error.statusText ? error.statusText : ''),
      errorData: (error.errorData ? error.errorData : ''),
      errorName: (error.errorName ? error.errorName : ''),
      errorMessage: (error.errorMessage ? error.errorMessage : ''),
      serverDate: (error.serverDate ? error.serverDate : ''),
      errorList: (error.errorList ? error.errorList : []),
      serverStack: (error.serverStack ? error.serverStack : ''),
      stack: error.stack,
      date: new Date()
    };
    state.errors.unshift(newError);
  },
  cleanErrors(state) {
    state.errors = [];
  },
  removeError(state, error) {
    state.errors = state.errors.filter(el => el !== error);
  }
};

const actions = {
  resetErrorState({ commit }) {
    commit('resetErrorState');
  },
  addError({ commit, dispatch, rootGetters }, error) {
    commit('addError', error);
    const message = {
      message: rootGetters['language/i18n']('kcenter.error.occurred'),
      variant: 'danger'
    };
    dispatch('alert/addAlert', message, { root: true });
  },
  cleanErrors({ commit }) {
    commit('cleanErrors');
  },
  removeError({ commit, dispatch }, payload) {
    commit('removeError', payload.error);
    dispatch('alert/addAlert', { message: payload.message }, { root: true });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
