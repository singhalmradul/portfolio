import {
  projectFeatures,
  projectFeaturesTitle,
  projectFeaturesList,
  projectFeatureItem,
  projectFeatureBullet
} from '../projects-section.css';

interface ProjectFeaturesProps {
  features: string[];
}

const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  return (
    <div className={projectFeatures}>
      <h4 className={projectFeaturesTitle}>Key Features:</h4>
      <ul className={projectFeaturesList}>
        {features.map((feature: string, index: number) => (
          <li key={index} className={projectFeatureItem}>
            <span className={projectFeatureBullet}>•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeatures;
