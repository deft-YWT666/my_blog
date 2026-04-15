# dfs好题

##  [P2036 [COCI 2008/2009 #2\] PERKET - 洛谷](https://www.luogu.com.cn/problem/P2036) 

## 题解

(1) 题意 : 分别给 n 个酸度s 和 苦度b 找出一种让 酸度累乘和酸度累加和  之差最小的选法 , 并输出这个差

(2) 思路 : 看见n <= 10 , 果断选择dfs把所有情况都枚举出来 

### 代码(c++)

```cpp
#include<bits/stdc++.h>
#define int long long

using namespace std ;

const int N = 11 ;
int s[N] , b[N] ;
int n  , ans = 1e18 ;

void dfs(int dep , int sum_s , int sum_b){
    if(dep > n){
        if(sum_s == 1 && sum_b == 0){
            return ;
        }
        //我们要把一种都不选的情况剔除
        ans = min(ans , abs(sum_b - sum_s)) ;
        return ;   
    }
    //出口为 dep == n + 1 时
    
    dfs(dep + 1 , sum_s * s[dep] , sum_b + b[dep]) ;
    //若选择第dep个调料
    
    dfs(dep + 1 , sum_s , sum_b) ;
    //若不选第dep个调料
}

void solve(){
    cin >> n ;
    for(int i = 1 ; i <= n ; i++){
        cin >> s[i] >> b[i];
    }
    dfs(1 , 1 , 0) ;
    cout << ans << endl ;
}
signed main(){
    ios::sync_with_stdio(false) ; 
    cin.tie(0) , cout.tie(0) ;
    solve();
    return 0 ;
}
```



##  [P1464 Function - 洛谷](https://www.luogu.com.cn/problem/P1464) 

## 题解

(1) 题意: 我们要实现一个包含四种功能的递归函数 w(a , b , c)

(2) 思路:  dfs记忆化搜索

(3) 总结 : 当我们需要用到函数数值 , 记忆化搜索 的时候 , dfs 函数的类型一般为 Int

## 代码(c++)

```cpp
#include<bits/stdc++.h>
#define int long long 
using namespace std ;
int a , b , c ;
int mem[25][25][25] ; 
int dfs(int x , int y , int z ){
	if(x < 25 && y < 25 && z < 25 && x > 0 && y > 0 && z > 0){
		if(mem[x][y][z] != -1) return mem[x][y][z] ;
	}
    // 如果之前到达过这个情况 , 我们直接返回记忆数组就行了
    
	int ans = 0 ;
	if(x <= 0 || y <= 0 || z <= 0 ) {
		ans = 1 ;	
	} 
	else if(x > 20 || y > 20 || z > 20){
		ans = dfs(20 , 20 , 20) ;
	}
    
	else if(x < y && y < z){
		//w(a,b,c-1)+w(a,b-1,c-1)-w(a,b-1,c)
		ans = dfs(x , y , z - 1 ) + dfs(x, y - 1 , z - 1 ) 
										- dfs(x , y - 1 , z ) ;
	}
    
	else{
		//w(a-1,b,c)+w(a-1,b-1,c)+w(a-1,b,c-1)-w(a-1,b-1,c-1)
		ans = dfs(x - 1 , y , z ) + dfs(x - 1 , y - 1 , z ) +
			dfs(x - 1 , y , z - 1 ) - dfs(x - 1 , y - 1 , z - 1 ) ; 
	}
    
	if(x < 25 && y < 25 && z < 25 && x > 0 && y > 0 && z > 0){
		mem[x][y][z] = ans ;
	}
    //如果范围符合 , 我们就把我们当前得到的答案存到 mem 数组里进行记忆化
    
	return ans ;
}
void solve(){
	memset(mem , - 1 , sizeof(mem)) ;
	while(1){
		cin >> a >> b >> c ;
		if(a == -1 && b == -1 && c == -1 ) break ;
		int ans = dfs(a , b , c) ; 
		//w(a, b, c) = ans
		printf("w(%lld, %lld, %lld) = %lld\n",a,b,c,ans) ;
	}
}
signed main(){
	solve() ;
	return 0 ;	
}
```





##  [B4158 [BCSP-X 2024 12 月小学高年级组\] 质数补全 - 洛谷](https://www.luogu.com.cn/problem/B4158) 

## 题解

(1) 题意: 题目给定我们一个字符串 s , 这个 s 中有一些  * , 可能是 0 ~ 9 之间的任何数字 . 要我们求出这个字符串对应的最小的素数 .

(2) 思路: dfs回溯:本题我们使用 dfs 把 * 的位置进行枚举 , 并且每次得出一个数字就对 ans 取一次 min( )

## 代码(c++)

