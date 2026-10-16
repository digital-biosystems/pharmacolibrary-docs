<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Efpeglenatide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Efpeglenatide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Efpeglenatide

- **generic name:** Efpeglenatide
- **ATC codes:** not captured
- **DrugBank:** [DB15650](https://go.drugbank.com/drugs/DB15650) · **PubChem:** not captured
- **groups:** investigational

## About

**Description.** Efpeglenatide is under investigation in clinical trial NCT03713684 (Efficacy and Safety of Efpeglenatide Versus Placebo in Patients With Type 2 Diabetes Mellitus Inadequately Controlled With Basal Insulin Alone or in Combination With Oral Antidiabetic Drug(s)).

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB15650">DrugBank DB15650</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:35 | 8:54 | 0/1/1 | 0/0/0 | 0/0/0 | 147,557/17,735 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Min_2025_reference](drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Min JS et al., A Comprehensive Review on the Pharmacok…, Drug design, development an… (2025) | [10.2147/dddt.s506957](https://doi.org/10.2147/dddt.s506957) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.562). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Choi_2025_reference](drugs/drug_efpeglenatide/Efpeglenatide_Choi2025_reference.md) | — | 2-compartment (no model) | 4 | Choi S et al., Population pharmacokinetics of efpeglen…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1715585](https://doi.org/10.3389/fphar.2025.1715585) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=efpeglenatide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-08-26 21:30 UTC</sub>
