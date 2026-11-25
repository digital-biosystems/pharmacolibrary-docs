<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;cediranib maleate&quot;}]"></div>

# cediranib maleate

- **generic name:** cediranib maleate
- **ATC codes:** `L01XE32`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Cediranib is a protein kinase inhibitor that targets vascular endothelial growth factor receptors and is being developed as an anticancer chemotherapy agent. It is intended for oral administration. The drug is currently being developed by AstraZeneca as a possible therapeutic agent.

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
| 2026-11-23 20:28 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 3,773/158 | einfracz / qwen3.8-27b | 3 | 1/2 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gu_2014.pdf` | Gu R et al., The multikinase inhibitor axitinib is a…, Biochemical pharmacology (2014) | pgx | 7 | [10.1016/j.bcp.2014.01.016](https://doi.org/10.1016/j.bcp.2014.01.016) | [24462920](https://www.ncbi.nlm.nih.gov/pubmed/24462920) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-11-23 20:28 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adamu_2024 | not_relevant | 0 | 0 | The review reports BRCA-status associations with progression-free survival for combination therapies, not a pharmacogenomic effect on a cediranib pharmacokinetic or pharmacodynamic parameter. |
| popPK | Gu_2014 | irrelevant | 0 | 0 | The study focuses on in-vitro CYP inhibition by axitinib and other kinase inhibitors, not the population pharmacokinetics of cediranib maleate. |
| PGx | Gu_2014 | not_relevant | 0 | 0 | The paper studies the inhibition of CYP1A2 by axitinib, not the pharmacogenomics of cediranib maleate. |
| popPK | Hu_2024 | irrelevant | 0 | 0 | The study investigates ctDNA dynamics as a biomarker for efficacy and does not report pharmacokinetic parameters for cediranib. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The study investigates ctDNA dynamics as a biomarker for clinical outcome in a population cohort, reporting no pharmacogenomic association with pharmacokinetic or pharmacodynamic parameters of cediranib. |
| popPK | Lassen_2013 | irrelevant | 0 | 0 | The provided evidence contains only demographic data and references to PK figures/tables but does not include the actual numeric pharmacokinetic parameter values (CL, V, etc.). |
| PGx | Lassen_2013 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole/rifampicin) and demographic baseline characteristics, but does not investigate the effect of genetic variants or genotypes on the pharmacokinetics or pharmacodynamics of cediranib. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | XRCC1 polymorphisms were assessed only for association with PFS, with no significant association; no genotype-related cediranib pharmacokinetic or pharmacodynamic parameter is reported. |
| popPK | Lheureux_2020 | irrelevant | 0 | 0 | This is a clinical efficacy (Phase II) study reporting response rates and survival outcomes, with no pharmacokinetic parameters (CL, V, etc.) for cediranib provided in the evidence. |
| PGx | Lheureux_2020 | not_relevant | 0 | 0 | The paper investigates genomic mechanisms of resistance to PARP inhibitors and clinical outcomes of a combination therapy, but it does not report pharmacogenomic effects on the PK or PD parameters of cediranib. |
| popPK | Tao_2009 | irrelevant | 0 | 0 | The study investigates the mechanism of multidrug resistance reversal in cell lines (in vitro) and does not report pharmacokinetic parameters. |
| PGx | Tao_2009 | not_relevant | 1 | 0 | The paper describes cediranib as a transporter inhibitor reversing MDR in cell lines, but does not report a human pharmacogenomic association (gene variant effect) on cediranib's own PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcediranib_maleate%5D&body=Drug%3A%20cediranib_maleate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cediranib_maleate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
