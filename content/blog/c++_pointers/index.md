---
title: Handling invalid Unreal Engine 4 C++ pointers
date: "2019-04-21T16-00"
description: In this article I will briefly explain approaches to check if a pointer is valid and why it is important.
---

Imagine the following situation in Unreal Engine 4 gameplay code:
```cpp
APlayer::OnAttacked()
{
    USoundSystem* SoundSystem = GameInstance->GetSoundSystem();
    if (IsValid(SoundSystem))
    {
        SoundSystem->PlaySoundCue(OnAttackedSoundCue);
    }
}
```


**SoundSystem** can be invalid but what does that mean? Is is OK situation to just use IsValid() and do nothing otherwise? This issue is more interesting that it seems.

Good question to start with is if **SoundSystem** is not valid in OnAttacked() context then maybe we should tell someone about it? To do that one can use multiple methods: return values, delegates calling, writing some error message to log... but wait! **SoundSystem** is not valid! 

When a game system is not valid then what do we have to do? Well, let's get an instance of that system because it should be created already, right? 
```cpp
APlayer::OnAttacked()
{
    USoundSystem* SoundSystem = nullptr;
    if (!IsValid(SoundSystem))
    {
        SoundSystem = GameInstance->GetSoundSystem();
    }

    SoundSystem->PlaySoundCue(OnAttackedSoundCue);
}
```
But should we use IsValid() again just to be sure SoundSystem we've got is valid? It seems like we are going to have a infinite loop here.

Another way to fix this problem is to put SoundSystem initialization into APlayer method that can guarantee SoundSystem is initialized:
```cpp

class USoundSystem;

class APlayer : AActor
{
    ...
private:
    UPROPERTY()
    USoundSystem* SoundSystem;
};

APlayer::APlayer()
{
    SoundSystem = nullptr;
}

APlayer::PostSoundSystemInitialize()
{
    SoundSystem = GameInstance->GetSoundSystem();
}

APlayer::OnAttacked()
{
    if (IsValid(SoundSystem))
    {
        SoundSystem->PlaySoundCue(OnAttackedSoundCue);
    }
}
```

Notice that we fixed our issue with checking SoundSystem pointer in OnAttacked() method but still don't know what to do if it is somehow invalid.

Additional question is what if we don't want to store SoundSystem pointer in APlayer? Imagine one has AEnemy, AEnemyTank, AEnemyTower instead of only APlayer and all those classes have to have ability to play sound cue.

Solution is to divide pointer checks into "soft" and "hard" ones. Soft check is when program can continue execution process. Hard one is when we tell program to stop the execution.

In our case we need "hard" check of SoundSystem pointer because otherwise that means something is totally wrong with game systems initialization process.

How to do "hard" checks in Unreal Engine 4 C++? There are many ways according to official [documentation](https://www.google.comhttps://docs.unrealengine.com/en-us/Programming):
```
* check
* checkf
* verify
* verifyf
* checkSlow
* checkfSlow
* verifySlow
```

Any of above macroses will halt the execution of the program and that is exactly what we need! 

Result:
```cpp
APlayer::OnAttacked()
{
    USoundSystem* SoundSystem = GameInstance->GetSoundSystem();
    check(SoundSystem); // or check(IsValid(SoundSystem))

    SoundSystem->PlaySoundCue(OnAttackedSoundCue);
}
```

Happy reading!