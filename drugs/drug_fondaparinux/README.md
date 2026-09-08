# fondaparinux

- **generic name:** fondaparinux
- **ATC codes:** `B01AX05`
- **DrugBank:** [DB00569](https://go.drugbank.com/drugs/DB00569)
- **groups:** approved, investigational

## About

**Description.** Fondaparinux (Arixtra) is a synthetic anticoagulant agent consisting of five monomeric sugar units and a O-methyl group at the reducing end of the molecule. It is structurally similar to polymeric glycosaminoglycan heparin and heparan sulfate (HS) when they are cleaved into monomeric units. The monomeric sequence in heparin and HS is thought to form the high affinity binding site for the natural anti-coagulant factor, antithrombin III (ATIII). Once bound to heparin or HS, the anticoagulant activity of ATIII is potentiated by 1000-fold. Fondaparinux potentiates the neutralizing action of ATIII on activated Factor X 300-fold. Fondaparinux may be used: to prevent venous thromboembolism in patients who have undergone orthopedic surgery of the lower limbs (e.g. hip fracture, hip replacement and knee surgery); to prevent VTE in patients undergoing abdominal surgery who are are at high risk of thromboembolic complications; in the treatment of deep vein thrombosis (DVT) and pumonary embolism (PE); in the management of unstable angina (UA) and non-ST segment elevation myocardial infarction (NSTEMI); and in the management of ST segment elevation myocardial infarction (STEMI).

**Indication.** Approved for: (1) prophylaxis of VTE for up to one month post surgery in patients undergoing orthopedic surgery of the lower limbs such as hip fracture, hip replacement and knee surgery; (2) prophylaxis of VTE patients undergoing abdominal surgery who are at high risk of thromboembolic complications (e.g. patients undergoing abdominal cancer surgery); (3) treatment of acute DVT and PE; (4) management of UA and NSTEMI for the prevention of death and subsequent myocardial infarction (MI); and (5) management of STEMI for the prevention of death and myocardial reinfarction in patients who are managed with thrombolytics or who are initially to receive no form of reperfusion therapy. Fondaparinux should not be used as the sole anticoagulant during percutaneous coronary intervention (PCI) due to an increased risk of guiding catheter thrombosis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 22:25 | 4:30 | 0/1/0 | 0/1/0 | 0/0/0 | 30,027/1,274 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Michaličková_2022](drugs/drug_fondaparinux/Fondaparinux_Michalikov2022_reference.md) | Michaličková (2022) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Chang_2016](drugs/drug_fondaparinux/pd_Chang_2016_unknown.md) | Chang JB et al., A novel, rapid method to compare the th…, Scientific reports (2016) | [10.1038/srep29387](https://doi.org/10.1038/srep29387) |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Delavenne_2010.pdf` | Delavenne X et al., Population pharmacokinetics of fondapar…, Thrombosis and haemostasis (2010) | popPK | 10 | [10.1160/TH10-02-0127](https://doi.org/10.1160/TH10-02-0127) | [20539905](https://pubmed.ncbi.nlm.nih.gov/20539905) | The paper describes a population PK study for fondaparinux, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Delavenne_2012.pdf` | Delavenne X et al., Pharmacokinetics of fondaparinux 1.5 mg…, European journal of clinica… (2012) | popPK | 10 | [10.1007/s00228-012-1263-0](https://doi.org/10.1007/s00228-012-1263-0) | [22447298](https://pubmed.ncbi.nlm.nih.gov/22447298) | The paper describes a population PK study of fondaparinux using NONMEM, but the evidence provided only contains summary exposure metrics (AUC, Cmax, Cmin) and percentage differences, lacking the specific numeric values for clearance, volume, or rate constants. |
| `Hanada_2018.pdf` | Hanada K et al., Population pharmacokinetics and pharmac…, International journal of cl… (2018) | popPK | 10 | [10.5414/CP203169](https://doi.org/10.5414/CP203169) | [29595122](https://pubmed.ncbi.nlm.nih.gov/29595122) | The paper is a population PK study of fondaparinux, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract. |
| `Michaličková_2022.pdf` | Michaličková D et al., Population pharmacokinetics-pharmacodyn…, European journal of clinica… (2022) | popPK | 10 | [10.1007/s00228-021-03201-1](https://doi.org/10.1007/s00228-021-03201-1) | [34414464](https://pubmed.ncbi.nlm.nih.gov/34414464) | The paper reports a population PK model for fondaparinux with explicit numeric values for clearance (0.05289 L/h) and volume of distribution (5.55 L) in the abstract. |
| `Hester_2014.pdf` | Hester W et al., Thromboprophylaxis with fondaparinux in…, Thrombosis research (2014) | popPK | 9 | [10.1016/j.thromres.2013.11.019](https://doi.org/10.1016/j.thromres.2013.11.019) | [24508189](https://pubmed.ncbi.nlm.nih.gov/24508189) | The study is a PK analysis of fondaparinux, but the specific numeric parameter values are not present in the provided text, which only describes the results qualitatively. |
| `Becattini_2012.pdf` | Becattini C et al., Old and new oral anticoagulants for ven…, Thrombosis research (2012) | pgx | 7 | [10.1016/j.thromres.2011.12.014](https://doi.org/10.1016/j.thromres.2011.12.014) | [22264937](https://www.ncbi.nlm.nih.gov/pubmed/22264937) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lieu_2002.pdf` | Lieu C et al., Fondaparinux sodium is not metabolised…, Clinical pharmacokinetics (2002) | pgx | 7 | [10.2165/00003088-200241002-00003](https://doi.org/10.2165/00003088-200241002-00003) | [12383041](https://www.ncbi.nlm.nih.gov/pubmed/12383041) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Peixoto_2020.pdf` | Peixoto de Miranda ÉJF et al., Drug-Drug Interactions of 257 Antineopl…, Clinical and applied thromb… (2020) | pgx | 7 | [10.1177/1076029620936325](https://doi.org/10.1177/1076029620936325) | [32862668](https://www.ncbi.nlm.nih.gov/pubmed/32862668) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-05T22:23:54.819860+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Becattini_2012 | not_relevant | 0 | 0 | The paper is a general review of oral anticoagulants and does not report any pharmacogenomic effects on fondaparinux PK/PD parameters. |
| popPK | Buyue_2012 | irrelevant | 0 | 0 | The study is a mechanistic investigation of thrombin generation and factor IXa inhibition, not a pharmacokinetic study, and reports no disposition parameters for fondaparinux. |
| popPK | Chang_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring Hill coefficients and IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Delavenne_2010 | relevant | 10 | 0 | The paper describes a population PK study for fondaparinux, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Delavenne_2012 | relevant | 10 | 2 | The paper describes a population PK study of fondaparinux using NONMEM, but the evidence provided only contains summary exposure metrics (AUC, Cmax, Cmin) and percentage differences, lacking the specific numeric values for clearance, volume, or rate constants. |
| popPK | Hanada_2018 | relevant | 10 | 0 | The paper is a population PK study of fondaparinux, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract. |
| popPK | Hester_2014 | relevant | 9 | 2 | The study is a PK analysis of fondaparinux, but the specific numeric parameter values are not present in the provided text, which only describes the results qualitatively. |
| PGx | Lieu_2002 | not_relevant | 0 | 0 | The paper investigates in vitro metabolism and CYP inhibition of fondaparinux but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Michaličková_2022_2 | irrelevant | 0 | 0 | The provided text is a correction notice for citation errors in a table and contains no pharmacokinetic data or numeric parameter values for fondaparinux. |
| PGx | Peixoto_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDI) between antineoplastics and anticoagulants, not pharmacogenomic effects of gene variants on fondaparinux PK/PD. |
| popPK | Turpie_2009 | irrelevant | 2 | 0 | The paper describes a simulation based on a population PK model but does not report the specific quantitative parameter values (CL, V, etc.) for fondaparinux in the provided evidence. |
| PGx | Weitz_2010 | not_relevant | 0 | 0 | The text is a general overview of new oral anticoagulants and mentions fondaparinux only as a comparator for route of administration, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Weitz_2011 | not_relevant | 0 | 0 | The paper is a review of new oral anticoagulants and mentions fondaparinux only as a background comparison, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Zufferey_2018 | irrelevant | 2 | 0 | The study focuses on time-to-event analysis of bleeding risk and uses anti-Xa activities as a covariate, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for fondaparinux. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fondaparinux`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
