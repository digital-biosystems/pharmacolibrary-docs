<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;phenibut&quot;}]"></div>

# phenibut

- **generic name:** phenibut
- **ATC codes:** `N06BX22`
- **DrugBank:** [DB13455](https://go.drugbank.com/drugs/DB13455) · **PubChem:** not captured
- **molar mass:** 179.219 g/mol (C10H13NO2) — DrugBank
- **groups:** experimental

## About

Phenibut is a GABA agonist and nootropic that has been used for sleep disorders, anxiety, and cognitive problems. It is not an approved medicine in the European Union and is considered experimental, though it is used in some countries as a sedative and tranquilizer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419559](https://www.wikidata.org/wiki/Q419559) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:03 | 0:36 | 0/0/0 | 1/0/0 | 0/0/0 | 6,308/655 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Irie_2020_outward_current_density_evoked_by_GABAB_agonists_in_cerebellar_Purkinje_cells](drugs/drug_phenibut/pd_Irie_2020_outward_current_density_evoked_by_GABAB_agonists_i.md) | outward current density evoked by GABAB agonists in cerebellar Purkinje cells ← phenibut · direct sigmoid Emax (Hill) effect | — | Irie T et al., F-phenibut (β-(4-Fluorophenyl)-GABA), a…, European journal of pharmac… (2020) | [10.1016/j.ejphar.2020.173437](https://doi.org/10.1016/j.ejphar.2020.173437) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Butler_2025 | irrelevant | 0 | 0 | Case report of withdrawal management; phenibut only mentioned as a co-used substance with no PK parameters. |
| popPK | Irie_2020 | irrelevant | 0 | 0 | In vitro electrophysiology study of GABAB agonist potency (EC50) in mouse brain slices; no pharmacokinetic disposition parameters for phenibut. |
| popPK | Skoromnyĭ_1991 | irrelevant | 0 | 0 | This is a cerebral hemodynamics/pharmacodynamics study in rabbits with no PK disposition parameters for phenibut. |
| popPK | Zhezlova_2011 | irrelevant | 3 | 1 | Bioequivalence study of phenibut/anvifen but no numeric PK parameter values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
