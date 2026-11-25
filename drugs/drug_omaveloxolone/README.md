<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;omaveloxolone&quot;}]"></div>

# omaveloxolone

- **generic name:** omaveloxolone
- **ATC codes:** `N07XX25`
- **DrugBank:** [DB12513](https://go.drugbank.com/drugs/DB12513) · **PubChem:** [CID 71811910](https://pubchem.ncbi.nlm.nih.gov/compound/71811910)
- **molar mass:** 554.723 g/mol (C33H44F2N2O3) — DrugBank
- **groups:** approved, investigational

## About

Omaveloxolone is a steroid used to treat Friedreich's ataxia. It is given orally as a capsule. It is authorised in the European Union and the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q21098900](https://www.wikidata.org/wiki/Q21098900), [Wikipedia](https://en.wikipedia.org/wiki/Omaveloxolone?oldid=1379393012) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:40 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 4,070/163 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hynes_2024.pdf` | Hynes SM et al., Relative Bioavailability of Omaveloxolo…, Journal of clinical pharmac… (2024) | popPK | 5 | [10.1002/jcph.2482](https://doi.org/10.1002/jcph.2482) | [38837775](https://pubmed.ncbi.nlm.nih.gov/38837775) | The study reports pharmacokinetic parameters (Cmax, AUC, tmax) for omaveloxolone, but the extracted evidence does not contain the specific numeric values, only qualitative comparisons and reference intervals. |

<sub>queue written 2026-11-24 01:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hynes_2024 | irrelevant | 5 | 0 | The study reports pharmacokinetic parameters (Cmax, AUC, tmax) for omaveloxolone, but the extracted evidence does not contain the specific numeric values, only qualitative comparisons and reference intervals. |
| PGx | Hynes_2024 | not_relevant | 0 | 0 | The paper investigates bioequivalence based on administration method, not on pharmacogenomics or genetic variation. |
| popPK | Pepin_2024 | relevant | 8 | 3 | The paper describes a physiologically based biopharmaceutic modeling (PBBM) study of omaveloxolone in humans that derives quantitative PK parameters (e.g., Vmax of CYP3A4, fraction absorbed) to explain food effects, but most specific numeric values are located in supplementary materials or figures not provided in the evidence. |
| PGx | Pepin_2024 | not_relevant | 0 | 0 | The paper investigates the effect of a high-fat meal on omaveloxolone pharmacokinetics using PBBM and does not report any association with genetic variants or genotypes. |
| popPK | Zheng_2024 | irrelevant | 0 | 0 | In vitro/ex vivo anti-echinococcal drug screening; omaveloxolone is a screened compound with no PK disposition parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bomaveloxolone%5D&body=Drug%3A%20omaveloxolone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_omaveloxolone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
