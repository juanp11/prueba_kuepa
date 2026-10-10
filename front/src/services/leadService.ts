import { get, post } from "../util/http"
const api = '/lead'
export const leadService = {
  api,
  get: async({_id}:{_id:string}) =>{
    return await get({api: `${api}/get/${_id}`})
  },
  getProgramas: async () => {
    try {
      const response = await get({api: '/program/list'})
      return response
    } catch (error) {
      console.error("Error cargando programas:", error)
      return null
    }
  },
  createLead: async (data: any) => {
    try {
      const response = await post({
        api: '/lead/upsert',
        options: {data:data}
      })
      if(response && response.object) {
        return response
      }
      return null
    } catch (error) {
      console.error("Error creando lead:", error)
      return null
    }
  }
}

