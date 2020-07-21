export class DocumentNode {}

// const tree = OneOf([Word('Every'), Word('Each')])
// _
// OneOf([
//   OneOf([Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday]),

//   Sequence([
//     OneOf([second/minute/hour/day/month/year]),
//     Optional(Sequence[
//       _at_,
//       OneOf([
//         Greedy([<number:1-60> seconds, <number:1-60> minutes, <number:0-23> hours]),
//         <number> Optional(:<number>) Optional(OneOf(am/pm))
//       ])
//     ])
//   ])

//   Sequence([
//     <number>_,
//     OneOf([seconds/minutes/hours/days/weeks/months/years]),
//     Optional(
//       _at_,
//       OneOf([
//         Greedy([<number>_seconds_, <number>_minutes, <number>_hours_]),
//         <number> Optional(:<number>) Optional(OneOf(am/pm))
//       ])
//     )
//     ])

// ])

const tree =

// Every day at 13 hours, 20 seconds

// [ //sequence
//   [Every, _], //sequence
//   [day, //sequence
//     [
//       [_, at, _], 
//       [
//         [13, _, hours],
//         [20, _, seconds]
//       ]
//     ]
//   ]
// ]