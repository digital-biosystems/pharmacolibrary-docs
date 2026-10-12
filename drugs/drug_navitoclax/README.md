<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;navitoclax&quot;}]"></div>

# navitoclax

- **generic name:** navitoclax
- **ATC codes:** `L01XX78`
- **DrugBank:** [DB12340](https://go.drugbank.com/drugs/DB12340) · **PubChem:** [CID 24978538](https://pubchem.ncbi.nlm.nih.gov/compound/24978538)
- **molar mass:** 974.613 g/mol (C47H55ClF3N5O6S3) — DrugBank
- **groups:** investigational

## About

Navitoclax is an investigational anticancer drug being studied as a treatment for cancer. It is not approved for general use and remains under clinical investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q18002993](https://www.wikidata.org/wiki/Q18002993) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| navitoclax | parent | 974.613 | C47H55ClF3N5O6S3 | DrugBank | [24978538](https://pubchem.ncbi.nlm.nih.gov/compound/24978538) | Polepally_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:09 | 1:42 | 0/0/2 | 2/0/1 | 0/0/0 | 121,087/11,524 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Polepally_2026_navitoclax](drugs/drug_navitoclax/Navitoclax_Polepally2026_navitoclax.md) | — | 2-compartment (no model) | 7 | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.417). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Polepally_2026_population_estimate](drugs/drug_navitoclax/Navitoclax_Polepally2026_population_estimate.md) | — | 1-compartment (no model) | 3 (+2 cov.) | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Jegatheeson_2023_viability](drugs/drug_navitoclax/pd_Jegatheeson_2023_viability.md) | viability ← NAV · direct sigmoid Emax (Hill) effect | — | Jegatheeson S et al., Sensitivity of canine hematological can…, Journal of veterinary inter… (2023) | [10.1111/jvim.16587](https://doi.org/10.1111/jvim.16587) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Kaefer_2014_PLT](drugs/drug_navitoclax/pd_Kaefer_2014_PLT.md) | platelet counts ← navitoclax · disease-progression model | — | Kaefer A et al., Mechanism-based pharmacokinetic/pharmac…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2530-9](https://doi.org/10.1007/s00280-014-2530-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.462). The first reading is what the record holds.">cross-check: disputed</span> | [Polepally_2026_PLT](drugs/drug_navitoclax/pd_Polepally_2026_PLT.md) | platelet count ← navitoclax · inhibition effect | — | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span> | [Polepally_2026_SV](drugs/drug_navitoclax/pd_Polepally_2026_SV.md) | spleen volume ← navitoclax · indirect response — drug inhibits the loss of spleen volume | — | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=navitoclax).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: BAD (unknown), BCL2 (inhibitor), BCL2L1 (inhibitor), BCL2L2 (inhibitor), CCND1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kaefer_2014.pdf` | Kaefer A et al., Mechanism-based pharmacokinetic/pharmac…, Cancer chemotherapy and pha… (2014) | popPK | 10 | [10.1007/s00280-014-2530-9](https://doi.org/10.1007/s00280-014-2530-9) | [25053389](https://pubmed.ncbi.nlm.nih.gov/25053389) | The study reports a population PK/PD model for navitoclax in humans, but the specific quantitative parameter estimates (CL, V, ka, etc.) are not present in the provided evidence text, likely residing in tables or supplementary material. |

<sub>queue written 2026-10-06T21:07:54.388667+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jegatheeson_2023 | irrelevant | 1 | 0 | The study is an in vitro cytotoxicity assessment (EC50) of BH3 mimetics, not a pharmacokinetic study, and does not report disposition parameters (CL, V, ka, etc.) for navitoclax. |
| popPK | Kaefer_2014 | relevant | 10 | 1 | The study reports a population PK/PD model for navitoclax in humans, but the specific quantitative parameter estimates (CL, V, ka, etc.) are not present in the provided evidence text, likely residing in tables or supplementary material. |
| popPK | Witzens-Harig_2016 | irrelevant | 0 | 0 | The study focuses on in-vitro sensitivity (EC50) and molecular mechanisms (Bax/Bcl-2) of ATL cells, not pharmacokinetic disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:07 UTC</sub>
