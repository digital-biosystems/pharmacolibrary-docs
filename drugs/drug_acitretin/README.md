<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05B&quot;,&quot;href&quot;:&quot;atc/D05B.md&quot;},{&quot;label&quot;:&quot;acitretin&quot;}]"></div>

# acitretin

- **generic name:** acitretin
- **ATC codes:** `D05BB02`
- **DrugBank:** [DB00459](https://go.drugbank.com/drugs/DB00459) · **PubChem:** [CID 5284513](https://pubchem.ncbi.nlm.nih.gov/compound/5284513)
- **molar mass:** 326.4293 g/mol (C21H26O3) — DrugBank
- **groups:** approved, investigational

## About

Acitretin is a second-generation retinoid used to treat psoriasis. It is given orally in capsule form and is readily absorbed. It is used mainly for severe psoriasis that has not responded to other treatments.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q341500](https://www.wikidata.org/wiki/Q341500), [Wikipedia](https://en.wikipedia.org/wiki/Acitretin?oldid=1385986010) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Tippmann_2009_ADAM10_promoter_activity](drugs/drug_acitretin/pd_Tippmann_2009_ADAM10_promoter_activity.md) | ADAM10 promoter activity ← acitretin · direct Emax (saturable) effect | — | Tippmann F et al., Up-regulation of the alpha-secretase AD…, FASEB journal : official pu… (2009) | [10.1096/fj.08-121392](https://doi.org/10.1096/fj.08-121392) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:24 | 0:03 | 0/0/0 | 0/1/0 | 0/0/0 | 3,137/147 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feld_2026 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of bexarotene and fenretinide against BK polyomavirus, using acitretin only as a less effective comparator in an in-vitro viral dynamics model, without reporting acitretin's PK parameters. |
| PGx | Feld_2026 | not_relevant | 0 | 0 | The paper evaluates antiviral pharmacodynamics of bexarotene and acitretin against BKPyV isolates but contains no information on genetic variants or pharmacogenomics. |
| popPK | Hausauer_2015 | irrelevant | 0 | 0 | The paper is a clinical case report describing the therapeutic efficacy of acitretin for a dermatological condition and contains no pharmacokinetic data or disposition parameters. |
| PGx | Hausauer_2015 | not_relevant | 0 | 0 | The paper is a case report on the clinical efficacy of acitretin in treating Keratolysis exfoliativa and does not report any pharmacogenomic effect on a PK/PD parameter. |
| popPK | Ling_1999 | irrelevant | 0 | 0 | The text is a clinical review discussing dosing strategies and efficacy for psoriasis, with no quantitative pharmacokinetic parameters or model data for acitretin. |
| PGx | Ling_1999 | not_relevant | 0 | 0 | The text discusses general dosing strategies and side effects but does not report any pharmacogenomic effects on acitretin's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tippmann_2009 | irrelevant | 0 | 0 | The study investigates the mechanistic up-regulation of ADAM10 by acitretin in cells and mice, not the pharmacokinetic disposition parameters (CL, V, ka) of acitretin. |
| PGx | Tippmann_2009 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic effect of acitretin on ADAM10 expression but does not report any influence of genetic variants, genotypes, or phenotypes on acitretin's PK or PD parameters. |
| popPK | Vahlquist_1995 | irrelevant | 0 | 0 | This clinical lipid-management study reports no quantitative pharmacokinetic parameters for acitretin. |
| popPK | Wu_2021 | irrelevant | 1 | 0 | The paper is an in vitro mechanistic study of antiviral activity and does not report pharmacokinetic disposition parameters for acitretin. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper investigates the antiviral pharmacodynamics of acitretin in cell cultures, not the effect of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | van_1989 | irrelevant | 0 | 0 | The paper describes a clinical dose-response study for Darier's disease and does not report any pharmacokinetic parameters or quantitative disposition data. |
| PGx | van_1989 | not_relevant | 0 | 0 | The paper describes clinical dose adjustments in Darier's disease patients but does not report any genetic variants or genotypes associated with pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacitretin%5D&body=Drug%3A%20acitretin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_acitretin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
