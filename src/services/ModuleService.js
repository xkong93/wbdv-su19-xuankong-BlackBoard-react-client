import modules from './modules.json'

export default class ModuleService {

    static myInstance = null;

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }

    createModuleForCourseId = (courseId, module) => {
        module['courseId'] = courseId
        modules.push(module)
    }
    findAllModules = () =>
        modules

    findAllModuleForCourseById = courseId =>
        modules.filter(module => module.courseId == courseId)

    updateModuleForCourseId  = (courseId, newModule) => {
        modules = modules.map(
            module => module.courseId == courseId ?
                newModule : module)
    }

    deleteModule = moduleId => {
        modules = modules.filter(module => module.id !== moduleId)
    }
}
