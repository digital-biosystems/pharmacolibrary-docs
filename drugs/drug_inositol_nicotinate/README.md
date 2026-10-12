<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;inositol nicotinate&quot;}]"></div>

# inositol nicotinate

- **generic name:** inositol nicotinate
- **ATC codes:** `C04AC03`
- **DrugBank:** [DB08949](https://go.drugbank.com/drugs/DB08949) · **PubChem:** [CID 3720](https://pubchem.ncbi.nlm.nih.gov/compound/3720)
- **molar mass:** 810.732 g/mol (C42H30N6O12) — DrugBank
- **groups:** approved, withdrawn

## About

Inositol nicotinate is a vasodilator of the nicotinic acid group, once used to improve peripheral blood flow. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6036641](https://www.wikidata.org/wiki/Q6036641) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:18 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 14,742/384 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=inositol_nicotinate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | stomach | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ATP5F1B (inhibitor), DGAT2 (inhibitor), HCAR2 (target), HCAR3 (target), SLC5A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Milton_2013.pdf` | Milton SG et al., Biotransformation and pharmacokinetics…, Xenobiotica; the fate of fo… (2013) | popPK | 9 | [10.3109/00498254.2012.762591](https://doi.org/10.3109/00498254.2012.762591) | [23347001](https://pubmed.ncbi.nlm.nih.gov/23347001) | The study reports pharmacokinetic parameters (half-lives, clearance trends) for inositol hexanicotinate in rats, but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided text, only qualitative descriptions and half-lives. |

<sub>queue written 2026-10-06T20:18:03.969751+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belch_1996 | irrelevant | 0 | 0 | The paper is a clinical review of Raynaud's phenomenon treatment that mentions inositol nicotinate only as a therapeutic option, without reporting any pharmacokinetic parameters or quantitative disposition data. |
| PD | Belch_1996 | not_relevant | 1 | 0 | The text is a general review of Raynaud's phenomenon management that mentions inositol nicotinate as a simple vasodilator but provides no pharmacokinetic data, dose-response curves, or numeric pharmacodynamic parameters. |
| popPK | Keenan_2013 | irrelevant | 2 | 0 | The study reports that inositol hexanicotinate showed "no evidence of bioavailability" and provides no quantitative PK parameters (CL, V, ka, etc.) for the drug. |
| PD | Keenan_2013 | not_relevant | 0 | 0 | The study reports clinical efficacy (lipid changes) and PK data (bioavailability) but does not provide a concentration-effect or dose-response analysis with numeric PD parameters for inositol nicotinate. |
| popPK | Milton_2013 | relevant | 9 | 4 | The study reports pharmacokinetic parameters (half-lives, clearance trends) for inositol hexanicotinate in rats, but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided text, only qualitative descriptions and half-lives. |
| popPK | Paltauf_1977 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clofibric acid (a metabolite of clofibrate) and does not report quantitative disposition parameters for inositol nicotinate, which is only a co-administered component. |
| PD | Paltauf_1977 | not_relevant | 0 | 0 | The paper reports only the pharmacokinetics (absorption, blood levels, excretion) of clofibric acid and does not provide any pharmacodynamic or exposure-response data for inositol nicotinate. |
| popPK | Schwartzkopff_1978 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on hyperlipoproteinemia treatment and does not report any pharmacokinetic parameters for inositol nicotinate. |
| PD | Schwartzkopff_1978 | not_relevant | 1 | 0 | The text describes clinical outcomes and dosage ranges for combination therapy but does not report any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Vorberg_1976 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for chronic arterial disorders and does not report any pharmacokinetic parameters for inositol nicotinate. |
| PD | Vorberg_1976 | not_relevant | 0 | 0 | The paper reports only clinical efficacy rates (91.2%) and qualitative lipid changes without any concentration-effect data, dose-response curve, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
