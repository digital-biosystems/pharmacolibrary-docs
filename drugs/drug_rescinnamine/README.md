<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;rescinnamine&quot;}]"></div>

# rescinnamine

- **generic name:** rescinnamine
- **ATC codes:** `C02AA01`, `C02LA02`, `C02LA52`
- **DrugBank:** [DB01180](https://go.drugbank.com/drugs/DB01180) · **PubChem:** [CID 32681](https://pubchem.ncbi.nlm.nih.gov/compound/32681)
- **molar mass:** 634.716 g/mol (C35H42N2O9) — DrugBank
- **groups:** approved

## About

Rescinnamine is a Rauwolfia alkaloid used to treat high blood pressure, alone or combined with a diuretic. It is an approved antihypertensive, though Rauwolfia alkaloids are now only rarely used in practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409978](https://www.wikidata.org/wiki/Q409978) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rescinnamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:42 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 21,215/127 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fadaeinasab_2015.pdf` | Fadaeinasab M et al., New Indole Alkaloids from the Bark of R…, Cellular physiology and bio… (2015) | pd | 4 | [10.1159/000438560](https://doi.org/10.1159/000438560) | [26584298](https://www.ncbi.nlm.nih.gov/pubmed/26584298) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06 12:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fadaeinasab_2015 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Fadaeinasab_2015 | not_relevant | 0 | 0 | The paper reports the isolation of new indole alkaloids and their cholinesterase inhibitory activity, but does not mention rescinnamine or provide any pharmacodynamic or exposure-response data for it. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is an in-silico drug repurposing study for COVID-19 and does not contain any pharmacokinetic data for rescinnamine. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | The paper is a computational network-based drug repurposing study that does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for rescinnamine or any other drug. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on banana sap bioactivity where rescinnamine is only identified as a compound present, with no pharmacokinetic parameters reported. |
| PD | Gupta_2022 | not_relevant | 2 | 1 | The paper reports in vitro bioactivity (MIC, IC50, cytotoxicity %) for banana sap extracts containing rescinnamine, but does not provide a dose-response curve or specific PD parameters for rescinnamine itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brescinnamine%5D&body=Drug%3A%20rescinnamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rescinnamine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
