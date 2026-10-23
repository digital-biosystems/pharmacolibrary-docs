<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belumosudil&quot;}]"></div>

# belumosudil

- **generic name:** belumosudil
- **ATC codes:** `L04AA48`
- **DrugBank:** [DB16703](https://go.drugbank.com/drugs/DB16703) · **PubChem:** not captured
- **molar mass:** 452.518 g/mol (C26H24N6O2) — DrugBank
- **groups:** approved, investigational

## About

Belumosudil is an immunosuppressive kinase inhibitor used to treat graft-versus-host disease. It is an approved medicine, with one product authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27269397](https://www.wikidata.org/wiki/Q27269397) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:33 | 1:32 | 0/0/0 | 0/0/0 | 0/0/0 | 8,629/308 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schueller_2022.pdf` | Schueller O et al., A Phase 1 Pharmacokinetic Drug Interact…, Clinical pharmacology in dr… (2022) | pgx | 7 | [10.1002/cpdd.1082](https://doi.org/10.1002/cpdd.1082) | [35230741](https://www.ncbi.nlm.nih.gov/pubmed/35230741) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shimoda_2026.pdf` | Shimoda M et al., Variability in belumosudil exposure due…, International journal of cl… (2026) | pgx | 7 | [10.5414/CP205020](https://doi.org/10.5414/CP205020) | [42552808](https://www.ncbi.nlm.nih.gov/pubmed/42552808) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T23:33:13.766697+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Schueller_2022 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions with CYP3A4 modulators and PPIs, but does not report pharmacogenomic effects of specific gene variants or genotypes on PK or PD. |
| PGx | Schueller_2025 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction study of belumosudil; UGT1A1 and OATP1B1 polymorphisms are used solely for participant exclusion to control for variability, not to report genetic effects on belumosudil PK/PD. |
| PGx | Shimoda_2026 | not_relevant | 0 | 0 | The paper describes PK variability due to drug-drug interactions (CYP3A4 inhibition) with antifungals, not pharmacogenomic effects (gene variants). |
| popPK | Subuddhi_2023 | irrelevant | 0 | 0 | The paper is a transcriptomic/mechanistic study of mouse macrophages and does not report any pharmacokinetic parameters for belumosudil. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
