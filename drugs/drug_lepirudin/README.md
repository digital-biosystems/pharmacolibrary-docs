# lepirudin

- **generic name:** lepirudin
- **ATC codes:** `B01AE02`
- **DrugBank:** [DB00001](https://go.drugbank.com/drugs/DB00001)
- **groups:** approved, withdrawn

## About

**Description.** Lepirudin is a recombinant hirudin formed by 65 amino acids that acts as a highly specific and direct thrombin inhibitor.[L41539,L41569] Natural hirudin is an endogenous anticoagulant found in _Hirudo medicinalis_ leeches.[L41539] Lepirudin is produced in yeast cells and is identical to natural hirudin except for the absence of sulfate on the tyrosine residue at position 63 and the substitution of leucine for isoleucine at position 1 (N-terminal end).[A246609]

Lepirudin is used as an anticoagulant in patients with heparin-induced thrombocytopenia (HIT), an immune reaction associated with a high risk of thromboembolic complications.[A3, L41539] HIT is caused by the expression of immunoglobulin G (IgG) antibodies that bind to the complex formed by heparin and platelet factor 4. This activates endothelial cells and platelets and enhances the formation of thrombi.[A246609] Bayer ceased the production of lepirudin (Refludan) effective May 31, 2012.[L41574]

**Indication.** Lepirudin is indicated for anticoagulation in adult patients with acute coronary syndromes (ACS) such as unstable angina and acute myocardial infarction without ST elevation. In patients with ACS, lepirudin is intended for use with [aspirin].[L41539] Lepirudin is also indicated for anticoagulation in patients with heparin-induced thrombocytopenia (HIT) and associated thromboembolic disease in order to prevent further thromboembolic complications.[L41539]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 05:14 | 2:52 | 0/0/0 | 0/0/0 | 0/0/0 | 17,947/1,464 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/4 | 6/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 29 matched, 24 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gifford_2019.pdf` | Gifford G et al., Complement therapeutics meets nanomedic…, Journal of controlled relea… (2019) | pd | 5 | [10.1016/j.jconrel.2019.04.009](https://doi.org/10.1016/j.jconrel.2019.04.009) | [30974134](https://www.ncbi.nlm.nih.gov/pubmed/30974134) | metadata signals extractable PD data (IC50) |
| `Mirabet_2005.pdf` | Mirabet M et al., Thrombin increases cardiomyocyte acute…, Journal of molecular and ce… (2005) | pd | 4 | [10.1016/j.yjmcc.2005.03.005](https://doi.org/10.1016/j.yjmcc.2005.03.005) | [16038707](https://www.ncbi.nlm.nih.gov/pubmed/16038707) | metadata signals extractable PD data (IC50) |
| `Petros_2006.pdf` | Petros S et al., The effect of different anticoagulants…, Blood coagulation & fibrino… (2006) | pd | 4 | [10.1097/01.mbc.0000214708.73374.ce](https://doi.org/10.1097/01.mbc.0000214708.73374.ce) | [16479195](https://www.ncbi.nlm.nih.gov/pubmed/16479195) | metadata signals extractable PD data (IC50) |
| `Sun_2022.pdf` | Sun Y et al., Molecular dynamic and pharmacological s…, British journal of pharmaco… (2022) | pd | 4 | [10.1111/bph.15816](https://doi.org/10.1111/bph.15816) | [35135035](https://www.ncbi.nlm.nih.gov/pubmed/35135035) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-06T05:14:03.908482+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abel_2012 | irrelevant | 0 | 0 | The paper is a retrospective clinical outcomes study comparing direct thrombin inhibitors and does not report any pharmacokinetic parameters for lepirudin. |
| PD | Abel_2012 | not_relevant | 1 | 0 | The paper is a retrospective clinical outcomes study comparing DTIs; it mentions a secondary assessment of a pharmacodynamic relationship (aPTT vs. composite endpoint) but does not report numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| popPK | Barras_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of enoxaparin, not lepirudin. |
| PD | Barras_2009 | not_relevant | 0 | 0 | The paper reports a PD model for enoxaparin, not lepirudin. |
| popPK | Bauer_2006 | irrelevant | 0 | 0 | The paper is a review of new anticoagulants and does not report any quantitative pharmacokinetic parameters for lepirudin. |
| PD | Bauer_2006 | not_relevant | 1 | 0 | The text is a general review of new anticoagulants that qualitatively mentions predictable dose-response relationships but provides no specific numeric PD parameters or exposure-response data for lepirudin. |
| popPK | Cruz-González_2012 | irrelevant | 0 | 0 | The paper is a review of argatroban, not lepirudin, and lepirudin is only mentioned as a comparator agent without any quantitative PK parameters provided. |
| PD | Cruz-González_2012 | not_relevant | 1 | 0 | The paper is a review of argatroban (not lepirudin) and only qualitatively mentions pharmacodynamic properties without providing numeric PD parameters or exposure-response data. |
| popPK | Eaton_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dabigatran, not lepirudin, which is only mentioned as a comparator in the discussion. |
| PD | Eaton_2026 | not_relevant | 0 | 0 | not captured |
| popPK | Exner_2019 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the binding specificity of an activated charcoal product, not a pharmacokinetic study reporting disposition parameters for lepirudin. |
| PD | Exner_2019 | not_relevant | 0 | 0 | The study investigates the binding specificity of an activated charcoal product on anticoagulants in vitro, not the pharmacodynamic exposure-response relationship of lepirudin itself. |
| popPK | Fenyvesi_2003 | irrelevant | 0 | 0 | The study investigates the effect of lepirudin on ecarin clotting time (a pharmacodynamic assay) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Fischer_2002 | irrelevant | 2 | 0 | The text is a qualitative review discussing the impact of renal insufficiency on r-hirudin pharmacokinetics without providing specific quantitative parameter values (CL, V, t1/2) for lepirudin. |
| popPK | Fischer_2003 | irrelevant | 2 | 0 | The study focuses on recombinant hirudin (not lepirudin) in rats and reports only qualitative changes in PK parameters without providing specific numeric values. |
| popPK | Francis_2005 | irrelevant | 0 | 0 | The paper is a narrative review of direct thrombin inhibitors that discusses lepirudin's clinical use and clearance mechanisms qualitatively but does not report any quantitative pharmacokinetic parameters. |
| popPK | Gifford_2019 | irrelevant | 0 | 0 | The study focuses on complement activation and nanomedicine performance, using lepirudin only as an anticoagulant for blood samples rather than as the subject of pharmacokinetic analysis. |
| PD | Gifford_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of CD55 domains on complement activation, not lepirudin; lepirudin is only used as an anticoagulant in the plasma samples. |
| popPK | Hamilton_2012 | irrelevant | 0 | 0 | The study focuses on the immunogenicity of desirudin (with lepirudin only mentioned as a comparator in the context of antibody reports) and does not report any pharmacokinetic parameters for lepirudin. |
| popPK | He_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fibrin network structure and does not report pharmacokinetic parameters for lepirudin. |
| PD | He_2010 | not_relevant | 3 | 1 | The paper describes a qualitative dose-response relationship (steep vs. shallow curves) for lepirudin in an in vitro assay but does not provide numeric PD parameters (Emax, EC50) or a quantitative effect-concentration curve in the provided text. |
| popPK | Hyers_2005 | irrelevant | 0 | 0 | The text is a general review of anticoagulants that mentions lepirudin only as a class example without providing any pharmacokinetic parameters or numeric values. |
| PD | Hyers_2005 | not_relevant | 1 | 0 | The text is a general review of anticoagulants that mentions lepirudin's mechanism and usage but provides no numeric PD parameters, concentration-effect data, or dose-response analysis. |
| popPK | John_2005 | irrelevant | 2 | 0 | The paper is a case report focusing on argatroban dosing in a pediatric patient, with lepirudin serving only as a comparator for which no quantitative PK parameters are reported. |
| PD | John_2005 | not_relevant | 1 | 0 | The paper is a case report describing clinical dosing and qualitative PK/PD comparisons without providing numeric PD parameters or concentration-effect data for lepirudin. |
| popPK | Kaye_2019 | irrelevant | 0 | 0 | This is a clinical practice guideline review regarding bleeding risk in interventional pain procedures, not a pharmacokinetic study, and it does not report quantitative PK parameters for lepirudin. |
| PD | Kaye_2019 | not_relevant | 1 | 0 | The paper is a clinical guideline review regarding perioperative management of anticoagulants and does not report any pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for lepirudin. |
| popPK | Kennedy_2012 | irrelevant | 0 | 0 | The paper is a review of emerging anticoagulants that mentions lepirudin only as an example of a direct thrombin inhibitor without providing any quantitative pharmacokinetic parameters. |
| PD | Kennedy_2012 | not_relevant | 1 | 0 | The text is a general review of emerging anticoagulants that mentions lepirudin only as an example of a direct thrombin inhibitor without providing any specific pharmacodynamic data, exposure-response relationships, or numeric parameters. |
| popPK | Lepor_2007 | irrelevant | 0 | 0 | The paper is a narrative review discussing anticoagulation strategies and does not report original quantitative pharmacokinetic parameters for lepirudin. |
| PD | Lepor_2007 | not_relevant | 1 | 0 | The text is a general review of anticoagulants that qualitatively mentions lepirudin and the concept of dose-response for DTIs, but it does not report any specific numeric PD parameters, concentration-effect curves, or PK/PD modeling results for lepirudin. |
| popPK | Lubenow_2001 | irrelevant | 0 | 0 | The paper is a clinical review of anticoagulants for HIT and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for lepirudin. |
| popPK | Lubenow_2002 | irrelevant | 1 | 0 | The paper is a clinical review/recommendation article that discusses lepirudin's use in HIT but does not report original quantitative pharmacokinetic parameters (CL, V, Q, ka) or a compartmental model. |
| PD | Lubenow_2002 | not_relevant | 1 | 0 | The text is a clinical review discussing the use of lepirudin in HIT, mentioning PK/PD concepts qualitatively but providing no numeric PD parameters or exposure-response data. |
| popPK | Mirabet_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiomyocyte cell death where lepirudin is used only as a pharmacological inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Morishima_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of antithrombotic and hemorrhagic effects where lepirudin is a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Nowak_1997 | irrelevant | 1 | 0 | The paper is a clinical case report describing the use of r-hirudin (lepirudin) for anticoagulation during hemodialysis, reporting only dosing and therapeutic blood levels, but lacking any quantitative pharmacokinetic parameters (CL, V, ka, etc.) or compartmental modeling. |
| popPK | Petros_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thrombin generation and does not report pharmacokinetic parameters for lepirudin. |
| popPK | Petruk_2023 | irrelevant | 0 | 0 | The paper describes the development and biophysical characterization of a stapled peptide (sHVF18) for inflammation, not the pharmacokinetics of lepirudin. |
| PD | Petruk_2023 | not_relevant | 0 | 0 | The paper studies the peptide sHVF18, not lepirudin, and does not report any pharmacodynamic parameters for lepirudin. |
| popPK | Redwan_2009 | irrelevant | 0 | 0 | The paper is a review of animal-derived pharmaceutical proteins and does not contain any pharmacokinetic data or parameters for lepirudin. |
| popPK | Sakor_2023 | irrelevant | 0 | 0 | The paper is a computational study on knowledge graphs for drug-drug interactions in COVID-19 and does not report any pharmacokinetic parameters for lepirudin. |
| PD | Sakor_2023 | not_relevant | 0 | 0 | The paper is a computational framework for constructing a knowledge graph of drug-drug interactions and does not report any pharmacokinetic or pharmacodynamic data, models, or numeric parameters for lepirudin. |
| popPK | Sanhajariya_2020 | irrelevant | 0 | 0 | The paper is an in silico simulation study on snake venom pharmacokinetics and does not involve lepirudin. |
| PD | Sanhajariya_2020 | not_relevant | 0 | 0 | The paper is an in silico pharmacokinetic (PK) simulation study of snake venom components and does not involve lepirudin or report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Seybert_2006 | irrelevant | 0 | 0 | The paper is a review discussing the clinical use of bivalirudin for HIT, with lepirudin mentioned only as a comparator, and no quantitative pharmacokinetic parameters are reported. |
| popPK | Sun_2022 | irrelevant | 0 | 0 | The study focuses on molecular dynamics and pharmacological effects of hirudin variants, not the pharmacokinetics of lepirudin. |
| PD | Sun_2022 | not_relevant | 2 | 1 | The paper reports in vitro IC50/Ki values and qualitative in vivo changes in coagulation times for engineered hirudin variants, but does not provide a quantitative exposure-response or dose-response model with derivable PD parameters (e.g., Emax, EC50) for lepirudin. |
| popPK | Wanat_2013 | irrelevant | 0 | 0 | The paper is a case report on argatroban monitoring where lepirudin is only mentioned as a comparator in a cited in-vitro study, with no PK parameters reported. |
| PD | Wanat_2013 | not_relevant | 0 | 0 | The paper is a case report on argatroban monitoring and only qualitatively mentions a study on lepirudin without providing any numeric PD parameters or exposure-response data. |
| popPK | Warkentin_2004 | irrelevant | 1 | 0 | The paper is a review comparing pharmacological properties and clinical efficacy, and it does not report original quantitative population-pharmacokinetic parameters (CL, V, Q, ka) for lepirudin. |
| popPK | Warkentin_2008 | irrelevant | 0 | 0 | The paper focuses on bivalirudin, with lepirudin mentioned only as a comparator for thrombin affinity, and no PK parameters for lepirudin are reported. |
| popPK | Weltermann_2003 | irrelevant | 0 | 0 | The paper is a review of novel anticoagulants and does not report original quantitative pharmacokinetic parameters for lepirudin. |
| PD | Weltermann_2003 | not_relevant | 1 | 0 | The text is a general review of novel anticoagulants and mentions lepirudin only in the context of its approval and mechanism, without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Willey_2002 | irrelevant | 2 | 0 | The text is a qualitative discussion of lepirudin removal by extracorporeal methods without reporting specific quantitative pharmacokinetic parameters (CL, V, ka) or population model values. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lepirudin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
