<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;lormetazepam&quot;}]"></div>

# lormetazepam

- **generic name:** lormetazepam
- **ATC codes:** `N05CD06`
- **DrugBank:** [DB13872](https://go.drugbank.com/drugs/DB13872) · **PubChem:** [CID 13314](https://pubchem.ncbi.nlm.nih.gov/compound/13314)
- **molar mass:** 335.185 g/mol (C16H12Cl2N2O2) — DrugBank
- **groups:** approved

## About

Lormetazepam is a benzodiazepine derivative used to treat insomnia. It is administered orally as tablets, capsules, or liquid solutions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q186257](https://www.wikidata.org/wiki/Q186257), [Wikipedia](https://en.wikipedia.org/wiki/Lormetazepam?oldid=1304842424) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lormetazepam | parent | 335.185 | C16H12Cl2N2O2 | DrugBank | [13314](https://pubchem.ncbi.nlm.nih.gov/compound/13314) | Kurowski_1982, le_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Kurowski_1982_reference](drugs/drug_lormetazepam/Lormetazepam_Kurowski1982_reference.md) | — | 1-compartment (no model) | 1 | Kurowski M et al., Relationship between EEG dynamics and p…, Pharmacopsychiatria (1982) | [10.1055/s-2007-1019513](https://doi.org/10.1055/s-2007-1019513) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub> | [le_2024_reference](drugs/drug_lormetazepam/Lormetazepam_le2024_reference.md) | — | 1-compartment (no model) | 3 | le Noble JLML et al., Pharmacokinetics of Enteral Lormetazepa…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01455-3](https://doi.org/10.1007/s40262-024-01455-3) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:28 | 0:04 | 2/0/0 | 0/0/0 | 0/0/0 | 3,436/155 | einfracz / qwen3.8-27b | 31 | 5/25 | 29/2 | 0 |

## Coverage

- **PubMed hits:** 78 matched, 67 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adler_2026 | irrelevant | 0 | 0 | The paper investigates bacteriophage-antibiotic interactions in *E. coli* and *K. pneumoniae* and does not contain any pharmacokinetic data for lormetazepam. |
| PGx | Adler_2026 | not_relevant | 0 | 0 | The paper focuses on phage-antibiotic interactions, not pharmacogenomic effects on lormetazepam. |
| popPK | Alkhatip_2026 | irrelevant | 0 | 0 | Computational docking/MD study of ketamine analogues; lormetazepam is not the subject drug and no PK parameters appear. |
| popPK | Ambrosio_2018 | irrelevant | 0 | 0 | The study is an in vitro investigation of morphine metabolism where lormetazepam acts as a potential inhibitor, not a study of lormetazepam pharmacokinetics. |
| PGx | Ambrosio_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between lormetazepam and morphine metabolism, not the effect of a gene variant on lormetazepam's pharmacokinetics or pharmacodynamics. |
| popPK | Ancolio_2004 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing dosing and sleep outcomes, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Ancolio_2004 | not_relevant | 0 | 0 | The study compares two formulations of lormetazepam for efficacy and tolerance in a general population, containing no genetic data or pharmacogenomic analysis. |
| popPK | Ashton_1994 | irrelevant | 0 | 0 | The paper is a clinical guideline review on the rational use of benzodiazepines and contains no pharmacokinetic studies or quantitative disposition parameters for lormetazepam. |
| PGx | Ashton_1994 | not_relevant | 0 | 0 | The paper is a clinical guideline for the rational use of benzodiazepines and does not report pharmacogenomic effects on lormetazepam PK/PD. |
| popPK | Attwa_2023 | irrelevant | 0 | 0 | The paper is about alvocidib (flavopiridib), not lormetazepam; it is an in vitro HLM metabolic stability study of a different drug with no lormetazepam parameters. |
| popPK | Bhardwaj_2025 | irrelevant | 0 | 0 | This is an in-silico molecular docking/virtual screening study of thiazole LasR inhibitors in P. aeruginosa; lormetazepam is not mentioned and no PK parameters exist. |
| popPK | Boby_2023 | irrelevant | 0 | 0 | This is a SARS-CoV-2 protease inhibitor drug discovery paper; lormetazepam is not mentioned and no PK parameters for it appear. |
| popPK | Clokie_2026 | irrelevant | 0 | 0 | This is a phage-antibiotic interaction study in bacteria with no lormetazepam PK data or parameters. |
| popPK | Di_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study of menthol-based antimicrobials with no lormetazepam PK data or parameters. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | A review on sulfonylureas and antioxidants for diabetes; lormetazepam is not mentioned and no PK parameters are reported. |
| popPK | Disharoon_2026 | irrelevant | 0 | 0 | This is a deep-learning drug-drug interaction prediction paper with no lormetazepam PK parameters; the numeric values are model performance metrics (AUC-ROC, AUPRC), not disposition parameters. |
| popPK | Doenicke_1979 | irrelevant | 0 | 0 | The study focuses on clinical effects (EEG, hypnosis) and does not report quantitative pharmacokinetic parameters (CL, V, t1/2, Cmax) for lormetazepam. |
| PGx | Doenicke_1979 | not_relevant | 0 | 0 | The paper describes the dose-response relationship of lormetazepam in healthy volunteers but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Doenicke_1984 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study focusing on EEG patterns and sleep depth (vigilosomnograms) rather than reporting quantitative pharmacokinetic parameters like clearance or volume for lormetazepam. |
| PGx | Doenicke_1984 | not_relevant | 0 | 0 | The paper describes pharmacodynamic properties (depth/duration of sleep) and dose-response curves of lormetazepam but does not report any effects of gene variants or genotypes. |
| popPK | Doenicke_1984_2 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic study on the antagonist Ro 15-1788 reversing the effects of lormetazepam, and does not report any quantitative pharmacokinetic parameters (CL, V, ka) for lormetazepam. |
| PGx | Doenicke_1984_2 | not_relevant | 0 | 0 | The paper reports the pharmacokinetic and pharmacodynamic properties of the antagonist Ro 15-1788 on lormetazepam effects, but contains no data on gene variants or genotypes affecting these parameters. |
| popPK | Dusek_2025 | irrelevant | 0 | 0 | This paper is about the CAR agonist/PXR antagonist MI-883, not lormetazepam; no lormetazepam PK parameters appear, and MI-883's half-life values are in supplementary material. |
| popPK | El-Saghier_2021 | irrelevant | 0 | 0 | This is a synthetic chemistry/docking paper on quinoline derivatives with no lormetazepam PK data whatsoever. |
| popPK | Faccini_2019 | irrelevant | 0 | 0 | This is a retrospective epidemiological study on addiction patterns and patient demographics, containing no pharmacokinetic data. |
| PGx | Faccini_2019 | not_relevant | 0 | 0 | The paper discusses lormetazepam abuse patterns and patient demographics but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ghonia_2026 | irrelevant | 0 | 0 | The paper is a study on the synthesis and in vitro anticancer activity of novel piperidine-embedded isoxazol-triazole conjugates, and does not contain any pharmacokinetic data for lormetazepam. |
| PGx | Ghonia_2026 | not_relevant | 0 | 0 | The paper is about the synthesis and anti-cancer evaluation of novel piperidine-embedded isoxazol-triazole conjugates and does not mention lormetazepam or pharmacogenomic effects on PK/PD parameters. |
| popPK | Greenblatt_1983 | irrelevant | 2 | 0 | The provided text is a qualitative review of benzodiazepine categories and does not contain any specific quantitative pharmacokinetic parameter values (e.g., clearance, volume, half-life numbers) for lormetazepam. |
| PGx | Greenblatt_1983 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetic properties and metabolism pathways of lormetazepam but does not report any specific gene variants or pharmacogenomic effects on its PK or PD parameters. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | The paper focuses on RAS-mutant cancers and SHOC2 interaction, containing no data on lormetazepam pharmacokinetics. |
| PGx | Hauseman_2025 | not_relevant | 0 | 0 | The paper focuses on targeting RAS-mutant cancers via the SHOC2-RAS interaction and does not mention lormetazepam or report pharmacogenomic effects on its PK/PD. |
| popPK | Horák_1997 | irrelevant | 0 | 0 | The study focuses on metabolic effects (glycemia and lipids) rather than pharmacokinetic disposition parameters for lormetazepam. |
| PGx | Horák_1997 | not_relevant | 0 | 0 | The study describes general pharmacodynamic effects of lormetazepam on lipids and glucose in rats, but does not report any gene variant/genotype or pharmacogenomic effect on a PK/PD parameter. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | The paper focuses on SHIP1 ligands for Alzheimer's disease and does not mention lormetazepam or its pharmacokinetics. |
| PGx | Jesudason_2026 | not_relevant | 0 | 0 | The paper focuses on SHIP1 ligands for Alzheimer's disease and does not mention lormetazepam or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Joseph_1985 | irrelevant | 0 | 0 | This is a clinical acceptability and efficacy study that reports no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Joseph_1985 | not_relevant | 0 | 0 | The study evaluates the efficacy and acceptability of lormetazepam in elderly patients but does not mention any genetic variants, genotypes, or pharmacogenomic analysis affecting PK or PD parameters. |
| popPK | Jovanović_1980 | irrelevant | 0 | 0 | The paper is a clinical efficacy study evaluating dosage and side effects, containing no pharmacokinetic parameters or quantitative disposition data. |
| PGx | Jovanović_1980 | not_relevant | 0 | 0 | The study investigates age-specific dosing and clinical efficacy/safety but does not report pharmacogenomic variants or genotypes affecting lormetazepam PK/PD. |
| popPK | Kales_1982 | irrelevant | 0 | 0 | The study focuses on the efficacy, side effects, and rebound insomnia of lormetazepam in a sleep laboratory setting and does not report pharmacokinetic parameters. |
| PGx | Kales_1982 | not_relevant | 0 | 0 | The study reports on dose-response and withdrawal phenomena for lormetazepam but does not involve gene variants or pharmacogenomics. |
| popPK | Krishnan_2025 | irrelevant | 0 | 0 | The paper describes a deep learning approach for antibiotic design and has no pharmacokinetic data for lormetazepam. |
| PGx | Krishnan_2025 | not_relevant | 0 | 0 | The paper is about the de novo design of antibiotics using deep learning and is completely unrelated to lormetazepam or pharmacogenomics. |
| popPK | Kubicki_1987 | irrelevant | 1 | 0 | The study is a sleep pharmacodynamic investigation comparing triazolam and lormetazepam, and it does not report quantitative population pharmacokinetic parameters (CL, V, ka, etc.) for lormetazepam. |
| PGx | Kubicki_1987 | not_relevant | 0 | 0 | The paper compares the sleep architecture effects of two benzodiazepines but does not report any pharmacogenomic associations or gene-variant specific PK/PD parameters. |
| popPK | Kubicki_1987_2 | irrelevant | 0 | 0 | The study focuses on sleep neurophysiology (REM, K-complexes) and contains no quantitative pharmacokinetic parameters (CL, V, t1/2) for lormetazepam. |
| PGx | Kubicki_1987_2 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of benzodiazepines on sleep architecture in normal probands but contains no data regarding genetic variants or pharmacogenomics. |
| PGx | Kurowski_1982 | not_relevant | 0 | 0 | The paper describes the PK/PD relationship of lormetazepam in a general population without mentioning any gene variants, genotypes, or phenotypes. |
| popPK | Liira_2014 | irrelevant | 0 | 0 | The paper is a systematic review regarding pharmacological interventions for shift work sleepiness and does not report any pharmacokinetic parameters for lormetazepam. |
| PGx | Liira_2014 | not_relevant | 0 | 0 | The paper is a review of pharmacological interventions for shift work sleep disorder (melatonin, modafinil, caffeine) and does not mention lormetazepam or pharmacogenomics. |
| popPK | Mayer_1991 | irrelevant | 0 | 0 | The study investigates the neuromuscular blocking effects of ORG 9426, and lormetazepam is only mentioned as a premedication agent without any pharmacokinetic parameters reported. |
| PGx | Mayer_1991 | not_relevant | 0 | 0 | The study focuses on the pharmacodynamics of ORG 9426; lormetazepam is only mentioned as part of premedication, and no genetic variants are analyzed. |
| popPK | Mayer_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of mivacurium, and lormetazepam is only used as a premedication agent without any reporting of its pharmacokinetic parameters. |
| PGx | Mayer_1993 | not_relevant | 0 | 0 | The study investigates pharmacodynamic interactions with mivacurium and does not report pharmacogenomic effects on lormetazepam pharmacokinetics or pharmacodynamics. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/cancer biology paper on ethanoanthracene compounds in CLL cell lines with no lormetazepam PK data whatsoever. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | Medicinal chemistry paper on CAR agonists; no lormetazepam PK parameters reported. |
| popPK | Moral-Sanz_2026 | irrelevant | 0 | 0 | This is a senolytic toxin study with no lormetazepam PK parameters; lormetazepam is not mentioned at all. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | The study focuses on in vitro anticancer activity and molecular docking of thiazole-derived EGFR/CDK-2 inhibitors, with no pharmacokinetic data for lormetazepam. |
| PGx | Nasr_2026 | not_relevant | 0 | 0 | The paper focuses on novel thiazole anticancer inhibitors and their in vitro mechanisms, and does not mention lormetazepam or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Nourmandipour_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/anti-nociception study of morphine derivatives; no lormetazepam and no PK disposition parameters, only computational ADME predictions. |
| popPK | Ott_1988 | irrelevant | 0 | 0 | The study is a pharmacopsychological investigation of memory impairment and does not report pharmacokinetic parameters for lormetazepam. |
| PGx | Ott_1988 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects (memory impairment) of lormetazepam but does not analyze genetic variants or genotypes to determine pharmacogenomic effects. |
| popPK | Pierce_1984 | relevant | 4 | 3 | The study reports qualitative PK findings (bioavailability, elimination kinetics, tmax) for lormetazepam, but specific quantitative parameters like clearance, volume, or half-life values are not provided in the text. |
| PGx | Pierce_1984 | not_relevant | 0 | 0 | The paper investigates formulation differences (capsule vs. tablet) rather than gene variants, and therefore does not report a pharmacogenomic effect. |
| popPK | Richards_1988 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on sleep quality and side effects, containing no pharmacokinetic parameters. |
| PGx | Richards_1988 | not_relevant | 0 | 0 | The study is a clinical trial comparing two doses of lormetazepam in elderly patients and contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Rickels_1986 | irrelevant | 0 | 0 | The paper is a general review of hypnotic indications and categorizes lormetazepam by half-life without providing any quantitative pharmacokinetic parameter values. |
| PGx | Rickels_1986 | not_relevant | 0 | 0 | The text is a general clinical overview of hypnotic indications and half-lives; it does not report any genetic variants or pharmacogenomic effects on lormetazepam. |
| popPK | Rosencrans_2025 | irrelevant | 0 | 0 | This is a cell-biology study of PINK1/Parkin mitophagy activators (FB231, MTK458) with no lormetazepam PK parameters; no lormetazepam appears at all. |
| popPK | Sako_2026 | irrelevant | 0 | 0 | This is a molecular generation/drug design paper with no lormetazepam PK parameters; ADMET predictions are in silico and not for lormetazepam. |
| popPK | Sarter_1988 | irrelevant | 0 | 0 | The study is an in vitro autoradiography assay measuring receptor binding affinity (Bmax/Kd), not pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Sarter_1988 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding affinity in rat brain tissue and does not report pharmacogenomic effects on the PK or PD of lormetazepam in humans. |
| popPK | Sastre_1981 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for insomnia, reporting only subjective sleep parameters and side effects, with no pharmacokinetic data. |
| PGx | Sastre_1981 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of lormetazepam and diazepam in insomnia patients but does not report any pharmacogenomic data or genetic variants affecting PK/PD parameters. |
| popPK | Sayaf_2024 | irrelevant | 0 | 0 | The paper focuses on molecular docking and simulation of PHD inhibitors, and lormetazepam is not mentioned or studied. |
| PGx | Sayaf_2024 | not_relevant | 0 | 0 | The paper explores in silico screening for PHD inhibitors and does not investigate lormetazepam or any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Schäfer_1988 | irrelevant | 0 | 0 | The paper is a clinical case report discussing respiratory depression from flunitrazepam and only mentions lormetazepam as a suggested alternative drug without providing any pharmacokinetic parameters. |
| PGx | Schäfer_1988 | not_relevant | 0 | 0 | The paper reports a case of respiratory depression caused by flunitrazepam and discusses lormetazepam only as a recommended alternative for neurosurgical patients, without presenting any pharmacogenomic data or genetic influence on PK/PD parameters for lormetazepam. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on synthesized pyrrole-fused pyrimidine InhA inhibitors; lormetazepam is not mentioned and no PK parameters exist. |
| popPK | Spinaci_2023 | irrelevant | 0 | 0 | Medicinal chemistry paper on A2AAR/CK1δ dual inhibitors; no lormetazepam or any PK parameters present. |
| popPK | Stephens_1990 | irrelevant | 0 | 0 | Lormetazepam is used only as a radioligand ([3H]lormetazepam) in in vitro binding assays to characterize abecarnil, not as a subject of pharmacokinetic analysis. |
| PGx | Stephens_1990 | not_relevant | 0 | 0 | The paper describes the pharmacological properties of abecarnil using lormetazepam as a radioligand in binding assays, rather than reporting pharmacogenomic effects on lormetazepam's PK or PD parameters. |
| popPK | Suttmann_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effect (beta-activity) of benzodiazepines and their antagonist, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for lormetazepam. |
| PGx | Suttmann_1990 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effects of benzodiazepines on beta-activity in a general population without examining gene variants, genotypes, or pharmacogenomic interactions. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | This is an antimalarial HDAC inhibitor medicinal chemistry paper; lormetazepam is not mentioned and no PK disposition parameters for it exist. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of action of candesartan cilexetil on methicillin-resistant Staphylococcus aureus and contains no pharmacokinetic data or parameters for lormetazepam. |
| PGx | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of Candesartan cilexetil against MRSA, not lormetazepam, and contains no pharmacogenomic or PK/PD data for lormetazepam. |
| popPK | Todsaporn_2026 | irrelevant | 0 | 0 | The paper is a study on the discovery of JAK2 inhibitors for cervical cancer and contains no data related to the pharmacokinetics of lormetazepam. |
| PGx | Todsaporn_2026 | not_relevant | 0 | 0 | The paper focuses on the discovery of JAK2 inhibitors for cervical cancer and does not mention lormetazepam, pharmacogenomics, or PK/PD parameters. |
| popPK | Tolksdorf_1987 | irrelevant | 0 | 0 | The study reports only clinical effects (anxiety, physiological parameters) of lormetazepam as premedication and contains no pharmacokinetic data or disposition parameters. |
| PGx | Tolksdorf_1987 | not_relevant | 0 | 0 | The study investigates the clinical effects of lormetazepam versus placebo but does not mention any genetic variants or pharmacogenomic factors. |
| popPK | Ulsamer_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of vecuronium bromide, and lormetazepam is used only as a co-administered induction agent without any PK parameter reporting. |
| PGx | Ulsamer_1988 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (cimetidine/ranitidine/etomidate) on vecuronium pharmacodynamics and does not report any pharmacogenomic effects on lormetazepam. |
| popPK | Ulsamer_1988_2 | irrelevant | 0 | 0 | The study compares anesthetic induction agents (propofol vs etomidate) and uses lormetazepam only as premedication without reporting its pharmacokinetic parameters. |
| PGx | Ulsamer_1988_2 | not_relevant | 0 | 0 | The paper compares the cardiovascular effects of propofol and etomidate for anesthesia induction and does not investigate any pharmacogenomic factors (gene variants) affecting the PK or PD of lormetazepam. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | This is a review of NNRTI anti-HIV drug design; lormetazepam is not mentioned at all. |
| popPK | Verster_2012 | irrelevant | 0 | 0 | The paper is a review of driving performance studies and does not report quantitative pharmacokinetic parameters for lormetazepam. |
| PGx | Verster_2012 | not_relevant | 0 | 0 | The paper reviews gender differences in driving performance (PD) but does not report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Waitman_2025 | irrelevant | 0 | 0 | The paper discusses the discovery of HDAC6/AKT2 inhibitors for cancer treatment and does not involve lormetazepam or its pharmacokinetics. |
| PGx | Waitman_2025 | not_relevant | 0 | 0 | The paper discusses hybrid HDAC6/AKT2 inhibitors for myeloid cancer, not lormetazepam pharmacogenomics. |
| popPK | Zamboni_2019 | irrelevant | 0 | 0 | This is a clinical case study regarding addiction and detoxification, reporting only dosing history and qualitative outcomes, with no pharmacokinetic parameters. |
| PGx | Zamboni_2019 | not_relevant | 0 | 0 | The paper is a clinical case study of lormetazepam addiction in an athlete and does not report any pharmacogenomic analysis or effects of gene variants on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blormetazepam%5D&body=Drug%3A%20lormetazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lormetazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:24 UTC</sub>
