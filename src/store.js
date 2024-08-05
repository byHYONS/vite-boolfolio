// importo il metodo reactive:
import { reactive } from "vue";

export const store = reactive({
    text: 'Hello World!',
    apiInfo: {    
        baseUrl: 'http://localhost:8000/api/',
        endPoints: {
            projectList: 'project',
        }      
    }
    

})