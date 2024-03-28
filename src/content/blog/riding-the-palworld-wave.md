---
title: "Riding the Palworld Wave: Plugging the Memory Leak to Keep our Servers Afloat"
description: "Palworld took the gaming world by storm when it launched into early access January 19th. Palworld is an open-world survival game with monster-taming elements. Or as it’s more commonly known “Pokémon with guns."
pubDate: "Feburary 07, 2024"
heroImage: "/images/blog/older-gamers.jpg"
categories: ["palworld", "gaming"]
articleSection: "Gaming"
articleTag: "palworld"
---

## Introduction

Palworld took the gaming world by storm when it launched into early access January 19th. It reached 3 million players a mere 40 hours after launching, and is currently sitting at over 19 million just 2 weeks after it released. Palworld is an open-world survival game with monster-taming elements. Or as it’s more commonly known “Pokémon with guns.”

To say that we were caught off guard by the demand for servers would be an understatement. When we started offering Palworld hosting we sold out in 4 hours, despite our best efforts we simply couldn’t get enough hardware to keep up with demand. That was largely due to how resource hungry their dedicated servers are. The [official recommendation](https://tech.palworldgame.com/dedicated-server-guide) is 4CPU cores and 32GB+ of RAM for stable operation. You could run 30+ Terraria servers on that amount of RAM. Most of the (frankly excessive) resource usage comes from bugs and poor optimization, but that’s to be expected from an early access game.

## Very Much Early-Access

There’s a good reason Palworld blew up like it did. It’s _fun_. Like, really fun. Getting to watch a cutesy spherical lamb build a gun for you just isn’t something that any other game offers. But Palworld does. However, it launched with a litany of bugs/performance issues ranging from funny to inconvenient and even game breaking. Some of my personal favorites have been:

- Being able to wear full sets of armor in your Glider, Shield, and Head equipment slots simultaneously.\*  
  (I managed to get up to 2,600 defense before it was sadly fixed in the most recent update.)
- Being able to catch tower bosses like Zoe & Grizzbolt. Unsure if this has been fixed yet.
- Pals in your base inexplicably getting teleported to the skybox and dying from the resulting fall damage.\*
- Climbing on a palsphere before the catch finishes sending you _flying_. (This ended up being key to discovering the source of a major memory leak, but I’ll come back to that.)

> _Anything that has been fixed is marked with a \*_

All of those issues affected singleplayer and multiplayer alike, but there were a few issues with dedicated servers specifically that hit AleForge and other server providers particularly hard, mainly:

- Infinite Loading Screens.
- Transferring Saves Between Servers
- Multiple Memory Leaks.

> 💡**What’s a Memory Leak?**
>
> Think of your computer’s memory (RAM) like a whiteboard that programs use to write down information they plan on using later. When a program has a memory leak, it keeps writing things on that whiteboard, but it doesn’t go back and erase anything. Even if it doesn’t need it anymore. Eventually the program runs out of space to write new information and crashes. Sometimes taking your computer down with it.

It’s certainly an early access game and the developers have been working tirelessly to get these bugs fixed. Even still, we wanted to do everything we could to resolve these issues ASAP. Constant rubber-banding and server crashes, getting stuck on the loading screen while you listen to your friends play the game. Or worse, not being able to get a server at all due to prohibitive costs. We couldn’t sit idly and wait for the devs to fix the performance issues. Surely there was something we could do.

## Rallying With Our Community

We were far from the only ones suffering through these issues. Palworld’s official server-help channel in their discord was flooded with people asking how to fix the crashes/infinite loading screen, or how to transfer their save. Frustratingly, no one seemed to have good answers. However, thanks to our incredible community, we ended up on the frontline reining in the poor performance and game-breaking bugs.

It started small, with members in our discord sharing their discoveries regarding the most common issues. But it grew rapidly as more and more of our community started contributing their knowledge and experience. Support staff member Carbonic and community members Mayples and VeroFess were the MVPs in this, but many others pitched in.

It was truly heartwarming to see so many people working together, helping each other optimize and fix what they could. Pretty soon we managed to get a few servers with 12+ hours of uptime before they needed to be rebooted to prevent a crash. This extended uptime was a major improvement over the near-hourly crashes we faced at launch. If you want to make these changes on your server, we have an article [here](https://help.aleforge.net/article/233-how-can-i-optimize-my-palworld-server) that will walk you through how.

We managed to make some progress on transferring saves and getting past the infinite loading screen as well. Here’s what we know about those:

- **Infinite Loading Screen**

  This is caused by someone leaving your guild when you’re offline, which corrupts your character save data. Currently the only known fix is to delete the corrupted save from the server files. If you need help with this on one of our servers, open a ticket [here](https://billing.aleforge.net/submitticket.php) or on our [Discord](https://discord.gg/TWBVSVsGnD) and we’ll do our best to get it fixed. You will lose your levels, items, and Pals but sadly there’s no other fix at the time of writing.

- **Transferring Saves**

  There’s two parts to this, since going from singleplayer → server is different than server → server. We have a guide on how to do both [here](https://help.aleforge.net/article/228-how-to-upload-your-palworld-world), but the process is pretty janky and your results may vary.

  - Singleplayer/Co-Op → Server

    At the time of writing this works… Mostly. The world and most of the player data will transfer without a hitch, except for the host’s. By default Palworld tracks which player is which with a GUID (Globally Unique Identifier). That ID is tied to their Steam/Xbox account. However, the host’s data gets saved under ID 000000001. So when they join, the server doesn’t recognize them and forces them to make a new character. There’s an unofficial fix [here](https://github.com/xNul/palworld-host-save-fix), use at your own risk.

  - Server → Server

    Once again, this is currently kinda working. Unless you’re trying to transfer a world that was created before patch 1.3.0. That patch changed the way dedicated servers create and manage GUIDs. As far as we know, there isn’t a workaround for this. Otherwise, following guide I linked before should work. If you get stuck or need help transferring to our servers, open a ticket and we’ll help you out.

While we were working on finding solutions to the infinite loading screen and save transfers, Mayples and VeroFess were still plugging away at the memory leaks and things were starting to heat up. So much so that we opened The Code Forge, a dedicated discord channel for our community to use as they reverse engineered the game.

## Plugging the Leak

The early improvements came from simple setting adjustments. Like lowering the number of ground items, disabling raids, and disabling the offline penalty. That last one doesn’t affect gameplay much since your Pals currently won’t eat if you’re offline. So they get sick anyway. Ultimately, we quickly exhausted our optimization options and were still dealing with regular crashes. That was until we found [VeroFess’s Unofficial Fix](https://github.com/VeroFess/PalWorld-Server-Unoffical-Fix).

Almost immediately, Carbonic spun up a community server for us to stress test it, and the results were good. With only 2CPU cores and 12GB of RAM the server was running smoothly. No lag or rubber-banding. Even with 9 people on! (Getting to be one of those 9 was an awesome experience) What VeroFess had done was edit the server binary to fix several poorly optimized functions. I cannot overstate the technical ability that was required to pull that off, especially without being able to see the source code. Once we were sure it was stable, we rolled his fix out to all of our customers and saw marked improvements in stability and uptime. Once patch 1.3.1 hit, we no longer needed it as the devs had fixed the issue (Thanks in part to VeroFess).

While there had been significant improvements to server performance and RAM usage, it wasn’t entirely fixed. As people played on a server, RAM usage would climb and climb, but _why?_ Mayples was the one who discovered what was going on, all thanks to the palsphere bug I mentioned earlier.

> Mayples (paraphrased):
> I had a bug like that back in CoDMW2 when we put in a new grenade launcher. It would launch the players, not the projectile. It was because we didn’t kill the object we just teleported it, and the momentum would send players flying. The palsphere bug is the same thing. They don’t kill the object; just teleport it, and the momentum launches you. Which told me they’re making a killbox somewhere like we were.  
> They load dungeons under the map, if you get out you can see the whole map, and where they stack everything waiting to be killed. The graphics are turned off but the objects are there. Yet they never actually get deleted. Then the game starts throwing errors for stuff spawning off the map, eventually it building up a massive error log and crashing.

Going back to the whiteboard analogy. When an object like used palspheres or sticks/stones on the ground spawn, they get drawn on the board. When they “despawn” they don’t get erased, just hidden. Eventually the server goes back and writes “error” under it, taking up more space. You’re probably starting to see how Palworld servers chew through RAM like potato chips, aren’t you?

## Conclusion

While there are still some outstanding issues, the last few weeks have seen massive strides in taming Palworld's runaway resource usage. Thanks to fixes from the devs and incredible work from our community, we've managed to get a few servers comfortably running for over 24 hours now!

Huge shoutout to Mayples for his discovery around the killbox leak and VeroFess for his unofficial fix that gave us some much needed breathing room early on. All these performance insights have been passed onto the developers who (hopefully) have a stability update in the works. Outside of that, they've done an awesome job hammering out other early access bugs.

While Palworld still has some maturing to do before it's ready to leave the nest, we're thrilled to have made large server-side improvements with help from our players. If you want to join our incredible community and maybe even lend a hand optimizing further, hop onto our [Discord](https://discord.gg/TWBVSVsGnD)! We've also got a 20% launch discount going on [Palworld servers](https://aleforge.net/games/palworld) if you and your friends have been waiting to jump in. Either way I can’t wait to see what the future of Palworld holds!
