export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.min(10).warning('Must have at least 10 characters'),
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            validation: Rule => Rule.min(10).warning('Must have at least 10 characters'),
        },
        {
            name: 'language',
            type: 'string',
            title: 'Language',
            options: {
                list: [
                    {title: 'English', value: 'en'},
                    {title: 'Japanese', value: 'jp'},
                    {title: 'German', value: 'de'},
                    {title: 'Slovak', value: 'sk'},
                ],
                layout: 'radio',
            },
            initialValue: 'en',
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Publish Date',
            initialValue: () => new Date().toISOString().replace('T', ' ').substring(0, 16),
            validation: Rule => Rule.required().error('This field is required.'),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Featured Image',
            validation: Rule => Rule.required().error('This field is required.'),
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
                list: [
                    {title: 'Blog', value: 'blog'},
                    {title: 'Academy', value: 'academy'},
                    {title: 'Tutorials', value: 'tutorials'},
                    {title: 'Markets', value: 'markets'},
                ],
            },
            initialValue: ['blog'],
        },
        {
            name: 'authors',
            type: 'array',
            title: 'Authors',
            of: [{ type: 'string' }],
            initialValue: ['ping'],
        },
        {
            name: 'featured',
            type: 'boolean',
            title: 'Featured',
        },
        {
            name: 'body',
            type: 'markdown',
            title: 'Body',
            validation: Rule => Rule.min(50).warning('Must have at least 50 characters'),
        },
        {
            name: 'video_embed',
            type: 'string',
            title: 'Video Embed',
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
                source: (doc) => doc._id ? `${doc._id.replace(/-/g, '').slice(-12)}-${doc.title}` : doc.title,
                maxLength: 96,
            },
            validation: Rule => Rule.required().error('This field is required.'),
        },
    ],
};
