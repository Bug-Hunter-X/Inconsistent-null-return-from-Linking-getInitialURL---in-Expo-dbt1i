# Inconsistent null return from Linking.getInitialURL() in Expo

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where the method inconsistently returns `null` even after successfully opening a deep link.  The issue appears to be intermittent and difficult to reliably reproduce.

The `bug.js` file shows the problematic code. The `bugSolution.js` file offers a workaround.

## Problem Description

The `Linking.getInitialURL()` function is intended to retrieve the initial URL that launched the application. However, in some cases, it returns `null` unpredictably, even when a deep link was used to open the app.

## Workaround

The proposed solution involves using `Linking.addEventListener` to listen for incoming URLs. This approach ensures that you capture the deep link regardless of the `getInitialURL()` behavior.