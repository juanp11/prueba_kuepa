import React from "react";
import { useLeadForm } from "../../hooks/useLeadForm"; 

export default function LeadsForm() {
    const { 
        programs, formData, isLoading, message, 
        handleInputChange, handleSubmit 
    } = useLeadForm();

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 animate-in fade-in duration-500">
            
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Nuevo Candidato</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Ingresa los datos manualmente para registrar un nuevo prospecto en el sistema.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 md:p-8">
                    {message.text && (
                        <div className={`p-4 rounded-md mb-8 text-sm font-medium flex items-center shadow-sm
                            ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-6">
                                Información Personal
                            </h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative group z-0 w-full mb-2">
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        value={formData.first_name}
                                        onChange={handleInputChange}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer transition-all duration-300"
                                        placeholder=" " 
                                        required
                                    />
                                    <label 
                                        htmlFor="first_name" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Nombres <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                
                                <div className="relative group z-0 w-full mb-2">
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        value={formData.last_name}
                                        onChange={handleInputChange}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer transition-all duration-300"
                                        placeholder=" "
                                        required
                                    />
                                    <label 
                                        htmlFor="last_name" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Apellidos <span className="text-red-500">*</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-6">
                                Datos de Contacto e Interés
                            </h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative group z-0 w-full mb-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer transition-all duration-300"
                                        placeholder=" "
                                        required
                                    />
                                    <label 
                                        htmlFor="email" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Correo Electrónico <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                
                                <div className="relative group z-0 w-full mb-2">
                                    <input
                                        type="tel"
                                        name="number"
                                        id="number"
                                        value={formData.number}
                                        onChange={handleInputChange}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer transition-all duration-300"
                                        placeholder=" "
                                        required
                                    />
                                    <label 
                                        htmlFor="number" 
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Número de WhatsApp <span className="text-red-500">*</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mt-8 sm:w-1/2 sm:pr-3">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                    Programa de Interés <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="interestProgram"
                                    value={formData.interestProgram}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none hover:border-purple-300 focus:ring-2 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 cursor-pointer shadow-sm"
                                >
                                    <option value="" disabled>Seleccione un programa...</option>
                                    {programs.map((prog) => (
                                        <option key={prog._id} value={prog._id}>
                                            {prog.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="pt-6 mt-8 border-t border-gray-100 flex items-center justify-end gap-3">
                            <button
                                type="button"
                                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 transform hover:-translate-y-[1px]"
                            >
                                Cancelar
                            </button>
                            
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`px-6 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-300 transform hover:-translate-y-[1px] hover:shadow-md flex items-center justify-center min-w-[140px]
                                ${isLoading ? 'bg-purple-400 cursor-wait' : 'bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200'}`}
                            >
                                {isLoading ? (
                                   <>
                                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                     Guardando...
                                   </>
                                ) : 'Guardar Candidato'}
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
