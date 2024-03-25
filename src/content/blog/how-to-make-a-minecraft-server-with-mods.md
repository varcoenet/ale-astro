---
title: "How to Make a Minecraft Server With Mods"
description: "If you're interested in building your own world, you may want to start with one in Minecraft. Here's how to make a Minecraft server with mods."
pubDate: "Feburary 08, 2023"
heroImage: "/images/blog/KI-KI-KI-MA-MA-MA-Finally-fou.jpg"
categories: ["minecraft", "gaming"]
articleSection: "Gaming"
articleTag: "how to make a minecraft server with mods"
---

Like Minecraft?

You're not alone. With over [140 million active monthly players](https://www.searchlogistics.com/grow/statistics/minecraft-user-statistics/#Minecraft_Key_Statistics), it's still popular years after release.

But even a game as creative as Minecraft can get old. However, with some mods, you can change the game to your liking, and breathe new life into an old experience with new textures, creatures, and added functionality. Best of all, you can host a server and invite your friends to play with you.

Curious about how to make a Minecraft server with mods? Whether you prefer the Bedrock or Java Edition, this guide will get you started.

## How to Make a Minecraft Server With Mods

Creating a Minecraft server isn't necessarily difficult, but it does require some technical know-how. It always requires some knowledge of the game and what you want to get out of your gaming experience.

### Technical Requirements

Let's start by talking about the technical requirements. At the very minimum, you will need the following:

- Copy of Minecraft
- Internet connection
- Login information for your router
- Computer with at least 4 GB of RAM

Depending on what mods you intend on installing, you may have greater technical requirements. This is especially true of RAM requirements.

### Choose Your Version of Minecraft

There are two different versions of Minecraft: Java and Bedrock Edition.

The Java Editon was programmed in Java. It was originally released in 2009 by Mojang when it was just called Minecraft. It's exclusive to PC, MAC, and Linux.

Minecraft Bedrock is the newest version, released in 2017. It's built on the Bedrock Engine.

The Bedrock Edition is a complete remake of the game. It's written in C++. Bedrock's greatest feature is that it allows for cross-platform play, meaning that you and your friends can play together across PC and consoles.

The technical differences mean that many third-party tools that were designed for the Java Edition will not work with the Bedrock Edition. This is because the Java Edition uses the Anvil format for world storage, while the Bedrock Editon uses the LevelDB format.

Basically, the different versions of the game generate worlds differently. This means the two editions are not cross-compatible.

There are a few other technical differences as well. For most people, those technical differences are minor and won't matter. However, it's important to note that Bedrock Edition tends to run better on lower-end devices, due to it being designed to function cross-platform (including on mobile devices).

From a gameplay perspective, Bedrock Edition offers achievements and extra in-game items. However, Java offers a lot more mods. Bedrock does have add-ons, but Java Edition has tons of mods than enable you to completely change the game.

