---
layout: post
title: "Know Your Tools"
date: 2017-03-27 00:00:00 +0300
tags: ide, tools
---

## First words, a bit of digression

Back in days i read an article ["Start a technical blog, it’s worth it!"][1] by [Christopher Chedeau aka Vjeux][8].
By that time i already had my own list of things i wanted to write an article about. And since that day
i am struggling to actually start a blog. I like to reason about various topics on paper, because
it makes me better understand it. So why not to put it on the web? Even if nobody ever reads it, it still would be a step and a responsibility. Hopefully i will fight the excuses of absence of time, and will start writing regularly.

One of the topics, which pops up in my mind pretty often, is the tools. I am a software engineer, and there are many tools in the domain. But i think the topic is much wider, and tools are important for everyone no matter the occupation. Without tools we would not be the people we are now. So i think, that tools are really important.

## TL;DR;
Reasoning on the subject "Tools are important" and opinionated overview of useful tools in WebStorm IDE.

In this article i want to deliver a specific message, that learning tools makes you more productive.
Since my day-to-day activity is highly related to writing code, i decided to pick an IDE of my choice and to list
the features i use the most.

## The List

I used various code editors (e.g. VSCode, Atom, Brackets, Vim, Emacs, etc.) to write javascript, but my favorite is still WebStorm.
It is an awesome (yet commercial) javascript (and flavors) editor made by cool guys at JetBrains.
Without further ado, here is the list of my favorite features of the IDE, lets see how few/many is there:

[Disgression]
Of course many of listed features are present in other IDEs natively or via plugins. I do not say that WebStorm is the best, i just say that it is the best for me and reasons why i love it follow.

### 1. Navigation
The navigation is one of the basis problems while writing code. In WebStorm it is very well thought. For example you can navigate between main IDE windows with `CMD+{number}`,
which reminds me of switching between groups of units in [RTS][9] back in days. In WebStorm i use these handy hotkeys a lot, they allow me to navigate without a pointer device at all (mouse/touch).
Also in almost every window in WebStorm where list of items is present you can use incremental search to filter/navigate the list, real lifesaver.

#### 1.1. Navigate File (CMD+SHIFT+O), very often

If you work with the project for a long time, there will be great number of files in it. Until some point you can look for the file in a Project Tree View to open it, but it is very slow, and as the number of files grows it become exponentially ineffective.
To make navigating between overall project files lighting fast you can use 'Navigate File' feature. Almost every editor has this feature, but, IMO, WebStorm really shines here.
Using this feature you can jump to any file in a few key strokes, given you remember its name at least vaguely: one to open a search bar, few more to find the file in the list, and may be several keystroke to navigate the search results vertically.
WebStorm provides a good index of project files, so you can type a file name with an error, or just a first letters of the words uppercased, you can also add slashes to indicate hierarchy. Super awesome.

#### 1.2. Incremental search in Project Tree View, very often

As i already stated above, WebStorm provides incremental search in many windows. One of the case is the Project Tree View.
For example, if i do not remember the file name, but i know under what path it could be found, it is handy to switch to the Project Tree View (in 1 keystroke), start typing the search pattern, then navigate the list vertically and horizontally, expanding the nodes. This incremental search is very handy, because it allows you edit search pattern as you type. You can navigate the tree and then type a few letters more for better match, and the tree view is not filtered visually, but when navigating with arrows you jump between current matches only.
One thing i can not live without is the ability to navigate the Project Tree View with arrows. If i find myself using an editor, which does not allow this, i feel very limited.

#### 1.3. Navigate Declaration `CMD+click/CMD+B`

Sometimes you just need to jump to a symbol declaration. The ability to provide such a feature depends on the code analysis.
WebStorm does a good work to provide it for vanilla([es-stages][10] included) javascript, but if you use TypeScript you will get the best service you can. Really good stuff.

#### 1.4. Navigate Line/Column `CMD+L`

It is very handy to be able to jump to a line:column within the file, for example when you are investigating an error stacktrace. Hit the hotkey and you are all set!

#### 1.5. Last Edit Location `CMD+SHIFT+BACKSPACE` (LOVE)

When i discovered this feature, it was love at first sight! Now i can not live 5 minutes without it. Seriously, try it, you wont be able to understand how you lived without it all these years.

How it works? Basically, whenever you make edits WebStorm remembers these steps. Then if you need to scroll the file, our switch to another one, for any reason, how do you get back? It is exactly what the feature is about!
From now on, you can safely navigate to any other place in your project, and then just press `CMD+SHIFT+BACKSPACE` to go directly back to the last edit you made! And guess what, WebStorm keeps theses steps in a stack, so you can use the hotkey to unwind. It is the best feature! Seriously, it is.

#### 1.6. Linter error navigation `F2`

