# stl小题

##  [P1102 A-B 数对 - 洛谷](https://www.luogu.com.cn/problem/P1102) 

###  题解

哈希表 +思维好题

### 代码(C++)

```cpp
#include<bits/stdc++.h>
#define int long long

using namespace std ;

const int N = 2e5 + 10 ;
int n , c , ans ;
int num[N] ;
map<int , int> mp ;

void solve(){
    cin >> n >> c ;
    for(int i = 1 ; i <= n ; i++){
        cin >> num[i] ;
        mp[num[i]]++ ;
    }
    for(int i = 1 ; i <= n ; i++){
        ans += mp[num[i] - c] ;
    }
    cout << ans << endl ;
}

signed main(){
    ios::sync_with_stdio(false) ; cin.tie(0) ; cout.tie(0) ;
    solve() ;
    return 0 ;
}
```



##  [P12592 重生有惊喜 - 洛谷](https://www.luogu.com.cn/problem/P12592) 

## 题解

注意 : unordered_map 的数据类型是pair<int,int> , 因此auto出来的数据类型也是pair , 引用要.second

### 代码(C++)

```cpp
#include<bits/stdc++.h>

using namespace std ;

int n , cnt , t ;

void solve(){
    cin >> t ;
    while(t--){
        unordered_map<int,int> mp ;
        string s ;
        cnt = 0 ;
        cin >> s ;
        for(int i = 0 ; i < (int)s.size() ; i++){
            mp[s[i]]++ ;
        }
        for(auto i : mp){
            if(i.second % 2 != 0){
                cnt++ ;
            }
            if(cnt > 1){
                break ;
            }
            //剪枝 , cnt > 1 就可以break掉 , 再往下 cnt 只会比现在更大
        }
        if(cnt > 1){
            cout << "No" << endl ;
        }
        else{
            cout << "Yes" << endl ;
        }
    }
}
int main(){
    ios::sync_with_stdio(false) ; cin.tie(0) , cout.tie(0) ;
    solve() ;
    return 0 ;
}
```

