<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;cascara&quot;}]"></div>

# cascara

- **generic name:** cascara
- **ATC codes:** `A06AB07`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Cascara, the dried bark of a buckthorn tree, is a herbal laxative used to treat constipation. It is classified as a contact laxative for constipation and remains a known herbal medicinal product, though it is not an EU-authorised medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76937206](https://www.wikidata.org/wiki/Q76937206) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-04 15:06 | 0:23 | 0/0/0 | 0/0/0 | 0/0/0 | 16,073/267 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Putri_2026.pdf` | Putri MK et al., Phytochemical Characterization and Comp…, Chemistry & biodiversity (2026) | pd | 4 | [10.1002/cbdv.202503403](https://doi.org/10.1002/cbdv.202503403) | [42281247](https://www.ncbi.nlm.nih.gov/pubmed/42281247) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04 15:06 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Demarque_2018 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity and apoptosis study of cascara compounds, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.). |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study focuses on the therapeutic effects of cascara pectin polysaccharides on fatty liver disease and gut microbiota, not on the pharmacokinetic disposition of the drug cascara. |
| popPK | Mazzari_2022 | irrelevant | 0 | 0 | The study is an in-vitro investigation of herbal plant extracts on CYP3A4, P-gp, and glutathione levels, and does not report pharmacokinetic parameters for cascara. |
| popPK | Putri_2026 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Putri_2026 | not_relevant | 0 | 0 | The paper focuses on phytochemical characterization and metabolomics of coffee, not on pharmacodynamic or exposure-response modeling of cascara. |
| popPK | Sánchez-Martín_2026 | irrelevant | 0 | 0 | The study focuses on in vitro biological activity and receptor-level responses of cascara beverages, containing no pharmacokinetic parameters. |
| PD | Sánchez-Martín_2026 | not_relevant | 2 | 1 | The paper reports qualitative in vitro biological and receptor-level responses for different formulations but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) for the drug or specific bioactive compounds. |
| popPK | de_1990 | irrelevant | 1 | 0 | The paper is a review of the general metabolism of anthranoid laxatives and mentions cascara only as an example of an anthrone C-glycoside, without providing any specific quantitative pharmacokinetic parameters (CL, V, ka, etc.) for cascara. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcascara%5D&body=Drug%3A%20cascara%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cascara/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
