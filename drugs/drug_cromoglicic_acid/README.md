<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;cromoglicic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CromoglicicAcid_Fuller1983_reference&quot;,&quot;label&quot;:&quot;Fuller_1983_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cromoglicic_acid/CromoglicicAcid_Fuller1983_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CromoglicicAcid_Neale1986_reference&quot;,&quot;label&quot;:&quot;Neale_1986_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cromoglicic_acid/CromoglicicAcid_Neale1986_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# cromoglicic acid

- **generic name:** cromoglicic acid
- **ATC codes:** `A07EB01`, `D11AH03`, `R01AC01`, `R03BC01`, `S01GX01`
- **DrugBank:** [DB01003](https://go.drugbank.com/drugs/DB01003)
- **groups:** approved, investigational

## About

**Description.** A chromone complex that acts by inhibiting the release of chemical mediators from sensitized mast cells. It is used in the prophylactic treatment of both allergic and exercise-induced asthma, but does not affect an established asthmatic attack.

**Indication.** For the management of patients with bronchial asthma. Also used in the treatment of vernal keratoconjunctivitis, vernal conjunctivitis, and vernal keratitis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 05:11 | 12:25 | 0/1/1 | 0/0/0 | 0/0/0 | 103,815/8,118 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Fuller_1983_reference](drugs/drug_cromoglicic_acid/CromoglicicAcid_Fuller1983_reference.md) | Fuller RW et al., The pharmacokinetic assessment of sodiu…, The Journal of pharmacy and… (1983) | [10.1111/j.2042-7158.1983.tb02936.x](https://doi.org/10.1111/j.2042-7158.1983.tb02936.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Neale_1986_reference](drugs/drug_cromoglicic_acid/CromoglicicAcid_Neale1986_reference.md) | Neale MG et al., The pharmacokinetics of sodium cromogly…, British journal of clinical… (1986) | [10.1111/j.1365-2125.1986.tb02905.x](https://doi.org/10.1111/j.1365-2125.1986.tb02905.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cromoglicic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HSP90AA1 (inhibitor), S100P (target).</sub>

## Coverage

- **PubMed hits:** 95 matched, 61 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fisher_1985.pdf` | Fisher AN et al., The nasal absorption of sodium cromogly…, The Journal of pharmacy and… (1985) | popPK | 10 | [10.1111/j.2042-7158.1985.tb04927.x](https://doi.org/10.1111/j.2042-7158.1985.tb04927.x) | [2858525](https://pubmed.ncbi.nlm.nih.gov/2858525) | The paper reports quantitative pharmacokinetic parameters (clearance, elimination rate constant, absorption rate constant) for sodium cromoglycate (cromoglicic acid) in rats. |
| `Fuller_1983.pdf` | Fuller RW et al., The pharmacokinetic assessment of sodiu…, The Journal of pharmacy and… (1983) | popPK | 10 | [10.1111/j.2042-7158.1983.tb02936.x](https://doi.org/10.1111/j.2042-7158.1983.tb02936.x) | [6134796](https://pubmed.ncbi.nlm.nih.gov/6134796) | The paper reports quantitative pharmacokinetic parameters (ka, kelim, Vd, CL) for sodium cromoglycate (cromoglicic acid) with specific numeric values present in the text. |
| `Neale_1986.pdf` | Neale MG et al., The pharmacokinetics of sodium cromogly…, British journal of clinical… (1986) | popPK | 10 | [10.1111/j.1365-2125.1986.tb02905.x](https://doi.org/10.1111/j.1365-2125.1986.tb02905.x) | [3094571](https://pubmed.ncbi.nlm.nih.gov/3094571) | The paper reports quantitative pharmacokinetic parameters for sodium cromoglycate (cromoglicic acid), including specific absorption rate constants (ka) and absorbed amounts, directly in the provided text. |
| `Taylor_1989.pdf` | Taylor KM et al., The influence of liposomal encapsulatio…, Pharmaceutical research (1989) | popPK | 9 | [10.1023/a:1015917918130](https://doi.org/10.1023/a:1015917918130) | [2508078](https://pubmed.ncbi.nlm.nih.gov/2508078) | The study reports pharmacokinetic parameters (absorption rate constants) for cromoglicic acid, but the specific numeric values are not present in the provided text. |
| `Abd-Elaziz_2020.pdf` | Abd-Elaziz K et al., Improved bioavailability of cromolyn so…, European clinical respirato… (2020) | popPK | 8 | [10.1080/20018525.2020.1809083](https://doi.org/10.1080/20018525.2020.1809083) | [32944204](https://pubmed.ncbi.nlm.nih.gov/32944204) | The paper reports quantitative PK parameters (Cmax, AUC, bioavailability) for cromoglicic acid (cromolyn sodium) in humans, but lacks specific clearance, volume, or half-life values. |
| `Joyce_2022.pdf` | Joyce P et al., Chitosan nanoparticles facilitate impro…, International journal of ph… (2022) | popPK | 8 | [10.1016/j.ijpharm.2021.121382](https://doi.org/10.1016/j.ijpharm.2021.121382) | [34919999](https://pubmed.ncbi.nlm.nih.gov/34919999) | The study reports oral pharmacokinetics and bioavailability for cromoglycate in rats, but specific quantitative disposition parameters (CL, V, ka) are not present in the provided evidence, only relative bioavailability ratios. |
| `Richards_1992.pdf` | Richards R et al., Inhaled histamine increases the rate of…, British journal of clinical… (1992) | popPK | 8 | [10.1111/j.1365-2125.1992.tb04048.x](https://doi.org/10.1111/j.1365-2125.1992.tb04048.x) | [1576060](https://pubmed.ncbi.nlm.nih.gov/1576060) | The study investigates the pharmacokinetics of inhaled sodium cromoglycate (cromoglicic acid) in humans, but the provided evidence contains only qualitative descriptions of absorption changes without specific numeric parameter values (e.g., CL, V, ka). |
| `Yanni_1997.pdf` | Yanni JM et al., Comparative effects of topical ocular a…, Annals of allergy, asthma &… (1997) | pd | 5 | [10.1016/S1081-1206(10)63063-3](https://doi.org/10.1016/S1081-1206(10)63063-3) | [9433371](https://www.ncbi.nlm.nih.gov/pubmed/9433371) | metadata signals extractable PD data (IC50) |
| `Lawton_1995.pdf` | Lawton GP et al., Adrenergic and cromolyn sodium modulati…, The Journal of surgical res… (1995) | pd | 4 | [10.1006/jsre.1995.1016](https://doi.org/10.1006/jsre.1995.1016) | [7530310](https://www.ncbi.nlm.nih.gov/pubmed/7530310) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-22T05:07:51.647271+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahrens_1984 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of albuterol, and cromoglicic acid (cromolyn) is only mentioned as a comparator for maintenance therapy without any PK data provided. |
| popPK | Alhadrami_2021 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro mechanistic study on SARS-CoV-2 MPro inhibition, reporting no pharmacokinetic parameters for cromoglicic acid. |
| PD | Alhadrami_2021 | not_relevant | 2 | 2 | The paper reports single-point IC50 and Ki values for enzyme inhibition, which are potency metrics rather than a pharmacodynamic exposure-response or dose-response curve with parameters like Emax or slope. |
| popPK | Behrend-Keim_2023 | irrelevant | 0 | 0 | The study focuses on formulation development and in-vitro aerosol performance of microspheres, not on pharmacokinetic parameter estimation for cromoglicic acid. |
| popPK | Bernstein_1985 | irrelevant | 0 | 0 | The paper is a review article discussing the clinical use and mechanism of action of cromolyn sodium without reporting any quantitative pharmacokinetic parameters. |
| PD | Bernstein_1985 | not_relevant | 1 | 0 | The text is a qualitative review that mentions dose-response effects exist but provides no numeric PD parameters, curves, or specific exposure-response data. |
| popPK | Bigby_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of nedocromil sodium on bronchomotor response, with no pharmacokinetic parameters reported for cromoglicic acid. |
| PD | Bigby_1993 | not_relevant | 4 | 2 | The study reports a dose-response relationship for nedocromil sodium (not cromoglicic acid) and provides only qualitative/summary results (p-values) without numeric PD parameters or detailed effect-vs-dose data. |
| popPK | Briffa_2011 | irrelevant | 0 | 0 | The study is a clinical trial assessing bronchoprotective effects on lung function (FEV1) and does not report any pharmacokinetic parameters for cromoglicic acid. |
| popPK | Bruderman_1990 | irrelevant | 0 | 0 | The study focuses on bronchial hyperreactivity and clinical response to cromolyn sodium, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Bruderman_1990 | not_relevant | 3 | 2 | The paper reports a qualitative change in bronchial hyperreactivity (BHR) after treatment but does not provide numeric dose-response parameters (e.g., PC20 values) or concentration-effect curves for cromoglicic acid. |
| popPK | Bryson_1992 | irrelevant | 0 | 0 | The paper is a review of fluticasone propionate, and cromoglicic acid is only mentioned as a comparator agent without any pharmacokinetic data. |
| PD | Bryson_1992 | not_relevant | 0 | 0 | The paper is a review of fluticasone propionate and does not report any pharmacodynamic or exposure-response data for cromoglicic acid. |
| PGx | Choi_2015 | not_relevant | 0 | 0 | The paper investigates the anti-fibrotic efficacy of cromolyn sodium in vitro but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Clissold_1984 | irrelevant | 0 | 0 | The paper is a review of budesonide, and cromoglicic acid is only mentioned as a comparator agent without any pharmacokinetic data. |
| PD | Clissold_1984 | not_relevant | 0 | 0 | The paper is a review of budesonide and does not report any pharmacodynamic or exposure-response data for cromoglicic acid. |
| popPK | Cockcroft_2005 | irrelevant | 0 | 0 | The paper is a clinical review of asthma management guidelines and does not report any pharmacokinetic parameters for cromoglicic acid. |
| PD | Cockcroft_2005 | not_relevant | 0 | 0 | The text is a clinical review of beta2-agonist usage guidelines and mentions cromones only as a class of anti-inflammatory agents without providing any pharmacodynamic data, exposure-response analysis, or numeric parameters for cromoglicic acid. |
| popPK | Fouke_1988 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of airway mechanics in baboons and does not report any pharmacokinetic parameters for cromoglicic acid. |
| PD | Fouke_1988 | not_relevant | 1 | 0 | The paper reports a qualitative protective effect of cromolyn sodium on ozone-induced airway resistance but provides no concentration-effect data, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Friedrich_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cloxacepride on mast cells, with cromoglicic acid (cromolyn sodium) serving only as an inactive reference compound, and no pharmacokinetic parameters are reported. |
| PD | Friedrich_1984 | not_relevant | 0 | 0 | The paper reports PD parameters for cloxacepride, not cromoglicic acid (cromolyn sodium is only mentioned as an inactive reference compound). |
| popPK | Gallo_2017 | irrelevant | 0 | 0 | The paper is a formulation and in-vitro characterization study of sodium cromoglycate microparticles, reporting no in-vivo pharmacokinetic parameters or quantitative disposition data. |
| PGx | García-Marcos_2003 | not_relevant | 0 | 0 | The paper discusses antileukotrienes and mentions cromoglicic acid only as a comparator for efficacy, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Georgopoulos_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchospasm protection and does not report any pharmacokinetic parameters for cromoglicic acid. |
| PD | Georgopoulos_1989 | not_relevant | 2 | 1 | The study reports qualitative findings (no protective effect) and aggregate dose-response curve metrics (AUC) for cromolyn sodium but does not provide numeric PD parameters (e.g., EC50, Emax) or individual concentration-effect data for the drug. |
| popPK | Grant_1990 | irrelevant | 0 | 0 | The paper is a review of ketotifen, and cromoglicic acid is only mentioned as a comparator agent without any pharmacokinetic data provided. |
| PD | Grant_1990 | not_relevant | 0 | 0 | The text is a review of ketotifen and only qualitatively mentions cromoglicic acid as a comparator without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for it. |
| popPK | Hornby_1996 | irrelevant | 0 | 0 | The paper is a review of pulmonary pharmacology in pregnancy and does not report original quantitative pharmacokinetic parameters for cromoglicic acid. |
| popPK | Horstman_1986 | irrelevant | 0 | 0 | The study investigates airway sensitivity to sulfur dioxide and does not report any pharmacokinetic parameters for cromoglicic acid. |
| PD | Horstman_1986 | not_relevant | 0 | 0 | The study investigates the dose-response relationship to sulfur dioxide (SO2), not cromoglicic acid; cromolyn sodium is only mentioned as an excluded medication. |
| popPK | Johnson_1979 | irrelevant | 0 | 0 | The paper describes in vitro mechanistic studies on mast cells and cholinergic stimulation, containing no pharmacokinetic parameters for cromoglicic acid. |
| PD | Johnson_1979 | not_relevant | 3 | 1 | The text describes a qualitative biphasic dose-response mechanism involving cholinergic stimulation but provides no numeric PD parameters, concentration-effect curves, or quantitative data. |
| popPK | Joyce_2022 | relevant | 8 | 2 | The study reports oral pharmacokinetics and bioavailability for cromoglycate in rats, but specific quantitative disposition parameters (CL, V, ka) are not present in the provided evidence, only relative bioavailability ratios. |
| popPK | Juniper_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring airway responsiveness and does not report any pharmacokinetic parameters for cromoglicic acid. |
| popPK | Koenig_1988 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-response assessment of bronchoconstriction inhibition and does not report any pharmacokinetic parameters for cromoglicic acid. |
| popPK | Köhler_2003 | irrelevant | 2 | 2 | The study uses cromoglicic acid as a marker for lung deposition and reports absorption half-life, but does not provide a compartmental PK model or standard disposition parameters like clearance and volume. |
| popPK | Lawton_1995 | irrelevant | 0 | 0 | no_text gate: only 73 chars of text extracted (&lt; 400) |
| popPK | Leonardi_2003 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing anti-allergic effects and does not report any pharmacokinetic parameters for cromoglicic acid. |
| PD | Leonardi_2003 | not_relevant | 2 | 1 | The study reports clinical efficacy comparisons (p-values) in a challenge model but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50) for cromoglicic acid. |
| popPK | McTavish_1989 | irrelevant | 0 | 0 | The paper is a review of azelastine, and cromoglicic acid is only mentioned as a comparator agent without any pharmacokinetic parameters reported for it. |
| PD | McTavish_1989 | not_relevant | 0 | 0 | The text is a review of azelastine and only mentions cromoglicic acid as a comparator in clinical efficacy studies, without providing any pharmacodynamic or exposure-response data for cromoglicic acid. |
| popPK | McTavish_1990 | irrelevant | 0 | 0 | The paper is a review of terfenadine, and cromoglicic acid is only mentioned as a co-administered agent without any pharmacokinetic parameters reported. |
| PD | McTavish_1990 | not_relevant | 0 | 0 | The paper is a review of terfenadine and does not report any pharmacodynamic or exposure-response data for cromoglicic acid. |
| popPK | Parish_1993 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| popPK | Peng_2023 | irrelevant | 0 | 0 | The study investigates the role of mast cells in lymphatic function and arthritis in mice, using cromolyn sodium (a related compound) only as a pharmacological tool, and does not report any pharmacokinetic parameters for cromoglicic acid. |
| popPK | Porcelli_1981 | irrelevant | 0 | 0 | The study is a mechanistic investigation of pulmonary vascular tone using cromolyn sodium as a mast-cell stabilizer, not a pharmacokinetic study reporting disposition parameters for cromoglicic acid. |
| PD | Porcelli_1981 | not_relevant | 1 | 0 | The paper describes qualitative effects of cromolyn sodium on histamine responsiveness in an animal model but does not provide numeric PD parameters or extractable concentration-effect curves. |
| popPK | Richards_1988 | irrelevant | 2 | 0 | The study reports only AUC and correlation coefficients, lacking specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Richards_1992 | relevant | 8 | 2 | The study investigates the pharmacokinetics of inhaled sodium cromoglycate (cromoglicic acid) in humans, but the provided evidence contains only qualitative descriptions of absorption changes without specific numeric parameter values (e.g., CL, V, ka). |
| popPK | Shoup_2021 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (microglial clearance of Aβ) and PET imaging of fluorinated derivatives, not on the pharmacokinetic disposition parameters (CL, V, ka) of cromoglicic acid. |
| popPK | Taburet_1990 | irrelevant | 0 | 0 | The paper is a review that explicitly states "Little is known regarding the pharmacokinetics of cromoglycate" and provides no quantitative PK parameters for the drug. |
| popPK | Taylor_1989 | relevant | 9 | 2 | The study reports pharmacokinetic parameters (absorption rate constants) for cromoglicic acid, but the specific numeric values are not present in the provided text. |
| popPK | Vidgren_1991 | irrelevant | 2 | 0 | The study reports pulmonary clearance half-lives (55 min, &lt;10 min) for inhaled particles, which are not standard systemic pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper describes a computational tool (PathFX) for drug safety and efficacy pathway analysis and does not report any pharmacokinetic parameters for cromoglicic acid. |
| PD | Wilson_2018 | not_relevant | 0 | 0 | The paper describes a computational method (PathFX) for identifying drug-disease associations via protein interaction networks and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for cromoglicic acid or any other drug. |
| popPK | Wright_1990 | irrelevant | 0 | 0 | The study investigates the bronchial response to inhaled sodium metabisulfite and does not report pharmacokinetic parameters for cromoglicic acid. |
| popPK | Yanni_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mast cells, not a pharmacokinetic study reporting quantitative disposition parameters for cromoglicic acid. |
| PD | Yanni_1997 | not_relevant | 0 | 0 | The paper focuses on the comparative effects of topical ocular anti-allergy drugs on human conjunctival mast cells and does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for cromoglicic acid with numeric PD parameters. |
| popPK | Yasmeen_2020 | irrelevant | 0 | 0 | The study investigates in-vitro binding interactions between cromolyn sodium and BSA using spectroscopic and computational methods, reporting no pharmacokinetic parameters. |
| PD | Yasmeen_2020 | not_relevant | 0 | 0 | The paper investigates the molecular binding interaction between cromolyn sodium and bovine serum albumin using spectroscopic and computational methods, reporting no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Yoshimi_1992 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding cromoglicic acid pharmacokinetics. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on chronic kidney disease and vein graft disease where cromolyn is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters for cromoglicic acid. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study investigates the mechanism of uric acid-induced renal injury and uses cromoglicic acid (sodium cromoglycate) only as a therapeutic agent to test efficacy, without reporting any pharmacokinetic parameters. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The study focuses on adefovir nephrotoxicity and uses cromoglicic acid (sodium cromoglycate) only as a therapeutic comparator, without reporting any pharmacokinetic parameters for cromoglicic acid. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cromoglicic_acid`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
