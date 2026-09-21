<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;olsalazine&quot;}]"></div>

# olsalazine

- **generic name:** olsalazine
- **ATC codes:** `A07EC03`
- **DrugBank:** [DB01250](https://go.drugbank.com/drugs/DB01250)
- **groups:** approved

## About

**Description.** Olsalazine is an aminosalicylate and a prodrug of [mesalamine] (5-aminosalicylic acid, 5-ASA).[A257063] It was first developed for delivering mesalamine to the colon without the use of [sulfapyridine].[A257078] Olsalazine comprises two mesalamine molecules joined by an azo bridge, which is cleaved in the colon.[A257078] Olsalazine is an anti-inflammatory agent that works by inhibiting cyclooxygenase and lipoxygenase, subsequently reducing the production of pro-inflammatory factors like prostaglandin and leukotriene.[A257063] Olsalazine is used in the treatment of ulcerative colitis.[L45023,L45151]

**Indication.** In the US, olsalazine is indicated for the maintenance of remission of ulcerative colitis in adult patients who are intolerant to [sulfasalazine].[L45023]

In Canada, it is used in the treatment of acute ulcerative colitis of mild to moderate severity, with or without the concomitant use of steroids. It is also indicated for the long-term maintenance of patients with ulcerative colitis in remission.[L45151]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 22:47 | 13:42 | 0/0/0 | 1/0/0 | 0/0/0 | 108,685/4,118 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/0 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Asl_2021](drugs/drug_olsalazine/pd_Asl_2021_CDH1_expression.md) | Asl MM et al., Comparison of the effects of olsalazine…, Research in pharmaceutical… (2021) | [10.4103/1735-5362.314826](https://doi.org/10.4103/1735-5362.314826) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Asl_2021](drugs/drug_olsalazine/pd_Asl_2021_Cell_viability.md) | Asl MM et al., Comparison of the effects of olsalazine…, Research in pharmaceutical… (2021) | [10.4103/1735-5362.314826](https://doi.org/10.4103/1735-5362.314826) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Asl_2021](drugs/drug_olsalazine/pd_Asl_2021_uPA_expression.md) | Asl MM et al., Comparison of the effects of olsalazine…, Research in pharmaceutical… (2021) | [10.4103/1735-5362.314826](https://doi.org/10.4103/1735-5362.314826) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olsalazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `TPMT` inhibitor | DrugBank actor |
| metabolism | liver | `TPMT` inhibitor, `XDH` inhibitor | DrugBank actor |
| metabolism | small intestine | `XDH` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…ning mesalamine is partially acetylated and excreted in the feces. From fecal dialysis, th…”</sub> | prose |
| excretion | kidney | `SLC22A6` upregulator, `SLC22A8` upregulator | DrugBank actor |
| excretion | small intestine | <sub>“…as excreted in feces as unchanged olsalazine when the whole gut transit time was decreased…”</sub> | prose |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), PTGS1 (inhibitor), SLC20A1 (upregulator), SLC2A9 (downregulator).</sub>

## Coverage

