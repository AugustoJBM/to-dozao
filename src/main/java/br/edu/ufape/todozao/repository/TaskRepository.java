package br.edu.ufape.todozao.repository;

import br.edu.ufape.todozao.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    boolean existsByTitleAndUserId(String title, Long userId);

    List<Task> findByUserId(Long userId);
}
