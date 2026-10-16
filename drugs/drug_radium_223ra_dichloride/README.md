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
| bismuth_211 | metabolite | 208.98 | Bi | PubChem | [6337577](https://pubchem.ncbi.nlm.nih.gov/compound/6337577) | Höllriegl_2021 |
| lead_211 | metabolite | 207.2 | Pb | PubChem | [6337094](https://pubchem.ncbi.nlm.nih.gov/compound/6337094) | Höllriegl_2021 |
| polonium_211 | metabolite | — (mass units only) | — | — | — | — |
| polonium_215 | metabolite | — (mass units only) | — | — | — | — |
| radium_223ra | metabolite | 226 | Ra | PubChem | [6335825](https://pubchem.ncbi.nlm.nih.gov/compound/6335825) | Höllriegl_2021 |
| radon_219 | metabolite | — (mass units only) | — | — | — | — |
| thallium_207 | metabolite | 204.38 | Tl | PubChem | [25087151](https://pubchem.ncbi.nlm.nih.gov/compound/25087151) | Höllriegl_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:03 | 2:25 | 0/1/0 | 0/0/0 | 0/0/0 | 114,104/5,485 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.143), gpt-oss:120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Höllriegl_2021_reference](drugs/drug_radium_223ra_dichloride/Radium223raDichloride_Hllriegl2021_reference.md) | — | general linear (no model) | 3 | Höllriegl V et al., Radiopharmacokinetic modelling and radi…, EJNMMI physics (2021) | [10.1186/s40658-021-00388-1](https://doi.org/10.1186/s40658-021-00388-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Deshayes_2017 | not_relevant | 1 | 0 | The paper is a narrative review summarizing mechanism of action and clinical trial outcomes, without reporting specific pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| PGx | Langsteger_2016 | not_relevant | 0 | 0 | The paper is a table of contents for a symposium and does not contain specific data or results regarding pharmacogenomics of radium-223. |
| PD | Nilsson_2015 | not_relevant | 1 | 0 | The paper is a qualitative review of safety and efficacy data without reporting specific numeric pharmacodynamic parameters or exposure-response models. |
| PD | Sindhu_2022 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism of action and clinical efficacy of radium-223, containing no numeric PD parameters, exposure-response data, or dose-effect curves. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:01 UTC</sub>
