<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;asenapine&quot;}]"></div>

# asenapine

- **generic name:** asenapine
- **ATC codes:** `N05AH05`
- **DrugBank:** [DB06216](https://go.drugbank.com/drugs/DB06216) · **PubChem:** [CID 11954293](https://pubchem.ncbi.nlm.nih.gov/compound/11954293)
- **molar mass:** 285.77 g/mol (C17H16ClNO) — DrugBank
- **groups:** approved, investigational

## About

Asenapine is an atypical antipsychotic used to treat schizophrenia, acute mania, and schizoaffective disorder. It is typically given as a sublingual tablet, and transdermal extended-release films are also available. Asenapine is authorised in the European Union for bipolar disorder and is widely used in other regions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416545](https://www.wikidata.org/wiki/Q416545), [Wikipedia](https://en.wikipedia.org/wiki/Asenapine?oldid=1375768934) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| asenapine | parent | 285.77 | C17H16ClNO | DrugBank | [11954293](https://pubchem.ncbi.nlm.nih.gov/compound/11954293) | Dogterom_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub> | [Dogterom_2018_reference](drugs/drug_asenapine/Asenapine_Dogterom2018_reference.md) | held back | 1-compartment, oral | 5 | Dogterom P et al., Asenapine pharmacokinetics and tolerabi…, Drug design, development an… (2018) | [10.2147/DDDT.S171475](https://doi.org/10.2147/DDDT.S171475) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Dogterom_2015_reference](drugs/drug_asenapine/Asenapine_Dogterom2015_reference.md) | — | 1-compartment (no model) | 0 | Dogterom P et al., The effect of food on the high clearanc…, European journal of clinica… (2015) | [10.1007/s00228-013-1587-4](https://doi.org/10.1007/s00228-013-1587-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Friberg_2009_PANSS](drugs/drug_asenapine/pd_Friberg_2009_PANSS.md) | total Positive and Negative Syndrome Scale scores ← asenapine · direct Emax (saturable) effect | — | Friberg LE et al., Modeling and simulation of the time cou…, Clinical pharmacology and t… (2009) | [10.1038/clpt.2009.44](https://doi.org/10.1038/clpt.2009.44) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Seo_2022_Kv_current](drugs/drug_asenapine/pd_Seo_2022_Kv_current.md) | Kv current ← asenapine · direct sigmoid Emax (Hill) effect | — | Seo MS et al., Asenapine, an atypical antipsychotic, b…, European journal of pharmac… (2022) | [10.1016/j.ejphar.2022.175318](https://doi.org/10.1016/j.ejphar.2022.175318) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:50 | 0:03 | 1/1/0 | 2/0/0 | 0/0/0 | 3,761/214 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chapel_2009 | irrelevant | 2 | 0 | This is a pharmacodynamic exposure-response (QTc) study that uses asenapine concentrations primarily as a covariate for cardiac safety, rather than reporting population pharmacokinetic parameters (CL, V, etc.) as the primary objective. |
| PGx | Chapel_2009 | not_relevant | 0 | 0 | The paper focuses on the exposure-response relationship between asenapine concentration and QTc prolongation, but does not report on pharmacogenomic effects (gene variants) on pharmacokinetics or pharmacodynamics. |
| popPK | Chapel_2011 | irrelevant | 1 | 0 | The study focuses on QTc safety analysis and exposure-response simulations regarding cardiac effects, not the estimation of quantitative pharmacokinetic disposition parameters (CL, V, etc.) for asenapine. |
| PGx | Chapel_2011 | not_relevant | 0 | 0 | The study evaluates QTc analysis methods (IUT vs E-R) in a TQT study and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters of asenapine. |
| popPK | Citrome_2022 | irrelevant | 0 | 0 | The paper is a post hoc analysis of the efficacy (hostility symptoms) of an asenapine transdermal patch and does not report any pharmacokinetic parameters or disposition data. |
| PGx | Citrome_2022 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (PANSS scores) and does not investigate the impact of gene variants or genotypes on pharmacokinetics or pharmacodynamics. |
| PGx | Dogterom_2015 | not_relevant | 0 | 0 | The study investigates the effect of food intake on the pharmacokinetics of asenapine in healthy volunteers and does not report any pharmacogenomic (gene variant/genotype) influences. |
| popPK | Friberg_2009 | irrelevant | 2 | 0 | The paper describes a pharmacokinetic-pharmacodynamic (PK-PD) model focused on efficacy and dropout, but does not report quantitative disposition parameters (CL, V, etc.) for asenapine in the provided evidence. |
| PGx | Friberg_2009 | not_relevant | 0 | 0 | The paper focuses on general pharmacokinetic-pharmacodynamic modeling and trial simulation for asenapine, with no mention of gene variants or pharmacogenomic factors. |
| popPK | Knauer_2008 | irrelevant | 0 | 0 | The paper describes a receptor occupancy study measuring ED50 values, not population pharmacokinetic parameters (CL, V, Q, ka) for asenapine. |
| PGx | Knauer_2008 | not_relevant | 0 | 0 | The paper reports preclinical pharmacokinetic/pharmacodynamic data for asenapine in rats but does not report any pharmacogenomic effects (gene variants affecting the parameters). |
| popPK | Seo_2022 | irrelevant | 0 | 0 | The paper is an electrophysiology study investigating asenapine's effect on potassium channels in cells, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Seo_2022 | not_relevant | 0 | 0 | The paper reports the pharmacological mechanism of asenapine on potassium channels in animal tissue, not a pharmacogenomic effect (gene variant influence) on PK/PD parameters. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | The study characterizes an insect octopamine receptor in vitro and uses asenapine only as a test antagonist, reporting receptor pharmacology (EC50/antagonism) rather than population pharmacokinetic disposition parameters (CL, V, T1/2) for asenapine in any subject. |
| PGx | Xu_2020 | not_relevant | 0 | 0 | The paper characterizes an insect octopamine receptor and reports asenapine as a pharmacological antagonist in a heterologous expression system, which does not constitute a pharmacogenomic effect on PK or PD parameters in humans. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Basenapine%5D&body=Drug%3A%20asenapine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_asenapine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 18:48 UTC</sub>
