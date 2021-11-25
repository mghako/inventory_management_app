import React from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config'
import { createAction } from '../utils/createAction'
import SecureStorage from 'react-native-secure-storage'
import {sleep} from '../utils/sleep'

export function useAuth() {
    const [state, dispatch] = React.useReducer((state, action)=> {
        switch(action.type) {
          case 'SET_USER':
            return {
              ...state,
              loading: false,
              user: {...action.payload}
            }
          case 'REMOVE_USER':
            return {
              ...state,
              user: undefined
            }
          case 'SET_LOADING':
              return {
                  ...state,
                  loading: action.payload
              }

          default:
            return state
    
        }
      }, {
        user: undefined,
        loading: true
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
          await SecureStorage.setItem('user', JSON.stringify(user))
          dispatch(createAction('SET_USER', user))
        },
        logout: async () => {
          console.log("logout")
          await SecureStorage.removeItem('user')
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
      React.useEffect( () => {
          sleep(1800).then( () => {
            SecureStorage.getItem('user')
            .then( user => {
                if(user) {
                    console.log("User", user)
                    dispatch(createAction('SET_USER', JSON.parse(user)))
                } else {
                    dispatch(createAction('SET_LOADING', false))
                }
            })
          })
        
      }, [])
      return {auth, state}
}