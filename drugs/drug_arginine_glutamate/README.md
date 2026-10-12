<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;arginine glutamate&quot;}]"></div>

# arginine glutamate

- **generic name:** arginine glutamate
- **ATC codes:** `A05BA01`
- **DrugBank:** [DB13207](https://go.drugbank.com/drugs/DB13207) · **PubChem:** not captured
- **molar mass:** 321.334 g/mol (C11H23N5O6) — DrugBank
- **groups:** investigational

## About

Arginine glutamate, a mixture of the amino acids arginine and glutamate, has been used in liver therapy as a lipotropic agent. It is considered investigational and does not appear to have an authorised marketing status in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q288119](https://www.wikidata.org/wiki/Q288119) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arginine, glutamate | metabolite | 321.334 | C11H23N5O6 | PubChem | [165268](https://pubchem.ncbi.nlm.nih.gov/compound/165268) | Wang_2018 |
| arginine_glutamate | metabolite | 321.334 | C11H23N5O6 | DrugBank | — | Wang_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:49 | 2:17 | 0/0/1 | 0/0/0 | 0/0/0 | 17,038/5,228 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2018_reference](drugs/drug_arginine_glutamate/ArginineGlutamate_Wang2018_reference.md) | — | 1-compartment (no model) | 1 | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2018.pdf` | Wang J et al., Population pharmacokinetics of arginine…, Xenobiotica; the fate of fo… (2018) | popPK | 10 | [10.1080/00498254.2017.1370745](https://doi.org/10.1080/00498254.2017.1370745) | [28925806](https://pubmed.ncbi.nlm.nih.gov/28925806) | The study reports quantitative population pharmacokinetic parameters (CL, Q, V1, V2, Vmax, Km) for arginine and glutamate in healthy Chinese volunteers. |
| `Wang_2002.pdf` | Wang H et al., Luffangulin, a novel ribosome inactivat…, Life sciences (2002) | pd | 4 | [10.1016/s0024-3205(01)01466-7](https://doi.org/10.1016/s0024-3205(01)01466-7) | [11853228](https://www.ncbi.nlm.nih.gov/pubmed/11853228) | metadata signals extractable PD data (IC50) |
| `Wang_2003.pdf` | Wang HX et al., Isolation of cucurmoschin, a novel anti…, Peptides (2003) | pd | 4 | [10.1016/s0196-9781(03)00191-8](https://doi.org/10.1016/s0196-9781(03)00191-8) | [14499274](https://www.ncbi.nlm.nih.gov/pubmed/14499274) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T14:47:15.709574+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cruz_2025 | irrelevant | 0 | 0 | The paper is a review on formulation development for protein therapeutics and does not report pharmacokinetic parameters for arginine_glutamate. |
| PD | Cruz_2025 | not_relevant | 0 | 0 | The paper is a review on formulation development and viscosity mitigation for biotherapeutics, containing no pharmacodynamic or exposure-response analysis for arginine glutamate. |
| popPK | Kernohan_2005 | irrelevant | 2 | 2 | The study reports only Cmax and Tmax for L-arginine (a component of the combination drug) and explicitly states that AUC and half-life were not calculated due to endogenous interference, failing to provide the quantitative disposition parameters (CL, V, ka) required for a PK model. |
| PD | Kernohan_2005 | not_relevant | 2 | 1 | The study reports PK parameters and time-based hemodynamic changes (mean differences vs placebo) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for arginine glutamate. |
| PD | Parkash_2002 | not_relevant | 0 | 0 | The paper reports the isolation and characterization of a plant-derived peptide (luffacylin) and its biological activity (IC50), but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug arginine glutamate. |
| PD | Sato_2000 | not_relevant | 0 | 0 | The paper studies electrophysiological responses to amino acids (including arginine and glutamate) and chloride channel blockers, but does not report a pharmacodynamic exposure-response relationship or numeric PD parameters for arginine glutamate. |
| PD | Wang_2002 | not_relevant | 0 | 0 | The paper describes the isolation and characterization of a novel peptide (Luffangulin) and does not report any pharmacodynamic or exposure-response analysis for arginine glutamate. |
| PD | Wang_2003 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of a novel antifungal peptide (cucurmoschin) from pumpkin seeds, not on the pharmacodynamics of arginine glutamate. |
| PD | Wang_2018 | not_relevant | 0 | 0 | The paper reports only population pharmacokinetic (PK) parameters (CL, V, Vmax, Km) and covariates, with no pharmacodynamic (PD) or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 14:47 UTC</sub>
