import React from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config'
import { createAction } from '../utils/createAction'

export function useAuth() {
    const [state, dispatch] = React.useReducer((state, action)=> {
        switch(action.type) {
          case 'SET_USER':
            return {
              ...state,
              user: {...action.payload}
            }
          case 'REMOVE_USER':
            return {
              ...state,
              user: undefined
            }
          default:
            return state
    
        }
      }, {
        user: undefined
      })
    
      const auth = React.useMemo( () => ({
        login: async (email, password) => {
          const response = await axios.post(`${API_BASE_URL}/v1/auth/sanctum/token`, {
            email,
            password,
            "device_name": "mobile_app"
          })
          
          const user = {
            email: response.data.data.email,
            token: response.data.data.token,
            device_name: response.data.data.device_name
          }
          dispatch(createAction('SET_USER', user))
        },
        logout: async () => {
          console.log("logout")
          dispatch(createAction('REMOVE_USER'))
        },
        register: async (name, email, password) => {
          await sleep(1800)
          await axios.post(`${API_BASE_URL}/v1/auth/register`, {
            name,
            email,
            password
          }, {
            headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            }
          })
        }
      }), [])
    
      return {auth, state}


}