Nowadays [linter][11] is a must have, and all advanced editors have a built-in support. WebStorm is no exclusion.
What i like that i can easily navigate between linter errors while editing the code with hotkey.
If you finished with the feature, it is the time to fix linter errors. Just hit `F2` and edit errors, until there is no error left.

#### 1.7. Search in File `CMD+SHIFT+F`

No editor comes without 'search in files' ability, for obvious reasons.
What i like about WebStorm, that one need to select a string and press `CMD+F` for search, then `CMD+G` to navigate between matches. Did you notice? There is no need to pollute the buffer copying the string and paste it in the search bar later (2 keystrokes saved and buffer keeps its value). Neat, isn`t it?

#### 1.8. Search and Replace `CMD+SHIFT+R`

Once again, i think every editor has 'search and replace' feature. It is a must have, especially the regexp support.
I find myself pretty often performing batch search-n-replace operations with regexp. And WebStorm makes this experience very pleasant, because when you are about to replace an entry, it shows what the replacement will be in a tooltip. Really cool stuff, especially when replacement string contains matched groups in regexp.

#### 1.9. TODO inspector `CMD+6`

It is always a good idea to put a TODO in the code, when you find something worth attention but do not want to get distracted from the current task. It is even better to spend time regularly to fulfill the technical debt and actually pay attentions to all of the TODOs left behind.

Here is where the 'TODO inspector' comes in all its glory! In WebStorm you can view all TODOs in one place with enough context to understand the case. It also provides a scope feature, using which you can view the TODOs limited to particular scope, say in current file, or in all test files in the project.

#### 1.10. Switcher `CTRL+TAB`

When working on a feature, you often have several files in the context. WebStorm tracks the files you made edits in recently and allows you to navigate between these files almost instantly. Just hit `CTRL+TAB`, hit `TAB` to scroll through the list and while holding `CTRL`, then release it.

#### 1.11. Recent files `CMD+E`

If you need to review a longer list of files you edited recently, you can use 'Recent Files' window. It allows you to navigate the file list with arrows without restrictions. And it also supports awesome incremental search!

### 2. Code Generation and Editing
Seems we are done with navigation related goodies. Let me list the good stuff WebStorm has for code generation and editing.

#### 2.1. Create New File

The create file activity is nicely implemented. I often use it in this way: `CMD+1` to focus the Project Tree View; navigate to the desired location; `CMD+N` to start a file creation dialog; type few letters to choose the file type (e.g. 'js'); type in the file name and hit `Enter` to finish the process.

#### 2.2. Live templates

[Live templates][13] allow you to generate a chunk of commonly used code as simple as typing a short alias and hitting `TAB`. You can use preset templates, or you can add your own. For example, i have my own 2-4 letters aliased templates for React related code chunks generation, saved me a month of bare time typing through the year probably XD.
Live templates allows to define replaceable variables, which one will have to fill after the template is expanded. It also provides some predefined constants, for example, to select where the cursor should be placed after template is filled. Or you can reach a name of the file to use it, say, as a generated class name.
I would like to see some more features in Live Templates, for instance, an ability to use your own functions to transform provided values, say, to name a generated class as the file name, but Pascal cased. But it is still good enough.
Many IDE provide similar capability, but the name varies.

#### 2.3. Emmet

"[Emmet][2] is the essential toolkit for web-developers", as stated on [the official web site][2]
It allows you to succinctly generate and easily navigate HTML (or in fact any subset of [SGML][3]).
I think there is nothing special in WebStorm in this regards, only that it is supported out of the box.

#### 2.4. Intentions

Another awesomeness by WebStorm is [Intentions][12]. In short it a set of actions scoped to particular context.
An example would be to replace single quotes with double quotes around the string, or alter a condition in a if-statement according to the DeMorgan Law. There are many more intentions scoped to: javascript, css, typescript, XSLT etc.

#### 2.5. Refactor Rename (SHIFT+F6)

I do not use many of the refactor-goodies included in WebStorm, but one command i use quite often. It is 'rename'.
If the search-n-replace is a dumb command, the refactor-rename is a smart one, based on the static code analysis.
WebStorm does really good job to provide smart rename functionality for vanilla javascript. But if you use TypeScript, you will get the most.

#### 2.6. Split viewport vertically/horizontally

Sometimes it is a good thing to keep several files before your eyes. WebStorm allows to split the canvas of the active  editor vertically and horizontally. You can even open the same file with independent scroll position side by side.

#### 2.7. Comment Code

Nothing special here, right? Every IDE has it, but devil is in details. When you comment a line in WebStorm, the cursor moves to the next line. In many editors it stays on the same line by default, and it is quite annoying.

#### 2.8. Duplicate line `CMD+D`

This is also one of the features, which i use so often that it happens mostly unconsciously.
If there were a set of basis operations for code editors, i would include this feature, no doubts.

#### 2.9. Switch lines

This feature also becomes so common for me, that i do not notice anymore when i use it. Basically, if the editor does not have it, IMO, it is not usable.
WebStorm provides dumb and smart line switch actions, as i call it. It happens that i prefer the dumb one, because there is no surprises, the result is exactly as i expected and i do not need to spend time to make analysis after the action.

### 3. Other cool stuff

#### 3.1. Debugging code

WebStorm provides a good UI for debugging javascript, i use it a lot. But the topic is to wide, and is worth a separate article.
I header recently, that VSCode paired with node-chakracore provides pleasant debugging experience and a new guy in the game 'time travel', which is basically a 'step back' in execution. (Source: [Parashuram talk on React Conf 2017][4])

#### 3.2. Presentation Mode

If you are going to show your code while standing on a tribune, this mode is irreplaceable.

#### 3.3. Distraction Free Mode

Distraction Free Mode hides all unnecessary details except the code. If you need some zen to shape your code, just turn the mode on. Guess how cool it is? It even supports active editor canvas splitting, check it out!

#### 3.4. Power save mode

Sometimes you need to code while no power sockets are nearby, be it a train, or airplane, or just a not-laptop-ready-cafe. If you need to extend your laptop battery life, turn on the Power Save Mode. Of course you will lose some support by WebStorm, but everything comes with a price.

#### 3.5. Search everywhere `SHIFT+SHIFT`

And the last guy, but probably the juiciest! Did i say that WebStorm is good at make things searchable? Right, it is so good, that the Search Everywhere dialog was unavoidable. Just Hit `SHIFT` two times, and search e-e-verything!

The resulting list is a bit too long. But i am pretty happy that i made it, because while putting it together i spotted several features in WebStorm worth investigating. See? I already got my profit!
Of course there are many more goodies hidden in WebStorm. Some of them i know, and heard positive usage experience, but i do not like to use them for a reason. For example: local history, scratch files, git(and other VCS) integration, deployment tasks etc.

## Wrap up

The article is turned out to be very focused on the IDE, but the idea is deeper.

No matter what job you do, there are tools which makes our day-to-day experience much better leaving more room for solving real tasks instead of being distracted for boring routines.
But to find the right tool one need to spend some time to search and investigate a tool. The idea is that the spent time is worth it, because tools make us more performant, they allow us to achieve goals faster with less noise and distraction.
And if there is no tool, but there is a routine you can invest some time and create tool, even if you are the only person who would use it. **(And guess what? There are tools to make writing a tool easier! As recursive as it sounds.)**
So try tools, create tools, and share tools. Even if no one will use it but you, if it helps you, the experience still worth it.

Of course there are many tools out there, really good ones, state of the art tools. And it requires from some to quite a lot of time to learn a tool, some tools you want ever know for 100% (if learning the tool is not your goal).
So, if you just started using a tool, or you use it for quite a long time always leave a room to learn a bit more about it. And if you found a new feature or a way to use the tool, think of sharing your experience with the community. You know, putting things on paper often provides deeper understanding of the subject. So it is definitely worth it. Just a small blogpost would do the job. Who knows, may be, you write a novel and you use git along the way to keep your writings save and organized, world would appreciate if you share the experience.

Lyrical Digression
There was 17th React Conf recently, and there were many awesome speaks.
There was also a good emotional speak by one of the FB core team members, [Cheng Lou][7].
The main topic he brought up in his talk was ["Taming the meta language"][14], if you saw it, you will understand, if no - just trust me. The talk was about tools and making tools better, make them evolve as our knowledge deepens. Because the tools serve as a rock solid basis for us to move further. And it is so fascinating, that i wish everybody caught that awesomeness-virus.

## Conclusion

Tools it is what makes us better professionals, it is what allows us to advance our knowledge and to push the boundaries.
That is why, please, invest time in searching right tools for the job, learning tools you use and creating better tools for our common sake. It is our chance to find ourselves one day far beyond the boundaries we are within currently.


---
* all hotkeys are for WebStorm on MacOS
* some hotkeys may be changed from defaults
* There is also a static type checker made by FB, and WebStorm supports it as well

*Links*
[1]: http://blog.vjeux.com/2011/analysis/start-a-technical-blog-its-worth-it.html
[2]: https://emmet.io/
[3]: https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language
[4]: https://www.youtube.com/watch?v=iMLpUVZseEg
[5]: https://code.visualstudio.com/
[6]: https://github.com/nodejs/node-chakracore
[7]: https://github.com/chenglou
[8]: https://github.com/vjeux
[9]: https://en.wikipedia.org/wiki/Real-time_strategy
[10]: https://github.com/tc39/ecma262
[11]: https://en.wikipedia.org/wiki/Lint_(software)
[12]: https://www.jetbrains.com/help/webstorm/2016.3/intention-actions.html
[13]: https://www.jetbrains.com/help/webstorm/2016.2/live-templates-2.html
[14]: https://www.youtube.com/watch?v=_0T5OSSzxms
