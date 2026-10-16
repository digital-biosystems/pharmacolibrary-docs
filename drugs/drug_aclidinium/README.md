<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;Aclidinium&quot;}]"></div>

# Aclidinium

- **generic name:** Aclidinium
- **ATC codes:** `R03AL05`, `R03BB05`
- **DrugBank:** [DB08897](https://go.drugbank.com/drugs/DB08897) · **PubChem:** not captured
- **groups:** approved

## About

Aclidinium is an inhaled anticholinergic medicine used to treat obstructive airway diseases such as chronic obstructive pulmonary disease. It is an approved drug, available alone and in combination inhalers with adrenergic agents.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27888207](https://www.wikidata.org/wiki/Q27888207) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:30 | 1:51 | 0/0/0 | 2/0/0 | 0/0/0 | 55,256/1,745 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2022_trough_FEV1](drugs/drug_aclidinium/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← formoterol/aclidinium fixed-dose combination (treatment arm) · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Llanos-Paez_2023_FEV1](drugs/drug_aclidinium/pd_Llanos_Paez_2023_FEV1.md) | Morning trough FEV1 ← aclidinium · direct sigmoid Emax (Hill) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aclidinium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cazzola_2014.pdf` | Cazzola M et al., Pharmacological characterization of the…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.10.025](https://doi.org/10.1016/j.ejphar.2014.10.025) | [25446566](https://www.ncbi.nlm.nih.gov/pubmed/25446566) | metadata signals extractable PD data (Emax) |
| `Cazzola_2015.pdf` | Cazzola M et al., Searching for the synergistic effect be…, Respiratory medicine (2015) | pd | 4 | [10.1016/j.rmed.2015.08.005](https://doi.org/10.1016/j.rmed.2015.08.005) | [26303336](https://www.ncbi.nlm.nih.gov/pubmed/26303336) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T13:30:25.415071+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Albertí_2011 | not_relevant | 3 | 5 | Identifies CYP3A4/2D6 as enzymes metabolizing aclidinium in vitro, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| popPK | Babu_2017 | irrelevant | 0 | 0 | This is a review of umeclidinium, a different drug, with no quantitative PK parameters for aclidinium. |
| popPK | Cazzola_2014 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Cazzola_2015 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) meta-analysis of FEV1 for LABA/LAMA combinations; no PK disposition parameters (CL, V, ka, half-life) for aclidinium are reported. |
| popPK | Llanos-Paez_2023 | irrelevant | 0 | 0 | This is an MBMA of FEV1/exacerbation efficacy in COPD, not a PK study; aclidinium appears only as a comparator with efficacy (ED50/Effref) parameters, no disposition parameters, and new drug estimates are in supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
