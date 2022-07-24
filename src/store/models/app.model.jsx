
// const userService = new APIService('/users')
// const userListService = new APIService('/user/views')
// const partnerSearchService = new APIService('/user/partnermonitor')
// const userOnlineService = new APIService('/user/onlineuser')
// const lineService = new APIService('/line/lineaccout/list')
// const resolveService = new APIService('/setting/ticket-type/list')

const DEFAULT_STATE = {
  time: null,
  chatInfoPanelVisible: true,
  partners: [],
  line: [],
  resolve: [],
  users: [],
  usersList: [],
  image_select: '',
  masterstatusQueue: ['All', 'Inbox', 'Resolve', 'Follow up'],
  status_queue: 'Inbox',
  currentStatusQueue: 'Inbox',
  onlineOperator: [],
  socket: null,
  is_search: false,
  is_normal_chat: false,
  is_search_message: false,
  is_highlight: false,
  is_edit_image: false,
  is_expand: true,
  unread_chat: [],
  search_text: '',
  fcm_token: '',
  page: 20
}

export const app = {
  state: DEFAULT_STATE,
  reducers: {
    SET_FCM_TOKEN(state, payload) {
      return { ...state, fcm_token: payload }
    }
  },
  effects: (dispatch) => ({
    async fetchPartners(_, rootState) {
      // try {
      //   const res = await userService.list({ role: 'partner' })
      //   const partners = res?.results ?? []
      //   dispatch.app.SET_STATE({ partners })
      //   return res
      // } catch (error) {
      //   console.log(error, '<--- error')
      // }
    }
  })
}
