def make_bricks(small, big, goal):
  r = goal
  r -= 5 * min(big, goal / 5)
  return r - small <= 0