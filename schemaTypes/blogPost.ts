import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tiêu Đề',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Mô Tả Ngắn',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Hình Ảnh Chính',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Bộ Sưu Tập Ảnh',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Ngày Đăng',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Tác Giả',
      type: 'string',
      initialValue: 'Nhóm Nấu 7Nhân',
    }),
    defineField({
      name: 'category',
      title: 'Loại Tiệc',
      type: 'string',
      options: {
        list: [
          { title: 'Tiệc Cưới', value: 'Tiệc Cưới' },
          { title: 'Tiệc Sinh Nhật', value: 'Tiệc Sinh Nhật' },
          { title: 'Tiệc Công Ty', value: 'Tiệc Công Ty' },
          { title: 'Tiệc Gia Đình', value: 'Tiệc Gia Đình' },
          { title: 'Tiệc Ngoài Trời', value: 'Tiệc Ngoài Trời' },
          { title: 'Tiệc Tân Gia', value: 'Tiệc Tân Gia' },
        ],
      },
    }),
    defineField({
      name: 'guestCount',
      title: 'Số Lượng Khách',
      type: 'number',
    }),
    defineField({
      name: 'location',
      title: 'Địa Điểm',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Nội Dung',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
  },
});
