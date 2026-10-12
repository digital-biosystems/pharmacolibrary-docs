<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;brinzolamide&quot;}]"></div>

# brinzolamide

- **generic name:** brinzolamide
- **ATC codes:** `S01EC04`
- **DrugBank:** [DB01194](https://go.drugbank.com/drugs/DB01194) · **PubChem:** [CID 68844](https://pubchem.ncbi.nlm.nih.gov/compound/68844)
- **molar mass:** 383.507 g/mol (C12H21N3O5S3) — DrugBank
- **groups:** approved, investigational

## About

Brinzolamide is a carbonic anhydrase inhibitor used to treat glaucoma, especially open-angle glaucoma, and ocular hypertension. It is an approved eye medicine, authorised in the European Union for lowering pressure in the eye.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411517](https://www.wikidata.org/wiki/Q411517) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| brinzolamide | parent | 383.507 | C12H21N3O5S3 | DrugBank | [68844](https://pubchem.ncbi.nlm.nih.gov/compound/68844) | Naageshwaran_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:01 | 1:14 | 0/2/0 | 0/0/0 | 0/0/0 | 65,419/7,384 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Lu_2015_reference](drugs/drug_vismodegib/Vismodegib_Lu2015_reference.md) | — | 1-compartment (no model) | 1 | Lu T et al., Semi-Mechanism-Based Population Pharmac…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.12039](https://doi.org/10.1002/psp4.12039) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wong_2011_Gli1](drugs/drug_vismodegib/pd_Wong_2011_Gli1.md) | Gli1 ← vismodegib · direct Emax (saturable) effect | — | Wong H et al., Pharmacokinetic-pharmacodynamic analysi…, Clinical cancer research :… (2011) | [10.1158/1078-0432.CCR-11-0975](https://doi.org/10.1158/1078-0432.CCR-11-0975) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=brinzolamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), CA3 (inhibitor), CA4 (inhibitor), CA5A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Sharif_2024 | irrelevant | 0 | 0 | The paper focuses on the efficacy and discovery of omidenepag isopropyl, with brinzolamide mentioned only as a comparator drug in combination studies, providing no PK parameters for brinzolamide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:00 UTC</sub>
