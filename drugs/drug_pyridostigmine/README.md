<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;pyridostigmine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyridostigmine_Seng2009_reference&quot;,&quot;label&quot;:&quot;Seng_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Seng2009_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyridostigmine_Hosseini2018_reference&quot;,&quot;label&quot;:&quot;Hosseini_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Hosseini2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyridostigmine_Thakkar2017_reference&quot;,&quot;label&quot;:&quot;Thakkar_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# pyridostigmine

- **generic name:** pyridostigmine
- **ATC codes:** `N07AA02`
- **DrugBank:** [DB00545](https://go.drugbank.com/drugs/DB00545) · **PubChem:** [CID 4991](https://pubchem.ncbi.nlm.nih.gov/compound/4991)
- **molar mass:** 181.2117 g/mol (C9H13N2O2) — DrugBank
- **groups:** approved, investigational

## About

Pyridostigmine is an acetylcholinesterase inhibitor used primarily for myasthenia gravis. It is typically taken by mouth or given by injection, though oral absorption is poor. It is widely used and appears on the WHO essential medicines list.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q419472](https://www.wikidata.org/wiki/Q419472), [Wikipedia](https://en.wikipedia.org/wiki/Pyridostigmine?oldid=1381274385) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pyridostigmine | parent | 181.212 | C9H13N2O2 | DrugBank | [4991](https://pubchem.ncbi.nlm.nih.gov/compound/4991) | Seng_2009, Tan_2012 |

## Start here

> **Seng_2009_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> healthy Chinese males, n = 50. [Run it in the simulator](drugs/drug_pyridostigmine/Pyridostigmine_Seng2009_reference.md?tab=Simulation) · [record](drugs/drug_pyridostigmine/Pyridostigmine_Seng2009_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Seng_2009_reference](drugs/drug_pyridostigmine/Pyridostigmine_Seng2009_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Seng KY et al., Retrospective population pharmacokineti…, The Journal of pharmacy and… (2009) | [10.1211/jpp/61.09.0008](https://doi.org/10.1211/jpp/61.09.0008) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Hosseini_2018_reference](drugs/drug_pyridostigmine/Pyridostigmine_Hosseini2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hosseini I et al., gPKPDSim: a SimBiology&lt;sup&gt;®&lt;/sup&gt;-base…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-017-9562-9](https://doi.org/10.1007/s10928-017-9562-9) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Tan_2012_reference](drugs/drug_pyridostigmine/Pyridostigmine_Tan2012_reference.md) | — | 1-compartment (no model) | 3 | Tan QY et al., Role of a novel pyridostigmine bromide-…, Archives of pharmacal resea… (2012) | [10.1007/s12272-012-0313-6](https://doi.org/10.1007/s12272-012-0313-6) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Thakkar_2017_reference](drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Marino_1998_RBC_AChE](drugs/drug_pyridostigmine/pd_Marino_1998_RBC_AChE.md) | red blood cell acetylcholinesterase activity ← pyridostigmine · direct Emax (saturable) effect | — | Marino MT et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (1998) | [10.1002/j.1552-4604.1998.tb04420.x](https://doi.org/10.1002/j.1552-4604.1998.tb04420.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Stein_1997_HR](drugs/drug_pyridostigmine/pd_Stein_1997_HR.md) | decrease in heart rate ← pyridostigmine · direct linear effect | — | Stein RD et al., Bradycardia produced by pyridostigmine…, Canadian journal of anaesth… (1997) | [10.1007/BF03012778](https://doi.org/10.1007/BF03012778) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR](drugs/drug_pyridostigmine/pd_Yamamoto_1996_HR.md) | heart rate ← pyridostigmine · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Donati_1987_2_T1](drugs/drug_pyridostigmine/pd_Donati_1987_2_T1.md) | first twitch height biomarker turnover ← pyridostigmine | — | Donati F et al., Neostigmine, pyridostigmine and edropho…, Canadian journal of anaesth… (1987) | [10.1007/BF03010517](https://doi.org/10.1007/BF03010517) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hosseini_2018_muscular_response](drugs/drug_pyridostigmine/pd_Hosseini_2018_muscular_response.md) | percent gain of muscular response ← pyridostigmine · indirect response — drug inhibits the loss of percent gain of muscular response | model (no simulator) | Hosseini I et al., gPKPDSim: a SimBiology&lt;sup&gt;®&lt;/sup&gt;-base…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-017-9562-9](https://doi.org/10.1007/s10928-017-9562-9) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Seng_2009_RBC_AChE](drugs/drug_pyridostigmine/pd_Seng_2009_RBC_AChE.md) | red blood cell acetylcholinesterase (AChE) activity ← pyridostigmine · direct Emax (saturable) effect | model (no simulator) | Seng KY et al., Retrospective population pharmacokineti…, The Journal of pharmacy and… (2009) | [10.1211/jpp/61.09.0008](https://doi.org/10.1211/jpp/61.09.0008) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | **PON2** | `Q321` · EC50 | metabolism | [Parween_2021](drugs/drug_pyridostigmine/pgx_Parween_2021_PON2_Q321.md) | Parween F et al., Association between human paraoxonase 2…, PloS one (2021) | [10.1371/journal.pone.0258879](https://doi.org/10.1371/journal.pone.0258879) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:14 | 0:03 | 1/3/0 | 6/0/0 | 0/0/1 | 196/63 | einfracz / qwen3.8-27b | 15 | 5/10 | 14/1 | 0 |

## Coverage

- **PubMed hits:** 110 matched, 73 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 1  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2026 | irrelevant | 0 | 0 | The paper is a review of vincristine-induced neurotoxicity where pyridostigmine is mentioned only as a symptomatic treatment for autonomic dysfunction, not as a subject of pharmacokinetic study. |
| PGx | Ahmed_2026 | not_relevant | 0 | 0 | The paper reviews vincristine neurotoxicity and mentions pyridostigmine only as a symptomatic treatment for autonomic dysfunction, with no analysis of pharmacogenomic effects on its PK/PD parameters. |
| popPK | Aquilonius_1983 | irrelevant | 3 | 0 | The paper reports plasma concentrations and dose-response relationships but does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2, ka) or a compartmental/population-PK model for pyridostigmine. |
| PGx | Aquilonius_1983 | not_relevant | 0 | 0 | The paper reports inter-individual variability in PK/PD parameters and dose-response curves but does not link these effects to specific gene variants or genotypes (pharmacogenomics). |
| popPK | Bartkowski_1987 | irrelevant | 0 | 0 | This is an in vitro mechanistic study measuring neuromuscular reversal potency (ED50), not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for pyridostigmine. |
| PGx | Bartkowski_1987 | not_relevant | 0 | 0 | The paper describes in vitro pharmacology and does not report any genetic variants or pharmacogenomic effects on pyridostigmine. |
| popPK | Bartling_2005 | irrelevant | 0 | 0 | The study is an in vitro investigation of the protective effects of metoclopramide and ranitidine on AChE inhibition by VX, using pyridostigmine only as background context rather than measuring its pharmacokinetic parameters. |
| PGx | Bartling_2005 | not_relevant | 0 | 0 | The study evaluates the chemical interaction of drugs (metoclopramide/ranitidine) with AChE in vitro, not a pharmacogenomic effect. |
| PGx | Botta_2021 | not_relevant | 0 | 0 | HLA genotype is linked to pembrolizumab irAE risk (myositis/myasthenia), not to any PK/PD parameter of pyridostigmine. |
| popPK | Buck_1991 | irrelevant | 0 | 0 | This is a review of nondepolarizing neuromuscular blocking agents; pyridostigmine is mentioned only as a reversal agent, not as the subject of a PK study. |
| PGx | Buck_1991 | not_relevant | 0 | 0 | The paper is a general review of nondepolarizing neuromuscular blocking agents and mentions pyridostigmine only as a general class of reversal agents; it does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Capacio_2001 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for diazepam, not pyridostigmine, which was only used as a pre-treatment agent in the soman exposure protocol. |
| PGx | Capacio_2001 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of diazepam, not pyridostigmine, and does not report any genetic variants or pharmacogenomic effects. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The study models the pharmacokinetics of tacrolimus (an immunosuppressant), with pyridostigmine mentioned only as a co-administered medication (covariate) and not as the subject of PK analysis. |
| PGx | Chen_2017 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of tacrolimus, not pyridostigmine, and identifies hematocrit/BUN as covariates rather than gene variants. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper reports a population PK/PD model for tacrolimus in myasthenia gravis patients, where pyridostigmine is mentioned only as a concomitant medication and not the subject of PK analysis. |
| PGx | Chen_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of tacrolimus, while pyridostigmine is only mentioned as a concurrent medication and excluded from covariate analysis. |
| popPK | Cheshire_2019 | irrelevant | 0 | 0 | The paper is a review on the treatment of orthostatic hypotension and does not contain pharmacokinetic parameters for pyridostigmine. |
| PGx | Cheshire_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapy for orthostatic hypotension and does not report specific pharmacogenomic effects on the PK or PD parameters of pyridostigmine. |
| popPK | Choi_2004 | irrelevant | 0 | 0 | Pyridostigmine is only used as a test agent in an in-vitro enzyme inhibition study for permethrin, with no pharmacokinetic parameters reported. |
| PGx | Choi_2004 | not_relevant | 0 | 0 | The study reports that pyridostigmine does not inhibit the hydrolysis of trans-permethrin and does not involve any genetic variants or pharmacogenomic analysis. |
| popPK | Choi_2013 | irrelevant | 0 | 0 | This is a pharmacodynamic (EEG sigmoid Emax) study of sevoflurane; pyridostigmine is only used for neuromuscular reversal with no PK parameters for it. |
| popPK | Donati_1987 | irrelevant | 0 | 0 | The study reports dose-response data (ED50) for neuromuscular blockade reversal, not quantitative pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PGx | Donati_1987 | not_relevant | 0 | 10 | The paper describes a pharmacological dose-response study and does not report any pharmacogenomic effects based on genetic variants. |
| popPK | Donati_1987_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of reversal agents for neuromuscular blockade and does not report pharmacokinetic parameters (CL, V, t1/2) for pyridostigmine. |
| PGx | Donati_1987_2 | not_relevant | 0 | 0 | The study investigates dose-response relationships of reversal agents in adults without any genetic stratification or pharmacogenomic analysis. |
| popPK | Eisenkraft_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of vecuronium in myasthenia gravis patients, where pyridostigmine is only a background co-administered medication, not the subject of PK analysis. |
| PGx | Eisenkraft_1990 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of vecuronium in myasthenia gravis patients, not the PK/PD effects of pyridostigmine itself. |
| popPK | Golomb_2008 | irrelevant | 1 | 0 | This is a narrative review of epidemiological evidence linking acetylcholinesterase inhibitors to Gulf War illnesses; it does not report quantitative pharmacokinetic parameter values for pyridostigmine. |
| PGx | Golomb_2008 | not_relevant | 3 | 2 | The paper discusses genetic variation affecting the clearance (PK) of acetylcholinesterase inhibitors in general and links it to illness, but it is an epidemiological review that does not provide specific fitted quantitative pharmacokinetic parameters for pyridostigmine. |
| popPK | Haley_1999 | irrelevant | 0 | 0 | The paper is a genetic/epidemiological study associating PON1 polymorphisms with neurologic symptoms; it mentions pyridostigmine only in the context of historical exposure/toxicity and reports no pharmacokinetic parameters (CL, V, ka, t1/2) for the drug. |
| PGx | Haley_1999 | not_relevant | 2 | 2 | The paper examines the association between PON1 variants and neurologic symptom complexes (clinical outcomes) and toxicity history, but does not report changes in specific pharmacokinetic (e.g., AUC, t1/2) or pharmacodynamic (e.g., cholinesterase inhibition curves, dose-response) parameters of pyridostigmine itself. |
| popPK | Hennis_1984 | relevant | 8 | 1 | The study reports PK parameters (Cl, Vdss) for pyridostigmine in dogs, but the specific numeric values are described in the abstract text without being explicitly listed, implying the quantitative data resides in the full text or tables not provided. |
| PGx | Hennis_1984 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of pyridostigmine and its metabolites in dogs but does not report any pharmacogenomic effects or associations with gene variants. |
| popPK | Hodgson_2005 | irrelevant | 0 | 0 | The paper is a review of in vitro human metabolism studies (microsomes/cells) and does not report in vivo pharmacokinetic parameters (CL, V, t1/2) for pyridostigmine. |
| PGx | Hodgson_2005 | not_relevant | 0 | 0 | The paper is a review discussing the general context of human metabolism studies for deployment-related chemicals, including pyridostigmine, but does not report specific data, effect sizes, or findings on how genetic variants alter the PK or PD of pyridostigmine. |
| popPK | Hosseini_2018 | irrelevant | 0 | 0 | This is a software tool paper (gPKPDSim) with example PK parameters for other drugs, not pyridostigmine; no pyridostigmine data present. |
| popPK | Hrvat_2020 | irrelevant | 0 | 0 | The paper is a review on chemical warfare nerve agents and does not contain pharmacokinetic data for pyridostigmine. |
| PGx | Hrvat_2020 | not_relevant | 0 | 0 | The paper is a review on the general pathophysiology and treatment of nerve agent poisoning, containing no specific data on pharmacogenomic variants affecting pyridostigmine PK or PD. |
| popPK | Jaklitsch_1990 | irrelevant | 2 | 0 | Pyridostigmine is included as one of several reversal agents in a simulation model, but it is a comparator/co-administered agent rather than the sole subject, and no specific numeric PK parameter values for pyridostigmine are reported in the evidence. |
| PGx | Jaklitsch_1990 | not_relevant | 0 | 0 | The paper describes a physiological simulation model for drug interactions and does not report any pharmacogenomic effects of gene variants on pyridostigmine pharmacokinetics or pharmacodynamics. |
| popPK | Jusko_1994 | irrelevant | 0 | 0 | The paper is a pharmacodynamic review using pyridostigmine only as an example of a drug that can be modeled by indirect response models, without reporting any quantitative pharmacokinetic parameters for pyridostigmine. |
| PGx | Jusko_1994 | not_relevant | 0 | 0 | The paper discusses the pharmacodynamic modeling of pyridostigmine using indirect response models but does not report any pharmacogenomic effects or gene-variant interactions. |
| popPK | Kelsall_2004 | irrelevant | 0 | 0 | The study is an epidemiological investigation of symptom prevalence in veterans and does not report pharmacokinetic parameters for pyridostigmine. |
| PGx | Kelsall_2004 | not_relevant | 0 | 0 | The paper investigates symptom prevalence associated with pyridostigmine exposure but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kerr_2015 | irrelevant | 0 | 0 | This is a review of Gulf War illness epidemiology and pathogenesis; it mentions pyridostigmine bromide as a potential exposure but does not report any pharmacokinetic parameters or quantitative disposition data. |
| PGx | Kerr_2015 | not_relevant | 0 | 0 | The paper provides a general overview of Gulf War illness and mentions genetic variability in the context of exposure interactions, but it does not report specific pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of pyridostigmine. |
| popPK | Ki_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of cerebral oxygen saturation in carotid endarterectomy patients and does not involve pyridostigmine or its pharmacokinetics. |
| PGx | Ki_2018 | not_relevant | 0 | 0 | The paper analyzes the effect of end-tidal CO2 and clinical covariates (HTN, SBP) on cerebral oxygen saturation during carotid endarterectomy, with no mention of pyridostigmine or pharmacogenomics. |
| popPK | Komloova_2010 | irrelevant | 0 | 0 | The paper is an in-vitro structure-activity review where pyridostigmine is used only as a commercial standard comparator, not as the subject of pharmacokinetic analysis. |
| PGx | Komloova_2010 | not_relevant | 0 | 0 | The paper reviews structure-activity relationships for acetylcholinesterase inhibitors and does not report pharmacogenomic effects of pyridostigmine. |
| popPK | Krall_2026 | irrelevant | 0 | 0 | Clinical outcomes study of efgartigimod; pyridostigmine is only a co-medication with no PK parameters reported. |
| popPK | Levy_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of caramiphen, using pyridostigmine only as a co-administered agent in a combination therapy model without reporting specific quantitative PK parameters for pyridostigmine. |
| PGx | Levy_2007 | not_relevant | 0 | 0 | The paper discusses extrapolating PK/PD data from animals to humans for pyridostigmine but does not report any pharmacogenomic effects based on gene variants. |
| popPK | Lorke_2019 | irrelevant | 1 | 0 | This is a review of prophylactic efficacy against organophosphate exposure, not a pharmacokinetic study reporting quantitative disposition parameters for pyridostigmine. |
| PGx | Lorke_2019 | not_relevant | 0 | 0 | The paper reviews the prophylactic efficacy of reversible cholinesterase inhibitors against organophosphates but does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Lukey_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for diazepam, not pyridostigmine. |
| PGx | Lukey_1991 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of diazepam in rhesus monkeys and does not report any gene variant effects on pyridostigmine. |
| popPK | Mansour_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug interactions with acetylcholine receptors, reporting binding constants (Ki/IC50) rather than population pharmacokinetic parameters. |
| PGx | Mansour_1987 | not_relevant | 0 | 0 | The paper studies biochemical interactions in a reconstituted AChR system and does not involve human gene variants/genotypes or pharmacogenomics. |
| popPK | Marino_1998 | relevant | 10 | 3 | The paper describes a population PK study with a two-compartment model for pyridostigmine in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence text. |
| PGx | Marino_1998 | not_relevant | 0 | 0 | The study reports the influence of gender and weight on pharmacokinetics, not a genetic variant or genotype. |
| popPK | Matteo_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of edrophonium, not pyridostigmine, which is only mentioned as a comparator in a previous study. |
| PGx | Matteo_1990 | not_relevant | 0 | 10 | The study investigates age-related pharmacokinetics of edrophonium, not pharmacogenomic effects of pyridostigmine. |
| popPK | Morris_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of edrophonium, not pyridostigmine; pyridostigmine is mentioned only as a comparator in the conclusion. |
| PGx | Morris_1981 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of edrophonium in renal transplant patients and draws an analogy to pyridostigmine, but it does not report a pharmacogenomic effect on the PK/PD of pyridostigmine. |
| popPK | Pérez-Sánchez_2021 | irrelevant | 0 | 0 | The paper is an in-vitro computational and enzymatic study identifying new acetylcholinesterase inhibitors, using pyridostigmine only as a structural reference for virtual screening; it reports no pharmacokinetic parameters for pyridostigmine. |
| PGx | Pérez-Sánchez_2021 | not_relevant | 0 | 0 | The paper focuses on the structure-based design and in vitro screening of new acetylcholinesterase inhibitors, with no data on pharmacogenomic effects on the PK or PD of pyridostigmine. |
| popPK | Ricordel_2000 | irrelevant | 0 | 0 | The paper is a review of chemical weapon antidotes and contains no pharmacokinetic data or quantitative disposition parameters for pyridostigmine. |
| PGx | Ricordel_2000 | not_relevant | 0 | 0 | The text is a general overview of chemical weapon antidotes and does not discuss pharmacogenomics or specific genetic effects on pyridostigmine PK/PD. |
| popPK | Rocha_2014 | irrelevant | 0 | 0 | The study reports ecotoxicological endpoint values (EC50, IC50, LOEC) for Daphnia magna, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for pyridostigmine. |
| PGx | Rocha_2014 | not_relevant | 0 | 0 | The paper studies the environmental ecotoxicology of pyridostigmine in Daphnia magna and does not involve human genetics or pharmacogenomics. |
| popPK | Rupp_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 4-aminopyridine in dogs, with pyridostigmine mentioned only as a comparator without quantitative parameters reported. |
| PGx | Rupp_1983 | not_relevant | 0 | 0 | The paper studies the PK/PD of 4-aminopyridine in dogs, not pyridostigmine, and does not report any pharmacogenomic effects. |
| PGx | Seng_2009 | not_relevant | 0 | 0 | The study is a retrospective population PK/PD analysis that found no correlation between tested demographic or biological covariates and model parameters, and it does not report any genotype-based pharmacogenomic effects. |
| popPK | Shih_1991 | irrelevant | 0 | 0 | The study is a behavioral pharmacology analysis in rats focusing on operant performance and toxicity, not pharmacokinetic modeling. |
| PGx | Shih_1991 | not_relevant | 0 | 0 | The study investigates the behavioral effects of pyridostigmine in rats without examining any genetic variants or pharmacogenomic factors. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | This is a pharmacodynamic study of sevoflurane recovery; pyridostigmine is only mentioned as a co-administered reversal agent with no PK parameters. |
| popPK | Stein_1997 | irrelevant | 0 | 0 | This is a pharmacodynamic study measuring heart rate and cholinesterase activity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Stein_1997 | not_relevant | 0 | 0 | The study is an animal pharmacology experiment investigating receptor mechanisms of bradycardia; it contains no human pharmacogenomic data or gene variants affecting PK/PD. |
| popPK | Strelnik_2016 | irrelevant | 0 | 0 | The paper focuses on the in vitro enzyme inhibition and acute toxicity (LD50) of novel pyridostigmine analogs, not the quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) of pyridostigmine itself. |
| PGx | Strelnik_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition and acute toxicity data for new pyridostigmine analogs, not pharmacogenomic effects on the PK or PD of pyridostigmine. |
| PGx | Tan_2012 | not_relevant | 0 | 0 | The study investigates formulation improvements (nanocomplex) for bioavailability in rats and does not report any gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Thakkar_2017 | irrelevant | 0 | 0 | The study is a pharmacokinetic analysis of 3,4-diaminopyridine (3,4-DAP) and its metabolite, not pyridostigmine. |
| PGx | Thakkar_2017 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of 3,4-diaminopyridine, not pyridostigmine, and genotype did not significantly explain variability in the final model. |
| popPK | Usmani_2002 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of DEET, and pyridostigmine is only used as a probe/co-administered compound in inhibition experiments, not as the subject drug for PK parameter estimation. |
| PGx | Usmani_2002 | not_relevant | 0 | 0 | The paper investigates the metabolism of DEET, and while it mentions pyridostigmine only as a substance tested for its potential to inhibit DEET metabolism in microsomes, it does not report a pharmacogenomic effect of a gene variant on pyridostigmine's pharmacokinetics or pharmacodynamics. |
| popPK | Usmani_2003 | irrelevant | 0 | 0 | The study investigates the effect of pyridostigmine on testosterone metabolism in an in-vitro system, not the pharmacokinetic disposition of pyridostigmine itself. |
| PGx | Usmani_2003 | not_relevant | 0 | 0 | The paper investigates CYP3A4-mediated metabolism of testosterone and the effect of various chemicals (including pyridostigmine) on this specific metabolic pathway, not the pharmacokinetics or pharmacodynamics of pyridostigmine itself. |
| popPK | Wadman_2020 | irrelevant | 0 | 0 | This is a clinical review of drug treatments for spinal muscular atrophy, and while pyridostigmine is mentioned as a treatment under investigation, no pharmacokinetic parameters are reported. |
| PGx | Wadman_2020 | not_relevant | 0 | 0 | The paper is a systematic review on SMA treatments and mentions pyridostigmine only in a list of trials not yet available for analysis; it does not report any pharmacogenomic effect on PK or PD parameters. |
| popPK | Wehrenberg_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of pyridostigmine on growth hormone release in rats, with no reporting of pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Wehrenberg_1992 | not_relevant | 0 | 0 | The paper investigates the physiological mechanism of action (somatostatin inhibition) in rats but does not report any pharmacogenomic effects (gene variants/genotypes) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wilson_2002 | irrelevant | 0 | 0 | The study is mechanistic and toxicological, focusing on enzyme inhibition (AChE/NTE) rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume for pyridostigmine. |
| PGx | Wilson_2002 | not_relevant | 0 | 0 | The paper investigates the toxicology and interaction of pyridostigmine with nerve agents in animal models, not pharmacogenomic effects on PK or PD. |
| popPK | Yamamoto_1996 | irrelevant | 2 | 0 | The study is a toxicodynamic analysis focusing on cardiac effects (heart rate) and in-vitro enzyme kinetics (Ki, Kd), rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, half-life) for pyridostigmine. |
| PGx | Yamamoto_1996 | not_relevant | 0 | 0 | The paper investigates cardiac toxicity in rats using a standard toxicodynamic model and does not involve any genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Yamamoto_1996_2 | irrelevant | 4 | 4 | This is a pharmacodynamic study in rats that reports only qualitative half-life rankings and a generic volume of distribution range (0.4-0.6 L/kg) for the group of drugs, without providing specific quantitative PK parameters (CL, specific V, ka) for pyridostigmine. |
| PGx | Yamamoto_1996_2 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamics of cholinesterase inhibitors in rats but does not investigate the influence of gene variants or genotypes on PK or PD parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | Snake venom toxin protection study in mice; pyridostigmine not studied and no PK parameters reported. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PGx | unknown_2017 | not_relevant | 0 | 0 | The text is a generic header for "2017 Annual Meetings" with no specific data or content regarding pyridostigmine pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyridostigmine%5D&body=Drug%3A%20pyridostigmine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyridostigmine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 05:12 UTC</sub>
