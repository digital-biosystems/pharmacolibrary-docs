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
| 2026-10-07 16:32 | 2:34 | 0/1/0 | 1/0/0 | 0/0/0 | 259,097/10,303 | einfracz / qwen3.8-27b | 20 | 3/19 | 19/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rindi_1980_reference](drugs/drug_thiamine/Thiamine_Rindi1980_reference.md) | — | 1-compartment (no model) | 0 | Rindi G et al., Thiamine content and turnover rates of…, Brain research (1980) | [10.1016/0006-8993(80)90619-8](https://doi.org/10.1016/0006-8993(80)90619-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hosseinzadeh_2016_thiamine_bound_to_lysozyme](drugs/drug_thiamine/pd_Hosseinzadeh_2016_thiamine_bound_to_lysozyme.md) | thiamine bound to lysozyme ← thiamine · target-mediated drug disposition | — | Hosseinzadeh R et al., Biological interaction of thiamine with…, Journal of biomolecular str… (2016) | [10.1080/07391102.2015.1109553](https://doi.org/10.1080/07391102.2015.1109553) |

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
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pipkin_1982.pdf` | Pipkin JD et al., Thiamine whole blood and urinary pharma…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600710208](https://doi.org/10.1002/jps.2600710208) | [7062238](https://pubmed.ncbi.nlm.nih.gov/7062238) | The abstract describes a pharmacokinetic study in rats with specific parameter names (AUC, Vd, Cl, t0.5) but does not list the specific numeric values in the provided text. |
| `Xie_2014.pdf` | Xie F et al., Pharmacokinetic study of benfotiamine a…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.261](https://doi.org/10.1002/jcph.261) | [24399744](https://pubmed.ncbi.nlm.nih.gov/24399744) | The study investigates the pharmacokinetics of thiamine (as a metabolite of benfotiamine) in humans and fits a one-compartment model, but the evidence provided only contains bioavailability percentages, not the specific numeric PK parameters (CL, V, ka, t1/2) which are likely in the missing results/tables. |
| `Patrini_1993.pdf` | Patrini C et al., Effects of phenytoin on the in vivo kin…, Brain research (1993) | popPK | 9 | [10.1016/0006-8993(93)90953-k](https://doi.org/10.1016/0006-8993(93)90953-k) | [8313145](https://pubmed.ncbi.nlm.nih.gov/8313145) | The study reports compartmental kinetic parameters (turnover rates/times) for thiamine, but no specific numeric values are provided in the extracted evidence. |
| `Rindi_1980.pdf` | Rindi G et al., Thiamine content and turnover rates of…, Brain research (1980) | popPK | 7 | [10.1016/0006-8993(80)90619-8](https://doi.org/10.1016/0006-8993(80)90619-8) | [7350971](https://pubmed.ncbi.nlm.nih.gov/7350971) | Reports quantitative turnover rates (µg/g/h), turnover times (h), and fractional rate constants for thiamine in rat nervous tissues using a compartmental model. |
| `Grassl_1994.pdf` | Grassl SM, Choline transport in human placental br…, Biochimica et biophysica ac… (1994) | pd | 4 | [10.1016/0005-2736(94)90221-6](https://doi.org/10.1016/0005-2736(94)90221-6) | [8075137](https://www.ncbi.nlm.nih.gov/pubmed/8075137) | metadata signals extractable PD data (IC50) |
| `Liu_2023.pdf` | Liu HH et al., The ecotoxicological effects of chromiu…, Environmental science and p… (2023) | pd | 4 | [10.1007/s11356-023-26301-0](https://doi.org/10.1007/s11356-023-26301-0) | [36890403](https://www.ncbi.nlm.nih.gov/pubmed/36890403) | metadata signals extractable PD data (EC50) |
| `Zhang_2016.pdf` | Zhang L et al., Label-free, turn-on fluorescent sensor…, Talanta (2016) | pd | 4 | [10.1016/j.talanta.2016.09.011](https://doi.org/10.1016/j.talanta.2016.09.011) | [27769443](https://www.ncbi.nlm.nih.gov/pubmed/27769443) | metadata signals extractable PD data (IC50) |
| `Davies_2007.pdf` | Davies SJ et al., PRN prescribing in psychiatric inpatien…, Journal of psychopharmacolo… (2007) | pgx | 7 | [10.1177/0269881107067242](https://doi.org/10.1177/0269881107067242) | [17329294](https://www.ncbi.nlm.nih.gov/pubmed/17329294) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Cheng_2017.pdf` | Cheng X et al., Fast and robust detection of ancestral…, Molecular ecology (2017) | pgx | 5 | [10.1111/mec.14416](https://doi.org/10.1111/mec.14416) | [29113018](https://www.ncbi.nlm.nih.gov/pubmed/29113018) | metadata signals extractable PGX data (SLC35F3) |

<sub>queue written 2026-10-07T16:31:05.321230+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study regarding Intense Pulsed Light therapy for Meibomian Gland Dysfunction and contains no pharmacokinetic data or mention of thiamine. |
| popPK | Bellazzi_2001 | irrelevant | 2 | 0 | The paper describes a modeling methodology for intracellular thiamine kinetics and qualitative simulations, but provides no numeric pharmacokinetic parameter values (CL, V, ka) in the evidence. |
| PGx | Bokelmann_2018 | not_relevant | 2 | 10 | The paper analyzes OCT1 promoter polymorphisms and their effect on gene expression, and while it mentions thiamine as a substrate, it reports PK/PD data only for drugs like metformin and tropisetron, finding no significant association, rather than characterizing a pharmacogenomic effect on thiamine PK/PD. |
| PGx | Bravatà_2014 | not_relevant | 0 | 0 | The paper is a negative case report finding no known mutations in a patient with beriberi, rather than reporting a pharmacogenomic effect of a genotype on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Brigatti_2026 | irrelevant | 0 | 0 | The paper describes a clinical trial design for maple syrup urine disease and does not study thiamine or its pharmacokinetics. |
| PD | Brigatti_2026 | not_relevant | 0 | 0 | The paper describes a natural history cohort for external controls in maple syrup urine disease and does not report any pharmacodynamic or exposure-response analysis for thiamine. |
| PGx | Bruhn_2024 | not_relevant | 0 | 0 | The paper reports on genetic variants causing an enzyme deficiency (PDCD) and mentions thiamine kinase, but it does not investigate thiamine as a drug or report pharmacokinetic/pharmacodynamic parameters (like AUC or response) of thiamine therapy. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper investigates the metabolomic signature of cough variant asthma and mentions thiamine phosphate as a disease/treatment biomarker, but does not report a pharmacogenomic effect (gene variant) on the PK/PD of thiamine. |
| PGx | Cheng_2017 | not_relevant | 0 | 0 | The paper identifies a candidate gene for ancestral selection using population genomic methods but does not report any pharmacogenomic effects on thiamine pharmacokinetics or pharmacodynamics. |
| PGx | Davies_2007 | not_relevant | 0 | 0 | The paper discusses PRN prescribing and potential drug-drug interactions involving CYP enzymes in psychiatric patients, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of thiamine. |
| popPK | Du_2021 | irrelevant | 0 | 0 | The study focuses on engineering RNA sensors for the detection of thiamine pyrophosphate (TPP) concentrations (analytical chemistry), not on measuring pharmacokinetic parameters like clearance, volume, or half-life. |
| PD | Du_2021 | not_relevant | 0 | 0 | The paper describes an analytical method (ribosensor) for detecting thiamine pyrophosphate, not a pharmacodynamic study of thiamine's biological effects; the reported EC50 is a sensor binding parameter, not a drug response parameter. |
| popPK | Duan_2025 | irrelevant | 0 | 0 | The paper is a clinical trial on cognitive function where thiamine is only a minor component of a supplement, with no pharmacokinetic parameters reported. |
| PGx | Díaz-Muñoz_2026 | not_relevant | 2 | 0 | The paper describes a gene-diet interaction (genotype modulating the effect of thiamine intake on stool frequency), not the effect of a gene variant on a pharmacokinetic or pharmacodynamic parameter of thiamine. |
| popPK | Edwards_2026 | irrelevant | 0 | 0 | This is a mechanistic/enzymatic assay study for transketolase activity in fish to probe thiamine utilization, not a pharmacokinetic study reporting disposition parameters (CL, V, Ka, etc.) for thiamine. |
| popPK | Ejsmond_2025 | irrelevant | 0 | 0 | The paper presents a theoretical model of micronutrient allocation trade-offs in salmonids, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Ejsmond_2025 | not_relevant | 1 | 0 | The paper presents a theoretical physiological allocation model and qualitative correlations between tissue thiamine levels and fitness traits, but does not report a pharmacodynamic exposure-response relationship with numeric PD parameters (e.g., Emax, EC50) for a drug effect. |
| PGx | Enogieru_2021 | not_relevant | 5 | 6 | The paper characterizes variants of the thiamine transporter SLC19A2, which is a drug target/inhibitor study rather than a report on how a gene variant alters the PK/PD of a specific administered drug, and no fitted pharmacogenomic effect size for a therapeutic agent is provided. |
| PGx | Fritsch_1983 | not_relevant | 1 | 0 | The paper reports that thiamine treatment had no clinical or biochemical effect, but it does not link this outcome to a specific genetic variant or genotype affecting PK/PD. |
| popPK | Gallant_2021 | irrelevant | 0 | 0 | The study is a nutritional intervention trial reporting steady-state concentrations in milk and blood, not a pharmacokinetic study deriving disposition parameters like clearance or volume of distribution. |
| PD | Gallant_2021 | not_relevant | 0 | 0 | The paper reports changes in milk thiamine concentrations following supplementation but does not provide a pharmacokinetic-pharmacodynamic model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Girija_1982 | not_relevant | 4 | 2 | The paper mentions calculating bioavailability from individual dose-response curves but the provided text only contains qualitative conclusions and does not report specific numeric PD parameters (Emax, EC50, etc.) or the underlying data. |
| popPK | Go_2026 | irrelevant | 0 | 0 | This is a pharmacoepidemiological study on drug-drug interactions in nursing home residents, not a pharmacokinetic study of thiamine. |
| PD | Go_2026 | not_relevant | 0 | 0 | The paper is an epidemiological study on drug-drug interaction prevalence in nursing home residents and contains no pharmacokinetic or pharmacodynamic modeling or data for Thiamine. |
| PD | Grassl_1994 | not_relevant | 0 | 0 | The paper focuses on choline transport in placental vesicles and does not report any pharmacodynamic or exposure-response data for thiamine. |
| PGx | Habeb_2018 | not_relevant | 4 | 6 | The paper reports pharmacodynamic effects (glycemic control improvement) of thiamine in a monogenic disease (TRMA) rather than a pharmacokinetic change in thiamine levels driven by a polymorphism in a drug-metabolizing gene. |
| PGx | Haberkorn_2021 | not_relevant | 3 | 2 | The paper is a review of in vitro cell models for OCT1 transport; while it mentions thiamine as a substrate and discusses polymorphisms in general, it does not provide specific, direct evidence linking a specific gene variant to a quantified PK/PD change for thiamine in a clinical or direct functional context. |
| PGx | Hagstrom_2013 | not_relevant | 0 | 0 | The study investigates pharmacogenetics for anti-VEGF therapy in AMD and does not involve thiamine or its PK/PD parameters. |
| PGx | Hassan_2023 | not_relevant | 0 | 0 | The paper is a review of episodic ataxia etiologies and does not report pharmacogenomic effects on thiamine PK or PD parameters. |
| popPK | Hoetzel_2026 | irrelevant | 0 | 0 | The paper is a synthetic biology study on a doxycycline-binding RNA aptamer, unrelated to thiamine pharmacokinetics. |
| popPK | Hosseinzadeh_2016 | irrelevant | 0 | 0 | The study examines the binding interaction of thiamine with lysozyme (in vitro biophysical study), not pharmacokinetic disposition parameters. |
| PD | Impeduglia_1987 | not_relevant | 3 | 2 | The paper describes qualitative changes in ethanol response (behavioral impairment/hypothermia) relative to blood ethanol concentrations (BEC) in rats, but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for thiamine itself; it focuses on the interaction between thiamine status and ethanol PK/PD. |
| PGx | Israels_1976 | not_relevant | 0 | 0 | The paper discusses lactic acidosis in children and mentions a metabolic block in thiamine triphosphate formation in Leigh's disease, but it does not report a pharmacogenomic study linking a specific genetic variant to the pharmacokinetics or pharmacodynamics of thiamine therapy. |
| PGx | Jensen_2020 | not_relevant | 0 | 0 | The study explicitly reports that thiamine pharmacokinetics did not differ depending on OCT1 genotype. |
| PGx | Khan_2025 | not_relevant | 0 | 0 | The paper investigates plant physiology and stress responses in Rhododendron, not human pharmacogenomics. |
| PGx | Kong_2026 | not_relevant | 0 | 0 | The paper is a review recommending thiamine against routine use due to insufficient evidence and explicitly notes a lack of genotype-guided precision supplementation data. |
| PGx | Koronica_2026 | not_relevant | 0 | 0 | The paper focuses on CYP3A4/2B6 polymorphisms affecting the metabolism of Ifosfamide, not the pharmacokinetics or pharmacodynamics of thiamine. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper is a proteomics study of tau protein in neurodegenerative diseases and has no relation to thiamine pharmacokinetics. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper focuses on proteomic characterization of tau protein in neurodegenerative diseases and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PD | Labib_2019 | not_relevant | 0 | 0 | The text is a general review of sepsis care pathways and mentions thiamine only as part of a clinical trial (HYVITS) without providing any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PD | Lai_1986 | not_relevant | 0 | 0 | The paper studies the kinetic properties of the alpha-ketoglutarate dehydrogenase complex enzyme, not the pharmacodynamic response of the drug Thiamine in a biological system. |
| popPK | Lani_2026 | irrelevant | 0 | 0 | This is a review of date palm nutritional and phytochemical properties; thiamine is only listed as a minor micronutrient content in the fruit, with no pharmacokinetic parameters or models provided. |
| PD | Lani_2026 | not_relevant | 0 | 0 | The paper is a narrative review of date palm (Phoenix dactylifera) nutraceuticals and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PGx | Lazzeri_2016 | not_relevant | 0 | 0 | The study investigates pharmacogenomics of ranibizumab, not thiamine. |
| PD | Lee_1985 | not_relevant | 4 | 2 | The paper describes a qualitative leftward shift in the dose-response curve for serotonin in thiamine-deficient rats but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect data in the text. |
| PD | Levine_1978 | not_relevant | 2 | 1 | The paper describes a qualitative synergistic effect of coenzymes on PDS-induced contractures but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for thiamine. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The paper discusses mutations causing Maple Syrup Urine Disease, a genetic disorder affecting branched-chain amino acid metabolism, rather than the pharmacokinetics or pharmacodynamics of thiamine as a therapeutic drug. |
| PD | Li_2024 | not_relevant | 1 | 0 | The paper identifies thiamine pyrophosphate as a P2Y6R antagonist but does not provide numeric PD parameters (e.g., IC50, Emax) or an exposure-response curve in the provided text. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a mechanistic antifungal study on a plant derivative affecting a fungal thiamine biosynthesis pathway, not a pharmacokinetic study of thiamine disposition. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports an EC50 for the fungicide sorbauphylin A, not for thiamine; thiamine is only mentioned as a biosynthetic pathway target, with no exposure-response or dose-response data for thiamine itself. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Liu_2023 | not_relevant | 0 | 0 | The paper investigates the ecotoxicological effects of chromium (III) oxide nanoparticles on Chlorella sp. and does not mention Thiamine or report any pharmacodynamic or exposure-response relationships for it. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper investigates gut microbiome structural variations as biomarkers for autism, mentioning thiamine metabolism only in the context of bacterial gene function, with no pharmacokinetic data for thiamine. |
| PGx | Lu_2015 | not_relevant | 0 | 0 | The study correlates thiamine metabolite levels (TDP) with cognitive function and factors like APOE status, but does not report how a gene variant changes the pharmacokinetics or pharmacodynamics of thiamine itself. |
| popPK | Lyu_2025 | irrelevant | 0 | 0 | The study focuses on glucocorticoid-induced changes in gut microbiota and metabolic markers in humans, with no mention of thiamine pharmacokinetics or thiamine as a subject drug. |
| PD | Lyu_2025 | not_relevant | 0 | 0 | The paper investigates the effects of glucocorticoids on gut microbiota and does not report any pharmacodynamic or exposure-response data for Thiamine. |
| PD | Martin_1985 | not_relevant | 2 | 1 | The text describes qualitative changes in ethanol response (AUC, impairment, hypothermia) due to thiamine deficiency but does not provide numeric PD parameters or an extractable concentration-effect curve. |
| PGx | Medina_2019 | not_relevant | 0 | 0 | The paper investigates the effect of CFH genotype on the clinical response to anti-VEGF therapy for AMD, not a pharmacokinetic or pharmacodynamic parameter of thiamine. |
| PGx | Nagarajan_2026 | not_relevant | 0 | 0 | The study analyzes genetic interactions with sleepiness for sleep apnea severity; the mention of thiamine deficiency is in the conclusion regarding biological pathways, not a pharmacogenomic effect on thiamine pharmacokinetics or pharmacodynamics. |
| PGx | Nakandala_2024 | not_relevant | 0 | 0 | The paper describes the genome assembly and comparative genomics of Australian wild limes; it is not a pharmacogenomic study of thiamine pharmacokinetics or pharmacodynamics. |
| PGx | Parmeggiani_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effect of MTHFR on the efficacy of photodynamic therapy with verteporfin, not on the PK/PD of thiamine. |
| popPK | Patrini_1993 | relevant | 9 | 0 | The study reports compartmental kinetic parameters (turnover rates/times) for thiamine, but no specific numeric values are provided in the extracted evidence. |
| PGx | Pinilla_2025 | not_relevant | 0 | 0 | The paper is a case report of ifosfamide-induced encephalopathy and discusses drug interactions with netupitant/palonosetron, but it does not report any pharmacogenomic analysis or effect on thiamine's PK/PD parameters. |
| popPK | Pipkin_1982 | relevant | 10 | 3 | The abstract describes a pharmacokinetic study in rats with specific parameter names (AUC, Vd, Cl, t0.5) but does not list the specific numeric values in the provided text. |
| popPK | Porter_2025 | irrelevant | 0 | 0 | The study measures enzymatic kinetics of thiaminase (destruction of thiamine) in fish extracts, not the pharmacokinetic disposition parameters (CL, V, etc.) of thiamine in a biological subject. |
| PD | Porter_2025 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Michaelis-Menten) for thiaminase activity, not a pharmacodynamic exposure-response relationship for thiamine as a drug. |
| PD | Rao_2020 | not_relevant | 1 | 0 | The text is a qualitative review of alcohol use disorders and mentions thiamine treatment for Wernicke's encephalopathy but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| PGx | Sainz_2015 | not_relevant | 0 | 0 | The paper discusses the source of cellular autofluorescence (riboflavin vs lipofuscin) in cancer stem cells and does not report on thiamine pharmacokinetics or pharmacodynamics. |
| PD | Schron_1988 | not_relevant | 0 | 0 | The paper investigates folate carrier kinetics and anion specificity; thiamine is only mentioned as a non-inhibitor of folate uptake, with no PD or exposure-response analysis for thiamine. |
| PGx | Sengul_2018 | not_relevant | 0 | 0 | The paper discusses ranibizumab and CFH variants, not thiamine. |
| PGx | Taberner_2016 | not_relevant | 0 | 0 | The study discusses neonatal diabetes genetics (e.g., SLC19A2 mutation in Thiamine-Responsive Megaloblastic Anemia) but does not report on the pharmacokinetics or pharmacodynamics of thiamine. |
| PGx | Tazhibaev_1982 | not_relevant | 0 | 0 | The paper discusses the impact of nutritional deficiencies (including thiamine) on calcium and phosphorus balance, not the effect of genetic variants on thiamine pharmacokinetics or pharmacodynamics. |
| PGx | Thompson_2023 | not_relevant | 0 | 0 | The paper is a clinical case report describing a genetic disorder (THMD5) and its treatment, without reporting pharmacokinetic or pharmacodynamic parameter measurements or quantitative genetic effect sizes. |
| PGx | Torchia_2025 | not_relevant | 0 | 0 | The paper is a review on ifosfamide-induced encephalopathy and mentions thiamine as a treatment for ifosfamide toxicity, but it does not report any pharmacogenomic effects of thiamine. |
| PD | Umemoto_1989 | not_relevant | 0 | 0 | The paper focuses on methotrexate antibody conjugates and only mentions thiamine pyrophosphate qualitatively as a control inhibitor, providing no exposure-response or dose-response data for thiamine. |
| PGx | Valverde-Megías_2017 | not_relevant | 0 | 1 | The study investigates ranibizumab, an anti-VEGF biologic, not thiamine. |
| popPK | Voskoboev_1976 | irrelevant | 0 | 0 | The study focuses on the in-vitro enzymology and allosteric properties of thiamine pyrophosphokinase, not on the pharmacokinetic disposition of thiamine. |
| PD | Voskoboev_1976 | not_relevant | 0 | 0 | The paper describes the quaternary structure and allosteric properties of an enzyme (thiamine pyrophosphokinase) in vitro, not a pharmacodynamic exposure-response relationship for the drug thiamine in a biological system. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper reports dietary intake data and prevalence of deficiency, not pharmacokinetic parameters (CL, V, etc.). |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The paper examines the association between thiamine diphosphate levels and Alzheimer's disease, but does not report the effect of gene variants on the pharmacokinetics or pharmacodynamics of thiamine. |
| PGx | Weyandt_2022 | not_relevant | 0 | 0 | The paper is a comparative genomics study of Wolbachia bacteria in nematodes and contains no human pharmacogenomics or pharmacokinetic data. |
| popPK | Whitfield_2019 | irrelevant | 2 | 0 | This is a study protocol for a nutritional intervention trial focusing on dose-response in human milk, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| PD | Whitfield_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a future randomized controlled trial and does not report any results, data, or numeric PD parameters. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study is a metabolomic/toxicological analysis of marine algae exposed to erythromycin, where thiamine is only mentioned as a metabolite within a pathway, not as a subject drug for PK parameter estimation. |
| PD | Wu_2024 | not_relevant | 0 | 0 | The paper studies the metabolomic response of a diatom to Erythromycin, not the pharmacodynamics of Thiamine. |
| popPK | Xie_2014 | relevant | 10 | 4 | The study investigates the pharmacokinetics of thiamine (as a metabolite of benfotiamine) in humans and fits a one-compartment model, but the evidence provided only contains bioavailability percentages, not the specific numeric PK parameters (CL, V, ka, t1/2) which are likely in the missing results/tables. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The study evaluates the efficacy of conbercept for diabetic macular edema and does not involve thiamine or report any pharmacokinetic parameters for thiamine. |
| popPK | Zeng_2023 | irrelevant | 0 | 0 | The study is a structural biology paper on the OCT1 transporter and does not report pharmacokinetic parameters for thiamine. |
| PD | Zeng_2023 | not_relevant | 0 | 0 | The paper is a structural biology study (cryo-EM) describing the binding mode of thiamine to OCT1; it does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters like Emax or EC50. |
| PD | Zhang_2016 | not_relevant | 0 | 0 | The paper describes a fluorescent sensor for trypsin activity and inhibitor screening, which is unrelated to the pharmacodynamics of Thiamine. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The study is a proteomic analysis of brain microvessels focusing on transporter proteins and does not report any pharmacokinetic parameters for thiamine. |
| PD | Zhou_2025 | not_relevant | 0 | 0 | The paper focuses on proteomic profiling of BBB transporters and uses PBPK modeling to simulate phenytoin distribution; it does not report any pharmacodynamic (exposure- or dose-response) relationship or numeric PD parameters for thiamine. |
| PGx | de_2024 | not_relevant | 0 | 0 | The paper analyzes the genomes of yeast strains for mead production and mentions copy number variations in yeast genes related to thiamine metabolism, but it does not report any pharmacogenomic effects on human pharmacokinetics or pharmacodynamics of thiamine as a drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:31 UTC</sub>
