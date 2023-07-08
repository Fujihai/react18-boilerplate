import { rest } from 'msw';
import {faker} from '@faker-js/faker/locale/zh_CN';


export const featureAHandlers = [
	rest.get(`/api/list`, (req, res, ctx) => res(
      ctx.status(200),
      ctx.json({
        code: 0,
        msg: '请求成功',
				data: Array(faker.datatype.number(100)).fill({}).map(() => ({
						imageUrl: faker.image.urlLoremFlickr({ category: 'nature' }),
						title: faker.lorem.sentence({min: 1, max: 10 }),
						paragraph: faker.lorem.paragraphs({min: 1, max: 3 }),
						publishDate: faker.date.anytime()
					})),
      })
    )),
];
