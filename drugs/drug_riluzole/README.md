<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;riluzole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Riluzole_Nguyen2021_reference&quot;,&quot;label&quot;:&quot;Nguyen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_riluzole/Riluzole_Nguyen2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Riluzole_Berges2015_reference&quot;,&quot;label&quot;:&quot;Berges_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_riluzole/Riluzole_Berges2015_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Zhao_2016_FMP_blue_fluorescence&quot;,&quot;label&quot;:&quot;Zhao_2016 \u00b7 FMP blue fluorescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_riluzole/pd_Zhao_2016_FMP_blue_fluorescence.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# riluzole

- **generic name:** riluzole
- **ATC codes:** `N07XX02`
- **DrugBank:** [DB00740](https://go.drugbank.com/drugs/DB00740) · **PubChem:** [CID 5070](https://pubchem.ncbi.nlm.nih.gov/compound/5070)
- **molar mass:** 234.198 g/mol (C8H5F3N2OS) — DrugBank
- **groups:** approved, investigational

## About

Riluzole is a neuroprotective agent indicated for the treatment of amyotrophic lateral sclerosis. It is administered orally in tablet or liquid forms, including a fast-dissolving film version. The medication is authorised in the European Union for use in motor neuron diseases.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q415744](https://www.wikidata.org/wiki/Q415744), [Wikipedia](https://en.wikipedia.org/wiki/Riluzole?oldid=1384990033) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| riluzole | parent | 234.198 | C8H5F3N2OS | DrugBank | [5070](https://pubchem.ncbi.nlm.nih.gov/compound/5070) | Bruno_1997, Chow_2012, Nguyen_2021 |

## Start here

> **Nguyen_2021_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> adults with acute spinal cord injury. [Run it in the simulator](drugs/drug_riluzole/Riluzole_Nguyen2021_reference.md?tab=Simulation) · [record](drugs/drug_riluzole/Riluzole_Nguyen2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Bruno_1997 · CL</text><circle cx="438.8" cy="30.0" r="4" fill="#ef6c00"><title>Bruno_1997 · CL: 51.4 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Nguyen_2021 · CL/F</text><circle cx="433.1" cy="46.0" r="4" fill="#ef6c00"><title>Nguyen_2021 · CL/F: 49.5 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Bruno_1997_reference](drugs/drug_riluzole/Riluzole_Bruno1997_reference.md) | — | 1-compartment (no model) | 1 | Bruno R et al., Population pharmacokinetics of riluzole…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90047-3](https://doi.org/10.1016/S0009-9236(97)90047-3) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_cmax</sub> | [Nguyen_2021_reference](drugs/drug_riluzole/Riluzole_Nguyen2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Nguyen A et al., Longitudinal Impact of Acute Spinal Cor…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1876](https://doi.org/10.1002/jcph.1876) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Berges_2015_reference](drugs/drug_riluzole/Riluzole_Berges2015_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Berges A et al., Ozanezumab dose selection for amyotroph…, PloS one (2015) | [10.1371/journal.pone.0117355](https://doi.org/10.1371/journal.pone.0117355) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Chow_2012_reference](drugs/drug_riluzole/Riluzole_Chow2012_reference.md) | — | 1-compartment (no model) | 5 | Chow DS et al., Pharmacology of riluzole in acute spina…, Journal of neurosurgery. Sp… (2012) | [10.3171/2012.5.AOSPINE12112](https://doi.org/10.3171/2012.5.AOSPINE12112) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Parada-Turska_2006_proliferation_of_synoviocytes](drugs/drug_riluzole/pd_Parada_Turska_2006_proliferation_of_synoviocytes.md) | proliferation of synoviocytes biomarker turnover ← riluzole | — | Parada-Turska J et al., Effect of glutamate receptor antagonist…, European journal of pharmac… (2006) | [10.1016/j.ejphar.2006.02.009](https://doi.org/10.1016/j.ejphar.2006.02.009) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Cai_2024_OS](drugs/drug_riluzole/pd_Cai_2024_OS.md) | overall survival (OS) ← riluzole · time-to-event model | — | Cai R et al., Accelerating drug development for amyot…, Orphanet journal of rare di… (2024) | [10.1186/s13023-024-03057-5](https://doi.org/10.1186/s13023-024-03057-5) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Feng_2025_MADRS](drugs/drug_riluzole/pd_Feng_2025_MADRS.md) | Change in MADRS score from baseline ← riluzole + SSRIs/SNRIs (oral regimen) · direct log-linear effect | model (no simulator) | Feng Y et al., Quantitative evaluation of multiple tre…, The international journal o… (2025) | [10.1093/ijnp/pyaf007](https://doi.org/10.1093/ijnp/pyaf007) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhao_2016_FMP_blue_fluorescence](drugs/drug_riluzole/pd_Zhao_2016_FMP_blue_fluorescence.md) | ATX (10 nM)-induced membrane depolarization (fluorescence, % of ATX response) ← riluzole · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Zhao F et al., Development of a Rapid Throughput Assay…, Marine drugs (2016) | [10.3390/md14020036](https://doi.org/10.3390/md14020036) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:20 | 0:06 | 2/2/0 | 4/0/0 | 0/0/0 | 3,716/155 | einfracz / qwen3.8-27b | 30 | 7/23 | 30/0 | 0 |

## Coverage

- **PubMed hits:** 181 matched, 118 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbasi_2017 | irrelevant | 0 | 0 | Electrophysiology study of Purkinje cell firing in ataxic rats; no PK parameters (CL, V, ka, half-life, or population-PK model) for riluzole are reported. |
| popPK | Abdul_2002 | irrelevant | 0 | 0 | This is a mechanistic in vitro study investigating voltage-gated sodium channels in prostate cancer, using riluzole as a pharmacological agent to test biological activity, rather than a pharmacokinetic study. |
| PGx | Abdul_2002 | not_relevant | 0 | 0 | The paper studies the effect of riluzole as a voltage-gated sodium channel blocker on prostate cancer cell proliferation in vitro, which is a pharmacological mechanism study, not a pharmacogenomic analysis of how genetic variants alter drug PK or PD. |
| popPK | Ahn_2005 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study examining channel inhibition (IC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Ahn_2005 | not_relevant | 0 | 0 | The paper reports the mechanism of action of riluzole on ion channels, not a pharmacogenomic effect (gene variant impact) on PK or PD parameters. |
| PGx | Ajroud-Driss_2007 | not_relevant | 2 | 10 | The study investigates CYP1A1/2 polymorphisms but concludes there is no association with riluzole pharmacokinetic parameters. |
| popPK | Albertini_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in vitro biological evaluation of riluzole-rasagiline hybrids, with no pharmacokinetic parameters reported for riluzole. |
| PGx | Albertini_2022 | not_relevant | 0 | 0 | The paper reports the design and pharmacological activity of new chemically synthesized drug hybrids, not the effect of human gene variants on the PK or PD of riluzole. |
| popPK | Albo_2004 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro electrophysiology investigation of riluzole's interaction with AMPA receptors and contains no pharmacokinetic or disposition parameters. |
| PGx | Albo_2004 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic mechanism of action of riluzole on AMPA receptors in a standard mouse cell model, with no mention of genetic variants or pharmacogenomics. |
| popPK | Ashton_1997 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study reporting IC50 values for neuroprotection, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Ashton_1997 | not_relevant | 0 | 0 | The paper reports in vitro neuroprotective effects of lubeluzole and riluzole but contains no pharmacogenomic data or analysis of gene variants affecting PK/PD. |
| popPK | Berges_2015 | irrelevant | 0 | 0 | This is a PKPD study of ozanezumab, not riluzole; riluzole is only mentioned as the approved ALS comparator drug. |
| popPK | Bhat_2025 | irrelevant | 0 | 0 | This is a MIDD review about other drugs (nivolumab, atezolizumab, mavacamten); riluzole is not the subject and no riluzole PK parameters appear. |
| popPK | Bissaro_2018 | irrelevant | 0 | 0 | The study is mechanistic (in vitro/computational) reporting an IC50 for kinase inhibition, not pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Bissaro_2018 | not_relevant | 0 | 0 | The paper reports the mechanism of action (inhibition of CK1δ) but does not contain pharmacogenomic data linking genetic variants to PK/PD parameters. |
| popPK | Biton_2012 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacology study focusing on the mechanism of action of loxapine on Slack channels, using riluzole only as a reference agonist, and reports no pharmacokinetic parameters for riluzole. |
| PGx | Biton_2012 | not_relevant | 0 | 0 | The paper investigates the pharmacological interaction of loxapine with Slack channels, using riluzole only as a reference agonist, and does not report any pharmacogenomic effects on riluzole's PK or PD parameters. |
| popPK | Boireau_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of riluzole's effect on dopamine release in mouse striatal slices, reporting IC50 values rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Boireau_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of riluzole in an in-vitro model but does not report any association with a specific gene variant or genotype. |
| PGx | Bruno_1997 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics based on covariates like gender and smoking status, but does not analyze any genetic variants or pharmacogenomic factors. |
| popPK | Cai_2024 | irrelevant | 0 | 0 | This is a disease-course (OS/ALSFRS-R) model of ALS placebo groups; riluzole appears only as a covariate, with no PK parameters (CL, V, ka, etc.) for riluzole. |
| popPK | Calabresi_2000 | irrelevant | 0 | 0 | The paper is an in vitro electrophysiology study testing neuroprotective effects in rat brain slices, not a pharmacokinetic study reporting disposition parameters for riluzole. |
| PGx | Calabresi_2000 | not_relevant | 0 | 0 | The paper describes preclinical pharmacological mechanisms and neuroprotection of riluzole but does not report any effect of gene variants or genotypes on PK or PD parameters. |
| popPK | Caputi_2003 | irrelevant | 0 | 0 | The paper focuses on the electrophysiological actions of 202W92 on rat neurons; riluzole is only mentioned as a comparator in the introduction and no PK data is reported. |
| PGx | Caputi_2003 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of a sodium channel inhibitor (202W92) on neurons and does not report any pharmacogenomic analysis or gene-variant-dependent changes in the PK or PD of riluzole. |
| popPK | Centonze_1998 | irrelevant | 0 | 0 | The study focuses on electrophysiological effects of riluzole on striatal neurons, not pharmacokinetic parameters. |
| PGx | Centonze_1998 | not_relevant | 0 | 0 | The paper describes the general electrophysiological mechanism of riluzole and does not report any effect of a gene variant on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Chen_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling and cytotoxicity in cell lines, not a pharmacokinetic study. |
| PGx | Chen_2006 | not_relevant | 0 | 0 | The paper investigates the in vitro mechanism of action of riluzole on calcium signaling in cell lines and does not involve gene variants, genotypes, or pharmacogenomics. |
| PGx | Chow_2012 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes in riluzole in acute spinal cord injury patients, but does not report any pharmacogenomic (gene variant) effects. |
| popPK | Chow_2023 | irrelevant | 10 | 0 | The abstract describes the development of a time-varying population PK model for riluzole in humans, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided text, only qualitative descriptions of the model structure and a PK/PD exposure range. |
| PGx | Chow_2023 | not_relevant | 0 | 0 | The study investigates the PK/PD of riluzole in spinal cord injury patients but does not report any pharmacogenomic analysis (e.g., gene variants, CYP1A2/2C8/2D6 genotypes) or their impact on PK/PD parameters. |
| popPK | Cudkowicz_2010 | irrelevant | 0 | 0 | This is a review/opinion paper discussing clinical trial design for ALS and does not report original quantitative pharmacokinetic parameters for riluzole. |
| PGx | Cudkowicz_2010 | not_relevant | 0 | 0 | The text discusses clinical trial design and the general efficacy of riluzole, but does not report any pharmacogenomic effects of genetic variants on riluzole's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cummings_2022 | irrelevant | 0 | 0 | This is a review of basket trials in neurodegenerative diseases; riluzole is only mentioned as a background medication, with no PK parameters reported. |
| popPK | De_2000 | irrelevant | 0 | 0 | The paper reports pharmacodynamic ED50 values for anticonvulsant activity in mice, not pharmacokinetic parameters (CL, V, Ka, t1/2) for riluzole. |
| PGx | De_2000 | not_relevant | 0 | 0 | The study investigates the mechanism of action (NMDA/AMPA receptor interaction) of riluzole in a mouse model, not the effect of a specific gene variant on the drug's PK or PD parameters. |
| popPK | Debono_1993 | irrelevant | 0 | 0 | The study reports electrophysiological mechanism of action (IC50 values) in Xenopus oocytes, not pharmacokinetic disposition parameters. |
| PGx | Debono_1993 | not_relevant | 0 | 0 | The paper reports in vitro electrophysiology in Xenopus oocytes and does not investigate genetic variants or pharmacogenomic effects on PK/PD. |
| popPK | Deffois_1996 | irrelevant | 0 | 0 | The study reports in-vitro pharmacodynamic data (IC50 values for sodium channel inhibition) and does not contain any pharmacokinetic parameters (CL, V, t1/2, ka) for riluzole. |
| PGx | Deffois_1996 | not_relevant | 0 | 0 | The paper investigates the direct pharmacological mechanism of sodium channel blockade in rat synaptosomes and does not report any human genetic variants or pharmacogenomic effects on riluzole's PK or PD. |
| popPK | Dergai_2026 | irrelevant | 0 | 0 | The study is a proteomic biomarker discovery project in ALS patients, with no pharmacokinetic modeling or quantitative disposition parameters (CL, V, t1/2) for riluzole. |
| PGx | Dergai_2026 | not_relevant | 0 | 0 | The paper focuses on proteomic biomarkers for ALS progression and notes a drug effect on a protein, but does not report a pharmacogenomic effect (gene variant influencing PK/PD). |
| popPK | Di_2023 | irrelevant | 1 | 0 | The paper is an in vitro-in vivo extrapolation (IVIVE) study focused on enzyme kinetics (CYP1A1 CLint) rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka, t1/2) for riluzole. |
| PGx | Di_2023 | not_relevant | 0 | 0 | The paper describes in vitro-in vivo extrapolation of CYP1A1 clearance using recombinant enzymes and does not report any gene variant or genotype effects on pharmacokinetic parameters. |
| popPK | Digles_2024 | irrelevant | 0 | 0 | This is an in-vitro SLC transporter assay/tool-compound survey with no riluzole PK parameters or any riluzole disposition data. |
| popPK | Djeddi_2023 | irrelevant | 0 | 0 | This is a computational drug–target interaction prediction paper with no riluzole PK parameters; "Vd" here refers to graph embedding vectors, not volumes of distribution. |
| popPK | Elias_2026 | irrelevant | 0 | 0 | This is a review of gene-editing therapies for neurological disorders; riluzole is only mentioned as a co-administered ALS drug, with no PK parameters reported. |
| popPK | Erickson_2017 | irrelevant | 0 | 0 | The paper is a mechanistic in vitro study focusing on glutamine transport inhibition (IC50), not pharmacokinetic parameters like clearance or volume for riluzole. |
| PGx | Erickson_2017 | not_relevant | 0 | 0 | The paper describes the mechanism of action of riluzole on glutamine transport in neurons and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Estevez_1995 | irrelevant | 0 | 0 | The study is an in-vitro neurotoxicity assessment using cell cultures and does not report pharmacokinetic parameters. |
| PGx | Estevez_1995 | not_relevant | 0 | 0 | The study investigates the neuroprotective effects of riluzole on excitotoxicity in rat motoneuron cultures and does not report any pharmacogenomic effects or changes in PK/PD parameters associated with genetic variants. |
| popPK | Feng_2025 | irrelevant | 0 | 0 | This is a pharmacodynamic (MADRS efficacy) model-based meta-analysis of treatment-resistant depression; riluzole is only one co-administered comparator arm, with no PK parameters for riluzole reported. |
| PGx | Findley_2023 | not_relevant | 2 | 2 | Genotype refers to AD mouse models (AβPP/PS1, APPNL-F), not pharmacogenomic variants affecting riluzole PK/PD; effects reported are on glucose/cognition, not drug PK/PD parameters. |
| popPK | Flores_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the investigational drug DNL343, not riluzole. |
| PGx | Flores_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of DNL343 (a new drug) in ALS models and does not report on riluzole or pharmacogenomic effects on PK/PD parameters. |
| PGx | González-Sánchez_2025 | not_relevant | 0 | 0 | Review of ALS pathophysiology and treatment; riluzole mentioned only as therapy with no gene-variant effect on PK/PD parameters. |
| popPK | Grados_2013 | irrelevant | 0 | 0 | The paper is a review of glutamate-modulating drugs for OCD and does not report any original quantitative pharmacokinetic parameters for riluzole. |
| PGx | Grados_2013 | not_relevant | 0 | 0 | This is a review of glutamate-modulating drugs and genetic candidates for OCD, containing no specific pharmacogenomic data showing how a gene variant alters the PK or PD of riluzole. |
| popPK | Grunnet_2001 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper reporting ion channel modulation (IC50/activation) and contains no pharmacokinetic disposition parameters (CL, V, t1/2) for riluzole. |
| PGx | Grunnet_2001 | not_relevant | 0 | 0 | The paper describes the pharmacological interaction between riluzole and SK3 channels but does not investigate the influence of gene variants or genotypes on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | He_2002 | irrelevant | 0 | 0 | The paper reports in vitro electrophysiological mechanisms (GABA(A) receptor potentiation) rather than pharmacokinetic disposition parameters. |
| PGx | He_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic mechanism of riluzole on GABA receptors but does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| popPK | Hockly_2006 | irrelevant | 0 | 0 | The study is a preclinical mechanistic/efficacy trial in mice that reports tissue concentration levels but does not provide quantitative population-pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Hockly_2006 | not_relevant | 0 | 0 | The study evaluates the therapeutic efficacy of riluzole in a Huntington's disease mouse model and reports standard PK/PD parameters (EC50, steady-state levels) but does not investigate the impact of any specific gene variant or genotype on these parameters. |
| PGx | Huin_2024 | not_relevant | 0 | 0 | Riluzole is only an adjusted covariate; the paper examines caffeine metabolism gene variants on ALS outcomes, not on riluzole PK/PD parameters. |
| popPK | Jan_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular calcium signaling, not a pharmacokinetic study of riluzole disposition. |
| PGx | Jan_2002 | not_relevant | 0 | 0 | The paper investigates the cellular mechanism of action (calcium influx) of riluzole in osteosarcoma cells and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kamal_2015 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro and uses riluzole as a pharmacological tool to modulate NMDARs, without reporting any pharmacokinetic parameters (CL, V, ka, etc.) for riluzole. |
| PGx | Kamal_2015 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of riluzole as an NMDA receptor antagonist on cell proliferation in leukemic cell lines, but it does not report any pharmacogenomic data (gene variants or genotypes) linking to these PK or PD parameters. |
| popPK | Kawano_2020 | irrelevant | 0 | 0 | This is a retrospective study on liver injury risk factors, not a pharmacokinetic study; it discusses clearance qualitatively but reports no quantitative PK parameters (CL, V, t1/2) for riluzole. |
| PGx | Kawano_2020 | not_relevant | 0 | 0 | The study identifies environmental and drug-drug risk factors for liver injury but does not investigate genetic variants or genotypes. |
| popPK | Kononenko_2004 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of riluzole's mechanism of action on sodium channels in rat neurons, containing no pharmacokinetic parameters. |
| PGx | Kononenko_2004 | not_relevant | 0 | 0 | The paper describes the pharmacological effect of riluzole on sodium currents in rat neurons but does not investigate any genetic variant or genotype associated with pharmacokinetic or pharmacodynamic differences. |
| popPK | Lee_2011 | irrelevant | 0 | 0 | The paper is a preclinical study on anticancer mechanisms (glutamatergic pathway targeting) and does not report any pharmacokinetic parameters for riluzole. |
| PGx | Lee_2011 | not_relevant | 0 | 0 | The paper investigates the combinatorial efficacy of riluzole with other inhibitors in melanoma models based on B-RAF genotype, but it does not report how a gene variant changes a pharmacokinetic or pharmacodynamic parameter of riluzole itself. |
| popPK | Li_2025 | irrelevant | 0 | 0 | This is a Phase I clinical trial evaluating efficacy and safety (response rates, survival) of a combination therapy, with no reporting of pharmacokinetic parameters such as clearance, volume of distribution, or half-life for riluzole. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper is a Phase I clinical trial reporting safety and efficacy of a drug combination in colorectal cancer, with no analysis of gene variants or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Majumder_2025 | irrelevant | 0 | 0 | This is a mechanistic study of curcumin and estrogen in an ALS mouse model; riluzole is only mentioned as a background approved drug, not as the subject of PK analysis. |
| PGx | Majumder_2025 | not_relevant | 0 | 0 | The paper focuses on a mouse model of ALS and the effects of a curcumin formulation on TDP-43 and estrogen levels, containing no data on human genetic variants affecting the pharmacokinetics or pharmacodynamics of riluzole. |
| PGx | Malik_2025 | not_relevant | 0 | 0 | The paper is a PBPK drug–drug interaction study of CYP1A1/1A2 inhibitors; no gene variant/genotype/phenotype effect on riluzole PK or PD is reported. |
| popPK | Mantz_1994 | irrelevant | 0 | 0 | The study is an in-vitro investigation of GABA uptake inhibition by striatal synaptosomes, reporting only IC50 values, and contains no pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for riluzole. |
| PGx | Mantz_1994 | not_relevant | 0 | 0 | The paper describes the pharmacological mechanism of action of riluzole in rats but does not investigate any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Mateias_2024 | irrelevant | 0 | 0 | This is an in vitro patch-clamp study of cenobamate (a different drug) on cardiac ion channels, with no riluzole PK parameters. |
| popPK | Matsumura_2014 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic interactions of anticonvulsants using isobolographic analysis and does not report pharmacokinetic parameters for riluzole. |
| PGx | Matsumura_2014 | not_relevant | 0 | 0 | The paper is a review on the pharmacodynamic interactions of anticonvulsants using isobolographic analysis and does not discuss riluzole or pharmacogenomic effects. |
| popPK | McDonnell_2012 | irrelevant | 0 | 0 | The paper describes in vitro metabolic profiling of riluzole prodrugs and synthesis, with no in vivo pharmacokinetic disposition parameters (CL, V, t1/2) reported for riluzole. |
| PGx | McDonnell_2012 | not_relevant | 0 | 0 | The paper proposes prodrugs to mitigate CYP1A2-mediated clearance variability but does not report specific pharmacogenomic effects (e.g., genotype-specific PK parameters) for riluzole. |
| popPK | Milane_2009 | irrelevant | 1 | 0 | The study focuses on mechanistic transporter interactions (BCRP) in vitro and in animal brain transport, without reporting standard pharmacokinetic parameters (CL, V, t1/2) for riluzole. |
| PGx | Milane_2009 | not_relevant | 1 | 0 | The paper investigates the drug-transporter interaction between riluzole and BCRP in animal and cell models, not the effect of human genetic variants on riluzole pharmacokinetics or pharmacodynamics. |
| popPK | Milane_2010 | irrelevant | 0 | 0 | The study investigates P-gp expression and function in mice, reporting only relative fold-changes in drug disposition rather than quantitative PK parameters like clearance or volume. |
| PGx | Milane_2010 | not_relevant | 3 | 8 | The study investigates the impact of a disease-associated genetic mutation on drug PK in an animal model, which is not a human pharmacogenomic effect on a therapeutic parameter. |
| popPK | Mohapatra_2025 | irrelevant | 0 | 0 | This is a review of Alzheimer's disease treatments; riluzole is not the subject drug and no PK parameters for it appear. |
| popPK | Nabi_2020 | relevant | 4 | 0 | The study reports in vivo pharmacokinetic studies for riluzole nanoparticles, but the specific quantitative disposition parameters (CL, V, etc.) are not present in the provided text or abstract. |
| PGx | Nabi_2020 | not_relevant | 0 | 0 | The study investigates a nanoparticle drug delivery formulation and does not assess pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Nalicho_2026 | irrelevant | 0 | 0 | In silico QSAR/ADMET study of thymoquinone analogs; riluzole is only mentioned as an approved ALS drug, with no PK parameters for it. |
| popPK | Pacheco-Rojas_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of channel inhibition (IC50) and does not report pharmacokinetic parameters such as clearance or volume. |
| PGx | Pacheco-Rojas_2021 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of riluzole on Kv4.2 channels in HEK cells and does not investigate genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Parada-Turska_2006 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the antiproliferative effects of riluzole on synoviocytes, reporting only IC50 values and containing no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Parada-Turska_2006 | not_relevant | 0 | 0 | The paper tests the in vitro effect of riluzole on cell proliferation (a pharmacodynamic effect) but contains no mention of gene variants, genotypes, or phenotypes, and therefore does not report a pharmacogenomic effect. |
| PGx | Paratore_2012 | not_relevant | 0 | 0 | Review on genomic drug targets in ALS; no gene variant effect on riluzole PK/PD parameters reported. |
| PGx | Park_2022 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is linked to riluzole PK or PD parameters; the study examines drug-herb combination effects on liver enzymes in SOD1 mice, not pharmacogenomics. |
| popPK | Pelletier_2018 | irrelevant | 1 | 0 | The study focuses on the development and evaluation of dipeptide prodrugs of riluzole in preclinical models, describing qualitative absorption and conversion rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka, t1/2) for the parent drug. |
| PGx | Pelletier_2018 | not_relevant | 1 | 0 | The paper describes a prodrug strategy to bypass CYP1A2 metabolic variability, but it does not report specific genotype-based differences in PK or PD parameters. |
| popPK | Ramakrishnan_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of riluzole's anticonvulsant effects in planarians, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Ramakrishnan_2013 | not_relevant | 0 | 0 | The paper studies riluzole in planarians (an invertebrate model) and does not report pharmacogenomic effects (gene variants/genotypes) on pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Richter_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of riluzole's effect on ion channels (TRPC5) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Richter_2014 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic interaction (activation of TRPC5) but contains no genetic variants or pharmacogenomic data. |
| popPK | Richter_2014_2 | irrelevant | 0 | 0 | This is a mechanistic electrophysiology study on TRPC5 channels where riluzole is used merely as a direct activator, containing no pharmacokinetic data. |
| PGx | Richter_2014_2 | not_relevant | 0 | 0 | The paper describes clemizole as an inhibitor of TRPC5 channels and mentions riluzole only as a direct activator used in electrophysiological experiments, reporting no pharmacokinetic or pharmacodynamic effects of gene variants on riluzole. |
| popPK | Saez-Atienzar_2024 | irrelevant | 0 | 0 | The study is a drug repurposing screen using in vitro cell models where riluzole serves only as a positive control, reporting no pharmacokinetic parameters for riluzole. |
| PGx | Saez-Atienzar_2024 | not_relevant | 1 | 0 | The paper focuses on the mechanism-free repurposing of acamprosate for C9orf72-ALS using genomic data to predict drug efficacy, rather than investigating how specific gene variants alter the pharmacokinetics or pharmacodynamics of riluzole. |
| popPK | Sanchez-Rodriguez_2024 | irrelevant | 0 | 0 | This is an Alzheimer's disease neuroimaging/transcriptomics/drug-repurposing study with no riluzole PK parameters; riluzole is not even a subject drug here. |
| popPK | Sanderink_1997 | irrelevant | 1 | 0 | This is an in vitro mechanistic study characterizing CYP enzymes and inhibition, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Sanderink_1997 | not_relevant | 0 | 0 | The study characterizes CYP enzyme involvement in riluzole metabolism in vitro but does not report a specific genetic variant/genotype effect on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Sankaranarayanan_2009 | irrelevant | 0 | 0 | Riluzole is used only as a structural template/comparator for a new drug (SKA-31) and no pharmacokinetic parameters are reported for it. |
| PGx | Sankaranarayanan_2009 | not_relevant | 0 | 0 | The paper reports the pharmacological design and activity of a novel potassium channel activator, not a pharmacogenomic effect on the PK or PD of riluzole. |
| popPK | Sharpee_2016 | irrelevant | 0 | 0 | The paper is a computational neuroscience proceedings list, and the only mention of riluzole (P48) is a title regarding neural network modeling, containing no pharmacokinetic data. |
| PGx | Sharpee_2016 | not_relevant | 0 | 0 | The paper is a conference program for computational neuroscience and does not report a pharmacogenomic effect on a PK/PD parameter for riluzole (the only mention is a title about modeling its effect on bursting in a network). |
| popPK | Siniscalchi_1997 | irrelevant | 0 | 0 | This is an in vitro electrophysiological study investigating cellular mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Siniscalchi_1997 | not_relevant | 0 | 0 | The paper investigates the in vitro electrophysiological mechanism of riluzole in rat neurons and does not report any genetic variants or their effects on PK/PD parameters. |
| popPK | Su_2025 | irrelevant | 0 | 0 | This is a computational pathway/network pharmacology study with no PK parameters for riluzole; riluzole only appears as a screened compound name. |
| popPK | Suresh_2016 | irrelevant | 0 | 0 | The paper is an electrophysiology study using riluzole as a pharmacological tool to block sodium channels, not a pharmacokinetic study. |
| PGx | Suresh_2016 | not_relevant | 0 | 0 | The paper is a neuroscience study using riluzole as a pharmacological tool to block sodium channels, not a pharmacogenomic study. |
| popPK | Suzuki_2019 | irrelevant | 0 | 0 | The paper is a review of familial ALS genetics and therapeutic strategies, containing no pharmacokinetic data or quantitative disposition parameters for riluzole. |
| PGx | Suzuki_2019 | not_relevant | 0 | 0 | The paper is a review of the genetics and pathomechanisms of familial ALS (SOD1, C9orf72) and does not report any pharmacogenomic effects on the PK or PD of riluzole. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The paper describes molecular dynamics simulations of drug binding to the Nav1.5 channel and does not contain any pharmacokinetic data for riluzole. |
| PGx | Tao_2025 | not_relevant | 0 | 0 | The paper focuses on the binding modes of drugs in the Nav1.5 sodium channel and does not mention riluzole or any pharmacogenomic effects. |
| popPK | Urbani_2000 | irrelevant | 0 | 0 | The study is an in-vitro patch-clamp investigation of electrophysiological mechanisms (sodium currents) in rat neurons, not a pharmacokinetic study of drug disposition. |
| PGx | Urbani_2000 | not_relevant | 0 | 0 | The paper describes the mechanism of action of riluzole on neuronal sodium channels in rat neurons but does not report any pharmacogenomic effects or human PK/PD parameters. |
| PGx | Vallikivi_2026 | not_relevant | 3 | 5 | CYP2D6 phenotype is associated with ALS survival (clinical outcome) in riluzole users, not with a PK/PD parameter of riluzole (e.g., exposure, clearance, or drug-response biomarker). |
| popPK | Wadman_2019 | irrelevant | 0 | 0 | This is a clinical efficacy review of drug treatments for spinal muscular atrophy, not a pharmacokinetic study; riluzole is only mentioned as a comparator therapy with no disposition parameters reported. |
| PGx | Wadman_2019 | not_relevant | 0 | 0 | The paper reviews clinical efficacy and safety of drug treatments (nusinersen, riluzole) for SMA, but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Wadman_2020 | irrelevant | 0 | 0 | This is a Cochrane review on drug efficacy for Spinal Muscular Atrophy, not a pharmacokinetic study, and riluzole is only mentioned as a completed trial awaiting results. |
| PGx | Wadman_2020 | not_relevant | 0 | 0 | The paper is a Cochrane review on efficacy trials for SMA and does not contain pharmacokinetic/pharmacodynamic data linked to genetic variants for riluzole. |
| popPK | Wagner_1997 | irrelevant | 5 | 4 | The paper is a review that reports qualitative and semi-quantitative PK properties (absorption %, bioavailability, Tmax) but lacks quantitative compartmental disposition parameters (CL, Vd, ka) required for a PK model. |
| PGx | Wagner_1997 | not_relevant | 1 | 1 | The paper mentions reduced clearance in Japanese subjects (population pharmacokinetics) but does not report specific gene variants or genotypes driving this difference. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The study investigates in-vitro ion channel mechanisms (Na+ and BKCa) in cultured cells, not pharmacokinetic disposition parameters. |
| PGx | Wang_2008 | not_relevant | 0 | 0 | The paper investigates the cellular mechanism of action of riluzole on ion channels in muscle cells but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Wang_2009 | irrelevant | 0 | 0 | The paper is a review of CYP1A2 enzyme structure and function, mentioning riluzole only as a substrate without providing any pharmacokinetic parameter values. |
| PGx | Wang_2009 | not_relevant | 2 | 0 | The paper mentions riluzole as a CYP1A2 substrate but does not report specific pharmacokinetic or pharmacodynamic data linked to CYP1A2 genetic variants for riluzole. |
| PGx | Wang_2026 | not_relevant | 2 | 2 | Review of Nav1.6 structure/disease roles; riluzole only mentioned as partially effective sodium current modulator, no gene variant effect on riluzole PK/PD parameters reported. |
| popPK | Wu_2009 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of the insecticide tefluthrin on ion currents, using riluzole only as a pharmacological tool to block sodium currents, not as a subject of pharmacokinetic analysis. |
| PGx | Wu_2009 | not_relevant | 0 | 0 | The paper investigates the mechanism of tefluthrin on ion currents and does not study the pharmacokinetics or pharmacodynamics of riluzole in relation to any genetic variant. |
| popPK | Xu_2001 | irrelevant | 0 | 0 | The study investigates the molecular mechanism of riluzole's interaction with potassium channels in vitro, not its pharmacokinetic disposition parameters. |
| PGx | Xu_2001 | not_relevant | 0 | 0 | The paper reports a direct electrophysiological mechanism of action of riluzole on potassium channels in cells, not a pharmacogenomic effect on PK or PD parameters. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | The paper focuses on the development of new cyclohexane-1,3-dione compounds for ALS; riluzole is mentioned only as a background comparator, and no PK parameters for riluzole are reported. |
| PGx | Zhang_2012 | not_relevant | 0 | 0 | The paper reports on the synthesis and pharmacokinetics of novel ALS compounds, containing no pharmacogenomic data on riluzole. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | In vitro pharmacology study of Nav1.7 channel antagonists; riluzole appears only as a comparator with an IC50, no PK/disposition parameters. |
| popPK | Zona_2002 | irrelevant | 0 | 0 | The study is an in vitro electrophysiology experiment measuring kainate-induced currents and channel conductance, reporting no pharmacokinetic disposition parameters (CL, V, t1/2) for riluzole. |
| PGx | Zona_2002 | not_relevant | 0 | 0 | The paper describes the pharmacological mechanism of riluzole on ion channels in rat neurons and contains no information regarding gene variants, genotypes, or pharmacogenomic effects. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PGx | unknown_2017 | not_relevant | 0 | 0 | The provided text "2017 Annual Meetings" is a generic heading and contains no information regarding riluzole, pharmacogenomics, or pharmacokinetic/pharmacodynamic parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The paper describes various unrelated drugs (T3D-959, GM6, etc.) and does not contain pharmacokinetic data for riluzole. |
| PGx | unknown_2018 | not_relevant | 0 | 0 | The paper discusses the PK/PD of T3D-959 (a PPAR agonist for Alzheimer's) and does not involve the drug riluzole. |
| popPK | van_2005 | relevant | 8 | 0 | The study reports a significant correlation between CYP1A2 activity and riluzole clearance, but specific quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) are not provided in the text, only statistical regression coefficients. |
| PGx | van_2005 | not_relevant | 3 | 8 | The study uses a phenotypic probe (caffeine) to assess CYP1A2 activity rather than genotyping a specific gene variant, thus it does not report a direct pharmacogenomic effect of a genotype on PK. |
| popPK | van_2008 | irrelevant | 3 | 0 | The paper investigates metabolic pathways and genotype associations but does not report quantitative pharmacokinetic parameter values (CL, V, ka) for riluzole. |
| PGx | van_2008 | not_relevant | 2 | 0 | The study explicitly reports that UGT1A1*28 genotype was not associated with riluzole PK parameters, indicating a lack of pharmacogenomic effect. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Briluzole%5D&body=Drug%3A%20riluzole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_riluzole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:04 UTC</sub>
