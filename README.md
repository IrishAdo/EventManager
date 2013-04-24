EventManager
============

A javascript library that allows you to link a html element to a function using data-* attributes
<pre>
&lt;script>
var myObject = {
    subObject = {
        YouClickedSomething(t){
            alert(t.id);
        },
        withParams(t,hello){
            alert("hello "+ hello);
        },
        withExtraParams(t,hello,with){
            alert("hello " + hello + ' hows ' + with);
        }
    }
};
&lt;/script>

&lt;button id='button1' data-action="click" data-click="myObject.subObject.YouClickedSomething">button 1&lt;/button>
&lt;input id='field1' data-action="click" data-click="myObject.subObject.YouClickedSomething" value='input 1'/>
&lt;button id='button2' data-action="click" data-click="myObject.subObject.withParams" data-argc='1' data-argv1='ted!!!'>button 2&lt;/button>
&lt;button id='button3' data-action="click" data-click="myObject.subObject.withExtraParams" data-argc='2' data-argv1='ted!!!' data-argv2='james!!!'>button 3&lt;/button>
</pre>

<a href='http://irishado.blogspot.co.uk/2013/04/binding-functions-to-html-elements.html' title='Binding functions to HTML elements using HTML5 data- attributes'>I've put a better description/tutorial on my blog</a>