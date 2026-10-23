<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;sulfaguanidine&quot;}]"></div>

# sulfaguanidine

- **generic name:** sulfaguanidine
- **ATC codes:** `A07AB03`
- **DrugBank:** [DB13726](https://go.drugbank.com/drugs/DB13726) · **PubChem:** none
- **molar mass:** 214.24 g/mol (C7H10N4O2S) — DrugBank
- **groups:** experimental

## About

Sulfaguanidine is a sulfonamide anti-infective that has been used as an intestinal anti-infective agent, for example against diarrhoea. It is now considered an experimental compound and is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414886](https://www.wikidata.org/wiki/Q414886) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-04 18:40 | 3:21 | 0/0/0 | 0/0/0 | 0/0/0 | 129,542/4,304 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/8 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2026.pdf` | Wang J et al., From hapten design to in situ detection…, Food research international… (2026) | pd | 5 | [10.1016/j.foodres.2026.119176](https://doi.org/10.1016/j.foodres.2026.119176) | [42083217](https://www.ncbi.nlm.nih.gov/pubmed/42083217) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04 18:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on urease inhibition by sulfaguanidine conjugates, reporting IC50 values and enzyme kinetics, but contains no pharmacokinetic parameters (CL, V, ka, etc.) for sulfaguanidine. |
| popPK | Ahmad_2023_2 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro enzyme inhibition of naproxen-sulfaguanidine conjugates, containing no pharmacokinetic data for sulfaguanidine. |
| popPK | Alelaimat_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and biological evaluation of sulfaguanidine-triazine hybrids as anticancer agents, containing no pharmacokinetic data. |
| popPK | Allam_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on carbonic anhydrase inhibitors where sulfaguanidine is used as a chemical building block, not as a subject drug for pharmacokinetic analysis. |
| PD | Allam_2023 | not_relevant | 0 | 0 | The paper reports enzyme inhibition constants (Ki) and cellular IC50 values for novel carbonic anhydrase inhibitors, but does not report a pharmacokinetic/pharmacodynamic (PK/PD) exposure-response relationship or dose-response curve for sulfaguanidine itself. |
| popPK | Ayoup_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro biological evaluation of sulfaguanidine derivatives, containing no pharmacokinetic data. |
| PD | Ayoup_2026 | not_relevant | 3 | 3 | The paper reports in vitro IC50 values for enzyme inhibition, which are static potency metrics rather than a pharmacodynamic (exposure-response) or dose-response relationship with derived PD parameters (Emax, slope, etc.) in a biological system. |
| popPK | Bartlett_2013 | irrelevant | 0 | 0 | The study reports toxicological endpoints (LC50, EC50) for sulfaguanidine in an aquatic organism, not pharmacokinetic parameters. |
| popPK | De_2009 | irrelevant | 0 | 0 | The study focuses on the toxicity of sulfamethazine and other sulfonamides to Daphnia magna, not on the pharmacokinetic parameters of sulfaguanidine. |
| popPK | Esam_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study using sulfaguanidine as a component of a nanocatalyst for synthesis, not a pharmacokinetic study of sulfaguanidine. |
| PD | Esam_2023 | not_relevant | 0 | 0 | The paper uses sulfaguanidine as a catalyst for synthesis and reports IC50 values for novel quinoxaline derivatives, not for sulfaguanidine itself. |
| popPK | Husseiny_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel sulfaguanidine-based derivatives for CDK-9 inhibition and cytotoxicity, containing no pharmacokinetic data for the drug sulfaguanidine. |
| popPK | Mizuno_1986 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfaguanidine pharmacokinetics. |
| popPK | Mohamed-Ezzat_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro biological activity (antitumor, antimicrobial, antiviral) of novel triazine sulfonamides derived from sulfaguanidine, containing no pharmacokinetic data. |
| PD | Mohamed-Ezzat_2024 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for antiviral activity and MICs for antimicrobial activity, but does not provide a concentration-effect curve, dose-response relationship, or PK/PD model for sulfaguanidine itself. |
| popPK | Ragab_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro antimicrobial activity of sulfaguanidine hybrids, containing no pharmacokinetic data. |
| popPK | Ulus_2016 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro carbonic anhydrase inhibition of sulfaguanidine derivatives, containing no pharmacokinetic data. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper describes the development of an immunochromatographic sensor strip for detection, not a pharmacodynamic or exposure-response analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfaguanidine%5D&body=Drug%3A%20sulfaguanidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfaguanidine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
