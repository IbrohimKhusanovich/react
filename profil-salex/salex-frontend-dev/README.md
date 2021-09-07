<h1> Salex Frontend </h1>

<h3> Work cheatsheet: </h3>

1. Doimo yangi task boshlashdan oldin masterga o'tib (yoki main bolishiyam munkin) masterdan o'zgarishlarni qabul qilib olish kerak.

`git checkout master` <br>
master branchga o'tdik

`git pull`
o'zgarishlarni qabul qildik

2. Har bir task uchun yangi branch ochish shart, eski branch ustida ishlanmasin, masterda pull qilganimizdan keyin, yangi branch ochib unga o'tamiz

`git checkout -b task_name` <br>
yangi branch ochdik va unga o'tdik 

endi bemalol taskni bajarishimiz mumkin.

3. Taskni bajarib bo'lgach, o'sha branchda turgan holda push qilamiz

`git add . ` <br>
`git commit -m"nima ish qilganimiz qisqacha"` <br>
`git push`<br>

4. Keyin gitlabda MERGE REQUEST ochiladi, ya'ni masterga siz taskni bo'lganingiz va branchdagi o'zgarishlarni masterga qo'shishi haqida so'rov
