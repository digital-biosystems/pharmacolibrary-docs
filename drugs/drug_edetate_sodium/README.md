<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;Edetate sodium&quot;}]"></div>

# Edetate sodium

- **generic name:** Edetate sodium
- **ATC codes:** `S01XA05`
- **DrugBank:** [DB13404](https://go.drugbank.com/drugs/DB13404) · **PubChem:** not captured
- **groups:** investigational

## About

Edetate sodium is a chelating agent that has been investigated for use in eye conditions, being classified as an ophthalmological drug. It is not an approved medicine and remains investigational, with no authorisation recorded in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27284152](https://www.wikidata.org/wiki/Q27284152) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:21 | 2:46 | 0/0/0 | 0/0/0 | 0/0/0 | 190,540/963 | ollama / glm-5.3-flash | 8 | 0/7 | 7/1 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_2004.pdf` | De Rosemond SJ et al., Wastewater treatment polymers identifie…, Environmental toxicology an… (2004) | pd | 4 | [10.1897/03-609](https://doi.org/10.1897/03-609) | [15379002](https://www.ncbi.nlm.nih.gov/pubmed/15379002) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T17:20:45.430742+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Canevarolo_2026 | irrelevant | 0 | 0 | This is a genomic/epigenomic study of multiple myeloma with no pharmacokinetic parameters for edetate_sodium anywhere in the evidence. |
| popPK | De_2004 | irrelevant | 0 | 0 | Toxicology study of mine effluent and polymers; EDTA only used as a TIE reagent, no PK parameters for edetate_sodium. |
| popPK | Moura_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/anticancer study of carnosic acid derivatives with no edetate sodium PK data. |
| popPK | Phelps_2013 | irrelevant | 0 | 0 | The paper reports population PK of myo-inositol in preterm infants, not edetate_sodium; edetate_sodium is not the subject drug. |
| popPK | Pillai_2015 | irrelevant | 0 | 0 | This is a population PK study of oseltamivir, not edetate_sodium; no edetate_sodium parameters are reported. |
| popPK | Ravenstijn_2012 | irrelevant | 0 | 0 | This is a population PK study of L-DOPA (levodopa) in rats, not edetate sodium; edetate only appears as EDTA in assay buffers. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | This is a review of paediatric excipients; edetate sodium is not the subject drug and no PK parameters for it appear. |
| popPK | Simeoli_2024 | irrelevant | 0 | 0 | This is a population-PK study of budesonide; sodium edetate is only an excipient in the formulation, with no PK parameters for edetate itself. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | A narrative review of oral peptide delivery technologies with no edetate_sodium PK parameters reported. |
| popPK | Zingmark_2004 | irrelevant | 0 | 0 | The paper models the monoclonal antibody ATM-027, not edetate_sodium; no edetate_sodium parameters appear. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