If you want to play with others (especially on a console) and want better performance, choose Bedrock. If you want access to the greatest number of server mods, go with Java. Ultimately [choosing a version of Minecraft](https://www.gamespot.com/articles/minecraft-java-vs-bedrock-which-version-is-best-for-playing-mojangs-game/1100-6502838/) depends on your preferences.

The good news is that if you purchase the Java Edition of Minecraft, you get the Bedrock Edition for free.

### Install Minecraft

Obviously, if you don't have Minecraft installed, you need to install it. It's a fairly straightforward process. Head over to the [official Minecraft download page](https://www.minecraft.net/en-us/get-minecraft) and follow the on-screen prompts to download and install it, as well as the server software (if you plan on hosting a server of your own).

### Choose and Install Your Mod Manager

To handle all of your Minecraft mods, it's best to install a mod manager. A mod manager simply acts as an easy all-in-one interface to manage your library of mods. They make installing and managing multiple mods easy.

There are a few different mod managers available. [Minecraft Forge](https://www.pcgamesn.com/minecraft/how-to-install-minecraft-forge) is one of the more popular ones.

Not every mod will be compatible with every launcher. Take a look at some of the Minecraft mods available and find out which launchers they are compatible with.

The directions for installing and setting up a mod manager vary depending on the mod manager you choose, so consult the specific launcher's guide for help with this.

If you're not sure which mod manager to use, you can always stick to the [official Minecraft Launcher](https://www.xbox.com/en-us/games/store/Minecraft-Launcher/9PGW18NPBZV5) for Windows 10 and 11. It allows you to launch Minecraft Bedrock, Java, and Minecraft Dungeons all from the same launcher.

### Choose Your Mods

Minecraft has been popular in the modding community for a long time. There are loads of [Minecraft mods](https://aleforge.net/blog/everything-to-know-about-modded-minecraft) available.

Some add in new textures or materials, altering the look of the game. Some add new enemy types. Other mods are more utilitarian in nature, adding functionality to the game.

When choosing mods, take note of which versions of Minecraft they are compatible with. Some mods may not be compatible with the latest updates of the game.

Some popular sites to find Minecraft mods are CurseForge, MinecraftMods, and Planet Minecraft.

### Install Your Mods

Now that you have your mods ready, it's time to install them. The specific instructions will vary from one launcher to another.

However, if you're using the popular launcher Forge, it's easy to get started. Once you have your game and launcher installed, open the Minecraft launcher.

From the bottom left of the launcher, change the profile to "forge." When the game starts, you should see a "Mods" menu at the start screen.

Now you need to move your mod files into the newly created Forge mods folder.

By default, on PC that folder's address is: C:\\Users\\\[your username\]\\AppData\\Roaming\\.minecraft\\mods

On Mac, the folder address is: \[your computer's name\] > Macintosh HD > Users > \[your username\] > Library > Application Support > minecraft > mods

If installed correctly, you should be able to see your available mods after selecting the "Mods" button from the game's main menu.

Now you're set up and ready to play modded Minecraft. Now you're ready to set up and connect to your server.

## Configuring Your Bedrock Server

Start by extracting your downloaded server files. Now open the "server.properties" file and edit it. This file contains your basic server properties.

Now you need to exempt Minecraft from UWP loopback restrictions. Doing this allows you to both host and connect to a server on the same computer.

Open your command prompt and paste the following command into it:  
CheckNetIsolation.exe LoopbackExempt –a –p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436

Hit enter and execute the command.

### Enable Port Forwarding

Now you need to find your IP address via the command prompt. Type ipconfig /all into the prompt and hit enter. It should show an IP4, IP6, and Default Gateway address.

Now you have to open your router and change your system port settings. Unfortunately, every router is different, so you will need to consult your router manufacturer's directions.

### Connecting to Your Server

Start by opening Minecraft. From the main menu hit play, and select the servers tab. Select the "Add Server" option.

Enter your server details. This includes the public IP address, port ID (by default it's 19132), and your server's name.

Hit play and a new world should be generated for you and your friends to play in.

## Configuring Your Java Server

Configuring a Minecraft Java server is different. Make sure you have Java installed and up to date on your PC, so it can run .jar files. Then [download the Java Edition server](https://www.minecraft.net/en-us/download/server).

Now you need to create a desktop folder for your server files. Copy and paste the .jar file you downloaded into this folder.

Now open the command prompt and paste the address of your server directory. Hit enter. Then type the following command and hit enter:  
Java -jar “name of your jar”.jar

Back in the server folder open the eula.txt file. Change eula=false to eula=true. Save and exit.

From there, you have some additional work to do, such as editing the server.properties file - just like you would do with the Bedrock Edition.

Like with Bedrock, you need to enable port forwarding. However, for the Java Edition, the default port is 25565.

Overall, installing, configuring, and connecting to the Java Edition server isn't as friendly as it is for the Bedrock Edition. Consult the official [Java Edition server setup guide](https://help.minecraft.net/hc/en-us/articles/360058525452-How-to-Setup-a-Minecraft-Java-Edition-Server) if you need to.

## The Easiest Way to Host a Server

If setting up a modded Minecraft server sounds complicated, it definitely can be.

By far the best and easiest way to make a Minecraft server with mods is to use AleForge's Minecraft server hosting. We offer server mods for both Java and Bedrock Editions.

Along with modpack installation, we offer scheduled backups, fast SSD storage, DDos protection, and 24/7 support.

If you're wondering how to make a Minecraft server with mods, and want something that's easy to set up and affordable to use, we can help.

Check out our [Minecraft server hosting options here](https://aleforge.net/games/minecraft).
