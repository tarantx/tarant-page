"use strict";(self.webpackChunktarant_page=self.webpackChunktarant_page||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/04/17/why-the-cloud","metadata":{"permalink":"/blog/2023/04/17/why-the-cloud","editUrl":"https://github.com/tarantx/tarant-page/tree/main/blog/2023-04-17-why-the-cloud.md","source":"@site/blog/2023-04-17-why-the-cloud.md","title":"Tarant Cloud: Talk, Communicate and Solve","description":"An approach for a common abstraction level","date":"2023-04-17T00:00:00.000Z","formattedDate":"April 17, 2023","tags":[{"label":"cloud","permalink":"/blog/tags/cloud"},{"label":"product","permalink":"/blog/tags/product"}],"readingTime":6.535,"hasTruncateMarker":false,"authors":[{"name":"kmruiz","title":"Co-Founder of Tarant","url":"https://github.com/kmruiz","imageURL":"https://github.com/kmruiz.png","key":"kmruiz"}],"frontMatter":{"authors":"kmruiz","title":"Tarant Cloud: Talk, Communicate and Solve","tags":["cloud","product"],"description":"An approach for a common abstraction level","draft":false,"published":"2023-04-17T09:00:00.000Z","organization_id":6881},"nextItem":{"title":"Website Revamp","permalink":"/blog/2023/03/12/website-revamp"}},"content":"![An approach for a common abstraction level](/img/why-tarant-post-title.png)\\n\\n## The current scenario\\n\\nWorking on software based solutions is a complex task that requires the effort of a cohort of very different roles that interact together to design, build, \\ntest, deploy and monitor the product. Complexity grows with requirements, given more features, less reliable is to build on top of that software and \\nbecomes problematic. The community worked on different solutions for all the set of problems that we, as software developers, need to solve to put our \\nsoftware, working, in production.\\n\\nThese solutions span lots of different aspects of the essential complexity of our work:\\n\\n* We have frameworks that help us design a solution abstracting ourselves from the complexities of the underlying platform.\\n* We testing libraries that allows us to verify our applications to ensure correctness.\\n* We have tools that allows us to monitor our applications in production.\\n* We have toolkits that allows us to deploy our infrastructure in a scalable way.\\n\\nAnd there are many other cross-cutting concerns, like security, performance, accessibility, and so on.\\n\\nWe as an industry, are having a bad time handling all this complexity properly, as we are still young and growing extremely fast. With growth, comes also additional\\nproblems, like sociotechnical challenges, resource management, financial operations and a wide list of others that could be included here.\\n\\nFor this post, we are going to talk about production complexity and billing.\\n\\nBoth [@kanekotic](https://github.com/kanekotic) and [myself](https://github.com/kmruiz) are software developers, leading teams of different sizes and diversities,\\nwith different problems, building software.  We are still doing this from different aspects of the delivery timeline of a project. \\nThis allows us to understand the software industry from a wider level and to understand where and how we are struggling.\\n\\nDigging on the feedback we\'ve gathered, we\'ve found the following list of challenges that are common and hardly resolved:\\n\\n* How do we ensure the scalability of our system within a reasonable cost?\\n* How do we ensure the evolution of our system to the requirements within a reasonable timeframe?\\n* How do we simplify the overall architecture while increasing the capacity of adaptation?\\n* How do we ensure that the application is behaving correctly in production and that we detect when it doesn\'t?\\n\\nLet me give an example of all these cases:\\n\\n### How do we ensure the scalability of our system within a reasonable cost?\\n\\nSystem scalability is a complex topic, as it depends on usage patterns of customers. Essentially, and ideally, you want to scale down your application and \\ndependencies when there is less load in your systems, reducing costs, but you want to increase the capacity of your system moments before the load increases,\\nso you can handle transparently with the minimum amount of cost increase, your workload.\\n\\nHowever, there are a few challenges here:\\n\\n* How do we know when to scale up and down?\\n* How much does it cost to scale up and down?\\n* What do we scale up and down and how?\\n\\nSome of these challenges are tackled by the **serverless model**, with a pay per consumption model, with scale-to-zero capabilities. Let\'s take an example on how\\n[AWS Lambda](https://aws.amazon.com/lambda/) handles it, as it\'s of the main leaders in serverless computing.\\n\\n* To use an AWS Lambda, you just need to upload a .zip to Lambda, and AWS takes care of everything.\\n* You have to choose CPU and Memory, this affects how the Lambda is billed. Essentially, Lambda would choose the suitable amount of CPU based on the memory allocated, but it\'s common to overprovision memory for more CPU power.\\n* Lambdas are billed every 100ms, so a function that takes a few ms is billed for 100ms.\\n* Lambdas also suffer `cold starts`, what essentialy means that scalability is affected under some runtimes.\\n\\nLambdas are a wonderful tool, but they are also problematic for billing provisioning. How much is a lambda going to cost overall per month? It\'s extremely hard\\nto measure properly. There are some calculators, like the one from [dashbird](https://dashbird.io/lambda-cost-calculator/) that does some simple calculations but\\nit\'s often not reliable enough because the Lambda billing model is extremely complex.\\n\\nThere are other solutions, of course, like VM reservation, using Kubernetes or something like Fargate, to simplify billing, but they have other types of challenges, \\nlike how many VMs should we reserved, what size, and how to ensure workload is distributed evenly.\\n\\n### How do we ensure the evolution of our system to the requirements within a reasonable timeframe?\\n\\nSoftware that is useful changes. With these changes, comes technical debt, and an increase amount of complexity. This complexity likely increases with\\naccidential decisions that weren\'t aware of the future of the software itself. It is common to patch forward features into the current design until\\nthe software development process becomes a bottleneck.\\n\\n### How do we simplify the overall architecture while increasing the capacity of adaptation?\\n\\nThe actor model tries to solve these issues by simplifying the overall architecture of software. Instead of complex patterns and layered softwares that\\nfail to handle concurrency, transactionality and reduced performance, we just have a set of long living objects that interact between them in an ordered\\nmanner. Also, tarant has other properties, like `actor universality` where an actor can run transparently both in a client application and a server.\\n\\n### How do we ensure that the application is behaving correctly in production and that we detect when it doesn\'t?\\n\\nHere raises the complexity, as developers need to monitor their software in production, but there is a language gap between how we monitor systems and how we build\\nthem. It\'s not uncommon finding developers uncomfortable understanding how to scale their system based on CPU or memory usage. Nowadays, for lots\\nof systems, disk usage has been delegated to databases, but CPU, Memory, Network, Locks... are still relevant for production-level applications.\\n\\n## How do we see the future of computing in tarant?\\n\\nWe want teams to talk, communicate and solve in a common abstraction level. For us, complexity lies in jumping across different levels of abstractions during\\nthe design, development and delivery process. Information is lost during this long jumps, requirements become unclear across teams and tight deadlines forces\\nteams to focus on high-visibility low-value work, delivering uncomplete features, without security best practices, on top of expensive infrastructure.\\n\\nWe are sure that using the actor model, and specific conventions and best practices on top of that, can raise the bar. By increasing the abstraction level, we can\\nassume optimisations, simplify the development model and improve how monitoring and observability works. To this, to work, means that we are not developing\\nanything generic, but will built on top of tarant and for tarant.\\n\\nOur principles are:\\n\\n* No additional concepts: all features are tarant based and using already known tarant concepts.\\n  * Only think about actors, topics, messages and systems.\\n* Secure by default\\n  * Secure options **must** be easier, or as easy as insecure ones.\\n* Simplicity by design\\n  * Design your application, we build your infrastructure on top of that.\\n* No surprises\\n  * Scale up and down without a surprise on your bill.\\n\\nWe have lots of ideas, we have lots of opportunities, and we want to build together. We are developing a closed beta that is already accepting requests to test\\nthe cloud. We will be giving access incrementally, *totally free* to the initial, limited version of the cloud.\\nIf you want to know more about tarant, [check our tutorials](https://www.tarant.dev/docs/category/quick-start). \\nIf you want to join the beta, check [our home page, as we have a contact form in there](/). \\nNo private information is shared with anyone, and the only communications we will share are strictly related to the beta itself. \\nIf you are interested on talking with us directly, we have a [gitter room](https://app.gitter.im/#/room/#tarantx_general)."},{"id":"/2023/03/12/website-revamp","metadata":{"permalink":"/blog/2023/03/12/website-revamp","editUrl":"https://github.com/tarantx/tarant-page/tree/main/blog/2023-03-12-website-revamp.md","source":"@site/blog/2023-03-12-website-revamp.md","title":"Website Revamp","description":"we have a new version of our website and documentation","date":"2023-03-12T00:00:00.000Z","formattedDate":"March 12, 2023","tags":[{"label":"website","permalink":"/blog/tags/website"},{"label":"product","permalink":"/blog/tags/product"}],"readingTime":0.06,"hasTruncateMarker":false,"authors":[{"name":"kanekotic","title":"Co-Founder of Tarant","url":"https://github.com/kanekotic","imageURL":"https://github.com/kanekotic.png","key":"kanekotic"}],"frontMatter":{"authors":"kanekotic","title":"Website Revamp","tags":["website","product"],"description":"we have a new version of our website and documentation","draft":false,"published":"2023-04-18T07:30:00.000Z","organization_id":6881},"prevItem":{"title":"Tarant Cloud: Talk, Communicate and Solve","permalink":"/blog/2023/04/17/why-the-cloud"}},"content":"Hello welcome everyone to the first blog post of the revamped website."}]}')}}]);