---
sidebar_position: 3
---

# Fixing the "externally-managed-environment" Error in Python

## Problem Description
When working with Python, you may encounter the "externally-managed-environment" error. This error typically occurs when there is a conflict between the Python environment managed by your system and an external environment manager, such as Anaconda or virtualenv.

## Linux Solution
To fix the "externally-managed-environment" error, follow these steps:

```bash
sudo rm /usr/lib/python3.11/EXTERNALLY-MANAGED
 ```
