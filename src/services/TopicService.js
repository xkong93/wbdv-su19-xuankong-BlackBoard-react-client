import topics from './topics.json'

export default class TopicService {

    static myInstance = null;
    url = 'http://localhost:8080/api/lesson/';

    static getInstance() {
        if (TopicService.myInstance == null) {
            TopicService.myInstance = new TopicService();

        }
        return this.myInstance;
    }

    createTopic = (courseId, topic) => {
        topic['courseId'] = courseId
        topics.push(topic)
    }
    // findAllTopics = () => topics

    findAllTopicForLessonById = lessonId => {
        return fetch(this.url + lessonId + '/' + 'topic')
            .then(response => response.json())
    }
    // topics.filter(topic => topic.lessonId == lessonId)


    updateTopicForLessonById = (lessonId, newTopic) => {
        topics = topics.map(
            topic => topic.lessonId == lessonId ?
                newTopic : topic)
    }

    deleteLesson = topicId => {
        topics = topics.filter(topic => topic.id !== topicId)
    }
}