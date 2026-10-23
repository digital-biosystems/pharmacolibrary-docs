<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;troxipide&quot;}]"></div>

# troxipide

- **generic name:** troxipide
- **ATC codes:** `A02BX11`
- **DrugBank:** [DB13419](https://go.drugbank.com/drugs/DB13419) · **PubChem:** none
- **molar mass:** 294.351 g/mol (C15H22N2O4) — DrugBank
- **groups:** experimental

## About

Troxipide is a drug used to treat gastric ulcers and chronic gastritis. It is not an approved medicine in major markets such as the European Union and is considered experimental, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4381806](https://www.wikidata.org/wiki/Q4381806) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:06 | 4:57 | 0/0/0 | 0/0/0 | 0/0/0 | 218,064/3,681 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 3/15 | 18/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 66 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gao_2015.pdf` | Gao Y et al., Preparation and pharmacokinetics study…, Drug development and indust… (2015) | popPK | 8 | [10.3109/03639045.2014.956113](https://doi.org/10.3109/03639045.2014.956113) | [25190152](https://pubmed.ncbi.nlm.nih.gov/25190152) | The study reports in vivo pharmacokinetics of troxipide in beagles, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Harada_1994.pdf` | Harada Y et al., Receptor binding profiles of KB-5492, a…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90558-4](https://doi.org/10.1016/0014-2999(94)90558-4) | [8045277](https://www.ncbi.nlm.nih.gov/pubmed/8045277) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04 12:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2023 | irrelevant | 0 | 0 | The paper describes an electrochemical biosensor for serotonin detection and does not involve troxipide or its pharmacokinetics. |
| popPK | Appel-Dingemanse_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SDZ HTF 919, not troxipide. |
| popPK | Arbona_2023 | irrelevant | 0 | 0 | The study concerns 5-hydroxytryptophan (5-HTP) toxicity in a dog, not troxipide. |
| popPK | Bauer_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metoclopramide, not troxipide. |
| popPK | Blackwell_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ondansetron, not troxipide. |
| popPK | Carroll_2021 | irrelevant | 0 | 0 | The paper is a review of interventions for cystic fibrosis complications and does not involve troxipide or pharmacokinetic parameters. |
| popPK | Cooper_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity evaluation of a troxipide conjugate in cell lines, reporting no pharmacokinetic parameters. |
| popPK | Delco_2007 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of tegaserod in horses, not troxipide. |
| popPK | Desta_2002 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of metoclopramide, not troxipide. |
| popPK | Dewan_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for gastritis treatment and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for troxipide. |
| popPK | Finizia_2002 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of cisapride on oesophageal motility and does not involve troxipide or report its pharmacokinetic parameters. |
| popPK | Fujimoto_2026 | irrelevant | 2 | 0 | The study reports tissue concentrations (ng/g protein) in the GI tract of rats rather than systemic pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Gao_2015 | relevant | 8 | 2 | The study reports in vivo pharmacokinetics of troxipide in beagles, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Gijsman_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP) and carbidopa, not troxipide. |
| popPK | Green_2018 | irrelevant | 0 | 0 | The paper is a review of interventions for cystic fibrosis complications and does not mention troxipide or report any pharmacokinetic parameters. |
| popPK | Guan_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not troxipide. |
| popPK | Harada_1994 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Harada_1994 | not_relevant | 0 | 0 | The paper describes receptor binding profiles of KB-5492, not troxipide, and does not report pharmacodynamic exposure-response or dose-response relationships for troxipide. |
| popPK | Hasler_2004 | irrelevant | 0 | 0 | The paper discusses the safety profile of tegaserod, not troxipide. |
| popPK | He_2013 | irrelevant | 0 | 0 | The paper describes the radiosynthesis and biological evaluation of a PET tracer ([(18)F]-L-FPTP) and does not involve the drug troxipide. |
| popPK | Helmy_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of domperidone, not troxipide. |
| popPK | Inoue_2026 | irrelevant | 0 | 0 | The paper is a clinical case report regarding gastric emptying and endoscopy preparation using mosapride and GLP-1RAs, containing no pharmacokinetic data for troxipide. |
| popPK | Itskovitz_1988 | irrelevant | 0 | 0 | The study investigates renal effects of dopamine and serotonin precursors in rats and does not involve troxipide. |
| popPK | Jagdale_2014 | irrelevant | 1 | 0 | The paper is a formulation study focusing on in vitro drug release and gastric retention, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Jung_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chlorogenic acid and corydaline in rats, not troxipide. |
| popPK | Kadowaki_2023 | irrelevant | 1 | 0 | The study is a formulation and efficacy study in hamsters that reports local tissue drug levels and wound healing, but does not provide quantitative population pharmacokinetic parameters (CL, V, ka, etc.) for troxipide. |
| popPK | Kessing_2014 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of prucalopride on gastric emptying and esophageal acid exposure, not the pharmacokinetics of troxipide. |
| popPK | Kim_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mosapride, not troxipide. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for YH12852, not troxipide. |
| popPK | Kuo_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ML-1035 in rats, not troxipide. |
| popPK | Kusugami_2000 | irrelevant | 1 | 0 | The study focuses on the in vitro pharmacological effects of troxipide on neutrophils and reports only qualitative tissue concentrations, lacking quantitative PK parameters like clearance or volume. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for DA-6886, not troxipide. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study reporting the synthesis of nonnatural amino esters, with troxipide mentioned only as a substrate for late-stage elaboration, and contains no pharmacokinetic data. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper is a synthetic chemistry study reporting the synthesis of nonnatural amino esters and mentions troxipide only as a substrate for late-stage elaboration, without providing any pharmacodynamic or exposure-response data for troxipide. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic and antitumor activity study of troxipide analogs, reporting no pharmacokinetic parameters. |
| popPK | Magnussen_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan, not troxipide. |
| popPK | Margolis_2016 | irrelevant | 0 | 0 | The paper is a preclinical study on serotonin transporter variants in mice and does not involve troxipide or its pharmacokinetics. |
| popPK | Matsui_2001 | irrelevant | 0 | 0 | The study investigates gastric mucosal fluorescence and injury in rats using diclofenac, with troxipide used only as a radical scavenger pretreatment, not as the subject of pharmacokinetic analysis. |
| popPK | Momo_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of troxipide's protective effects on gastric mucosal lesions and xanthine oxidase activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Nakamura_1997 | irrelevant | 0 | 0 | The study investigates the effect of troxipide on mucin secretion in corneal epithelium (pharmacodynamics/mechanism), not its pharmacokinetic parameters. |
| popPK | Nzakizwanayo_2015 | irrelevant | 0 | 0 | The paper investigates the effect of E. coli Nissle on serotonin (5-HT) bioavailability in mouse ileal tissues and does not involve the drug troxipide. |
| popPK | Onuma_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of gastric mucosal protectants on intestinal tumorigenesis in mice, with no pharmacokinetic parameters reported for troxipide. |
| popPK | Otake_2026 | irrelevant | 2 | 0 | The study focuses on formulation development and therapeutic efficacy in a rabbit dry eye model, reporting qualitative improvements in retention and tear volume rather than quantitative population pharmacokinetic parameters (CL, V, ka) for troxipide. |
| popPK | Otake_2026_2 | irrelevant | 2 | 1 | The study reports AUC values for troxipide in rabbit tear fluid but lacks standard systemic PK parameters (CL, V, ka) and compartmental modeling, focusing instead on formulation delivery and therapeutic efficacy. |
| popPK | Pierce_2015 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of revexepride (SSP-002358), not troxipide. |
| popPK | Raka_2024 | irrelevant | 0 | 0 | The study investigates serotonin's role in fat absorption in hamsters and does not involve troxipide or its pharmacokinetics. |
| popPK | Ramakrishna_2005 | irrelevant | 0 | 0 | The study focuses on the development of an assay for mosapride, not troxipide. |
| popPK | Ruth_2003 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effects of mosapride and cisapride on oesophageal motor function and acid reflux, and does not report pharmacokinetic parameters for troxipide. |
| popPK | Sekiguchi_1987 | irrelevant | 0 | 0 | The study is a pharmacological investigation of troxipide's cytoprotective effects on gastric lesions in rats, reporting lesion lengths and inhibition rates rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Shi_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of jatrorrhizine, not troxipide. |
| popPK | Smarius_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not troxipide. |
| popPK | Tack_2015 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of revexepride on gastro-esophageal reflux parameters, not the pharmacokinetics of troxipide. |
| popPK | Terry_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and behavioral effects of RS 17017, not troxipide. |
| popPK | Wang_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of troxipide on gastric ulcers in rats and does not report any pharmacokinetic parameters. |
| popPK | Westenberg_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of l-5-hydroxytryptophan (5-HTP), not troxipide. |
| popPK | Winter_2013 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for prucalopride, not troxipide. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The paper is a plant metabolomics study of soapberry fruit where troxipide is identified as a natural metabolite, not a pharmacokinetic study of the drug. |
| popPK | Zhao_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MP3950, not troxipide. |
| popPK | Zhou_2007 | irrelevant | 0 | 0 | The paper is a review of drug metabolism for gastrointestinal drugs and does not mention troxipide or provide any pharmacokinetic parameters for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btroxipide%5D&body=Drug%3A%20troxipide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_troxipide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
