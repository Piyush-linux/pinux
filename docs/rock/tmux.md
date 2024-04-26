
> [Cheetsheet](https://tmuxcheatsheet.com/)

> | Session - Window - Plane |


```sh
tmux ls
tmux
> exit

Prefix : Ctrl + B
Detach : CB + d
tmux new -s SessionName
rename : CB + $

move up : C + b then [ then UpArrow

> CB + S
> CB + :command
tmux kill-session -t 2
tmux kill-server

# alias
tm="tmux new -s <name>" # session name
tmA="tmux a -t"
tmK="tmux kill-session -t <0>" # kill session by ID 
tmL="tmux ls"

# COPY SESSION
: capture-pane -S -1000
: save-buffer ~/tmuxHistory.sh
```