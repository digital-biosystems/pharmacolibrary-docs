<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;balsalazide&quot;}]"></div>

# balsalazide

- **generic name:** balsalazide
- **ATC codes:** `A07EC04`
- **DrugBank:** [DB01014](https://go.drugbank.com/drugs/DB01014) · **PubChem:** [CID 6335412](https://pubchem.ncbi.nlm.nih.gov/compound/6335412)
- **molar mass:** 357.3175 g/mol (C17H15N3O6) — DrugBank
- **groups:** approved

## About

Balsalazide is an aminosalicylic acid anti-inflammatory drug used to treat ulcerative colitis. It is an approved medicine and remains in use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q347337](https://www.wikidata.org/wiki/Q347337) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=balsalazide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ALOX5 (inhibitor), PPARG (target), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:06 | 0:26 | 0/0/0 | 0/0/0 | 0/0/0 | 12,129/620 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/4 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 33 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_1992.pdf` | Green JR et al., Short report: comparison of two doses o…, Alimentary pharmacology & t… (1992) | pd | 4 | [10.1111/j.1365-2036.1992.tb00578.x](https://doi.org/10.1111/j.1365-2036.1992.tb00578.x) | [1420754](https://www.ncbi.nlm.nih.gov/pubmed/1420754) | metadata signals extractable PD data (sigmoid) |
| `Levine_2002.pdf` | Levine DS et al., A randomized, double blind, dose-respon…, The American journal of gas… (2002) | pd | 4 | [10.1111/j.1572-0241.2002.05781.x](https://doi.org/10.1111/j.1572-0241.2002.05781.x) | [12094857](https://www.ncbi.nlm.nih.gov/pubmed/12094857) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-04 19:06 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feagan_2012 | irrelevant | 0 | 0 | This is a clinical efficacy review of 5-ASA preparations for ulcerative colitis maintenance and does not report any pharmacokinetic parameters for balsalazide. |
| PD | Feagan_2012 | not_relevant | 2 | 1 | The paper is a systematic review reporting clinical dose-response trends (relative risks for relapse at different doses) but does not provide pharmacokinetic data, concentration-effect curves, or formal PD parameters (Emax, EC50) for balsalazide. |
| popPK | Glas_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on Sirt5 inhibitors where balsalazide serves only as a reference compound, and no quantitative pharmacokinetic parameters for balsalazide are reported. |
| PD | Glas_2022 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for Sirt5 inhibition, which is a pharmacological potency metric, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug in a biological system with numeric PD parameters like Emax or EC50 in the context of PK/PD modeling. |
| popPK | Green_1992 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Green_1992 | not_relevant | 0 | 0 | The text describes a clinical trial comparing two doses for maintenance of remission but does not report any pharmacokinetic data, concentration-effect relationships, or numeric pharmacodynamic parameters. |
| popPK | Hanauer_2006 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and tolerability in ulcerative colitis, containing no pharmacokinetic parameters or quantitative disposition data for balsalazide. |
| PD | Hanauer_2006 | not_relevant | 2 | 0 | The text is a qualitative review discussing general dose-response trends and efficacy thresholds for aminosalicylates, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for balsalazide. |
| popPK | Kedia_2007 | irrelevant | 0 | 0 | The paper is a review of mesalamine formulations for ulcerative colitis and does not report any quantitative pharmacokinetic parameters for balsalazide. |
| PD | Kedia_2007 | not_relevant | 0 | 0 | The text is a review/overview of MMX mesalamine and mentions balsalazide only as a related drug in the context of delivery systems, without reporting any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Levine_2002 | irrelevant | 0 | 0 | no_text gate: only 186 chars of text extracted (&lt; 400) |
| popPK | Lowry_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of azathioprine/6-mercaptopurine metabolites (6-thioguanine nucleotides) in the context of a drug interaction, not the disposition parameters of balsalazide itself. |
| PD | Lowry_2001 | not_relevant | 2 | 1 | The paper reports qualitative changes in pharmacokinetics (6-TGN levels) and clinical outcomes (leucopenia frequency) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for balsalazide. |
| popPK | Muijsers_2002 | irrelevant | 0 | 0 | The paper is a therapeutic review of balsalazide for ulcerative colitis and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Muijsers_2002 | not_relevant | 1 | 0 | The text is a qualitative review of therapeutic efficacy and dosing comparisons without reporting any numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Murray_2020 | irrelevant | 0 | 0 | This is a clinical efficacy review of 5-ASA formulations for ulcerative colitis and does not report pharmacokinetic parameters for balsalazide. |
| PD | Murray_2020 | not_relevant | 2 | 0 | The paper is a Cochrane review that mentions a qualitative dose-response trend for 5-ASA but does not provide specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for balsalazide. |
| popPK | Nugent_2001 | irrelevant | 0 | 0 | The paper is a review of intestinal luminal pH and its implications for drug release, containing no quantitative pharmacokinetic parameters for balsalazide. |
| popPK | Prakash_1999 | irrelevant | 0 | 0 | The paper is a clinical review of mesalazine efficacy and does not report any pharmacokinetic parameters for balsalazide. |
| PD | Prakash_1999 | not_relevant | 1 | 0 | The text is a clinical review summarizing efficacy outcomes and dose comparisons without providing any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Quiros_2009 | irrelevant | 0 | 0 | no_text gate: only 168 chars of text extracted (&lt; 400) |
| PGx | Russell_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (balsalazide inhibiting TPMT) but does not report a pharmacogenomic effect (gene variant) on the PK/PD of balsalazide. |
| popPK | Sandborn_2003 | irrelevant | 2 | 2 | This is a systematic review reporting only urinary and fecal excretion percentages, lacking specific compartmental PK parameters like clearance, volume, or half-life. |
| PD | Sandborn_2003 | not_relevant | 1 | 0 | The paper is a systematic review of pharmacokinetic profiles (excretion data) and does not report any pharmacodynamic or exposure-response models or numeric PD parameters. |
| popPK | Sandborn_2004 | irrelevant | 0 | 0 | no_text gate: only 191 chars of text extracted (&lt; 400) |
| popPK | Sandborn_2006 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and formulation for ulcerative colitis treatments and does not report quantitative pharmacokinetic parameters for balsalazide. |
| PD | Sandborn_2006 | not_relevant | 1 | 0 | The text is a review summarizing general dose-response findings for mesalamine and related drugs but does not provide specific numeric PD parameters or extractable concentration-effect curves for balsalazide. |
| popPK | Schroeder_2002 | irrelevant | 0 | 0 | This is a clinical review of mesalazine and its prodrugs for ulcerative colitis treatment, containing no pharmacokinetic data or quantitative disposition parameters for balsalazide. |
| PD | Schroeder_2002 | not_relevant | 1 | 0 | The text is a qualitative review of mesalazine and its prodrugs that mentions a dose-response benefit but provides no numeric PD parameters, concentration-effect data, or specific PK/PD model fits. |
| PGx | Sim_2014 | not_relevant | 0 | 0 | The paper is a review of NAT enzymes and mentions balsalazide only in the context of azoreductase metabolism, without reporting any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | This is a clinical efficacy review of 5-ASA preparations for ulcerative colitis maintenance, not a pharmacokinetic study, and it reports no quantitative PK parameters for balsalazide. |
| PD | Wang_2016 | not_relevant | 2 | 1 | The paper is a systematic review reporting clinical dose-response trends (relapse rates at different doses) but does not provide pharmacokinetic data, concentration-effect curves, or formal PD parameters (Emax, EC50) for balsalazide. |
| popPK | Wirawan_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on balsalazide-derived sirtuin 5 inhibitors, reporting in-vitro IC50 values but no pharmacokinetic parameters. |
| PD | Wirawan_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of Sirtuin 5 by balsalazide derivatives, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) or dose-response relationship for the drug balsalazide in a biological system. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 1 | 0 | The text is a title for a review article on drugs for IBD and contains no specific data, models, or numeric parameters for balsalazide. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The paper discusses Ozanimod, not balsalazide, and does not report any pharmacodynamic or exposure-response data for balsalazide. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title for a review article on drugs for IBD and contains no specific data, models, or numeric parameters for balsalazide. |
| popPK | unknown_2023_2 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The text is a title of a table listing drugs for IBD and contains no data, analysis, or numeric parameters regarding balsalazide pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbalsalazide%5D&body=Drug%3A%20balsalazide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_balsalazide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
