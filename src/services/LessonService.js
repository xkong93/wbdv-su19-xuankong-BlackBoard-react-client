import lessons from './lessons.json'

export default class LessonService {

    static myInstance = null;

    static getInstance() {
        if (LessonService.myInstance == null) {
            LessonService.myInstance =
                new LessonService();
        }
        return this.myInstance;
    }

    createLesson = (courseId, lesson) => {
        lesson['courseId'] = courseId
        lessons.push(lesson)
    }
    findAllLessons = () =>
        lessons
    findAllLessonForModuleById = moduleId =>
        lessons.filter(lesson => lesson.moduleId == moduleId)
    updateLessonForModuleById  = (moduleId, newLesson) => {
        lessons = lessons.map(
            lesson => lesson.moduleId == moduleId ?
                newLesson : lesson)
    }
    deleteLesson = lessonId => {
        lessons = lessons.filter(lesson => lesson.id !== lessonId)
    }
}
