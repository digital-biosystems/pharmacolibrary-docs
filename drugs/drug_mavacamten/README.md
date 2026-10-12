<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;mavacamten&quot;}]"></div>

# mavacamten

- **generic name:** mavacamten
- **ATC codes:** `C01EB24`
- **DrugBank:** [DB14921](https://go.drugbank.com/drugs/DB14921) · **PubChem:** not captured
- **molar mass:** 273.336 g/mol (C15H19N3O2) — DrugBank
- **groups:** approved, investigational

## About

Mavacamten is a heart medicine used to treat hypertrophic cardiomyopathy. It is authorised in the European Union and is an approved drug, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105337531](https://www.wikidata.org/wiki/Q105337531) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mavacamten | parent | 273.336 | C15H19N3O2 | DrugBank | — | Chang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:36 | 6:51 | 0/2/0 | 0/0/0 | 0/0/0 | 134,279/17,040 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 4/1 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909), gpt-oss:120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chang_2024_reference](drugs/drug_mavacamten/Mavacamten_Chang2024_reference.md) | — | 1-compartment (no model) | 1 | Chang P et al., Characterization of mavacamten pharmaco…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13197](https://doi.org/10.1002/psp4.13197) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Merali_2025_reference](drugs/drug_mavacamten/Mavacamten_Merali2025_reference.md) | — | 1-compartment (no model) | 0 | Merali S et al., Exposure-Response Modeling and Simulati…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70072](https://doi.org/10.1002/jcph.70072) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Merali_2024 | irrelevant | 2 | 0 | The paper focuses on exposure-response modeling and dose-titration simulations, referencing a previously developed population PK model but not reporting the quantitative PK parameter values (CL, V, etc.) for mavacamten in the provided text. |
| popPK | Merali_2025 | irrelevant | 2 | 0 | The paper is a simulation study using a previously published PopPK model to assess dosing regimens, and it does not report the specific numeric PK parameter values (CL, V, Q, ka) for mavacamten in the provided evidence. |
| popPK | Wu_2025 | irrelevant | 2 | 0 | The paper focuses on exposure-response modeling and dose titration simulations, and while it references a PPK model, the specific quantitative PK parameter values (CL, V, etc.) are not provided in the text, being deferred to a previous publication or supplementary materials. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 11:29 UTC</sub>
