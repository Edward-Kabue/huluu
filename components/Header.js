import Image from "next/image";

function Header() {
  return (
    <header className="">
      <h1>This is the header</h1>
      <Image
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={200}
        height={200}
      />
    </header>
  );
}

export default Header;
