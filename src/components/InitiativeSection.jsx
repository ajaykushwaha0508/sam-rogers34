import { useNavigate } from 'react-router-dom';

export default function InitiativeSection() {
  const navigate = useNavigate();

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-on-primary">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase leading-none">
          Why I Started The <br />
          Future Citizen Initiative
        </h2>

        <div className="font-body-lg text-2xl md:text-3xl leading-relaxed font-bold italic opacity-90">
          "What if our students could learn these values much earlier? Instead of waiting for them to become
          professionals... Why not introduce these ideas while they are still in school?"
        </div>

        <p className="font-body-lg text-lg md:text-xl max-w-3xl mx-auto opacity-80">
          Today, I work towards creating awareness about civic responsibility, environmental consciousness, and
          leadership through practical examples. Because tomorrow's India is sitting inside today's classrooms.
        </p>

        <div className="pt-8">
          <button
            type="button"
            onClick={() => navigate('/initiative')}
            className="bg-background text-primary px-12 py-6 font-headline-lg-mobile text-xl uppercase tracking-widest hover:scale-110 transition-transform"
          >
            Learn About The Initiative
          </button>
        </div>
      </div>
    </section>
  );
}
