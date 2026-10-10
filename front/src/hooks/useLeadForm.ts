import { useState, useEffect } from "react";
import { leadService } from "../services/leadService";

// Buena práctica: Definir los tipos
export interface IProgram {
  _id: string;
  name: string;
  description?: string;
}

export const useLeadForm = () => {
    const [programs, setPrograms] = useState<IProgram[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        number: '',
        interestProgram: ''
    });

    useEffect(() => {
        const cargarProgramas = async () => {
            const res = await leadService.getProgramas();
            if (res && res.list) {
                setPrograms(res.list);
            }
        };
        cargarProgramas();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ type: '', text: '' }); 


        const payload = {
            ...formData,
            full_name: `${formData.first_name} ${formData.last_name}`,
            status: "active",
        
        };

        const response = await leadService.createLead(payload);
        
        if (response) {
            setMessage({ type: 'success', text: '¡Excelente! Candidato guardado con éxito.' });
            setFormData({ first_name: '', last_name: '', email: '', number: '', interestProgram: '' });
        } else {
            setMessage({ type: 'error', text: 'Hubo un error al guardar. Intenta de nuevo.' });
        }

        setIsLoading(false);
    };

    return {
        programs,
        formData,
        isLoading,
        message,
        handleInputChange,
        handleSubmit
    };
};
