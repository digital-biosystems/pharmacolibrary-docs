<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;chloral hydrate&quot;}]"></div>

# chloral hydrate

- **generic name:** chloral hydrate
- **ATC codes:** `N05CC01`
- **DrugBank:** [DB01563](https://go.drugbank.com/drugs/DB01563) · **PubChem:** [CID 2707](https://pubchem.ncbi.nlm.nih.gov/compound/2707)
- **molar mass:** 165.403 g/mol (C2H3Cl3O2) — DrugBank
- **groups:** approved, illicit, vet_approved

## About

Chloral hydrate is a sedative and hypnotic used to treat agitation in dementia. It is given by mouth as a capsule, syrup, or solution, and is also available as a topical ointment. The drug is well absorbed orally. Once widely used, it has largely been replaced by safer alternatives but remains in use in specific settings.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q412340](https://www.wikidata.org/wiki/Q412340), [Wikipedia](https://en.wikipedia.org/wiki/Chloral_hydrate?oldid=1380109378) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Fischer_2000_Ca_2_i](drugs/drug_chloral_hydrate/pd_Fischer_2000_Ca_2_i.md) | AMPA-induced rise of intracellular Ca(2+) concentration ← chloral hydrate · inhibition effect | — | Fischer W et al., Inhibition by chloral hydrate and trich…, European journal of pharmac… (2000) | [10.1016/s0014-2999(00)00160-6](https://doi.org/10.1016/s0014-2999(00)00160-6) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Grobaski_1997_dopaminergic_neuronal_firing](drugs/drug_chloral_hydrate/pd_Grobaski_1997_dopaminergic_neuronal_firing.md) | dopaminergic neuronal firing ← chloral hydrate · direct linear effect | — | Grobaski KC et al., Responses of rat substantia nigra dopam…, British journal of pharmaco… (1997) | [10.1038/sj.bjp.0700938](https://doi.org/10.1038/sj.bjp.0700938) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:41 | 0:03 | 0/0/0 | 1/1/0 | 0/0/0 | 3,832/158 | einfracz / qwen3.8-27b | 12 | 5/6 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 97 matched, 59 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegaert_2005 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (sedation, cardiorespiratory events) rather than quantitative pharmacokinetic parameters like clearance or volume. |
| PGx | Allegaert_2005 | not_relevant | 0 | 0 | The study evaluates pharmacodynamics in a specific patient population (former preterm infants) but does not investigate the effect of genetic variants, genotypes, or pharmacogenomic phenotypes on chloral hydrate response. |
| popPK | Amano_1996 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of methamphetamine and dopamine in rats, and chloral hydrate is used solely as an anesthetic agent, not as the subject of pharmacokinetic analysis. |
| PGx | Amano_1996 | not_relevant | 0 | 0 | The study investigates the neurophysiological effects of methamphetamine on nucleus accumbens neurons and uses chloral hydrate solely as an anesthetic agent, not as a therapeutic subject of pharmacogenomic analysis. |
| popPK | Barbera_2005 | irrelevant | 0 | 0 | The paper focuses on zaleplon and only mentions chloral hydrate as a historical comparator class, providing no PK parameters for it. |
| PGx | Barbera_2005 | not_relevant | 0 | 0 | The paper reviews the benefit-risk profile of zaleplon and mentions chloral hydrate only as historical context for barbiturates, containing no data on pharmacogenomic effects. |
| popPK | Beretta_2008 | irrelevant | 0 | 0 | Chloral hydrate is only used as an ALDH inhibitor in an in-vitro nitroglycerin biochemistry study; no PK parameters for chloral hydrate are reported. |
| popPK | Bhuniya_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on CDC20 inhibitors where chloral hydrate is mentioned only as a reagent eliminated from the synthesis, not as a pharmacokinetic subject. |
| PGx | Bhuniya_2022 | not_relevant | 0 | 0 | The paper discusses chloral hydrate only as a synthetic reagent that was eliminated, not as a drug with a pharmacogenomic effect on a PK/PD parameter. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PGx | Branson_2011 | not_relevant | 0 | 0 | The paper discusses oxygen, not chloral hydrate. |
| popPK | Ciscato_2025 | irrelevant | 0 | 0 | This is a chemogenetic (CATCH) methods protocol; chloral hydrate appears only as a reagent/anesthetic, with no PK parameters. |
| popPK | Couper_2010 | irrelevant | 1 | 0 | This is a review article discussing the pharmacokinetics of chloral hydrate in the context of forensic toxicology, but the extracted evidence contains no quantitative disposition parameters (CL, V, etc.) or specific numeric values. |
| PGx | Couper_2010 | not_relevant | 0 | 0 | The paper provides a general forensic review of drugs used in sexual assault and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters for chloral hydrate or any other drug. |
| popPK | Downie_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor interactions, not a pharmacokinetic study reporting disposition parameters for chloral hydrate. |
| PGx | Downie_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacological interaction of chloral hydrate/trichloroethanol with 5-HT3 receptors and contains no pharmacogenomic information (gene variants) or PK/PD parameters modulated by genotype. |
| popPK | Fernández-Pastor_2017 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PGx | Fernández-Pastor_2017 | not_relevant | 0 | 0 | No abstract provided and no data available to assess pharmacogenomic effects on chloral hydrate PK/PD. |
| popPK | Fischer_2000 | irrelevant | 0 | 0 | The study investigates the mechanism of action (inhibition of AMPA-induced Ca2+ influx) in vitro and does not report pharmacokinetic disposition parameters. |
| PGx | Fischer_2000 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of chloral hydrate and its metabolite on neuronal calcium influx but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Funk_1997 | irrelevant | 0 | 0 | The paper is a review on anesthesia techniques for MRI in children and does not provide quantitative pharmacokinetic parameters for chloral hydrate. |
| PGx | Funk_1997 | not_relevant | 0 | 0 | The paper reviews anesthesia techniques for pediatric MRI and mentions chloral hydrate's pharmacodynamic side effects, but it does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| popPK | Garrett_1998 | irrelevant | 0 | 0 | The study examines the mechanism of action of alpha-chloralose and chloral hydrate on GABA receptors in Xenopus oocytes (in vitro), not the population pharmacokinetic parameters of chloral hydrate. |
| PGx | Garrett_1998 | not_relevant | 0 | 0 | The study investigates the mechanism of action of alpha-chloralose on GABAA receptors in Xenopus oocytes, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of chloral hydrate. |
| popPK | Grobaski_1997 | irrelevant | 0 | 0 | This is an in-vitro electrophysiological study of dopamine neurons where chloral hydrate is used merely as an experimental agent, not for PK characterization. |
| PGx | Grobaski_1997 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of (-)-HA-966 and does not investigate pharmacogenomic effects on the PK or PD of chloral hydrate. |
| popPK | Guo_2008 | irrelevant | 0 | 0 | The study focuses on CGRP release and ALDH2 polymorphisms related to nitroglycerin, using chloral hydrate only as an in-vitro inhibitor rather than measuring its pharmacokinetic parameters. |
| PGx | Guo_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of nitroglycerin (GTN), not chloral hydrate, which is only used here as an inhibitor in an in vitro experiment. |
| popPK | Heidenreich_2004 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of dopamine receptors in rats, where chloral hydrate is used solely as an anesthetic agent, not as the subject of pharmacokinetic analysis. |
| PGx | Heidenreich_2004 | not_relevant | 0 | 0 | The paper investigates neuropharmacological adaptations in rats and does not report human pharmacogenomic effects on chloral hydrate PK or PD parameters. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | This is a systematic review of pediatric obesity dosing for various high-alert medications (amlodipine, vancomycin, propofol, etc.) with no mention of chloral hydrate or its metabolite anywhere in the evidence. |
| popPK | Jacqz-Aigrain_1996 | irrelevant | 2 | 0 | The paper is a review discussing sedation strategies in neonates and mentions chloral hydrate qualitatively (delayed elimination, risk of accumulation) but provides no original quantitative PK parameter values. |
| PGx | Jacqz-Aigrain_1996 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetics of chloral hydrate in neonates but does not report any specific pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Johnson_1996 | irrelevant | 0 | 0 | The study focuses on the electrophysiological effects of cocaine in rats, using chloral hydrate solely as an anesthetic agent. |
| PGx | Johnson_1996 | not_relevant | 0 | 0 | The paper studies cocaine pharmacology in chloral hydrate-anesthetized rats, but does not report pharmacogenomic effects on the PK/PD of chloral hydrate itself. |
| popPK | Leakey_2003 | irrelevant | 0 | 0 | This is a carcinogenicity/bioassay study focusing on tumor incidence and body weight, not a pharmacokinetic study reporting disposition parameters like CL, V, or t1/2. |
| PGx | Leakey_2003 | not_relevant | 0 | 0 | The paper describes a toxicology study on dietary control in mice and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Lestage_1987 | irrelevant | 0 | 0 | The study focuses on the kinetics of methionine incorporation into brain protein in rats, using chloral hydrate solely as an anesthetic agent rather than as the subject of pharmacokinetic analysis. |
| PGx | Lestage_1987 | not_relevant | 0 | 0 | The paper measures cerebral protein synthesis in rats and mentions chloral hydrate only as an anesthetic agent, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Lipscomb_1997 | irrelevant | 0 | 0 | The paper focuses on the cytochrome P450 metabolism of trichloroethylene to form chloral hydrate in human microsomes (in vitro), rather than the population pharmacokinetics of chloral hydrate administration. |
| PGx | Lipscomb_1997 | not_relevant | 0 | 0 | The paper focuses on the metabolism of trichloroethylene (an industrial solvent) into chloral hydrate, not the pharmacokinetics or pharmacodynamics of chloral hydrate as a drug. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | Chloral hydrate is only used as an anesthetic reagent in a rat metabolomics/microbiota study of pulchinenoside B4; no PK parameters for chloral hydrate are reported. |
| popPK | Machová_2024 | irrelevant | 0 | 0 | This is a nanoparticle toxicity/bioimaging study with no chloral hydrate PK parameters anywhere in the evidence. |
| popPK | Mahmoud_2020 | irrelevant | 0 | 0 | This is a narrative review of dexmedetomidine, not chloral hydrate; chloral hydrate is only mentioned once as a comparator sedative, with no PK parameters for it. |
| popPK | Marx_1993 | irrelevant | 0 | 0 | This is a survey of clinical practice patterns for sedation in pediatric intensive care, reporting usage frequencies and satisfaction levels, but it contains no quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) for chloral hydrate. |
| PGx | Marx_1993 | not_relevant | 0 | 0 | The paper is a survey on sedation practices in pediatric ICU and does not investigate pharmacogenomic effects on PK/PD parameters. |
| popPK | McIntyre_1985 | irrelevant | 0 | 0 | The paper is a review of genetic sensitivity to CNS depressants in mice and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for chloral hydrate. |
| PGx | McIntyre_1985 | not_relevant | 5 | 2 | The paper reports genetic differences (Long-Sleep vs Short-Sleep mice) in sensitivity (PD) to chloral hydrate, but it is a review that lacks specific quantitative effect sizes or PK parameters for this specific drug. |
| popPK | Melega_1995 | irrelevant | 0 | 0 | Chloral hydrate is used as an anesthetic agent in this study, not as the subject drug for pharmacokinetic analysis. |
| PGx | Melega_1995 | not_relevant | 0 | 0 | The study investigates the PK/PD of amphetamines in chloral hydrate-anesthetized rats and does not report on pharmacogenomic effects (gene variants) on chloral hydrate itself. |
| popPK | Mitrovic_1996 | irrelevant | 0 | 0 | The study is a neurophysiological investigation where chloral hydrate is used solely as an anesthetic agent, not as the subject drug for pharmacokinetic analysis. |
| PGx | Mitrovic_1996 | not_relevant | 0 | 0 | The paper studies the neurophysiological interaction between two drugs (DAMGO and Substance P) in rats, and does not report pharmacogenomic effects on the PK/PD of chloral hydrate. |
| popPK | Nelson_1988 | irrelevant | 0 | 0 | The study investigates the genotoxic effects (DNA strand breaks) of chloral hydrate in rats and mice, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Nelson_1988 | not_relevant | 0 | 0 | The paper investigates genotoxicity (DNA strand breaks) and species differences in toxicity, not pharmacokinetic or pharmacodynamic parameters modulated by specific human gene variants. |
| popPK | Nozaki_1981 | irrelevant | 0 | 0 | The study reports pharmacodynamic (behavioral) and dose-response data, not quantitative pharmacokinetic parameters like clearance or volume. |
| PGx | Nozaki_1981 | not_relevant | 0 | 0 | The paper describes a pharmacological study in rats using a gastric fistula model but does not investigate genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Parry_1996 | irrelevant | 0 | 0 | The paper is a review of aneugenic chemicals and cellular mechanisms, mentioning chloral hydrate only in the context of metabolic detoxification studies without reporting any pharmacokinetic parameters. |
| PGx | Parry_1996 | not_relevant | 1 | 1 | The paper discusses the genotoxicity of chemicals and mentions the metabolic detoxification of chloral hydrate in genetically engineered cells, but does not report a pharmacogenomic effect on specific PK or PD parameters of chloral hydrate in a clinical or human pharmacogenomic context. |
| popPK | Peoples_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology mechanism study on trichloroethanol (metabolite) in mouse hippocampal neurons, not a pharmacokinetic study reporting disposition parameters for chloral hydrate. |
| PGx | Peoples_1994 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of trichloroethanol (a metabolite) on GABA receptors but does not report any effect of genetic variants or phenotypes on PK/PD parameters. |
| popPK | Phillips_2026 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of memantine's NMDA receptor blockade, with no chloral hydrate pharmacokinetic parameters. |
| popPK | Pistis_1997 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring receptor modulation (EC50 values for currents) rather than quantitative pharmacokinetic parameters (clearance, volume, etc.) for chloral hydrate or its metabolite. |
| PGx | Pistis_1997 | not_relevant | 0 | 0 | The paper does not report a pharmacogenomic effect on PK/PD parameters of chloral hydrate. |
| popPK | Poon_2002 | irrelevant | 0 | 0 | The study is a subchronic toxicity assessment in rats that measures biomarkers like serum TCA levels and enzyme activity, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2, ka) or compartmental models. |
| PGx | Poon_2002 | not_relevant | 0 | 0 | The paper reports subchronic toxicity in rats but does not investigate pharmacogenomic variants or their effects on PK/PD parameters. |
| popPK | Reynolds_2024 | irrelevant | 0 | 0 | This is a nicotine neuroscience study in mice with no chloral hydrate PK parameters or disposition data. |
| popPK | Rodolico_2022 | irrelevant | 0 | 0 | The paper is a systematic review of antipsychotic dose reduction for schizophrenia and contains no data on chloral hydrate pharmacokinetics. |
| PGx | Rodolico_2022 | not_relevant | 0 | 0 | The paper is a systematic review on antipsychotic dose reduction in schizophrenia and does not mention chloral hydrate or pharmacogenomics. |
| popPK | Scheibler_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor impairment by trichloroethanol and does not report pharmacokinetic parameters. |
| PGx | Scheibler_1999 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of chloral hydrate's active metabolite on NMDA receptors but does not report any gene variants or genotypes affecting its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Schwartz_2005 | irrelevant | 0 | 0 | The paper is a historical review of pharmacodynamics in anxiety treatment and contains no pharmacokinetic parameters for chloral hydrate. |
| PGx | Schwartz_2005 | not_relevant | 0 | 0 | The paper is a historical review of anxiety treatment trends and does not report any pharmacogenomic data or gene-drug interactions. |
| popPK | Sprouse_1987 | irrelevant | 0 | 0 | Chloral hydrate is used only as an anesthetic for the rat subjects, and the paper studies electrophysiological responses to serotonin agonists, not the pharmacokinetics of chloral hydrate. |
| PGx | Sprouse_1987 | not_relevant | 0 | 0 | The study does not report on the pharmacokinetic or pharmacodynamic parameters of chloral hydrate itself, but rather uses it as an anesthetic to study the pharmacology of serotonin receptor agonists on dorsal raphe neurons. |
| popPK | Steinberg_1993 | irrelevant | 0 | 0 | This is a toxicology and regulatory review paper discussing carcinogenicity and safety, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Steinberg_1993 | not_relevant | 0 | 0 | The paper discusses the regulatory and toxicological safety of chloral hydrate but does not report any pharmacogenomic data or gene-variant interactions affecting PK/PD parameters. |
| popPK | Weight_1993 | irrelevant | 0 | 0 | The study investigates the mechanism of ethanol action on ion channels and mentions chloral hydrate only in the context of its active metabolite (trichloroethanol) as a general anesthetic comparator, providing no pharmacokinetic parameters for chloral hydrate. |
| PGx | Weight_1993 | not_relevant | 0 | 0 | The study examines the electrophysiological effects of ethanol and mentions chloral hydrate's metabolite but does not report pharmacogenomic effects on chloral hydrate's PK/PD. |
| popPK | Wilson_1992 | irrelevant | 0 | 0 | The study evaluates physiological safety parameters (blood pressure, respiratory rate) in children, not pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Wilson_1992 | not_relevant | 0 | 0 | The paper reports a standard dose-response study of chloral hydrate and does not mention any gene variants, genotypes, or phenotypes. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | This is a bumetanide ASD trial; chloral hydrate is only a sedation agent, with no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloral_hydrate%5D&body=Drug%3A%20chloral_hydrate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chloral_hydrate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
