<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03G&quot;,&quot;href&quot;:&quot;atc/G03G.md&quot;},{&quot;label&quot;:&quot;chorionic gonadotrophin&quot;}]"></div>

# chorionic gonadotrophin

- **generic name:** chorionic gonadotrophin
- **ATC codes:** `G03GA01`
- **DrugBank:** [DB09126](https://go.drugbank.com/drugs/DB09126) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Chorionic gonadotrophin is a human hormone used to treat infertility, acting as a gonadotropin that stimulates ovulation. It is an approved medicine and also approved for veterinary use, with some investigational applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407172](https://www.wikidata.org/wiki/Q407172) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chorionic_gonadotrophin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: LHCGR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:50 | 1:30 | 0/0/0 | 0/0/0 | 0/0/0 | 132,411/2,891 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `You_2010.pdf` | You B et al., Predictive values of hCG clearance for…, Annals of oncology : offici… (2010) | popPK | 9 | [10.1093/annonc/mdq033](https://doi.org/10.1093/annonc/mdq033) | [20154304](https://pubmed.ncbi.nlm.nih.gov/20154304) | The study explicitly models hCG clearance using a population PK approach and provides quantitative values for hCG clearance (CL) and the elimination rate constant derived from the monoexponential fit. |
| `Stitely_2014.pdf` | Stitely ML et al., Log-linear human chorionic gonadotropin…, Archives of gynecology and… (2014) | popPK | 8 | [10.1007/s00404-013-2950-5](https://doi.org/10.1007/s00404-013-2950-5) | [23843154](https://pubmed.ncbi.nlm.nih.gov/23843154) | The study reports a quantitative half-life (146.3 h) for hCG elimination in a specific clinical population, consistent with a two-compartment model. |
| `Trinchard-Lugan_2002.pdf` | Trinchard-Lugan I et al., Pharmacokinetics and pharmacodynamics o…, Reproductive biomedicine on… (2002) | popPK | 5 | [10.1016/s1472-6483(10)61927-x](https://doi.org/10.1016/s1472-6483(10)61927-x) | [12470572](https://pubmed.ncbi.nlm.nih.gov/12470572) | The abstract describes PK models (bi-exponential, one-compartment) and qualitative findings (bioavailability %, fold-change) but does not list specific numeric parameter values (CL, V, T1/2) in the provided evidence. |

<sub>queue written 2026-10-07T08:49:29.151188+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnhart_2016 | irrelevant | 0 | 0 | The study analyzes clinical diagnostic trends and variability in hCG rise for pregnancy viability, not pharmacokinetic disposition parameters (CL, V, etc.) following exogenous drug administration. |
| popPK | Bobdiwala_2019 | irrelevant | 0 | 0 | This is a diagnostic review focusing on the use of hCG levels for predicting ectopic pregnancy, not a pharmacokinetic study characterizing the disposition of chorionic gonadotrophin as a drug. |
| popPK | Butts_2013 | irrelevant | 1 | 1 | The study analyzes serial hCG declines in a clinical context to diagnose pregnancy outcomes, rather than performing a pharmacokinetic study of exogenous chorionic gonadotrophin administration to derive parameters like clearance or volume. |
| popPK | Byambaragchaa_2021 | irrelevant | 0 | 0 | The study investigates the structure-activity relationship of eCG glycosylation sites in vitro (cellular biology), not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Byambaragchaa_2022 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of receptor signal transduction (cAMP response) using recombinant eCG, reporting no pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| popPK | Byambaragchaa_2024 | irrelevant | 0 | 0 | The paper describes the production and in-vitro biological activity of recombinant eel LH/FSH analogs using a chorionic gonadotropin peptide as a linker, but does not report pharmacokinetic disposition parameters (CL, V, t1/2) for chorionic gonadotropin itself. |
| popPK | Byambaragchaa_2024_2 | irrelevant | 0 | 0 | The study focuses on the in vitro production and biological activity (cAMP/ERK signaling) of a recombinant eel FSH analog, not the pharmacokinetics of chorionic gonadotrophin. |
| popPK | Clift_2026 | irrelevant | 0 | 0 | The study evaluates the clinical safety and quality of life outcomes of testosterone therapy (with hCG as an adjunct) in men, but does not report any pharmacokinetic parameters (such as clearance, volume, or half-life) for chorionic gonadotrophin. |
| popPK | Hermsteiner_1999 | irrelevant | 0 | 0 | The study examines the pharmacodynamic effect (vasodilation) of hCG in rat arteries, not its pharmacokinetic disposition parameters. |
| popPK | Hermsteiner_2002 | irrelevant | 0 | 0 | The study investigates the vascular physiological effects of hCG in rat arteries, not its pharmacokinetic disposition parameters. |
| popPK | Latif_2015 | irrelevant | 0 | 0 | The study focuses on small molecule agonists for the thyrotropin receptor (MS437/MS438) and does not report pharmacokinetic parameters for chorionic gonadotropin, which is only mentioned as a comparator receptor. |
| popPK | Richert_1977 | irrelevant | 0 | 0 | The paper describes in-vitro receptor binding of hCG to bacteria, which is a mechanistic/biochemical study, not a pharmacokinetic disposition study with quantitative PK parameters like clearance or volume. |
| popPK | Rossignolo_2023 | irrelevant | 0 | 0 | The study evaluates reproductive outcomes (conception, pregnancy rates) in beef cattle after hCG administration, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Trinchard-Lugan_2002 | irrelevant | 5 | 0 | The abstract describes PK models (bi-exponential, one-compartment) and qualitative findings (bioavailability %, fold-change) but does not list specific numeric parameter values (CL, V, T1/2) in the provided evidence. |
| popPK | Weber_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of hCG's effect on glucose oxidation in porcine granulosa cells, not a pharmacokinetic study of drug disposition. |
| popPK | You_2010_2 | irrelevant | 0 | 0 | The paper models the pharmacokinetic decline of hCG as a tumor marker (biomarker) for disease response, not the disposition of chorionic gonadotrophin as a therapeutic drug administered for clinical effect. |
| popPK | de_2024 | irrelevant | 0 | 0 | The paper models longitudinal biomarker levels (beta-HCG) for miscarriage prediction, not the pharmacokinetic disposition parameters (CL, V, ka) of the drug chorionic gonadotrophin after administration. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
