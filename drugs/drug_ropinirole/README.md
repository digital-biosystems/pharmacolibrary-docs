<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;ropinirole&quot;}]"></div>

# ropinirole

- **generic name:** ropinirole
- **ATC codes:** `N04BC04`
- **DrugBank:** [DB00268](https://go.drugbank.com/drugs/DB00268) · **PubChem:** [CID 5095](https://pubchem.ncbi.nlm.nih.gov/compound/5095)
- **molar mass:** 260.3746 g/mol (C16H24N2O) — DrugBank
- **groups:** approved, investigational

## About

Ropinirole is a dopamine agonist used to treat Parkinson's disease and restless legs syndrome. It is taken by mouth in tablet form and has good oral absorption. It is widely used and available as a generic medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q420590](https://www.wikidata.org/wiki/Q420590), [Wikipedia](https://en.wikipedia.org/wiki/Ropinirole?oldid=1374715842) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Huang_2019_RO](drugs/drug_ropinirole/pd_Huang_2019_RO.md) | dopamine D2/3 receptor occupancy ← ropinirole · direct Emax (saturable) effect | — | Huang C et al., Predicting the dopamine D, Xenobiotica; the fate of fo… (2019) | [10.1080/00498254.2018.1428383](https://doi.org/10.1080/00498254.2018.1428383) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Liu_2019_prolactin](drugs/drug_ropinirole/pd_Liu_2019_prolactin.md) | prolactin ← ropinirole · indirect response — drug inhibits the production of prolactin | — | Liu S et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2019) | [10.1111/bcp.13802](https://doi.org/10.1111/bcp.13802) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Parvez_2010_mtPTP](drugs/drug_ropinirole/pd_Parvez_2010_mtPTP.md) | opening of mtPTP ← ropinirole · direct sigmoid Emax (Hill) effect | — | Parvez S et al., The dopamine-D2-receptor agonist ropini…, Biochimica et biophysica ac… (2010) | [10.1016/j.bbabio.2010.02.001](https://doi.org/10.1016/j.bbabio.2010.02.001) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Simkó_2010_I_Kr](drugs/drug_ropinirole/pd_Simk_2010_I_Kr.md) | rapid delayed rectifier K(+) current (I (Kr)) ← ropinirole · direct sigmoid Emax (Hill) effect | — | Simkó J et al., Effects of ropinirole on action potenti…, Naunyn-Schmiedeberg's archi… (2010) | [10.1007/s00210-010-0538-1](https://doi.org/10.1007/s00210-010-0538-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:24 | 0:04 | 0/0/0 | 1/3/0 | 0/0/0 | 3,953/156 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamiak-Giera_2021 | irrelevant | 2 | 3 | The PK parameters (CL/F, V/F, ka, AUC) reported are for levodopa and its metabolite 3-OMD, not for ropinirole, which is only a co-administered drug whose own PK parameters are not quantified here. |
| popPK | Elmabruk_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry/pharmacology study on novel carbazole compounds, using ropinirole only as a reference drug in behavioral assays, with no pharmacokinetic data reported. |
| PGx | Elmabruk_2019 | not_relevant | 0 | 0 | The paper reports the design and pharmacological characterization of novel carbazole-based compounds, not a pharmacogenomic effect on ropinirole. |
| popPK | Gardner_1998 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of receptor binding and signaling, not a pharmacokinetic study of ropinirole. |
| PGx | Gardner_1998 | not_relevant | 0 | 0 | The paper discusses receptor binding and functional assays for ropinirole but does not investigate pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Ghosh_2010 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study focusing on receptor binding affinity, with ropinirole serving only as a reference drug for selectivity, not a subject of pharmacokinetic analysis. |
| PGx | Ghosh_2010 | not_relevant | 0 | 0 | The paper describes a structure-activity relationship study of new dopamine receptor agonists and mentions ropinirole only as a reference compound for receptor selectivity; it does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters of ropinirole. |
| popPK | Huang_2019 | relevant | 4 | 0 | The study involves ropinirole PK-PD modeling in rats, but the evidence only reports an EC50 value and methodological details, without providing explicit numerical disposition parameters (CL, V, t1/2) or readable compartmental model estimates. |
| PGx | Huang_2019 | not_relevant | 0 | 0 | The study is a preclinical PK/PD modeling in rats and does not report any pharmacogenomic effects (gene variant/genotype) on drug parameters. |
| popPK | Kaikousidis_2024 | relevant | 8 | 3 | A population-PK model of ropinirole (double absorption, Cl, V, ka, transit parameters) was developed in 30 healthy volunteers, but the actual numeric parameter estimates are in supplementary Tables S2/S3, which are not provided in the evidence. |
| popPK | Kaye_2000 | relevant | 8 | 4 | The text describes a population PK study for ropinirole and provides qualitative/semi-quantitative data (bioavailability ~50%, half-life ~6 hours) but lacks specific numeric values for clearance (CL), volume (V), or intercompartmental clearance (Q) typically required for full parameter extraction. |
| PGx | Kaye_2000 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and demographic influences (age, gender) but does not report any effects of specific gene variants or genotypes on ropinirole. |
| PGx | Li_2016 | not_relevant | 0 | 0 | The study focuses on the bioequivalence of a new formulation in beagle dogs and does not report pharmacogenomic effects. |
| popPK | Liu_2019 | relevant | 9 | 4 | The study reports PK parameters (half-life, Tmax) and a one-compartment model for ropinirole, but specific numeric values for clearance (CL), volume (V), and absorption rate (ka) are not explicitly provided in the abstract text. |
| PGx | Liu_2019 | not_relevant | 0 | 0 | The study describes general pharmacokinetics and pharmacodynamics of ropinirole in prolactinoma patients but does not investigate gene variants or genotypes. |
| popPK | Newman-Tancredi_1997 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and G-protein activation assay measuring efficacy (Emax) and affinity (Ki/EC50), not pharmacokinetic disposition parameters. |
| PGx | Newman-Tancredi_1997 | not_relevant | 0 | 0 | The paper reports pharmacological activity of ropinirole on recombinant D4.4 receptors in cell membranes, not pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Parvez_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial effects in rat liver mitochondria, not a pharmacokinetic study. |
| PGx | Parvez_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of action (mitochondrial PTP inhibition) in isolated mitochondria and does not report on the effect of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Saitani_2026 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for ropinirole in mice, but specific numeric values for clearance, volume, or half-life are not listed in the provided text, only relative bioavailability and descriptive NCA results. |
| PGx | Saitani_2026 | not_relevant | 0 | 0 | The study evaluates the pharmacokinetics of intranasal vs oral delivery in C57BL/6J mice and contains no pharmacogenomic (gene variant) component. |
| popPK | Simkó_2010 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ionic currents in canine myocytes, not a pharmacokinetic study of drug disposition. |
| PGx | Simkó_2010 | not_relevant | 0 | 0 | The study investigates the direct cellular cardiac effects (ion channel interactions) of ropinirole, not the influence of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Tadori_2014 | irrelevant | 0 | 0 | The paper is a review discussing therapeutic plasma concentrations and in vitro pharmacology (EC50), not a study reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) or PK models for ropinirole. |
| PGx | Tadori_2014 | not_relevant | 0 | 0 | The paper is a review comparing plasma concentrations and receptor pharmacology of various drugs; it does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The paper reports pharmacodynamic efficacy parameters (Emax, response rates) for a model-based meta-analysis of RLS drugs, not pharmacokinetic disposition parameters. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | The paper is a meta-analysis comparing drug efficacies based on baseline symptom severity, not a study of pharmacogenomic variants affecting PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bropinirole%5D&body=Drug%3A%20ropinirole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ropinirole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
