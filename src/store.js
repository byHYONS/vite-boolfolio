// importo il metodo reactive:
import { reactive } from "vue";

export const store = reactive({
    text: 'Hello World!',
    apiInfo: {
        url: 'http://localhost:8000/api/project',
        
    }
    

})