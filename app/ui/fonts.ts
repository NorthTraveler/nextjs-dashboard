//添加自定义 Google 字体
//使用此文件来保留将在整个应用程序中使用的字体
//从模块(next/font/google)导入字体 - 这将是主要字体,然后指定要加载什么子集(在本例中，：'latin')
//最后，将字体添加到/app/layout.tsx<body>元素中：
import { Inter,Lusitana } from 'next/font/google';

//练习
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({weight:['400','700'],subsets:['latin']});