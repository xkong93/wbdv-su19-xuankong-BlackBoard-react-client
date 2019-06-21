import modules from './modules.json'

export default class ModuleService {

    static myInstance = null;
    url = 'http://localhost:8080/api/course/';
    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }

    createModuleForCourseId = (courseId, module) => {
        return fetch(this.url + courseId + '/' + 'module',{
            method:"POST",
            body:JSON.stringify(module),
            headers:{
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    }
    findAllModules = () =>{
        return fetch(this.url).then(response => response.json());
    }

    findAllModuleForCourseById = courseId =>{
               return fetch(this.url + courseId + '/' + 'module')
            .then(response => response.json());
    }
        // modules.filter(module => module.courseId == courseId)

    updateModuleForCourseId  = (courseId, newModule) => {
        modules = modules.map(
            module => module.courseId == courseId ?
                newModule : module)
    }

    deleteModule = moduleId => {
        modules = modules.filter(module => module.id !== moduleId)
    }
}
