<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadofosveset&quot;}]"></div>

# gadofosveset

- **generic name:** gadofosveset
- **ATC codes:** `V08CA11`
- **DrugBank:** [DB06705](https://go.drugbank.com/drugs/DB06705) · **PubChem:** [CID 73049652](https://pubchem.ncbi.nlm.nih.gov/compound/73049652)
- **molar mass:** 1003.85 g/mol (C33H38GdN3Na5O14P) — DrugBank
- **groups:** approved

## About

Gadofosveset is a paramagnetic contrast agent used for magnetic resonance angiography.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27271636](https://www.wikidata.org/wiki/Q27271636) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadofosveset | parent | 1003.85 | C33H38GdN3Na5O14P | DrugBank | [73049652](https://pubchem.ncbi.nlm.nih.gov/compound/73049652) | Spanakis_2014 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.5 | L/h | 0.50 L/h | simulated virtual populations: healthy volunteers, renal and liver impairment, obese, and oncology | 100 per population group | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Spanakis_2014_data_from_fda_drugbank](drugs/drug_gadofosveset/Gadofosveset_Spanakis2014_data_from_fda_drugbank.md) |
| CL | CL | 0.5 | L/h | 0.50 L/h | simulated virtual populations: healthy volunteers, renal and liver impairment, obese, and oncology | 100 per population group | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Spanakis_2014_predicted_from_simcyp](drugs/drug_gadofosveset/Gadofosveset_Spanakis2014_predicted_from_simcyp.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Spanakis_2014 · CL</text><circle cx="434.6" cy="30.0" r="4" fill="#ef6c00"><title>Spanakis_2014 · CL: 0.5 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Spanakis_2014 · CL</text><circle cx="434.6" cy="46.0" r="4" fill="#ef6c00"><title>Spanakis_2014 · CL: 0.5 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Spanakis_2014_data_from_fda_drugbank](drugs/drug_gadofosveset/Gadofosveset_Spanakis2014_data_from_fda_drugbank.md) | — | 1-compartment (no model) | 4 | Spanakis M et al., In silico evaluation of gadofosveset ph…, In silico pharmacology (2014) | [10.1186/s40203-014-0002-x](https://doi.org/10.1186/s40203-014-0002-x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ predicted_from_simcyp](drugs/drug_gadofosveset/Gadofosveset_Spanakis2014_predicted_from_simcyp.md) | — | 1-compartment (no model) | 4 |  |  |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gadofosveset).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:53 | 3:38 | 2/0/0 | 0/0/0 | 0/0/0 | 53,045/21,780 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bane_2014 | irrelevant | 1 | 0 | The study models myocardial water exchange and contrast-agent distribution, not gadofosveset pharmacokinetic parameters; no such numeric values are provided. |
| popPK | Hindel_2017 | irrelevant | 1 | 0 | Gadofosveset is used as a diagnostic contrast agent to estimate tissue blood volume, not to report its own quantitative disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 17:50 UTC</sub>
