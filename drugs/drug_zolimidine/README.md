<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;zolimidine&quot;}]"></div>

# zolimidine

- **generic name:** zolimidine
- **ATC codes:** `A02BX10`
- **DrugBank:** [DB13593](https://go.drugbank.com/drugs/DB13593) · **PubChem:** not captured
- **molar mass:** 272.32 g/mol (C14H12N2O2S) — DrugBank
- **groups:** experimental

## About

Zolimidine is a drug classified under other drugs for peptic ulcer and gastro-oesophageal reflux disease, suggesting it was intended for acid-related stomach disorders. It is currently listed only as an experimental compound, with no authorisation records, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q8073565](https://www.wikidata.org/wiki/Q8073565) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:20 | 0:47 | 0/0/0 | 0/0/0 | 0/0/0 | 24,890/947 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 21 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schraven_1976.pdf` | Schraven E et al., [The pharmacokinetics of 14C-zolimidine…, Arzneimittel-Forschung (1976) | popPK | 9 | not captured | [947201](https://pubmed.ncbi.nlm.nih.gov/947201) | The study describes a 3-compartment PK model for zolimidine in rats, but specific numeric parameter values (CL, V, ka) are not present in the provided text. |

<sub>queue written 2026-10-04T12:20:14.080186+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abate_1982 | irrelevant | 0 | 0 | The study investigates the mechanism of action (mucopoietic activity and blood flow) rather than pharmacokinetic disposition parameters. |
| popPK | Almirante_1974 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| popPK | Almirante_1974_2 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Belohlavek_1979 | irrelevant | 0 | 0 | no_text gate: only 300 chars of text extracted (&lt; 400) |
| popPK | Bhutia_2020 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study describing the chemical synthesis of zolimidine, not a pharmacokinetic study. |
| popPK | Bombardelli_1983 | irrelevant | 0 | 0 | The study analyzes gastric proteoglycan modifications in rats using gas chromatography and does not report any pharmacokinetic parameters for zolimidine. |
| popPK | Ghosh_2021 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on C-H alkylation of zolimidine, not a pharmacokinetic study. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The paper is an organic chemistry study on the synthesis of imidazo[1,2-a]pyridines from lignin, mentioning zolimidine only as a structural example of a commercial drug, with no pharmacokinetic data. |
| popPK | Kamboj_2024 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on the enzymatic synthesis of imidazo[1,2-a]pyridine derivatives and does not contain any pharmacokinetic data for zolimidine. |
| popPK | Katsura_1991 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no scientific content or pharmacokinetic data for zolimidine. |
| popPK | La_1980 | irrelevant | 0 | 0 | no_text gate: only 369 chars of text extracted (&lt; 400) |
| PD | La_1980 | not_relevant | 0 | 0 | The paper describes a high-performance liquid chromatography method for analyzing zolimidine in dosage forms and contains no pharmacodynamic or exposure-response data. |
| popPK | Ostrowski_1976 | irrelevant | 2 | 0 | The study is a qualitative tissue distribution analysis (autoradiography) in rats and does not report quantitative compartmental PK parameters (CL, V, ka) for zolimidine. |
| popPK | Parodi_1984 | irrelevant | 0 | 0 | The study investigates the effect of zolimidine on gastric mucus secretion (biochemical components) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Prasher_2022 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Rizzi_1975 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| popPK | Schraven_1976 | relevant | 9 | 2 | The study describes a 3-compartment PK model for zolimidine in rats, but specific numeric parameter values (CL, V, ka) are not present in the provided text. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper describes a chemical synthesis method (C-H arylation) for zolimidine derivatives, not a pharmacokinetic study. |
| popPK | Tali_2023 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study describing the synthesis of imidazo[1,2-a]pyridines and functionalization of zolimidine, containing no pharmacokinetic data. |
| popPK | Tyagi_2024 | irrelevant | 0 | 0 | The paper is a review of copper-based pyridine derivatives and synthesis methods, mentioning zolimidine only as a market example without providing any pharmacokinetic data. |
| popPK | Zhou_2018 | irrelevant | 0 | 0 | The paper describes a synthetic chemistry method for fluorinating zolimidine, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
