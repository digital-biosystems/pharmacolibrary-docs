<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;prifinium bromide&quot;}]"></div>

# prifinium bromide

- **generic name:** prifinium bromide
- **ATC codes:** `A03AB18`
- **DrugBank:** [DB13254](https://go.drugbank.com/drugs/DB13254) · **PubChem:** none
- **molar mass:** 306.472 g/mol (C22H28N) — DrugBank
- **groups:** experimental

## About

Prifinium bromide is a synthetic anticholinergic (quaternary ammonium) drug classified for the treatment of functional gastrointestinal disorders. It appears to be only an experimental compound, with no confirmed current authorisation or established market use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27257028](https://www.wikidata.org/wiki/Q27257028) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=prifinium_bromide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:58 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 8,367/232 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Noguchi_1983.pdf` | Noguchi H et al., Pharmacokinetics of prifinium bromide i…, International journal of cl… (1983) | popPK | 10 |  | [6134685](https://pubmed.ncbi.nlm.nih.gov/6134685) | The paper reports quantitative PK parameters (CL, Vss, t1/2, bioavailability) for prifinium bromide in humans with all values explicitly stated in the text. |

<sub>queue written 2026-10-04 12:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ishikawa_1993 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of organophosphorus intoxication and does not report any pharmacokinetic parameters for prifinium bromide. |
| PD | Ishikawa_1993 | not_relevant | 1 | 0 | The text is a qualitative clinical summary describing the efficacy of prifinium bromide in treating chronic organophosphorus intoxication but provides no numeric PD parameters, dose-response data, or concentration-effect analysis. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The paper is an epidemiological and toxicological study where prifinium bromide is mentioned only as a therapeutic antidote, with no pharmacokinetic parameters reported. |
| PD | Ishikawa_1996 | not_relevant | 0 | 0 | The paper is an epidemiological and pathological study of organophosphorus pesticide toxicity; prifinium bromide is only mentioned as a treatment antidote without any pharmacodynamic modeling, dose-response analysis, or numeric PD parameters. |
| popPK | Kubo_1981 | irrelevant | 0 | 0 | The study is a pharmacological comparison of ganglion blocking activity in cats, not a pharmacokinetic study, and prifinium bromide is only a comparator agent. |
| PD | Kubo_1981 | not_relevant | 1 | 0 | The paper focuses on the pharmacological profile of HSR-902, mentioning prifinium bromide only for qualitative potency ranking without providing numeric PD parameters or concentration-effect data for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprifinium_bromide%5D&body=Drug%3A%20prifinium_bromide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_prifinium_bromide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
