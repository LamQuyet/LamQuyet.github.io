import { Typography } from "@mui/material"
import Section from "./Section"
import { FontSize } from "@/utils"

const Hobby = () => {
    return (
        <Section title="Hobby">
        <Typography fontSize={FontSize(13)} fontWeight={"400"}>
          Listen to music, watch movies, participate in sports activities, group
          exercises.
        </Typography>
      </Section>
    )
}
export default Hobby;