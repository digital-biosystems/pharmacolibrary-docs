<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01A&quot;,&quot;href&quot;:&quot;atc/S01A.md&quot;},{&quot;label&quot;:&quot;besifloxacin&quot;}]"></div>

# besifloxacin

- **generic name:** besifloxacin
- **ATC codes:** `S01AE08`
- **DrugBank:** [DB06771](https://go.drugbank.com/drugs/DB06771) · **PubChem:** [CID 10178705](https://pubchem.ncbi.nlm.nih.gov/compound/10178705)
- **molar mass:** 393.84 g/mol (C19H21ClFN3O3) — DrugBank
- **groups:** approved

## About

Besifloxacin is a fluoroquinolone antibiotic used as an eye drop to treat bacterial eye infections. It is approved and used as an ophthalmological medicine, mainly in eye care settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3638978](https://www.wikidata.org/wiki/Q3638978) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=besifloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:20 | 2:50 | 0/0/0 | 0/0/0 | 0/0/0 | 69,673/1,804 | einfracz / qwen3.8-27b | 6 | 0/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 22 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gu_2016.pdf` | Gu XF et al., Rapid, sensitive and selective HPLC-MS/…, Journal of pharmaceutical a… (2016) | popPK | 10 | [10.1016/j.jpba.2015.08.023](https://doi.org/10.1016/j.jpba.2015.08.023) | [26340560](https://pubmed.ncbi.nlm.nih.gov/26340560) | The paper is a pharmacokinetic study of besifloxacin in rabbits, but the specific quantitative parameter values (CL, V, etc.) are not provided in the text, as the text focuses on the HPLC-MS/MS method validation. |
| `Kuang_2021.pdf` | Kuang L et al., A novel, sensitive, and widely accessib…, Journal of chromatography.… (2021) | popPK | 10 | [10.1016/j.jchromb.2021.123010](https://doi.org/10.1016/j.jchromb.2021.123010) | [34731742](https://pubmed.ncbi.nlm.nih.gov/34731742) | The paper reports quantitative PK parameters (Cmax, AUC, t1/2) for besifloxacin in a dose-intense ocular study. |
| `Proksch_2009.pdf` | Proksch JW et al., Ocular pharmacokinetics of besifloxacin…, Journal of ocular pharmacol… (2009) | popPK | 8 | [10.1089/jop.2008.0116](https://doi.org/10.1089/jop.2008.0116) | [19492955](https://pubmed.ncbi.nlm.nih.gov/19492955) | The study reports PK parameters (Cmax, AUC, half-life) for besifloxacin, but detailed compartmental clearance/volume values are not explicitly provided in the text evidence. |
| `Proksch_2010.pdf` | Proksch JW et al., Ocular pharmacokinetics/pharmacodynamic…, Journal of ocular pharmacol… (2010) | popPK | 8 | [10.1089/jop.2010.0054](https://doi.org/10.1089/jop.2010.0054) | [20874668](https://pubmed.ncbi.nlm.nih.gov/20874668) | The study reports ocular PK/PD parameters (AUC/MIC ratios, Cmax, Tmax) for besifloxacin in rabbits, but specific numeric values for Cmax and AUC are mostly described qualitatively or as ratios, with detailed PK table data likely in figures not fully provided here. |
| `Glogowski_2012.pdf` | Glogowski S et al., The use of the African green monkey as…, Journal of ocular pharmacol… (2012) | popPK | 6 | [10.1089/jop.2011.0164](https://doi.org/10.1089/jop.2011.0164) | [22235843](https://pubmed.ncbi.nlm.nih.gov/22235843) | The paper describes a preclinical PK study in monkeys with qualitative comparisons of concentrations, but the specific quantitative parameters (like CL, V, ka) are not numerically reported in the provided text. |
| `Silverstein_2011.pdf` | Silverstein BE et al., Efficacy and tolerability of besifloxac…, Clinical therapeutics (2011) | pd | 5 | [10.1016/j.clinthera.2010.12.004](https://doi.org/10.1016/j.clinthera.2010.12.004) | [21397770](https://www.ncbi.nlm.nih.gov/pubmed/21397770) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-07 18:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Glogowski_2012 | relevant | 6 | 2 | The paper describes a preclinical PK study in monkeys with qualitative comparisons of concentrations, but the specific quantitative parameters (like CL, V, ka) are not numerically reported in the provided text. |
| popPK | Gu_2016 | relevant | 10 | 0 | The paper is a pharmacokinetic study of besifloxacin in rabbits, but the specific quantitative parameter values (CL, V, etc.) are not provided in the text, as the text focuses on the HPLC-MS/MS method validation. |
| popPK | Koulenti_2019 | irrelevant | 0 | 0 | The paper is a general review of novel Gram-positive antibiotics that mentions besifloxacin only in the introductory list of agents, providing no quantitative pharmacokinetic parameters or data for it. |
| popPK | Mah_2016 | irrelevant | 2 | 3 | The paper is a review that reports only local ocular PK parameters (tear/conjunctival Cmax, Tmax, AUC, half-life) and does not report systemic population PK parameters such as clearance, volume of distribution, or intercompartmental clearance for besifloxacin. |
| popPK | Mahvan_2014 | irrelevant | 0 | 0 | This is a clinical review of efficacy and safety in bacterial conjunctivitis, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Proksch_2009 | relevant | 8 | 4 | The study reports PK parameters (Cmax, AUC, half-life) for besifloxacin, but detailed compartmental clearance/volume values are not explicitly provided in the text evidence. |
| popPK | Proksch_2010 | relevant | 8 | 2 | The study reports ocular PK/PD parameters (AUC/MIC ratios, Cmax, Tmax) for besifloxacin in rabbits, but specific numeric values for Cmax and AUC are mostly described qualitatively or as ratios, with detailed PK table data likely in figures not fully provided here. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbesifloxacin%5D&body=Drug%3A%20besifloxacin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_besifloxacin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
