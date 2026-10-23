<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;catridecacog&quot;}]"></div>

# catridecacog

- **generic name:** catridecacog
- **ATC codes:** `B02BD11`
- **DrugBank:** [DB09310](https://go.drugbank.com/drugs/DB09310) · **PubChem:** not captured
- **groups:** approved

## About

Catridecacog is a recombinant coagulation factor XIII A-subunit used to treat inherited blood coagulation disorders, specifically factor XIII deficiency. It is approved and authorised in the European Union, though it is a specialised product used in a small patient population.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q16858452](https://www.wikidata.org/wiki/Q16858452) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=catridecacog).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F13B (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 17:39 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 11,168/349 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pasca_2022.pdf` | Pasca S et al., The pharmacokinetics of recombinant FXI…, Journal of thrombosis and t… (2022) | popPK | 8 | [10.1007/s11239-022-02700-x](https://doi.org/10.1007/s11239-022-02700-x) | [36094687](https://pubmed.ncbi.nlm.nih.gov/36094687) | The paper reports a comparison of pharmacokinetic profiles for catridecacog in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, only dosage and demographic comparisons. |
| `Zanon_2023.pdf` | Zanon E et al., A multicenter, real-world experience wi…, Blood transfusion = Trasfus… (2023) | popPK | 8 | [10.2450/2022.0121-22](https://doi.org/10.2450/2022.0121-22) | [36580025](https://pubmed.ncbi.nlm.nih.gov/36580025) | The study reports pharmacokinetic assessments for catridecacog in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, only dosing ranges and clinical outcomes. |

<sub>queue written 2026-10-05T17:39:28.337875+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Byrnes_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Factor XIII-A (rFXIII-A2), not catridecacog. |
| popPK | Carcao_2017 | irrelevant | 0 | 0 | The paper is a review of recombinant Factor XIII (rFXIII-A2), not catridecacog, and contains no PK parameters for the target drug. |
| popPK | Carcao_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for recombinant Factor XIII (rFXIII-A2), not catridecacog. |
| popPK | Gibbs_2024 | irrelevant | 0 | 0 | The paper is a systematic review of bleeding prevention interventions (e.g., tranexamic acid) in orthopedic surgery and does not contain pharmacokinetic data for catridecacog. |
| PD | Gibbs_2024 | not_relevant | 0 | 0 | The paper is a systematic review and network meta-analysis of bleeding prevention interventions (primarily tranexamic acid) and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for catridecacog. |
| popPK | Kerlin_2014 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of recombinant factor XIII (rFXIII), not catridecacog. |
| popPK | Korte_2014 | irrelevant | 2 | 1 | The paper is a narrative review that discusses catridecacog but does not report original quantitative population-pharmacokinetic parameters (CL, V, Q, ka) or compartmental models, only mentioning a general half-life range. |
| popPK | Lovejoy_2006 | irrelevant | 0 | 0 | The study investigates recombinant factor XIII-A2, not catridecacog. |
| popPK | Mitchell_2017 | irrelevant | 0 | 0 | The paper is a case report on acquired factor XIII deficiency and does not involve catridecacog or report any pharmacokinetic parameters. |
| popPK | Muszbek_2018 | irrelevant | 0 | 0 | The paper is a review of laboratory diagnosis and clinical consequences of anti-Factor XIII antibodies, not a pharmacokinetic study of catridecacog. |
| popPK | Palumbo_2008 | irrelevant | 0 | 0 | The paper investigates the role of Factor XIII in tumor metastasis and does not report any pharmacokinetic parameters for catridecacog. |
| popPK | Pasca_2022 | relevant | 8 | 2 | The paper reports a comparison of pharmacokinetic profiles for catridecacog in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, only dosage and demographic comparisons. |
| popPK | Pasca_2023 | irrelevant | 0 | 0 | The provided text is a correction notice regarding author affiliations and names, containing no pharmacokinetic data or parameters for catridecacog. |
| popPK | Reynolds_2005 | irrelevant | 0 | 0 | The study evaluates recombinant Factor XIII (rFXIII), not catridecacog. |
| popPK | Souri_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study on coagulation Factor XIII and fibrin cross-linking, not a pharmacokinetic study of catridecacog. |
| popPK | Souri_2023 | irrelevant | 0 | 0 | The paper investigates the mechanism of antibody inhibition of Factor XIII activation and is not a pharmacokinetic study of catridecacog. |
| popPK | Souri_2023_2 | irrelevant | 0 | 0 | The paper focuses on the mechanisms of anti-Factor XIII autoantibodies and does not report pharmacokinetic parameters for catridecacog. |
| popPK | Wada_2013 | irrelevant | 0 | 0 | The paper describes a case of congenital Factor XIII-B deficiency and alloantibody development, not a pharmacokinetic study of catridecacog. |
| popPK | Zanon_2023 | relevant | 8 | 2 | The study reports pharmacokinetic assessments for catridecacog in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, only dosing ranges and clinical outcomes. |
| PD | Zanon_2023 | not_relevant | 2 | 0 | The paper reports pharmacokinetic (PK) profiles and clinical outcomes (bleeding events) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) linking drug concentration to effect. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
