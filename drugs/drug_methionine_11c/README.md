<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;methionine (11C)&quot;}]"></div>

# methionine (11C)

- **generic name:** methionine (11C)
- **ATC codes:** `V09IX13`
- **DrugBank:** [DB17147](https://go.drugbank.com/drugs/DB17147) · **PubChem:** not captured
- **groups:** investigational

## About

Methionine C-11 is a radioactive tracer used in imaging to detect tumours. It is an investigational diagnostic radiopharmaceutical and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27277122](https://www.wikidata.org/wiki/Q27277122) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Li_2023_reference](drugs/drug_methionine_11c/Methionine11c_Li2023_reference.md) | — | 1-compartment (no model) | 0 | Li J et al., Metabolic kinetic modeling of [, European journal of nuclear… (2023) | [10.1007/s00259-023-06219-y](https://doi.org/10.1007/s00259-023-06219-y) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Pan_2024_reference](drugs/drug_methionine_11c/Methionine11c_Pan2024_reference.md) | — | 1-compartment (no model) | 0 | Pan Y et al., A comparison study of dynamic [, Journal of cancer research… (2024) | [10.1007/s00432-024-05688-4](https://doi.org/10.1007/s00432-024-05688-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yoshida_1995_reference](drugs/drug_methionine_11c/Methionine11c_Yoshida1995_reference.md) | — | 1-compartment (no model) | 0 | Yoshida H et al., [Correlation analysis between patlak pl…, Nihon Igaku Hoshasen Gakkai… (1995) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:18 | 5:24 | 0/3/0 | 0/0/0 | 0/0/0 | 80,753/13,835 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brust_1992.pdf` | Brust P et al., Effects of vasopressin on blood-brain t…, Journal of neurochemistry (1992) | popPK | 9 | [10.1111/j.1471-4159.1992.tb08456.x](https://doi.org/10.1111/j.1471-4159.1992.tb08456.x) | [1402892](https://pubmed.ncbi.nlm.nih.gov/1402892) | The study reports quantitative kinetic parameters (K1, partition volume, net accumulation rate K) for L-[11C]methionine in dogs using compartmental models. |
| `Li_2023.pdf` | Li J et al., Metabolic kinetic modeling of [, European journal of nuclear… (2023) | popPK | 9 | [10.1007/s00259-023-06219-y](https://doi.org/10.1007/s00259-023-06219-y) | [37039900](https://pubmed.ncbi.nlm.nih.gov/37039900) | The study reports quantitative kinetic parameters (Ki, k4) from a compartmental model (2T4k) for [11C]methionine in human subjects, with specific numeric values provided in the abstract. |
| `Hsu_1996.pdf` | Hsu H et al., Measurement of muscle protein synthesis…, Proceedings of the National… (1996) | popPK | 8 | [10.1073/pnas.93.5.1841](https://doi.org/10.1073/pnas.93.5.1841) | [8700846](https://pubmed.ncbi.nlm.nih.gov/8700846) | The study reports a three-compartment PK model for L-[methyl-11C]methionine in dogs, but the specific numeric parameter values (CL, V, Q) are not listed in the provided text, only the derived protein synthesis rates. |
| `Yoshida_1995.pdf` | Yoshida H et al., [Correlation analysis between patlak pl…, Nihon Igaku Hoshasen Gakkai… (1995) | popPK | 8 | not captured | [7638054](https://pubmed.ncbi.nlm.nih.gov/7638054) | The study reports quantitative kinetic parameters (Ki and DAR) derived from a three-compartment model for 11C-methionine in human patients. |

<sub>queue written 2026-10-07T16:13:49.139055+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blomqvist_1984 | irrelevant | 2 | 0 | The paper describes a mathematical algorithm for PET analysis and applies it to [11C]glucose, not [11C]methionine, and contains no quantitative PK parameter values for methionine. |
| popPK | Fischman_1998 | irrelevant | 2 | 0 | The study uses L-[methyl-11C]methionine as a tracer to measure muscle protein synthesis rates (PSR) rather than reporting standard pharmacokinetic disposition parameters (CL, V, Q) for the drug itself. |
| popPK | Hsu_1996 | relevant | 8 | 2 | The study reports a three-compartment PK model for L-[methyl-11C]methionine in dogs, but the specific numeric parameter values (CL, V, Q) are not listed in the provided text, only the derived protein synthesis rates. |
| popPK | Michaud_2020 | irrelevant | 1 | 0 | The study focuses on 18F-Fluciclovine pharmacokinetics, using 11C-Methionine only as a comparator for diagnostic efficacy without reporting its specific PK parameters (CL, V, etc.). |
| popPK | Salmon_1996 | irrelevant | 2 | 0 | The study uses [11C]methionine as a diagnostic tracer to assess tissue loss in Alzheimer's disease, reporting qualitative or relative changes rather than quantitative population pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| popPK | Vaalburg_1992 | irrelevant | 1 | 0 | The paper is a review discussing the use of amino acids for protein synthesis measurement and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for methionine-11c. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:14 UTC</sub>
