<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoversetamide&quot;}]"></div>

# gadoversetamide

- **generic name:** gadoversetamide
- **ATC codes:** `V08CA06`
- **DrugBank:** [DB00538](https://go.drugbank.com/drugs/DB00538) · **PubChem:** [CID 444013](https://pubchem.ncbi.nlm.nih.gov/compound/444013)
- **molar mass:** 661.76 g/mol (C20H34GdN5O10) — DrugBank
- **groups:** approved

## About

Gadoversetamide is a gadolinium-based contrast agent used for magnetic resonance imaging of the brain, spine, and liver. It is administered as an intravenous injection solution. The drug is approved, though it has been withdrawn from the European Union market.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5516432](https://www.wikidata.org/wiki/Q5516432), [Wikipedia](https://en.wikipedia.org/wiki/Gadoversetamide?oldid=1360202327) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

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
| 2026-11-23 22:26 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,578/155 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wible_2009.pdf` | Wible JH et al., Pharmacokinetics of gadoversetamide inj…, Magnetic resonance imaging (2009) | popPK | 10 | [10.1016/j.mri.2008.08.002](https://doi.org/10.1016/j.mri.2008.08.002) | [18814985](https://pubmed.ncbi.nlm.nih.gov/18814985) | The paper is a PK study of gadoversetamide, but the abstract only contains qualitative statements about differences in clearance and volume of distribution without specific numeric values. |

<sub>queue written 2026-11-23 22:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_2004 | relevant | 9 | 2 | The study reports quantitative PK parameters for gadoversetamide in pediatric humans, but specific numeric values for clearance and volume of distribution are described as having no age-related changes without providing the exact baseline numbers in the evidence text. |
| PGx | Baker_2004 | not_relevant | 0 | 0 | The paper reports standard pediatric pharmacokinetics based on age stratification, but contains no pharmacogenomic data, gene variants, or genotype-based analysis affecting the drug's PK/PD. |
| popPK | Edward_2010 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study examining the effect of gadolinium-based contrast agents on fibroblast proliferation, not a pharmacokinetic study. |
| PGx | Edward_2010 | not_relevant | 0 | 0 | The paper studies the effect of gadolinium contrast agents on fibroblast proliferation in vitro, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of gadoversetamide. |
| popPK | Endrikat_2018 | irrelevant | 0 | 0 | This is a pharmacovigilance analysis of Nephrogenic Systemic Fibrosis (NSF) reports, not a pharmacokinetic study, and it contains no quantitative disposition parameters for gadoversetamide. |
| PGx | Endrikat_2018 | not_relevant | 0 | 0 | The paper analyzes nephrogenic systemic fibrosis (NSF) reports and market share data for gadolinium-based contrast agents but does not discuss pharmacogenomics or genetic variants affecting PK/PD. |
| popPK | Grothues_2007 | irrelevant | 0 | 0 | The study focuses on MRI imaging techniques for myocardial mass assessment using gadoversetamide as a contrast agent, not on its pharmacokinetic parameters. |
| PGx | Grothues_2007 | not_relevant | 0 | 0 | The study compares MRI techniques and contrast dosage effects on imaging quality, with no data on genetic variants or pharmacogenomics. |
| popPK | Magnotti_2009 | irrelevant | 2 | 1 | The study is an analytical validation of a gadolinium assay in dogs and cats, where gadoversetamide serves as a test substrate to verify method accuracy rather than as the subject of a population-pharmacokinetic analysis, and no specific PK parameters (CL, V, etc.) for gadoversetamide are reported. |
| PGx | Magnotti_2009 | not_relevant | 0 | 0 | The paper describes an analytical assay for gadolinium clearance and does not report any pharmacogenomic effects. |
| popPK | Pietsch_2009 | irrelevant | 0 | 0 | The study does not investigate gadoversetamide (it compares Omniscan, OptiMARK, Magnevist, and Gadovist) and reports tissue retention data rather than standard PK parameters. |
| PGx | Pietsch_2009 | not_relevant | 0 | 0 | The study investigates renal impairment (physiological state) in rodents, not genetic variants or pharmacogenomics, and does not report specific PK parameters for gadoversetamide (Gadovist) relative to a genotype. |
| popPK | Prybylski_2017 | irrelevant | 1 | 0 | The paper focuses on a review and simulation analysis of gadolinium retention for OptiMARK and Omniscan in the context of NSF, not a primary PK study of gadoversetamide. |
| PGx | Prybylski_2017 | not_relevant | 0 | 0 | The paper discusses renal function and contrast agent stability, but does not report pharmacogenomic effects of gadoversetamide. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for gadoterate meglumine, which is a different drug than the target agent gadoversetamide. |
| PGx | Scala_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of gadoterate meglumine (not gadoversetamide) in pediatric patients and does not report any pharmacogenomic effects or genotype-based variations. |
| popPK | Swan_1999 | irrelevant | 8 | 0 | The abstract describes qualitative trends (increases/decreases) in PK parameters but provides no specific numeric values for clearance, volume, or half-life. |
| PGx | Swan_1999 | not_relevant | 0 | 0 | The paper reports pharmacokinetic effects of renal impairment, age, and gender, but does not report pharmacogenomic effects (gene variants/genotypes). |
| popPK | Wible_2009 | relevant | 10 | 3 | The paper is a PK study of gadoversetamide, but the abstract only contains qualitative statements about differences in clearance and volume of distribution without specific numeric values. |
| PGx | Wible_2009 | not_relevant | 0 | 0 | The paper describes population PK in pediatric patients based on age and sex, with no mention of genetic variants, genotypes, or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadoversetamide%5D&body=Drug%3A%20gadoversetamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadoversetamide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
