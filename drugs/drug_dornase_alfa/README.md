<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;Dornase alfa&quot;}]"></div>

# Dornase alfa

- **generic name:** Dornase alfa
- **ATC codes:** `R05CB13`
- **DrugBank:** [DB00003](https://go.drugbank.com/drugs/DB00003) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Dornase alfa is an inhaled mucolytic enzyme used to thin mucus in the airways of people with cystic fibrosis. It is an approved medicine, widely used as a maintenance inhalation treatment in cystic fibrosis care.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:54 | 4:13 | 0/0/0 | 0/1/0 | 0/0/0 | 82,789/1,361 | einfracz / qwen3.8-27b | 7 | 0/5 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.40).">human + animal</span> | [Aksenova_2024_purulent_sputum_of_patients](drugs/drug_dornase_alfa/pd_Aksenova_2024_purulent_sputum_of_patients.md) | purulent sputum of patients biomarker turnover ← dornase_alfa | — | Aksenova MS et al., A Study of the Comparability of the Pha…, Doklady. Biochemistry and b… (2024) | [10.1134/S1607672924701151](https://doi.org/10.1134/S1607672924701151) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amelina_2021 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for dornase alfa in cystic fibrosis patients, reporting lung function outcomes (FEV1, FVC) rather than pharmacokinetic parameters (clearance, volume, half-life). |
| popPK | Baldo_2015 | irrelevant | 0 | 0 | The paper is a review of approved enzyme therapies discussing mechanisms and adverse effects, but it does not contain quantitative pharmacokinetic parameters (CL, V, half-life) for dornase alfa. |
| popPK | Hall_2021 | irrelevant | 0 | 0 | The paper is a review discussing the general challenges of inhaled biologics and does not report any quantitative pharmacokinetic parameters for dornase alfa. |
| PGx | Hardaker_2019 | not_relevant | 0 | 0 | The paper investigates lung function outcomes in CF patients and notes an association with dornase alfa usage, but it does not report any pharmacokinetic or pharmacodynamic changes driven by a specific gene variant or genotype. |
| PGx | Jiang_2026 | not_relevant | 0 | 0 | The study investigates the therapeutic efficacy of dornase alfa in treating heterotopic ossification via extracellular trap clearance, not the impact of human genetic variants on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | The paper is a bioinformatics study on drug repurposing for COVID-19 and does not mention dornase alfa or contain any pharmacokinetic data. |
| PGx | Sheikh_2025 | not_relevant | 2 | 1 | The study reports clinical outcomes of ETI therapy in CF, noting the *discontinuation* of concomitant dornase alfa, but does not report pharmacokinetic or pharmacodynamic parameters of dornase alfa modified by genotype. |
| PGx | Sheikh_2026 | not_relevant | 0 | 0 | The paper focuses on the efficacy of elexacaftor-tezacaftor-ivacaftor, and dornase alfa is only mentioned as an adjunctive therapy whose usage decreased; no pharmacogenomic effect on dornase alfa's PK/PD is reported. |
| PGx | Stamm_2024 | not_relevant | 0 | 0 | The paper describes the engineering of a modified version of dornase alfa (PASylated) using PASylation technology, not a pharmacogenomic study involving human gene variants affecting PK/PD. |
| popPK | Stern_2024 | irrelevant | 0 | 0 | The paper is a tissue engineering study on skin decellularization where dornase alfa (Pulmozyme) is used as a reagent, not as the subject of pharmacokinetic analysis. |
| PGx | unknown_2023 | not_relevant | 0 | 0 | This is a clinical consensus guideline for Cystic Fibrosis and does not report any pharmacogenomic studies or PK/PD parameter data for dornase alfa. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
