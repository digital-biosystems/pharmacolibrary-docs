<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;fluoxetine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluoxetine_Burlot2026_reference&quot;,&quot;label&quot;:&quot;Burlot_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluoxetine/Fluoxetine_Burlot2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# fluoxetine

- **generic name:** fluoxetine
- **ATC codes:** `N06AB03`, `N06CA03`
- **DrugBank:** [DB00472](https://go.drugbank.com/drugs/DB00472) · **PubChem:** [CID 3386](https://pubchem.ncbi.nlm.nih.gov/compound/3386)
- **molar mass:** 309.3261 g/mol (C17H18F3NO) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Fluoxetine is a selective serotonin reuptake inhibitor antidepressant used to treat major depressive disorder, anxiety, obsessive-compulsive disorder, panic disorder, and bulimia nervosa. It is given orally in capsule, tablet, or solution forms. It is widely used, listed as an essential medicine by the World Health Organization, and available as a generic medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q422244](https://www.wikidata.org/wiki/Q422244), [Wikipedia](https://en.wikipedia.org/wiki/Fluoxetine?oldid=1386016024) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| norfluoxetine | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Burlot_2026_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> review reference. [Run it in the simulator](drugs/drug_fluoxetine/Fluoxetine_Burlot2026_reference.md?tab=Simulation) · [record](drugs/drug_fluoxetine/Fluoxetine_Burlot2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Burlot_2026_reference](drugs/drug_fluoxetine/Fluoxetine_Burlot2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Burlot C et al., PK and PK/PD Modeling of Bcl2 Inhibitor…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70288](https://doi.org/10.1002/psp4.70288) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wilens_2002_reference](drugs/drug_fluoxetine/Fluoxetine_Wilens2002_reference.md) | — | parent + metabolite (no model) | 0 | Wilens TE et al., Fluoxetine pharmacokinetics in pediatri…, Journal of clinical psychop… (2002) | [10.1097/00004714-200212000-00006](https://doi.org/10.1097/00004714-200212000-00006) |
| <span class="pk-rf" hidden data-species="other organism" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other organism</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [van_2024_reference](drugs/drug_fluoxetine/Fluoxetine_van2024_reference.md) | — | parent + metabolite (no model) | 0 | van der Most MA et al., Toxicokinetics of the Antidepressant Fl…, Environmental science & tec… (2024) | [10.1021/acs.est.3c07744](https://doi.org/10.1021/acs.est.3c07744) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kecskeméti_2005_peak_Ba2_current](drugs/drug_fluoxetine/pd_Kecskem_ti_2005_peak_Ba2_current.md) | peak Ba2+ current biomarker turnover ← fluoxetine | — | Kecskeméti V et al., Norfluoxetine and fluoxetine have simil…, Brain research bulletin (2005) | [10.1016/j.brainresbull.2005.06.027](https://doi.org/10.1016/j.brainresbull.2005.06.027) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Maringwa_2025_HAMD_change](drugs/drug_fluoxetine/pd_Maringwa_2025_HAMD_change.md) | Change from baseline in the Hamilton Depression Rating (HAMD) scale ← fluoxetine · direct linear effect | — | Maringwa J et al., Partial Residual Plots as an Integrated…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3418](https://doi.org/10.1002/cpt.3418) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Vieira-Coelho_2023_K_currents](drugs/drug_fluoxetine/pd_Vieira_Coelho_2023_K_currents.md) | K+ currents in OK cells ← fluoxetine · direct Emax (saturable) effect | — | Vieira-Coelho MA et al., Inhibition of kidney potassium channels…, Fundamental & clinical phar… (2023) | [10.1111/fcp.12833](https://doi.org/10.1111/fcp.12833) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Vieira-Coelho_2023_urinary_K](drugs/drug_fluoxetine/pd_Vieira_Coelho_2023_urinary_K.md) | urinary K+ ← fluoxetine · direct Emax (saturable) effect | — | Vieira-Coelho MA et al., Inhibition of kidney potassium channels…, Fundamental & clinical phar… (2023) | [10.1111/fcp.12833](https://doi.org/10.1111/fcp.12833) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wojtovich_2010_mKATP](drugs/drug_fluoxetine/pd_Wojtovich_2010_mKATP.md) | mKATP channel activity ← fluoxetine · direct sigmoid Emax (Hill) effect | — | Wojtovich AP et al., A novel mitochondrial K(ATP) channel as…, Circulation research (2010) | [10.1161/CIRCRESAHA.109.215400](https://doi.org/10.1161/CIRCRESAHA.109.215400) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:05 | 0:05 | 1/2/0 | 5/0/0 | 0/0/0 | 3,897/171 | einfracz / qwen3.8-27b | 18 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 178 matched, 20 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996 | irrelevant | 0 | 0 | The paper is a narrative review discussing the general properties of SSRIs and drug interactions, without reporting any original quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for fluoxetine. |
| PD | Baumann_1996 | not_relevant | 1 | 0 | The text is a review of PK properties and drug interactions, explicitly stating that no clear plasma concentration-clinical effectiveness relationship has been shown, and provides no numeric PD parameters. |
| PGx | Baumann_1996 | not_relevant | 0 | 0 | The text discusses general PK properties and drug interactions of SSRIs, but does not report a pharmacogenomic study showing how a specific gene variant changes a PK or PD parameter for fluoxetine. |
| popPK | Boswell_2023 | irrelevant | 0 | 0 | This is a clinical outcome study on binge-eating disorder that uses fluoxetine as a treatment agent, but it does not report any pharmacokinetic parameters for fluoxetine. |
| PGx | Boswell_2023 | not_relevant | 0 | 0 | The study examines psychological and clinical outcomes (impulsivity, depression, eating disorders) associated with treatment but does not report pharmacokinetic or pharmacodynamic parameters, nor does it analyze the influence of any gene variants or genotypes on drug response. |
| popPK | Burlot_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for S65487, not fluoxetine. |
| PGx | Burlot_2026 | not_relevant | 0 | 0 | The paper investigates PK/PD modeling for S65487, not fluoxetine, and contains no pharmacogenomic data. |
| popPK | Chen_2008 | irrelevant | 0 | 0 | The paper is a review of nitric oxide signaling and does not contain any pharmacokinetic data for fluoxetine. |
| PD | Chen_2008 | not_relevant | 0 | 0 | The paper is a review and theoretical modeling study of nitric oxide (NO) production and distribution in the vasculature; it does not report pharmacodynamic or exposure-response data for fluoxetine. |
| PGx | Chen_2008 | not_relevant | 0 | 0 | The paper discusses nitric oxide physiology and modeling, with no mention of fluoxetine, gene variants, or pharmacogenomics. |
| popPK | DiPietro_2023 | irrelevant | 0 | 0 | The paper studies fetal heart rate responses to maternal sleep-disordered breathing and contains no pharmacokinetic data for fluoxetine. |
| PGx | DiPietro_2023 | not_relevant | 0 | 0 | The paper focuses on fetal heart rate responses to maternal sleep-disordered breathing and contains no information regarding fluoxetine or pharmacogenomics. |
| popPK | Hai_2016 | irrelevant | 0 | 0 | This is a molecular fMRI study characterizing serotonin reuptake dynamics, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for fluoxetine. |
| PGx | Hai_2016 | not_relevant | 0 | 0 | The paper describes a molecular fMRI technique to map serotonin transport and the effects of fluoxetine on reuptake in live animals, but it does not investigate gene variants or pharmacogenomic factors. |
| popPK | Jung_2022 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR paper on tianeptine hybrid compounds; fluoxetine appears only as a pharmacophore and positive control, with no PK parameters for fluoxetine. |
| PD | Jung_2022 | not_relevant | 0 | 0 | The paper focuses on novel tianeptine derivatives; fluoxetine is only mentioned as a pharmacophore source for synthesis, and no PD or exposure-response data for fluoxetine itself are reported. |
| popPK | Kecskeméti_2005 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacological investigation in rats and in vitro, reporting pharmacodynamic effects and ion channel potency (EC50) rather than pharmacokinetic disposition parameters. |
| PGx | Kecskeméti_2005 | not_relevant | 0 | 0 | The study compares the pharmacological efficacy (anticonvulsant and Ca2+ blocking) of fluoxetine and its metabolite, but does not report the effect of any genetic variant or genotype on a PK/PD parameter. |
| popPK | LLoyd_2025 | irrelevant | 0 | 0 | This is a clinical trial analyzing the efficacy of fluoxetine for anorexia nervosa and depression, reporting no pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| PGx | LLoyd_2025 | not_relevant | 0 | 0 | The study investigates clinical response (relapse, symptom trajectories) moderated by depression severity (BDI scores), not pharmacogenomic effects on PK/PD parameters. |
| popPK | Magalhães_2020 | relevant | 9 | 1 | The study reports population PK/PD analysis of fluoxetine in humans, but the provided evidence contains only qualitative p-values and study design details without specific numeric parameter estimates (CL, V, etc.). |
| PD | Magalhães_2020 | not_relevant | 2 | 0 | The study performs a multivariate analysis of genetic factors on PK and clinical outcomes but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Maringwa_2025 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (HAMD scores) and does not report pharmacokinetic parameters (CL, V, etc.) for fluoxetine. |
| PGx | Maringwa_2025 | not_relevant | 0 | 0 | The paper analyzes a Model-Based Meta-Analysis of antidepressant efficacy using HAMD scores and does not report any pharmacogenomic or genetic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Nakagawa_2011 | irrelevant | 0 | 0 | The paper is a statistical methodology review for neuroscientists and does not contain any pharmacokinetic data or parameters for fluoxetine. |
| PGx | Nakagawa_2011 | not_relevant | 0 | 0 | The paper is a statistical methodology review for neuroscience and contains no data regarding fluoxetine pharmacokinetics, pharmacodynamics, or genetic variants. |
| popPK | Vieira-Coelho_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacological effect of fluoxetine on kidney potassium channels and renal excretion, not on population pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Vieira-Coelho_2023 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of fluoxetine on renal potassium excretion in rats but does not involve any genetic variants, genotypes, or pharmacogenomic data. |
| popPK | Vlase_2006 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for the probe drug metoclopramide, while fluoxetine serves only as the interacting co-administered agent with no PK parameters reported for it. |
| PGx | Vlase_2006 | not_relevant | 0 | 0 | The study describes a drug-drug interaction between fluoxetine and metoclopramide, not a pharmacogenomic effect of a gene variant on fluoxetine's PK or PD. |
| popPK | Wilens_2002 | relevant | 10 | 3 | The study is a population PK analysis for fluoxetine, but the specific parameter estimates (CL, V, etc.) are not listed in the evidence, only mean steady-state concentrations. |
| PGx | Wilens_2002 | not_relevant | 0 | 0 | The study reports the effect of patient covariates (age, body weight) on pharmacokinetics, not the effect of a gene variant or genotype on fluoxetine pharmacokinetics or pharmacodynamics. |
| popPK | Wojtovich_2010 | irrelevant | 0 | 0 | The study is an in-vitro/in-extracorporeal mechanistic study of mitochondrial KATP channel activity where fluoxetine is used as a pharmacological probe to determine IC50, not to characterize its pharmacokinetic disposition parameters (CL, V, ka). |
| PGx | Wojtovich_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of fluoxetine (inhibition of mKATP channels) on cardioprotection in a rat model, but does not report any pharmacokinetic or pharmacodynamic parameters influenced by specific gene variants or genotypes (pharmacogenomics). |
| popPK | Xie_2023 | irrelevant | 0 | 0 | The paper is an environmental toxicology and bioremediation study on microalgae, not a pharmacokinetic study of fluoxetine. |
| PGx | Xie_2023 | not_relevant | 0 | 0 | The paper studies the toxicity and bioremediation of fluoxetine by microalgae, not human pharmacogenomics or pharmacokinetics. |
| popPK | Yang_2022 | irrelevant | 1 | 0 | The study focuses on the PK of Jiaotai Pill components, explicitly stating no significant difference in Fluoxetine PK, and no quantitative PK parameters for fluoxetine are provided in the evidence. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The study investigates a pharmacokinetic drug-drug interaction (Jiaotai Pills and Fluoxetine) in rats, not a pharmacogenomic effect of a gene variant on Fluoxetine's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluoxetine%5D&body=Drug%3A%20fluoxetine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fluoxetine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:05 UTC</sub>
