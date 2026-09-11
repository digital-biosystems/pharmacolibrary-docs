# roxatidine

- **generic name:** roxatidine
- **ATC codes:** `A02BA06`
- **DrugBank:** [DB08806](https://go.drugbank.com/drugs/DB08806)
- **groups:** investigational

## About

**Description.** Roxatidine acetate is a specific and competitive H2 receptor antagonist. It is currently approved in South Africa under the tradename Roxit.

**Indication.** For the treatment of disorders of the upper gastro-intestinal region that are due to an excess of hydrochloric acid in the gastric juice, i.e. duodenal ulcers, benign gastric ulcers. Also for prophylaxis of recurrent gastric and duodenal ulcers

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 22:29 | 9:29 | 0/0/0 | 0/0/0 | 0/0/0 | 41,780/4,133 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 3/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 31 matched, 49 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lin_1991.pdf` | Lin JH, Pharmacokinetic and pharmacodynamic pro…, Clinical pharmacokinetics (1991) | pd | 5 | [10.2165/00003088-199120030-00004](https://doi.org/10.2165/00003088-199120030-00004) | [1673880](https://www.ncbi.nlm.nih.gov/pubmed/1673880) | metadata signals extractable PD data (IC50) |
| `Sasaki_2001.pdf` | Sasaki M et al., Cytochrome P450 enzymes involved in the…, Arzneimittel-Forschung (2001) | pgx | 7 | [10.1055/s-0031-1300096](https://doi.org/10.1055/s-0031-1300096) | [11556126](https://www.ncbi.nlm.nih.gov/pubmed/11556126) | metadata signals extractable PGX data (CYP2A1, PK/PD-context) |

<sub>queue written 2026-09-10T22:28:22.000320+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agrawal_2011 | irrelevant | 0 | 0 | The study evaluates the anti-ovulatory pharmacological activity of roxatidine in rabbits and does not report any pharmacokinetic parameters. |
| popPK | Audibert_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cerebral blood flow in dogs, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| popPK | Bender_1989 | irrelevant | 2 | 0 | The paper is a review of pharmacokinetic studies and the provided evidence contains no specific quantitative parameter values (e.g., CL, V, t1/2) for roxatidine. |
| popPK | Bonfils_1988 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic acid secretion inhibition and dose-response, reporting only peak concentration timing without quantitative PK parameters like clearance or volume. |
| popPK | Büyüktimkin_1991 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and pharmacological activity of new compounds, with no pharmacokinetic data for roxatidine. |
| popPK | Choi_2000 | irrelevant | 0 | 0 | The study focuses on cetirizine, with roxatidine used only as an internal standard, and no PK parameters for roxatidine are reported. |
| popPK | Ciacci_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell proliferation and migration, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Dammann_1988 | irrelevant | 0 | 0 | The paper is a clinical review focusing on pharmacodynamics and efficacy, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for roxatidine. |
| PD | Dammann_1988 | not_relevant | 2 | 1 | The text is a qualitative review that mentions optimal doses and relative potency but does not provide numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| popPK | Freston_1990 | irrelevant | 0 | 0 | The paper is a clinical review of peptic ulcer disease therapy and does not report any pharmacokinetic parameters for roxatidine. |
| popPK | Garbis_2005 | irrelevant | 0 | 0 | The study is a teratogenicity/pregnancy outcome assessment, not a pharmacokinetic study, and contains no PK parameters for roxatidine. |
| PD | Gugler_1994 | not_relevant | 1 | 0 | The text is a review discussing the interaction between H2-antagonists and alcohol metabolism, stating that roxatidine did not show an effect on gastric alcohol first-pass metabolism, but it provides no numeric PD parameters, concentration-effect curves, or dose-response data for roxatidine. |
| popPK | Hashimoto_2007 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring gastric pH and volume, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| PD | Hentschel_1988 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing two dosing regimens and reports healing rates and pain scores, but it does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Hirota_1999 | irrelevant | 0 | 0 | The study focuses on the relationship between bispectral index and catecholamines after diazepam premedication, with roxatidine serving only as a co-administered agent and no pharmacokinetic parameters for roxatidine are reported. |
| popPK | Hirota_2005 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing gastric pH and volume, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| popPK | Hirota_2011 | irrelevant | 0 | 0 | The study is a clinical trial comparing the antisecretory effects of roxatidine and rabeprazole on gastric pH and volume, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Ivanov_1996 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacological effects (gastroprotective, antisecretory) of a new compound MX1, with no pharmacokinetic parameters reported for roxatidine. |
| popPK | Iwagami_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study on cancer risk associated with H2 blockers, not a pharmacokinetic study, and roxatidine is only a comparator drug. |
| popPK | Labs_1988 | irrelevant | 2 | 0 | The study focuses on drug interactions and bioavailability of roxatidine without reporting specific quantitative PK parameters (CL, V, t1/2) for roxatidine itself. |
| popPK | Lameire_1988 | irrelevant | 2 | 0 | The paper is a review that discusses general trends (e.g., renal clearance percentage) without providing specific quantitative PK parameter values (CL, V, t1/2) for roxatidine in the provided text. |
| PD | Lameire_1988 | not_relevant | 1 | 0 | The text is a review of pharmacokinetics in renal failure and mentions dose reduction qualitatively but provides no numeric PD parameters or concentration-effect data. |
| PD | Lassman_1988 | not_relevant | 3 | 1 | The paper reports qualitative PK/PD observations (pH increases with plasma concentration) and clinical outcomes (duration of effect, nocturnal pH) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Lin_1991 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review paper and no quantitative pharmacokinetic parameter values for roxatidine. |
| popPK | Merki_1988 | irrelevant | 0 | 0 | The paper reports pharmacodynamic results (gastric pH changes) rather than pharmacokinetic parameters (CL, V, t1/2) for roxatidine. |
| PD | Merki_1989 | not_relevant | 2 | 1 | The text is a review summarizing qualitative findings (potency, healing rates) and dose comparisons without providing specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves. |
| popPK | Murdoch_1991 | irrelevant | 2 | 0 | The paper is a review article that summarizes general properties without providing specific quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for roxatidine in the provided text. |
| PD | Murdoch_1991 | not_relevant | 2 | 1 | The text is a qualitative review summarizing general pharmacodynamic properties and clinical efficacy without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Nagai_1995 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding roxatidine. |
| popPK | Nakamura_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function inhibition, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| popPK | Palileo_2011 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal defense mechanisms and mentions roxatidine only regarding its mechanism of action, without reporting any pharmacokinetic parameters. |
| PGx | Sasaki_2001 | not_relevant | 0 | 0 | The paper identifies the CYP enzymes responsible for roxatidine metabolism but does not report any pharmacogenomic effects (e.g., genotype-based differences) on PK or PD parameters. |
| PD | Savarino_1996 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic outcomes (gastric pH changes over time) and a lack of tolerance, but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect relationship. |
| popPK | Scholtholt_1988 | irrelevant | 1 | 0 | The paper is a review of animal pharmacology that mentions pharmacokinetic studies but does not report any quantitative disposition parameters (CL, V, t1/2, etc.) for roxatidine. |
| popPK | Shamburek_1993 | irrelevant | 0 | 0 | The paper is a review of gastric acid inhibition mechanisms and does not report any quantitative pharmacokinetic parameters for roxatidine. |
| PD | Tryba_1988 | not_relevant | 1 | 0 | The paper reports PK penetration data (CSF/plasma ratio) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for roxatidine. |
| PD | Tsutsumi_2001 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, clearance, half-life) and their correlation with liver function markers, with no pharmacodynamic or exposure-response analysis. |
| popPK | Upton_1991 | irrelevant | 0 | 0 | The paper is a review of theophylline pharmacokinetics where roxatidine is listed only as a drug that does not influence theophylline's disposition, with no PK parameters reported for roxatidine itself. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and lists roxatidine as a drug that does not influence theophylline's disposition, rather than reporting a pharmacogenomic effect on roxatidine itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_roxatidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
