<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;roxatidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Roxatidine_Gladziwa1995_reference&quot;,&quot;label&quot;:&quot;Gladziwa_1995_reference&quot;,&quot;href&quot;:&quot;drugs/drug_roxatidine/Roxatidine_Gladziwa1995_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-09-18 07:58 | 9:38 | 0/0/1 | 0/0/0 | 0/0/0 | 120,637/11,953 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Gladziwa_1995_reference](drugs/drug_roxatidine/Roxatidine_Gladziwa1995_reference.md) | Gladziwa U et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (1995) | [10.1111/j.1365-2125.1995.tb04423.x](https://doi.org/10.1111/j.1365-2125.1995.tb04423.x) |

## Coverage

- **PubMed hits:** 46 matched, 62 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nakamura_2012.pdf` | Nakamura H et al., Pharmacokinetics of the H(2) blocker ro…, Drug metabolism and pharmac… (2012) | popPK | 9 | [10.2133/dmpk.dmpk-11-rg-112](https://doi.org/10.2133/dmpk.dmpk-11-rg-112) | [22293541](https://pubmed.ncbi.nlm.nih.gov/22293541) | The paper is a primary PK study for roxatidine, but the provided evidence contains only qualitative descriptions and no specific numeric parameter values. |
| `Tsutsumi_2001.pdf` | Tsutsumi M et al., Pharmacokinetics of roxatidine acetate…, Journal of gastroenterology… (2001) | popPK | 9 | [10.1046/j.1440-1746.2001.02535.x](https://doi.org/10.1046/j.1440-1746.2001.02535.x) | [11555106](https://pubmed.ncbi.nlm.nih.gov/11555106) | The study reports quantitative PK parameters (half-life, clearance, AUC) for roxatidine, but the specific numeric values are not present in the provided abstract text. |
| `Chen_1990.pdf` | Chen WW et al., [Plasma pharmacokinetics of roxatidine…, Gastroenterologie clinique… (1990) | popPK | 8 | not captured | [1972124](https://pubmed.ncbi.nlm.nih.gov/1972124) | The study reports PK parameters for roxatidine in humans, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text (only a qualitative mention of a 6-h half-life). |
| `Li_2022.pdf` | Li X et al., Pharmacokinetics and Bioequivalence Stu…, Clinical pharmacology in dr… (2022) | popPK | 8 | [10.1002/cpdd.1053](https://doi.org/10.1002/cpdd.1053) | [34978388](https://pubmed.ncbi.nlm.nih.gov/34978388) | The study reports pharmacokinetic parameters for roxatidine, but the specific numeric values are not present in the provided evidence text. |
| `Lin_1991.pdf` | Lin JH, Pharmacokinetic and pharmacodynamic pro…, Clinical pharmacokinetics (1991) | pd | 5 | [10.2165/00003088-199120030-00004](https://doi.org/10.2165/00003088-199120030-00004) | [1673880](https://www.ncbi.nlm.nih.gov/pubmed/1673880) | metadata signals extractable PD data (IC50) |
| `Sasaki_2001.pdf` | Sasaki M et al., Cytochrome P450 enzymes involved in the…, Arzneimittel-Forschung (2001) | pgx | 7 | [10.1055/s-0031-1300096](https://doi.org/10.1055/s-0031-1300096) | [11556126](https://www.ncbi.nlm.nih.gov/pubmed/11556126) | metadata signals extractable PGX data (CYP2A1, PK/PD-context) |

<sub>queue written 2026-09-18T07:53:36.041381+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agrawal_2011 | irrelevant | 0 | 0 | The study evaluates the anti-ovulatory pharmacological activity of roxatidine in rabbits and does not report any pharmacokinetic parameters. |
| popPK | Audibert_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cerebral blood flow in dogs, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| popPK | Bender_1989 | irrelevant | 2 | 0 | The paper is a review of pharmacokinetic studies and the provided evidence contains only qualitative descriptions without any specific numeric parameter values. |
| popPK | Bonfils_1988 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic acid secretion inhibition and dose-response, reporting only peak concentration timing without quantitative PK parameters like clearance or volume. |
| popPK | Büyüktimkin_1991 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and pharmacological activity of new compounds, with no pharmacokinetic data for roxatidine. |
| popPK | Chen_1990 | relevant | 8 | 2 | The study reports PK parameters for roxatidine in humans, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text (only a qualitative mention of a 6-h half-life). |
| PD | Chen_1990 | not_relevant | 4 | 2 | The paper describes a correlation between peak concentration and effect in a small cohort but does not provide numeric PD parameters (Emax, EC50) or a quantitative dose-response curve in the text. |
| popPK | Choi_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cetirizine, using roxatidine only as an internal standard for quantification, and does not report PK parameters for roxatidine. |
| popPK | Ciacci_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell proliferation and migration, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Collins_1988 | irrelevant | 2 | 1 | The paper is explicitly a review of previous studies and does not report original quantitative disposition parameters (CL, V, Q) for roxatidine, only qualitative descriptions and limited summary statistics (tmax, t1/2). |
| popPK | Dammann_1988 | irrelevant | 0 | 0 | The paper is a clinical review focusing on pharmacodynamics and efficacy, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for roxatidine. |
| PD | Dammann_1988 | not_relevant | 2 | 1 | The text is a qualitative review that mentions optimal doses and relative potency but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Freston_1990 | irrelevant | 0 | 0 | The paper is a clinical review of peptic ulcer disease therapy and does not report any pharmacokinetic parameters for roxatidine. |
| popPK | Fujino_1995 | irrelevant | 0 | 0 | The study is a clinical trial assessing ulcer healing rates and H. pylori clearance, not a pharmacokinetic study reporting disposition parameters for roxatidine. |
| popPK | Garbis_2005 | irrelevant | 0 | 0 | The study is a teratogenicity/pregnancy outcome assessment, not a pharmacokinetic study, and contains no PK parameters for roxatidine. |
| popPK | Greve_2002 | irrelevant | 0 | 0 | The paper is a dermatology case study regarding laser treatment of lichenoid dermatitis, with roxatidine mentioned only as a potential cause of the condition, and contains no pharmacokinetic data. |
| PD | Gugler_1994 | not_relevant | 1 | 0 | The text is a review discussing the interaction between H2-antagonists and alcohol metabolism, stating that roxatidine did not show an effect on gastric alcohol first-pass metabolism, but it provides no numeric PD parameters, concentration-effect curves, or dose-response data for roxatidine. |
| popPK | Hashimoto_2007 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring gastric pH and volume, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| PD | Hentschel_1988 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing two dosing regimens and reports healing rates and pain scores, but it does not provide pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Hirota_1999 | irrelevant | 0 | 0 | The study focuses on the relationship between bispectral index and catecholamines after diazepam premedication, with roxatidine serving only as a co-administered agent and no pharmacokinetic parameters for roxatidine are reported. |
| popPK | Hirota_2005 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing gastric pH and volume, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| popPK | Hirota_2011 | irrelevant | 0 | 0 | The study is a clinical trial comparing the antisecretory effects of roxatidine and rabeprazole on gastric pH and volume, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for roxatidine. |
| popPK | Ivanov_1996 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacological effects (gastroprotective, antisecretory) of a new compound MX1, with no pharmacokinetic parameters reported for roxatidine. |
| popPK | Iwagami_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study on cancer risk associated with H2 blockers, not a pharmacokinetic study, and roxatidine is only a comparator drug. |
| popPK | Labs_1988 | irrelevant | 2 | 0 | The study focuses on drug interactions and bioavailability of roxatidine without reporting specific quantitative PK parameters (CL, V, t1/2) for roxatidine itself. |
| popPK | Lameire_1988 | irrelevant | 2 | 0 | The paper is a review that discusses general trends (e.g., renal clearance percentage) without providing specific quantitative PK parameter values (CL, V, t1/2) for roxatidine in the provided text. |
| PD | Lameire_1988 | not_relevant | 1 | 0 | The text is a review of pharmacokinetics in renal failure and mentions dose reduction qualitatively but provides no numeric PD parameters or concentration-effect data. |
| popPK | Lassman_1988 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics and qualitative PK assessment (accumulation/steady state) without reporting specific quantitative disposition parameters like clearance, volume, or half-life in the provided text. |
| PD | Lassman_1988 | not_relevant | 2 | 1 | The paper reports qualitative PK/PD observations (pH increases with plasma concentration) and clinical outcomes (duration of effect, nocturnal pH) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Li_2022 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for roxatidine, but the specific numeric values are not present in the provided evidence text. |
| popPK | Lin_1991 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Merki_1988 | irrelevant | 0 | 0 | The paper reports pharmacodynamic results (gastric pH changes) rather than pharmacokinetic parameters (CL, V, t1/2) for roxatidine. |
| PD | Merki_1989 | not_relevant | 2 | 1 | The text is a review summarizing qualitative findings (potency, healing rates) and dose comparisons without providing specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves. |
| popPK | Murdoch_1991 | irrelevant | 2 | 0 | The paper is a review article that summarizes general properties without providing specific quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for roxatidine in the provided evidence. |
| PD | Murdoch_1991 | not_relevant | 2 | 1 | The text is a qualitative review summarizing general pharmacodynamic properties and clinical efficacy without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect data. |
| popPK | Nagai_1995 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding roxatidine. |
| popPK | Nakamura_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function inhibition, not a pharmacokinetic study, and reports no disposition parameters for roxatidine. |
| popPK | Nakamura_2012 | relevant | 9 | 0 | The paper is a primary PK study for roxatidine, but the provided evidence contains only qualitative descriptions and no specific numeric parameter values. |
| popPK | Palileo_2011 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal defense mechanisms and mentions roxatidine only regarding its mechanism of action, without reporting any pharmacokinetic parameters. |
| PGx | Sasaki_2001 | not_relevant | 0 | 0 | The paper identifies the CYP enzymes responsible for roxatidine metabolism but does not report any pharmacogenomic effects (e.g., genotype-based differences) on PK or PD parameters. |
| PD | Savarino_1996 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic outcomes (gastric pH changes over time) and a lack of tolerance, but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect relationship. |
| popPK | Scholtholt_1988 | irrelevant | 2 | 0 | The paper is a review of animal pharmacology that mentions pharmacokinetic studies but does not provide any quantitative PK parameter values (CL, V, t1/2, etc.) in the text. |
| popPK | Seibert-Grafe_1991 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| popPK | Shamburek_1993 | irrelevant | 0 | 0 | The paper is a review of the pharmacology of gastric acid inhibition and does not report any quantitative pharmacokinetic parameters for roxatidine. |
| popPK | Tanaka_1989 | irrelevant | 1 | 0 | Roxatidine is used as a pretreatment agent to assess its effect on the pharmacokinetics of other drugs (antipyrine, trimethadione, ICG), not as the subject drug for which PK parameters are reported. |
| PD | Tryba_1988 | not_relevant | 1 | 0 | The paper reports PK penetration data (CSF/plasma ratio) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for roxatidine. |
| popPK | Tsutsumi_2001 | relevant | 9 | 0 | The study reports quantitative PK parameters (half-life, clearance, AUC) for roxatidine, but the specific numeric values are not present in the provided abstract text. |
| PD | Tsutsumi_2001 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, clearance, half-life) and their correlation with liver function markers, with no pharmacodynamic or exposure-response analysis. |
| popPK | Upton_1991 | irrelevant | 0 | 0 | The paper is a review of theophylline pharmacokinetics where roxatidine is listed only as a drug that does not influence theophylline's disposition, with no PK parameters reported for roxatidine itself. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and lists roxatidine as a drug that does not influence theophylline's disposition, rather than reporting a pharmacogenomic effect on roxatidine itself. |
| popPK | Yoshimura_1989 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of theophylline, with roxatidine serving only as a co-administered agent to test for drug interactions, and no PK parameters for roxatidine itself are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_roxatidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
