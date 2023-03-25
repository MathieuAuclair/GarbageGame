# Welcome to the contributing guide!

Thank you for investing your time in contributing to this project!

_Rules are simple!_

```javascript
import { radar, isPassingVibeCheck } from "@github/mathieuauclair/quality-radar";

const projectVision = [
    "Providing Online Support",
    "Improving Reliability",
    "Improving Performances",
    "Simplifying Functions",
];

const isPullRequestAboutVision = projectVision.includes pullRequest.subject;

if(isPullRequestAboutVision) {
    pullRequest.merge();
}

if(radar(pullRequest.changes) || isPassingVibeCheck(pullRequest.vibe)) {
    pullRequest.merge()
}

if((typeof pullRequest) == ":poop:") {
    throw Error("Will no pick up!");
}
```
