<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;heptaminol&quot;}]"></div>

# heptaminol

- **generic name:** heptaminol
- **ATC codes:** `C01DX08`
- **DrugBank:** [DB13574](https://go.drugbank.com/drugs/DB13574) · **PubChem:** none
- **molar mass:** 145.246 g/mol (C8H19NO) — DrugBank
- **groups:** investigational

## About

Heptaminol is a cardiac drug classified as a vasodilator used in cardiac diseases. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417921](https://www.wikidata.org/wiki/Q417921) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 10:12 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 9,159/578 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cociglio_1984.pdf` | Cociglio M et al., Liquid chromatographic assay of heptami…, Journal of chromatography (1984) | popPK | 10 | [10.1016/s0378-4347(00)84106-7](https://doi.org/10.1016/s0378-4347(00)84106-7) | [6736182](https://pubmed.ncbi.nlm.nih.gov/6736182) | The paper reports quantitative pharmacokinetic parameters (half-life, volume, clearance) for heptaminol in dogs with specific numeric values provided in the text. |
| `Kees_1987.pdf` | Kees F et al., [Bioavailability of heptaminol in healt…, Arzneimittel-Forschung (1987) | popPK | 10 |  | [3435592](https://pubmed.ncbi.nlm.nih.gov/3435592) | The text explicitly reports quantitative pharmacokinetic parameters including clearance (700 ml/min), half-life (2.5-2.7 h), and absorption details for heptaminol in humans. |
| `Brodie_1983.pdf` | Brodie RR et al., Determination of heptaminol in human pl…, Journal of chromatography (1983) | popPK | 8 | [10.1016/s0378-4347(00)84421-7](https://doi.org/10.1016/s0378-4347(00)84421-7) | [6874820](https://pubmed.ncbi.nlm.nih.gov/6874820) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2, % excretion) for heptaminol in humans, though full compartmental model parameters (CL, V) are not explicitly listed. |

<sub>queue written 2026-10-06 10:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Derayea_2022 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for quantifying heptaminol in dosage forms and plasma, containing no pharmacodynamic or exposure-response data. |
| PD | Foussard-Blanpin_1975 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| PD | GARRETT_1954 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| PD | GARRETT_1954_2 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Grobecker_1976 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mode of action (sympathetic nerve interaction) and does not report pharmacokinetic parameters. |
| PD | Grobecker_1976 | not_relevant | 3 | 2 | The paper describes qualitative dose-dependent effects and relative potency comparisons (e.g., 100x less potent than tyramine) but does not provide specific numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for heptaminol. |
| PD | Halim_2020 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for quantifying heptaminol in plasma and tablets, containing no pharmacodynamic or exposure-response data. |
| PD | LA_1955 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |
| PD | Loubatieres_1965 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |
| popPK | Morros_1985 | irrelevant | 2 | 0 | The paper describes an analytical method for heptaminol and mentions plasma levels in rats, but no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) are provided in the evidence. |
| PD | Omar_2018 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for quantifying heptaminol in plasma and dosage forms, containing no pharmacodynamic or exposure-response data. |
| popPK | Pourrias_1991 | irrelevant | 0 | 0 | The paper is a review of the mode of action (mechanistic studies in rats and in vitro) and does not report quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Regina_1999 | irrelevant | 0 | 0 | The study focuses on the tolerability of milnacipran, and heptaminol is only mentioned as a treatment for adverse events, with no pharmacokinetic data provided. |
| popPK | Xing_2026 | irrelevant | 0 | 0 | The paper describes a deep-learning platform for drug discovery and does not report pharmacokinetic parameters for heptaminol. |
| PD | Xing_2026 | not_relevant | 0 | 0 | The paper describes a deep-learning platform for drug discovery and does not report any pharmacodynamic or exposure-response data for heptaminol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bheptaminol%5D&body=Drug%3A%20heptaminol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_heptaminol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
