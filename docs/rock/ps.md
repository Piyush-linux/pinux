
### ps


| Option | 	Description |
| -- | -- |
| -e | Show all processes, including those not associated with a terminal. |
| -f |	Show full process information, including arguments.
| -u <username> |	Show processes owned by a specific user.
| -t <terminal_name> |	Show processes running on a specific terminal.
| -x |	Show processes without a controlling terminal.
| -o <PID/USER/CMD/%CPU/%MEM> |	Specify output format (PID, user, command, CPU usage, memory usage).
| --sort=<parameter> |	Sort output by different parameters.




```sh
# Display active processes of the current user
ps -ux
# Show the running processes of every user
ps -aux
# List of the running processes of a specific user
ps -U <username>
ps -U root
# List of ongoing processes of a group
ps -G group_id/name
ps -G sagar
# Find the PID of a process
ps -C process_name
# Find the process name from the PID
pid -p PID

```

- PID: it indicates the process ID of the process.
- STAT: shows process state code indicating the current status of the process.
- TTY: shows the controlling terminal behind the process.
- TIME: shows how much CPU time a process has utilized.
- COMMAND: displays the executable that initiated the process.


- %CPU: the amount of CPU time the process has used (in %).
- %MEM: memory utilization by the process in %.
- VSZ: the total amount of virtual memory allocated to a process.
- RSS: the amount of physical memory (RAM) currently being used by a process.
- TIME: time when the process was started.