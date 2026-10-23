<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03G&quot;,&quot;href&quot;:&quot;atc/G03G.md&quot;},{&quot;label&quot;:&quot;Follitropin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Follitropin_Rose2016_reference&quot;,&quot;label&quot;:&quot;Rose_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_follitropin/Follitropin_Rose2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Follitropin

- **generic name:** Follitropin
- **ATC codes:** `G03GA05`, `G03GA06`, `G03GA10`
- **DrugBank:** [DB00066](https://go.drugbank.com/drugs/DB00066) · **PubChem:** none
- **groups:** approved, investigational

## About

Follitropin, a follicle-stimulating hormone preparation, is used to treat infertility. It is an approved medicine, used widely in fertility treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817286](https://www.wikidata.org/wiki/Q20817286) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Rose_2016_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> gonadotropin downregulated healthy women, n = &gt;24. [Run it in the simulator](drugs/drug_follitropin/Follitropin_Rose2016_reference.md?tab=Simulation) · [record](drugs/drug_follitropin/Follitropin_Rose2016_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.423 | L/h | 0.423 L/h | gonadotropin downregulated healthy women | &gt;24 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rose_2016_reference](drugs/drug_follitropin/Follitropin_Rose2016_reference.md) |
| V | V/F | 24.3 | L | 24.30 L | gonadotropin downregulated healthy women | &gt;24 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rose_2016_reference](drugs/drug_follitropin/Follitropin_Rose2016_reference.md) |
| ka | kabs | 0.148 | 1/h | 0.148 h−1 | gonadotropin downregulated healthy women | &gt;24 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rose_2016_reference](drugs/drug_follitropin/Follitropin_Rose2016_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rose_2016_reference](drugs/drug_follitropin/Follitropin_Rose2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Rose TH et al., Characterisation of Population Pharmaco…, Drugs in R&D (2016) | [10.1007/s40268-016-0126-z](https://doi.org/10.1007/s40268-016-0126-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Taketani_2010_Time_to_dominant_follicle_18_mm](drugs/drug_follitropin/pd_Taketani_2010_Time_to_dominant_follicle_18_mm.md) | Time to dominant follicle ≥18 mm ← follitropin · time-to-event model | — | Taketani Y et al., Recombinant follicle-stimulating hormon…, Reproductive medicine and b… (2010) | [10.1007/s12522-009-0044-7](https://doi.org/10.1007/s12522-009-0044-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=follitropin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FSHR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:54 | 3:32 | 1/0/0 | 1/0/0 | 0/0/0 | 188,534/7,305 | einfracz / qwen3.8-27b | 11 | 2/6 | 9/2 | 0 |

## Coverage

- **PubMed hits:** 40 matched, 24 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hærvig_2022.pdf` | Hærvig KK et al., Fetal exposure to maternal cigarette sm…, European journal of epidemi… (2022) | pd | 5 | [10.1007/s10654-022-00869-2](https://doi.org/10.1007/s10654-022-00869-2) | [35476275](https://www.ncbi.nlm.nih.gov/pubmed/35476275) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-10-07 08:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2022 | irrelevant | 2 | 0 | The paper is a review of Follitropin Delta that describes the structure of a population PK model and covariates but does not report specific quantitative parameter values (like absolute CL or V) in the provided text. |
| popPK | Amer_2025 | irrelevant | 0 | 0 | The paper is a general review on peptide delivery and does not report any pharmacokinetic parameters for follitropin. |
| popPK | Bhalla_1976 | irrelevant | 0 | 0 | The paper reports in vitro binding constants (Kd) for follitropin to testicular factors, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Bryant_1994 | irrelevant | 0 | 0 | The study is an in vitro structural binding study of the TSH receptor, not a pharmacokinetic study of follitropin. |
| PGx | Dias_2021 | not_relevant | 1 | 1 | The paper is a review of structural glycosylation differences between follitropin preparations and their effects on PK/PD, but it does not report pharmacogenomic effects (patient gene variants) on drug response. |
| popPK | Li_2000 | irrelevant | 0 | 0 | The study is an in-vitro cell culture experiment examining steroidogenic responses (E2/P4 production) and does not report any pharmacokinetic parameters (CL, V, T1/2) for follitropin. |
| popPK | Munier_2021 | irrelevant | 0 | 0 | The study investigates the effects of p,p'DDT on receptor signaling (V2R, LHR/FSHR) in cell lines, not the pharmacokinetics of follitropin. |
| popPK | Picard_2008 | irrelevant | 2 | 1 | The study reports bioequivalence ratios (Cmax and AUC) rather than absolute quantitative PK parameters (CL, V, t1/2, ka) for follitropin. |
| popPK | Riccetti_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of glycosylation and bioactivity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Ulloa-Aguirre_2025 | not_relevant | 0 | 0 | The paper reviews the effects of post-translational glycosylation modifications on FSH function, not the effect of host gene variants (pharmacogenomics) on PK/PD parameters. |
| popPK | Weiss_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing embryo morphokinetics and fertility outcomes, not a pharmacokinetic study reporting disposition parameters for follitropin. |
| PGx | Zerfaoui_1996 | not_relevant | 0 | 0 | The paper discusses the structural glycosylation and immunoassay recognition of pituitary hormones, not pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfollitropin%5D&body=Drug%3A%20follitropin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_follitropin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 08:53 UTC</sub>
