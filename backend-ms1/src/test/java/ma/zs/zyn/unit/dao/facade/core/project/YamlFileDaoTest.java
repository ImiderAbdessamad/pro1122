package ma.zs.zyn.unit.dao.facade.core.project;

import ma.zs.zyn.bean.core.project.YamlFile;
import ma.zs.zyn.dao.facade.core.project.YamlFileDao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.BeforeEach;

import java.math.BigDecimal;
import java.util.List;

import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.IntStream;
import java.time.LocalDateTime;

import ma.zs.zyn.bean.core.project.Project ;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class YamlFileDaoTest {

@Autowired
    private YamlFileDao underTest;

    @BeforeEach
    void setUp() {
        underTest.deleteAll();
    }


    @Test
    void shouldFindById(){
        Long id = 1L;
        YamlFile entity = new YamlFile();
        entity.setId(id);
        underTest.save(entity);
        YamlFile loaded = underTest.findById(id).orElse(null);
        assertThat(loaded.getId()).isEqualTo(id);
    }

    @Test
    void shoulDeleteById() {
        Long id = 1L;
        YamlFile entity = new YamlFile();
        entity.setId(id);
        underTest.save(entity);

        underTest.deleteById(id);

        YamlFile loaded = underTest.findById(id).orElse(null);
        assertThat(loaded).isNull();
    }


    @Test
    void shouldFindAll() {
        // Given
        List<YamlFile> items = IntStream.rangeClosed(1, 10).mapToObj(i->constructSample(i)).collect(Collectors.toList());

        // Init
        items.forEach(underTest::save);

        // When
        List<YamlFile> loadedItems = underTest.findAll();

        // Then
        assertThat(loadedItems).isNotNull();
        assertThat(loadedItems.size()).isEqualTo(10);
    }

    @Test
    void shouldSave(){
        YamlFile given = constructSample(1);
        YamlFile saved = underTest.save(given);
        assertThat(saved.getId()).isNotNull();
    }

    private YamlFile constructSample(int i) {
		YamlFile given = new YamlFile();
        given.setTitle("title-"+i);
        given.setContent("content-"+i);
        given.setProject(new Project(1L));
        return given;
    }

}
