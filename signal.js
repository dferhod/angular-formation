import { signal, computed, effect } from '@signe/reactive'






let nom = signal('ana')
let age = signal(10)
let isMinor = computed(() => age() < 18)

effect(() => {
    console.log('est mineur', isMinor())
})

age.set(20)