import BlockLink from "../components/fest/BlockLink"

const index = () => {
  //Landing page, make sure to modify this to your liking
  return (
    <div className="bg-dark w-screen h-screen flex items-center justify-center flex-col gap-20">
      <div>
      <h1 className="text-light text-3xl md:text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary via-variant to-primary bg-clip-text text-transparent animated-gradient font-black">Fest</span> ! 🔮</h1>
        <p className="w-full text-center md:text-xl font-light text-light opacity-20 italic">Add magic to your workflow</p>
      </div>
      <div className="flex align-center justify-center gap-10 flex-col">
        <BlockLink link={'/'} title="How it works ?" desc="Jump into the documentation !"></BlockLink>
        <BlockLink link={'/'} title="Star the repo !" desc="Helps me a lot ;)"></BlockLink>
        <BlockLink link={'/'} title="Who am I ?" desc="If you need to contact me or anything else."></BlockLink>
      </div>
        <p className="text-light text-center text-sm font-light opacity-20 absolute bottom-5">Made with ❤️ by Evan OSMONT</p>
    </div>
  )
}

export default index