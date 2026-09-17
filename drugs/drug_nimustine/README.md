<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;nimustine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nimustine_Hori1987_reference&quot;,&quot;label&quot;:&quot;Hori_1987_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nimustine/Nimustine_Hori1987_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# nimustine

- **generic name:** nimustine
- **ATC codes:** `L01AD06`
- **DrugBank:** [DB13069](https://go.drugbank.com/drugs/DB13069)
- **groups:** investigational

## About

**Description.** Nimustine has been used in trials studying the treatment of Glioblastoma.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 14:44 | 0:17 | 0/1/0 | 0/0/0 | 0/0/0 | 6,243/528 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hori_1987_reference](drugs/drug_nimustine/Nimustine_Hori1987_reference.md) | Hori T et al., Influence of modes of ACNU administrati…, Journal of neurosurgery (1987) | [10.3171/jns.1987.66.3.0372](https://doi.org/10.3171/jns.1987.66.3.0372) |

## Coverage

- **PubMed hits:** 94 matched, 58 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Levin_1978.pdf` | Levin VA et al., Pharmacokinetics of BCNU in man: a prel…, Cancer treatment reports (1978) | popPK | 10 | not captured | [688274](https://pubmed.ncbi.nlm.nih.gov/688274) | The paper reports quantitative pharmacokinetic parameters (Vd, CL, K10) for BCNU (nimustine) in humans, and all numeric values are explicitly present in the text. |
| `Hori_1987.pdf` | Hori T et al., Influence of modes of ACNU administrati…, Journal of neurosurgery (1987) | popPK | 9 | [10.3171/jns.1987.66.3.0372](https://doi.org/10.3171/jns.1987.66.3.0372) | [3469331](https://pubmed.ncbi.nlm.nih.gov/3469331) | The study reports quantitative pharmacokinetic parameters (half-life, clearance, volume) for nimustine (ACNU) in humans, with specific half-life values provided in the text. |
| `Hamstra_2005.pdf` | Hamstra DA et al., Intratumoral injection of BCNU in ethan…, Journal of neuro-oncology (2005) | popPK | 8 | [10.1007/s11060-004-5675-2](https://doi.org/10.1007/s11060-004-5675-2) | [15980973](https://pubmed.ncbi.nlm.nih.gov/15980973) | The study reports pharmacokinetic parameters for nimustine (BCNU) in rats and humans, but the evidence provided contains only qualitative descriptions and fold-changes rather than specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-09-16T14:44:19.017279+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartussek_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on p53 mutations and glioma cell sensitivity, not a pharmacokinetic study of nimustine. |
| popPK | Blasberg_1975 | irrelevant | 0 | 0 | The study focuses on intrathecal distribution of other drugs (BCNU, methotrexate, etc.) in rhesus monkeys and does not report pharmacokinetic parameters for nimustine. |
| popPK | Chamberlain_2002 | irrelevant | 0 | 0 | The study focuses on CPT-11 (irinotecan) and does not report pharmacokinetic parameters for nimustine. |
| popPK | Choi_2005 | irrelevant | 0 | 0 | The paper studies dihydroisoxazole derivatives as transglutaminase 2 inhibitors, not nimustine. |
| popPK | Clemons_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of DTIC and its metabolite AIC, with nimustine (BCNU) serving only as a co-administered agent without reported quantitative PK parameters. |
| popPK | Dorr_1989 | irrelevant | 0 | 0 | The study focuses on carmustine (BCNU), not nimustine, and does not report PK parameters for the target drug. |
| PGx | Evers_2010 | not_relevant | 0 | 0 | The paper reports differential toxicity of nimustine in BRCA2-deficient cells, which is a pharmacodynamic effect, but it does not report a pharmacokinetic parameter or a specific quantitative pharmacogenomic effect size (theta) for a PK/PD parameter in the context of standard pharmacogenomic analysis. |
| popPK | Freed_1982 | irrelevant | 2 | 0 | The study focuses on the distribution of a radioactive isotope (13N) in rat tissues rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for nimustine (BCNU) itself. |
| popPK | Gabelman_1986 | irrelevant | 0 | 0 | The study investigates the cytotoxicity and morphological effects of BCNU (not nimustine) on murine cells in vitro, with no pharmacokinetic parameters reported. |
| popPK | Greenberg_1984 | irrelevant | 1 | 0 | The paper is a clinical trial report on intra-arterial BCNU (nimustine) treatment that mentions rapid systemic clearance qualitatively but provides no quantitative pharmacokinetic parameter values. |
| PD | Gröhn_1992 | not_relevant | 0 | 0 | The paper is a clinical phase II trial reporting response rates and survival outcomes without any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| PD | Guo_2016 | not_relevant | 1 | 1 | The paper reports a single IC50 value for nimustine as a positive control in a cell viability assay, which is a static potency metric rather than an extractable pharmacodynamic (exposure-response) relationship or model. |
| popPK | Hamstra_2005 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for nimustine (BCNU) in rats and humans, but the evidence provided contains only qualitative descriptions and fold-changes rather than specific numeric values for clearance, volume, or half-life. |
| popPK | Hartley-Asp_1988 | irrelevant | 0 | 0 | The study investigates tauromustine (TCNU), not nimustine, and reports no pharmacokinetic parameters for the target drug. |
| PD | He_2017 | not_relevant | 3 | 2 | The paper reports a qualitative ranking of drug activity and mentions IC50 values from MTT assays, but does not provide the specific numeric PD parameters or concentration-effect curves for nimustine in the text. |
| popPK | Henner_1986 | irrelevant | 0 | 0 | The study investigates carmustine (BCNU), not nimustine, so it does not report pharmacokinetic parameters for the target drug. |
| popPK | Honmane_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and in-vitro release of carmustine (BCNU) liposomes, not the pharmacokinetics of nimustine. |
| popPK | Huang_1999 | irrelevant | 2 | 0 | The study reports tissue penetration depths and clearance half-times from the ventricular surface, but lacks quantitative compartmental PK parameters (CL, V, Q) for nimustine. |
| PD | Imaizumi_1993 | not_relevant | 1 | 0 | The paper describes a standardized screening method using single fixed doses to determine maximum tolerance and qualitative tumor growth inhibition, without reporting any concentration-effect data, dose-response curves, or numeric PD parameters for nimustine. |
| popPK | Jeremic_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay (micronucleus induction) and does not report any pharmacokinetic parameters for nimustine. |
| popPK | Jeremić_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay (micronucleus formation) for chemosensitivity and does not report any pharmacokinetic parameters for nimustine. |
| PD | Kabuto_1995 | not_relevant | 1 | 0 | The paper focuses on the PD of MX2 (providing IC50 values for MX2) and only qualitatively states that MX2's IC50 is lower than nimustine's, without providing numeric PD parameters or a dose-response curve for nimustine. |
| popPK | Kergueris_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of melphalan, not nimustine. |
| popPK | Kitamura_1996 | irrelevant | 2 | 0 | The study focuses on BCNU (not nimustine) and reports only qualitative half-life comparisons in dogs without providing specific quantitative PK parameter values. |
| popPK | Kohno_1985 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay on tumor spheroids and does not report pharmacokinetic parameters for nimustine. |
| popPK | Köhl_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of etoposide, not nimustine. |
| popPK | Lee_2005 | irrelevant | 0 | 0 | The study focuses on the antitumor activity and release kinetics of BCNU (carmustine), not nimustine, and does not report population pharmacokinetic parameters for nimustine. |
| popPK | Levin_1979 | irrelevant | 2 | 0 | The study focuses on BCNU (not nimustine) and reports qualitative changes in clearance without providing specific numeric PK parameter values for nimustine. |
| popPK | Levin_1989 | irrelevant | 0 | 0 | The study investigates ACNU (nimustine), not nimustine, which is a different drug. |
| popPK | Lu_2012 | irrelevant | 1 | 0 | The study focuses on in-vitro nanocarrier formulation and thermal stability of BCNU (nimustine), reporting only half-life changes in a non-physiological context without compartmental PK parameters like clearance or volume. |
| popPK | Merouani_1996 | irrelevant | 0 | 0 | The paper is a clinical study on renal complications in breast cancer patients and does not report pharmacokinetic parameters for nimustine. |
| PD | Morikawa_1999 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax, half-life) for methotrexate, not pharmacodynamic or exposure-response relationships for nimustine. |
| PD | Ohtsu_1989 | not_relevant | 0 | 0 | The paper reports IC50 values for various drugs including nimustine to characterize multidrug resistance phenotypes, but it does not report a pharmacodynamic (exposure-response or dose-response) relationship with numeric PD parameters (e.g., Emax, EC50, slope) for nimustine specifically in the context of PK/PD modeling. |
| popPK | Qiu_2003 | irrelevant | 0 | 0 | The study focuses on the mechanism of action and stability of a novel nitrosourea (FD137) in vitro, not the pharmacokinetics of nimustine. |
| PD | Saito_2020 | not_relevant | 2 | 0 | The paper is a Phase I dose-escalation trial reporting safety and qualitative efficacy (radiographic changes/survival) but does not provide numeric concentration-effect data, PK/PD modeling, or specific PD parameters like Emax or EC50. |
| popPK | Schacht_1981 | irrelevant | 0 | 0 | The paper discusses nephrotoxicity of BCNU and methyl CCNU, not nimustine, and reports no pharmacokinetic parameters. |
| popPK | Schold_1984 | irrelevant | 0 | 0 | The study focuses on diaziquone, not nimustine, and reports no pharmacokinetic parameters for the target drug. |
| popPK | Schold_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of temozolomide, while BCNU (nimustine) is only a co-administered drug without reported quantitative PK parameters. |
| popPK | Sipos_1997 | irrelevant | 0 | 0 | The study focuses on carmustine (BCNU), not nimustine, and does not report population pharmacokinetic parameters for the target drug. |
| PD | Sukhbaatar_2023 | not_relevant | 1 | 0 | The text describes a delivery system study with qualitative improvements in accumulation and efficacy but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| popPK | Supko_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SarCNU, not nimustine. |
| PD | Takahashi_2014 | not_relevant | 2 | 1 | The paper is a Phase I dose-escalation study reporting MTD and toxicity grades (neutropenia/thrombocytopenia) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| PD | Tanioka_2010 | not_relevant | 1 | 0 | The paper reports qualitative chemosensitivity percentages (0% for nimustine) from an in vitro assay but does not provide numeric PD parameters (e.g., IC50, Emax) or a concentration-effect curve for nimustine. |
| popPK | Tserng_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of O6-benzylguanine, not nimustine. |
| PGx | Udagawa_2018 | not_relevant | 0 | 0 | The study reports associations between genetic variants and tumor sensitivity (efficacy/PD) to nimustine, but does not report pharmacokinetic parameters or specific pharmacodynamic effect sizes for nimustine. |
| popPK | Ueda-Kawamitsu_2002 | irrelevant | 0 | 0 | The study focuses on BCNU (a different drug) in an in-vitro cell model, not nimustine. |
| popPK | Wilson_1982 | irrelevant | 0 | 0 | The study focuses on antipyrine metabolism as a probe for hepatic function in mice treated with BCNU, not on the pharmacokinetics of nimustine. |
| PD | Wolff_1999 | not_relevant | 3 | 5 | The paper is a meta-analysis reporting a single summary LC50 value (48.9 mg/l) for nimustine, which is a static potency metric rather than a dynamic exposure-response or dose-response relationship with derivable PD parameters like Emax or slope. |
| popPK | Yang_1989 | irrelevant | 0 | 0 | The paper studies BCNU (carmustine), not nimustine, and focuses on controlled release kinetics rather than population pharmacokinetic parameters. |
| PD | Zenke_1996 | not_relevant | 1 | 0 | The paper reports a qualitative increase in intra-tumor nimustine concentration due to diltiazem co-administration but provides no numeric concentration-effect or dose-response parameters for nimustine itself. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference citation with no pharmacokinetic data or mention of nimustine. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and does not contain any data, analysis, or parameters regarding nimustine pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nimustine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
