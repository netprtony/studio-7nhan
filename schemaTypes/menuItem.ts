import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'menuItem',
  title: 'Menu Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tên Món Ăn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Danh Mục',
      type: 'string',
      options: {
        list: [
          { title: 'Món Khai Vị', value: 'appetizer' },
          { title: 'Món Chính', value: 'main' },
          { title: 'Hải Sản', value: 'seafood' },
          { title: 'Đặc Sản', value: 'specialty' },
          { title: 'Lẩu & Súp', value: 'hotpot' },
          { title: 'Tráng Miệng', value: 'dessert' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Giá (VNĐ)',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Mô Tả',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Hình Ảnh',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isAvailable',
      title: 'Còn Hàng',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
