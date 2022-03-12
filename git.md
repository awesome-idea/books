有一天我看见我们公司的同事在讨论合并代码怎么怎么不舒服，不方便。就是每次合并都很难搞的样子。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638645028345-fa7f1929-ce08-439a-b89c-ed502d84303f.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=150&id=u19e9cc30&margin=%5Bobject%20Object%5D&name=image.png&originHeight=300&originWidth=300&originalType=binary&ratio=1&rotation=0&showTitle=false&size=41618&status=done&style=none&taskId=udf37e7ab-2599-42d8-b5ae-f50842dae10&title=&width=150)
我说 这不是用 Idea 很简单就处理好了吗。后面我了解到，他们在处理代码冲突的时候都是通过手动处理冲突的。我惊了
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638645065946-3618e341-551c-40bd-8cf9-84240a4f403d.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=213&id=u760ba6a2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=425&originWidth=440&originalType=binary&ratio=1&rotation=0&showTitle=false&size=380615&status=done&style=none&taskId=ub6264da7-2721-4f11-98e5-57097c2c1a6&title=&width=220)
​

2019 年的时候 我在知乎回答过一篇 关于 Idea 技巧的一篇文章。不过那个时候更多是一些快捷键操作的一些奇淫技巧
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638645190002-5ab3941b-a9d0-438a-aefc-2411ff146c0e.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=152&id=u07e8211a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=304&originWidth=560&originalType=binary&ratio=1&rotation=0&showTitle=false&size=68139&status=done&style=none&taskId=uadbf6703-9472-4eb3-9f9c-a059ff6fd28&title=&width=280)
​

对 Git 版本管理这块讲的不多。在 2 年后的今天，被我们现在的同事刺激了一下，自己决定完善一下 Idea 下 Git 版本的操作他们。
​

### Git 派系介绍
其实在公司里面 Git 管理这块也是分为几大派系的


**黑窗**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638643554857-ef984785-06dc-4740-a1cd-eb6da2fd1234.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=476&id=u6e08199d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=952&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=680591&status=done&style=none&taskId=u58b9c794-c76b-4173-a0ec-eb07597b64e&title=&width=640)
一个黑窗走天下，任何工具都是花里胡哨。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638644733600-72da1113-852a-466b-9302-7dccad7ba3b4.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=224&id=uf2577b6b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=448&originWidth=440&originalType=binary&ratio=1&rotation=0&showTitle=false&size=62094&status=done&style=none&taskId=ub91090ee-0711-4207-a87b-614a75eb93f&title=&width=220)
所有的操作都是通过命令行完成。
> 个人愚见：这种方式虽然很酷很帅，但是毕竟只有一个黑窗，在某些场景下还是比较难处理，比如 历史代码查看，代码合并，变更文件详细内容查看。

虽然很帅但是不适合我这种菜鸡
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638644796556-5dbdffe0-9db9-4a70-9028-ca13dc6e7f64.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=220&id=u4dfd5b97&margin=%5Bobject%20Object%5D&name=image.png&originHeight=440&originWidth=440&originalType=binary&ratio=1&rotation=0&showTitle=false&size=206280&status=done&style=none&taskId=u921bd2d7-521d-4e31-825f-4c5290bc418&title=&width=220)
​

**source tree**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638643774440-ccdc96a7-fdf4-427b-b590-3d2ddcfc69ab.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=673&id=uc8c3a3a7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1346&originWidth=2448&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1136023&status=done&style=none&taskId=u3928676c-58bf-40bc-95c5-f8dc5e4500a&title=&width=1224)
source tree 是我见过用的人最多的，很多同事都是使用这个。而且还可以安装 git flow 插件，可以在里面直接使用 git flow 的工作流。
> 我也在用，不过用的不多，每个人喜好不同，有的同事喜欢代码版本管理和代码编写分开，我自己的话恰恰喜欢放在一起。哈哈哈哈哈 萝卜青菜 各有所爱。

