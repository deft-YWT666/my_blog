## Python算法基础

#### 1.输入

```python
n, m = map(int, input().split())
n, m, k = map(int, input().split())#一行变量

ls = list(map(int, input().split()))#列表

vis = [[[0 for _ in range(k)] for _ in range(m)] for _ in range(n)]#多维数组
```

