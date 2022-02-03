package com.codeclan.example.quill.repositories;

import com.codeclan.example.quill.models.Script;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ScriptRepository extends JpaRepository<Script, Long> {

// ====================================================
// ======       INDIVIDUAL TEST QUERIES         =======
// ====================================================

// ****************      TITLE     ****************
    @Transactional
    @Query(value = "SELECT * FROM SCRIPTS WHERE TITLE LIKE %?1%", nativeQuery = true)
    List<Script> getByTitle (String title);

    @Transactional
    @Query(value = "SELECT * FROM SCRIPTS WHERE PROFILE_ID = ?1", nativeQuery = true)
    List<Script> getByProfileId(Long Id);


// ****************      MALES     ****************
    @Transactional
    @Query(value = "SELECT * FROM SCRIPTS WHERE" +
            "(?1 LIKE '%' AND ?2 = -1)" +
            "OR (?1 = 'eq' AND M = ?2)" +
            "OR (?1 = 'gt' AND M > ?2)" +
            "OR (?1 = 'lt' AND M < ?2)", nativeQuery = true)
    List<Script> getByM (String mop, int m);

// ****************       CAST      ****************
    @Transactional
    @Query(value = "SELECT * FROM SCRIPTS WHERE" +
            "((?1 LIKE '%' AND ?2 = -1)" +
            "OR (?1 = 'gt' AND (M + F + N) >= ?2)" +
            "OR (?1 = 'lt' AND (M + F + N) <= ?2))", nativeQuery = true)
    List<Script> getByCast (String cop, int cast);

// ****************   ROYALTY FREE   ****************
    @Transactional
    @Query(value = "SELECT * FROM SCRIPTS WHERE ((ROYALTYFREE = ?1) OR ?1 = false))", nativeQuery = true)
    List<Script> getByRF (boolean rf);

// ****************      ONE TAG     ****************
    @Transactional
    @Query(value = "SELECT * FROM SCRIPTS WHERE TAGS LIKE %?1%",
            nativeQuery = true)
    List<Script> getByTag (String tag);





// ====================================================
// ======           FINAL BIG QUERY             =======
// ====================================================

    @Transactional
    @Query(value = "SELECT * FROM SCRIPTS WHERE" +
// ****************      TITLE     **************** ?1
            "(TITLE LIKE %?1%)" +
// ****************     AUTHOR     **************** ?2
            "AND (AUTHORNAME LIKE %?2%)" +
// ****************      GENRE     **************** ?3
            "AND (GENRE LIKE %?3%)" +
// ****************     LENGTH     **************** ?4 ?5
            "AND ((?4 LIKE '%' AND ?5 = -1)" +
            "OR (?4 = 'gte' AND LENGTH >= ?5)" +
            "OR (?4 = 'lte' AND LENGTH <= ?5))" +
// ****************      MALES     **************** ?6 ?7
            "AND ((?6 LIKE '%' AND ?7 = -1)" +
            "OR (?6 = 'eq' AND M = ?7)" +
            "OR (?6 = 'gt' AND M > ?7)" +
            "OR (?6 = 'lt' AND M < ?7))" +
// ****************     FEMALES    **************** ?8 ?9
            "AND ((?8 LIKE '%' AND ?9 = -1)" +
            "OR (?8 = 'eq' AND F = ?9)" +
            "OR (?8 = 'gt' AND F > ?9)" +
            "OR (?8 = 'lt' AND F < ?9))" +
// ****************    NEUTRALS    **************** ?10 ?11
            "AND ((?10 LIKE '%' AND ?11 = -1)" +
            "OR (?10 = 'eq' AND F = ?11)" +
            "OR (?10 = 'gt' AND F > ?11)" +
            "OR (?10 = 'lt' AND F < ?11))" +
// ****************   TOTAL CAST   **************** ?12 ?13
            "AND ((?12 LIKE '%' AND ?13 = -1)" +
            "OR (?12 = 'gte' AND (M + F + N) >= ?13)" +
            "OR (?12 = 'lte' AND (M + F + N) <= ?13))" +
// ****************    LANGUAGE    **************** ?14
            "AND (LANGUAGE LIKE %?14%)" +
// ****************  ROYALTY FREE  **************** ?15
            "AND ((ROYALTYFREE = ?15) OR ?15 = false)" +
// ****************      TAGS      **************** ?16
            "AND (TAGS LIKE %?16%)"

            , nativeQuery = true)
    List<Script> getResults (
            String title,
            String authorname,
            String genre,
            String lop, int length,     // operator - value
            String mop, int m,          // operator - value
            String fop, int f,          // operator - value
            String nop, int n,          // operator - value
            String cop, int cast,       // operator - value
            String language,
            Boolean royaltyfree,
            String tag);

//    @Transactional
//    List<Script> findByAuthorId(Long id);
}