功能很全面，但有一个问题，可能就是查看单文件或者文件夹的 历史不是很方便
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638644840249-7ec78779-453f-47d7-9812-276583e0ac58.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=84&id=u3c2bf351&margin=%5Bobject%20Object%5D&name=image.png&originHeight=168&originWidth=150&originalType=binary&ratio=1&rotation=0&showTitle=false&size=4775&status=done&style=none&taskId=u684d76e1-13db-440f-81b5-d74d42e1d54&title=&width=75)
​

### Github Desktop
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638644055681-34a33f62-4bd4-4db8-98d7-53b7a68a1793.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=601&id=u09c35e37&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1202&originWidth=2126&originalType=binary&ratio=1&rotation=0&showTitle=false&size=290573&status=done&style=none&taskId=u2a864d01-631a-411b-82d4-873dd99610e&title=&width=1063)
Github Desktop 俗称 Github 亲儿子。很早之前用过 跟 Source Tree 差不多，偶尔看到一个同事在使用这个。还是那个版本管理与代码编写的问题。如果平常使用 Github 查看源码比较多的还是推荐，因为安装了这个软件之后，可以直接在 Github 上有一个按钮 Open in Github Desktop。
> 亲儿子才有的待遇



然后才是使用 Idea 管理版本
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638644340362-bf180617-53e8-4e0e-b81f-a1e0db963948.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=426&id=ue8ecc5fc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=852&originWidth=458&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57721&status=done&style=none&taskId=ufd38c7a8-27c6-4618-89c7-e5af59af5aa&title=&width=229)
我自己感觉 Idea 的版本管理挺好用的，但是在工作中，除了我自己，我还没有看见其他人使用过。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638644893637-9b8423a8-2121-4d6d-b47a-4a0cfd7bdad5.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=110&id=ue75fbe53&margin=%5Bobject%20Object%5D&name=image.png&originHeight=220&originWidth=220&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38906&status=done&style=none&taskId=u1b50c98c-c0d6-4aef-92e3-a0cfc536897&title=&width=110)
​

**不过工具本来就没有最好的，只有最适合你自己的，我个人使用 Idea 下的版本管理比较顺手一点，就在这里简单介绍一下。**


### 查看这行代码是谁改的
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638637064475-80d999ea-a14f-4e85-9090-2c902353a1ea.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=591&id=ubad3b046&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1182&originWidth=1468&originalType=binary&ratio=1&rotation=0&showTitle=false&size=179742&status=done&style=none&taskId=u166c5c0d-3060-4e80-8bf5-3d28ede9931&title=&width=734)
在编辑器左侧右键，选择 Annotate with Git Blame


![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638637103277-c2e358d9-ceaa-4b5e-8958-63352c24d874.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=386&id=uaabcc8b9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=772&originWidth=1290&originalType=binary&ratio=1&rotation=0&showTitle=false&size=65629&status=done&style=none&taskId=ufe5af52a-2350-44cd-9d14-992ff3d377c&title=&width=645)


![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638637187621-e46418c6-bdb9-4ae1-bd73-bee13aad776d.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=726&id=u507a443c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1452&originWidth=1362&originalType=binary&ratio=1&rotation=0&showTitle=false&size=395769&status=done&style=none&taskId=u778913e6-2444-4b98-83dc-8dd7dbeadc5&title=&width=681)
点击 左侧时间会在弹出的子窗口中显示这次修改的 hash，提交评论，和同步修改的文件有哪些


### 复现代码冲突
> 这里需要重点讲一下，因为我最近居然发现我们的同事居然还是用非常原始的方式解决冲突，就是一个文件一个文件的删除 ======= 这个。当时我看见的时候，我自己都惊呆了。

