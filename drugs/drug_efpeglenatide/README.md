<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Efpeglenatide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Efpeglenatide_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Efpeglenatide_Choi2025_reference&quot;,&quot;label&quot;:&quot;Choi_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_efpeglenatide/Efpeglenatide_Choi2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# Efpeglenatide

- **generic name:** Efpeglenatide
- **ATC codes:** not captured
- **DrugBank:** [DB15650](https://go.drugbank.com/drugs/DB15650)
- **groups:** investigational

## About

**Description.** Efpeglenatide is under investigation in clinical trial NCT03713684 (Efficacy and Safety of Efpeglenatide Versus Placebo in Patients With Type 2 Diabetes Mellitus Inadequately Controlled With Basal Insulin Alone or in Combination With Oral Antidiabetic Drug(s)).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:35 | 8:54 | 1/1/0 | 0/0/0 | 0/0/0 | 147,557/17,735 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Min_2025_reference](drugs/drug_efpeglenatide/Efpeglenatide_Min2025_reference.md) | Min JS et al., A Comprehensive Review on the Pharmacok…, Drug design, development an… (2025) | [10.2147/dddt.s506957](https://doi.org/10.2147/dddt.s506957) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Choi_2025_reference](drugs/drug_efpeglenatide/Efpeglenatide_Choi2025_reference.md) | Choi S et al., Population pharmacokinetics of efpeglen…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1715585](https://doi.org/10.3389/fphar.2025.1715585) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=efpeglenatide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
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
