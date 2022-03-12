有一天我看见我们公司的同事在讨论合并代码怎么怎么不舒服，不方便。就是每次合并都很难搞的样子。<br />![image.png](./images/git-git-idea/c93b66fdd3b0e3eb58058107be2bfcd1.png)<br />我说 这不是用 Idea 很简单就处理好了吗。后面我了解到，他们在处理代码冲突的时候都是通过手动处理冲突的。我惊了<br />![image.png](./images/git-git-idea/14deeaf5e75883e46ca3c65afc2f696f.png)

2019 年的时候 我在知乎回答过一篇 关于 Idea 技巧的一篇文章。不过那个时候更多是一些快捷键操作的一些奇淫技巧<br />![image.png](./images/git-git-idea/5320e1ab2e636962a0a7d333048a637f.png)

对 Git 版本管理这块讲的不多。在 2 年后的今天，被我们现在的同事刺激了一下，自己决定完善一下 Idea 下 Git 版本的操作他们。

### Git 派系介绍
其实在公司里面 Git 管理这块也是分为几大派系的

**黑窗**<br />![image.png](./images/git-git-idea/8fc64c33b33d6e8d5db1cbece128c5e5.png)<br />一个黑窗走天下，任何工具都是花里胡哨。<br />![image.png](./images/git-git-idea/100385e285767b6c7a3afb2f63c463f0.png)<br />所有的操作都是通过命令行完成。
> 个人愚见：这种方式虽然很酷很帅，但是毕竟只有一个黑窗，在某些场景下还是比较难处理，比如 历史代码查看，代码合并，变更文件详细内容查看。

虽然很帅但是不适合我这种菜鸡<br />![image.png](./images/git-git-idea/4b9a7df6a3d9d80bf752a408e5ab00ed.png)

**source tree**<br />![image.png](./images/git-git-idea/1b7ad53a1b2217bdbafc1872a46dfe6c.png)<br />source tree 是我见过用的人最多的，很多同事都是使用这个。而且还可以安装 git flow 插件，可以在里面直接使用 git flow 的工作流。
> 我也在用，不过用的不多，每个人喜好不同，有的同事喜欢代码版本管理和代码编写分开，我自己的话恰恰喜欢放在一起。哈哈哈哈哈 萝卜青菜 各有所爱。

功能很全面，但有一个问题，可能就是查看单文件或者文件夹的 历史不是很方便<br />![image.png](./images/git-git-idea/07cd0431fa5d6b0b67495f49ad8303ce.png)

### Github Desktop
![image.png](./images/git-git-idea/e2938edaf23d5697f72fb9bffa6a0772.png)<br />Github Desktop 俗称 Github 亲儿子。很早之前用过 跟 Source Tree 差不多，偶尔看到一个同事在使用这个。还是那个版本管理与代码编写的问题。如果平常使用 Github 查看源码比较多的还是推荐，因为安装了这个软件之后，可以直接在 Github 上有一个按钮 Open in Github Desktop。
> 亲儿子才有的待遇


然后才是使用 Idea 管理版本<br />![image.png](./images/git-git-idea/d4057a9c5daa755487ed16abe5a92d84.png)<br />我自己感觉 Idea 的版本管理挺好用的，但是在工作中，除了我自己，我还没有看见其他人使用过。<br />![image.png](./images/git-git-idea/ea771f0e1ca0712730d7da66f362ca16.png)

**不过工具本来就没有最好的，只有最适合你自己的，我个人使用 Idea 下的版本管理比较顺手一点，就在这里简单介绍一下。**

### 查看这行代码是谁改的
![image.png](./images/git-git-idea/22439aed526420aaf67ebc65a5b659ad.png)<br />在编辑器左侧右键，选择 Annotate with Git Blame

![image.png](./images/git-git-idea/f1624c70b826c24a04331fb553c6693a.png)

