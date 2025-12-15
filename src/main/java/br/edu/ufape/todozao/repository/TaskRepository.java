package br.edu.ufape.todozao.repository;

import br.edu.ufape.todozao.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
