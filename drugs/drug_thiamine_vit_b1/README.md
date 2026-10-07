<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11D&quot;,&quot;href&quot;:&quot;atc/A11D.md&quot;},{&quot;label&quot;:&quot;thiamine (vit B1)&quot;}]"></div>

# thiamine (vit B1)

- **generic name:** thiamine (vit B1)
- **ATC codes:** `A11DA01`
- **DrugBank:** [DB00152](https://go.drugbank.com/drugs/DB00152) · **PubChem:** [CID 1130](https://pubchem.ncbi.nlm.nih.gov/compound/1130)
- **molar mass:** 265.355 g/mol (C12H17N4OS) — DrugBank
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Thiamine (vitamin B1) is used to treat or prevent thiamine deficiency states such as beriberi and Wernicke encephalopathy, and related conditions like alcoholic neuropathy. It is widely used worldwide, appears on the WHO essential medicines list, is approved as a supplement and medicine, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q83187](https://www.wikidata.org/wiki/Q83187) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:33 | 1:09 | 0/0/1 | 0/1/0 | 0/0/0 | 118,841/4,497 | einfracz / qwen3.8-27b | 6 | 3/5 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: not captured</sub> | [Rindi_1980_rats](drugs/drug_thiamine_vit_b1/ThiamineVitB1_Rindi1980_rats.md) | — | — (no model) | 0 | Rindi G et al., Thiamine content and turnover rates of…, Brain research (1980) | [10.1016/0006-8993(80)90619-8](https://doi.org/10.1016/0006-8993(80)90619-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Wang_2024_CMT](drugs/drug_thiamine_vit_b1/pd_Wang_2024_CMT.md) | Central macular thickness ← thiamine_vit_b1 · inhibition effect | — | Wang Y et al., Evaluation of the First-Dose Anti-VEGF…, Ophthalmic research (2024) | [10.1159/000534820](https://doi.org/10.1159/000534820) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=thiamine_vit_b1) page (add drugs there; the set becomes a link).

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

- **PubMed hits:** 268 matched, 65 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hess_2021.pdf` | Hess EK et al., Pharmacokinetics of thiamine (vitamin B…, Journal of veterinary pharm… (2021) | popPK | 10 | [10.1111/jvp.13007](https://doi.org/10.1111/jvp.13007) | [34407222](https://pubmed.ncbi.nlm.nih.gov/34407222) | The study reports quantitative PK parameters (half-life, clearance trends, AUC) for thiamine in horses, with specific half-life ranges provided in the abstract. |
| `Pipkin_1982.pdf` | Pipkin JD et al., Thiamine whole blood and urinary pharma…, Journal of pharmaceutical s… (1982) | popPK | 10 | [10.1002/jps.2600710208](https://doi.org/10.1002/jps.2600710208) | [7062238](https://pubmed.ncbi.nlm.nih.gov/7062238) | The study reports quantitative pharmacokinetic parameters (AUC, Vd, half-life, clearance) for thiamine in rats, but specific numeric values are not present in the provided evidence. |
| `Weber_1990.pdf` | Weber W et al., Nonlinear kinetics of the thiamine cati…, Journal of pharmacokinetics… (1990) | popPK | 9 | [10.1007/BF01073936](https://doi.org/10.1007/BF01073936) | [2280348](https://pubmed.ncbi.nlm.nih.gov/2280348) | The paper describes a quantitative pharmacokinetic study of thiamine in humans with nonlinear clearance mechanisms, but specific numeric parameter values are not present in the provided text. |
| `Xie_2014.pdf` | Xie F et al., Pharmacokinetic study of benfotiamine a…, Journal of clinical pharmac… (2014) | popPK | 8 | [10.1002/jcph.261](https://doi.org/10.1002/jcph.261) | [24399744](https://pubmed.ncbi.nlm.nih.gov/24399744) | The study reports PK parameters for thiamine, but specific numeric values for clearance, volume, or half-life are not present in the provided text (only bioavailability ratios are visible). |
| `Patrini_1993.pdf` | Patrini C et al., Effects of phenytoin on the in vivo kin…, Brain research (1993) | popPK | 7 | [10.1016/0006-8993(93)90953-k](https://doi.org/10.1016/0006-8993(93)90953-k) | [8313145](https://pubmed.ncbi.nlm.nih.gov/8313145) | The study reports quantitative pharmacokinetic parameters (fractional rate constants, turnover rates, and turnover times) for thiamine and its phosphoesters in rat tissues following a compartmental model analysis. |
| `Rindi_1980.pdf` | Rindi G et al., Thiamine content and turnover rates of…, Brain research (1980) | popPK | 7 | [10.1016/0006-8993(80)90619-8](https://doi.org/10.1016/0006-8993(80)90619-8) | [7350971](https://pubmed.ncbi.nlm.nih.gov/7350971) | The study reports quantitative turnover rates and rate constants for thiamine in rat nervous tissues using a compartmental model. |
| `Davies_2007.pdf` | Davies SJ et al., PRN prescribing in psychiatric inpatien…, Journal of psychopharmacolo… (2007) | pgx | 7 | [10.1177/0269881107067242](https://doi.org/10.1177/0269881107067242) | [17329294](https://www.ncbi.nlm.nih.gov/pubmed/17329294) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T16:33:19.824226+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The paper is a clinical study on meibomian gland dysfunction treatment using intense pulsed light and contains no pharmacokinetic data for thiamine. |
| popPK | Arian_2025 | irrelevant | 0 | 0 | The study focuses on metformin pharmacokinetics and the role of thiamine transporters (ThTr-1/2) in metformin absorption, not the pharmacokinetics of thiamine (vitamin B1) itself. |
| PD | Asikainen_2006 | not_relevant | 0 | 0 | The paper studies a PHD inhibitor (FG-4095) for BPD in baboons and does not mention thiamine or report any exposure-response or dose-response data for thiamine. |
| popPK | Başkan_2026 | irrelevant | 0 | 0 | The paper investigates ophthalmic outcomes of anti-VEGF therapy for diabetic macular edema and does not involve thiamine or pharmacokinetics. |
| popPK | Bitsch_1991 | irrelevant | 4 | 0 | The paper reports bioavailability parameters (AUC, Cmax) for thiamine derivatives (benfotiamine/thiamin mononitrate) but does not report specific compartmental PK parameters (CL, V, t1/2, ka) or numeric values are not provided in the evidence. |
| popPK | Bloos_2023 | irrelevant | 0 | 0 | The paper is a review of sepsis therapy guidelines and does not contain pharmacokinetic studies or quantitative disposition parameters for thiamine. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Branson_2011 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or pharmacodynamic parameters. |
| popPK | Byerly_2020 | irrelevant | 0 | 0 | This is an observational study on mortality and lactate clearance outcomes, not a pharmacokinetic study, and contains no PK parameters. |
| PD | CACIOPPO_1951 | not_relevant | 0 | 0 | The paper describes the enzymatic degradation (scission) of thiamine by thiaminase in vitro, which is a stability or metabolic degradation study, not a pharmacodynamic exposure-response or dose-response analysis of thiamine's biological effect. |
| popPK | Chan_2023 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic and medicinal chemistry study focusing on the enzymatic inhibition of ThDP-dependent enzymes by thiamine analogues, without reporting any pharmacokinetic parameters (CL, V, etc.) for thiamine. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study investigates dexamethasone implants in the eye and does not involve thiamine or its pharmacokinetics. |
| popPK | Chungchunlam_2024 | irrelevant | 1 | 0 | The paper is a narrative review of food bioavailability percentages and does not report quantitative pharmacokinetic parameters (e.g., CL, V, ka) or a population-PK model for thiamine. |
| PD | DESSI_1950 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess pharmacodynamic relationships. |
| PGx | Davies_2007 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetic interactions in psychiatry and does not mention thiamine (Vitamin B1) or any specific gene variants affecting its PK/PD. |
| popPK | Davis_1984 | relevant | 5 | 4 | The study reports renal clearance ratios and serum concentration changes for thiamine in humans, but lacks a full compartmental PK model (CL, V, T1/2) and specific clearance values are referenced to tables that are not fully detailed in the text. |
| PD | Day_2004 | not_relevant | 2 | 1 | The paper is a systematic review that qualitatively summarizes a dose-response trial but explicitly states the results did not present a simple dose-response relationship and lacks extractable numeric PD parameters like Emax or EC50. |
| popPK | ElKhooly_2024 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of thiamine (vitamin B1) in preventing diabetic nephropathy and analyzes biochemical markers (HMGB1, TLR4, etc.) rather than reporting quantitative pharmacokinetic parameters (CL, Vd, ka) for the drug itself. |
| popPK | Eldon_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for vardenafil (RT234), not thiamine/vitamin B1. |
| PD | Eldon_2021 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) parameters and safety data for vardenafil, with no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Euteneuer_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine, not thiamine (vitamin B1). |
| PD | Euteneuer_2020 | not_relevant | 0 | 0 | The paper focuses on morphine pharmacokinetics and Bayesian estimation in neonates, not thiamine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Gauda_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clonidine, not thiamine_vit_b1. |
| PD | Gauda_2022 | not_relevant | 0 | 0 | The paper studies clonidine, not thiamine, and does not report a concentration-effect or dose-response relationship with numeric PD parameters for thiamine. |
| popPK | Go_2026 | irrelevant | 0 | 0 | The study is an observational claims analysis of drug-drug interaction prevalence in nursing home residents and does not report any pharmacokinetic parameters for thiamine or any other drug. |
| PD | Go_2026 | not_relevant | 0 | 0 | The paper is an epidemiological study on drug-drug interaction prevalence in nursing home residents and contains no pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or dose-response analysis for thiamine or any other drug. |
| popPK | Gonçalves_2024 | irrelevant | 0 | 0 | The study measures steady-state tissue and erythrocyte thiamine concentrations after benfotiamine supplementation to assess energy metabolism, but does not report pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Gregory_1997 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PGx | Hagstrom_2013 | not_relevant | 0 | 0 | The paper investigates pharmacogenetics of anti-VEGF therapy for AMD, which is unrelated to the drug thiamine (vitamin B1). |
| popPK | Huang_2018 | irrelevant | 0 | 0 | The study focuses on exercise physiology, performance, and subacute toxicity of a thiamine derivative (TTFD) in mice, without reporting quantitative pharmacokinetic parameters (CL, V, ka) for thiamine or TTFD. |
| popPK | Jadán-Piedra_2018 | irrelevant | 0 | 0 | The study is an in vitro evaluation of mercury bioavailability reduction, where thiamine acts only as an interacting dietary compound, not as the subject drug for PK modeling. |
| popPK | Kabata_2026 | irrelevant | 0 | 0 | The paper analyzes epidemiological trends of intravitreal anti-VEGF injections (aflibercept, ranibizumab, etc.) and does not involve thiamine or pharmacokinetic modeling. |
| PD | Kabata_2026 | not_relevant | 0 | 0 | The paper analyzes nationwide trends in intravitreal injection utilization and anti-VEGF agent market share using administrative claims data; it does not report any pharmacodynamic, exposure-response, or dose-response relationships for thiamine or any other drug. |
| PD | Kaplan_2026 | not_relevant | 0 | 0 | The paper analyzes prognostic factors (OCT features and early visual response) for anti-VEGF therapy in diabetic macular edema and does not involve thiamine or report any pharmacodynamic exposure-response relationship. |
| popPK | Khokhar_1990 | irrelevant | 1 | 0 | The study reports comparative changes in serum concentrations of thiamine in rats fed different fibers, but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or compartmental models. |
| PD | LOLLI_1957 | not_relevant | 0 | 0 | The paper studies the interaction of ganglioplegics and aneurin (thiamine) on muscle fibers, which is a pharmacological/toxicological study, not a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response analysis with numeric PD parameters. |
| PGx | Lazzeri_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of ranibizumab (an anti-VEGF agent), not thiamine (vitamin B1). |
| popPK | Legouis_2020 | irrelevant | 0 | 0 | The paper investigates renal glucose and lactate metabolism and the therapeutic effect of thiamine on mortality in AKI, but does not report pharmacokinetic parameters (clearance, volume, etc.) for thiamine itself. |
| popPK | Lindschinger_2020 | irrelevant | 0 | 0 | The study measures serum levels of B vitamins but does not report quantitative pharmacokinetic parameters (clearance, volume, half-life) or compartmental models for thiamine. |
| PD | MEIJER_1949 | not_relevant | 0 | 0 | The provided text contains papers on paleobotany, fluoroacetate toxicity, in vitro thiamine metabolism, and piezoelectric coefficients, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for thiamine in vivo. |
| popPK | Mascher_1993 | irrelevant | 1 | 0 | The paper describes an analytical method for a bioavailability study and mentions that pharmacokinetic parameters were determined, but no quantitative values (CL, V, t1/2, etc.) are provided in the evidence. |
| PGx | Medina_2019 | not_relevant | 0 | 0 | The paper investigates anti-VEGF treatment for AMD, not thiamine (Vitamin B1). |
| popPK | Mulyukov_2018 | irrelevant | 0 | 0 | The paper is a pharmacodynamic model of visual acuity in response to ranibizumab for macular degeneration, unrelated to thiamine pharmacokinetics. |
| PD | Mulyukov_2018 | not_relevant | 0 | 0 | The paper reports a PD model for ranibizumab, not thiamine (vit B1). |
| PD | Nguyen_2024 | not_relevant | 0 | 0 | The paper is a cross-sectional epidemiological study on opioid prescribing patterns in hospice patients and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for thiamine or any other drug. |
| popPK | Paerl_2018 | irrelevant | 0 | 0 | The paper investigates the prevalence of vitamin B1 auxotrophy in bacterioplankton and does not report any pharmacokinetic parameters for thiamine. |
| PGx | Parmeggiani_2019 | not_relevant | 0 | 0 | The paper studies the drug verteporfin (PDT), not thiamine (vitamin B1). |
| popPK | Patrini_1993 | relevant | 7 | 2 | The study reports quantitative pharmacokinetic parameters (fractional rate constants, turnover rates, and turnover times) for thiamine and its phosphoesters in rat tissues following a compartmental model analysis. |
| popPK | Pipkin_1982 | relevant | 10 | 0 | The study reports quantitative pharmacokinetic parameters (AUC, Vd, half-life, clearance) for thiamine in rats, but specific numeric values are not present in the provided evidence. |
| PD | RODRIGUES_1956 | not_relevant | 0 | 0 | The paper investigates the effect of acetylcholine on turtle hearts following aneurin injection, not the pharmacodynamic relationship of thiamine itself. |
| popPK | Ranhotra_1985 | irrelevant | 1 | 0 | The study measures biological value via biochemical endpoints (ETK activity, liver content) in rats, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Riedl_2022 | irrelevant | 0 | 0 | The study investigates the impact of retinal fluid volume on vision in patients treated with ranibizumab for age-related macular degeneration and does not involve thiamine or pharmacokinetic modeling. |
| popPK | Rubio-Aurioles_2012 | irrelevant | 0 | 0 | The paper concerns tadalafil and sildenafil for erectile dysfunction, with no content related to thiamine_vit_b1 or its pharmacokinetics. |
| popPK | Sambon_2022 | irrelevant | 0 | 0 | The study is an in vitro enzymatic kinetics investigation of thiamine pyrophosphokinase, not a pharmacokinetic study of thiamine disposition in vivo. |
| PGx | Sengul_2018 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of ranibizumab, not thiamine (vitamin B1). |
| popPK | Sharma_2020 | irrelevant | 0 | 0 | The study measures pharmacodynamic/toxicological endpoints (pyridoxic acid, a metabolite of B6) and plasma concentrations of B-vitamins as outcomes, but does not report pharmacokinetic parameters (CL, V, Ka, t1/2) for thiamine. |
| PD | Spaide_2021 | not_relevant | 0 | 0 | The paper analyzes dose-response for anti-VEGF agents (ranibizumab/aflibercept), not thiamine (vit B1). |
| PGx | Valverde-Megías_2017 | not_relevant | 0 | 0 | The study investigates pharmacogenomic predictors for ranibizumab (an anti-VEGF agent), not thiamine (Vitamin B1). |
| popPK | Vinks_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine in neonates, not thiamine_vit_b1. |
| PD | Vinks_2020 | not_relevant | 0 | 0 | The paper focuses on morphine PK/PD in neonates and does not mention thiamine (vitamin B1) or report any PD parameters for it. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper evaluates the clinical response to conbercept (an anti-VEGF agent) in PCV patients and does not involve thiamine (vitamin B1) or report any pharmacodynamic parameters for it. |
| PD | Watanabe_2016 | not_relevant | 0 | 0 | The paper is a clinical review on managing polypharmacy of antidepressants and anxiolytics and does not contain any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for thiamine. |
| popPK | Weber_1990 | relevant | 9 | 0 | The paper describes a quantitative pharmacokinetic study of thiamine in humans with nonlinear clearance mechanisms, but specific numeric parameter values are not present in the provided text. |
| popPK | Woolum_2018 | irrelevant | 0 | 0 | This is a clinical outcome study assessing the effect of thiamine on lactate clearance and mortality in septic shock patients, not a pharmacokinetic study. |
| popPK | Xie_2014 | relevant | 8 | 2 | The study reports PK parameters for thiamine, but specific numeric values for clearance, volume, or half-life are not present in the provided text (only bioavailability ratios are visible). |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The study investigates conbercept for diabetic macular edema and does not involve thiamine or its pharmacokinetics. |
| popPK | Yu_1993 | irrelevant | 0 | 0 | The study measures nutrient bioavailability via urinary excretion in a dietary context, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for thiamine as a drug. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is a conference title and contains no scientific content, data, or pharmacodynamic analysis for thiamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:33 UTC</sub>
