<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;dexfenfluramine&quot;}]"></div>

# dexfenfluramine

- **generic name:** dexfenfluramine
- **ATC codes:** `A08AA04`
- **DrugBank:** [DB01191](https://go.drugbank.com/drugs/DB01191)
- **groups:** approved, illicit, withdrawn

## About

**Description.** Dexfenfluramine, also marketed under the name Redux, is a serotoninergic anorectic drug. For a fairly limited time during the middle of the nineties, the US FDA had approved it for use in managing weight loss. However, following multiple concerns about the cardiovascular side-effects of the drug, such approval was withdrawn.

**Indication.** For the management of obesity including weight loss and maintenance of weight loss in patients on a reduced calorie diet

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 06:53 | 9:36 | 0/0/0 | 0/2/0 | 0/0/1 | 183,927/6,955 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 2/7 | 8/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Erenburg_2024](drugs/drug_dexfenfluramine/pd_Erenburg_2024_unknown.md) | Erenburg N et al., Stereoselective Analysis of the Antisei…, International journal of mo… (2024) | [10.3390/ijms25052522](https://doi.org/10.3390/ijms25052522) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sheeni_2025](drugs/drug_dexfenfluramine/pd_Sheeni_2025_MES.md) | Sheeni Y et al., Enantioselective comparative analysis o…, Epilepsia (2025) | [10.1111/epi.18542](https://doi.org/10.1111/epi.18542) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sheeni_2025](drugs/drug_dexfenfluramine/pd_Sheeni_2025_MMI.md) | Sheeni Y et al., Enantioselective comparative analysis o…, Epilepsia (2025) | [10.1111/epi.18542](https://doi.org/10.1111/epi.18542) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Gross_1996](drugs/drug_dexfenfluramine/pgx_Gross_1996_CYP2D6_Q27.md) | Gross AS et al., The influence of the sparteine/debrisoq…, British journal of clinical… (1996) | [10.1046/j.1365-2125.1996.03178.x](https://doi.org/10.1046/j.1365-2125.1996.03178.x) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexfenfluramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Well-absorbed from the gastrointestinal tract.…”</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` inhibitor/metabolism/substrate, `CYP2E1` inhibitor | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2C (target).</sub>

## Coverage

- **PubMed hits:** 119 matched, 62 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mittur_2024.pdf` | Mittur A et al., Effect of Hepatic Impairment on the Pha…, Journal of clinical pharmac… (2024) | pd | 5 | [10.1002/jcph.2431](https://doi.org/10.1002/jcph.2431) | [38523492](https://www.ncbi.nlm.nih.gov/pubmed/38523492) | metadata signals extractable PD data (exposure-response) |
| `Berger_1992.pdf` | Berger UV et al., The substituted amphetamines 3,4-methyl…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90023-w](https://doi.org/10.1016/0014-2999(92)90023-w) | [1356787](https://www.ncbi.nlm.nih.gov/pubmed/1356787) | metadata signals extractable PD data (EC50) |
| `Gobbi_1989.pdf` | Gobbi M et al., In-vivo (+)-[3H]fenfluramine binding to…, The Journal of pharmacy and… (1989) | pd | 4 | [10.1111/j.2042-7158.1989.tb06445.x](https://doi.org/10.1111/j.2042-7158.1989.tb06445.x) | [2568465](https://www.ncbi.nlm.nih.gov/pubmed/2568465) | metadata signals extractable PD data (IC50) |
| `Kannengiesser_1976.pdf` | Kannengiesser MH et al., Comparative action of fenfluramine on t…, European journal of pharmac… (1976) | pd | 4 | [10.1016/0014-2999(76)90298-3](https://doi.org/10.1016/0014-2999(76)90298-3) | [1253827](https://www.ncbi.nlm.nih.gov/pubmed/1253827) | metadata signals extractable PD data (IC50) |
| `Rothman_2003.pdf` | Rothman RB et al., (+)-Fenfluramine and its major metaboli…, The Journal of pharmacology… (2003) | pd | 4 | [10.1124/jpet.103.049684](https://doi.org/10.1124/jpet.103.049684) | [12649307](https://www.ncbi.nlm.nih.gov/pubmed/12649307) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-22T06:48:23.801803+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abou-Khalil_2022 | irrelevant | 0 | 0 | no_text gate: only 354 chars of text extracted (&lt; 400) |
| PD | Abou-Khalil_2022 | not_relevant | 0 | 0 | The provided text is a brief editorial note regarding the publication history of a review article and contains no pharmacodynamic data, models, or parameters for dexfenfluramine. |
| popPK | Anderer_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of buspirone on brain electrical activity and does not report any pharmacokinetic parameters for dexfenfluramine. |
| PD | Anderer_2000 | not_relevant | 0 | 0 | The paper investigates buspirone, not dexfenfluramine, and does not report numeric PD parameters or exposure-response relationships for the target drug. |
| popPK | Berger_1992 | irrelevant | 0 | 0 | no_text gate: only 209 chars of text extracted (&lt; 400) |
| PD | Berger_1992 | not_relevant | 0 | 0 | The paper investigates the mechanism of serotonin release for substituted amphetamines and fenfluramine, but does not report a pharmacokinetic/pharmacodynamic model or numeric exposure-response parameters for dexfenfluramine. |
| PGx | Chiron_2019 | not_relevant | 0 | 0 | The paper discusses stiripentol and mentions fenfluramine, but does not report pharmacogenomic effects on the PK/PD of dexfenfluramine. |
| popPK | De_1991 | irrelevant | 2 | 0 | The study focuses on fenfluramine (not dexfenfluramine) and reports neurochemical markers rather than quantitative PK parameters like clearance or volume. |
| PGx | DellIsola_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy (seizure reduction) of fenfluramine in SCN1A-related epilepsy, not a pharmacokinetic or pharmacodynamic parameter change driven by a gene variant. |
| popPK | Dini_2022 | irrelevant | 2 | 1 | The paper is a review of fenfluramine (the racemate) in epilepsy, not a primary PK study of dexfenfluramine, and it lacks specific quantitative disposition parameters (CL, V, Q) for the dex-enantiomer. |
| PD | Dini_2022 | not_relevant | 1 | 0 | The paper is a narrative review of fenfluramine's clinical efficacy and mechanism of action, lacking any specific pharmacokinetic/pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Erenburg_2023 | irrelevant | 2 | 0 | The study focuses on fenfluramine and norfenfluramine enantiomers in rodents, not dexfenfluramine, and provides no quantitative PK parameters for the target drug. |
| popPK | Erenburg_2024 | irrelevant | 2 | 0 | The study focuses on the antiseizure activity (pharmacodynamics) of fenfluramine and norfenfluramine enantiomers in mice, reporting ED50 and EC50 values rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for dexfenfluramine. |
| popPK | Fielden_2010 | irrelevant | 0 | 0 | The paper focuses on the mechanism of valvular heart disease and receptor binding (5HT2BR) for a candidate compound (RO3013) and fenfluramine, without reporting any pharmacokinetic parameters for dexfenfluramine. |
| popPK | Francis_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of DL-fenfluramine on food intake and gastric emptying in rats, not its pharmacokinetic parameters. |
| popPK | Gobbi_1989 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Gobbi_1989 | not_relevant | 0 | 0 | The paper describes in-vitro/in-vivo radioligand binding studies (Kd, Bmax) for fenfluramine, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships for drug effects. |
| popPK | Gobbi_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin release in rat synaptosomes and does not report pharmacokinetic disposition parameters. |
| popPK | Goodwin_1994 | irrelevant | 0 | 0 | The study focuses on neuroendocrine and subjective effects of dexfenfluramine and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Goodwin_1994 | not_relevant | 1 | 0 | The study reports a lack of statistically discernible effects at a single dose (30 mg) and explicitly states that more information is required on the dose-response relationship, providing no numeric PD parameters or concentration-effect data. |
| popPK | Haritos_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme kinetics (Km, Vmax) in liver microsomes, not a pharmacokinetic study reporting in-vivo disposition parameters like clearance or volume. |
| PD | Haritos_1998 | not_relevant | 0 | 0 | The paper reports in vitro metabolic kinetics (Km, Vmax, IC50 for enzyme inhibition) but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug's therapeutic effect. |
| PGx | Haritos_1998 | not_relevant | 2 | 0 | The paper is an in vitro study using liver microsomes and recombinant enzymes; it does not report in vivo pharmacokinetic or pharmacodynamic parameters in human subjects stratified by genotype. |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on transporter-mediated efflux in cell lines, not a pharmacokinetic study, and does not report disposition parameters for dexfenfluramine. |
| PD | Johnson_1998 | not_relevant | 0 | 0 | The paper reports in vitro transporter efflux data for fenfluramine, not dexfenfluramine, and does not provide specific numeric PD parameters (EC50/Emax) for the target drug. |
| popPK | Kannengiesser_1976 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Kannengiesser_1976 | not_relevant | 0 | 0 | The paper focuses on the comparative action of fenfluramine (not dexfenfluramine) on serotonin and dopamine uptake/release in vitro, lacking any pharmacokinetic or exposure-response modeling. |
| popPK | Kornblith_1976 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats focusing on food intake and brain stimulation, not a pharmacokinetic study, and does not report any disposition parameters for dexfenfluramine. |
| PD | Kornblith_1976 | not_relevant | 1 | 0 | The paper studies fenfluramine (not dexfenfluramine) and provides only qualitative descriptions of dose effects without numeric PD parameters or extractable curves. |
| popPK | Li_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of SERT ligands AFM and DASB, with fenfluramine serving only as a low-affinity competitor in binding assays, and no PK parameters for dexfenfluramine are reported. |
| PD | Li_2004 | not_relevant | 0 | 0 | The paper characterizes the binding affinity (Kd) and selectivity of PET ligands (AFM and DASB) for the serotonin transporter, not the pharmacodynamic exposure-response relationship of dexfenfluramine. |
| PGx | Martin_2022 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interaction and metabolic pathway studies for fenfluramine, but does not investigate the impact of gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Martin_2022_2 | not_relevant | 0 | 0 | The paper evaluates in vitro drug-drug interaction potential (CYP inhibition/induction) of fenfluramine, not pharmacogenomic effects of gene variants on PK/PD. |
| popPK | Mittur_2024 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Mittur_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of fenfluramine and norfenfluramine in hepatic impairment and does not report any pharmacodynamic or exposure-response data for dexfenfluramine. |
| popPK | Ni_2004 | irrelevant | 0 | 0 | The study focuses on the vasoactive pharmacodynamics of (+)-norfenfluramine (a metabolite of fenfluramine) and does not report pharmacokinetic parameters for dexfenfluramine. |
| popPK | Ni_2005 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of arterial contraction in mice, not a pharmacokinetic study, and does not report any PK parameters for dexfenfluramine. |
| popPK | Nickel_1986 | irrelevant | 0 | 0 | The paper studies fenetylline, not dexfenfluramine, and does not report PK parameters for the target drug. |
| PD | Nickel_1986 | not_relevant | 1 | 0 | The text discusses fenetylline (not dexfenfluramine) and only qualitatively states that pharmacodynamic activity is tied to plasma levels without providing numeric PD parameters or curves. |
| popPK | Odi_2021 | irrelevant | 0 | 0 | The paper is a narrative review discussing mechanisms and clinical use of fenfluramine, containing no original quantitative pharmacokinetic parameter values for dexfenfluramine. |
| PD | Odi_2021 | not_relevant | 1 | 0 | The text is a narrative review discussing mechanisms and clinical efficacy without providing specific numeric PD parameters, concentration-effect curves, or PK/PD modeling results. |
| popPK | Pan_2025 | irrelevant | 0 | 0 | The paper describes an immunoassay method for detecting fenfluramine adulteration in food, not a pharmacokinetic study of dexfenfluramine. |
| PD | Pan_2025 | not_relevant | 0 | 0 | The paper describes an immunoassay method for detecting fenfluramine in food, not a pharmacodynamic or exposure-response study in biological subjects. |
| popPK | Pigliasco_2024 | irrelevant | 0 | 0 | The paper describes an analytical method for fenfluramine (not dexfenfluramine) and reports only plasma concentrations, not pharmacokinetic disposition parameters. |
| PD | Pigliasco_2024 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for quantifying fenfluramine and cannabidiol in plasma and reports observed plasma concentrations, but it does not report any pharmacodynamic (PD) or exposure-response relationship, dose-response curve, or numeric PD parameters. |
| popPK | Quednow_2012 | irrelevant | 1 | 0 | The study uses dexfenfluramine as a challenge agent to assess serotonin release via PET, and while it mentions plasma concentration-time profiles, it does not report quantitative pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| PGx | Reist_2004 | not_relevant | 2 | 1 | The study investigates the effect of 5-HT2A receptor polymorphisms on fenfluramine-induced prolactin release (a PD biomarker), but the drug of interest is dexfenfluramine, and the paper does not report specific PK/PD parameters for dexfenfluramine. |
| popPK | Roberti_2025 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions in epilepsy syndromes and does not mention dexfenfluramine or report any pharmacokinetic parameters for it. |
| PD | Roberti_2025 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in epilepsy syndromes and does not contain any data, analysis, or numeric parameters for dexfenfluramine. |
| PGx | Roberti_2025 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in epilepsy syndromes and does not mention dexfenfluramine or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Rothman_2003 | not_relevant | 0 | 0 | The text describes the pharmacological mechanism (substrate for norepinephrine transporters) but contains no data, analysis, or numeric parameters regarding exposure-response or dose-response relationships. |
| popPK | Rothman_2010 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on serotonin transporter modulation and does not report pharmacokinetic parameters for dexfenfluramine. |
| PD | Rothman_2010 | not_relevant | 0 | 0 | The paper describes in vitro pharmacology of SERT inhibitors and substrates, not the pharmacodynamics of dexfenfluramine in vivo or in a clinical context. |
| popPK | Saletu_1993 | irrelevant | 2 | 0 | The study reports qualitative blood level trends and pharmacodynamic effects (EEG) but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) for dexfenfluramine. |
| popPK | Scarduelli_1985 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of fenfluramine (not dexfenfluramine) on prolactin levels and does not report any pharmacokinetic parameters. |
| PD | Scarduelli_1985 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response effect (40 vs 80 mg) on prolactin levels but does not provide specific numeric PD parameters (like Emax, EC50) or detailed concentration-effect data in the provided text. |
| popPK | Schechter_1981 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats focusing on drug discrimination, not pharmacokinetics, and does not report any PK parameters for dexfenfluramine. |
| PD | Schechter_1981 | not_relevant | 3 | 2 | The paper reports behavioral dose-response curves for fenfluramine (not dexfenfluramine) and nicotine in rats, but the provided text only contains qualitative descriptions of the effects and does not provide the numeric data points or parameters required to derive a specific PD relationship. |
| popPK | Schechter_1985 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation using fenfluramine as a probe, not a pharmacokinetic study, and contains no PK parameters for dexfenfluramine. |
| PD | Schechter_1985 | not_relevant | 0 | 0 | The paper investigates fenfluramine (not dexfenfluramine) and reports only qualitative behavioral outcomes (intermediate results) without numeric PD parameters or dose-response curves for the target drug. |
| popPK | Schechter_1986 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment on fenfluramine (not dexfenfluramine) and does not report any pharmacokinetic parameters. |
| popPK | Sheeni_2025 | irrelevant | 2 | 0 | The study reports single-timepoint concentrations and pharmacodynamic potency (ED50/EC50) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or compartmental models. |
| popPK | Sheeni_2026 | irrelevant | 0 | 0 | The study focuses on fenfluramine and norfenfluramine enantiomers, not dexfenfluramine, and reports pharmacodynamic potency/toxicity indices rather than quantitative PK disposition parameters. |
| PGx | Souche_1991 | not_relevant | 0 | 0 | The paper studies citalopram and uses fenfluramine as a probe for serotonin function, but does not report pharmacokinetic or pharmacodynamic parameters for dexfenfluramine. |
| popPK | Stewart_1997 | irrelevant | 1 | 0 | The study focuses on the neurochemical effects of dexfenfluramine (5-HT depletion) and body temperature, and while it mentions plasma levels, it does not report quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Surdi_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes (seizure frequency, cognition) in Dravet syndrome patients and does not report pharmacokinetic or pharmacodynamic parameters of dexfenfluramine. |
| popPK | Sánchez_1995 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice focusing on serotonergic mechanisms and does not report any pharmacokinetic parameters for dexfenfluramine. |
| PGx | Ton_2007 | not_relevant | 0 | 0 | The paper reports gene-treatment interactions on smoking cessation outcomes, not pharmacokinetic or pharmacodynamic parameters of dexfenfluramine. |
| popPK | Zaczek_1990 | irrelevant | 2 | 0 | The study focuses on fenfluramine (not dexfenfluramine) and neurochemical effects, with no quantitative PK parameters (CL, V, etc.) reported in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dexfenfluramine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