我们先手动的制造一个冲突
```bash
mkdir test; 
cd test;
git init -y;
echo 'console.info("one line")' > index.js;
git add .; git commit -m 'init';
git checkout -B feature/two;
vim index.js; # 在第二行添加 console.info("two line")
git add index.js; git commit -m 'feat: two line';
git branch master;
# 创建分支 3 
git checkout -B feature/three;
vim index.js; # 在第二行添加 console.info("three line")
git add index.js; git commit -m 'feat: three line';

git checkout master
# merge feature/two
git merge feature/two # 这个时候不会发生冲突

git merge feature/threee # 冲突发生

```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638459600635-e70ed95f-e4df-434f-83ac-1d41c47b26b0.png#clientId=u7a712fd7-8e6a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=788&id=u50a5fd08&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1576&originWidth=1206&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1165323&status=done&style=none&taskId=u41d74f3b-3f20-4ab7-a5d2-31e68693e67&title=&width=603)
上图展示了发生冲突的所有过程
​

### 解决冲突
上面我们已经制造出了一个冲突，这个时候我们通过 Inteillj Idea 自带的 Version Controller 的功能来处理这个冲突。
​

直接在编辑器中打开冲突文件夹
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638460098574-d5d2c5c8-e5a5-46a9-a897-601c45cff2b1.png#clientId=u7a712fd7-8e6a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=776&id=u491e5b51&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1552&originWidth=2396&originalType=binary&ratio=1&rotation=0&showTitle=false&size=190337&status=done&style=none&taskId=udb33ffaf-be92-484f-ab6e-49fe57403b1&title=&width=1198)


> 这里会有一个问题，就是在真正的项目场景下，项目文件非常的多。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638603330846-1be1d42f-ab86-46cc-8e83-21c8861cc5c7.png#clientId=u7a712fd7-8e6a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=776&id=u9c97fa89&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1552&originWidth=2396&originalType=binary&ratio=1&rotation=0&showTitle=false&size=530346&status=done&style=none&taskId=ue9a2ede3-39d8-4fb1-8513-de6757c48b1&title=&width=1198)
> 在项目文件上右键，选择 **Git**，选择 **Resolve Conflicts**

![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638604799751-a4c30605-e3c7-4e57-ae95-2c4292d0b6b4.png#clientId=u7a712fd7-8e6a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=630&id=u16660956&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1260&originWidth=2208&originalType=binary&ratio=1&rotation=0&showTitle=false&size=180960&status=done&style=none&taskId=u83c0943c-824b-46b6-99e7-c22eb7193a6&title=&width=1104)
点击之后会弹出一个处理冲突的弹窗。接下来好好介绍一下这个弹窗

- 1. 待合并分支
- 2. 当前分支
- 3. 冲突的文件列表
- 4. 全部以**当前分支**「master」为准，丢弃**待合并**「feature/three」分支冲突文件
- 5. 全部以待合并分支「feature/three」为准，丢弃当前分支「master」冲突文件
- 6. 点击 merge 会打开一个子窗口合并明细
- 7. 双击文件和打开一个子窗口进行代码 merge 明细
- 8. 显示了合并分支文件状态，上图标识合并的两个分支 文件都是更新状态
- 9. 以分组列表的形式展示

​

![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638605610263-6ea66d04-42c4-47bd-b2ff-eaeba946a64f.png#clientId=u7a712fd7-8e6a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=802&id=u3d516a87&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1604&originWidth=2704&originalType=binary&ratio=1&rotation=0&showTitle=false&size=234640&status=done&style=none&taskId=udd16279e-19b9-4f63-ada0-fce4375a258&title=&width=1352)
这里就进入到详细的单文件合并步骤了

- 1️⃣ 当前分支的修改
- 2️⃣ 合并区域
- 3️⃣ 待合并分支的修改
- 4️⃣ 显示本次合并的明细，就是看除了当前文件还有哪些文件需要合并
- 5️⃣ 将左侧 `console.info("two line")` 合并
- 6️⃣ 将右侧 `console.info("three line")` 合并
- 7️⃣ 直接接受左侧的代码
- 8️⃣ 直接接受右侧的代码
- 9️⃣ 引用合并的内容
### 
### 查看代码历史
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638630049779-425694ef-d8b1-4834-93d0-f400d22ab274.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=776&id=uf294abd9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1552&originWidth=2396&originalType=binary&ratio=1&rotation=0&showTitle=false&size=507332&status=done&style=none&taskId=u6509821e-14ce-4dcf-ae88-74104f33881&title=&width=1198)


点击 **Show History**
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638636781857-d1b16723-26d7-42f8-b40b-a87f7d2366ea.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=776&id=uda00abf7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1552&originWidth=2396&originalType=binary&ratio=1&rotation=0&showTitle=false&size=266539&status=done&style=none&taskId=u1c2d8f43-3a43-4b73-bd2a-209bdc8e909&title=&width=1198)
点击 Show History 之后底部会弹出当前项目的历史提交记录

