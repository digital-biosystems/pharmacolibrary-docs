<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;isopropamide&quot;}]"></div>

# isopropamide

- **generic name:** isopropamide
- **ATC codes:** `A03AB09`, `A03CA01`
- **DrugBank:** [DB01625](https://go.drugbank.com/drugs/DB01625) · **PubChem:** [CID 3775](https://pubchem.ncbi.nlm.nih.gov/compound/3775)
- **molar mass:** 353.5209 g/mol (C23H33N2O) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

**Description.** Isopropamide iodide is a long-acting quaternary anticholinergic drug. It is used in the treatment of peptic ulcer and other gastrointestinal disorders marked by hyperacidity and hypermotility.

**Indication.** For the treatment of a wide range of gastrointestinal disorders, including such conditions as peptic ulcer, gastritis, hyperchlorhydria, functional diarrhea, irritable or spastic colon, pyloroduodenal irritability, pylorospasm, acute nonspecific gastroenteritis, biliary dyskinesia and chronic cholelithiasis, duodenitis, gastrointestinal spasm; it may also be used to treat genitourinary spasm.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:51 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 16,479/107 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isopropamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM3 (target), CHRM4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbas_2010 | irrelevant | 0 | 0 | The paper describes spectrophotometric analytical methods for quantifying isopropamide in mixtures and does not report any pharmacokinetic parameters. |
| PD | Abbas_2010 | not_relevant | 0 | 0 | The paper describes spectrophotometric analytical methods for quantifying isopropamide and trifluoperazine, containing no pharmacodynamic or exposure-response data. |
| popPK | De_1986 | irrelevant | 0 | 0 | The paper describes an analytical method (HPLC) for determining isopropamide in pharmaceutical formulations and does not report any pharmacokinetic parameters. |
| PD | De_1986 | not_relevant | 0 | 0 | The paper describes a chromatographic method for the analysis of isopropamide iodide in pharmaceutical formulations and contains no pharmacodynamic or exposure-response data. |
| popPK | Grundhofer_1977 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of anticholinergic effects (salivary flow, riboflavin absorption) and does not report quantitative pharmacokinetic parameters for isopropamide. |
| PD | Grundhofer_1977 | not_relevant | 2 | 1 | The study compares qualitative effects of fixed doses in a small group of volunteers and reports that isopropamide had little to no effect, but it does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., EC50, Emax) for isopropamide. |
| popPK | McCarthy_1982 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic trial assessing acid suppression efficacy, not a pharmacokinetic study, and reports no disposition parameters for isopropamide. |
| PD | McCarthy_1982 | not_relevant | 3 | 2 | The paper reports qualitative dose-response comparisons (cimetidine 300 vs 900 mg, combination vs monotherapy) and clinical outcomes, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for isopropamide. |
| popPK | Richardson_1975 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of acid secretion inhibition, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for isopropamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