![image.png](./images/git-git-idea/7286f171a244af5c9b9867881ba3d5ac.png)<br />点击 左侧时间会在弹出的子窗口中显示这次修改的 hash，提交评论，和同步修改的文件有哪些

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
![image.png](./images/git-git-idea/20ec36e36a9b08f0d4ca642b4b6a5bbe.png)<br />上图展示了发生冲突的所有过程

### 解决冲突
上面我们已经制造出了一个冲突，这个时候我们通过 Inteillj Idea 自带的 Version Controller 的功能来处理这个冲突。

直接在编辑器中打开冲突文件夹<br />![image.png](./images/git-git-idea/575f949f93a44bb6e5f5490f91014f78.png)

> 这里会有一个问题，就是在真正的项目场景下，项目文件非常的多。

![image.png](./images/git-git-idea/db6e47c138a950b4a36167f870362ada.png)
> 在项目文件上右键，选择 **Git**，选择 **Resolve Conflicts**

![image.png](./images/git-git-idea/19b84d5b78bcaa4f1ab790d8da1a7eaa.png)<br />点击之后会弹出一个处理冲突的弹窗。接下来好好介绍一下这个弹窗

- 1. 待合并分支
- 2. 当前分支
- 3. 冲突的文件列表
- 4. 全部以**当前分支**「master」为准，丢弃**待合并**「feature/three」分支冲突文件
- 5. 全部以待合并分支「feature/three」为准，丢弃当前分支「master」冲突文件
- 6. 点击 merge 会打开一个子窗口合并明细
- 7. 双击文件和打开一个子窗口进行代码 merge 明细
- 8. 显示了合并分支文件状态，上图标识合并的两个分支 文件都是更新状态
- 9. 以分组列表的形式展示

![image.png](./images/git-git-idea/b30325202a8b964cea767796a062ecd5.png)<br />这里就进入到详细的单文件合并步骤了

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
![image.png](./images/git-git-idea/769d75474b768d98e7eb9d392a26bf92.png)

点击 **Show History**<br />![image.png](./images/git-git-idea/df9715f00eb35d106b681ff96c7eeadb.png)<br />点击 Show History 之后底部会弹出当前项目的历史提交记录

- 1️⃣ 这里显示的当前项目的提交记录
- 2️⃣ 可以指定想要查看历史记录的分支
- 3️⃣ 可以选择只看某个人的提交记录
- 4️⃣ 时间赛选
- 5️⃣ 选中左侧的提交记录，这里会展示此次变更了哪些文件，双击文件会在弹出的新窗口中显示代码变更情况

> 上面是直接选中的整个项目查看整个项目的历史提交记录，有的时候我们只想查看某个文件夹，或者是某个文件的代码变更记录。整个时候我们只需要在对应的文件夹或者文件上右键悬着即可。


### 分支创建
根据实际工作场景出发，先列举一下会创建分支的集中情况。在实际的应用场景来看如果用 Idea 来解决。

- 开发新功能，我们需要从现有分支创建新的 feature 分支
- 我们正在开发 feature 分支，但是此时线上出 Bug，我们需要从 master 分支创建 hotfix 分支来修复
- 我们在浏览源代码，我们浏览代码历史上某个版本的代码

从现有分支创建新的 feature 分支，这是最简单的，甚至都不需要用 idea 了，代码也是一行搞定 `git checkout -B feature/xxx`<br />![image.png](./images/git-git-idea/e7ae0e542f61fbf1bea035e64fafd147.png)<br />直接从项目上直接右键创建即可

> - 我们正在开发 feature 分支，但是此时线上出 Bug，我们需要从 master 分支创建 hotfix 分支来修复

这种情况其实是正式项目中的常态吧，毕竟线上环境是复杂的，问题随时都会发生。但是问题就是可能我们现在开发的 feature 分支还没有开发完成，我们自己也不想用 commit 进行提交。这个时候就需要用到 git 的 stash 功能了。<br />![image.png](./images/git-git-idea/44e622e87335970fa2f0905d25329781.png)<br />在切换前先 Stash Changes，将目前修改的代码暂存<br />![image.png](./images/git-git-idea/fd144fe4c82441a5e4bcc8be6ade05be.png)<br />在弹窗中给这次暂存添加 **备注 然后点击 create stash**

