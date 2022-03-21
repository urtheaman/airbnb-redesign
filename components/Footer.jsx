import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto grid p-10 grid-cols-1  sm:grid-cols-2 md:grid-cols-4 sm:justify-items-center">
      <div className="my-4 sm:w-20">
        <h5 className="text-sm uppercase mb-2 font-semibold">About</h5>
        <div className="capitalize text-xs flex flex-col space-y-3">
          <Link href="#">How Airbnb works</Link>
          <Link href="#">Newsroom</Link>
          <Link href="#">Investors</Link>
          <Link href="#">Airbnb Plus</Link>
          <Link href="#">Airbnb Luxe</Link>
        </div>
      </div>

      <div className="my-4 sm:w-20">
        <h5 className="text-sm uppercase mb-2 font-semibold">Community</h5>
        <div className="capitalize text-xs flex flex-col space-y-3">
          <Link href="#">Accessibility</Link>
          <Link href="#">RSS feed</Link>
          <Link href="#">Refferals</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Find Now</Link>
        </div>
      </div>

      <div className="my-4 sm:w-20">
        <h5 className="text-sm uppercase mb-2 font-semibold">Host</h5>
        <div className="capitalize text-xs flex flex-col space-y-3">
          <Link href="#">Presets</Link>
          <Link href="#">TnC Policies</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Authentication Policy</Link>
          <Link href="#">Secure Payment</Link>
        </div>
      </div>

      <div className="my-4 sm:w-20">
        <h5 className="text-sm uppercase mb-2 font-semibold">Support</h5>
        <div className="capitalize text-xs flex flex-col space-y-3">
          <Link href="#">Help center</Link>
          <Link href="#">Trust & safety</Link>
          <Link href="#">Email support</Link>
          <Link href="#">Call Now</Link>
          <Link href="#">FAQS</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
