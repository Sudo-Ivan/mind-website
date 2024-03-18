---
sidebar_position: 1
---

# Fixing the "externally-managed-environment" Error in Python

## Problem Description
When working with Python, you may encounter the "externally-managed-environment" error. This error typically occurs when there is a conflict between the Python environment managed by your system and an external environment manager, such as Anaconda or virtualenv.

## Solution
To fix the "externally-managed-environment" error, follow these steps:

1. Identify the source of the conflict: Determine which environment manager is causing the conflict. This could be Anaconda, virtualenv, or any other external environment manager.

2. Deactivate the external environment: If you are using Anaconda, run the following command to deactivate the environment:
    ```
    conda deactivate
    ```

    If you are using virtualenv, run the following command to deactivate the environment:
    ```
    deactivate
    ```

    Note: The specific command may vary depending on the environment manager you are using.

3. Verify the Python environment: Check if the Python environment managed by your system is active. Run the following command to verify:
    ```
    python --version
    ```

    If the command returns the expected Python version, then the system-managed environment is active.

4. Lastly **Linux Users:** 

```bash
sudo rm /usr/lib/python3.11/EXTERNALLY-MANAGED
 ```