# Garbage engine

Side project game engine using canvas in HTML5.

## Launch

Begin with running the project!

```bash
# Chrome 
google-chrome index.html

# Firefox
firefox index.html
```

Then use VS Code to edit the content, the game files are in `./frontend/project-files/**`. If you add new scripts or image don't forget to add them to `./frontend/index.html`. Engine scripts are in the header, game script are at the end of the body. 
> Note that the order of the gameobject in which you reference in `index.html` represent the layer of your object to the renderer.

## Vision

Create a game engine to allow devs a technical alternative for online game development. Ideally with an online component/toolbox to deploy massive scale games using a sass hosting in-house platform. Ideally the devops sass would be a paid platform tailored to this engine, with an asset shop. 

Altought there is monetisation potential, I want to keep this engine a 100% free to whom may have the skill to host/scale the game on it's own.

Another aspect of the engine is, altough it's technical nature, I want it to be simple to read to a point where it's simpler to read this code than learning Unity or Unreal blueprint.

## Current Objectives

- Show reel game using the engine & implementing more tools
- Proper documentation of the engine
- CI/CD DevOps setup