<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;methylnaltrexone bromide&quot;}]"></div>

# methylnaltrexone bromide

- **generic name:** methylnaltrexone bromide
- **ATC codes:** `A06AH01`
- **DrugBank:** [DB06800](https://go.drugbank.com/drugs/DB06800) · **PubChem:** [CID 16089915](https://pubchem.ncbi.nlm.nih.gov/compound/16089915)
- **molar mass:** 356.441 g/mol (C21H26NO4) — DrugBank
- **groups:** approved, investigational

## About

Methylnaltrexone bromide is a peripheral opioid receptor antagonist used to treat constipation, particularly opioid-induced constipation. It is an approved medicine, though its use is also being investigated for other purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q59904170](https://www.wikidata.org/wiki/Q59904170) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methylnaltrexone_bromide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: MC4R (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:36 | 0:58 | 0/0/0 | 0/0/0 | 0/0/0 | 37,859/859 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 25 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Foss_1997.pdf` | Foss JF et al., Safety and tolerance of methylnaltrexon…, Journal of clinical pharmac… (1997) | popPK | 10 | [10.1177/009127009703700105](https://doi.org/10.1177/009127009703700105) | [9048269](https://pubmed.ncbi.nlm.nih.gov/9048269) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance and half-life) for methylnaltrexone in healthy humans. |
| `Yuan_2005.pdf` | Yuan CS et al., Tolerability, gut effects, and pharmaco…, Journal of clinical pharmac… (2005) | popPK | 9 | [10.1177/0091270004273491](https://doi.org/10.1177/0091270004273491) | [15831777](https://pubmed.ncbi.nlm.nih.gov/15831777) | The study reports quantitative pharmacokinetic parameters (Cmax, half-life) for methylnaltrexone in humans, with values explicitly stated in the abstract. |
| `Lin_2014.pdf` | Lin DH et al., Bioavailability of oral methylnaltrexon…, Drug development and indust… (2014) | popPK | 8 | [10.3109/03639045.2012.753899](https://doi.org/10.3109/03639045.2012.753899) | [23327357](https://pubmed.ncbi.nlm.nih.gov/23327357) | The study reports quantitative PK parameters (Cmax, Tmax, T1/2, AUC) for methylnaltrexone in rats, though it lacks explicit clearance or volume of distribution values. |
| `Murph_2001.pdf` | Murph DB et al., Pharmacokinetic profile of epidurally a…, British journal of anaesthe… (2001) | popPK | 8 | [10.1093/bja/86.1.120](https://doi.org/10.1093/bja/86.1.120) | [11575386](https://pubmed.ncbi.nlm.nih.gov/11575386) | The study reports a two-compartment PK model for methylnaltrexone in rabbits, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only a single CSF concentration. |

<sub>queue written 2026-10-04T16:36:18.955455+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anselmi_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastrointestinal motility in guinea pigs and does not report any pharmacokinetic parameters for methylnaltrexone. |
| PD | Boscan_2006 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative changes in GI function (fecal weight, transit time) but does not provide a quantitative concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Foss_2001 | irrelevant | 1 | 0 | The paper is a review discussing the mechanism and clinical efficacy of methylnaltrexone but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Holzer_2010 | irrelevant | 0 | 0 | The paper is a narrative review of opioid antagonists for constipation and does not report original quantitative pharmacokinetic parameters for methylnaltrexone. |
| popPK | Kolbow_2016 | irrelevant | 2 | 1 | The study reports pharmacodynamic endpoints (transit time) and relative bioavailability percentages, but lacks quantitative compartmental PK parameters (CL, V, ka) for methylnaltrexone. |
| PD | Kolbow_2016 | not_relevant | 2 | 1 | The study reports qualitative efficacy comparisons and bioavailability ranges but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for methylnaltrexone. |
| popPK | Leppert_2010 | irrelevant | 0 | 0 | The paper is a clinical review of opioid-induced constipation treatments and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for methylnaltrexone. |
| popPK | Leppert_2015 | irrelevant | 0 | 0 | The paper is a clinical review of opioid-induced bowel dysfunction management and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for methylnaltrexone. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro and in-vivo investigation of morphine's effects on lung cancer cells, using methylnaltrexone only as a pharmacological antagonist to block MOR signaling, with no pharmacokinetic parameters reported. |
| PD | Liu_2021 | not_relevant | 2 | 1 | The study is a mechanistic investigation of morphine's effect on cancer cells using MNTX as a qualitative antagonist; it does not report a quantitative exposure-response or dose-response model with numeric PD parameters for methylnaltrexone. |
| popPK | Mozaffari_2018 | irrelevant | 2 | 0 | The paper is a systematic review of clinical evidence and does not report original quantitative pharmacokinetic parameter values for methylnaltrexone bromide. |
| PD | Mozaffari_2018 | not_relevant | 2 | 0 | The text is an abstract of a systematic review that mentions a review of pharmacodynamic data but does not present or derive any specific numeric PD parameters or exposure-response relationships. |
| popPK | Murph_2001 | relevant | 8 | 2 | The study reports a two-compartment PK model for methylnaltrexone in rabbits, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only a single CSF concentration. |
| PD | Murph_2001 | not_relevant | 0 | 0 | The paper reports only the pharmacokinetic profile (serum and CSF concentrations) of methylnaltrexone in rabbits and does not provide any pharmacodynamic data, dose-response relationships, or numeric PD parameters. |
| popPK | Rotshteyn_2011 | irrelevant | 2 | 1 | The paper is a review article summarizing pharmacokinetics without providing original quantitative parameter values (CL, V, etc.) in the evidence. |
| popPK | Singleton_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of angiogenesis inhibition and does not report any pharmacokinetic parameters for methylnaltrexone. |
| popPK | Singleton_2010 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro and in-vivo study on angiogenesis and does not report pharmacokinetic parameters for methylnaltrexone. |
| popPK | unknown_2006 | irrelevant | 0 | 0 | The text is a business and clinical development overview that mentions "predictable pharmacokinetics" but provides no quantitative PK parameters or model values. |
| PD | unknown_2006 | not_relevant | 1 | 0 | The text is a business and clinical development overview that mentions dose levels and trial outcomes but contains no pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The provided evidence contains only a title and no pharmacokinetic data or parameters for methylnaltrexone bromide. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is a title or fragment ("Opioids for pain") and contains no data, analysis, or parameters regarding methylnaltrexone bromide or any pharmacodynamic relationship. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The provided evidence contains only a title fragment and no pharmacokinetic data or parameters for methylnaltrexone bromide. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a title or fragment ("Opioids for pain") and contains no data, analysis, or parameters regarding methylnaltrexone bromide or any pharmacodynamic relationship. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
