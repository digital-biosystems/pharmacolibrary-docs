<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;fluorodopa (18F)&quot;}]"></div>

# fluorodopa (18F)

- **generic name:** fluorodopa (18F)
- **ATC codes:** `V09IX05`
- **DrugBank:** [DB13848](https://go.drugbank.com/drugs/DB13848) · **PubChem:** not captured
- **molar mass:** 214.183 g/mol (C9H10FNO4) — DrugBank
- **groups:** approved, investigational

## About

Fluorodopa F-18 is a radioactive tracer used as a diagnostic radiopharmaceutical for detecting tumours. It is an approved imaging agent, also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27121509](https://www.wikidata.org/wiki/Q27121509) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kratochwil_2014_reference](drugs/drug_fluorodopa_18f/Fluorodopa18f_Kratochwil2014_reference.md) | — | 1-compartment (no model) | 0 | Kratochwil C et al., Intra-individual comparison of ¹⁸F-FET…, Neuro-oncology (2014) | [10.1093/neuonc/not199](https://doi.org/10.1093/neuonc/not199) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:54 | 1:38 | 0/1/0 | 0/0/0 | 0/0/0 | 18,424/2,292 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Doudet_1991.pdf` | Doudet DJ et al., Distribution and kinetics of 3-O-methyl…, Journal of cerebral blood f… (1991) | popPK | 8 | [10.1038/jcbfm.1991.129](https://doi.org/10.1038/jcbfm.1991.129) | [1874805](https://pubmed.ncbi.nlm.nih.gov/1874805) | The study models the kinetics of the main metabolite of fluorodopa_18f ([18F]3-OM-DOPA) in rhesus monkeys, which is relevant to fluorodopa_18f PK, but specific numeric parameter values are not present in the provided text. |
| `Kratochwil_2014.pdf` | Kratochwil C et al., Intra-individual comparison of ¹⁸F-FET…, Neuro-oncology (2014) | popPK | 8 | [10.1093/neuonc/not199](https://doi.org/10.1093/neuonc/not199) | [24305717](https://pubmed.ncbi.nlm.nih.gov/24305717) | The study reports quantitative kinetic parameters (k1) from compartmental modeling for 18F-DOPA in human brain tumors. |

<sub>queue written 2026-10-07T15:53:12.273956+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Brooks_1998 | not_relevant | 0 | 0 | The paper discusses the use of [18F]Dopa PET for diagnosing Parkinson's disease and does not report any pharmacogenomic effects on the PK or PD parameters of the tracer. |
| popPK | Doudet_1991 | relevant | 8 | 2 | The study models the kinetics of the main metabolite of fluorodopa_18f ([18F]3-OM-DOPA) in rhesus monkeys, which is relevant to fluorodopa_18f PK, but specific numeric parameter values are not present in the provided text. |
| PGx | Dunoyer_2026 | not_relevant | 0 | 0 | The paper reports clinical and imaging outcomes of gene therapy for AADC deficiency, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of the radiotracer 18F-fluorodopa. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 15:53 UTC</sub>
