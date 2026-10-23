<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;glafenine&quot;}]"></div>

# glafenine

- **generic name:** glafenine
- **ATC codes:** `N02BG03`
- **DrugBank:** [DB08963](https://go.drugbank.com/drugs/DB08963) · **PubChem:** none
- **molar mass:** 372.802 g/mol (C19H17ClN2O4) — DrugBank
- **groups:** approved, withdrawn

## About

Glafenine is a non-opioid analgesic and antipyretic that was used to relieve pain and fever. It has been withdrawn from the market, reportedly because of safety concerns, and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5566483](https://www.wikidata.org/wiki/Q5566483) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 06:15 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 21,922/648 | einfracz / qwen3.8-27b | 3 | 2/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ennachachibi_1988.pdf` | Ennachachibi A et al., Effective high-performance liquid chrom…, Journal of chromatography (1988) | popPK | 10 | [10.1016/0378-4347(88)80133-6](https://doi.org/10.1016/0378-4347(88)80133-6) | [2900842](https://pubmed.ncbi.nlm.nih.gov/2900842) | The paper describes a pharmacokinetic application of the method for glafenine, implying a PK study is included, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence excerpt. |
| `Vermerie_1992.pdf` | Vermerie N et al., Pharmacokinetics of glafenine and glafe…, Fundamental & clinical phar… (1992) | popPK | 10 | [10.1111/j.1472-8206.1992.tb00112.x](https://doi.org/10.1111/j.1472-8206.1992.tb00112.x) | [1358775](https://pubmed.ncbi.nlm.nih.gov/1358775) | The study reports quantitative pharmacokinetic parameters (half-life, Tmax, Cmax, AUC ratios) for glafenine and its metabolite in human subjects. |
| `Hu_2024.pdf` | Hu XM et al., Prediction of cytochrome P450-mediated…, Archives of toxicology (2024) | pd | 5 | [10.1007/s00204-024-03701-w](https://doi.org/10.1007/s00204-024-03701-w) | [38492097](https://www.ncbi.nlm.nih.gov/pubmed/38492097) | metadata signals extractable PD data (IC50) |
| `Chiu_2015.pdf` | Chiu AM et al., High Throughput Assay Identifies Glafen…, Investigative ophthalmology… (2015) | pd | 4 | [10.1167/iovs.15-17802](https://doi.org/10.1167/iovs.15-17802) | [26641551](https://www.ncbi.nlm.nih.gov/pubmed/26641551) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 06:15 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brogden_1986 | irrelevant | 0 | 0 | This is a general review of NSAIDs that mentions glafenine only in a single sentence grouping it with fenamates without providing any specific quantitative PK parameters for it. |
| popPK | Cheung_2015 | irrelevant | 0 | 0 | The study focuses on identifying MRP4 inhibitors using in vitro screens and does not report any pharmacokinetic parameters for glafenine. |
| popPK | Chiu_2015 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Collier_1968 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of bradykinin-induced bronchoconstriction in guinea pigs and does not report any pharmacokinetic parameters for glafenine. |
| PD | Collier_1968 | not_relevant | 3 | 2 | The paper reports a qualitative potency ranking and mentions dose-response curves for fenamates, but does not provide specific numeric PD parameters (e.g., EC50, Emax) for glafenine. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | The paper is a trial protocol for evaluating experimental treatments for COVID-19 and does not report any pharmacogenomic effects on the PK or PD of glafenine. |
| popPK | Ennachachibi_1988 | relevant | 10 | 0 | The paper describes a pharmacokinetic application of the method for glafenine, implying a PK study is included, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence excerpt. |
| popPK | Hu_2024 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Hu_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning models for predicting CYP-mediated bioactivation and does not report pharmacodynamic or exposure-response relationships for glafenine. |
| popPK | Mallein_1966 | irrelevant | 0 | 0 | The paper studies glycerylaminophenaquine, not glafenine. |
| PGx | Selver_2011 | not_relevant | 0 | 0 | The paper does not investigate a gene variant/genotype/phenotype affecting glafenine PK/PD, but instead uses glafenine as an ABCG2 inhibitor in cell culture experiments. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper studies the effect of statins on COVID-19 survival and does not involve the drug glafenine or any pharmacokinetic parameters. |
| PD | Sperry_2023 | not_relevant | 0 | 0 | The paper focuses on statins (simvastatin, atorvastatin, etc.) and does not mention or analyze glafenine. |
| PGx | Wen_2011 | not_relevant | 0 | 0 | The paper describes the metabolic pathways and bioactivation of glafenine using recombinant enzymes and microsomes, but it does not report the effect of human genetic variants (pharmacogenomics) on PK or PD parameters in patients. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper reports that glafenine is an inhibitor of the ABCG2 transporter but does not report how a patient's genetic variant affects the pharmacokinetics or pharmacodynamics of glafenine. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 300 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for glafenine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglafenine%5D&body=Drug%3A%20glafenine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glafenine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
