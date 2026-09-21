<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;aminophenazone&quot;}]"></div>

# aminophenazone

- **generic name:** aminophenazone
- **ATC codes:** `N02BB03`
- **DrugBank:** [DB01424](https://go.drugbank.com/drugs/DB01424)
- **groups:** approved, withdrawn

## About

**Description.** Aminophenazone is a pyrazolone with analgesic, anti-inflammatory, and antipyretic properties that carries a risk of agranulocytosis. In biomedical applications, radiolabelled (13C-labeled) aminophenazone has been used in breath tests to measure the cytochrome P-450 metabolic activity in liver function tests. The FDA suspended the use of aminophenazone due to its association with agranulocytosis, a life-threatening side effect.[A254242,L43942]

**Indication.** Formerly widely used as an antipyretic and analgesic in rheumatism, neuritis, and common colds. Currently used to measure total body water.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 22:45 | 20:52 | 0/0/0 | 0/0/0 | 0/0/0 | 168,777/7,133 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 7/5 | 10/3 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aminophenazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP17A1 (substrate), CYP2C18 (substrate).</sub>

## Coverage

- **PubMed hits:** 244 matched, 63 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brune_1983.pdf` | Brune K et al., Non-acidic pyrazoles: inhibition of pro…, Agents and actions (1983) | pd | 4 | [10.1007/BF01971489](https://doi.org/10.1007/BF01971489) | [6604402](https://www.ncbi.nlm.nih.gov/pubmed/6604402) | metadata signals extractable PD data (IC50) |
| `Wang_1999.pdf` | Wang H et al., Demethylation capacity of human fetal a…, Zhongguo yao li xue bao = A… (1999) | pd | 4 | not captured | [10452125](https://www.ncbi.nlm.nih.gov/pubmed/10452125) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-09-20T22:44:06.600715+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anliker-Ort_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metamizole (dipyrone) and its metabolites, not aminophenazone. |
| popPK | Araújo-Silva_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tramadol and metamizole (dipyrone) in donkeys, not aminophenazone. |
| popPK | Asmardi_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dipyrone and its metabolite MAA, not aminophenazone. |
| popPK | Baan_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetic interaction between metamizole and voriconazole, and does not report any parameters for aminophenazone. |
| popPK | Bilir_2000 | irrelevant | 0 | 0 | The study uses antipyrine and caffeine as probe drugs to assess liver function, not aminophenazone, and does not report PK parameters for aminophenazone. |
| PD | Bluth_1982 | not_relevant | 3 | 0 | The paper mentions dose-response relationships qualitatively to compare activities but does not provide numeric PD parameters, curves, or specific dose-effect data for aminophenazone in the text. |
| popPK | Bochenek_1971 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Brinkman_2025 | irrelevant | 0 | 0 | The paper is a review of metamizole (dipyrone) pharmacology and interactions, and does not report quantitative PK parameters for aminophenazone. |
| popPK | Brody_1979 | irrelevant | 0 | 0 | The paper is a review of liver function tests and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Brogden_1986 | irrelevant | 0 | 0 | The paper is a review of pyrazolone derivatives (dipyrone, antipyrine, etc.) and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Bukowskyj_1984 | irrelevant | 0 | 0 | The study focuses on theophylline pharmacokinetics, and aminophenazone is not the subject drug (aminopyrine is mentioned only as a comparator in the background). |
| popPK | Cang_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of alkaloids from Compound Kushen Injection (matrine, oxymatrine, etc.) in rats, and aminophenazone is not the subject drug (aminopyrine is used as an internal standard). |
| popPK | Cazottes_1979 | irrelevant | 0 | 0 | The study uses aminopyrine (not aminophenazone) as a probe for gastric mucosal blood flow, and does not report PK parameters for aminophenazone. |
| popPK | Cuny_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of salicylates (acetylsalicylic acid), not aminophenazone. |
| popPK | DArcy_1984 | irrelevant | 0 | 0 | The paper is a review discussing vaccine-drug interactions and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Davenport_1973 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Døssing_1985 | irrelevant | 0 | 0 | The paper is a review discussing the effect of exercise on drug metabolism and does not report original quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Eichelbaum_1976 | irrelevant | 0 | 0 | The paper is a review discussing drug metabolism in thyroid disease and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Fux_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metamizole (dipyrone) and its metabolites (4-MAA, 4-AA), not aminophenazone. |
| popPK | Gaginella_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of Ro 22-6923 on gastric secretion in dogs, using aminopyrine (not aminophenazone) as a probe for blood flow, and does not report PK parameters for aminophenazone. |
| popPK | Goldberg_1987 | irrelevant | 0 | 0 | The paper is a review of biochemical liver tests and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Hanew_1984 | irrelevant | 0 | 0 | The study investigates aminopyrine (antipyrine), not aminophenazone, which is a different drug. |
| popPK | Harris_1988 | irrelevant | 0 | 0 | The study focuses on doxorubicin pharmacokinetics in rabbits, and aminophenazone is not mentioned (aminopyrine is used as a diagnostic probe, which is a different compound). |
| popPK | Herold_2000 | irrelevant | 0 | 0 | The study focuses on liver function tests (including aminopyrine, not aminophenazone) and Doppler sonography, containing no pharmacokinetic parameters for aminophenazone. |
| popPK | Herold_2001 | irrelevant | 0 | 0 | The study uses aminopyrine (not aminophenazone) as a probe for liver function and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Herz_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aminopyrine (dimethylaminoantipyrine), not aminophenazone. |
| popPK | Huang_2018 | irrelevant | 0 | 0 | The study investigates the metabolism of protopine and allocryptopine, not aminophenazone. |
| popPK | Humphries_1987 | irrelevant | 0 | 0 | The paper is a review of famotidine's drug interactions and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Jeyaraman_2024 | irrelevant | 0 | 0 | The paper is a review of metamizole (dipyrone) and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Juan_1986 | irrelevant | 0 | 0 | The study focuses on theophylline pharmacokinetics, with aminopyrine (aminophenazone) used only as a diagnostic probe in a breath test, not as the subject drug for PK parameter estimation. |
| PD | Khurshid_2021 | not_relevant | 3 | 5 | The paper reports in vitro enzyme inhibition IC50 values for derivatives of aminophenazone, which is a biochemical potency metric rather than a pharmacodynamic (exposure-response) relationship for the drug itself in a biological system. |
| popPK | Koch_1976 | irrelevant | 0 | 0 | The study focuses on gastric mucosal blood flow measurement using aminopyrine clearance as a comparative method, not on the pharmacokinetic parameters of aminophenazone. |
| popPK | Krishnaswamy_1984 | irrelevant | 0 | 0 | The study investigates antipyrine and aminopyrine, not aminophenazone. |
| popPK | Lane_1988 | irrelevant | 0 | 0 | The paper discusses aminopyrine (a different drug) and compares it to caffeine and methacetin, with no quantitative PK parameters reported for aminophenazone. |
| popPK | Lau_1997 | irrelevant | 0 | 0 | The study evaluates hepatic function using ICG and aminopyrine (not aminophenazone) and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Limlomwongse_1976 | irrelevant | 0 | 0 | The study focuses on gastric acid secretion mechanisms in rats using aminopyrine (not aminophenazone) as a marker, and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Limlomwongse_1979 | irrelevant | 0 | 0 | The study focuses on capsaicin's effect on gastric acid secretion and uses aminopyrine (not aminophenazone) as a probe for mucosal blood flow, with no PK parameters reported for the target drug. |
| popPK | Lotterer_1992 | irrelevant | 0 | 0 | The paper investigates serum markers for collagen and basement membrane metabolism in cirrhosis and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Lykke_2019 | irrelevant | 0 | 0 | The study uses aminopyrine (not aminophenazone) as a probe for microsomal function and does not report pharmacokinetic parameters for aminophenazone. |
| PGx | Madro_2002 | not_relevant | 0 | 0 | The study investigates the effect of interferon alpha on liver function in rats, not the influence of a gene variant or genotype on aminophenazone pharmacokinetics. |
| popPK | Matsumura_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of warfarin in rats, not aminophenazone. |
| popPK | Mehta_1990 | irrelevant | 0 | 0 | The paper discusses aminopyrine (a different drug) and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Merkel_1991 | irrelevant | 0 | 0 | The study uses aminopyrine (not aminophenazone) as a probe for liver function and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Müller-Lissner_1981 | irrelevant | 0 | 0 | The study focuses on aminopyrine (a different drug) as a diagnostic probe for gastric function, not aminophenazone. |
| popPK | OMalley_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine (and in-vitro aminopyrine), not aminophenazone. |
| popPK | Ocker_2005 | irrelevant | 0 | 0 | The study uses aminopyrine (not aminophenazone) as a probe for liver function testing and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Parker_1996 | irrelevant | 0 | 0 | The study investigates mycophenolate mofetil, and aminophenazone is not the subject drug (aminopyrine is used only as a diagnostic probe). |
| popPK | Pelkonen_1991 | irrelevant | 0 | 0 | The study focuses on medetomidine's effects on aminopyrine (not aminophenazone) metabolism and does not report PK parameters for aminophenazone. |
| popPK | Powell_1983 | irrelevant | 0 | 0 | The paper is a review of H2-antagonist drug interactions and does not report quantitative pharmacokinetic parameters for aminophenazone. |
| popPK | Regårdh_1986 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of omeprazole, and aminophenazone is not the subject drug (aminopyrine/antipyrine are mentioned as comparators, but no PK parameters for aminophenazone are reported). |
| popPK | Sato_1986 | irrelevant | 0 | 0 | The paper focuses on gastric mucosal hemodynamics and ulceration, using aminopyrine (not aminophenazone) as a probe, and contains no pharmacokinetic parameters for aminophenazone. |
| popPK | Sato_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of imipramine and desipramine, not aminophenazone. |
| popPK | Sensing_1983 | irrelevant | 0 | 0 | The study investigates aminopyrine (dimethylaminoantipyrine), not aminophenazone. |
| popPK | Sewing_1975 | irrelevant | 0 | 0 | no_text gate: only 43 chars of text extracted (&lt; 400) |
| popPK | Sonnenberg_1980 | irrelevant | 0 | 0 | The study investigates aminopyrine (dimethylaminoantipyrine), not aminophenazone, and focuses on breath test kinetics rather than standard PK parameters for the target drug. |
| PD | Strubelt_1980 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for lanthanides (praseodymium, etc.) and the protective effect of silybin, but aminophenazone is only mentioned as a substrate for a liver enzyme (demethylase) whose activity was measured; no PD or exposure-response relationship for aminophenazone itself is reported. |
| PD | Tarachowski_1991 | not_relevant | 1 | 0 | The text mentions aminophenazone only as a marker for metabolic classification and discusses general forecasting models without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Uetrecht_1995 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on the oxidation of aminopyrine (a different drug) and does not report pharmacokinetic parameters for aminophenazone. |
| popPK | Van_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine (a different drug) in mice, not aminophenazone. |
| popPK | Vesell_1976 | irrelevant | 0 | 0 | The study focuses on antipyrine pharmacokinetics and the interaction with aminopyrine (a different drug), not aminophenazone. |
| popPK | Walter-Sack_1996 | irrelevant | 1 | 0 | The paper is a review discussing the influence of diet on drug metabolism and mentions aminophenazone (phenazone) only as a model drug with qualitative changes in clearance, without providing specific quantitative PK parameter values. |
| PD | Wang_1999 | not_relevant | 0 | 0 | The paper reports in vitro metabolic capacity (demethylation rates) for aminophenazone, not a pharmacodynamic exposure-response or dose-response relationship. |
| popPK | Watermeyer_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetic interaction between metamizole and quetiapine, and does not report any parameters for aminophenazone. |
| popPK | Zysset_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of caffeine, not aminophenazone. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for aminophenazone. |
| popPK | van_1986 | irrelevant | 0 | 0 | The study focuses on aminopyrine (not aminophenazone) and hexobarbital in rats, and does not report PK parameters for the target drug. |
| PD | von_1980 | not_relevant | 3 | 1 | The paper describes a clinical trial methodology and reports qualitative dose-response findings for aspirin, but it does not provide numeric PD parameters or concentration-effect data for aminophenazone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_aminophenazone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