- 1️⃣ 这里显示的当前项目的提交记录
- 2️⃣ 可以指定想要查看历史记录的分支
- 3️⃣ 可以选择只看某个人的提交记录
- 4️⃣ 时间赛选
- 5️⃣ 选中左侧的提交记录，这里会展示此次变更了哪些文件，双击文件会在弹出的新窗口中显示代码变更情况

​

> 上面是直接选中的整个项目查看整个项目的历史提交记录，有的时候我们只想查看某个文件夹，或者是某个文件的代码变更记录。整个时候我们只需要在对应的文件夹或者文件上右键悬着即可。

​

### 分支创建
根据实际工作场景出发，先列举一下会创建分支的集中情况。在实际的应用场景来看如果用 Idea 来解决。

- 开发新功能，我们需要从现有分支创建新的 feature 分支
- 我们正在开发 feature 分支，但是此时线上出 Bug，我们需要从 master 分支创建 hotfix 分支来修复
- 我们在浏览源代码，我们浏览代码历史上某个版本的代码

​

从现有分支创建新的 feature 分支，这是最简单的，甚至都不需要用 idea 了，代码也是一行搞定 `git checkout -B feature/xxx`
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638637829271-1b8e0280-46b3-41e1-9c19-7915280c8d71.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=710&id=ud88106f7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1420&originWidth=2176&originalType=binary&ratio=1&rotation=0&showTitle=false&size=393275&status=done&style=none&taskId=u03966409-bdfb-4f14-a081-abf4aa8aa59&title=&width=1088)
直接从项目上直接右键创建即可
​

> - 我们正在开发 feature 分支，但是此时线上出 Bug，我们需要从 master 分支创建 hotfix 分支来修复

这种情况其实是正式项目中的常态吧，毕竟线上环境是复杂的，问题随时都会发生。但是问题就是可能我们现在开发的 feature 分支还没有开发完成，我们自己也不想用 commit 进行提交。这个时候就需要用到 git 的 stash 功能了。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638638090617-5cc01d5b-53c5-4886-84ee-41a25e4ec1a5.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=712&id=u11e30fcc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1424&originWidth=1260&originalType=binary&ratio=1&rotation=0&showTitle=false&size=334250&status=done&style=none&taskId=u043505b2-7976-467c-9c5d-05206ea67c0&title=&width=630)
在切换前先 Stash Changes，将目前修改的代码暂存
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638638151919-ee509dc5-c501-4134-904f-2625d28d416c.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=197&id=u7eba1b78&margin=%5Bobject%20Object%5D&name=image.png&originHeight=394&originWidth=758&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38111&status=done&style=none&taskId=u46fa5646-dcc8-40a6-a478-2a12e88c805&title=&width=379)
在弹窗中给这次暂存添加 **备注 然后点击 create stash**
**​**