```cpp
#include<bits/stdc++.h>
#define int long long


using namespace std ;

int t , ans;
string s ;


bool is_prime(int x){
    if(x <= 1 ) return true ;
    for(int i = 2 ; i <= x / i ; i++){
        if(x % i == 0){
            return false ;
        }
    }
    return true ;
}

void dfs(int dep){
    if(dep == (int)s.size()){
        int k = stoi(s) ;
        //stoi( ) 是一个吧字符串转换成整数的一个函数
        if(is_prime(k)){
            if(ans == -1 || k < ans){
            // 找到这个数了 , 或者找到一个更小的 就把 k 存进去
                ans = k ;
            }
        }
        return ;
    }
    if(s[dep] == '*'){
        for(char i =(dep == 0 ? '1' : '0' ) ; i <= '9' ; i++){
            // 首位不能是 0 ,如果是0的话就让 i 从 1 ~ 9
            s[dep] = i ;
            dfs(dep + 1) ;
        }
        s[dep] = '*' ;
        //回溯 , 每次遍历完所有数字要把原来的 * 变回去
    }
    else{
        dfs(dep + 1) ;
        //如果是数字就直接跳过
    }
}

void solve(){
    cin >> t ;
    while(t--){
        cin >> s ;
        ans = -1 ;
        //如果找不到那个数字就是 -1 
        dfs(0) ;
        cout << ans << endl ;
    }
}

signed main(){
    ios::sync_with_stdio(false) ; cin.tie(0) , cout.tie(0) ;
    solve() ;
    return 0 ;
}
```



##  [P9241 [蓝桥杯 2023 省 B\] 飞机降落 - 洛谷](https://www.luogu.com.cn/problem/P9241) 

### 题解:

(1) 题意 : 我们现在有 n 辆飞机 , 每一辆飞机有他 开始降落的时间 t , 盘旋的时间 d , 下降到落地的时间 l , 现在我们需要判断这些飞机能不能在规则之内都降落到地面

(2) 思路 : 我们可以使用 dfs 把飞机所有降落顺序的排列写出来然后挨个判断 , 合法的时间应该是 : 当前飞机的 t +

当前飞机的 d < 上一辆飞机的落地时间 , 而每一辆飞机的落地时间是 max(当前飞机 t , 上一辆飞机的落地时间) + 当前飞机 l 

(3) 总结 : 问合法性的时候 dfs 函数的类型一般为 bool

### 代码(c++)

```cpp
#include<bits/stdc++.h>
#define int long long

using namespace std ;

const int N = 11 ;
struct plane{
    int t , d , l ;
}p[N] ;

int n , t , st[N];

bool dfs(int dep , int time){
    if(dep > n){
        return true ;
    }
    for(int i = 1 ; i <= n ; i++){
        if(!st[i]){
            st[i] = true ;
            if(p[i].t + p[i].d < time){
                st[i] = false ;
                return false ;
            }
            int tm = max(time , p[i].t) + p[i].l ;
            if(dfs(dep + 1 , tm)){
                return true ;
            }
            st[i] = false ;
        }
    }
    return false ;
}

void solve(){
    cin >> t ;
    while(t--){
        memset(st , false , sizeof(st)) ;
        cin >> n ;
        for(int i = 1 ; i <= n ; i++){
            cin >> p[i].t >> p[i].d >> p[i].l ;
        }
        if(dfs(1 , 0)){
            cout << "YES" << endl ;
        }
        else{
            cout << "NO" << endl ;
        }
    }
}

signed main(){
    ios::sync_with_stdio(false) ; 
    cin.tie(0) , cout.tie(0) ;
    solve() ;
    return 0 ;
}
```



##  [P1219 [USACO1.5\] 八皇后 Checker Challenge - 洛谷](https://www.luogu.com.cn/problem/P1219) 

### 题解:

(1) 题意 : 给一个 n x n 的棋盘 , 我们要放皇后 , 皇后不能在相同的一行 , 相同的一列 , 相同的对角线(两条) , 输出前 3 组解 , 再输出解的总数

(2) 思路 :  经典的 dfs 回溯 , 直接上代码

### 代码(c++)

```cpp
#include<bits/stdc++.h>

using namespace std ;

const int N = 1e2 + 10 ;

int a[N] , b[N] , c[N] , d[N] ;
//a数组代表行 , b数组代表列 , cd数组代表对角线(找规律发现对角线可以用一维数组表示)
int n ;
int total ;

int out(){
    if(total <= 2){
        for(int i = 1 ; i <= n ; i++){
            cout << a[i] << " " ;
        }
        cout << endl ;
    }
    //保证输出前 3 组解
    total++ ;
    return 0 ;
}

void dfs(int i){
    //遍历到第 i 行了
    if(i > n){
        out() ;
        return ;
    }
    for(int j = 1 ; j <= n ; j++){
        //在这一行遍历第 j 列
        if(!b[j] && !c[i + j] && !d[i - j + n]){
            a[i] = j ;
            b[j] = 1 ;
            c[i + j] = 1 ;
            d[i - j + n] = 1 ;
            dfs(i + 1) ;
            b[j] = 0 ;
            c[i + j] = 0 ; 
            d[i - j + n] = 0 ;
        }
    }
}

void solve(){
	cin >> n ;
	dfs(1) ;
    cout << total ;
}

signed main(){
	solve() ;
	return 0 ;
}
```









