import axios from 'axios'
const { VITE_API_HOST } = import.meta.env

const DEFAULT_STATE = {
  expensesList: [],

}

export const app = {
  state: DEFAULT_STATE,
  reducers: {
    SET_EXPENSES_LIST(state, payload) {
      return { ...state, expensesList: payload }
    }
  },
  effects: (dispatch) => ({
    async FetchExpensesList() {
      try {
        const response = await axios.get(`${VITE_API_HOST}/app/expenses/list/`)
        const data = response.data
        dispatch.app.SET_EXPENSES_LIST(data)
        return response
      } catch (error) {
        console.log(error, '<--- error')
      }
    }
  })
}
