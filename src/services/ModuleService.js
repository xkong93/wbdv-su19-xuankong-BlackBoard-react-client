import modules from './modules.json'

export default class ModuleService {

    static myInstance = null;
    url = 'https://obscure-plateau-23987.herokuapp.com/api/course/'
    url2 = 'https://obscure-plateau-23987.herokuapp.com/api/module/';

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }

    createModuleForCourseId = (courseId, module) => {
        return fetch(this.url + courseId + '/' + 'module', {
            method: "POST",
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());

    }
    findAllModules = () => {
        return fetch(this.url).then(response => response.json());
    }

    findAllModuleForCourseById = courseId => {
        return fetch(this.url + courseId + '/' + 'module')
            .then(response => response.json());
    }

    findModuleById = (mid) => {
        return fetch(this.url2 + '/' + mid)
            .then(response => response.json());
    }

    updateModule = (mid, newModule) => {
        return fetch(this.url2 + '/' + mid, {
            method: "PUT",
            body: JSON.stringify(newModule),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }

    deleteModule = moduleId => {
        return fetch(this.url2 + moduleId, {
            method: "DELETE"
        })
    }
}
