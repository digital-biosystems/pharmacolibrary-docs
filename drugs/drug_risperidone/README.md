<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;risperidone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Ivaturi2017_phase_3_estimate&quot;,&quot;label&quot;:&quot;Ivaturi_2017_phase_3_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Ivaturi2017_phase_3_estimate.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Ivaturi2017_pooled_sad_mad_estimate&quot;,&quot;label&quot;:&quot;Ivaturi_2017_pooled_sad_mad_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Ivaturi2017_pooled_sad_mad_estimate.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Ivaturi2017_reference&quot;,&quot;label&quot;:&quot;Ivaturi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/Risperidone_Ivaturi2017_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Ivaturi_2017_PANSS&quot;,&quot;label&quot;:&quot;Ivaturi_2017 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_risperidone/pd_Ivaturi_2017_PANSS.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# risperidone

- **generic name:** risperidone
- **ATC codes:** `N05AX08`
- **DrugBank:** [DB00734](https://go.drugbank.com/drugs/DB00734) · **PubChem:** [CID 5073](https://pubchem.ncbi.nlm.nih.gov/compound/5073)
- **molar mass:** 410.4845 g/mol (C23H27FN4O2) — DrugBank
- **groups:** approved, investigational

## About

Risperidone is an atypical antipsychotic used to treat conditions such as schizophrenia, bipolar disorder, and autism spectrum disorder. It is taken by mouth, which is well-absorbed, or by subcutaneous and intramuscular injection for long-acting treatment. It is widely used, is listed as an essential medicine, and is authorised in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q412443](https://www.wikidata.org/wiki/Q412443), [Wikipedia](https://en.wikipedia.org/wiki/Risperidone?oldid=1386085543) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| risperidone | parent | 410.485 | C23H27FN4O2 | DrugBank | [5073](https://pubchem.ncbi.nlm.nih.gov/compound/5073) | Ivaturi_2017, Kozielska_2012, Wang_2024 |
| 9-OH risperidone | metabolite | 426 | — | the paper | — | Ivaturi_2017 |
| paliperidone (9-OH-risperidone) | metabolite | 426.492 | C23H27FN4O3 | PubChem | [115237](https://pubchem.ncbi.nlm.nih.gov/compound/115237) | Kozielska_2012, Wang_2024 |

## Start here

> **Kozielska_2012_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> rats. [Run it in the simulator](drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md?tab=Simulation) · [record](drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: unreported model parameter default(s): q12/q21 (hepatic flow, 90 L/h)</sub> | [Kozielska_2012_reference](drugs/drug_risperidone/Risperidone_Kozielska2012_reference.md) | ▶ model + simulator | parent 2-cmt + liver + 1 metabolite (2-cmt) | 15 | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Ivaturi_2017_phase_3_estimate](drugs/drug_risperidone/Risperidone_Ivaturi2017_phase_3_estimate.md) | ▶ model + simulator | 1-compartment, oral | 6 | Ivaturi V et al., Exposure-response analysis after subcut…, British journal of clinical… (2017) | [10.1111/bcp.13246](https://doi.org/10.1111/bcp.13246) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [↳ pooled_sad_mad_estimate](drugs/drug_risperidone/Risperidone_Ivaturi2017_pooled_sad_mad_estimate.md) | ▶ model + simulator | 1-compartment, oral | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [↳ reference](drugs/drug_risperidone/Risperidone_Ivaturi2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 (+2 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Perlstein_2022_reference](drugs/drug_risperidone/Risperidone_Perlstein2022_reference.md) | — | parent + metabolite (no model) | 0 | Perlstein I et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1078](https://doi.org/10.1002/cpdd.1078) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Perlstein_2025_reference](drugs/drug_risperidone/Risperidone_Perlstein2025_reference.md) | — | parent + metabolite (no model) | 0 | Perlstein I et al., Population Pharmacokinetic Modeling of…, Neurology and therapy (2025) | [10.1007/s40120-025-00723-z](https://doi.org/10.1007/s40120-025-00723-z) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Toja-Camba_2021_reference](drugs/drug_risperidone/Risperidone_TojaCamba2021_reference.md) | — | parent + metabolite (no model) | 0 | Toja-Camba FJ et al., Review of Pharmacokinetics and Pharmaco…, Pharmaceutics (2021) | [10.3390/pharmaceutics13070935](https://doi.org/10.3390/pharmaceutics13070935) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Wang_2024_consta](drugs/drug_risperidone/Risperidone_Wang2024_consta.md) | — | parent + metabolite (no model) | 6 | Wang W et al., Population Pharmacokinetic Analysis to…, Neurology and therapy (2024) | [10.1007/s40120-024-00578-w](https://doi.org/10.1007/s40120-024-00578-w) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ rykindo](drugs/drug_risperidone/Risperidone_Wang2024_rykindo.md) | — | parent + metabolite (no model) | 7 (+1 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Huang_2024_PANSS](drugs/drug_risperidone/pd_Huang_2024_PANSS.md) | PANSS total scores ← risperidone · direct sigmoid Emax (Hill) effect | — | Huang Z et al., Population Pharmacodynamic Models of Ri…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17020148](https://doi.org/10.3390/ph17020148) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Huang_2024_PRL](drugs/drug_risperidone/pd_Huang_2024_PRL.md) | prolactin levels ← risperidone · direct Emax (saturable) effect | — | Huang Z et al., Population Pharmacodynamic Models of Ri…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17020148](https://doi.org/10.3390/ph17020148) |
| <span class="pk-badge pk-badge--blue">Simulated</span> | [Ivaturi_2017_PANSS](drugs/drug_risperidone/pd_Ivaturi_2017_PANSS.md) | PANSS total score ← total active moiety · direct Emax (saturable) effect | ▶ model + simulator | Ivaturi V et al., Exposure-response analysis after subcut…, British journal of clinical… (2017) | [10.1111/bcp.13246](https://doi.org/10.1111/bcp.13246) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kozielska_2012_5_HT2A_RO](drugs/drug_risperidone/pd_Kozielska_2012_5_HT2A_RO.md) | 5-HT2A receptor occupancy ← risperidone (and paliperidone, competitive binding) · target-mediated drug disposition | — | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kozielska_2012_D2_RO](drugs/drug_risperidone/pd_Kozielska_2012_D2_RO.md) | D2 receptor occupancy ← risperidone (and paliperidone, competitive binding) · target-mediated drug disposition | — | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lee_1999_EEG](drugs/drug_risperidone/pd_Lee_1999_EEG.md) | difference in the absolute power in the delta frequency band for the F3 lead ← risperidone · direct linear effect | — | Lee DY et al., Pharmacokinetic-pharmacodynamic modelin…, Psychopharmacology (1999) | [10.1007/s002130051003](https://doi.org/10.1007/s002130051003) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Cooper_2023_probability_of_serotonin_toxicity_occurring](drugs/drug_risperidone/pd_Cooper_2023_probability_of_serotonin_toxicity_occurring.md) | probability of serotonin toxicity occurring ← risperidone · categorical (graded) response model | — | Cooper J et al., Predicting serotonin toxicity in seroto…, Clinical toxicology (Philad… (2023) | [10.1080/15563650.2022.2151455](https://doi.org/10.1080/15563650.2022.2151455) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ivaturi_2017_CGI_S](drugs/drug_risperidone/pd_Ivaturi_2017_CGI_S.md) | CGI-S ← total active moiety · categorical (graded) response model | — | Ivaturi V et al., Exposure-response analysis after subcut…, British journal of clinical… (2017) | [10.1111/bcp.13246](https://doi.org/10.1111/bcp.13246) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ji_2016_PANSS](drugs/drug_risperidone/pd_Ji_2016_PANSS.md) | Positive and negative syndrome scale (PANSS) score ← risperidone and 9-hydroxy-risperidone · delayed effect through transit (transduction) compartments | — | Ji S et al., Population pharmacokinetic-pharmacodyna…, International journal of cl… (2016) | [10.5414/CP202498](https://doi.org/10.5414/CP202498) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:22 | 0:06 | 1/8/0 | 8/1/0 | 0/0/0 | 4,305/172 | einfracz / qwen3.8-27b | 21 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 125 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 9  ·  extracted 0  ·  needs review 1  ·  rejected 8  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alenazi_2024 | irrelevant | 0 | 0 | The study investigates the in-vitro immunotoxicity and mitochondrial effects of risperidone on human monocytes, not its pharmacokinetic disposition parameters. |
| PGx | Alenazi_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of risperidone-induced immunotoxicity in monocytes without analyzing any gene variants or pharmacogenomic factors. |
| popPK | Carrascosa-Arteaga_2025 | irrelevant | 2 | 2 | The paper concerns paliperidone/paliperidone palmitate (a different drug), not risperidone as the subject; garbled text shows paliperidone PK parameters only. |
| popPK | Cooper_2023 | irrelevant | 0 | 0 | Risperidone is only a co-ingested agent in a toxicity study, not the subject of a PK parameter investigation. |
| PGx | Cooper_2023 | not_relevant | 0 | 0 | The paper investigates the epidemiology of serotonin toxicity in overdose, focusing on dose and co-ingestants, but does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of risperidone. |
| popPK | Huang_2024 | irrelevant | 2 | 2 | This is a population pharmacodynamic (Emax) model of PANSS scores and prolactin, not a PK model; no CL/V/ka/half-life for risperidone, and plasma risperidone concentrations were not even measured. |
| popPK | Ji_2016 | relevant | 10 | 2 | The paper describes a population PK/PD model for risperidone, but the specific numeric parameter values are not present in the provided abstract/evidence text. |
| popPK | Karatza_2022 | relevant | 8 | 4 | Population PK external evaluation of risperidone/9-OH-risperidone models in pediatric patients, but the actual parameter values (CL, V) live in Supplementary Table 1 and figures not provided; only RMSE/MPE bias metrics appear. |
| popPK | Le_2025 | irrelevant | 0 | 0 | This is an efficacy/response IPD meta-analysis of risperidone in dementia with no PK disposition parameters (no CL, V, ka, half-life, or PK model); no numeric PK values present. |
| popPK | Lee_1999 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling (EEG effects) and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) or a full PK model in the provided text. |
| PGx | Lee_1999 | not_relevant | 0 | 0 | The study investigates the standard pharmacokinetic-pharmacodynamic relationship of risperidone on EEG in a small sample of healthy males and does not report any data on genetic variants or pharmacogenomic effects. |
| popPK | Magyar_2002 | irrelevant | 0 | 0 | The study investigates electrophysiological effects (cardiac channel blockade) in animal tissues, not pharmacokinetic disposition parameters (CL, V, ka). |
| PGx | Magyar_2002 | not_relevant | 0 | 0 | The study investigates electrophysiological effects in animal tissues and does not report any human pharmacogenomic variants or genotype-phenotype associations for risperidone's PK/PD parameters. |
| popPK | Megens_1994 | irrelevant | 0 | 0 | The paper is a review focused on pharmacodynamics (receptor binding, potency) and explicitly mentions "optimal pharmacokinetic properties" but provides no quantitative PK parameters (CL, V, ka, t1/2) in the text. |
| PGx | Megens_1994 | not_relevant | 0 | 0 | The paper is a review of the general pharmacodynamic profile of risperidone and does not report on the effect of gene variants or genotypes on its PK/PD parameters. |
| popPK | Németh_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing cariprazine and risperidone for schizophrenia and contains no pharmacokinetic parameter estimates (CL, V, etc.) for risperidone. |
| PGx | Németh_2017 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing the efficacy of cariprazine and risperidone, containing no data on pharmacogenomics or gene-variant effects on PK/PD. |
| popPK | Olsen_2008 | irrelevant | 2 | 0 | The study is a PK/PD model in rats focusing on receptor occupancy and EC50 predictions, and it does not report standard quantitative disposition parameters (CL, V, ka) for risperidone. |
| PGx | Olsen_2008 | not_relevant | 0 | 0 | The study reports pharmacokinetic and pharmacodynamic modelling for several antipsychotics, including risperidone, but it does not investigate or report how a specific gene variant, genotype, or phenotype alters a PK or PD parameter for that drug. |
| popPK | Pilla_2013 | irrelevant | 0 | 0 | The study is a PKPD modeling paper focused on pharmacodynamic effects (PANSS scores) and receptor occupancy, and does not report or extract quantitative pharmacokinetic disposition parameters (CL, V, etc.) for risperidone. |
| PGx | Pilla_2013 | not_relevant | 0 | 0 | The paper models PKPD for antipsychotics but does not report the influence of any specific gene variant or genotype on these parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D&body=Drug%3A%20risperidone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_risperidone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 16:40 UTC</sub>
