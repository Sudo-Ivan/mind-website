---
sidebar_position: 2
---

# Installing Ollama on Linux or Windows

## Docker

### CPU Only

```bash
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```
### NVIDIA GPU

```bash
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

## Windows 

### CPU Only

### NVIDIA GPU

## Linux

### CPU Only

### NVIDIA GPU

### AMD GPU



