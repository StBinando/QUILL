package com.codeclan.example.quill.components;

import com.codeclan.example.quill.models.User;
import com.codeclan.example.quill.models.UserType;
import com.codeclan.example.quill.repositories.ScriptRepository;
import com.codeclan.example.quill.repositories.Test1Repo;
import com.codeclan.example.quill.repositories.Test2Repo;
import com.codeclan.example.quill.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ScriptRepository scriptDataRepository;

    @Autowired
    Test1Repo test1Repo;

    @Autowired
    Test2Repo test2Repo;

    @Autowired
    UserRepository userRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        User user1 = new User("user", "password", "email@something.com", UserType.AUTHOR);
        userRepository.save(user1);

//        Test1 test1a = new Test1(1);
//        Test1 test1b = new Test1(2);
//        test1Repo.save(test1a);
//        test1Repo.save(test1b);
//        Test2 test2a = new Test2(test1a, "A");
//        Test2 test2b = new Test2(test1a, "B");
//        Test2 test2c = new Test2(test1a, "C");
//        Test2 test2d = new Test2(test1a, "D");
//        Test2 test2e = new Test2(test1b, "E");
//        Test2 test2f = new Test2(test1b, "F");
//        Test2 test2g = new Test2(test1b, "G");
//        Test2 test2h = new Test2(test1b, "H");
//        test2Repo.save(test2a);
//        test2Repo.save(test2b);
//        test2Repo.save(test2c);
//        test2Repo.save(test2d);
//        test2Repo.save(test2e);
//        test2Repo.save(test2f);
//        test2Repo.save(test2g);
//        test2Repo.save(test2h);
//
//
//        ScriptsData lysistrata = new ScriptsData(
//                "Luv",
//                "Murray Schisgal",
//                "Comedy",
//                80,
//                2,
//                1,
//                0,
//                "English",
//                false,
//                "comedy about two men and a woman on a bridge",
//                "love relationships banana");
//        scriptDataRepository.save(lysistrata);
//
//        ScriptsData starspangledgirl = new ScriptsData(
//                "Star spangled girl",
//                "Neil Simon",
//                "Comedy",
//                90,
//                2,
//                1,
//                0,
//                "English",
//                false,
//                "2 guys and a girl in a flats building",
//                "");
//        scriptDataRepository.save(starspangledgirl);
//
//        ScriptsData rhinoceros = new ScriptsData(
//                "Rhinoceros",
//                "Eugene Ionesco",
//                "Absurd",
//                80,
//                4,
//                5,
//                3,
//                "French",
//                false,
//                "Allegoric representation of the dangers of conformism",
//                "");
//        scriptDataRepository.save(rhinoceros);
//
//        ScriptsData godot = new ScriptsData(
//                "Waiting for Godot",
//                "Samuel Beckett",
//                "Absurd",
//                60,
//                4,
//                0,
//                0,
//                "English",
//                false,
//                "2 vagabonds waiting for Godot",
//                "");
//        scriptDataRepository.save(godot);
//
//        ScriptsData dollshouse = new ScriptsData(
//                "A doll's house",
//                "Henrik Ibsen",
//                "Tragedy",
//                80,
//                2,
//                2,
//                0,
//                "English",
//                true,
//                "Drama about woman emancipation",
//                "");
//        scriptDataRepository.save(dollshouse);

    }
}

