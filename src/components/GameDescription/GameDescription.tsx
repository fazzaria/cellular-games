import { Link } from "@mui/material";
import { RulesetName } from "../../internal";
import { GameDescriptionProps } from "./types";

const GameDescription = ({ rulesetName }: GameDescriptionProps) => {
  switch (rulesetName) {
    case RulesetName.CONWAY:
      return <>The iconic cellular automaton.</>;
    case RulesetName.MAZE_GENERATOR:
      return (
        <>
          An interesting pattern discovered due to a bug while recreating
          Conway's GoL.
        </>
      );
    case RulesetName.POKEMON:
      return (
        <>
          The color of each cell represents one of the 18 Pokémon types. Each
          turn, every cell checks to see if it would beat its neighbors, and
          takes on the type that would have dealt it the most damage if not.
        </>
      );
    case RulesetName.ROCK_PAPER_SCISSORS:
      return (
        <>
          Inspired by{" "}
          <Link href="https://www.youtube.com/watch?v=TvZI6Xc0J1Y">EFrans</Link>
          . If a majority of a cell's neighbors beat it, it takes that color.
        </>
      );
    case RulesetName.SNOWFLAKE:
      return (
        <>
          An aesthetically pleasing pattern discovered while messing around with
          the settings for Conway's Game of Life.
        </>
      );
    case RulesetName.WAR:
      return (
        <>
          Inspired by /u/AlexanderDudarev's{" "}
          <Link href="https://www.reddit.com/r/cellular_automata/comments/1bmicq6/a_simple_cellular_automaton_that_simulates_war/">
            post
          </Link>{" "}
          on Reddit. Each turn, every cell takes a random color from its
          neighbors.
        </>
      );
    case RulesetName.WATER_FLOW:
      return (
        <>
          Based on the idea of water eroding and flowing through rock. Streams
          can occasionally meet with other streams and blend their colors
          together.
        </>
      );
  }
};

export default GameDescription;
