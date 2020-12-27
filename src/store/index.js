import Vue from 'vue'
import Vuex from 'vuex'
import { supabase } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    REMOVE_USER(state) {
      state.user = null
    },
  },
  actions: {
    async login(ctx, data) {
      console.log('user to be ', data)
      try {
        console.log('creating session')

        await supabase.auth.signIn({
          email: data.email,
          password: data.password
        }).then(async (res) => {
          console.log('everything good with login', res)
          await ctx.dispatch('checkUser')
        }).catch(err => console.error(err))
      } catch (err) {
        console.error('ERROR!', err)
        throw err
      }
    },
    async logout(ctx) {
      await supabase.auth.signOut()
      ctx.commit('REMOVE_USER')
    },
    async checkUser(ctx) {
      console.log('checking for user')
      try {
        const user = await supabase.auth.user()
        console.log(user)
        ctx.commit('SET_USER', user)
      } catch (err) {
        if (err == 'Error: Unauthorized') return
        console.error(err)
      }
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    loggedIn(state) {
      return !!state.user
    },
    token: (state) => state.user.token,
    isAdmin: (state) => true,
  },
  modules: {},
})
