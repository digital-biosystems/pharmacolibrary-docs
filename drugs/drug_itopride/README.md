<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;itopride&quot;}]"></div>

# itopride

- **generic name:** itopride
- **ATC codes:** `A03FA07`
- **DrugBank:** [DB04924](https://go.drugbank.com/drugs/DB04924)
- **groups:** investigational

## About

**Description.** Itopride is a dopamine D2 antagonist with acetylcholinesterase inhibitory actions.

**Indication.** Investigated for use/treatment in gastrointestinal diseases and disorders (miscellaneous).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 12:04 | 7:08 | 0/0/0 | 0/1/0 | 0/0/0 | 112,117/8,010 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/9 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lim_2008](drugs/drug_itopride/pd_Lim_2008_colonic_transit_time.md) | Lim HC et al., Effect of itopride hydrochloride on the…, Yonsei medical journal (2008) | [10.3349/ymj.2008.49.3.472](https://doi.org/10.3349/ymj.2008.49.3.472) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lim_2008](drugs/drug_itopride/pd_Lim_2008_propagation_velocity_of_peristaltic_contraction.md) | Lim HC et al., Effect of itopride hydrochloride on the…, Yonsei medical journal (2008) | [10.3349/ymj.2008.49.3.472](https://doi.org/10.3349/ymj.2008.49.3.472) |

## Coverage

- **PubMed hits:** 38 matched, 31 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2017.pdf` | Zhou W et al., Development of a physiologically based…, Biopharmaceutics & drug dis… (2017) | popPK | 9 | [10.1002/bdd.2074](https://doi.org/10.1002/bdd.2074) | [28255999](https://pubmed.ncbi.nlm.nih.gov/28255999) | The paper reports quantitative PK parameters (clearance 52-69 l/h, CLint) for itopride within a PBPK model, and the values are explicitly present in the provided text. |
| `Nasiri_2019.pdf` | Nasiri MI et al., Comparative pharmacokinetic evaluation…, Drug development and indust… (2019) | popPK | 8 | [10.1080/03639045.2018.1546312](https://doi.org/10.1080/03639045.2018.1546312) | [30457018](https://pubmed.ncbi.nlm.nih.gov/30457018) | The study reports PK parameters for itopride, but the evidence only provides relative bioavailability ratios and qualitative statements about Cmax/AUC, lacking specific numeric values for clearance, volume, or half-life. |
| `Mushiroda_2000.pdf` | Mushiroda T et al., The involvement of flavin-containing mo…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10997945](https://www.ncbi.nlm.nih.gov/pubmed/10997945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-18T12:01:45.507722+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ahmed_2016 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax) and dissolution profiles but does not report any pharmacodynamic or exposure-response relationship for itopride. |
| PD | Alaithan_2022 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics (AUC, half-life) of a gastro-retentive film, reporting no pharmacodynamic or exposure-response relationship for itopride. |
| popPK | Butt_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of prokinetic effects on isolated rabbit duodenum and does not report any pharmacokinetic parameters for itopride. |
| popPK | Deolekar_2023 | irrelevant | 0 | 0 | The paper is a pharmacoeconomic analysis of drug prices and does not report any pharmacokinetic parameters for itopride. |
| PD | Deolekar_2023 | not_relevant | 0 | 0 | The paper is a pharmacoeconomic analysis of drug prices and contains no pharmacodynamic or exposure-response data. |
| popPK | Iwanaga_1994 | irrelevant | 0 | 0 | The paper describes in-vitro enzymatic inhibition (IC50) of acetylcholinesterase by itopride, not pharmacokinetic disposition parameters. |
| popPK | Jones_2017 | irrelevant | 2 | 0 | The paper is an in-vitro/in-vivo correlation study for FMO substrates where itopride is one of ten compounds, and no specific quantitative PK parameters (CL, V, etc.) for itopride are provided in the evidence. |
| popPK | Kawachi_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of acotiamide with itopride serving only as a comparator, and no quantitative pharmacokinetic parameters for itopride are reported. |
| PD | Kawachi_2011 | not_relevant | 3 | 2 | The paper reports an IC50 for acotiamide, but only provides qualitative dose-response observations for itopride without numeric PD parameters or a fitted concentration-effect curve. |
| popPK | Lim_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of gastrointestinal motility in guinea pigs and does not report any pharmacokinetic parameters for itopride. |
| popPK | Mohamed_2015 | irrelevant | 0 | 0 | The paper describes spectrophotometric analytical methods for drug quantification, not pharmacokinetic studies or disposition parameters. |
| PD | Mohamed_2015 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Mushiroda_2000 | irrelevant | 2 | 0 | The study is primarily mechanistic (enzyme identification) and reports only qualitative PK changes (AUC/Cmax increases) in an interaction study without providing specific quantitative disposition parameters (CL, V, ka) for itopride. |
| PGx | Mushiroda_2000 | not_relevant | 0 | 0 | The study investigates enzyme involvement (FMO vs CYP3A4) and drug-drug interactions, but does not report any pharmacogenomic effects (gene variants) on itopride PK/PD. |
| popPK | Naheed_2026 | irrelevant | 0 | 0 | The study is a pharmaceutical analysis using Raman spectroscopy and does not report any pharmacokinetic parameters for itopride. |
| PD | Naheed_2026 | not_relevant | 0 | 0 | The paper describes a Raman spectroscopy method for quantifying itopride in solid dosage forms and contains no pharmacodynamic, exposure-response, or dose-effect data. |
| popPK | Nasiri_2019 | relevant | 8 | 2 | The study reports PK parameters for itopride, but the evidence only provides relative bioavailability ratios and qualitative statements about Cmax/AUC, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Perumal_2014 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for drug quantification and contains no pharmacokinetic data or disposition parameters for itopride. |
| PD | Perumal_2014 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Pillai_2008 | irrelevant | 0 | 0 | The paper describes analytical methods (UV/HPLC) for quantifying drug content in formulations, not pharmacokinetic disposition parameters. |
| PD | Pillai_2008 | not_relevant | 0 | 0 | The paper describes analytical methods (UV and HPLC) for quantifying drug concentrations in formulations, not pharmacodynamic or exposure-response relationships. |
| popPK | Reddy_2018 | irrelevant | 2 | 0 | The paper is a PBPK modeling study where itopride is one of nine FMO substrates, and no specific quantitative PK parameter values (CL, V, etc.) for itopride are provided in the evidence. |
| PGx | Reddy_2018 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling to predict PK parameters for FMO substrates (including itopride) but does not report specific pharmacogenomic effects (gene variant/genotype) on these parameters. |
| popPK | Safhi_2023 | irrelevant | 2 | 2 | The study reports PK parameters for itopride, but it is a formulation development study in rabbits (not human population PK) and itopride is co-administered with eletriptan, lacking compartmental model parameters (CL, V, Q) required for population PK extraction. |
| PD | Safhi_2023 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, Cmax, t1/2) and in vitro release kinetics, with no analysis of drug effect or exposure-response relationship. |
| popPK | Sahoo_2009 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only AUC and Cmax, lacking the specific disposition parameters (CL, V, ka, t1/2) required for population PK modeling. |
| popPK | Shimizu_2021 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| popPK | Suganthi_2008 | irrelevant | 0 | 0 | The paper describes an HPTLC analytical method for quantifying itopride in tablets, not a pharmacokinetic study. |
| PD | Suganthi_2008 | not_relevant | 0 | 0 | The paper describes a pharmaceutical analysis method (HPTLC) for quantifying drug content in tablets, not a pharmacodynamic or exposure-response study. |
| popPK | Tan_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clebopride, using itopride only as an internal standard for the analytical method. |
| popPK | Taniguchi-Takizawa_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme-mediated metabolism in human liver microsomes, not a pharmacokinetic study reporting in vivo disposition parameters for itopride. |
| popPK | Yoon_2014 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for itopride, but lacks the specific compartmental parameters (CL, V, Q, ka) required for population PK modeling. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_itopride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
