<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;pasireotide&quot;}]"></div>

# pasireotide

- **generic name:** pasireotide
- **ATC codes:** `H01CB05`
- **DrugBank:** [DB06663](https://go.drugbank.com/drugs/DB06663) · **PubChem:** [CID 9941444](https://pubchem.ncbi.nlm.nih.gov/compound/9941444)
- **molar mass:** 1047.2062 g/mol (C58H66N10O9) — DrugBank
- **groups:** approved, investigational

## About

Pasireotide, a somatostatin analogue, is used to treat Cushing's disease caused by excess pituitary ACTH secretion and acromegaly. It is an approved medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3896970](https://www.wikidata.org/wiki/Q3896970) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pasireotide | parent | 1047.21 | C58H66N10O9 | DrugBank | [9941444](https://pubchem.ncbi.nlm.nih.gov/compound/9941444) | Nedelman_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Nedelman_2018_reference](drugs/drug_pasireotide/Pasireotide_Nedelman2018_reference.md) | — | 1-compartment (no model) | 0 | Nedelman J et al., Population Pharmacokinetics of Subcutan…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0600-y](https://doi.org/10.1007/s40262-017-0600-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Streuli_2018_Binding](drugs/drug_pasireotide/pd_Streuli_2018_Binding.md) | Binding ← pasireotide · direct sigmoid Emax (Hill) effect | — | Streuli J et al., Cellular effects of AP102, a somatostat…, Neuropeptides (2018) | [10.1016/j.npep.2018.02.005](https://doi.org/10.1016/j.npep.2018.02.005) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Streuli_2018_cAMP](drugs/drug_pasireotide/pd_Streuli_2018_cAMP.md) | cAMP accumulation ← pasireotide · direct sigmoid Emax (Hill) effect | — | Streuli J et al., Cellular effects of AP102, a somatostat…, Neuropeptides (2018) | [10.1016/j.npep.2018.02.005](https://doi.org/10.1016/j.npep.2018.02.005) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pasireotide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SSTR1 (inhibitor), SSTR2 (inhibitor), SSTR3 (inhibitor), SSTR5 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:50 | 1:11 | 0/1/0 | 1/0/0 | 0/0/0 | 126,539/7,621 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nedelman_2018.pdf` | Nedelman J et al., Population Pharmacokinetics of Subcutan…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0600-y](https://doi.org/10.1007/s40262-017-0600-y) | [29032486](https://pubmed.ncbi.nlm.nih.gov/29032486) | The paper reports quantitative population pharmacokinetic parameters (CL/F, V) for pasireotide with specific numeric values in the text. |

<sub>queue written 2026-10-07T09:49:39.750780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dasgupta_2021 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study characterizing the receptor binding and signaling of veldoreotide, with pasireotide used only as a comparator agent; no pharmacokinetic disposition parameters are reported. |
| popPK | Gostelow_2017 | irrelevant | 1 | 0 | The paper is a clinical efficacy trial for treating diabetes in cats that reports no quantitative pharmacokinetic parameters (clearance, volume, half-life) for pasireotide. |
| popPK | Streuli_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and signaling, not a pharmacokinetic study, and contains no disposition parameters (CL, V, etc.) for pasireotide. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:49 UTC</sub>
