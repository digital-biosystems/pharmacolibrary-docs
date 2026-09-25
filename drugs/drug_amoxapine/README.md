<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;amoxapine&quot;}]"></div>

# amoxapine

- **generic name:** amoxapine
- **ATC codes:** `N06AA17`
- **DrugBank:** [DB00543](https://go.drugbank.com/drugs/DB00543)
- **groups:** approved

## About

**Description.** Amoxapine, the <i>N</i>-demethylated derivative of the antipsychotic agent loxapine, is a dibenzoxazepine-derivative tricyclic antidepressant (TCA). TCAs are structurally similar to phenothiazines. They contain a tricyclic ring system with an alkyl amine substituent on the central ring. In non-depressed individuals, amoxapine does not affect mood or arousal, but may cause sedation. In depressed individuals, amoxapine exerts a positive effect on mood. TCAs are potent inhibitors of serotonin and norepinephrine reuptake. In addition, TCAs down-regulate cerebral cortical &beta;-adrenergic receptors and sensitize post-synaptic serotonergic receptors with chronic use. The antidepressant effects of TCAs are thought to be due to an overall increase in serotonergic neurotransmission. TCAs also block histamine H<sub>1</sub> receptors, &alpha;<sub>1</sub>-adrenergic receptors and muscarinic receptors, which accounts for their sedative, hypotensive and anticholinergic effects (e.g. blurred vision, dry mouth, constipation, urinary retention), respectively. See toxicity section below for a complete listing of side effects. Amoxapine may be used to treat neurotic and reactive depressive disorders, endogenous and psychotic depression, and mixed symptoms of depression and anxiety or agitation.

**Indication.** For the relief of symptoms of depression in patients with neurotic or reactive depressive disorders as well as endogenous and psychotic depressions. May also be used to treat depression accompanied by anxiety or agitation.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 19:43 | 16:10 | 0/0/0 | 0/0/0 | 0/0/0 | 84,687/4,425 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 3/3 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amoxapine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Rapidly and almost completely absorbed from the GI tract. Peak plasma concentrations occur…”</sub> | prose |
| distribution | blood | `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…lly as conjugated metabolites. 7-18% of the dose is excrete feces mainly as unconjugated m…”</sub> | prose |
| excretion | kidney | <sub>“…single orally administered dose of amoxapine is excreted in urine, principally as conjugat…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), CHRM1 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), GABRA1 (binder), GABRA1 (target), HRH1 (target), HRH4 (binder), HTR1A (target), HTR1B (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR3A (target), HTR6 (target), HTR7 (target), SLC6A2 (inhibitor), SLC6A3 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 51 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Calvo_1985.pdf` | Calvo B et al., Pharmacokinetics of amoxapine and its a…, International journal of cl… (1985) | popPK | 9 | not captured | [3997304](https://pubmed.ncbi.nlm.nih.gov/3997304) | The study reports quantitative PK parameters (Cmax, tmax, half-life, first-pass loss) for amoxapine in humans, with values explicitly present in the text. |
| `Pawar_2023.pdf` | Pawar SD et al., Amoxapine-Loaded Solid Lipid Nanopartic…, ACS chemical neuroscience (2023) | popPK | 8 | [10.1021/acschemneuro.2c00673](https://doi.org/10.1021/acschemneuro.2c00673) | [37027804](https://pubmed.ncbi.nlm.nih.gov/37027804) | The study reports in vivo PK data for amoxapine in rats, but the evidence only provides peak plasma concentrations (Cmax) and qualitative bioavailability ratios, lacking specific quantitative disposition parameters like clearance, volume of distribution, or half-life. |
| `Akiyoshi_1996.pdf` | Akiyoshi J et al., Effects of antidepressants on intracell…, Biological psychiatry (1996) | pd | 5 | [10.1016/0006-3223(95)00309-6](https://doi.org/10.1016/0006-3223(95)00309-6) | [8780834](https://www.ncbi.nlm.nih.gov/pubmed/8780834) | metadata signals extractable PD data (EC50) |
| `Gozlan_1991.pdf` | Gozlan H et al., [Preclinical pharmacology of amoxapine…, L'Encephale (1991) | pd | 4 | not captured | [1666997](https://www.ncbi.nlm.nih.gov/pubmed/1666997) | metadata signals extractable PD data (IC50) |
| `Ikeda_1989.pdf` | Ikeda M et al., Amoxapine inhibition of GABA-stimulated…, Life sciences (1989) | pd | 4 | [10.1016/0024-3205(89)90544-4](https://doi.org/10.1016/0024-3205(89)90544-4) | [2557507](https://www.ncbi.nlm.nih.gov/pubmed/2557507) | metadata signals extractable PD data (IC50) |
| `Pawar_2026.pdf` | Pawar SD et al., Cytochrome P450 2D6 (CYP2D6) Inhibition…, ACS pharmacology & translat… (2026) | pgx | 7 | [10.1021/acsptsci.5c00682](https://doi.org/10.1021/acsptsci.5c00682) | [41852638](https://www.ncbi.nlm.nih.gov/pubmed/41852638) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-23T19:41:31.190138+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2012 | irrelevant | 0 | 0 | The study reports in-vitro enzyme inhibition (IC50) values for amoxapine, not pharmacokinetic disposition parameters. |
| popPK | Akiyoshi_1996 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Akiyoshi_1996 | not_relevant | 0 | 0 | The paper investigates the effects of antidepressants on 5-HT2C receptors in CHO cells and does not mention amoxapine or report any pharmacodynamic parameters for it. |
| popPK | Ardizzone_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glucose transport inhibition, not a pharmacokinetic study, and reports no disposition parameters for amoxapine. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | The study evaluates the spinal anesthetic effect of amoxapine in rats and does not report any pharmacokinetic parameters. |
| PD | Chen_2004 | not_relevant | 3 | 1 | The paper reports qualitative comparisons of spinal anesthetic potency and duration for amoxapine at a single concentration (5mM) but does not provide numeric dose-response parameters (e.g., ED50, Emax) or a concentration-effect curve for amoxapine. |
| popPK | Dong_2017 | irrelevant | 0 | 0 | The study focuses on loxapine, not amoxapine, and does not report pharmacokinetic parameters for the target drug. |
| PD | Dong_2017 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic modeling and trial simulation for loxapine, not amoxapine, and does not report any pharmacodynamic or exposure-response parameters. |
| PGx | Eugene_2020 | not_relevant | 0 | 0 | The paper analyzes adverse drug reaction reporting odds for somnolence based on receptor binding affinities, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reporting odds ratios for sedation, not a pharmacokinetic study, and amoxapine is only mentioned as a metabolite of loxapine without any PK parameter values. |
| PD | Eugene_2021 | not_relevant | 0 | 0 | The paper is a pharmacovigilance disproportionality analysis (ROR) of adverse event reports from FAERS, not a pharmacodynamic or exposure-response study. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT receptors in pig pulmonary artery where amoxapine is used only as a receptor antagonist, not as a subject drug for pharmacokinetic analysis. |
| PD | Glusa_2000 | not_relevant | 3 | 5 | The paper reports a pA2 value (7.80) for amoxapine as a 5-HT2B antagonist in a pharmacological assay, which is a measure of affinity/potency rather than a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Gozlan_1991 | irrelevant | 0 | 0 | The study is a preclinical pharmacological investigation of receptor binding and neurotransmission, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hoertel_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on antidepressant use and mortality in COVID-19 patients, not a pharmacokinetic study, and does not report PK parameters for amoxapine. |
| PD | Hoertel_2022 | not_relevant | 0 | 0 | The paper is a large observational epidemiological study analyzing the association between antidepressant use and mortality in SARS-CoV-2 patients; it does not report pharmacokinetic data, concentration-effect relationships, or specific PD parameters (e.g., Emax, EC50) for amoxapine. |
| popPK | Ikeda_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of amoxapine's interaction with GABA receptors and does not report any pharmacokinetic parameters. |
| popPK | Inoue_2022 | relevant | 8 | 2 | The study reports quantitative toxicokinetic parameters (Cmax, AUC, half-life) for amoxapine in mice, but the specific numeric values are contained in Table 2 and Figures which are not fully provided in the evidence text. |
| PGx | Jat_2022 | not_relevant | 0 | 0 | The paper focuses on formulation development and molecular docking of CYP inhibition, not on pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Kinney_1982 | irrelevant | 2 | 1 | The paper is a review that provides only qualitative descriptions and a single half-life value without reporting quantitative compartmental parameters (CL, V, Q, ka) or population PK models. |
| popPK | Kunishima_2000 | irrelevant | 0 | 0 | The paper is a case report of neuroleptic malignant syndrome and does not report any quantitative pharmacokinetic parameters for amoxapine. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor activity in rat jejunum and does not report any pharmacokinetic disposition parameters for amoxapine. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice assessing the efficacy of amoxapine on morphine withdrawal, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Luo_2011 | not_relevant | 0 | 0 | The paper identifies CYP enzymes responsible for loxapine metabolism but does not report pharmacogenomic effects on amoxapine PK/PD parameters. |
| popPK | Mika_2013 | irrelevant | 0 | 0 | The paper is a review of the clinical efficacy and mechanisms of antidepressants in chronic pain, containing no original pharmacokinetic data or quantitative disposition parameters for amoxapine. |
| PD | Mika_2013 | not_relevant | 1 | 0 | The text is a narrative review of antidepressants in chronic pain and does not report any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters for amoxapine. |
| popPK | Nasu_2000 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (receptor occupancy and catalepsy prediction) and in-vitro binding affinities, not pharmacokinetic disposition parameters. |
| popPK | Neukamm_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study on gene transfection enhancement and does not report any pharmacokinetic parameters for amoxapine. |
| PD | Neukamm_2006 | not_relevant | 1 | 0 | The paper identifies amoxapine as a transfection enhancer but does not provide specific numeric concentration-effect data, IC50 values, or PD parameters for amoxapine in the provided text. |
| popPK | Obers_2010 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and mechanistic study of hERG channel liability, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ohsuka_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and signal transduction, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Parker_2001 | irrelevant | 0 | 0 | The study investigates the PK/PD of clozapine and two other compounds (S 18327, S 16924) in rats, using amoxapine only as an internal standard for the assay, not as the subject drug. |
| PD | Parker_2001 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for clozapine and two developmental compounds (S 16924, S 18327), but does not mention or provide data for amoxapine. |
| popPK | Pawar_2023 | relevant | 8 | 2 | The study reports in vivo PK data for amoxapine in rats, but the evidence only provides peak plasma concentrations (Cmax) and qualitative bioavailability ratios, lacking specific quantitative disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Pawar_2026 | irrelevant | 0 | 0 | no_text gate: only 155 chars of text extracted (&lt; 400) |
| PD | Pawar_2026 | not_relevant | 0 | 0 | The paper focuses on CYP2D6 inhibition and PK enhancement of amoxapine, not on pharmacodynamic or exposure-response modeling. |
| PGx | Pawar_2026 | not_relevant | 0 | 0 | The paper investigates the effect of CYP2D6 inhibitors (bergamottin/diosmetin) on amoxapine PK, not the effect of a genetic variant/genotype on the drug's parameters. |
| popPK | Potter_1990 | irrelevant | 0 | 0 | The paper is a review discussing pharmacodynamic consequences of metabolism and drug resistance, containing no quantitative pharmacokinetic parameters for amoxapine. |
| PD | Potter_1990 | not_relevant | 1 | 0 | The text is a qualitative review discussing the pharmacodynamic consequences of metabolism and drug resistance without providing any numeric PD parameters or concentration-effect data for amoxapine. |
| popPK | Pérez-León_2004 | irrelevant | 0 | 0 | The paper is a pharmacological study of glycine transport in frog retina where amoxapine is used only as a specific inhibitor (probe), not as the subject drug for PK parameter estimation. |
| PD | Pérez-León_2004 | not_relevant | 1 | 0 | The paper reports a single qualitative percentage inhibition (60%) of glycine uptake by amoxapine in a specific fraction, but does not provide concentration-response data, IC50/EC50 values, or a PD model. |
| popPK | Rockley_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on seizure liability and does not report pharmacokinetic disposition parameters for amoxapine. |
| popPK | Rogol_1984 | irrelevant | 2 | 0 | The paper describes a case report of amoxapine intoxication in infants and mentions that pharmacokinetics are described, but no quantitative PK parameters (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Saito_2020 | irrelevant | 0 | 0 | The study investigates the chemical degradation of amoxapine in artificial gastric juice (in-vitro stability) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Salceda_2006 | irrelevant | 0 | 0 | The study is a pharmacological characterization of glycine transport in rat retina where amoxapine is used only as an inhibitor/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Salceda_2006 | not_relevant | 2 | 2 | The paper reports qualitative inhibition percentages (40-70%) for amoxapine on glycine uptake but does not provide concentration-effect data, IC50/EC50 values, or a formal PD model. |
| popPK | Tohda_1989 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment using Xenopus oocytes to characterize receptor binding/inhibition, not a pharmacokinetic study, and reports no disposition parameters for amoxapine. |
| PD | Tohda_1989 | not_relevant | 2 | 1 | The paper reports a qualitative inhibition of serotonin-evoked current by amoxapine at a single concentration (10 microM) in an in vitro oocyte assay, but provides no numeric PD parameters (such as IC50 or Emax) or dose-response curve for amoxapine. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The study focuses on the in-vitro enzymatic inhibition of β-glucuronidase by amoxapine and does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Ying_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study of enzyme inhibitors where amoxapine is used only as a comparator, and no pharmacokinetic parameters for amoxapine are reported. |
| PD | Ying_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel E. coli β-glucuronidase inhibitors and reports in vitro enzymatic inhibition parameters (IC50, Ki, kinact/KI) for new compounds, not a pharmacodynamic or exposure-response relationship for amoxapine in a biological system. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text is only a meeting title and contains no data, analysis, or parameters regarding amoxapine pharmacodynamics. |
| popPK | Zolkiewski_2026 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and structure-activity relationship (SAR) analysis where amoxapine serves only as a reference compound, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
