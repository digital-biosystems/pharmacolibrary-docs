<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;brotizolam&quot;}]"></div>

# brotizolam

- **generic name:** brotizolam
- **ATC codes:** `N05CD09`
- **DrugBank:** [DB09017](https://go.drugbank.com/drugs/DB09017) · **PubChem:** [CID 2451](https://pubchem.ncbi.nlm.nih.gov/compound/2451)
- **molar mass:** 393.689 g/mol (C15H10BrClN4S) — DrugBank
- **groups:** approved, withdrawn

## About

Brotizolam is a benzodiazepine-type sedative that was used as a hypnotic for sleep problems. It was approved in some countries but has been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q850074](https://www.wikidata.org/wiki/Q850074) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Tanaka_1983_PPR_latency](drugs/drug_brotizolam/pd_Tanaka_1983_PPR_latency.md) | maximum prolongation of photopalpebral reflex (PPR) latency ← brotizolam · direct linear effect | — | Tanaka M et al., Effect of brotizolam on the averaged ph…, British journal of clinical… (1983) | [10.1111/j.1365-2125.1983.tb02307.x](https://doi.org/10.1111/j.1365-2125.1983.tb02307.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=brotizolam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:47 | 3:47 | 0/0/0 | 1/0/0 | 0/0/0 | 69,600/1,405 | ollama / glm-5.3-flash | 3 | 0/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 41 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bechtel_1986.pdf` | Bechtel WD et al., Blood level, excretion, and metabolite…, Arzneimittel-Forschung (1986) | popPK | 6 | not captured | [3718580](https://pubmed.ncbi.nlm.nih.gov/3718580) | Human mass-balance study with half-lives (9.5 h radioactivity, 4.4 h unchanged) and excretion fractions, but no CL/V or full compartmental parameter values in the evidence. |

<sub>queue written 2026-10-06T19:46:59.401809+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Osanai_2004 | not_relevant | 0 | 0 | Drug-drug interaction (itraconazole/CYP3A4 inhibition), not a gene variant/genotype/phenotype effect. |
| PGx | Otani_2003 | not_relevant | 3 | 2 | Review mentions brotizolam is metabolized by CYP3A4 and affected by inhibitors/inducers, but no gene variant effect on PK/PD parameters is quantified. |
| PGx | Senda_1997 | not_relevant | 2 | 5 | Identifies CYP3A4 as the enzyme metabolizing brotizolam via in vitro microsome studies, but no gene variant/genotype/phenotype effect on PK/PD parameters is reported. |
| PGx | Tokairin_2005 | not_relevant | 3 | 5 | Drug interaction (erythromycin/CYP3A4 inhibition) affecting brotizolam PK, not a gene variant/genotype/phenotype effect. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
