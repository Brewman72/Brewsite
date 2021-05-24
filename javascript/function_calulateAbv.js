function calculateAbv(og, fg) {
    abv = (og - fg)*131.125;
    return abv;
}
calculateAbv(1.071, 1.02);