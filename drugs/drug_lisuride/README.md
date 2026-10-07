<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;lisuride&quot;}]"></div>

# lisuride

- **generic name:** lisuride
- **ATC codes:** `G02CB02`, `N02CA07`
- **DrugBank:** [DB00589](https://go.drugbank.com/drugs/DB00589) · **PubChem:** [CID 28864](https://pubchem.ncbi.nlm.nih.gov/compound/28864)
- **molar mass:** 338.4466 g/mol (C20H26N4O) — DrugBank
- **groups:** approved

## About

Lisuride is a dopamine agonist used as an antiparkinson agent, a prolactin inhibitor, and an antimigraine ergot alkaloid. It is an approved medicine, though an application for use in restless legs syndrome in the European Union was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424446](https://www.wikidata.org/wiki/Q424446) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:16 | 7:08 | 0/0/0 | 3/2/0 | 0/0/0 | 298,883/4,086 | einfracz / qwen3.8-27b | 8 | 1/7 | 7/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Allen_2026_Consumption](drugs/drug_lisuride/pd_Allen_2026_Consumption.md) | Alcohol Consumption ← lisuride · direct linear effect | — | Allen J et al., Effectiveness of Alcohol Use Disorder P…, Drug and alcohol review (2026) | [10.1111/dar.70196](https://doi.org/10.1111/dar.70196) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mokler_1985_10_sec_periods_of_non_responding_pause_intervals](drugs/drug_lisuride/pd_Mokler_1985_10_sec_periods_of_non_responding_pause_intervals.md) | 10-sec periods of non-responding (pause-intervals) ← lisuride · stimulation effect | — | Mokler DJ et al., The 5HT2 antagonist pirenperone reverse…, Pharmacology, biochemistry,… (1985) | [10.1016/0091-3057(85)90512-x](https://doi.org/10.1016/0091-3057(85)90512-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mokler_1985_number_of_reinforcers](drugs/drug_lisuride/pd_Mokler_1985_number_of_reinforcers.md) | number of reinforcers ← lisuride · inhibition effect | — | Mokler DJ et al., The 5HT2 antagonist pirenperone reverse…, Pharmacology, biochemistry,… (1985) | [10.1016/0091-3057(85)90512-x](https://doi.org/10.1016/0091-3057(85)90512-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [White_1981_discriminative_stimulus_properties](drugs/drug_lisuride/pd_White_1981_discriminative_stimulus_properties.md) | discriminative stimulus properties biomarker turnover ← lisuride | — | White FJ et al., A neuropharmacological analysis of the…, Psychopharmacology (1981) | [10.1007/BF00429199](https://doi.org/10.1007/BF00429199) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mokler_1985_dose_response_curves](drugs/drug_lisuride/pd_Mokler_1985_dose_response_curves.md) | dose-response curves ← lisuride · categorical (graded) response model | — | Mokler DJ et al., The 5HT2 antagonist pirenperone reverse…, Pharmacology, biochemistry,… (1985) | [10.1016/0091-3057(85)90512-x](https://doi.org/10.1016/0091-3057(85)90512-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Newman-Tancredi_1997_2_35S_GTPgammaS_binding](drugs/drug_lisuride/pd_Newman_Tancredi_1997_2_35S_GTPgammaS_binding.md) | specific [35S]GTPgammaS binding ← lisuride · direct Emax (saturable) effect | — | Newman-Tancredi A et al., [35S]Guanosine-5'-O-(3-thio)triphosphat…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Stocchi_2001_UPDRS](drugs/drug_lisuride/pd_Stocchi_2001_UPDRS.md) | Unified Parkinson's Disease Rating Scale (UPDRS) motor scores ← lisuride · stimulation effect | — | Stocchi F et al., Long-duration effect and the postsynapt…, Movement disorders : offici… (2001) | [10.1002/mds.1070](https://doi.org/10.1002/mds.1070) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lisuride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (other/unknown), ADRA2B (other/unknown), ADRA2C (other/unknown), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR7 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 94 matched, 64 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bräutigam_1985.pdf` | Bräutigam M et al., Effects of apomorphine enantiomers and…, Molecular pharmacology (1985) | pd | 4 | not captured | [3935908](https://www.ncbi.nlm.nih.gov/pubmed/3935908) | metadata signals extractable PD data (IC50) |
| `Burris_1991.pdf` | Burris KD et al., (+)Lysergic acid diethylamide, but not…, The Journal of pharmacology… (1991) | pd | 4 | not captured | [1679849](https://www.ncbi.nlm.nih.gov/pubmed/1679849) | metadata signals extractable PD data (EC50) |
| `Egan_1998.pdf` | Egan CT et al., Agonist activity of LSD and lisuride at…, Psychopharmacology (1998) | pd | 4 | [10.1007/s002130050585](https://doi.org/10.1007/s002130050585) | [9600588](https://www.ncbi.nlm.nih.gov/pubmed/9600588) | metadata signals extractable PD data (EC50) |
| `Gardner_1998.pdf` | Gardner B et al., Agonist action at D2(long) dopamine rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701926](https://doi.org/10.1038/sj.bjp.0701926) | [9692784](https://www.ncbi.nlm.nih.gov/pubmed/9692784) | metadata signals extractable PD data (EC50) |
| `Newman-Tancredi_1997.pdf` | Newman-Tancredi A et al., Agonist activity of antimigraine drugs…, Naunyn-Schmiedeberg's archi… (1997) | pd | 4 | [10.1007/pl00005000](https://doi.org/10.1007/pl00005000) | [9205951](https://www.ncbi.nlm.nih.gov/pubmed/9205951) | metadata signals extractable PD data (Emax) |
| `Pizzi_1988.pdf` | Pizzi M et al., Dopamine D2 receptor stimulation inhibi…, Brain research (1988) | pd | 4 | [10.1016/0006-8993(88)90222-3](https://doi.org/10.1016/0006-8993(88)90222-3) | [2974746](https://www.ncbi.nlm.nih.gov/pubmed/2974746) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T08:15:01.000091+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agúndez_2013 | not_relevant | 5 | 0 | The text mentions CYP3A4 as a metabolizing enzyme for lisuride in the context of drug response, but it is a general review and does not report specific pharmacogenomic effect sizes or detailed PK/PD parameter changes linked to specific genotypes for lisuride. |
| popPK | Allen_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of alcohol use disorder pharmacotherapies (naltrexone, baclofen, etc.) and does not study lisuride or report any pharmacokinetic parameters for it. |
| popPK | Burris_1991 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay investigating the agonist activity of LSD and lisuride at serotonin receptors, reporting no pharmacokinetic disposition parameters. |
| PGx | Cacabelos_2017 | not_relevant | 2 | 2 | This is a general review of Parkinson's disease pathogenesis and pharmacogenomics; it does not report specific pharmacokinetic or pharmacodynamic parameter data for lisuride modified by genetic variants. |
| popPK | Cussac_2002 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing receptor ligand actions, not a pharmacokinetic study of lisuride disposition. |
| popPK | Dong_2021 | irrelevant | 0 | 0 | The paper describes the development of a biosensor for 5-HT2A receptors and does not report any pharmacokinetic parameters for lisuride. |
| popPK | Egan_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor agonist activity (EC50 values), not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fici_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of D1 receptor activity and cAMP formation, not a pharmacokinetic study reporting disposition parameters for lisuride. |
| popPK | Fowler_1992 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assessment of 5-HT1A receptor efficacy using lisuride as an agonist, not a pharmacokinetic study. |
| popPK | Gardner_1998 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Gendelev_2024 | irrelevant | 0 | 0 | The paper is a machine learning study on zebrafish behavioral phenotyping and does not contain any pharmacokinetic data for lisuride. |
| popPK | Glatfelter_2024 | irrelevant | 0 | 0 | The paper is a pharmacological study focusing on receptor binding and behavioral effects (HTR, hypothermia) rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for lisuride. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of rosiglitazone in tramadol-induced Parkinsonian rats and does not report pharmacokinetic parameters for lisuride. |
| popPK | Lewis_2023 | irrelevant | 0 | 0 | The paper studies a non-hallucinogenic LSD analog (2-Br-LSD) and does not report pharmacokinetic parameters for lisuride. |
| popPK | May_1995 | irrelevant | 0 | 0 | The study is a behavioral and receptor-binding investigation in rats where lisuride is used as a treatment/comparator, with no pharmacokinetic parameters reported. |
| popPK | Milovanovic_2015 | irrelevant | 0 | 0 | The study analyzes the population pharmacokinetics of 25-hydroxyvitamin D, not lisuride. |
| popPK | Newman-Tancredi_1997 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study measuring receptor binding affinity and agonist efficacy, not pharmacokinetic disposition parameters. |
| popPK | Newman-Tancredi_1997_2 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay measuring efficacy (Emax) and potency (EC50/Ki), not pharmacokinetic disposition parameters. |
| PGx | Nwadiugwu_2025 | not_relevant | 0 | 0 | The paper investigates a drug repurposing pipeline for Alzheimer's using snRNA-seq and molecular docking for Lasmeditan and other drugs; it does not report pharmacogenomic effects on lisuride's PK/PD parameters. |
| popPK | Padawer-Curry_2025 | irrelevant | 0 | 0 | The study investigates neurovascular coupling and functional connectivity using lisuride as a non-hallucinogenic control agent, but does not report any pharmacokinetic parameters (CL, V, etc.) for lisuride. |
| popPK | Palea_2004 | irrelevant | 0 | 0 | The study uses R(+)lisuride as a pharmacological antagonist to characterize 5-HT7 receptors in the rat urinary bladder, not as a subject drug for PK analysis. |
| popPK | Pauwels_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interactions and does not report any pharmacokinetic parameters for lisuride. |
| popPK | Quartermain_1983 | irrelevant | 0 | 0 | The study investigates the behavioral effects of lisuride on memory retrieval in mice and contains no pharmacokinetic parameters. |
| PGx | Rauschenbach_1995 | not_relevant | 2 | 0 | The paper investigates in vitro metabolism using a heterologous cell line expressing wild-type CYP3A4, not the effect of a specific human gene variant/genotype on PK/PD. |
| PGx | Rauschenbach_1997 | not_relevant | 3 | 5 | The paper demonstrates the metabolic capacity of CYP2D6 for lisuride and mentions a correlation with PM/EM status, but it does not report a fitted pharmacogenomic effect size or quantitative change in PK/PD parameters for the drug itself, focusing instead on tool development. |
| popPK | Terrón_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of 5-HT receptors in dog coronary arteries, where lisuride is used only as an antagonist probe and no pharmacokinetic parameters are reported. |
| popPK | Wallach_2023 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of 5-HT2A receptor signaling in mice, where lisuride is mentioned only as a non-psychedelic comparator, with no pharmacokinetic parameters reported. |
| popPK | Watts_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine receptor signaling where lisuride is used only as a pharmacological tool to characterize receptor subtypes, reporting no pharmacokinetic or disposition parameters. |
| popPK | Zhang_2003 | irrelevant | 0 | 0 | The paper describes a receptor binding/functional assay for 5-HT6 receptors, not a pharmacokinetic study of lisuride. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The provided text contains abstracts regarding unrelated compounds (T3D-959, GM6, NNI-351, Xenon) and does not mention lisuride or report any pharmacokinetic parameters for it. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
