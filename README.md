####  说明
在学习angualr/react/vue过程中，对angular的官方教程进行扩展，以覆盖框架更多特性，并以此为基础使用react和vue相关来实现相同功能。

通过使用3种不同的框架来实现同一功能，对3种框架进行横向对比，以理解框架间的差异以及开发难易程度。

### 写在前面

从目前来看，做前端开发，面临的问题是没有太大变化的，各种框架的出现只是为了解决前端开发中某些方面的问题。
前端的基础是HTML、CSS、Javascript，通过这些技术，我们可以控制浏览器网页的显示，和用户交换，从后端获取数据。
随着前端的日益复杂，各种牛人都在探索怎么改进前端开发的方式，让前端能够有更高的效率，可以做更多的事。

angular和angularJs属于大而全的框架，提供了一整套解决方案，因此学习曲线陡峭，但大型项目开发效率高。react和vue只解决了前端开发中的一部分问题，所有学习起来相对容易些，react相对来说更抽象，后续需要了解一些列的抽象概念，学习曲线相对来说比vue陡一点，二者都需要开发者自己去寻找其他层面的解决方案，不过这一块目前已经有主流的配套方案，需要开发者去学习。

框架的出现只是解决了某一些问题，并没有解决所有的问题，当遇到框架没有解决的问题，就需要开发人员去解决。关键在于人，以往基于DOM的开发模式，开发人员会介入到整个流程，现在的主流框架都将DOM操作封装在框架内部，但建议前端开发人员还是花时间了解下框架的每一步到底做了什么，组件的生命周期对应的DOM的哪个阶段，这些才能了解到前端开发的本质。

## angular和angularJs
### angularJs
angularJs、angular是一个试图解决所有问题的框架，和其他框架比不是太合适。

angularJs学习难度大，这个是有目共睹的，当然这个难度大也有其他方面的原因。第一angularJs试图解决项目架构的问题，引入了注入器、依赖注入、服务、控制器等概念，里面涉及到了太多的设计模式，而且有些概览是不必要的，导致对前端开发人员提出了新的要求。另一方面，在angularJs出现之前，前端要大量的DOM操作，angularJs希望消灭DOM操作，这个对刚接触前端开发的人来说有些不可思议，界面任何变化都必须依赖DOM的改变来实现，不操作DOM，界面如何改变。熟悉了angularJs的人知道通过将DOM的状态和数据绑定，改变数据后，angularJs自动帮我们更新DOM，后来人觉得可能很好理解，但这在当时可以说是一种黑科技，也许在其他领域已经很常见，但在前端，做到这点的不是很多，远没有到满大街都是的地步。

另外angularJs的侵入性太强，很难和其他框架配合，甚至和很多类库的配合都不是很轻松，当然有人会说angular提供了接口可以拿到控制器的scope，也提供了接口改变控制器的scope，这个确实提供了框架和外面加互的方式，但要知道存在这样一个方式，不是太容易，首先你要知道angularJs的藏检查机制，还需要知道apply等等，也就是说你要深入了解angularJs之后，才能知道这种方法，而且使用它，可不是说用就能用好的。另外试想以下，什么情况下你会在用惯了jQuery的情况下使用angularJs，也就是被angularJs炫酷的双向绑定所吸引的适合吧，或者是用angularJs写表单很容易，那时候，你对angularJs不太了解，又希望使用他的一些好的特性，当然先是在项目中小规模的使用，但用上去，又发现很难和现有代码交互，这是一个很麻烦的事情，而且angularJs的报错信息基本不太具备可参考性，曾经我们部门另一个项目组的同事由于轻易全面引入angularJs，后来出了一个问题，在网上怎么搜也没找到好的解决办法，最终抛弃angularJs,项目中的代码大部分重写了。angualrJs确实很好，他在当时是极大的提高了开发效率，但在不熟悉angularJs的情况下，想边引入边学习，又着极大的风险。

最后要说下angularJs到最终也没解决的问题：1.性能优化空间又限；2.没有真正实现模块下；3.代码懒加载的问题。angularJs在当时来说是一个优秀的框架，颠覆了前端开发的模式，极大的促进了前端开发的进步，但放到现在，我们有了更多的选择。


