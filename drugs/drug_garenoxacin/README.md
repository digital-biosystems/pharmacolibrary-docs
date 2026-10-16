<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;garenoxacin&quot;}]"></div>

# garenoxacin

- **generic name:** garenoxacin
- **ATC codes:** `J01MA19`
- **DrugBank:** [DB06160](https://go.drugbank.com/drugs/DB06160) · **PubChem:** not captured
- **molar mass:** 426.42 g/mol (C23H20F2N2O4) — DrugBank
- **groups:** experimental

## About

Garenoxacin is a fluoroquinolone antibiotic developed as an antibacterial drug for treating bacterial infections. It remains experimental and has not been approved for routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3758306](https://www.wikidata.org/wiki/Q3758306) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| garenoxacin | parent | 426.42 | C23H20F2N2O4 | DrugBank | — | Tanigawara_2012, Van_2004, Yamagishi_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:02 | 4:27 | 0/1/3 | 0/0/0 | 0/0/0 | 158,829/15,982 | einfracz / qwen3.8-27b | 4 | 2/2 | 4/0 | 2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Tanigawara_2012_final](drugs/drug_garenoxacin/Garenoxacin_Tanigawara2012_final.md) | held back | 1-compartment, oral | 1 | Tanigawara Y et al., Optimal dose finding of garenoxacin bas…, European journal of clinica… (2012) | [10.1007/s00228-011-1095-3](https://doi.org/10.1007/s00228-011-1095-3) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Tanigawara_2012_model_2](drugs/drug_garenoxacin/Garenoxacin_Tanigawara2012_model_2.md) | held back | 1-compartment, oral | 1 | Tanigawara Y et al., Optimal dose finding of garenoxacin bas…, European journal of clinica… (2012) | [10.1007/s00228-011-1095-3](https://doi.org/10.1007/s00228-011-1095-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Van_2004_reference](drugs/drug_garenoxacin/Garenoxacin_Van2004_reference.md) | — | 1-compartment (no model) | 1 | Van Wart S et al., Population pharmacokinetics and pharmac…, Antimicrobial agents and ch… (2004) | [10.1128/AAC.48.12.4766-4777.2004](https://doi.org/10.1128/AAC.48.12.4766-4777.2004) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yamagishi_2015_reference](drugs/drug_garenoxacin/Garenoxacin_Yamagishi2015_reference.md) | — | 1-compartment (no model) | 3 | Yamagishi Y et al., Pharmacokinetic study of garenoxacin in…, The Japanese journal of ant… (2015) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=garenoxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yamagishi_2015.pdf` | Yamagishi Y et al., Pharmacokinetic study of garenoxacin in…, The Japanese journal of ant… (2015) | popPK | 9 | not captured | [26349115](https://pubmed.ncbi.nlm.nih.gov/26349115) | The paper reports quantitative PK parameters (Cmax, AUC, T1/2) for garenoxacin in a specific population (severe renal failure) derived from a NONMEM analysis, with all values present in the text. |

<sub>queue written 2026-10-14T22:58:43.599504+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Czock_2007 | irrelevant | 1 | 0 | This is a review of PK-PD modeling methods that uses garenoxacin only as a qualitative example of concentration-dependent effects, without reporting any quantitative pharmacokinetic parameter values. |
| popPK | Hosoi_2026 | irrelevant | 5 | 0 | The study reports PK parameters for garenoxacin in mice, but the specific numeric values (ka, Vd, CL) are located in Supplementary Tables S1-S3 which are not provided in the evidence. |
| popPK | Noreddin_2007 | irrelevant | 1 | 0 | This is a pharmacodynamic Monte Carlo simulation study that cites PK data from previous models without reporting the specific quantitative PK parameters (CL, V, ka) in the evidence. |
| popPK | Ohsaki_2010 | irrelevant | 3 | 0 | The study uses Bayesian prediction based on reported population parameters to estimate individual patient PK, but does not report the underlying population model parameters (CL, V, etc.) or present numeric data for extraction. |
| popPK | Yamagishi_2017 | irrelevant | 1 | 2 | This is a PK-PD breakpoint and susceptibility study using Monte Carlo simulation, not a primary study reporting new quantitative disposition parameters (CL, V, ka) or a population-PK model for garenoxacin; it only cites AUC values from other sources. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:58 UTC</sub>
