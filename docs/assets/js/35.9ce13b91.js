(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{181:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("или через npm:")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),a("p",[t._v("Поздравляю, вы только что запустили свой первый тест!")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Мы запускали тест, который установился вместе с проектом. Теперь давайте напишем собственный компонент и тест к нему. По традиции, когда работают по TDD, вы сначала пишите тесты, которые не пройдут проверку, затем пишите код, который позволит тестам пройти её. Для начала, создадим наш компонент.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),a("p",[t._v("Полный список матчеров можно посмотреть в "),a("a",{attrs:{href:"https://jestjs.io/docs/ru/expect",target:"_blank",rel:"noopener noreferrer"}},[t._v("документации Jest"),a("OutboundLink")],1),t._v(". Во "),a("code",[t._v("vue-test-utils")]),t._v(" нет матчеров, но нам достаточно тех, что предоставляет Jest. Нам нужно сравнить текст в "),a("code",[t._v("Greeting")]),t._v(". Мы можем написать:")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"установка-vue-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#установка-vue-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Установка vue-cli")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vue-test-utils")]),this._v(" – официальная библиотека для тестирования vue-компонентов. Она работает как в браузере, так и в среде Node.js, позволяет работать в связке с любым тест-ранером. Мы будем запускать тесты через Node.js.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vue-cli")]),this._v(" – самый простой способ начать работу. Он установит всё необходимое для проекта, сконфигурирует Jest – популярный фреймворк для тестирования. Установим cli, написав в консоли:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("yarn")]),this._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("add")]),this._v(" @vue/cli\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" -g @vue/cli\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Создадим новый проект, написав "),s("code",[this._v("vue create [project-name]")]),this._v('. Выберем "Manually select features" и для "Unit Testing" указываем Jest.')])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Как только установка закончится, переходим в проект через "),s("code",[this._v("cd")]),this._v(" и запускаем "),s("code",[this._v("yarn test:unit")]),this._v(". Если всё сделано правильно, вы увидите:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" PASS  tests/unit/example.spec.js\n  HelloWorld.vue\n    ✓ renders props.msg when passed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("14ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nTest Suites: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" passed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" total\nTests:       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" passed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" total\nSnapshots:   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" total\nTime:        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".79s\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"пишем-первый-тест"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#пишем-первый-тест","aria-hidden":"true"}},[this._v("#")]),this._v(" Пишем первый тест")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Нам больше не нужен "),s("code",[this._v("src/components/HelloWorld.vue")]),this._v(" и "),s("code",[this._v("tests/unit/example.spec.js")]),this._v(" поэтому удалим их.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"создаём-компонент-greeting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#создаём-компонент-greeting","aria-hidden":"true"}},[this._v("#")]),this._v(" Создаём компонент "),s("code",[this._v("Greeting")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Создадим "),s("code",[this._v("Greeting.vue")]),this._v(" в "),s("code",[this._v("src/components")]),this._v(". Внутри "),s("code",[this._v("Greeting.vue")]),this._v(", добавим следующее:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue и TDD"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"написание-теста"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#написание-теста","aria-hidden":"true"}},[this._v("#")]),this._v(" Написание теста")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Greeting")]),this._v(" делает только одну вещь – выводит значение "),s("code",[this._v("greeting")]),this._v(". Стратегия будет такая:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("отрисовываем компонент через "),s("code",[this._v("mount")])]),this._v(" "),s("li",[this._v("проверяем, что "),s("code",[this._v("component")]),this._v(' содержит в себе значение "Vue и TDD"')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Создадим "),a("code",[t._v("Greeting.spec.js")]),t._v(" внутри "),a("code",[t._v("tests/unit")]),t._v(". Затем импортируем "),a("code",[t._v("Greeting.vue")]),t._v(" и "),a("code",[t._v("mount")]),t._v(", добавим разметку для теста:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Greeting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Greeting.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greeting.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'отрисовывает приветствие'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Существует несколько различных синтаксисов, используемых при TDD. Мы будем использовать "),a("code",[t._v("describe")]),t._v(" и "),a("code",[t._v("it")]),t._v(" – синтаксис, который используется в Jest. В "),a("code",[t._v("describe")]),t._v(" обычно пишут что именно тестируют, в нашем случае "),a("code",[t._v("Greeting.vue")]),t._v(". В "),a("code",[t._v("it")]),t._v(" содержится функция, которая проверяет конкретную часть кода. Для каждой функции компонента, мы добавляем свой блок с "),a("code",[t._v("it")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Теперь нам нужно отрисовать компонент с помощью "),s("code",[this._v("mount")]),this._v(". Обычно компонент присваивают какой-либо переменной, которую называют "),s("code",[this._v("wrapper")]),this._v(". Выведем содержимое компонента, убедимся, что всё запускается правильно.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"запускаем-тест"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#запускаем-тест","aria-hidden":"true"}},[this._v("#")]),this._v(" Запускаем тест")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Запустим тест, написав в консоли "),s("code",[this._v("yarn test:unit")]),this._v(". Все файлы из папки "),s("code",[this._v("tests")]),this._v(" c расширением "),s("code",[this._v(".spec.js")]),this._v(" автоматически выполнятся. Если всё сделано правильно, вы увидите:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ отрисовывает приветствие "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("27ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole.log tests/unit/Greeting.spec.js:7\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    Vue и TDD\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Как мы видим, разметка компонента правильная, тест прошёл проверку. Правда, такой тест никогда не упадёт, поэтому он не очень полезный. Даже если мы удалим "),s("code",[this._v("greeting")]),this._v(" из "),s("code",[this._v("Greeting.vue")]),this._v(", тест всё равно пройдёт. Давайте исправим это.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"добавnение-проверки"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-проверки","aria-hidden":"true"}},[this._v("#")]),this._v(" Добавление проверки")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Нам нужно сделать проверку, чтобы быть уверенными в том, что компонент ведёт себя так, как нужно. Мы можем сделать это через Jest's "),s("code",[this._v("expect")]),this._v(" API. Оно выглядит так: "),s("code",[this._v("expect(текущий результат).to [матчер] (ожидаемый результат)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("Матчер")]),this._v(" – это функция, которая сравнивает значения. Например:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue и TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("но "),s("code",[this._v("vue-test-utils")]),this._v(" предоставляет еще лучший способ – "),s("code",[this._v("wrapper.text")]),this._v(". Давайте допишем наш тест:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Greeting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Greeting.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greeting.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'отрисовывает приветствие'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toMatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue и TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Нам больше не нужен "),s("code",[this._v("console.log")]),this._v(", удалим его. Запустим тесты "),s("code",[this._v("yarn unit:test")]),this._v(" и если всё сделано правильно, у вас должно получиться:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ отрисовывает приветствие "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("15ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nTest Suites: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" passed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" total\nTests:       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" passed, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" total\nSnapshots:   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" total\nTime:        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".477s, estimated 2s\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Выглядит отлично, но вы должны всегда видеть, что тест сначала не проходит проверку, а затем проходит, чтобы убедиться в правильности теста. В традиционном TDD, вы сначала пишите неработающие тесты, затем используете полученные ошибки при написании кода. Давайте убедимся, что всё работает правильно. Обновим "),s("code",[this._v("Greeting.vue")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue без TDD"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Запустим тесты через "),s("code",[this._v("yarn test:unit")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("FAIL  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✕ отрисовывает приветствие "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("24ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n● Greeting.vue › отрисовывает приветствие\n\n  expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("received"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".toMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  Expected value to match:\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue и TDD"')]),t._v("\n  Received:\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue без TDD"')]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     const wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper.text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(".toMatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue и TDD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                            ^\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n    at Object."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tests/unit/Greeting.spec.js:8:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Jest даёт нам хороший фидбек. Мы видим ожидаемый и полученный результат, а также строку, в которой произошла ошибка. Тест не прошел проверку, как и ожидалось. Вернем прежнее значение в "),s("code",[this._v("Greeting.vue")]),this._v(" и убедимся, что тест снова проходит проверку.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("В следующих блоках мы рассмотрим два метода отрисовки, которые предоставляет "),s("code",[this._v("vue-test-utils")]),this._v(", – это "),s("code",[this._v("mount")]),this._v(" и "),s("code",[this._v("shallowMount")]),this._v(".")])}],!1,null,null,null);s.default=e.exports}}]);