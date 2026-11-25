<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;cediranib&quot;}]"></div>

# cediranib

- **generic name:** cediranib
- **ATC codes:** `L01EK02`
- **DrugBank:** [DB04849](https://go.drugbank.com/drugs/DB04849) · **PubChem:** [CID 9933475](https://pubchem.ncbi.nlm.nih.gov/compound/9933475)
- **molar mass:** 450.5053 g/mol (C25H27FN4O3) — DrugBank
- **groups:** investigational

## About

Cediranib is a VEGFR tyrosine kinase inhibitor developed as a potential anti-cancer agent. It is intended for oral administration. It is currently an investigational drug being developed by AstraZeneca.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5057052](https://www.wikidata.org/wiki/Q5057052), [Wikipedia](https://en.wikipedia.org/wiki/Cediranib?oldid=1370507171) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-23 20:26 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 3,749/180 | einfracz / qwen3.8-27b | 3 | 1/2 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Huniti_2018.pdf` | Al-Huniti N et al., Population exposure-safety analysis of…, British journal of clinical… (2018) | pd | 5 | [10.1111/bcp.13495](https://doi.org/10.1111/bcp.13495) | [29274100](https://www.ncbi.nlm.nih.gov/pubmed/29274100) | metadata signals extractable PD data (indirectresponse) |
| `Gu_2014.pdf` | Gu R et al., The multikinase inhibitor axitinib is a…, Biochemical pharmacology (2014) | pgx | 7 | [10.1016/j.bcp.2014.01.016](https://doi.org/10.1016/j.bcp.2014.01.016) | [24462920](https://www.ncbi.nlm.nih.gov/pubmed/24462920) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-11-23 20:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adamu_2024 | not_relevant | 0 | 0 | The review reports BRCA status associations with progression-free survival for treatment combinations, but no pharmacogenomic effect on a cediranib PK or PD parameter. |
| popPK | Al-Huniti_2018 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PGx | Al-Huniti_2018 | not_relevant | 0 | 0 | The study analyzes population exposure and safety without reporting genetic variants or pharmacogenomic effects. |
| popPK | Grkovski_2017 | irrelevant | 1 | 0 | This study measures the pharmacokinetics of the PET tracer 18F-FMISO in tumor xenografts to assess perfusion changes, not the disposition parameters of the drug cediranib itself. |
| PGx | Grkovski_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of cediranib on tumor perfusion and hypoxia in a rat xenograft model, but it does not report any pharmacogenomic effects or associations between gene variants and PK/PD parameters. |
| popPK | Gu_2014 | irrelevant | 0 | 0 | The paper is an in vitro study focusing on axitinib's CYP1A2 inhibition and does not report population pharmacokinetic parameters for cediranib. |
| PGx | Gu_2014 | not_relevant | 0 | 0 | The paper investigates CYP1A2 inhibition by axitinib, not cediranib, and does not report pharmacogenomic effects. |
| popPK | Hu_2024 | irrelevant | 0 | 0 | The study focuses on circulating tumor DNA (ctDNA) as a biomarker for efficacy and does not report any pharmacokinetic parameters for cediranib. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper evaluates circulating tumor DNA (ctDNA) as a biomarker for treatment response but does not investigate the impact of germline gene variants on the pharmacokinetics or pharmacodynamics of cediranib. |
| popPK | Lassen_2013 | irrelevant | 0 | 0 | The provided evidence contains only demographic data and figure captions; no quantitative PK parameters (CL, V, etc.) are present in the text. |
| PGx | Lassen_2013 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole/rifampicin) on cediranib PK, not pharmacogenomic (gene-based) effects. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | XRCC1 polymorphisms were assessed for association with PFS, but no association was found and no genotype effect on cediranib PK or PD parameters is reported. |
| popPK | Lheureux_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting response rates and genomic mechanisms, containing no pharmacokinetic parameters or models for cediranib. |
| PGx | Lheureux_2020 | not_relevant | 0 | 0 | The paper investigates genomic mechanisms of resistance to olaparib (PARPi) and reports clinical outcomes (response/PFS) for the combination with cediranib, but it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of cediranib itself. |
| popPK | Li_2017 | relevant | 10 | 4 | The study is a population PK analysis of cediranib in humans, but the abstract lacks specific numeric parameter estimates (CL, V, etc.) which are likely in the full text or tables not provided. |
| PGx | Li_2017 | not_relevant | 0 | 0 | The paper analyzes population PK based on demographic (body weight, age) and pharmacokinetic (co-medication) covariates, but does not report effects of gene variants/genotypes. |
| popPK | Tao_2009 | irrelevant | 0 | 0 | The study investigates the in vitro mechanism of cediranib as a P-gp/MRP1 inhibitor and does not report any pharmacokinetic parameters (CL, V, t1/2) for cediranib. |
| PGx | Tao_2009 | not_relevant | 0 | 0 | The paper investigates cediranib's ability to reverse multidrug resistance in cell lines by inhibiting transporters, but it does not report pharmacogenomic effects (gene variants changing PK/PD) in humans or animal models. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcediranib%5D&body=Drug%3A%20cediranib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cediranib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
