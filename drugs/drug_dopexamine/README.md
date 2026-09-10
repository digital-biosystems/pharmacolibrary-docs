# dopexamine

- **generic name:** dopexamine
- **ATC codes:** `C01CA14`
- **DrugBank:** [DB12313](https://go.drugbank.com/drugs/DB12313)
- **groups:** approved, withdrawn

## About

**Description.** Dopexamine has been used in trials studying the diagnostic and treatment of Free Flap, Oral Cancer, Hypotension, Septic Shock, and Head and Neck Cancer.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 19:07 | 14:35 | 0/0/0 | 0/1/0 | 0/0/0 | 105,877/7,516 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Einstein_1994](drugs/drug_dopexamine/pd_Einstein_1994_arterial_blood_pressure.md) | Einstein R et al., Cardiovascular actions of dopexamine in…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb14044.x](https://doi.org/10.1111/j.1476-5381.1994.tb14044.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Einstein_1994](drugs/drug_dopexamine/pd_Einstein_1994_cardiac_contractility.md) | Einstein R et al., Cardiovascular actions of dopexamine in…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb14044.x](https://doi.org/10.1111/j.1476-5381.1994.tb14044.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Einstein_1994](drugs/drug_dopexamine/pd_Einstein_1994_heart_rate.md) | Einstein R et al., Cardiovascular actions of dopexamine in…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb14044.x](https://doi.org/10.1111/j.1476-5381.1994.tb14044.x) |

## Coverage

- **PubMed hits:** 41 matched, 70 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gray_1994.pdf` | Gray PA et al., Blood concentrations of dopexamine in p…, British journal of clinical… (1994) | popPK | 9 | [10.1111/j.1365-2125.1994.tb04247.x](https://doi.org/10.1111/j.1365-2125.1994.tb04247.x) | [8148227](https://pubmed.ncbi.nlm.nih.gov/8148227) | The text explicitly reports a quantitative clearance value (24 ml min-1 kg-1) for dopexamine in human patients. |
| `Brown_1985.pdf` | Brown RA et al., Dopexamine: a novel agonist at peripher…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb10554.x](https://doi.org/10.1111/j.1476-5381.1985.tb10554.x) | [2862944](https://www.ncbi.nlm.nih.gov/pubmed/2862944) | metadata signals extractable PD data (IC50) |
| `Mitchell_1987.pdf` | Mitchell PD et al., Inhibition of Uptake1 by dopexamine hyd…, British journal of pharmaco… (1987) | pd | 4 | [10.1111/j.1476-5381.1987.tb11320.x](https://doi.org/10.1111/j.1476-5381.1987.tb11320.x) | [2890392](https://www.ncbi.nlm.nih.gov/pubmed/2890392) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T19:06:02.024106+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amenta_1991 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacological investigation of receptor binding and vascular function in rat mesenteric vasculature, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Aninat_2008 | not_relevant | 0 | 0 | The study investigates the effect of catecholamines on hepatic inflammation and CYP450 expression in vitro, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of dopexamine. |
| popPK | Bartsch_2004 | irrelevant | 0 | 0 | The study focuses on haemodynamic effects (blood flow velocity) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Baumann_1990 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects and dose-response in heart failure patients, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life for dopexamine. |
| popPK | Brown_1985 | irrelevant | 0 | 0 | The provided evidence contains only the title of a pharmacological study, with no quantitative pharmacokinetic parameters or data for dopexamine. |
| PD | Brown_1985 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Chang_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cardiovascular responsiveness to dopexamine in dogs, reporting dose-response curves rather than pharmacokinetic disposition parameters. |
| popPK | Dawson_1985 | irrelevant | 0 | 0 | The study reports acute haemodynamic and metabolic effects, not pharmacokinetic disposition parameters. |
| popPK | Einstein_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cardiovascular responses (blood pressure, heart rate, contractility) to dopexamine in dogs and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Fitton_1990 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (e.g., clearance, volume, half-life) for dopexamine. |
| PD | Fitton_1990 | not_relevant | 2 | 0 | The text is a qualitative review summarizing pharmacodynamic properties and clinical effects without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling data. |
| popPK | Germann_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of intestinal mucosal oxygenation in pigs and does not report any pharmacokinetic parameters for dopexamine. |
| popPK | Günnicker_1993 | irrelevant | 0 | 0 | The study reports hemodynamic efficacy (cardiac output, blood pressure) rather than pharmacokinetic disposition parameters (clearance, volume, half-life). |
| popPK | Hakim_1988 | irrelevant | 0 | 0 | The study reports only haemodynamic effects (cardiac index, SVR, heart rate) and contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Hollenberg_2013 | irrelevant | 0 | 0 | The paper is a commentary on an animal study focusing on immunomodulatory and hemodynamic effects, containing no pharmacokinetic parameters or quantitative disposition data for dopexamine. |
| popPK | Jackson_1988 | irrelevant | 0 | 0 | The study reports hemodynamic effects (cardiac output, blood pressure) rather than pharmacokinetic disposition parameters (clearance, volume, half-life). |
| popPK | Lehtipalo_2002 | irrelevant | 0 | 0 | The study investigates regional vascular tone and oxygenation in pigs, not pharmacokinetic disposition parameters. |
| popPK | Leier_1988 | irrelevant | 0 | 0 | The study reports hemodynamic and renal effects of dopexamine but contains no pharmacokinetic parameters (clearance, volume, half-life) or PK modeling. |
| popPK | MacConnachie_1996 | irrelevant | 0 | 0 | The text is a general introduction/review of dopexamine's clinical use and contains no quantitative pharmacokinetic parameters. |
| popPK | MacGregor_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of beta-adrenoceptor efficacy and potency, not a pharmacokinetic study, and reports no disposition parameters for dopexamine. |
| popPK | Marik_1999 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review or commentary regarding the splanchnic circulation and dopexamine, with no quantitative pharmacokinetic parameters or data. |
| popPK | Martin_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor down-regulation in rats and does not report any pharmacokinetic parameters for dopexamine. |
| popPK | Martin_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of renal vasodilation in an isolated rat kidney model and does not report any pharmacokinetic parameters for dopexamine. |
| popPK | Martin_1995_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated vasodilation in a perfused kidney, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Marx_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical trial evaluating hepatic function and hemodynamics, not a pharmacokinetic study reporting disposition parameters for dopexamine. |
| popPK | Maynard_1995 | irrelevant | 0 | 0 | The study measures splanchnic blood flow using probe drugs (lidocaine, ICG) and does not report pharmacokinetic parameters for dopexamine itself. |
| popPK | Mazzuco_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxation in guinea pig pulmonary artery, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mitchell_1987 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of uptake inhibition, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Moss_2004 | irrelevant | 0 | 0 | The study is a mechanistic investigation of cerebral edema and microvessel ultrastructure in pigs, reporting no pharmacokinetic parameters for dopexamine. |
| popPK | Muir_1992 | irrelevant | 0 | 0 | The study reports only cardiovascular/hemodynamic effects (heart rate, cardiac output, etc.) and contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Myers_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity (EC50) and does not report any pharmacokinetic disposition parameters for dopexamine. |
| popPK | Müller_1999 | irrelevant | 0 | 0 | The study focuses on splanchnic oxygenation and hemodynamic effects, not pharmacokinetic parameters. |
| popPK | Müller_2000 | irrelevant | 0 | 0 | The study is a hemodynamic/pharmacodynamic evaluation of dopexamine's effects on cardiac output and oxygenation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Napoleone_1992 | irrelevant | 0 | 0 | The study investigates receptor binding and cAMP generation in human heart tissue (in-vitro/mechanistic) and does not report pharmacokinetic disposition parameters. |
| popPK | Napoleone_1993 | irrelevant | 0 | 0 | The study focuses on receptor binding and cAMP generation in the human kidney, not on pharmacokinetic disposition parameters. |
| popPK | Neustein_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic/arrhythmogenicity study in dogs that reports hemodynamic effects (heart rate, blood pressure, SVR) but does not report any pharmacokinetic disposition parameters (clearance, volume, half-life) for dopexamine. |
| popPK | Oberbeck_2004 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of dopexamine in a sepsis model and does not report any pharmacokinetic parameters. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review on radiomitigators for radiation injury and does not contain any pharmacokinetic data or mention of dopexamine. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not mention dopexamine or report any pharmacodynamic or exposure-response data. |
| popPK | Pearse_2014 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating a hemodynamic therapy algorithm where dopexamine is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Port_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of inotropic responses in isolated heart tissue and hemodynamics, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sadique_2015 | irrelevant | 0 | 0 | The paper is a cost-effectiveness analysis of a clinical trial where dopexamine is used as a therapeutic agent, and it does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Schilling_2001 | irrelevant | 0 | 0 | The study focuses on endocrine effects (hormone levels) rather than pharmacokinetic disposition parameters. |
| popPK | Sedrish_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of vasomotor response (EC50/relaxation) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Stangl_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of dopexamine on ANP and cGMP levels and hemodynamics, not on pharmacokinetic disposition parameters. |
| popPK | Stephan_1990 | irrelevant | 0 | 0 | The study reports hemodynamic effects (cardiac index, vascular resistance) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Taylor_1993 | irrelevant | 0 | 0 | The study is a hemodynamic and mechanistic investigation in lambs that does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for dopexamine. |
| popPK | Tretiakov_2025 | irrelevant | 0 | 0 | The paper is a review on machine learning for noncovalent interactions and contains no pharmacokinetic data or mention of dopexamine. |
| PD | Tretiakov_2025 | not_relevant | 0 | 0 | The paper is a review on machine learning for noncovalent interactions and contains no pharmacodynamic or exposure-response data for dopexamine. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper is a comparative genomic analysis of a fungal strain (Apiotrichum cacaoliposimilis) and contains no pharmacokinetic data for dopexamine. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper is a comparative genomic analysis of a fungal strain and does not contain any pharmacodynamic or exposure-response data for dopexamine. |
| popPK | Westphal_2004 | irrelevant | 0 | 0 | The study is a hemodynamic/pharmacodynamic investigation in sheep and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for dopexamine. |
| popPK | Yelken_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of hemodynamic and renal effects in septic rats, reporting no pharmacokinetic parameters (CL, V, etc.) for dopexamine. |
| popPK | Zhou_2015 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (mortality, hemodynamics) for vasopressors, not a pharmacokinetic study, and does not report PK parameters for dopexamine. |
| popPK | unknown_1996 | irrelevant | 0 | 0 | The paper is a collection of pediatric intensive care abstracts with no mention of dopexamine or its pharmacokinetic parameters. |
| PD | unknown_1996 | not_relevant | 0 | 0 | The provided text is only the title and metadata for a conference abstract book, containing no scientific content, data, or PD parameters. |
| popPK | van_1993 | irrelevant | 0 | 0 | The study is a hemodynamic comparison in dogs and does not report pharmacokinetic parameters such as clearance, volume, or half-life for dopexamine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dopexamine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
