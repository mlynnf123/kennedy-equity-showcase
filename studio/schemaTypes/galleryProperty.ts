import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryProperty',
  title: 'Gallery Property',
  type: 'document',
  fields: [
    defineField({
      name: 'propertyAddress',
      title: 'Property Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Property Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
      }],
      validation: (Rule) => Rule.min(1).error('At least one image is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'yearCompleted',
      title: 'Year Completed',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this property at the top of the gallery',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'propertyAddress',
      subtitle: 'yearCompleted',
      media: 'images.0',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'displayOrder', direction: 'asc'},
        {field: '_createdAt', direction: 'desc'}
      ]
    }
  ],
})