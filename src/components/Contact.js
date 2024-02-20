const Contact = () =>{

    return (
        <div>

   <h3 className="contact flex flex-col items-center gap-4">
    Name<input className="bg-zinc-300 w-[180px]" type="text" class="mytext"></input>
    Address<input className="bg-zinc-300 w-[180px]" type="text" class="mytext"></input>
    City<input className="bg-zinc-300 w-[180px]" type="text" class="mytext"></input>
    Issue<textarea className="bg-zinc-300 w-[180px]" class="mytext"></textarea>
    Order ID<input className="bg-zinc-300 w-[180px]" type="text" class="mytext"></input>
    <button className="m-2 bg-zinc-400 rounded-md hover:bg-zinc-50">Submit</button>
    </h3>

        </div>
    )
}

export default Contact