在处理好 stash 之后我们需要切回到 master 分支去创建对应的 hotfix 分支
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638638269839-afde0a42-f65d-440f-acd9-b221c1bd4c8f.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=696&id=u673c76f7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1392&originWidth=1308&originalType=binary&ratio=1&rotation=0&showTitle=false&size=324956&status=done&style=none&taskId=ud70e85ab-af29-4d96-82e9-f2288ae3123&title=&width=654)
点击 Branchs
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638638301028-65221de2-2b85-4e2c-b3ee-4a92b1aac1d3.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=294&id=u5dad4786&margin=%5Bobject%20Object%5D&name=image.png&originHeight=588&originWidth=496&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38042&status=done&style=none&taskId=u3ef00cac-5fd7-40d3-a8f8-fc3d5848b3a&title=&width=248)
选择 master 分支进行切换，切换后创建对应hotfix 分支，在修复好 hotfix 分之后，我们需要回到对应的 feature 分支继续开发未开发完成的功能。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638638502873-f790f060-1450-4f2e-b081-b2148e1e2de5.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=696&id=uc460639c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1392&originWidth=1250&originalType=binary&ratio=1&rotation=0&showTitle=false&size=325927&status=done&style=none&taskId=u212599a3-d2f9-43c1-af9d-374ff2d2d4d&title=&width=625)
选择 Unstash Changes
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638638497618-25894092-9a54-4fca-8bb1-8adee8d3e832.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=302&id=u29b4faf0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=604&originWidth=838&originalType=binary&ratio=1&rotation=0&showTitle=false&size=64589&status=done&style=none&taskId=u7a90f1f0-26c2-4c62-ba65-0dfb34adf8c&title=&width=419)
这里会有自己存储的 stash 历史，点击 apply stash 进行恢复
​

> - 我们在浏览源代码，我们浏览代码历史上某个版本的代码

![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638638755922-b0cb5bca-2a59-473d-9870-3a9af48ec858.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=422&id=uf28817b2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=844&originWidth=2410&originalType=binary&ratio=1&rotation=0&showTitle=false&size=369497&status=done&style=none&taskId=u8da0bd4f-7ad1-45b0-b4b0-a26a80e5355&title=&width=1205)


### 添加修改「git add xxx」
> 我们每次新增的代码需要通过 git add xxx 命令将代码从**工作区**添加到**缓存区**

![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638639012115-9db4ea9b-22c0-4799-aed8-bdc7948e60fe.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=450&id=ud4e575da&margin=%5Bobject%20Object%5D&name=image.png&originHeight=900&originWidth=1776&originalType=binary&ratio=1&rotation=0&showTitle=false&size=106485&status=done&style=none&taskId=ube92de89-05a0-4ab4-9d2a-e4a24cd8d51&title=&width=888)
> 上面的 add.js 文件是我们新添加的文件

![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638639192463-0f5bb7ff-ba67-41fc-81ea-2f28318ebfa8.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=789&id=ua0fa61df&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1578&originWidth=1466&originalType=binary&ratio=1&rotation=0&showTitle=false&size=380726&status=done&style=none&taskId=udaac00e9-2c38-4b37-8c94-55b71811a82&title=&width=733)


### 提交修改「git commit xxx」
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638640500771-0958d89c-e7f0-40a5-a70c-ac9e35489d42.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=742&id=u95dc5fce&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1484&originWidth=1304&originalType=binary&ratio=1&rotation=0&showTitle=false&size=345180&status=done&style=none&taskId=u1960ccb1-84b1-4f38-8dda-a8b2777ad51&title=&width=652)
点击 Commit Directory
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638640354532-cc033fc6-e532-465b-b806-639883436a2e.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=670&id=u458b7ea8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1340&originWidth=1694&originalType=binary&ratio=1&rotation=0&showTitle=false&size=263587&status=done&style=none&taskId=ua625217e-0a6d-4c01-8907-bb723d12b99&title=&width=847)
🐶 本次 commit 的文件列表
🐱 文件修改了，但是没有在缓存区的文件
🐭 修改列表，我们可以为某个代码文件集合专门命名 change list
🐹 作者
🐰 Amend commit
🦊 Sign off commit
🦝 在提交之前 格式化代码
🐻 Rearrange 代码
🐼 优化 imports，在代码中没有使用的 package 会自动删除
🦘 分析代码，如果有代码异常会提示
🦡 简单代码有没有 TODO 没有完成会提示
🐨 优化代码
🐯 更新 copy right
🦁 提交的message
🐮 上下选择看其他文件的变动
🐷 选中文件的代码变动
🐽 commit


