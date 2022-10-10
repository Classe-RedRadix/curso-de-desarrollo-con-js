function repeat(repetable, times) {
    for (let index = 0; index < times;) {
        const randomBool = Math.random() < 0.5
        try {
            if (randomBool) throw new error('Error') 
            repetable(index);
            index ++
        } catch (error) {
            // console.log(`Error index: ${index}`)
        }
    }
  }

repeat(() => console.log("SPAM!!"), 1000);