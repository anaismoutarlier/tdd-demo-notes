it("Anaïs égal Anaïs", () => {
    expect("Anaïs").not.toEqual("Anais")
})

test("Object test", () => {
    const data = { one: 1 }

    data.two = 2

    expect(data).toEqual({ one: 1, two: 2 })
})

test("truthy test", () => {
    const shoppingList = [
        "lait",
        "sopalin",
        "pommes",
        "dentifrice"
    ]

    expect(shoppingList.includes("lait")).toBeTruthy()
})

test("find stop in Christoph", () => {
    expect("Christoph").toMatch(/stop/)
})

const getPikachu = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const { name } = await res.json()

    return name
}

test("fonction Pikachu", async () => {
    await expect(getPikachu()).resolves.toBe("pikachu")
})