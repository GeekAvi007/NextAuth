export default function UserProfilePage({params}: any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mb-5">Profile</h1>
            <hr/>
            <p className="text-4xl"> Page <span className="p-2 rounded bg-orange-500 text-black ml-2">{params.id}</span></p>
        </div>
    )
}