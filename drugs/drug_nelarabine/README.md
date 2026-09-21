<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;nelarabine&quot;}]"></div>

# nelarabine

- **generic name:** nelarabine
- **ATC codes:** `L01BB07`
- **DrugBank:** [DB01280](https://go.drugbank.com/drugs/DB01280)
- **groups:** approved, investigational

## About

**Description.** Nelarabine is an antineoplastic agent that is typically used to treat acute T-cell lymphoblastic leukemia, particularly T-cell acute lymphoblastic leukemia (T-ALL) and T-cell lymphoblastic lymphoma (T-LBL), in both adult and pediatric patients whose disease has not responded to or has relapsed following at least two chemotherapy regimens.[L40878] T-cell acute lymphoblastic leukemia and lymphoma are relatively rare T-cells malignancy, with only 20 to 25% of patients diagnosed with acute lymphoblastic leukemia and 1.7% of patients diagnosed with non-Hodgkin's lymphoma having this T-cells variation of the disease.[A2332] Due to the rarity of these T-cell malignancies, nelarabine was first granted orphan drug status and a fast-track designation by the FDA to address the unmet therapeutic needs of these cancers.[A2331]

Nelarabine is a purine nucleoside analog converted to its corresponding arabinosylguanine nucleotide triphosphate (araGTP), resulting in the inhibition of DNA synthesis and cytotoxicity.[L40878] Nelarabine preferentially accumulates in T-cells since T-cells have a higher expression of enzymes that convert nelarabine to the active purine analog form, making them effective against T-cells malignancies.[A2331,AA2334,A2335] Results from 2 phase 2 studies on adult and pediatric T-ALL/T-LBL indicated that nelarabine can yield a 13% complete response (CR) rate in pediatric patients and 18% in adult patients, albeit with serious hematological and neurological adverse events.[A258719]

Nelarabine was first granted accelerated approval by the FDA on October 28, 2005, and was manufactured under the trademark name ARRANON by GlaxoSmithKline.[A15220] Subsequently, nelarabine was also approved by both Health Canada and European Medicines Agency in 2007 under the trademark name ATRIANCE.[L45874,L45879]

**Indication.** ARRANON is indicated for the treatment of T-cell acute lymphoblastic leukemia (T-ALL) and T-cell lymphoblastic lymphoma (T-LBL) in adult and pediatric patients age 1 year and older whose disease has not responded to or has relapsed following treatment with at least two chemotherapy regimens.[L40878]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 06:47 | 11:49 | 0/0/0 | 2/0/0 | 0/0/1 | 156,599/3,461 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/9 | 10/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eletskaya_2023](drugs/drug_nelarabine/pd_Eletskaya_2023_unknown.md) | Eletskaya BZ et al., Enzymatic Synthesis of 2-Chloropurine A…, International journal of mo… (2023) | [10.3390/ijms24076223](https://doi.org/10.3390/ijms24076223) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tohidian_2025](drugs/drug_nelarabine/pd_Tohidian_2025_unknown.md) | Tohidian M et al., The niosomal nelarabine as a promising…, Annals of medicine and surg… (2025) | [10.1097/MS9.0000000000002821](https://doi.org/10.1097/MS9.0000000000002821) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SAMHD1** | `Q322` · IC50 | metabolism | [Rothenburger_2020](drugs/drug_nelarabine/pgx_Rothenburger_2020_SAMHD1_Q322.md) | Rothenburger T et al., SAMHD1 is a key regulator of the lineag…, Communications biology (2020) | [10.1038/s42003-020-1052-8](https://doi.org/10.1038/s42003-020-1052-8) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nelarabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Nelarabine and ara-G are partially eliminated by the kidneys.[L40878] Mean urinary excreti…”</sub> | prose |

<sub>Actors without a tissue in the table: ADA (substrate), DCK (substrate), DGUOK (substrate), DNA (incorporation into and destabilization), LIG1 (inhibitor), POLA1 (inhibitor), PRIM1 (inhibitor), RRM1 (inhibitor), SAMHD1 (metabolism).</sub>

## Coverage

- **PubMed hits:** 27 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berg_2007.pdf` | Berg SL et al., Plasma and cerebrospinal fluid pharmaco…, Cancer chemotherapy and pha… (2007) | popPK | 10 | [10.1007/s00280-006-0328-0](https://doi.org/10.1007/s00280-006-0328-0) | [16953392](https://pubmed.ncbi.nlm.nih.gov/16953392) | The paper reports quantitative pharmacokinetic parameters (clearance, half-life, AUC) for nelarabine in nonhuman primates, and all numeric values are explicitly present in the text. |
| `Kisor_2000.pdf` | Kisor DF et al., Pharmacokinetics of nelarabine and 9-be…, Journal of clinical oncolog… (2000) | popPK | 10 | [10.1200/JCO.2000.18.5.995](https://doi.org/10.1200/JCO.2000.18.5.995) | [10694549](https://pubmed.ncbi.nlm.nih.gov/10694549) | The paper reports quantitative pharmacokinetic parameters for nelarabine (half-life) and its active metabolite ara-G (clearance, volume of distribution, half-life) directly in the text. |
| `Rabie_2022.pdf` | Rabie AM et al., A Series of Adenosine Analogs as the Fi…, ChemistrySelect (2022) | pd | 4 | [10.1002/slct.202201912](https://doi.org/10.1002/slct.202201912) | [36718467](https://www.ncbi.nlm.nih.gov/pubmed/36718467) | metadata signals extractable PD data (EC50) |
| `Vaskó_2019.pdf` | Vaskó B et al., Inhibitor selectivity of CNTs and ENTs, Xenobiotica; the fate of fo… (2019) | pd | 4 | [10.1080/00498254.2018.1501832](https://doi.org/10.1080/00498254.2018.1501832) | [30022699](https://www.ncbi.nlm.nih.gov/pubmed/30022699) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-15T06:44:15.198958+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2023 | irrelevant | 0 | 0 | The paper is a computational and in-vitro antiviral study where nelarabine is only one of several nucleoside analogs tested for SARS-CoV-2 inhibition, with no pharmacokinetic parameters reported. |
| popPK | Beesley_2007 | irrelevant | 0 | 0 | The paper reports in vitro cytotoxicity (IC50) values, not pharmacokinetic disposition parameters. |
| popPK | Buie_2007 | irrelevant | 2 | 0 | The paper is a narrative review of pharmacology and clinical efficacy that does not report original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for nelarabine. |
| PD | Buie_2007 | not_relevant | 2 | 0 | The paper is a narrative review that qualitatively describes dose-dependent accumulation and clinical response rates but does not provide numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve. |
| popPK | Eletskaya_2023 | irrelevant | 0 | 0 | The paper is an in-vitro synthesis and antiproliferative activity study where nelarabine is used only as a reference comparator, with no pharmacokinetic parameters reported. |
| popPK | Gandhi_2001 | irrelevant | 2 | 0 | The study focuses on cellular pharmacokinetics (intracellular ara-GTP levels) rather than reporting quantitative systemic disposition parameters (CL, V, Q) for nelarabine. |
| popPK | Gandhi_2006 | irrelevant | 0 | 0 | The paper is a review article summarizing general findings without providing original quantitative pharmacokinetic parameter values for nelarabine. |
| PD | Gandhi_2006 | not_relevant | 1 | 0 | The text is a review summary that qualitatively mentions pharmacodynamic investigations and the importance of triphosphate levels but does not provide any numeric PD parameters, dose-response curves, or specific exposure-response data for nelarabine. |
| popPK | Ianevski_2026 | irrelevant | 0 | 0 | The paper is a multiomics profiling and drug screening study of T-cell leukemia cell lines, and nelarabine is only mentioned in a reference citation, not as a subject of pharmacokinetic analysis. |
| PD | Ianevski_2026 | not_relevant | 2 | 0 | The paper reports cell line sensitivity scores (DSS) and correlations with gene expression, but does not provide numeric PK/PD parameters (e.g., EC50, Emax) or exposure-response curves for nelarabine. |
| popPK | Kisor_2005 | irrelevant | 2 | 1 | The paper is a review article that summarizes pharmacokinetic data rather than reporting original quantitative disposition parameters for nelarabine, and the specific numeric values provided are for the metabolite ara-G, not the subject drug. |
| popPK | Rabie_2022 | irrelevant | 0 | 0 | The paper focuses on anti-SARS-CoV-2 adenosine analogs and does not report pharmacokinetic parameters for nelarabine. |
| PD | Rabie_2022 | not_relevant | 0 | 0 | The paper focuses on adenosine analogs against SARS-CoV-2 and does not mention nelarabine or report any pharmacodynamic parameters for it. |
| popPK | Rabie_2023 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro antiviral study where nelarabine is a screened compound, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report any pharmacogenomic effects on the PK or PD of nelarabine. |
| popPK | Saez-Ayala_2023 | irrelevant | 0 | 0 | The paper describes the development of deoxycytidine kinase (dCK) inhibitors for leukemia and does not report pharmacokinetic parameters for nelarabine. |
| PD | Saez-Ayala_2023 | not_relevant | 0 | 0 | The paper focuses on the development of a deoxycytidine kinase inhibitor (OR0642) for leukemia and does not mention nelarabine or report any pharmacodynamic parameters for it. |
| popPK | Song_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and toxicity of a new compound (YLS010), using nelarabine only as a positive control/comparator without reporting any pharmacokinetic parameters for it. |
| popPK | Tohidian_2025 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity and gene expression analysis of niosomal nelarabine, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Toksvang_2025 | irrelevant | 2 | 0 | The paper is a narrative review of therapeutic drug monitoring in ALL and does not report original quantitative pharmacokinetic parameter values for nelarabine. |
| PD | Toksvang_2025 | not_relevant | 2 | 0 | The text is a narrative review abstract that mentions nelarabine in the context of TDM but does not report specific numeric PD parameters or exposure-response relationships. |
| PGx | Toksvang_2025 | not_relevant | 2 | 5 | The paper is a narrative review of TDM and pharmacogenetics in ALL; it does not report specific fitted pharmacogenomic effect sizes on nelarabine PK/PD parameters. |
| popPK | Tsesmetzis_2018 | irrelevant | 1 | 0 | The paper is a review of resistance mechanisms and metabolism of nucleoside analogues that mentions nelarabine only in the context of its prodrug conversion and solubility, without reporting any quantitative pharmacokinetic parameters. |
| PD | Tsesmetzis_2018 | not_relevant | 1 | 0 | The paper is a review article discussing general mechanisms of resistance and pharmacodynamics for nucleoside analogues, including nelarabine, but does not report specific numeric PD parameters or exposure-response data. |
| popPK | Vaskó_2019 | irrelevant | 0 | 0 | The provided evidence consists only of a title regarding transporter selectivity, with no pharmacokinetic data or numeric parameters for nelarabine. |
| PD | Vaskó_2019 | not_relevant | 0 | 0 | The provided text is a title regarding transporter selectivity and contains no information about nelarabine, pharmacodynamics, or exposure-response relationships. |
| PGx | Wang_2022 | not_relevant | 2 | 0 | The paper investigates the mechanism of action of nelarabine (RNR hyperactivation) and synthetic lethality with DUSP6, but does not report how a specific gene variant/genotype alters a pharmacokinetic or pharmacodynamic parameter of nelarabine. |
| PGx | Yoshimura_2024 | not_relevant | 2 | 1 | The paper reports differential drug sensitivity (PD) between age groups and molecular subtypes, but does not report a specific gene variant/genotype effect on a PK/PD parameter for nelarabine. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The paper does not mention nelarabine or report any pharmacokinetic parameters for it. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts regarding G-CSF timing, cancer registry data, splicing mutations, DDAVP response, qualitative interviews, survival disparities, and dexrazoxane cardiac outcomes; it does not contain any pharmacodynamic or exposure-response analysis for nelarabine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nelarabine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
