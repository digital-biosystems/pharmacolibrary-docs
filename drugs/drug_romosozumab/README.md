<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;romosozumab&quot;}]"></div>

# romosozumab

- **generic name:** romosozumab
- **ATC codes:** `M05BX06`
- **DrugBank:** [DB11866](https://go.drugbank.com/drugs/DB11866) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Romosozumab is a monoclonal antibody used to treat osteoporosis. It is authorised in the European Union and is an approved medicine, though it is a relatively new bone-disease drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7363297](https://www.wikidata.org/wiki/Q7363297) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:20 | 1:13 | 0/1/0 | 1/0/0 | 0/0/0 | 134,924/7,506 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Eudy_2015_reference](drugs/drug_romosozumab/Romosozumab_Eudy2015_reference.md) | — | 1-compartment (no model) | 0 | Eudy RJ et al., Connecting the Dots: Linking Osteocyte…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.12013](https://doi.org/10.1002/psp4.12013) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Martin_2020_BMD](drugs/drug_romosozumab/pd_Martin_2020_BMD.md) | bone mineral density ← romosozumab · target-mediated drug disposition | — | Martin M et al., Assessment of romosozumab efficacy in t…, Bone (2020) | [10.1016/j.bone.2020.115223](https://doi.org/10.1016/j.bone.2020.115223) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=romosozumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SOST (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adami_2026 | irrelevant | 0 | 0 | The study investigates biomarkers (Dkk1, P1NP) and BMD, not pharmacokinetic parameters (CL, V, T1/2) of romosozumab. |
| popPK | Crack_2024 | irrelevant | 0 | 0 | The study evaluates bone mineral density and strength outcomes (biomarkers/efficacy) of romosozumab, but does not report pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Diz-Lopes_2026 | irrelevant | 0 | 0 | The study reports bone mineral density and microarchitecture outcomes, not pharmacokinetic parameters like clearance or volume for romosozumab. |
| popPK | Keaveny_2017 | irrelevant | 0 | 0 | The paper reports biomechanical outcomes (finite element analysis of bone strength) rather than pharmacokinetic parameters for romosozumab. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | This is a clinical trial protocol focused on bone density and muscle outcomes of romosozumab combined with exercise; it contains no pharmacokinetic parameters (CL, V, ka, etc.) for romosozumab. |
| popPK | Langdahl_2017 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical trial focused on bone mineral density efficacy and safety, with no reported pharmacokinetic parameters for romosozumab. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper reports efficacy outcomes (BMD, BTMs) for osteoporosis treatment, not pharmacokinetic parameters. |
| popPK | Martin_2020 | irrelevant | 5 | 0 | The paper describes a mechanistic PK-PD model but does not provide readable numeric values for PK parameters like CL, V, or ka in the evidence; the numerical parameter lines are garbled. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:19 UTC</sub>
