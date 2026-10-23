<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;olopatadine&quot;}]"></div>

# olopatadine

- **generic name:** olopatadine
- **ATC codes:** `R01AC08`, `S01GX09`
- **DrugBank:** [DB00768](https://go.drugbank.com/drugs/DB00768) · **PubChem:** [CID 5281071](https://pubchem.ncbi.nlm.nih.gov/compound/5281071)
- **molar mass:** 337.4122 g/mol (C21H23NO3) — DrugBank
- **groups:** approved

## About

Olopatadine is an antihistamine used to treat allergic conjunctivitis, allergic rhinitis, and giant papillary conjunctivitis. It is approved and an eye-drop product is authorised in the European Union for allergic conjunctivitis; it is also available as a nasal preparation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3267092](https://www.wikidata.org/wiki/Q3267092) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Fidler_2018_itching_score](drugs/drug_olopatadine/pd_Fidler_2018_itching_score.md) | ocular itching score ← olopatadine (KPD theoretical concentration) · direct Emax (saturable) effect | — | Fidler ML et al., Projected 24-hour post-dose ocular itch…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-018-9588-7](https://doi.org/10.1007/s10928-018-9588-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=olopatadine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `FMO3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: FMO1 (substrate), HRH1 (target), HRH2 (target), HRH3 (target), S100A1 (target), S100A12 (target), S100A13 (other/unknown), S100A2 (target), S100B (other/unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:15 | 0:14 | 0/0/0 | 1/0/0 | 0/0/0 | 30,477/1,503 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fidler_2018 | irrelevant | 3 | 2 | This is a kinetic-pharmacodynamic (KPD) efficacy model of ocular itching, not a PK disposition model; only a theoretical KPD half-life (18.46 h) is reported, with no CL, V, or real concentration-based parameters, and other parameter values appear to live in tables/supplementary material not provided. |
| popPK | Matsumoto_2008 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study of olopatadine's antagonism mechanism; no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bolopatadine%5D&body=Drug%3A%20olopatadine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_olopatadine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
