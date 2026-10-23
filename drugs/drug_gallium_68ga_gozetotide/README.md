<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;gallium (68Ga) gozetotide&quot;}]"></div>

# gallium (68Ga) gozetotide

- **generic name:** gallium (68Ga) gozetotide
- **ATC codes:** `V09IX14`
- **DrugBank:** [DB16019](https://go.drugbank.com/drugs/DB16019) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Gallium (68Ga) gozetotide is a diagnostic radiopharmaceutical used for detecting tumours, particularly in prostate cancer. It is an approved medicine, though its use is specialised and typically confined to nuclear medicine settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27295602](https://www.wikidata.org/wiki/Q27295602) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sachpekidis_2016_reference](drugs/drug_gallium_68ga_gozetotide/Gallium68gaGozetotide_Sachpekidis2016_reference.md) | — | 1-compartment (no model) | 0 | Sachpekidis C et al., 68Ga-PSMA-11 Dynamic PET/CT Imaging in…, Clinical nuclear medicine (2016) | [10.1097/RLU.0000000000001349](https://doi.org/10.1097/RLU.0000000000001349) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gallium_68ga_gozetotide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | prostate gland | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FOLH1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:15 | 2:31 | 0/1/0 | 0/0/0 | 0/0/0 | 47,652/4,714 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sachpekidis_2016.pdf` | Sachpekidis C et al., 68Ga-PSMA-11 Dynamic PET/CT Imaging in…, Clinical nuclear medicine (2016) | popPK | 8 | [10.1097/RLU.0000000000001349](https://doi.org/10.1097/RLU.0000000000001349) | [27607173](https://pubmed.ncbi.nlm.nih.gov/27607173) | The study reports quantitative compartmental parameters (K1, k3, influx) for Ga-PSMA-11 (gallium_68ga_gozetotide) in human patients, with values explicitly listed in the abstract. |

<sub>queue written 2026-10-07T16:13:23.652124+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burasothikul_2024 | irrelevant | 2 | 0 | The study reports net influx rates (Ki) from a compartmental model for diagnostic imaging optimization, but does not provide standard population pharmacokinetic parameters (CL, V, Q) or extractable numeric PK values for the drug. |
| popPK | Ringheim_2018 | irrelevant | 0 | 0 | The study assesses the reproducibility of standardized uptake values (SUVs) for imaging comparison, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Smith_2023 | relevant | 8 | 2 | The paper reports quantitative tissue-level pharmacokinetic parameters (K1, k2, k3, Ki, Vd) for 68Ga-PSMA-11 (gallium_68ga_gozetotide) using compartmental models, but the specific numeric values are located in Table 2 and Supplemental Figures which are not included in the provided evidence. |
| popPK | Smith_2024 | irrelevant | 2 | 1 | The study models tissue-specific tracer kinetics (K1, k2, k3) for 68Ga-PSMA-11 (a different drug) rather than the systemic population pharmacokinetics (CL, V) of gallium_68ga_gozetotide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:13 UTC</sub>
