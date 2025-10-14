class Trip {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isFamilyFriendly,
    isGoodForCouples,
    isSoloTravelerFriendly,
    isWheelchairAccessible
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isFamilyFriendly = isFamilyFriendly;
    this.isGoodForCouples = isGoodForCouples;
    this.isSoloTravelerFriendly = isSoloTravelerFriendly;
    this.isWheelchairAccessible = isWheelchairAccessible;
  }
}

export default Trip;