在处理好 stash 之后我们需要切回到 master 分支去创建对应的 hotfix 分支<br />![image.png](./images/git-git-idea/5bbedaf6e91675137f8a8b15b63a0068.png)<br />点击 Branchs<br />![image.png](./images/git-git-idea/dbaa03d8db1c8073ef716061e01024f1.png)<br />选择 master 分支进行切换，切换后创建对应hotfix 分支，在修复好 hotfix 分之后，我们需要回到对应的 feature 分支继续开发未开发完成的功能。<br />![image.png](./images/git-git-idea/055b00dbe1f53336e70dcda15891729e.png)<br />选择 Unstash Changes<br />![image.png](./images/git-git-idea/acf1506e94b8a6ec3798b055e09c5a52.png)<br />这里会有自己存储的 stash 历史，点击 apply stash 进行恢复

> - 我们在浏览源代码，我们浏览代码历史上某个版本的代码

![image.png](./images/git-git-idea/4d53428a54bff2483501ce8cf855b5d4.png)

### 添加修改「git add xxx」
> 我们每次新增的代码需要通过 git add xxx 命令将代码从**工作区**添加到**缓存区**

![image.png](./images/git-git-idea/36c7ff54083106ffb96f990a1e25fbf5.png)
> 上面的 add.js 文件是我们新添加的文件

![image.png](./images/git-git-idea/892438d0e20ad94b04f2570676df4ddb.png)

### 提交修改「git commit xxx」
![image.png](./images/git-git-idea/5eaf9701a27ef6535766a782ad0a0255.png)<br />点击 Commit Directory<br />![image.png](./images/git-git-idea/0def52ebe4aa91bd13478699e62f7148.png)<br />🐶 本次 commit 的文件列表<br />🐱 文件修改了，但是没有在缓存区的文件<br />🐭 修改列表，我们可以为某个代码文件集合专门命名 change list<br />🐹 作者<br />🐰 Amend commit<br />🦊 Sign off commit<br />🦝 在提交之前 格式化代码<br />🐻 Rearrange 代码<br />🐼 优化 imports，在代码中没有使用的 package 会自动删除<br />🦘 分析代码，如果有代码异常会提示<br />🦡 简单代码有没有 TODO 没有完成会提示<br />🐨 优化代码<br />🐯 更新 copy right<br />🦁 提交的message<br />🐮 上下选择看其他文件的变动<br />🐷 选中文件的代码变动<br />🐽 commit

### 推送代码 「git push」
![image.png](./images/git-git-idea/183afcd6f07398e6a7f42a61cac09a59.png)

### 拉取代码「git pull xxx」
![image.png](./images/git-git-idea/54ce0d176b83a7c5f94ec165b9f918c1.png)

### 在便捷一点
其实上面介绍的基本上就涵盖了我们日常项目中大部分使用的功能了，但是可以看到我们在上面演示的操作基本上不是在文件夹上右键菜单来选择，但是说实话不是太跟手，用起来很麻烦。<br />其实 Jetbrains 的开发人员应该也是考虑到了这一点，其实在软件的界面中有很多位置可以操作 Git<br />![image.png](./images/git-git-idea/c5f2f39a4d2e0c9ffde956bf3fb6a679.png)<br />❤️ 拉取代码<br />🧡 提交代码<br />💛 推送代码<br />💚 查看历史<br />💙  rollback

![image.png](./images/git-git-idea/1a0ed13ede05c100dd82a87454b95a35.png)<br />点击下方的版本号，也可以看到所有本地的分支和远程的分支，可以在这里进行分支合并，和远程代码更新。

### 在快一点 VCS Operations 
代码的更新与提交提示是一个非常高频的操作，它值得拥有更加便捷的方式，Jetbranins 也提供了更加编辑的方式<br />![image.png](./images/git-git-idea/f8486835f1d1ac96db20adb6b3959f87.png)
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
| 解决冲突 | <br /> | Ctrl + V -> Resolve Conflicts... |