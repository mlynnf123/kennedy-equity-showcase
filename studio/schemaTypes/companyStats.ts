import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'companyStats',
  title: 'Company Stats',
  type: 'document',
  fields: [
    defineField({
      name: 'statName',
      title: 'Stat Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statValue',
      title: 'Stat Value',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'statName',
      subtitle: 'statValue',
    },
  },
})