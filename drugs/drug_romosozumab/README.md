<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;romosozumab&quot;}]"></div>

# romosozumab

- **generic name:** romosozumab
- **ATC codes:** `M05BX06`
- **DrugBank:** [DB11866](https://go.drugbank.com/drugs/DB11866) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Romosozumab is a monoclonal antibody used to treat osteoporosis. It is authorised in the European Union and is an approved medicine, though it is a relatively new bone-disease drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7363297](https://www.wikidata.org/wiki/Q7363297) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Eudy_2015_reference](drugs/drug_romosozumab/Romosozumab_Eudy2015_reference.md) | — | 1-compartment (no model) | 0 | Eudy RJ et al., Connecting the Dots: Linking Osteocyte…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.12013](https://doi.org/10.1002/psp4.12013) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Martin_2020_BMD](drugs/drug_romosozumab/pd_Martin_2020_BMD.md) | bone mineral density ← romosozumab · target-mediated drug disposition | — | Martin M et al., Assessment of romosozumab efficacy in t…, Bone (2020) | [10.1016/j.bone.2020.115223](https://doi.org/10.1016/j.bone.2020.115223) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=romosozumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SOST (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:20 | 1:13 | 0/1/0 | 1/0/0 | 0/0/0 | 134,924/7,506 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:19 UTC</sub>