- **PubMed hits:** 39 matched, 55 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ryde_1988.pdf` | Ryde EM et al., The pharmacokinetics of olsalazine sodi…, European journal of clinica… (1988) | popPK | 9 | [10.1007/BF01046706](https://doi.org/10.1007/BF01046706) | [3203708](https://pubmed.ncbi.nlm.nih.gov/3203708) | The study reports quantitative PK parameters for olsalazine, including elimination half-life (56 min), systemic availability, and urinary excretion percentages, though specific clearance or volume values are not explicitly listed in the provided text. |
| `Knoll_2002.pdf` | Knoll U et al., Study of the plasma pharmacokinetics an…, Journal of veterinary pharm… (2002) | popPK | 8 | [10.1046/j.1365-2885.2002.00395.x](https://doi.org/10.1046/j.1365-2885.2002.00395.x) | [12000534](https://pubmed.ncbi.nlm.nih.gov/12000534) | The study reports pharmacokinetics for olsalazine in horses but provides only qualitative descriptions and peak concentrations (Cmax) rather than specific quantitative disposition parameters like clearance (CL) or volume (V). |
| `Li_2022.pdf` | Li Z et al., Pharmacokinetic and gut microbiota anal…, European journal of pharmac… (2022) | popPK | 8 | [10.1016/j.ejps.2022.106235](https://doi.org/10.1016/j.ejps.2022.106235) | [35697287](https://pubmed.ncbi.nlm.nih.gov/35697287) | The paper is a pharmacokinetic study of olsalazine in rats, but the specific numeric parameter values are not present in the provided evidence text. |
| `Allgayer_1992.pdf` | Allgayer H et al., Superoxide, hydroxyl and fatty acid rad…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90286-r](https://doi.org/10.1016/0006-2952(92)90286-r) | [1310851](https://www.ncbi.nlm.nih.gov/pubmed/1310851) | metadata signals extractable PD data (IC50) |
| `Grisham_1994.pdf` | Grisham MB et al., Effects of aminosalicylates and immunos…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90320-4](https://doi.org/10.1016/0006-2952(94)90320-4) | [8204107](https://www.ncbi.nlm.nih.gov/pubmed/8204107) | metadata signals extractable PD data (IC50) |
| `Meyers_1987.pdf` | Meyers S et al., Olsalazine sodium in the treatment of u…, Gastroenterology (1987) | pd | 4 | [10.1016/0016-5085(87)90253-8](https://doi.org/10.1016/0016-5085(87)90253-8) | [2890550](https://www.ncbi.nlm.nih.gov/pubmed/2890550) | metadata signals extractable PD data (sigmoid) |
| `Nielsen_1988.pdf` | Nielsen OH et al., Inhibition of intestinal macrophage che…, Alimentary pharmacology & t… (1988) | pd | 4 | [10.1111/j.1365-2036.1988.tb00689.x](https://doi.org/10.1111/j.1365-2036.1988.tb00689.x) | [2908754](https://www.ncbi.nlm.nih.gov/pubmed/2908754) | metadata signals extractable PD data (IC50) |
| `Niu_2017.pdf` | Niu Y et al., Old drug, new indication: Olsalazine so…, Journal of pharmacological… (2017) | pd | 4 | [10.1016/j.jphs.2017.10.007](https://doi.org/10.1016/j.jphs.2017.10.007) | [29132796](https://www.ncbi.nlm.nih.gov/pubmed/29132796) | metadata signals extractable PD data (IC50) |
| `Scheurlen_1993.pdf` | Scheurlen C et al., Effect of olsalazine and mesalazine on…, The Clinical investigator (1993) | pd | 4 | [10.1007/BF00184728](https://doi.org/10.1007/BF00184728) | [8386034](https://www.ncbi.nlm.nih.gov/pubmed/8386034) | metadata signals extractable PD data (IC50) |
| `Lewis_1997.pdf` | Lewis LD et al., Olsalazine and 6-mercaptopurine-related…, Clinical pharmacology and t… (1997) | pgx | 8 | [10.1016/S0009-9236(97)90125-9](https://doi.org/10.1016/S0009-9236(97)90125-9) | [9357398](https://www.ncbi.nlm.nih.gov/pubmed/9357398) | metadata signals extractable PGX data (TPMT, PK/PD-context) |

<sub>queue written 2026-09-11T22:45:07.150091+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Allgayer_1992 | not_relevant | 0 | 0 | The paper investigates the in vitro radical scavenging activity of aminosalicylates using ESR spectroscopy, which is a mechanistic/chemical assay, not a pharmacodynamic exposure-response or dose-response analysis in a biological system with numeric PD parameters. |
| popPK | Axelsson_1998 | irrelevant | 0 | 0 | The study is a pharmacological efficacy trial in mice measuring therapeutic outcomes (survival, inflammation markers) rather than reporting quantitative pharmacokinetic parameters for olsalazine. |
| popPK | Banda_2016 | irrelevant | 2 | 0 | The paper describes a bioanalytical method for mesalazine (an olsalazine metabolite) and mentions a PK study application, but no quantitative PK parameters (CL, V, ka, etc.) for olsalazine or mesalazine are provided in the evidence. |
| popPK | Bankole_2021 | irrelevant | 0 | 0 | The study investigates the environmental degradation of olsalazine by fungal laccase (in-vitro/biotechnological) and reports enzymatic kinetics (Vmax, Km) rather than pharmacokinetic disposition parameters (CL, V, ka) in a biological host. |
| popPK | Christensen_1994 | irrelevant | 2 | 0 | The study focuses on the bioavailability of 5-ASA from Pentasa with olsalazine as a comparator, reporting only concentration and excretion data without compartmental PK parameters (CL, V, ka) for olsalazine. |
| popPK | Crotty_1992 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of receptor binding inhibition, not a pharmacokinetic study, and reports no disposition parameters for olsalazine. |
| popPK | G_2020 | irrelevant | 0 | 0 | The paper is an in silico study on drug repurposing for Alzheimer's disease and does not report any pharmacokinetic parameters for olsalazine. |
| PD | Grisham_1994 | not_relevant | 0 | 0 | The paper investigates the chemical effects of aminosalicylates on nitric oxide-dependent N-nitrosation reactions in vitro, not the pharmacodynamic or exposure-response relationship of olsalazine in a biological system. |
| popPK | Hanauer_2006 | irrelevant | 0 | 0 | The paper is a clinical review of therapeutic efficacy and dosing in ulcerative colitis, containing no pharmacokinetic parameters or quantitative disposition data for olsalazine. |
| PD | Hanauer_2006 | not_relevant | 2 | 0 | The text is a qualitative review discussing general dose-response trends and toxicity thresholds for aminosalicylates, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for olsalazine. |
| PD | Kedia_2007 | not_relevant | 2 | 1 | The paper is a review that mentions dose-dependent efficacy qualitatively but does not provide numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve for olsalazine. |
| popPK | Kennel_2025 | irrelevant | 0 | 0 | The study investigates xenobiotic transport in mosquitoes using olsalazine as a probe dye, not as a subject drug for pharmacokinetic parameter estimation (CL, V, etc.). |
| popPK | Knoll_2002 | relevant | 8 | 2 | The study reports pharmacokinetics for olsalazine in horses but provides only qualitative descriptions and peak concentrations (Cmax) rather than specific quantitative disposition parameters like clearance (CL) or volume (V). |
| PD | Lauritsen_1990 | not_relevant | 1 | 0 | The text is an abstract for a review article that mentions olsalazine and PK/PD relationships in general terms but provides no specific numeric PD parameters or exposure-response data. |
| popPK | Lennard_2001 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for cytotoxic drugs (mercaptopurine, methotrexate, etc.) and mentions olsalazine only in the context of a drug interaction case report, providing no pharmacokinetic parameters for olsalazine. |
| PD | Lennard_2001 | not_relevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for cytotoxic drugs (specifically antimetabolites like mercaptopurine and methotrexate) and does not mention olsalazine or report any PD parameters for it. |
| popPK | Lewis_1997 | irrelevant | 0 | 0 | The paper title indicates a study on drug-drug interactions and bone marrow suppression, with no evidence of pharmacokinetic parameter reporting for olsalazine. |
| PGx | Lewis_1997 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between olsalazine and 6-mercaptopurine, not a pharmacogenomic effect on olsalazine's PK/PD. |
| popPK | Li_2022 | relevant | 8 | 0 | The paper is a pharmacokinetic study of olsalazine in rats, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Li_2022 | not_relevant | 0 | 0 | The study focuses on the effect of probiotics on the pharmacokinetics and gut microbiota of olsalazine, reporting no concentration-effect or dose-response relationship for the drug itself. |
| popPK | Meyers_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for ulcerative colitis and does not report any pharmacokinetic parameters for olsalazine. |
| PD | Meyers_1987 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating efficacy and safety, not a pharmacokinetic or pharmacodynamic modeling study, and does not report concentration-effect or dose-response parameters. |
| popPK | Murray_2020 | irrelevant | 0 | 0 | This is a Cochrane review of clinical efficacy for 5-ASA formulations in ulcerative colitis and does not report pharmacokinetic parameters for olsalazine. |
| PD | Murray_2020 | not_relevant | 2 | 0 | The paper is a Cochrane review that mentions a qualitative dose-response trend for 5-ASA but does not provide specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for olsalazine. |
| popPK | Nesbitt_2025 | irrelevant | 0 | 0 | The paper studies BLVRB inhibitors (BCT1028, etc.) and uses olsalazine only as a reference ligand in a crystal structure (PDB 7ERA) for computational docking, not as the subject of a pharmacokinetic study. |
| PD | Nesbitt_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of BLVRB inhibitors (BCT1028, BCT2029) and does not report pharmacodynamic or exposure-response data for olsalazine, which is only mentioned as a reference ligand in a PDB structure for docking validation. |
| PD | Nielsen_1988 | not_relevant | 0 | 0 | The paper describes an in vitro functional assay (macrophage chemotaxis inhibition) rather than an in vivo pharmacokinetic/pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | Niu_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of olsalazine on urate transporters and excretion in animals, but does not report pharmacokinetic parameters (CL, V, ka, t1/2) for olsalazine itself. |
| popPK | Nugent_2001 | irrelevant | 0 | 0 | The paper is a review of intestinal luminal pH and its implications for drug release, containing no original pharmacokinetic data or quantitative disposition parameters for olsalazine. |
| popPK | Rasmussen_1995 | irrelevant | 0 | 0 | The paper is a review of mesalazine preparations and does not report quantitative pharmacokinetic parameters for olsalazine. |
| PGx | Russell_2024 | not_relevant | 0 | 0 | The paper reports that olsalazine inhibits TPMT (a drug-drug interaction affecting thiopurine metabolism), but it does not report a pharmacogenomic effect (gene variant) on the PK or PD of olsalazine itself. |
| popPK | Ryde_1991 | irrelevant | 2 | 0 | The study reports bioequivalence metrics (AUC, Cmax, Ae) for the metabolite ac-5-ASA and olsalazine absorption, but does not provide quantitative compartmental PK parameters (CL, V, ka) for olsalazine. |
| popPK | Sandborn_2003 | irrelevant | 2 | 1 | This is a systematic review reporting only urinary and faecal excretion percentages, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population PK modeling. |
| PD | Sandborn_2003 | not_relevant | 1 | 0 | The paper is a systematic review of pharmacokinetic profiles (excretion data) and does not report any pharmacodynamic or exposure-response relationships with numeric parameters. |
| popPK | Sandborn_2006 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and formulation for ulcerative colitis treatments and does not report any quantitative pharmacokinetic parameters for olsalazine. |
| PD | Sandborn_2006 | not_relevant | 1 | 0 | The text is a review summarizing general dose-response findings for mesalamine and sulfasalazine but does not report specific numeric PD parameters or concentration-effect data for olsalazine. |
| PD | Scheurlen_1993 | not_relevant | 0 | 0 | The paper investigates the in vitro effect of olsalazine on ATPase activity, which is a mechanistic study, not a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response analysis in humans. |
| popPK | Schroeder_2002 | irrelevant | 0 | 0 | The paper is a clinical review of mesalazine and its prodrugs for ulcerative colitis treatment, containing no pharmacokinetic data or quantitative disposition parameters for olsalazine. |
| PD | Schroeder_2002 | not_relevant | 1 | 0 | The text is a general review of mesalazine/olsalazine that mentions a qualitative dose-response benefit but provides no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Smith_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of GABA(A) receptor modulation and does not report any pharmacokinetic parameters for olsalazine. |
| PD | Smith_2004 | not_relevant | 0 | 0 | The paper reports in vitro receptor pharmacology (EC50 for GABA and other modulators) but provides no numeric PD parameters or exposure-response relationship for olsalazine, which is only qualitatively described as a weak potentiator. |
| popPK | Vertzoni_2011 | irrelevant | 1 | 0 | The study reports ex vivo bacterial degradation half-lives, not in vivo pharmacokinetic disposition parameters (CL, V, ka) for olsalazine. |
| popPK | Vertzoni_2018 | irrelevant | 0 | 0 | The study is an in-vitro bacterial degradation assay where olsalazine is used only as a reference compound for optimization, not as the subject of a pharmacokinetic parameter estimation. |
| PD | Wadworth_1991 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy rates and dose-dependent side effects (diarrhea) without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/in vivo efficacy of a nanocarrier for MRI-guided therapy, without reporting quantitative pharmacokinetic parameters (CL, V, ka, etc.) for olsalazine. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper describes a drug delivery system for olsalazine and reports efficacy/release profiles, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for olsalazine. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper investigates the causal association between gene expression (eQTLs) of drug targets and psychiatric disorders using Mendelian Randomization, rather than reporting how genetic variants affect the pharmacokinetics or pharmacodynamics of olsalazine itself. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or study details for olsalazine. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a conference title and contains no information regarding olsalazine, pharmacodynamics, or exposure-response relationships. |
| popPK | van_1988 | irrelevant | 2 | 0 | The text describes qualitative pharmacokinetic properties (e.g., "low" concentrations, "long" half-life) but contains no quantitative numeric parameter values for olsalazine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_olsalazine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
