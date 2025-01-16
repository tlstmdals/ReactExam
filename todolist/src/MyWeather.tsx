import React from "react";

 interface MyProps {
    weather: string;
    children: React.ReactNode; //컴포넌트의 자식 요소
 }
//                                         //아래는 props를 바로로구조분해 할당한것
// const MyWeather : React.FC<MyProps> = (children, weather)/*매개변수와 같은 역할*/ => {
//     //const {children, weather} = props;  객체의 구조분해 할당당
//     return(
//         <div>
//             {children}<p></p>
//             오늘의 날시는 {weather} 입니다.
//         </div>
//     )
// }
class MyWeather extends React.Component<MyProps> {
    render() {
        const {children, weather} = this.props;
        return(
            <div>
                {children}<p></p>
                오늘의 날시는 {weather} 입니다.
            </div>
        )
    }
}
export default MyWeather;
