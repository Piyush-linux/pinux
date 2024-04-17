<script setup>
	import { data } from '../data/example.data.js'
	import Play from '../components/Play.vue';

	console.log(data.data[0].ans)
</script>

		What Is Distro : CLI + GUI
		beginner distro: Manjaro KDE Plasma, Zorin OS,
		arch(rolling) vs debian(stable)

# Introduction to Linux Distros

<img width="100%" src="https://fossbytes.com/wp-content/uploads/2021/12/what-is-a-linux-distribution.png" />

A Linux distro is like a special recipe for cooking up the Linux operating system. It's not just the basic ingredients (like the Linux kernel) but also the spices and flavors (software, apps, and tools) that make it unique. Each distro is designed for different tastes, whether you're using it on a desktop, a server, or even a smart fridge! Popular distros include Ubuntu, Fedora, Debian, and CentOS.

A Linux distribution (often abbreviated as "distro") is a complete operating system that is based on the Linux kernel along with a collection of software applications and tools. Different Linux distributions can vary widely in terms of their design, functionality, and intended use. Some distributions are designed for general-purpose use, while others are specialized for specific tasks or user groups. Examples of popular Linux distributions include Ubuntu, Fedora, Debian, and CentOS. Each distribution typically includes its own package management system for installing, updating, and removing software.


- __Choose You Distro__

| Begginer | Intermediate | Expert |
| -- | -- | -- | 
| Zorin OS | Archcraft | Gentoo |
| Kde Neon | Fedora | Open BSD |
| Ubuntu Unity | Opensuse | Arch Linux | 
| Linux mint | Cent OS | Slackware |

- __Distro according to their feature__

| Distro | Specification |
| -- | -- |
| Kali Linux | Used for hacking |
| Pop! OS | Gaming Distro |
| Tail OS | Become Anonymous on internet |
| Manjaro KDE | For Daily Usage |
| Linux Lite | Minimal & Fast |


- **CLI**

  The Linux command-line interface (CLI) is a text-based method for interacting with a Linux operating system.
  Users can enter commands to perform various tasks, such as managing files, running programs, configuring system settings, and more.
  The CLI is often accessed through a terminal emulator, which provides a text-based interface for entering commands and viewing their output.
  The Linux CLI is known for its power and flexibility, allowing users to perform complex tasks quickly and efficiently.



<!-- <div class="cli" style="display: flex;align-items: center;">
	<input class="cli-inp" placeholder="$ whoami" v-model="inp" />
	<button class="cli-btn" @click="search">submit</button>
</div> -->

::: tip N O T E

**Arch Linux** is a rolling-release Linux distribution known for its simplicity and customization. As a rolling release, it provides continuous updates and does not follow traditional version numbers. Users receive the latest software versions as they become available, ensuring that their system is always up-to-date.

:::

::: warning red

important

:::

::: danger red

important

:::

# Level 2

- WM : i3, bspwm, wayfire

# Level 3

- gentoo,

<Play :ans="data.data[0].ans" />