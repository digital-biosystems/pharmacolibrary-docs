<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;dicycloverine&quot;}]"></div>

# dicycloverine

- **generic name:** dicycloverine
- **ATC codes:** `A03AA07`
- **DrugBank:** [DB00804](https://go.drugbank.com/drugs/DB00804) · **PubChem:** [CID 3042](https://pubchem.ncbi.nlm.nih.gov/compound/3042)
- **molar mass:** 309.4867 g/mol (C19H35NO2) — DrugBank
- **groups:** approved

## About

Dicycloverine (dicyclomine) is an anticholinergic drug used to treat irritable bowel syndrome and other functional gastrointestinal disorders. It is an approved medicine and remains in use for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2662662](https://www.wikidata.org/wiki/Q2662662) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dicycloverine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:38 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 37,858/765 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 32 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alberts_1995.pdf` | Alberts P, Classification of the presynaptic musca…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616431](https://www.ncbi.nlm.nih.gov/pubmed/7616431) | metadata signals extractable PD data (EC50) |
| `Eglen_1993.pdf` | Eglen RM et al., Muscarinic M3 receptors mediate total i…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0922-4106(93)90058-h](https://doi.org/10.1016/0922-4106(93)90058-h) | [8420791](https://www.ncbi.nlm.nih.gov/pubmed/8420791) | metadata signals extractable PD data (EC50) |
| `Gillard_1987.pdf` | Gillard M et al., Muscarinic receptor heterogeneity in ra…, Molecular pharmacology (1987) | pd | 4 | not captured | [3600611](https://www.ncbi.nlm.nih.gov/pubmed/3600611) | metadata signals extractable PD data (IC50) |
| `Hudkins_1991.pdf` | Hudkins RL et al., M1 muscarinic antagonists interact with…, Life sciences (1991) | pd | 4 | [10.1016/0024-3205(91)90135-x](https://doi.org/10.1016/0024-3205(91)90135-x) | [1658507](https://www.ncbi.nlm.nih.gov/pubmed/1658507) | metadata signals extractable PD data (IC50) |
| `Qi_2005.pdf` | Qi L et al., Quantitative determination of pharmaceu…, Journal of pharmaceutical a… (2005) | pd | 4 | [10.1016/j.jpba.2004.09.023](https://doi.org/10.1016/j.jpba.2004.09.023) | [15708661](https://www.ncbi.nlm.nih.gov/pubmed/15708661) | metadata signals extractable PD data (concentrationeffect) |
| `Raiteri_1990.pdf` | Raiteri M et al., Muscarinic receptors mediating inhibiti…, The Journal of pharmacology… (1990) | pd | 4 | not captured | [2384883](https://www.ncbi.nlm.nih.gov/pubmed/2384883) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T12:37:49.305275+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alberts_1995 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Alberts_1995 | not_relevant | 0 | 0 | The paper investigates muscarinic receptor subtypes in guinea pig bladder tissue and does not mention dicycloverine or report any pharmacodynamic exposure-response data. |
| popPK | Ali_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of Rosa webbiana, using dicycloverine (dicyclomine) only as a comparator agent in in-vitro experiments without reporting any pharmacokinetic parameters. |
| PD | Ali_2023 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Rosa webbiana extract, not dicycloverine; dicycloverine is only mentioned as a comparative reference for the type of curve shift observed. |
| popPK | Althurwi_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of Cymbopogon proximus essential oil where dicycloverine (dicyclomine) is used only as a positive control, and no pharmacokinetic parameters are reported. |
| popPK | Brunner_1991 | irrelevant | 0 | 0 | The study is a pharmacological receptor characterization in bovine tissue, not a pharmacokinetic study, and dicyclomine is used only as a probe antagonist. |
| PD | Brunner_1991 | not_relevant | 0 | 0 | The paper characterizes muscarinic receptor subtypes in bovine coronary arteries using acetylcholine and antagonists; it does not report a pharmacodynamic or exposure-response relationship for the drug dicycloverine. |
| popPK | Eglen_1993 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Eglen_1993 | not_relevant | 0 | 0 | The paper investigates muscarinic M3 receptor signaling in fibrosarcoma cells and does not mention dicycloverine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Gillard_1987 | irrelevant | 0 | 0 | no_text gate: only 192 chars of text extracted (&lt; 400) |
| PD | Gillard_1987 | not_relevant | 0 | 0 | The paper focuses on muscarinic receptor binding characteristics in rat brain tissue and does not report any pharmacodynamic or exposure-response data for dicycloverine. |
| popPK | Gower_1987 | irrelevant | 0 | 0 | The study is a pharmacological investigation of yawning and analgesia in rats where dicyclomine (a related anticholinergic) is used as a comparator antagonist, not a PK study of dicycloverine. |
| PD | Gower_1987 | not_relevant | 2 | 1 | The paper reports qualitative dose-response observations and antagonist inhibition for dicycloverine (dicyclomine) but does not provide numeric PD parameters (e.g., ED50, potency values) or a quantitative concentration-effect curve for this specific drug. |
| popPK | Hudkins_1991 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| PD | Hudkins_1991 | not_relevant | 0 | 0 | The paper discusses the interaction of M1 muscarinic antagonists with sigma sites and does not report any pharmacodynamic or exposure-response data for dicycloverine. |
| popPK | Hussain_2023 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of Berberis lycium where dicycloverine (dicyclomine) is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Hussain_2023 | not_relevant | 0 | 0 | The paper studies the plant Berberis lycium and only uses dicycloverine (dicyclomine) as a qualitative reference standard for comparison; it does not report any pharmacodynamic or exposure-response data for dicycloverine itself. |
| PGx | Hussain_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanisms of Berberis lycium and compares its effects to dicyclomine, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of dicyclomine. |
| popPK | Janbaz_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of a plant extract using dicyclomine (a related antispasmodic) as a comparator, and it does not report any pharmacokinetic parameters for dicycloverine. |
| popPK | Kay_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of darifenacin and dicyclomine (dicycloverine) focusing on cognitive and physiological effects, with no pharmacokinetic parameters reported. |
| PD | Kay_2005 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (cognitive, cardiac, visual) and statistical significance compared to placebo, but does not provide numeric PD parameters (Emax, EC50) or an exposure-response/dose-response curve analysis. |
| popPK | Koerselman_1999 | irrelevant | 0 | 0 | The study investigates the physiological effects of dicyclomine on gastroesophageal reflux and motility, not its pharmacokinetic disposition parameters. |
| popPK | McKinney_1985 | irrelevant | 0 | 0 | The paper is an epidemiological study on childhood cancer risk associated with drug exposure, not a pharmacokinetic study, and contains no PK parameters. |
| PD | McKinney_1985 | not_relevant | 0 | 0 | The paper is an epidemiological study investigating the association between drug consumption and childhood cancer risk, not a pharmacodynamic or exposure-response analysis. |
| popPK | Ogiso_1985 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding dicycloverine pharmacokinetics. |
| popPK | Qi_2005 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| PD | Qi_2005 | not_relevant | 0 | 0 | The paper describes a mass spectrometry method for quantifying pharmaceuticals and does not report any pharmacodynamic or exposure-response data for dicycloverine. |
| popPK | Raiteri_1990 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Raiteri_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacological characterization of muscarinic receptors in rat striatum and does not mention dicycloverine or report any exposure-response or dose-response data for it. |
| popPK | Sharif_1995 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay on murine cells where dicyclomine is used only as a pharmacological probe, not a PK study. |
| PD | Sharif_1995 | not_relevant | 0 | 0 | The paper studies M3 muscarinic receptors in cell lines using agonists (carbachol, muscarine) and does not report any pharmacodynamic or exposure-response data for dicycloverine. |
| popPK | Sher_2022 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| popPK | Talebi_2018 | irrelevant | 0 | 0 | The study investigates the in-vitro enzymatic inhibition of lipase by dicyclomine (dicycloverine) and does not report any pharmacokinetic parameters. |
| popPK | Vilar_2013 | irrelevant | 0 | 0 | The paper is a computational study on drug-drug interaction prediction using fingerprints and does not report any quantitative pharmacokinetic parameters for dicycloverine. |
| PD | Vilar_2013 | not_relevant | 0 | 0 | The paper describes a computational method for predicting drug-drug interactions using fingerprint similarity and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for dicycloverine. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study investigates the antispasmodic mechanism of a plant extract in mice, using dicyclomine (a different drug) only as a positive control, and reports no pharmacokinetic parameters for dicycloverine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
