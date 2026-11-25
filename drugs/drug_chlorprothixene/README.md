<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;chlorprothixene&quot;}]"></div>

# chlorprothixene

- **generic name:** chlorprothixene
- **ATC codes:** `N05AF03`
- **DrugBank:** [DB01239](https://go.drugbank.com/drugs/DB01239) · **PubChem:** [CID 667466](https://pubchem.ncbi.nlm.nih.gov/compound/667466)
- **molar mass:** 315.86 g/mol (C18H18ClNS) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Chlorprothixene is a thioxanthene antipsychotic medication. It is taken orally in tablet form. It is currently withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q63395672](https://www.wikidata.org/wiki/Q63395672), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Kim_2016_I_H](drugs/drug_chlorprothixene/pd_Kim_2016_I_H.md) | proton currents ← chlorprothixene · inhibition effect | — | Kim J et al., Thioxanthenes, chlorprothixene and flup…, European journal of pharmac… (2016) | [10.1016/j.ejphar.2016.03.009](https://doi.org/10.1016/j.ejphar.2016.03.009) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:46 | 0:04 | 0/0/0 | 1/0/0 | 0/0/0 | 3,831/182 | einfracz / qwen3.8-27b | 9 | 4/3 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2016.pdf` | Kim J et al., Thioxanthenes, chlorprothixene and flup…, European journal of pharmac… (2016) | pd | 4 | [10.1016/j.ejphar.2016.03.009](https://doi.org/10.1016/j.ejphar.2016.03.009) | [26945819](https://www.ncbi.nlm.nih.gov/pubmed/26945819) | metadata signals extractable PD data (IC50) |
| `Zilberstein_1990.pdf` | Zilberstein D et al., Tricyclic drugs reduce proton motive fo…, Biochemical pharmacology (1990) | pd | 4 | [10.1016/0006-2952(90)90210-c](https://doi.org/10.1016/0006-2952(90)90210-c) | [1968745](https://www.ncbi.nlm.nih.gov/pubmed/1968745) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-23 19:46 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bagli_1999 | irrelevant | 7 | 0 | The paper describes a PK-PD study with a 3-compartment model but no numeric parameter values (CL, V, etc.) are present in the provided evidence, which is just the abstract. |
| PGx | Bagli_1999 | not_relevant | 0 | 0 | The study describes PK/PD modeling in healthy men but does not involve any genetic variants, genotypes, or pharmacogenomic factors. |
| popPK | Bakshi_2016 | irrelevant | 0 | 0 | The paper is a mathematical tutorial on dynamical systems using a prolactin model, where chlorprothixene is only mentioned as a comparative antipsychotic agent, and no pharmacokinetic parameters for chlorprothixene are reported. |
| PGx | Bakshi_2016 | not_relevant | 0 | 0 | The paper is a mathematical tutorial on dynamical systems analysis using prolactin modeling and does not report pharmacogenomic effects on chlorprothixene PK/PD. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | This is a pharmacodynamic study evaluating spinal anesthesia efficacy and duration of action, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Chen_2012 | not_relevant | 0 | 0 | The study investigates the pharmacological potency of antipsychotics in rats but does not examine gene variants or genetic phenotypes. |
| popPK | Djeddi_2023 | irrelevant | 0 | 0 | This is a machine-learning drug-target interaction prediction paper with no pharmacokinetic parameters for chlorprothixene; "Vd" here refers to vector embeddings, not volume of distribution. |
| popPK | Eilam_1983 | irrelevant | 0 | 0 | The study investigates in vitro membrane effects in yeast, not pharmacokinetic disposition parameters for chlorprothixene. |
| PGx | Eilam_1983 | not_relevant | 0 | 0 | The study investigates membrane effects of phenothiazines in yeast cells, not human pharmacogenomics. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance disproportionality (FAERS ROR) study of sedation/somnolence; chlorprothixene is only listed among 37 antipsychotics with no PK parameters reported. |
| popPK | Gaudêncio_2023 | irrelevant | 0 | 0 | This is a natural products discovery review; chlorprothixene is only mentioned as an antiviral screening hit, with no PK parameters. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance analysis of myopathy associated with azoles and nonstatins using the FAERS database and does not contain pharmacokinetic data for chlorprothixene. |
| PGx | Jing_2025 | not_relevant | 0 | 0 | The paper focuses on pharmacovigilance signals for azole-associated myopathy and drug-drug interactions, with no mention of chlorprothixene or pharmacogenomic effects on PK/PD. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study investigates the mechanism of action (inhibition of proton currents) in BV2 microglial cells and reports IC50 values, but does not contain any pharmacokinetic parameters (CL, V, etc.) for chlorprothixene. |
| PGx | Kim_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of chlorprothixene on proton currents in cells but does not report any genetic variants or pharmacogenomic effects. |
| popPK | Kristiansen_1989 | irrelevant | 0 | 0 | The paper is an in-vitro microbiology study testing the antimicrobial activity of chlorprothixene against Campylobacter pylori, not a pharmacokinetic study. |
| PGx | Kristiansen_1989 | not_relevant | 0 | 0 | The paper reports in vitro antimicrobial activity against C. pylori, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Ma_2010 | irrelevant | 0 | 0 | The study models prolactin dynamics in response to remoxipride, not chlorprothixene pharmacokinetics. |
| PGx | Ma_2010 | not_relevant | 0 | 0 | The study models prolactin response to remoxipride in healthy subjects and does not involve chlorprothixene or any genetic variants. |
| popPK | Neuner_2022 | irrelevant | 0 | 0 | This is a 7T MRI neuroimaging study of depression; chlorprothixene is only mentioned as a co-administered medication, with no PK parameters. |
| popPK | Petersson_2013 | irrelevant | 0 | 0 | The paper models prolactin response to D2 antagonists in general, not the specific pharmacokinetic parameters of chlorprothixene, and contains no data for this specific drug. |
| PGx | Petersson_2013 | not_relevant | 0 | 0 | The paper focuses on predicting prolactin levels from D2 receptor affinity for various compounds, but does not mention chlorprothixene or any gene variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Raju_2022 | irrelevant | 0 | 0 | The study focuses on chlorprothixene as a CYP1B1 inhibitor in an in-vitro assay, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Raju_2022 | not_relevant | 0 | 0 | The paper identifies chlorprothixene as a CYP1B1 inhibitor through drug repurposing but does not report pharmacogenomic data linking genetic variants to PK or PD parameters of chlorprothixene itself. |
| popPK | Tokmakjian_2026 | irrelevant | 0 | 0 | This is a C. elegans CAD defense/metabolism study; chlorprothixene is not the subject and no PK parameters (CL, V, half-life) are reported. |
| popPK | Vasudevan_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on histamine H1 receptor binding and cell-based assays, reporting an IC50 value but not any pharmacokinetic parameters (CL, V, t1/2) for chlorprothixene. |
| PGx | Vasudevan_2012 | not_relevant | 0 | 0 | The paper reports the in vitro efficacy of chlorprothixene as an H1 antagonist but does not investigate any gene variants or pharmacogenomic effects on its PK/PD parameters. |
| popPK | Zilberstein_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of chlorprothixene's effect on Leishmania parasites, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Zilberstein_1990 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of tricyclics on Leishmania parasites in vitro, not the pharmacogenomic effects of genetic variants on chlorprothixene PK or PD in humans. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlorprothixene%5D&body=Drug%3A%20chlorprothixene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chlorprothixene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
