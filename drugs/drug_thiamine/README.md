<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11D&quot;,&quot;href&quot;:&quot;atc/A11D.md&quot;},{&quot;label&quot;:&quot;Thiamine&quot;}]"></div>

# Thiamine

- **generic name:** Thiamine
- **ATC codes:** `A11DA01`
- **DrugBank:** [DB00152](https://go.drugbank.com/drugs/DB00152) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Thiamine (vitamin B1) is used to treat or prevent thiamine deficiency states such as beriberi, Wernicke encephalopathy, pellagra, and alcoholic neuropathy. It is widely used as a vitamin supplement and is included on the WHO list of essential medicines; it is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q83187](https://www.wikidata.org/wiki/Q83187) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 07:20 | 12:30 | 0/1/0 | 0/0/0 | 0/0/0 | 370,449/20,247 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 3/17 | 17/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rindi_1980_reference](drugs/drug_thiamine/Thiamine_Rindi1980_reference.md) | — | 1-compartment (no model) | 0 | Rindi G et al., Thiamine content and turnover rates of…, Brain research (1980) | [10.1016/0006-8993(80)90619-8](https://doi.org/10.1016/0006-8993(80)90619-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=thiamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `SLC22A1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP4B1 (inducer), ENTPD5 (substrate), SLC19A2 (substrate), SLC19A3 (substrate), THTPA (substrate), TPK1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 308 matched, 89 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pipkin_1982.pdf` | Pipkin JD et al., Thiamine whole blood and urinary pharma…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600710208](https://doi.org/10.1002/jps.2600710208) | [7062238](https://pubmed.ncbi.nlm.nih.gov/7062238) | The study reports quantitative pharmacokinetic parameters (AUC, Vd, t0.5, ClTB) for thiamine in rats, but the specific numeric values are not present in the provided evidence text. |
| `Xie_2014.pdf` | Xie F et al., Pharmacokinetic study of benfotiamine a…, Journal of clinical pharmac… (2014) | popPK | 9 | [10.1002/jcph.261](https://doi.org/10.1002/jcph.261) | [24399744](https://pubmed.ncbi.nlm.nih.gov/24399744) | The study reports a one-compartment PK model for thiamine and bioavailability ratios, but specific numeric values for clearance, volume, or half-life are not present in the provided text. |
| `Patrini_1993.pdf` | Patrini C et al., Effects of phenytoin on the in vivo kin…, Brain research (1993) | popPK | 8 | [10.1016/0006-8993(93)90953-k](https://doi.org/10.1016/0006-8993(93)90953-k) | [8313145](https://pubmed.ncbi.nlm.nih.gov/8313145) | The study reports compartmental kinetic parameters (fractional rate constants, turnover rates) for thiamine in rats, but the specific numeric values are not present in the provided abstract text. |
| `Rindi_1980.pdf` | Rindi G et al., Thiamine content and turnover rates of…, Brain research (1980) | popPK | 8 | [10.1016/0006-8993(80)90619-8](https://doi.org/10.1016/0006-8993(80)90619-8) | [7350971](https://pubmed.ncbi.nlm.nih.gov/7350971) | The study reports quantitative compartmental parameters (turnover rates, turnover times, and fractional rate constants) for thiamine in rat nervous tissues. |
| `Gallant_2021.pdf` | Gallant J et al., Low-dose thiamine supplementation of la…, The American journal of cli… (2021) | pd | 4 | [10.1093/ajcn/nqab052](https://doi.org/10.1093/ajcn/nqab052) | [33829271](https://www.ncbi.nlm.nih.gov/pubmed/33829271) | metadata signals extractable PD data (Emax) |
| `Grassl_1994.pdf` | Grassl SM, Choline transport in human placental br…, Biochimica et biophysica ac… (1994) | pd | 4 | [10.1016/0005-2736(94)90221-6](https://doi.org/10.1016/0005-2736(94)90221-6) | [8075137](https://www.ncbi.nlm.nih.gov/pubmed/8075137) | metadata signals extractable PD data (IC50) |
| `Liu_2023.pdf` | Liu HH et al., The ecotoxicological effects of chromiu…, Environmental science and p… (2023) | pd | 4 | [10.1007/s11356-023-26301-0](https://doi.org/10.1007/s11356-023-26301-0) | [36890403](https://www.ncbi.nlm.nih.gov/pubmed/36890403) | metadata signals extractable PD data (EC50) |
| `Wu_2024.pdf` | Wu X et al., Metabolomic Response of Thalassiosira w…, Plants (Basel, Switzerland) (2024) | pd | 4 | [10.3390/plants13030354](https://doi.org/10.3390/plants13030354) | [38337887](https://www.ncbi.nlm.nih.gov/pubmed/38337887) | metadata signals extractable PD data (EC50) |
| `Zhang_2016.pdf` | Zhang L et al., Label-free, turn-on fluorescent sensor…, Talanta (2016) | pd | 4 | [10.1016/j.talanta.2016.09.011](https://doi.org/10.1016/j.talanta.2016.09.011) | [27769443](https://www.ncbi.nlm.nih.gov/pubmed/27769443) | metadata signals extractable PD data (IC50) |
| `Davies_2007.pdf` | Davies SJ et al., PRN prescribing in psychiatric inpatien…, Journal of psychopharmacolo… (2007) | pgx | 7 | [10.1177/0269881107067242](https://doi.org/10.1177/0269881107067242) | [17329294](https://www.ncbi.nlm.nih.gov/pubmed/17329294) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Cheng_2017.pdf` | Cheng X et al., Fast and robust detection of ancestral…, Molecular ecology (2017) | pgx | 5 | [10.1111/mec.14416](https://doi.org/10.1111/mec.14416) | [29113018](https://www.ncbi.nlm.nih.gov/pubmed/29113018) | metadata signals extractable PGX data (SLC35F3) |

<sub>queue written 2026-10-05T07:09:30.554932+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The paper is a clinical study on intense pulsed light therapy for meibomian gland dysfunction and contains no pharmacokinetic data for thiamine. |
| popPK | Bellazzi_2001 | irrelevant | 2 | 0 | The paper describes a modeling methodology for intracellular thiamine kinetics but does not report standard quantitative pharmacokinetic parameters (CL, V, ka) in the provided evidence. |
| PGx | Bokelmann_2018 | not_relevant | 0 | 0 | The paper investigates OCT1 promoter polymorphisms and their effect on the pharmacokinetics of other drugs (metformin, etc.), but does not report any pharmacokinetic or pharmacodynamic parameters for thiamine. |
| PGx | Bravatà_2014 | not_relevant | 0 | 0 | The paper reports a wild-type genotype (no variants found) in a single patient and does not demonstrate a pharmacogenomic effect on thiamine PK or PD parameters. |
| popPK | Brigatti_2026 | irrelevant | 0 | 0 | The paper describes a natural history cohort for maple syrup urine disease and does not report pharmacokinetic parameters for thiamine. |
| PD | Brigatti_2026 | not_relevant | 0 | 0 | The paper describes a natural history cohort for external controls in maple syrup urine disease and does not report any pharmacodynamic or exposure-response analysis for thiamine. |
| PGx | Bruhn_2024 | not_relevant | 0 | 0 | The paper reports genetic variants causing a metabolic enzyme deficiency (PDCD) and their effect on enzyme activity, but does not report a pharmacogenomic effect on the PK or PD parameters of thiamine as a drug. |
| PGx | Bunik_2022 | not_relevant | 0 | 0 | The paper investigates the non-coenzyme regulatory effects of thiamine on pyridoxal kinase and the impact of PdxK variants on thiamine inhibition, rather than how a gene variant affects the pharmacokinetics or pharmacodynamics of thiamine itself. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper reports metabolomic signatures in asthma patients, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of thiamine. |
| PGx | Cheng_2017 | not_relevant | 0 | 0 | The paper focuses on population genetics and detecting selective sweeps, mentioning a thiamine transporter only as a candidate for adaptation, without reporting any pharmacokinetic or pharmacodynamic data. |
| PGx | Davies_2007 | not_relevant | 0 | 0 | The paper discusses PRN prescribing and CYP-mediated drug interactions in psychiatry, but does not mention thiamine or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Du_2021 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting thiamine pyrophosphate (TPP) in blood, not a pharmacokinetic study of thiamine disposition. |
| PD | Du_2021 | not_relevant | 0 | 0 | The paper describes an analytical method (ribosensor) for detecting thiamine pyrophosphate, not a pharmacodynamic study of thiamine's biological effects; the reported EC50 is a sensor binding parameter, not a drug response parameter. |
| popPK | Duan_2025 | irrelevant | 0 | 0 | The study is a clinical trial on cognitive function where thiamine is a minor component of a supplement, not a pharmacokinetic study. |
| PGx | Díaz-Muñoz_2026 | not_relevant | 0 | 0 | The paper investigates the genetic basis of stool frequency and its interaction with thiamine intake, but does not report pharmacokinetic or pharmacodynamic parameters of thiamine as a drug. |
| popPK | Edwards_2026 | irrelevant | 0 | 0 | The study describes an in vitro enzymatic assay for transketolase activity to measure thiamine utilization, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ejsmond_2025 | irrelevant | 0 | 0 | The paper presents a theoretical life-history model of thiamine allocation in salmon, not a pharmacokinetic study with quantitative disposition parameters (CL, V, ka). |
| PD | Ejsmond_2025 | not_relevant | 1 | 0 | The paper presents a theoretical physiological allocation model and qualitative correlations between tissue thiamine levels and fitness traits, but does not report a pharmacodynamic exposure-response relationship with numeric PD parameters (e.g., Emax, EC50) for a drug effect. |
| PGx | Fritsch_1983 | not_relevant | 0 | 0 | The paper reports a case of maple syrup urine disease where thiamine treatment was ineffective, but it does not report a pharmacogenomic effect (gene variant changing PK/PD) of thiamine. |
| popPK | Gallant_2021 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Gallant_2021 | not_relevant | 0 | 0 | The paper reports changes in milk thiamine concentrations following supplementation but does not provide a pharmacokinetic-pharmacodynamic model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Girija_1982 | not_relevant | 4 | 2 | The paper mentions calculating bioavailability from individual dose-response curves but the provided text only contains qualitative conclusions and does not report specific numeric PD parameters (Emax, EC50, etc.) or the underlying data. |
| popPK | Go_2026 | irrelevant | 0 | 0 | The study is an observational analysis of drug-drug interaction prevalence in nursing home residents and does not report any pharmacokinetic parameters for thiamine. |
| PD | Go_2026 | not_relevant | 0 | 0 | The paper is an epidemiological study on drug-drug interaction prevalence in nursing home residents and contains no pharmacokinetic or pharmacodynamic modeling or data for Thiamine. |
| PD | Grassl_1994 | not_relevant | 0 | 0 | The paper focuses on choline transport in placental vesicles and does not report any pharmacodynamic or exposure-response data for thiamine. |
| PGx | Haberkorn_2021 | not_relevant | 0 | 0 | The paper is a review of in vitro cell models for OCT1 transport and does not report in vivo pharmacogenomic effects on thiamine PK/PD parameters. |
| PGx | Hagstrom_2013 | not_relevant | 0 | 0 | The paper investigates pharmacogenetics for anti-VEGF therapy in AMD, not thiamine. |
| PGx | Hassan_2023 | not_relevant | 0 | 0 | The paper is a review of episodic ataxia etiologies and treatments, mentioning thiamine metabolism defects only as a secondary cause, without reporting pharmacogenomic effects on thiamine PK/PD. |
| popPK | Hoetzel_2026 | irrelevant | 0 | 0 | The paper describes the mechanism of a doxycycline-binding riboswitch aptamer and does not report pharmacokinetic parameters for thiamine. |
| popPK | Hosseinzadeh_2016 | irrelevant | 0 | 0 | The study investigates the in-vitro binding interaction between thiamine and lysozyme, not the pharmacokinetic disposition parameters (CL, V, etc.) of thiamine in a biological system. |
| PD | Impeduglia_1987 | not_relevant | 3 | 2 | The paper describes qualitative changes in ethanol response (behavioral impairment/hypothermia) relative to blood ethanol concentrations (BEC) in rats, but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for thiamine itself; it focuses on the interaction between thiamine status and ethanol PK/PD. |
| PGx | Impeduglia_1987 | not_relevant | 2 | 5 | The paper investigates the effect of thiamine deficiency (a nutritional state) on ethanol pharmacokinetics and pharmacodynamics, not the effect of a gene variant on thiamine pharmacokinetics or pharmacodynamics. |
| PGx | Israels_1976 | not_relevant | 0 | 0 | The paper discusses lactic acidosis and thiamine metabolism in metabolic disorders but does not report pharmacogenomic effects on thiamine PK/PD parameters. |
| PGx | Jensen_2020 | not_relevant | 2 | 5 | The study explicitly reports that thiamine pharmacokinetics did not differ depending on OCT1 genotype, indicating a lack of pharmacogenomic effect. |
| PGx | Khan_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and gene expression in Rhododendron under heat stress, not human pharmacogenomics or thiamine pharmacokinetics. |
| PGx | Kong_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nutritional supplements in cardiac surgery and explicitly states that the evidence base does not support genotype-guided precision supplementation, containing no pharmacogenomic data for thiamine. |
| PGx | Koronica_2026 | not_relevant | 0 | 0 | The paper discusses ifosfamide pharmacogenomics (CYP2B6/3A4) and toxicity, not the pharmacokinetics or pharmacodynamics of thiamine. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper focuses on the proteomics of pathological tau protein in neurodegenerative diseases and does not study the pharmacokinetics of thiamine. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper focuses on proteomic characterization of tau protein in neurodegenerative diseases and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PD | Labib_2019 | not_relevant | 0 | 0 | The text is a general review of sepsis care pathways and mentions thiamine only as part of a clinical trial (HYVITS) without providing any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PD | Lai_1986 | not_relevant | 0 | 0 | The paper studies the kinetic properties of the alpha-ketoglutarate dehydrogenase complex enzyme, not the pharmacodynamic response of the drug Thiamine in a biological system. |
| popPK | Lani_2026 | irrelevant | 0 | 0 | The paper is a review of the nutritional and phytochemical properties of date palm (Phoenix dactylifera) and does not report pharmacokinetic parameters for thiamine. |
| PD | Lani_2026 | not_relevant | 0 | 0 | The paper is a narrative review of date palm (Phoenix dactylifera) nutraceuticals and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PGx | Lazzeri_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of ranibizumab, not thiamine. |
| PD | Lee_1985 | not_relevant | 4 | 2 | The paper describes a qualitative leftward shift in the dose-response curve for serotonin in thiamine-deficient rats but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect data in the text. |
| PD | Levine_1978 | not_relevant | 2 | 1 | The paper describes a qualitative synergistic effect of coenzymes on PDS-induced contractures but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for thiamine. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The paper reports genetic mutations causing Maple Syrup Urine Disease (a metabolic disorder) but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of thiamine as a drug. |
| PD | Li_2024 | not_relevant | 1 | 0 | The paper identifies thiamine pyrophosphate as a P2Y6R antagonist but does not provide numeric PD parameters (e.g., IC50, Emax) or an exposure-response curve in the provided text. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study investigates the antifungal mechanism of sorbauphylin A in Botrytis cinerea, focusing on the inhibition of thiamine biosynthesis genes rather than the pharmacokinetics of thiamine. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports an EC50 for the fungicide sorbauphylin A, not for thiamine; thiamine is only mentioned as a biosynthetic pathway target, with no exposure-response or dose-response data for thiamine itself. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Liu_2023 | not_relevant | 0 | 0 | The paper investigates the ecotoxicological effects of chromium (III) oxide nanoparticles on Chlorella sp. and does not mention Thiamine or report any pharmacodynamic or exposure-response relationships for it. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper investigates bacterial genomic structural variations in autism and mentions thiamine only as a metabolic pathway associated with bacterial genes, not as a drug subject to pharmacokinetic analysis. |
| PGx | Lu_2015 | not_relevant | 2 | 5 | The paper reports an association between APOE genotype and thiamine metabolite levels (TDP), but it does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on the drug's response or disposition in a pharmacogenomic context (i.e., it is an observational correlation, not a PK/PD effect of a variant on drug handling). |
| popPK | Lyu_2025 | irrelevant | 0 | 0 | The study investigates the effects of glucocorticoids on gut microbiota and metabolic markers, with no mention of thiamine pharmacokinetics. |
| PD | Lyu_2025 | not_relevant | 0 | 0 | The paper investigates the effects of glucocorticoids on gut microbiota and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PD | Martin_1985 | not_relevant | 2 | 1 | The text describes qualitative changes in ethanol response (AUC, impairment, hypothermia) due to thiamine deficiency but does not provide numeric PD parameters or an extractable concentration-effect curve. |
| PGx | Medina_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a CFH polymorphism on the response to anti-VEGF therapy for AMD, not on the pharmacokinetics or pharmacodynamics of thiamine. |
| PGx | Nagarajan_2026 | not_relevant | 0 | 0 | The paper investigates genetic interactions with sleepiness in sleep apnea and does not report pharmacokinetic or pharmacodynamic parameters for thiamine. |
| PGx | Nakandala_2024 | not_relevant | 0 | 0 | The paper is a comparative genomics study of Australian wild limes and does not report pharmacogenomic effects on thiamine pharmacokinetics or pharmacodynamics. |
| PGx | Parmeggiani_2019 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR polymorphism on the efficacy of verteporfin, not thiamine. |
| popPK | Patrini_1993 | relevant | 8 | 2 | The study reports compartmental kinetic parameters (fractional rate constants, turnover rates) for thiamine in rats, but the specific numeric values are not present in the provided abstract text. |
| PGx | Pavlu-Pereira_2021 | not_relevant | 0 | 0 | The paper characterizes structural and functional impacts of PDC-E1 variants on enzyme activity and TPP affinity, but does not report pharmacokinetic or pharmacodynamic parameters of thiamine as a drug in a pharmacogenomic context. |
| PGx | Pavlú-Pereira_2023 | not_relevant | 2 | 5 | The paper evaluates the therapeutic effect of thiamine on mitochondrial function in PDHA1-deficient cells, which is a pharmacodynamic response to a drug, but it does not report how the genotype changes the pharmacokinetics or pharmacodynamics of thiamine itself (e.g., thiamine clearance, half-life, or receptor binding affinity). |
| PGx | Pinilla_2025 | not_relevant | 0 | 0 | The paper is a case report on ifosfamide-induced encephalopathy and does not report any pharmacogenomic effects on thiamine PK or PD parameters. |
| popPK | Pipkin_1982 | relevant | 10 | 0 | The study reports quantitative pharmacokinetic parameters (AUC, Vd, t0.5, ClTB) for thiamine in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Porter_2025 | irrelevant | 0 | 0 | The study measures thiaminase enzyme kinetics (Vmax, Km) in fish extracts, not the pharmacokinetic disposition parameters (CL, V, t1/2) of thiamine in a biological subject. |
| PD | Porter_2025 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Michaelis-Menten) for thiaminase activity, not a pharmacodynamic exposure-response relationship for thiamine as a drug. |
| PD | Rao_2020 | not_relevant | 1 | 0 | The text is a qualitative review of alcohol use disorders and mentions thiamine treatment for Wernicke's encephalopathy but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| PGx | Sainz_2015 | not_relevant | 0 | 0 | The paper discusses the source of autofluorescence in cancer stem cells (riboflavin vs lipofuscin) and does not report pharmacogenomic effects on thiamine pharmacokinetics or pharmacodynamics. |
| PD | Schron_1988 | not_relevant | 0 | 0 | The paper investigates folate carrier kinetics and anion specificity; thiamine is only mentioned as a non-inhibitor of folate uptake, with no PD or exposure-response analysis for thiamine. |
| PGx | Sengul_2018 | not_relevant | 0 | 0 | The paper discusses ranibizumab, not thiamine. |
| PGx | Taberner_2016 | not_relevant | 0 | 0 | The paper discusses neonatal diabetes and mentions a thiamine-responsive syndrome, but it does not report pharmacokinetic or pharmacodynamic parameters of thiamine itself. |
| PGx | Tazhibaev_1982 | not_relevant | 0 | 0 | The paper discusses nutritional deficiencies and mineral balance, not pharmacogenomic effects on thiamine PK/PD. |
| PGx | Thompson_2023 | not_relevant | 0 | 0 | The paper describes a clinical case of a metabolic disorder (THMD5) and its response to treatment, but does not report pharmacokinetic or pharmacodynamic parameters or quantitative pharmacogenomic effects. |
| PGx | Torchia_2025 | not_relevant | 0 | 0 | The paper is a narrative review on ifosfamide-induced encephalopathy and does not report pharmacogenomic effects on thiamine PK/PD parameters. |
| PD | Umemoto_1989 | not_relevant | 0 | 0 | The paper focuses on methotrexate antibody conjugates and only mentions thiamine pyrophosphate qualitatively as a control inhibitor, providing no exposure-response or dose-response data for thiamine. |
| PGx | Valverde-Megías_2017 | not_relevant | 0 | 0 | The paper investigates ranibizumab, not thiamine. |
| popPK | Voskoboev_1976 | irrelevant | 0 | 0 | The study investigates the quaternary structure and allosteric properties of thiamine pyrophosphokinase enzyme, not the pharmacokinetics of thiamine. |
| PD | Voskoboev_1976 | not_relevant | 0 | 0 | The paper describes the quaternary structure and allosteric properties of an enzyme (thiamine pyrophosphokinase) in vitro, not a pharmacodynamic exposure-response relationship for the drug thiamine in a biological system. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The study reports dietary intake of thiamine, not pharmacokinetic parameters. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The study investigates TDP levels as a biomarker for Alzheimer's disease and its association with APOE genotype, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of thiamine administration. |
| PGx | Weyandt_2022 | not_relevant | 0 | 0 | The paper focuses on the genomics and evolution of Wolbachia bacteria in nematodes, not on human pharmacogenomics or thiamine pharmacokinetics. |
| popPK | Whitfield_2019 | irrelevant | 0 | 0 | This is a study protocol for a nutritional intervention trial measuring dose-response in human milk and biomarkers, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Whitfield_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a future randomized controlled trial and does not report any results, data, or numeric PD parameters. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Wu_2024 | not_relevant | 0 | 0 | The paper studies the metabolomic response of a diatom to Erythromycin, not the pharmacodynamics of Thiamine. |
| popPK | Xie_2014 | relevant | 9 | 2 | The study reports a one-compartment PK model for thiamine and bioavailability ratios, but specific numeric values for clearance, volume, or half-life are not present in the provided text. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The study evaluates the efficacy of conbercept for diabetic macular edema and does not involve thiamine or its pharmacokinetics. |
| popPK | Zeng_2023 | irrelevant | 0 | 0 | The paper describes the structural basis of OCT1 transport via cryo-EM and does not report quantitative pharmacokinetic parameters for thiamine. |
| PD | Zeng_2023 | not_relevant | 0 | 0 | The paper is a structural biology study (cryo-EM) describing the binding mode of thiamine to OCT1; it does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters like Emax or EC50. |
| PD | Zhang_2016 | not_relevant | 0 | 0 | The paper describes a fluorescent sensor for trypsin activity and inhibitor screening, which is unrelated to the pharmacodynamics of Thiamine. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a proteomic study of BBB transporter proteins and does not report pharmacokinetic parameters for thiamine. |
| PD | Zhou_2025 | not_relevant | 0 | 0 | The paper focuses on proteomic profiling of BBB transporters and uses PBPK modeling to simulate phenytoin distribution; it does not report any pharmacodynamic (exposure- or dose-response) relationship or numeric PD parameters for thiamine. |
| PGx | de_2024 | not_relevant | 0 | 0 | The paper describes the genome assembly of yeast strains for fermentation and does not report pharmacogenomic effects on thiamine pharmacokinetics or pharmacodynamics in humans. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 07:09 UTC</sub>
