# bfs典题

##  [P1443 马的遍历 - 洛谷](https://www.luogu.com.cn/problem/P1443) 

### 题解



(1) 题意 : 现在有一张 n * m 的图 , 有一只位于 ( x , y ) 的马 , 请问它走到每一格的最短距离是多大

(2) 思路 : 遇到这种问到每一格步数的 , 我们直接采用bfs , bfs的核心就是使用一个队列 , 把当前能走到的格子放进这个队列里挨个遍历



### 代码(c++)



```cpp
#include<bits/stdc++.h>
#define int long long 

using namespace std;
typedef pair<int,int> PII ;
//因为每个节点都有 x , y 两个坐标 , 因此我们采用 pair 来模拟
const int mx[8] = {2 , 1 , -1 , -2 , -2 , -1 , 1 , 2} 
        , my[8]={1 , 2 , 2 , 1 , -1 , -2 , -2 , -1} ;//马走日 , 偏移数组不解释
const int N = 5e2 + 10 ;

int n , m , x , y ;
int dis[N][N] ;
bool vis[N][N] ;
//dis表示马到图上每一格的距离 , 我们直接用当前格子的dis + 1 来计算下一个格子的距离
void solve(){
    cin >> n >> m >> x >> y ;
	
    queue<PII> q ;
    PII st ;
    // 定义所需队列 , 和bfs第一个需要的点
    st.first = x ; st.second = y ;
    memset(dis , -1 , sizeof(dis)) ;
    dis[x][y] = 0 ;
    vis[x][y] = true ; 
	//初始化

    q.push(st) ;
    while(!q.empty()){

        PII now = q.front() ;
        q.pop() ;
		//取队首元素作为当前的节点
        PII next ;
        for(int i = 0 ; i < 8 ; i++){
            
            next.first = mx[i] + now.first ;
            next.second = my[i] + now.second ;
			//下一个节点为 , 当前节点 + 偏移量
            if(next.first > n || next.second > m || 
                next.first < 1 || next.second < 1 || 
                vis[next.first][next.second]){
                    continue ;
                }
            //判断下一个格子是否合法
            vis[next.first][next.second] = true ;
            dis[next.first][next.second] = dis[now.first][now.second] + 1 ;
            q.push(next) ;
            
        }
    }
    //bfs核心代码部分
    
    for(int i = 1 ; i <= n ; i++){
        for(int j = 1 ; j <= m ; j++){
            cout << dis[i][j] << " " ;
        }
        cout << endl ;
    }
    //输出图
}
signed main(){
    solve() ;
    return 0 ;
}

```







