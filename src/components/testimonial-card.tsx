interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

const TestimonialCard = ({
  name,
  role,
  image,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="bg-secondary flex h-[520px] w-[350px] shrink-0 flex-col space-y-4 rounded-lg p-10 sm:w-[510px]">
      <p className="flex-1 text-xl text-white">{testimonial}</p>

      <div className="flex flex-col space-y-2">
        <img src={image} className="h-[72px] w-[72px] rounded-full" />
        <p className="text-[22px] font-semibold text-white">{name}</p>
        <p className="text-base text-white">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
