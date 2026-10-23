<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Efpeglenatide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Efpeglenatide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Efpeglenatide

- **generic name:** Efpeglenatide
- **ATC codes:** not captured
- **DrugBank:** [DB15650](https://go.drugbank.com/drugs/DB15650) · **PubChem:** not captured
- **groups:** investigational

## About

**Description.** Efpeglenatide is under investigation in clinical trial NCT03713684 (Efficacy and Safety of Efpeglenatide Versus Placebo in Patients With Type 2 Diabetes Mellitus Inadequately Controlled With Basal Insulin Alone or in Combination With Oral Antidiabetic Drug(s)).

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB15650">DrugBank DB15650</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## Start here

> **Min_2025_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md?tab=Simulation) · [record](drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 9.1 | L/h | 9.1 L/h | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Min_2025_reference](drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md) |
| V | V/F | 28.3 | L | 28.3 L | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Min_2025_reference](drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T6_deviations</sub> | [Min_2025_reference](drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Min JS et al., A Comprehensive Review on the Pharmacok…, Drug design, development an… (2025) | [10.2147/dddt.s506957](https://doi.org/10.2147/dddt.s506957) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Choi_2025_reference](drugs/drug_efpeglenatide/Efpeglenatide_Choi2025_reference.md) | — | 2-compartment (no model) | 4 | Choi S et al., Population pharmacokinetics of efpeglen…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1715585](https://doi.org/10.3389/fphar.2025.1715585) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=efpeglenatide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:35 | 8:54 | 1/1/0 | 0/0/0 | 0/0/0 | 147,557/17,735 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Choi_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis only, with no pharmacodynamic (PD) or exposure-response modeling or numeric PD parameters. |
| popPK | Lam_2022 | irrelevant | 0 | 0 | The paper is a cardiovascular outcome trial analysis focusing on clinical efficacy and safety, not pharmacokinetics, and contains no PK parameters for efpeglenatide. |
| popPK | Min_2025 | irrelevant | 0 | 0 | The paper is a review of other GLP-1 receptor agonists (exenatide, liraglutide, etc.) and does not contain any data or parameters for efpeglenatide. |
| PD | Min_2025 | not_relevant | 1 | 0 | The paper is a review of pharmacokinetics and drug-drug interactions for GLP-1 RAs and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for efpeglenatide. |
| popPK | Yoon_2020 | relevant | 9 | 4 | The paper reports PK parameters for efpeglenatide, but specific numeric values for clearance and volume are in supplementary tables (S2, S4) not provided, while only ranges for t1/2 and tmax are in the text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-08-26 21:30 UTC</sub>
