<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;varenicline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Varenicline_Fediuk2021_reference&quot;,&quot;label&quot;:&quot;Fediuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Varenicline_Glatard2019_reference&quot;,&quot;label&quot;:&quot;Glatard_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Glatard2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# varenicline

- **generic name:** varenicline
- **ATC codes:** `N07BA03`, `S01XA28`
- **DrugBank:** [DB01273](https://go.drugbank.com/drugs/DB01273) · **PubChem:** [CID 5310966](https://pubchem.ncbi.nlm.nih.gov/compound/5310966)
- **molar mass:** 211.268 g/mol (C13H13N3) — DrugBank
- **groups:** approved, investigational

## About

Varenicline is a nicotinic acetylcholine receptor partial agonist used to treat nicotine dependence and dry eye syndrome. It is administered orally as tablets. The drug is authorized in the European Union and available as a generic medication in other regions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q411330](https://www.wikidata.org/wiki/Q411330), [Wikipedia](https://en.wikipedia.org/wiki/Varenicline?oldid=1375978318) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| varenicline | parent | 211.268 | C13H13N3 | DrugBank | [5310966](https://pubchem.ncbi.nlm.nih.gov/compound/5310966) | Faessel_2009, Fediuk_2021, Glatard_2019, Ravva_2009 |

## Start here

> **Fediuk_2021_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> adolescent smokers, n = 49. [Run it in the simulator](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md?tab=Simulation) · [record](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Fediuk_2021_reference](drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+4 cov.) | Fediuk DJ et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12645](https://doi.org/10.1002/psp4.12645) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Faessel_2009_reference](drugs/drug_varenicline/Varenicline_Faessel2009_reference.md) | — | 1-compartment (no model) | 4 | Faessel H et al., Pharmacokinetics, safety, and tolerabil…, Clinical therapeutics (2009) | [10.1016/j.clinthera.2009.01.003](https://doi.org/10.1016/j.clinthera.2009.01.003) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: biomarker_kinetics_as_drug_pk</sub> | [Glatard_2019_reference](drugs/drug_varenicline/Varenicline_Glatard2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Glatard A et al., Influence of body weight and UGT2B7 pol…, European journal of clinica… (2019) | [10.1007/s00228-019-02662-9](https://doi.org/10.1007/s00228-019-02662-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Ravva_2009_reference](drugs/drug_varenicline/Varenicline_Ravva2009_reference.md) | — | 1-compartment (no model) | 7 | Ravva P et al., Population pharmacokinetic analysis of…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03520.x](https://doi.org/10.1111/j.1365-2125.2009.03520.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Fediuk_2021_CAR9_12](drugs/drug_varenicline/pd_Fediuk_2021_CAR9_12.md) | continuous abstinence rate (CAR) at weeks 9-12 ← varenicline · direct linear effect | — | Fediuk DJ et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12645](https://doi.org/10.1002/psp4.12645) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Fediuk_2021_NV](drugs/drug_varenicline/pd_Fediuk_2021_NV.md) | nausea/vomiting incidence ← varenicline · direct linear effect | — | Fediuk DJ et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12645](https://doi.org/10.1002/psp4.12645) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_NS2B_NS3_activity](drugs/drug_varenicline/pd_Lin_2023_NS2B_NS3_activity.md) | DENV-2 NS2B-NS3 protease enzymatic activity (FRET assay) ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity](drugs/drug_varenicline/pd_Lin_2023_infectivity.md) | DENV-2 infectivity in Vero cells (NS4B-positive/DAPI ratio) ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_2](drugs/drug_varenicline/pd_Lin_2023_infectivity_2.md) | DENV-2 infectivity in A549 cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_3](drugs/drug_varenicline/pd_Lin_2023_infectivity_3.md) | DENV-1 infectivity in Vero cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_4](drugs/drug_varenicline/pd_Lin_2023_infectivity_4.md) | DENV-2 infectivity, post-entry stage (time-of-addition) ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_5](drugs/drug_varenicline/pd_Lin_2023_infectivity_5.md) | DENV-2 infectivity, entry stage (time-of-addition) ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_6](drugs/drug_varenicline/pd_Lin_2023_infectivity_6.md) | DENV-2 infectivity, pretreatment mode ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_infectivity_7](drugs/drug_varenicline/pd_Lin_2023_infectivity_7.md) | DENV-2 infectivity, attachment mode ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_virus_yield](drugs/drug_varenicline/pd_Lin_2023_virus_yield.md) | DENV-2 virus yield in Vero cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_virus_yield_2](drugs/drug_varenicline/pd_Lin_2023_virus_yield_2.md) | DENV-2 virus yield in A549 cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lin_2023_virus_yield_3](drugs/drug_varenicline/pd_Lin_2023_virus_yield_3.md) | DENV-1 virus yield in Vero cells ← varenicline · inhibition effect | — | Lin CL et al., The Antiviral Activity of Varenicline a…, Biomedicines (2023) | [10.3390/biomedicines11102754](https://doi.org/10.3390/biomedicines11102754) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ravva_2015_craving](drugs/drug_varenicline/pd_Ravva_2015_craving.md) | craving ← varenicline · direct linear effect | — | Ravva P et al., Pharmacokinetic-pharmacodynamic modelin…, Nicotine & tobacco research… (2015) | [10.1093/ntr/ntu154](https://doi.org/10.1093/ntr/ntu154) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Glatard_2019_CO](drugs/drug_varenicline/pd_Glatard_2019_CO.md) | expired carbon monoxide ← varenicline · indirect response — drug stimulates the production of expired carbon monoxide | — | Glatard A et al., Influence of body weight and UGT2B7 pol…, European journal of clinica… (2019) | [10.1007/s00228-019-02662-9](https://doi.org/10.1007/s00228-019-02662-9) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Lummis_2011_R_max](drugs/drug_varenicline/pd_Lummis_2011_R_max.md) | membrane potential-sensitive dye response (human 5-HT3 receptor) biomarker turnover ← varenicline | — | Lummis SC et al., Varenicline is a potent agonist of the…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185306](https://doi.org/10.1124/jpet.111.185306) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Lummis_2011_R_max_2](drugs/drug_varenicline/pd_Lummis_2011_R_max_2.md) | membrane potential-sensitive dye response (mouse 5-HT3 receptor) biomarker turnover ← varenicline | — | Lummis SC et al., Varenicline is a potent agonist of the…, The Journal of pharmacology… (2011) | [10.1124/jpet.111.185306](https://doi.org/10.1124/jpet.111.185306) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:14 | 0:15 | 1/3/0 | 17/0/0 | 0/0/0 | 6,035/1,233 | einfracz / qwen3.8-27b | 6 | 3/3 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ravva_2015.pdf` | Ravva P et al., Pharmacokinetic-pharmacodynamic modelin…, Nicotine & tobacco research… (2015) | popPK | 8 | [10.1093/ntr/ntu154](https://doi.org/10.1093/ntr/ntu154) | [25145377](https://pubmed.ncbi.nlm.nih.gov/25145377) | The study is a PK/PD modeling study of varenicline in humans using a 2-compartment model, but the specific quantitative parameter values (CL, V, Q, etc.) are not explicitly listed in the provided abstract/evidence text. |

<sub>queue written 2026-11-24 07:14 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Faessel_2009 | not_relevant | 0 | 0 | The study focuses on pharmacokinetics in adolescents and does not report any pharmacogenomic effect (gene variant/genotype) on PK parameters. |
| PGx | Fediuk_2021 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics and exposure-response analyses but does not include genetic variant data or assess pharmacogenomic effects on varenicline PK/PD. |
| popPK | Foa_2017 | irrelevant | 0 | 0 | The study is a clinical trial of smoking cessation efficacy in PTSD patients, containing no pharmacokinetic data or disposition parameters for varenicline. |
| PGx | Foa_2017 | not_relevant | 0 | 0 | The study investigates clinical outcomes (abstinence rates) and psychological symptom severity, not pharmacokinetic or pharmacodynamic parameters modulated by genetic variants. |
| popPK | Gowin_2016 | irrelevant | 0 | 0 | The study investigates neurocognitive effects (fMRI) of varenicline and contains no pharmacokinetic parameters or disposition data. |
| PGx | Gowin_2016 | not_relevant | 0 | 0 | The study investigates the neurocognitive effects of varenicline but does not report any genetic variants or pharmacogenomic data affecting its PK/PD parameters. |
| popPK | Green_2024 | irrelevant | 0 | 0 | The study investigates varenicline as a pharmacological intervention for plant alkaloid intoxication, focusing on toxicity and receptor interaction rather than pharmacokinetic disposition parameters. |
| PGx | Green_2024 | not_relevant | 0 | 0 | The paper investigates the interaction between varenicline and toxic plant alkaloids in animals, not the influence of human genetic variants on varenicline's pharmacokinetics or pharmacodynamics. |
| popPK | Hone_2017 | irrelevant | 0 | 0 | This is a mechanistic electrophysiology study on adrenal chromaffin cells reporting EC50 and action potential firing data, not pharmacokinetic parameters like clearance or volume. |
| PGx | Hone_2017 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of varenicline on cellular receptors but does not report any pharmacogenomic effects (gene variant influence) on PK or PD parameters. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper investigating the mechanism of l-tetrahydropalmatine on nicotinic acetylcholine receptors, with varenicline only mentioned as background context, and contains no pharmacokinetic parameters. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The study investigates the direct pharmacological interaction between l-Tetrahydropalmatine and nicotinic receptors in cell culture, reporting no pharmacogenomic variations or PK/PD parameters for varenicline. |
| popPK | Indurthi_2021 | irrelevant | 0 | 0 | The paper discusses receptor agonist efficiency (pharmacodynamics/structural biology) for varenicline, not pharmacokinetic disposition parameters. |
| PGx | Indurthi_2021 | not_relevant | 0 | 0 | The paper discusses pharmacodynamic properties of varenicline but does not report any genetic variants or genotypes. |
| popPK | Johnstone_2022 | irrelevant | 0 | 0 | This is a clinical pharmacodynamics/behavioral study assessing tobacco craving and withdrawal, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Johnstone_2022 | not_relevant | 0 | 0 | The paper investigates the effects of varenicline on craving and withdrawal in schizophrenia patients versus controls, but does not report pharmacogenomic differences (gene variants) affecting PK or PD parameters. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | This is an in-vitro antiviral study of varenicline against dengue virus; no PK disposition parameters (CL, V, ka, half-life, or PK model) are reported. |
| popPK | Lummis_2011 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamic interaction of varenicline with serotonin 5-HT3 receptors in oocytes and cell lines, not its pharmacokinetic disposition parameters. |
| PGx | Lummis_2011 | not_relevant | 0 | 0 | The study reports receptor pharmacology (agonism at 5-HT3) but does not investigate a pharmacogenomic variant or its effect on PK/PD parameters. |
| popPK | Oswald_2026 | irrelevant | 0 | 0 | The study focuses on weight change patterns following smoking cessation, not on the pharmacokinetic parameters of varenicline. |
| PGx | Oswald_2026 | not_relevant | 0 | 0 | The paper analyzes weight change trajectories after smoking cessation in a trial using varenicline, but it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of the drug. |
| popPK | Ponzoni_2014 | irrelevant | 0 | 0 | The study investigates behavioral and receptor binding effects of cytisine derivatives and varenicline in zebrafish, without reporting any pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| PGx | Ponzoni_2014 | not_relevant | 0 | 0 | The paper reports preclinical pharmacological studies in zebrafish and does not contain any data on human genetic variants affecting pharmacokinetics or pharmacodynamics. |
| PGx | Ravva_2009 | not_relevant | 0 | 0 | The paper is a population pharmacokinetic analysis focusing on physiological covariates like renal function, body size, and age, but it does not assess gene variants or genotypes. |
| popPK | Ravva_2010 | irrelevant | 2 | 0 | The paper focuses on exposure-response (efficacy/tolerability) using AUC, but does not report quantitative PK disposition parameters (CL, V, ka) or a compartmental model for varenicline. |
| PGx | Ravva_2010 | not_relevant | 1 | 2 | The study analyzes pharmacokinetic and pharmacodynamic relationships for varenicline using standard patient characteristics (age, gender, race), but it does not report on the influence of genetic variants or genotypes on PK or PD parameters. |
| popPK | Ravva_2015 | relevant | 8 | 0 | The study is a PK/PD modeling study of varenicline in humans using a 2-compartment model, but the specific quantitative parameter values (CL, V, Q, etc.) are not explicitly listed in the provided abstract/evidence text. |
| PGx | Ravva_2015 | not_relevant | 0 | 0 | The study characterizes the standard PK/PD relationship of varenicline on craving in smokers but does not investigate any gene variants, genotypes, or phenotypes. |
| popPK | Zammit_2023 | irrelevant | 0 | 0 | This is a PET kinetic modeling study of radioligands (2-FA, Nifene) in mice; varenicline is only mentioned as a chemical comparator, with no PK parameters for varenicline itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvarenicline%5D&body=Drug%3A%20varenicline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_varenicline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 07:12 UTC</sub>
