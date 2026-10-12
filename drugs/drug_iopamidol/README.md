<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iopamidol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iopamidol_Hooper2025_final&quot;,&quot;label&quot;:&quot;Hooper_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/Iopamidol_Hooper2025_final.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iopamidol_Hooper2025_pragmatic_model&quot;,&quot;label&quot;:&quot;Hooper_2025_pragmatic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_iopamidol/Iopamidol_Hooper2025_pragmatic_model.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# iopamidol

- **generic name:** iopamidol
- **ATC codes:** `V08AB04`
- **DrugBank:** [DB08947](https://go.drugbank.com/drugs/DB08947) · **PubChem:** [CID 65492](https://pubchem.ncbi.nlm.nih.gov/compound/65492)
- **molar mass:** 777.0853 g/mol (C17H22I3N3O8) — DrugBank
- **groups:** approved, investigational

## About

Iopamidol is an iodinated, low-osmolar X-ray contrast agent used to improve visibility of body structures during imaging examinations. It is an approved contrast medium that is widely used in medical imaging, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424788](https://www.wikidata.org/wiki/Q424788) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iopamidol | parent | 777.085 | C17H22I3N3O8 | DrugBank | [65492](https://pubchem.ncbi.nlm.nih.gov/compound/65492) | Hooper_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:57 | 16:44 | 2/2/1 | 0/0/0 | 0/0/0 | 225,977/9,533 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Hooper_2025_final](drugs/drug_iopamidol/Iopamidol_Hooper2025_final.md) | ▶ model + simulator | 2-compartment, IV | 6 | Hooper L et al., Pharmacokinetic Characterization of Iop…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.727). Primary extraction retained.">cross-check: partial</span> | [Hooper_2025_pragmatic_model](drugs/drug_iopamidol/Iopamidol_Hooper2025_pragmatic_model.md) | ▶ model + simulator | 2-compartment, IV | 5 | Hooper L et al., Pharmacokinetic Characterization of Iop…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q354 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Hooper_2025_base](drugs/drug_iopamidol/Iopamidol_Hooper2025_base.md) | — | 2-compartment (no model) | 5 | Hooper L et al., Pharmacokinetic Characterization of Iop…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hooper_2025_stoch_approx](drugs/drug_iopamidol/Iopamidol_Hooper2025_stoch_approx.md) | — | 2-compartment (no model) | 4 | Hooper L et al., Pharmacokinetic Characterization of Iop…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hooper_2025_value](drugs/drug_iopamidol/Iopamidol_Hooper2025_value.md) | — | 2-compartment (no model) | 5 | Hooper L et al., Pharmacokinetic Characterization of Iop…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70046](https://doi.org/10.1002/jcph.70046) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rodríguez-Romero_2015.pdf` | Rodríguez-Romero V et al., A novel, simple and inexpensive procedu…, Journal of pharmaceutical a… (2015) | popPK | 7 | [10.1016/j.jpba.2014.12.009](https://doi.org/10.1016/j.jpba.2014.12.009) | [25594899](https://pubmed.ncbi.nlm.nih.gov/25594899) | Reports numeric plasma clearance of iopamidol (1.49±0.20 ml/min) from NCA analysis in rats, though limited to clearance without volume or full PK model. |

<sub>queue written 2026-10-07T22:40:57.700084+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegrini_2024 | irrelevant | 2 | 2 | Study measures urinary iodine excretion kinetics, not iopamidol PK parameters (no CL, V, half-life, or compartmental model for the drug itself); only fold-changes and time-to-baseline reported. |
| popPK | Gilroy_2017 | irrelevant | 1 | 1 | Toxicity/bioconcentration study in mussels; no PK disposition parameters (CL, V, half-life) for iopamidol are reported. |
| popPK | Zhang_2014 | irrelevant | 2 | 2 | Iopamidol is used as a diagnostic/renal-impairing agent; the kinetic model parameters (VB, VE, GFR) describe the MR tracer, not iopamidol's own disposition. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:41 UTC</sub>
