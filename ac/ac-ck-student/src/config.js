// @flow
export default {
  type: 'object',
  properties: {
    brainstormTitle: {
      title: 'Brainstorm Title',
      type: 'string'
    },
    discussionTitle: {
      title: 'Discussion Title',
      type: 'string'
    },
    tagging: {
      title: 'Tagging',
      type: 'boolean'
    },
    voting: {
      title: 'Voting',
      type: 'boolean'
    },
    classTags: {
      title: 'Class Tag set',
      type: 'array',
      items: {
        type: 'object',
        title: 'Tag',
        properties: {
          title: {
            type: 'string',
            title: 'Label'
          }
        }
      }
    }
  }
};