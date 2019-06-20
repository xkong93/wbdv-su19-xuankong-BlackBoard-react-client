import topics from './topics.json'

export default class TopicService{

    static myInstance = null;

    static getInstance(){
        if (TopicService.myInstance == null){
            TopicService.myInstance = new TopicService();

        }
        return this.myInstance;
    }
    createTopic = (courseId, topic) => {
        topic['courseId'] = courseId
        topics.push(topic)
    }
    findAllTopics = () => topics

    findAllTopicForLessonById = lessonId =>
        topics.filter(topic => topic.lessonId == lessonId)


    updateTopicForLessonById  = (lessonId, newTopic) => {
        topics = topics.map(
            topic => topic.lessonId == lessonId ?
                newTopic : topic)
    }

    deleteLesson = topicId => {
        topics = topics.filter(topic => topic.id !== topicId)
    }
}