### 推送代码 「git push」
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638640986345-f1a74c11-2ca4-4820-a6e5-d30ed2ed8a7a.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=734&id=u33392d9c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1468&originWidth=1604&originalType=binary&ratio=1&rotation=0&showTitle=false&size=368791&status=done&style=none&taskId=ua8f24ce9-53ad-4f63-82c3-6c07b0beb7f&title=&width=802)


### 拉取代码「git pull xxx」
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638641025046-b0c0b803-dc8f-43d4-bb74-04c962cdc2e7.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=794&id=u2310e615&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1588&originWidth=1590&originalType=binary&ratio=1&rotation=0&showTitle=false&size=393186&status=done&style=none&taskId=u27fdfcac-4a49-46c8-92c6-6f6559ad2c1&title=&width=795)
​

### 在便捷一点
其实上面介绍的基本上就涵盖了我们日常项目中大部分使用的功能了，但是可以看到我们在上面演示的操作基本上不是在文件夹上右键菜单来选择，但是说实话不是太跟手，用起来很麻烦。
其实 Jetbrains 的开发人员应该也是考虑到了这一点，其实在软件的界面中有很多位置可以操作 Git
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638641643175-99480996-e43a-423b-939d-b1387637881f.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=765&id=u145f1bf2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1530&originWidth=1794&originalType=binary&ratio=1&rotation=0&showTitle=false&size=148805&status=done&style=none&taskId=u09a09709-3d91-47bb-85dd-c77c4755b2f&title=&width=897)
❤️ 拉取代码
🧡 提交代码
💛 推送代码
💚 查看历史
💙  rollback
​

![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638641963542-a985e704-968d-425b-be72-3e135cafecbf.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=266&id=uc020d173&margin=%5Bobject%20Object%5D&name=image.png&originHeight=532&originWidth=496&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34438&status=done&style=none&taskId=u5f1dd4db-3343-43f4-9c12-9a67aa6576c&title=&width=248)
点击下方的版本号，也可以看到所有本地的分支和远程的分支，可以在这里进行分支合并，和远程代码更新。
​

### 在快一点 VCS Operations 
代码的更新与提交提示是一个非常高频的操作，它值得拥有更加便捷的方式，Jetbranins 也提供了更加编辑的方式
![image.png](https://cdn.nlark.com/yuque/0/2021/png/750901/1638642125288-e871b145-55ac-4d88-9036-3e279d3723c3.png#clientId=u12ce54d8-53fe-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=438&id=uec016b60&margin=%5Bobject%20Object%5D&name=image.png&originHeight=876&originWidth=482&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61675&status=done&style=none&taskId=udbee1360-ad6a-4138-8363-b9af6e7ed1f&title=&width=241)
> Mac: ctrl + v 

上面提到的所有的操作 在这里都提供了便捷的操作方式 

- Commit
- Rollback
- Show History
- Annotate With Git Blame
- Show Diff 
- Branches ...
- Push ...
- Stash Changes ...
- UnStash Changes ...



这里不仅可以用 Git 的功能，还有 Idea 自己的 Local History 也背展示在了这里
​

### 一些快捷键
正常编码的情况下 使用快捷键的方式肯定更快，一下是针对 Git 操作整理的快捷键

| 名称 | 对应 Git 操作 | 快捷键「Mac」 |
| --- | --- | --- |
| 将文件添加到工作区 | git add xxx | Option + Command + A |
| 将工作区文件添加至缓存区 | git commit xxx | Command + K |
| 拉去远程代码 | git pull xxx | Command + T |
| 推送代码到远程仓库 | git push xxx | Command + Shift + K |
| 暂存文件 | git stash xxx | Ctrl + V -> Stash |
| 恢复暂存 | git stath pop | Ctrl + V -> Un Stash |
| 删除掉缓冲区修改 | git reset --hard ^ | Command + Shift + Z |
| 解决冲突 | ​
 | Ctrl + V -> Resolve Conflicts... |

