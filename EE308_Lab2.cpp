#include<ctype.h>
#include<string.h>
#include<stack> 
#include<iostream>
#include<fstream>
#include<cassert>
using namespace std;
int if_elseif_else_num=0,ifelse_num=0;
char keyword[32][10]={"auto","break","case","char","const","continue","default","do ","double","else","enum","extern","float","for","goto","if","int","long","register","return","short","signed","sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while"};
int search_string(char *target,char *search)
{
    bool judge = true;
    int n = 0;
    for(int i = 0; i < strlen(target); i++)
{
    judge = true;
    for(int j = 0; j < strlen(search); j++)
    if(target[i+j] != search[j])
{
    judge = false;
    break;
}
    if(judge)
    n++;
}
return n;
}

void find_if(char *x)
{
	stack<int> S;
	ifstream file; 
    file.open(x);
	string line;
	while(getline(file,line))
	{
			if(line.find("else if")!=string::npos)
		{
			S.push(2);
		}
		else
		{
			if(line.find("if")!=string::npos)
			{
				S.push(1);
			}
			else
			{
				if(line.find("else")!=string::npos)
				{
					if(S.top()==1)
					{
						ifelse_num++;
						S.pop();
					}
					else	
					{
						if(S.top()==2)
						{
							if_elseif_else_num++;
							S.pop();
						}
					}
				}
			}
		}
	}
	file.close();
}

int main()
{   int i=0;
	char a[10000]; 
    int num;
    int lv=4;
    char b[100];
	cin>>b;
    ifstream infile; 
    infile.open(b);  
    assert(infile.is_open());  
    infile >> noskipws;    
     while (infile >> a[i]){
        i++;
    }             
    int text_length=i;
    i=0,num=0;  
    for(i=0;i<32;i++){
    	num=num+search_string(a,keyword[i]);
	}
    cout<<"Level: "<<lv<<"\n";
    cout<<"total num: "<<num<<"\n";
    cout<<"switch num: "<<search_string(a,keyword[25])<<"\n";
    cout<<"case num: ";
	bool judge = true;
    int casenum = 0;
    for(int i = 0; i < text_length; i++)
{   
    if(a[i]=='s'&&a[i+1]=='w'&&a[i+2]=='i'&&a[i+3]=='t'&&a[i+4]=='c'&&a[i+5]=='h'&&casenum!=0){
    	cout<<casenum<<" : ";
    	casenum=0;
	}
    judge = true;
    for(int j = 0; j < strlen(keyword[2]); j++)
    if(a[i+j] != keyword[2][j])
{
    judge = false;
    break;
}
    if(judge)
    casenum++;
}
    cout<<casenum<<endl;
    find_if(b);
    cout<<"if-else num: "<<ifelse_num<<endl;
    cout<<"if-elseif-else num: "<<if_elseif_else_num;
}
