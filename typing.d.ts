type ABOUT = {
    name :  string
    Link :   string
}



  type SOCAL = {
    Name : string
    Href : string
  }
   
interface FREEDOWLOAD  {
    name :  string
    href :  string   
}

type  LATESTNEWS  = {
  IMAGE : string ,
  Header_text : string ,
  SECOND_text: string ,
  COMMING_Date : string ,
  href : string 
}
type  BATTLE_ROYAL  = {
  IMAGE : string ,
  Header_text : string ,
  SECOND_text: string , 
}

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

interface JOINTHECONVERSION  {
    name :  string
    href :  string   
}
interface LEGENDS  {  
    IMG : string
    NAME : string
    ROLE :  string   
    NICK_NAME : string 
}
interface ROLES  {     
    NAME : string
  
}

interface LEGENDSDETAIL  {      
    NAME : string
    VIDEO : string
    LEGENDS_IMG : string
    LEGENDS_IMG2 :  string   
    FRIENDS_1_Name : string
    FRIENDS_2_Name  : string
    VOICE_1 : string
    LEGENDS_SKILL_EXP : string
    SKILL_EXP1 : string
    READ_MORE : string
    RealName : string
    Age : string
    HomeWorld : string
    Class : string
    TacticalAbility : string
    PassiveAbility : string
    UltimateAbility : string
    CLASS_IMG : string
    CLASS : string
    CLASS_text : string
    TacticalAbility_IMG : string
    PassiveAbility_IMG  : string
    UltimateAbility_IMG  : string
    TacticalAbility_detail : string
    PassiveAbility_detail : string
    UltimateAbility_detail : string    
    Swipe_VIDEO : Swipe_VIDEO
}

interface Swipe_VIDEO  {
  VD1 : string
  VD2 :  string
  IMG1 : string
  IMG2 : string
  IMG3 : string
  IMG4 : string
  IMG5 : string
}

interface Maps {
  Name : string
  link : string
}
interface Maps_data {
  NAME : string
  NAME2 : string
  Map_IMG : string
  Map_text : string
  Map_IMG2 : string
}