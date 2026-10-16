<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin lispro&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InsulinLispro_Tham2017_reference&quot;,&quot;label&quot;:&quot;Tham_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# insulin lispro

- **generic name:** insulin lispro
- **ATC codes:** `A10AB04`, `A10AB04;A10AD04`, `A10AC04`, `A10AD04`
- **DrugBank:** [DB00046](https://go.drugbank.com/drugs/DB00046) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Insulin lispro is a fast-acting insulin analogue used to lower blood sugar in people with diabetes, including type-1 diabetes and hyperglycemia. It is an approved anti-diabetic medicine, authorised in the European Union and widely used for diabetes care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3492616](https://www.wikidata.org/wiki/Q3492616) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| insulin_lispro | metabolite | 5813.68 | C257H389N65O77S6 | PubChem | [16132438](https://pubchem.ncbi.nlm.nih.gov/compound/16132438) | Ruan_2014, Tham_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:14 | 1:23 | 1/1/0 | 0/0/0 | 0/0/0 | 120,900/9,561 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Tham_2017_reference](drugs/drug_insulin_lispro/InsulinLispro_Tham2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 (+2 cov.) | Tham LS et al., Modeling Pharmacokinetic Profiles of In…, Journal of clinical pharmac… (2017) | [10.1002/jcph.899](https://doi.org/10.1002/jcph.899) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ruan_2014_reference](drugs/drug_insulin_lispro/InsulinLispro_Ruan2014_reference.md) | — | 1-compartment (no model) | 2 | Ruan Y et al., Pharmacokinetics of insulin lispro in t…, Computer methods and progra… (2014) | [10.1016/j.cmpb.2014.07.004](https://doi.org/10.1016/j.cmpb.2014.07.004) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=insulin_lispro).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (activator), INSR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ruan_2014.pdf` | Ruan Y et al., Pharmacokinetics of insulin lispro in t…, Computer methods and progra… (2014) | popPK | 10 | [10.1016/j.cmpb.2014.07.004](https://doi.org/10.1016/j.cmpb.2014.07.004) | [25092225](https://pubmed.ncbi.nlm.nih.gov/25092225) | The study reports quantitative pharmacokinetic parameters (time-to-peak and metabolic clearance rate) for insulin lispro in humans, though specific compartmental values like volume of distribution are not explicitly listed in the abstract text. |
| `Chang_2025.pdf` | Chang YC et al., Comparing the Efficacy of Various Insul…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70010](https://doi.org/10.1002/jcph.70010) | [39982761](https://www.ncbi.nlm.nih.gov/pubmed/39982761) | metadata signals extractable PD data (PharmacodynamicModel) |

<sub>queue written 2026-10-07T21:13:28.024576+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_2025 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| popPK | Hovorka_2004 | irrelevant | 2 | 0 | The paper focuses on a glucose control algorithm (model predictive control) rather than reporting the specific quantitative pharmacokinetic parameters (CL, V, ka) for insulin lispro itself. |
| popPK | Ramanathan_2025 | irrelevant | 2 | 0 | The study is a mechanistic model of diffusion dimensionality using previously published data, and no specific numeric PK parameter values for insulin lispro are present in the provided text. |
| PGx | Selivanova_2017 | not_relevant | 0 | 0 | The paper describes the biophysical mechanisms of amyloid aggregation for insulin lispro but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Shimoda_1997 | irrelevant | 4 | 0 | The paper describes a control algorithm based on a three-compartment model of Insulin Lispro dynamics, but specific quantitative PK parameter values (CL, V, etc.) are not provided in the evidence. |
| popPK | Su_2017 | irrelevant | 0 | 0 | The study is a Phase 4 clinical trial comparing efficacy (HbA1c reduction) and safety of two premixed insulin formulations, with no pharmacokinetic parameters reported. |
| popPK | Wilinska_2004 | irrelevant | 0 | 0 | The study models interstitial glucose kinetics, not the pharmacokinetic disposition parameters (CL, V, ka) of insulin lispro itself. |
| popPK | Woodworth_2004 | irrelevant | 2 | 0 | The study focuses on glucodynamic modeling (blood glucose response) rather than pharmacokinetic parameters (clearance, volume, half-life) of insulin lispro. |
| popPK | de_2015 | irrelevant | 3 | 2 | The study reports non-compartmental exposure metrics (AUC, Cmax) and glucodynamic parameters, but lacks compartmental or population PK parameters (CL, V, Q, ka) required for the extraction criteria. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:13 UTC</sub>