### angular
angularJs由于自身的一些无法解决的问题，谷歌重写了angularJs，并把新版本的angularJs命名为angular，以便和之前版本区分。在angular中，angularJs的大部分问题得到了解决，而且也去掉了控制器和scope的概念，同时支持组件化，总算跟上了主流。angular的学习成本和angularJs比降低了不少，但也不太乐观，由于引入了TypeScript，需要了解的东西也不少，而且有个问题是，现在的Babel是主流，很多工具是围绕Babel构建的，还不能和TypeScript完美融合，而angular如果不使用TypeScript写，难度还是挺高的。当然angular出来的时候，前端已经发生很大变化，一些门槛其实早已经被消化，可能大家接触TypeScript的时间比angular要早，所以问题不太大。angular同样是一个大而全的框架，提供了完整的解决方案，有脚手架，支持预编译，也支持了跨平台，很多场景都提供了解决方案，使用angular，你基本不需要了解太多其他东西。

angular是为大项目而生，小项目使用angular并不合适，不是说angular做不了小项目，而是对于小项目，angular的开发效率并不会很高，只有在大的项目上，才能发挥出angular的优势。由于angular做了比其他框架更多的东西，相当于使用angular，你需要做的东西比其他框架少，效率会相对更高。引入TypeScript，加入了静态检查，可以在开发阶段减少不少bug，这个也是其他框架目前可能需要斟酌的一个点，当然其他框架也在做这方面的努力。

angular借鉴了react的单向数据流，子组件不能直接改变父组件的数据，而通过事件的方式改变父组件的数据，对于兄弟组件，使用状态提升，然后再通过props传递的子组件，对于跨多层的，多层透传会引起一些人的反感，当然你也可以采用服务的方式，但因为这些原因，在写组件的时候，可能需要考虑下组件不要写太小，组件树层次太深，在交互上会引起一些麻烦。这一点，在Flux可能会方便的多，可以不用太担心组件树太深的问题。

angular可能很难赶上react热度，提供的功能多确实是优点，但是由于其提供的Api过多，早期要学习的东西太高，可能会让一些人远离angular。当然有不少人还是很热衷angular，毕竟angularJs的名气在那里，一些早期的angularJs可能会很容易接受angular，而且一些之前的angularJs项目，升级重构时也会有相当一部分人使用angular吧，不过对于没有使用过angularJs或者使用angularJs不多的人，vue和react也许是更好的选择。

最后一点，据有的网友反馈，谷歌喜欢断崖式升级，大公司可能需要考虑下这个问题。

## react
react采用函数式编程，创新的引入了虚拟DOM技术，可以说极大的推动了前端的发展。react生态圈繁荣，最先支持了跨平台，属于发展的最好的框架。在开发者满意度里面属于最高的行列。
react最先支持了组件化编程，提高了前端的开发效率。react涉及的概念很少，只关注试图层，其他方面交给社区解决。react提出的单向数据流很好的解决了状态混乱的问题，这一理念也得到了其他框架的认可。

提到react，最先想到的问题就是react高度抽象，对开发人员的素质有着更高的要求，如果只看react，你会发现react并不难，但react只是一个视图层的框架，你学完react，还需要学习redux，接着会接触到一系列的新名词，会需要引入很多东西。

开发react，需要提炼应用状态，这个是一个比较考研抽象能力的地方，当然这些对不同的人，会有不同的见解。

组件化可以提高复用，但前端开发还有很多问题需要解决，这块更多的需要自己去探索，相比于angular全能式的框架，react在开发大型项目上，开发效率会有弱势。

## vue
vue给很多人的第一感觉是简单，上手容易，这个确实有一定道理，vue可以很容易的和其他框架和类库配合使用，这个是一个很大的优势。vue大量借鉴了现有框架的优点，所以从其他框架转到vue会有中似曾相识的感觉。vue声称自己只关注视图层，所以给开发人员发挥的空间更大。

vue大量借鉴angularJs和react一些好的地方，在写HTML上，vue既支持angularJs的模板式声明语法，又支持react的JSX，没有引入什么高深的东西。vue的更新机制决定了vue的效率比较又保证，可以说基本上vue没有什么明显的短板。

vue推荐将HTML、CSS、Javascript写在一个文件里面，这种方式也许会吸引一部分人，毕竟一个组件基本上会涉及这三个东西，放在不同的文件里面，来回切换窗口有损效率。

vue官方支持状态管理，这是我比较喜欢的一种方式。

总的来说，vue没有很突出的优势，可以拿出来重点说一下，但也没有明显的短板，支持虚拟DOM，支持服务端渲染，支持跨平台，有好用的脚手架，路由和状态管理官方支持，也有详细的中文官方教程，而且轻量。当然vue属于个人项目，发展速度上比不上另外两个框架，angular由谷歌专门团队开发维护，提供了各种各样丰富的功能，支持TypeScript，react生态圈繁荣，虚拟DOM和使用函数式编程，在前端属于引领者的地位。从网上的反馈来看，vue在国内的热度高于其他两个。