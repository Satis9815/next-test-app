export default function sidebarLayout({children,left,right}){
    const isLeft = true;
    return (
        <main>
            {children}
            {/* {left}
            {right} */}
            {isLeft ? left :right}
        </main>
    )

}