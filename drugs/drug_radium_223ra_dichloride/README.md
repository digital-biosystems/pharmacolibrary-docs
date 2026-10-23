<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;radium (223Ra) dichloride&quot;}]"></div>

# radium (223Ra) dichloride

- **generic name:** radium (223Ra) dichloride
- **ATC codes:** `V10XX03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Radium-223 dichloride is a radiopharmaceutical used to treat prostate cancer. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4735269](https://www.wikidata.org/wiki/Q4735269) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bismuth_211 | metabolite | — (mass units only) | — | — | — | — |
| lead_211 | metabolite | — (mass units only) | — | — | — | — |
| polonium_211 | metabolite | — (mass units only) | — | — | — | — |
| polonium_215 | metabolite | — (mass units only) | — | — | — | — |
| radon_219 | metabolite | — (mass units only) | — | — | — | — |
| thallium_207 | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Höllriegl_2021_reference](drugs/drug_radium_223ra_dichloride/Radium223raDichloride_Hllriegl2021_reference.md) | — | general linear (no model) | 0 | Höllriegl V et al., Radiopharmacokinetic modelling and radi…, EJNMMI physics (2021) | [10.1186/s40658-021-00388-1](https://doi.org/10.1186/s40658-021-00388-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:46 | 10:14 | 0/1/0 | 0/0/0 | 0/0/0 | 217,675/24,534 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Deshayes_2017 | not_relevant | 1 | 0 | The paper is a narrative review summarizing mechanism of action and clinical trial outcomes, without reporting specific pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| PGx | Langsteger_2016 | not_relevant | 0 | 0 | The paper is a table of contents for a symposium and does not report pharmacogenomic effects on radium-223. |
| PD | Nilsson_2015 | not_relevant | 1 | 0 | The paper is a qualitative review of safety and efficacy data without reporting specific numeric pharmacodynamic parameters or exposure-response models. |
| PD | Sindhu_2022 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism of action and clinical efficacy of radium-223, containing no numeric PD parameters, exposure-response data, or dose-effect curves. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 17:37 UTC</sub>
