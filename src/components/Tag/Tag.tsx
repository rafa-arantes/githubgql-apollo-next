import { Colors } from "@styles/utils";
import { HighlightText } from "@components/styled/Typography";
import { TagBody } from "./styles";

type TagProps = {
  background: Colors;
  children: string;
};

const Tag = ({ background, children }: TagProps) => {
  return (
    <TagBody background={background}>
      <HighlightText fontColor="white" fontSize="small">
        {children}
      </HighlightText>
    </TagBody>
  );
};

export default Tag;
