<script setup>
	import Play from "../components/Play.vue"
</script>

## Linux File tree

> Everything in linux is a file, even an directory / folder is a type of file which contain other files

![](https://www.linuxtrainingacademy.com/wp-content/uploads/2014/03/linux-directory-tree.jpg)

- `/` : Root Directory, this act like base dir to store other files
- `/home` : Home Directory, this is where the user's desktop, documents & music dir are stored
- `/etc , /var ...` : Other Directories, also have their own purpose which we will learn in upcoming modules 



## Directory

```sh
mkdir 
rmdir
ls
touch
rm 
```


- Create directory
```sh [Create dir]
# Create & list dir1, dir2
user> mkdir dir1 dir2 
user> ls 
user> dir1 dir2
```

- Remove dir
```sh
user> rmdir dir1
user> ls 
user> dir2
```

- Change directory
```sh [Change dir]
# change path to dir2 (relative)
user> cd ./dir2
user/dir2> 

# change path to home
user/dir2> cd ~ 
user>

# change path to dir2 (absolute)
user> cd /user/dir2
user/dir2> 
```

- Display my current path
```sh [where am i]
user/dir2> pwd
/home/user/dir2 # my current path
```

- Create file

```sh
touch file1.txt 
```
- Display file
```sh
cat file1.txt 
```

## Navigation



```sh
# navigation
touch
rm
cd
pwd
mv
cp
ls
file
cat 


# help
man
<cmd> --help 
tldr
cheat.sh

# about
whoami
uname
hostname
neofetch

```

---

::: danger Kuroku, the Path-Twister

Kuroku, the Path-Twister, is a cunning and elusive ninja villain who specializes in disrupting and manipulating navigation within the Linux system. With unmatched stealth and skill, Kuroku can obscure the paths that programs use to navigate through directories and files, causing confusion and chaos.

:::


<Play/>


