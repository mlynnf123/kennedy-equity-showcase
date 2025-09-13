import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'propertyName',
      title: 'Property Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roomType',
      title: 'Room Type',
      type: 'string',
    }),
    defineField({
      name: 'beforeImages',
      title: 'Before Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
      }],
      validation: (Rule) => Rule.min(1).error('At least one before image is required'),
    }),
    defineField({
      name: 'afterImages',
      title: 'After Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
      }],
      validation: (Rule) => Rule.min(1).error('At least one after image is required'),
    }),
    // Keep old fields for backward compatibility
    defineField({
      name: 'beforeImage',
      title: 'Before Image (Legacy)',
      type: 'image',
      hidden: true,
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image (Legacy)',
      type: 'image',
      hidden: true,
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Residential', value: 'Residential'},
          {title: 'Commercial', value: 'Commercial'},
          {title: 'New Construction', value: 'New Construction'},
        ],
      },
    }),
    defineField({
      name: 'yearCompleted',
      title: 'Year Completed',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'propertyName',
      subtitle: 'roomType',
      media: 'beforeImage',
    },
  },
})