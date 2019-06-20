import courses from './courses.json'

class CourseService {

    static myInstance = null;
    url = 'https://fathomless-meadow-74479.herokuapp.com/api/courses';

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }
    findAllCourses = () => {
        return fetch(this.url).then(response => response.json());
    }
    findCourseById = courseId => {
        return fetch(this.url + '/' + courseId)
            .then(response => response.json());
    }
    updateCourse = (courseId, newCourse) => {
        // courses = courses.map(course => course.id == courseId ? newCourse : course)
        return fetch(this.url + '/' + courseId, {
            method: 'Post',
            body: JSON.stringify(newCourse),
            headers: {
                'content-type': 'applicaiton/json'
            }
        }).then(response => response.json());
    }
    deleteCourse = courseId => {
        return fetch(this.url + '/' + courseId, {
            method: "DELETE"
        })
    }
}

export default CourseService