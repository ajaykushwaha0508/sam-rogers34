import LessonPublicProperty from './cards/LessonPublicProperty';
import LessonRulesAsHabit from './cards/LessonRulesAsHabit';
import LessonSmallActions from './cards/LessonSmallActions';
import LessonBrandAmbassadors from './cards/LessonBrandAmbassadors';
import LessonLifelongLearning from './cards/LessonLifelongLearning';

/** The asymmetric 12-column bento grid holding all five lesson cards. */
export default function LessonsGrid() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <LessonPublicProperty />
        <LessonRulesAsHabit />
        <LessonSmallActions />
        <LessonBrandAmbassadors />
        <LessonLifelongLearning />
      </div>
    </section>
  );
}
