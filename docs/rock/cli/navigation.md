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
	- relative vs absolute path
```sh [Change dir]
# change path to dir2 (relative path)
user> cd ./dir2
user/dir2> 

# change path to home
user/dir2> cd ~ 
user>

# change path to dir2 (absolute path)
user> cd /user/dir2
user/dir2> 

# change path to root
user> cd /
/>
```

- Display my current path
```sh [where am i]
user/dir2> pwd
/home/user/dir2 # my current path
```

### Working with File

- Create file

```sh
touch file1.txt 
touch file1.txt file3.txt file2.txt
```

- Display file
```sh
cat file1.txt 
```

- List file

```sh
# list files
user> ls
user> dir1 dir2 file.txt 

# list meta data
user> ls -lh

# list hidden files
user> ls -a
```

- Remove file

```
rm file.txt
```

- Copy File

```sh
cp file1.txt file2.txt
# copy file1 to Desktop (absolute path)
cp file1.txt ~/user/Desktop/
```

- Rename File

```sh
mv file0.txt file1.txt
```

- Move File
```sh
# move file1 complete;y to Desktop
mv file1.txt ~/user/Desktop
```

- Detect File Type

```sh
file file1.txt
```


---

::: danger Kuroku, the Path-Twister

Kuroku, the Path-Twister, is a cunning and elusive ninja villain who specializes in disrupting and manipulating navigation within the Linux system. With unmatched stealth and skill, Kuroku can obscure the paths that programs use to navigate through directories and files, causing confusion and chaos.

:::


<Play/>


