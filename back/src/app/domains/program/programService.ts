// @import_dependencies

// @import_services

// @import_models
import { Program } from "@app/models"

// @import_utilities
import { responseUtility } from "@core/utilities/responseUtility"
import mongoose from "mongoose"

// @import_types


class ProgramService {
  
  
  constructor () {}
  
  
  
  public async test (_params) {
    try{
      
    } catch (error) {
      console.log('error', error)
    }
  }

    public async list () {
    try {
      const list = await Program.find().lean()
      return responseUtility.success({
        list
      })
    } catch (error) {
      console.log('error', error)
      return responseUtility.error('Error fetching programs')
    }
  }

}

export const programService = new ProgramService()
export { ProgramService }