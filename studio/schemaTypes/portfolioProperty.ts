import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioProperty',
  title: 'Portfolio Property',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Property Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
    }),
    defineField({
      name: 'investmentAmount',
      title: 'Investment Amount',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'Active'},
          {title: 'Completed', value: 'Completed'},
          {title: 'Under Management', value: 'Under Management'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'featuredImage',
      subtitle: 'location',
    },
  },
})