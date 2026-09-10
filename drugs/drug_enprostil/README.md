# enprostil

- **generic name:** enprostil
- **ATC codes:** `A02BB02`
- **DrugBank:** [DB13824](https://go.drugbank.com/drugs/DB13824)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 14:50 | 7:13 | 0/0/0 | 0/2/0 | 0/0/0 | 72,616/4,391 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 4/1 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Eglen_1989](drugs/drug_enprostil/pd_Eglen_1989_unknown.md) | Eglen RM et al., Characterization of the prostanoid rece…, British journal of pharmaco… (1989) | [10.1111/j.1476-5381.1989.tb12682.x](https://doi.org/10.1111/j.1476-5381.1989.tb12682.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hussein_1993](drugs/drug_enprostil/pd_Hussein_1993_unknown.md) | Hussein Z et al., Age-related differences in the pharmaco…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb00386.x](https://doi.org/10.1111/j.1365-2125.1993.tb00386.x) |

## Coverage

- **PubMed hits:** 21 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_1989.pdf` | Smith S et al., Metabolic fate of the new anti-ulcer dr…, Arzneimittel-Forschung (1989) | popPK | 8 | not captured | [2502986](https://pubmed.ncbi.nlm.nih.gov/2502986) | The study reports qualitative PK findings (Tmax, linear kinetics, tissue distribution) for enprostil in animals, but specific quantitative parameters like CL, V, or ka are not provided in the text. |
| `Botella_1995.pdf` | Botella A et al., Receptor subtypes involved in dual effe…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7791070](https://www.ncbi.nlm.nih.gov/pubmed/7791070) | metadata signals extractable PD data (EC50) |
| `Pawlotsky_1993.pdf` | Pawlotsky JM et al., Effects of PGE2, misoprostol, and enpro…, Digestive diseases and scie… (1993) | pd | 4 | [10.1007/BF01307550](https://doi.org/10.1007/BF01307550) | [8425443](https://www.ncbi.nlm.nih.gov/pubmed/8425443) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T14:49:13.720414+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bang_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of misoprostol's protective effects on liver cells, where enprostil is only mentioned as a previous comparator, and no pharmacokinetic parameters are reported. |
| popPK | Botella_1995 | irrelevant | 0 | 0 | The paper describes receptor subtypes and smooth muscle effects, not pharmacokinetic parameters for enprostil. |
| PD | Botella_1995 | not_relevant | 0 | 0 | not captured |
| popPK | Chirila_2026 | irrelevant | 0 | 0 | The paper is a machine learning study for HIV-1 drug repurposing and does not report pharmacokinetic parameters for enprostil. |
| PD | Chirila_2026 | not_relevant | 0 | 0 | The paper is a computational study on machine learning for drug repurposing and does not contain any pharmacodynamic, exposure-response, or dose-response data for enprostil. |
| popPK | Crider_1999 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing DP receptors in cell lines, not a pharmacokinetic study, and enprostil is only mentioned as a weak EP receptor agonist comparator. |
| PD | Crider_1999 | not_relevant | 3 | 0 | The paper reports that enprostil is a weak or inactive agonist in the assay but does not provide specific numeric PD parameters (EC50, Emax) for it, only for other DP receptor agonists. |
| popPK | Davis_1989 | irrelevant | 0 | 0 | The study assesses the metabolic effects of enprostil on glucose and lipids in diabetes patients and does not report any pharmacokinetic parameters. |
| popPK | Eglen_1989 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing receptor potency (EC50) and does not report any pharmacokinetic disposition parameters. |
| popPK | Goa_1987 | irrelevant | 2 | 0 | The paper is a review of pharmacodynamic and therapeutic efficacy properties, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for enprostil. |
| PD | Goa_1987 | not_relevant | 2 | 1 | The text is a qualitative review summarizing general pharmacodynamic effects (e.g., up to 80% acid suppression) and clinical efficacy, but it does not provide specific numeric PD parameters (Emax, EC50) or an extractable concentration-effect curve. |
| popPK | Grass_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intestinal permeability and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for enprostil. |
| popPK | Griffin_1998 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing receptor binding and signaling, not a pharmacokinetic study, and enprostil is only a comparator agent. |
| PD | Griffin_1998 | not_relevant | 1 | 0 | The paper characterizes an FP receptor using various prostaglandins, but enprostil is only mentioned as a less potent/efficacious agonist without providing specific numeric PD parameters (EC50, Emax) for it. |
| popPK | Hawkey_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of gastric mucosal protection (blood loss) and does not report any pharmacokinetic parameters for enprostil. |
| popPK | Heijerman_1990 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing ranitidine and enprostil for cystic fibrosis, reporting no pharmacokinetic parameters. |
| popPK | Hussein_1993 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of lansoprazole, not enprostil. |
| popPK | Kohli_1988 | irrelevant | 0 | 0 | The study focuses on the antisecretory pharmacodynamic effect of enprostil on gastric acid secretion and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Lanza_1990 | irrelevant | 0 | 0 | The study is a clinical safety/endoscopic assessment of mucosal effects and does not report any pharmacokinetic parameters for enprostil. |
| PD | Lanza_1990 | not_relevant | 3 | 1 | The paper reports a qualitative dose-response relationship (35 vs 70 micrograms) on mucosal scores but does not provide numeric PD parameters (like Emax, EC50) or a concentration-effect curve, as it is a clinical trial without PK/PD modeling. |
| popPK | Lanzon-Miller_1988 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects on gastrin release, not pharmacokinetic disposition parameters for enprostil. |
| popPK | Livingston_1993 | irrelevant | 0 | 0 | The study investigates the effect of enprostil on gastric mucosal blood flow (hemodynamics) rather than pharmacokinetic disposition parameters. |
| popPK | Moriga_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of gastric acid secretion inhibition and does not report any pharmacokinetic parameters for enprostil. |
| popPK | Murai_1996 | irrelevant | 0 | 0 | The study investigates the metabolic effects of enprostil on hepatic lipid content and enzyme activities, not its pharmacokinetic disposition parameters. |
| popPK | Naito_1989 | irrelevant | 2 | 0 | The study is a qualitative whole-body autoradiography distribution study in rats that reports tissue localization and timing of peaks but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Nauck_1997 | irrelevant | 0 | 0 | The paper is a review of GLP-1 in diabetes where enprostil is mentioned only as a comparator agent affecting GIP, with no pharmacokinetic parameters reported for enprostil. |
| popPK | Onizuka_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in rats measuring mucosal damage and eicosanoid levels, and it does not report any pharmacokinetic parameters (CL, V, ka, etc.) for enprostil. |
| popPK | Pawlotsky_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenylate cyclase activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Reaven_1988 | irrelevant | 0 | 0 | The study reports metabolic effects (glucose, insulin, lipids) rather than pharmacokinetic disposition parameters for enprostil. |
| popPK | Reilly_1986 | irrelevant | 1 | 0 | The study focuses on enprostil's effect on propranolol metabolism (drug-drug interaction) rather than reporting quantitative disposition parameters for enprostil itself. |
| popPK | Schwartz_1988 | irrelevant | 0 | 0 | The study focuses on the endocrine effects of enprostil on glucose and gastrointestinal hormones, not on its pharmacokinetic disposition parameters. |
| popPK | Schwartz_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of enprostil on lipemia and glucose metabolism, not on pharmacokinetic disposition parameters. |
| popPK | Smith_1989 | relevant | 8 | 2 | The study reports qualitative PK findings (Tmax, linear kinetics, tissue distribution) for enprostil in animals, but specific quantitative parameters like CL, V, or ka are not provided in the text. |
| popPK | Sontag_1994 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on ulcer healing and does not report any pharmacokinetic parameters for enprostil. |
| popPK | Vanhanen_1995 | irrelevant | 0 | 0 | The study focuses on cholesterol and fat absorption/metabolism rather than pharmacokinetic disposition parameters (CL, V, ka) for enprostil. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_enprostil`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
