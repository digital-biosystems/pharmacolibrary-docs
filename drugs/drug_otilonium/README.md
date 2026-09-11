# Otilonium

- **generic name:** Otilonium
- **ATC codes:** `A03AB06`, `A03CA04`
- **DrugBank:** [DB13500](https://go.drugbank.com/drugs/DB13500)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 22:58 | 13:22 | 0/0/0 | 1/1/0 | 0/0/0 | 147,323/3,839 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 4/7 | 10/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhao_2025](drugs/drug_otilonium/pd_Zhao_2025_PPM1A.md) | Zhao T et al., Otilonium bromide ameliorates pulmonary…, Acta pharmacologica Sinica (2025) | [10.1038/s41401-024-01368-8](https://doi.org/10.1038/s41401-024-01368-8) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Camarda_2025](drugs/drug_otilonium/pd_Camarda_2025_unknown.md) | Camarda L et al., Repurposing 1,4-Dihydropyridine Scaffol…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18101476](https://doi.org/10.3390/ph18101476) |

## Coverage

- **PubMed hits:** 26 matched, 54 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alvarez-Berdugo_2015.pdf` | Alvarez-Berdugo D et al., Changes in the response to excitatory a…, Neurogastroenterology and m… (2015) | pd | 4 | [10.1111/nmo.12659](https://doi.org/10.1111/nmo.12659) | [26303606](https://www.ncbi.nlm.nih.gov/pubmed/26303606) | metadata signals extractable PD data (sigmoid) |
| `Evangelista_1998.pdf` | Evangelista S et al., Receptor binding profile of Otilonium b…, Pharmacological research (1998) | pd | 4 | [10.1006/phrs.1998.0340](https://doi.org/10.1006/phrs.1998.0340) | [9721598](https://www.ncbi.nlm.nih.gov/pubmed/9721598) | metadata signals extractable PD data (IC50) |
| `Gandía_1996.pdf` | Gandía L et al., Blocking effects of otilonium on Ca2+ c…, European journal of pharmac… (1996) | pd | 4 | [10.1016/0014-2999(95)00808-x](https://doi.org/10.1016/0014-2999(95)00808-x) | [8867109](https://www.ncbi.nlm.nih.gov/pubmed/8867109) | metadata signals extractable PD data (IC50) |
| `García-Alvarado_2019.pdf` | García-Alvarado F et al., Otilonium and pinaverium trigger mitoch…, Neurotoxicology (2019) | pd | 4 | [10.1016/j.neuro.2018.11.003](https://doi.org/10.1016/j.neuro.2018.11.003) | [30448301](https://www.ncbi.nlm.nih.gov/pubmed/30448301) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T22:56:54.137776+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aaltonen_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of atropine, not otilonium. |
| popPK | Adel_2014 | irrelevant | 0 | 0 | The study focuses on drotaverine hydrochloride, not otilonium. |
| popPK | Alvarez-Berdugo_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on colonic smooth muscle and does not report pharmacokinetic parameters for otilonium. |
| PD | Alvarez-Berdugo_2015 | not_relevant | 0 | 0 | The paper studies colonic smooth muscle strips from patients with diverticulosis and does not mention Otilonium or report any exposure-response or dose-response data for it. |
| popPK | Anderson_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketobemidone and its spasmolytic component, not otilonium. |
| popPK | Baldwin_1994 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of salbutamol and adrenaline on airway smooth muscle and does not involve otilonium or report any pharmacokinetic parameters. |
| popPK | Bartels_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glycopyrronium, not otilonium. |
| popPK | Begrow_2010 | irrelevant | 0 | 0 | The paper investigates the antispasmodic and ciliary clearance effects of thyme extracts (thymol/carvacrol) and does not involve otilonium or report any pharmacokinetic parameters. |
| popPK | Bondesson_1980 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketobemidone, not otilonium. |
| popPK | Bousquet_1984 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity of a series of compounds, not a pharmacokinetic study of otilonium, and contains no PK parameters. |
| popPK | Camarda_2025 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on new 1,4-dihydropyridine derivatives using otilonium only as a reference comparator, and it reports no pharmacokinetic parameters for otilonium. |
| popPK | Cornelissen_2020 | irrelevant | 0 | 0 | The study focuses on atropine and scopolamine, not otilonium. |
| popPK | Demin_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of indacaterol and glycopyrronium, not otilonium. |
| popPK | Dickinson_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mebeverine, not otilonium. |
| popPK | Evangelista_1998 | irrelevant | 0 | 0 | The paper title indicates a receptor binding profile study, which is mechanistic/in-vitro and does not report pharmacokinetic disposition parameters. |
| PD | Evangelista_1998 | not_relevant | 0 | 0 | The paper describes the receptor binding profile (in vitro affinity) of Otilonium bromide, which is a pharmacological mechanism study, not a pharmacodynamic (exposure-response or dose-response) analysis in a biological system with numeric PD parameters like Emax or EC50 for a clinical or physiological effect. |
| popPK | Evangelista_2018 | irrelevant | 0 | 0 | The paper is a mechanistic review of otilonium's pharmacodynamics and does not report quantitative pharmacokinetic parameters. |
| PD | Evangelista_2018 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism of action and does not provide any numeric PD parameters or concentration-effect data. |
| popPK | Gallego_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of otilonium's mechanism of action on colonic smooth muscle, reporting no pharmacokinetic parameters. |
| popPK | Gandía_1996 | irrelevant | 0 | 0 | The paper describes in-vitro mechanistic effects on calcium channels in rat chromaffin cells, not pharmacokinetic disposition parameters. |
| popPK | Gandía_1996_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor binding and ion channel blockade, reporting no pharmacokinetic parameters. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 101BHG-D01, not otilonium. |
| popPK | García-Alvarado_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis in neurons, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Imbimbo_1986 | irrelevant | 0 | 0 | The study investigates cimetropium bromide, not otilonium. |
| popPK | Jagdale_2013 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and formulation of darifenacin, not otilonium. |
| popPK | Jeong_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tiropramide, not otilonium. |
| popPK | Kjaer_1992 | irrelevant | 0 | 0 | The study investigates cetobemidone, not otilonium, and does not report PK parameters for the target drug. |
| popPK | Lindqvist_2002 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of receptor binding and calcium signaling, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Lo_2021 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for revefenacin and its metabolite THRX-195518, not otilonium. |
| popPK | Martin_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of otilonium's effect on calcium channels in rat colon, reporting no pharmacokinetic parameters. |
| popPK | Martínez-Cutillas_2013 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanisms of action (calcium channel inhibition) in vitro and in tissue strips, not pharmacokinetic disposition parameters. |
| popPK | Matos_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Kaurenoic acid, not otilonium. |
| popPK | Nakashima_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of biperiden and scopolamine, not otilonium. |
| popPK | Nie_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabidiol (CBD), not otilonium. |
| popPK | Oliviero_2016 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory and cytotoxic effects of thyme extract on cell lines and does not involve otilonium or pharmacokinetic parameters. |
| popPK | Pita_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic analysis of trachylobane-360, not otilonium. |
| popPK | Renner_2005 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of scopolamine, not otilonium. |
| popPK | Rychter_2014 | irrelevant | 0 | 0 | The paper is a mechanistic review of otilonium's pharmacodynamic effects on colonic smooth muscle and does not report any pharmacokinetic parameters. |
| PD | Rychter_2014 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanisms of action (calcium channel blockade, receptor inhibition) and does not provide numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Salehi_2018 | irrelevant | 0 | 0 | The paper is a review of thymol and thyme, not a pharmacokinetic study of otilonium. |
| popPK | Santicioli_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor and channel actions in guinea-pig colon, reporting IC50 and Ki values rather than pharmacokinetic disposition parameters. |
| popPK | Shin_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of imidafenacin, not otilonium. |
| popPK | Shrivastava_2022 | irrelevant | 0 | 0 | The paper is a mini-review focusing on analytical methods and general characteristics, containing no original quantitative pharmacokinetic parameter values for otilonium. |
| PD | Shrivastava_2022 | not_relevant | 1 | 0 | The paper is a mini-review focusing on analytical methods and general characteristics of Otilonium Bromide, containing no specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Tamsen_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketobemidone, not otilonium. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper is a review of glycycoumarin, a different drug, and does not contain pharmacokinetic data for otilonium. |
| popPK | Traserra_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hyoscine butylbromide (HBB), not otilonium. |
| popPK | Tytgat_2007 | irrelevant | 0 | 0 | The paper is a review of hyoscine butylbromide, not otilonium, and contains no pharmacokinetic data for the subject drug. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The study focuses on the effects of vitexin on CYP enzymes using probe drugs (phenacetin, tolbutamide, midazolam) and does not involve otilonium. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | The paper is a mechanistic/cytotoxicity study on otilonium as a USP28 inhibitor and does not report pharmacokinetic disposition parameters. |
| PGx | Zamfir-Taranu_2025 | not_relevant | 0 | 0 | The paper investigates the effect of hCAZyme gene variants on the clinical response to a FODMAP diet and otilonium, but does not report any changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters of otilonium itself. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study investigating otilonium as a PPM1A activator for pulmonary fibrosis, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Zhen_2024 | not_relevant | 0 | 0 | The paper investigates the antifungal mechanism of otilonium bromide in Candida albicans and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters in humans. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_otilonium`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
