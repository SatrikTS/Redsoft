export default {
    productList: [
        {
            id: 1,
            caption: '«Рождение Венеры» Сандро Боттичелли',
            price: '1 000 000 $',
            oldprice: '2 000 000 $',
            img: require('@/assets/img/prod1.jpg')
        },
        {
            id: 2,
            caption: '«Тайная вечеря»  Леонардо да Винчи',
            price: '3 000 000 $',
            img: require('@/assets/img/prod2.jpg')
        },
        {
            id: 3,
            caption: '«Сотворение Адама» Микеланджело',
            price: '5 000 000 $',
            oldprice: '6 000 000 $',
            img:  require('@/assets/img/prod3.jpg')
        },
        {
            id: 4,
            caption: '«Урок анатомии»  Рембрандт',
            status: 'Продана на аукционе',
            isSell: true,
            img:  require('@/assets/img/prod4.jpg')
        }
    ]
}
