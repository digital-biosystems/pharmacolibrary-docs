<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;nedocromil&quot;}]"></div>

# nedocromil

- **generic name:** nedocromil
- **ATC codes:** `R01AC07`, `R03BC03`, `S01GX04`
- **DrugBank:** [DB00716](https://go.drugbank.com/drugs/DB00716) · **PubChem:** [CID 50294](https://pubchem.ncbi.nlm.nih.gov/compound/50294)
- **molar mass:** 371.3408 g/mol (C19H17NO7) — DrugBank
- **groups:** approved

## About

Nedocromil is an anti-allergic, anti-inflammatory drug used for allergic conditions such as asthma, allergic rhinitis, and eye allergies including giant papillary conjunctivitis. It is an approved medicine given as nasal, inhaled, and eye-drop preparations, though it is not authorised by the European Medicines Agency and is now only rarely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416706](https://www.wikidata.org/wiki/Q416706) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nedocromil | parent | 371.341 | C19H17NO7 | DrugBank | [50294](https://pubchem.ncbi.nlm.nih.gov/compound/50294) | Neale_1987 |
| nedocromil sodium | metabolite | 415.309 | C19H15NNa2O7 | PubChem | [50295](https://pubchem.ncbi.nlm.nih.gov/compound/50295) | Neale_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:15 | 0:41 | 0/0/1 | 0/0/0 | 0/0/0 | 11,630/898 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Neale_1987_reference](drugs/drug_nedocromil/Nedocromil_Neale1987_reference.md) | — | 1-compartment (no model) | 2 | Neale MG et al., The pharmacokinetics of nedocromil sodi…, British journal of clinical… (1987) | [10.1111/j.1365-2125.1987.tb03203.x](https://doi.org/10.1111/j.1365-2125.1987.tb03203.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Neale_1987.pdf` | Neale MG et al., The pharmacokinetics of nedocromil sodi…, British journal of clinical… (1987) | popPK | 10 | [10.1111/j.1365-2125.1987.tb03203.x](https://doi.org/10.1111/j.1365-2125.1987.tb03203.x) | [2825746](https://pubmed.ncbi.nlm.nih.gov/2825746) | Original human PK study of nedocromil with numeric CL, k10, beta, and absorption parameters reported directly in the abstract. |
| `Lindén_1999.pdf` | Lindén A et al., Effect of nedocromil sodium on non-adre…, Regulatory peptides (1999) | pd | 4 | [10.1016/s0167-0115(99)00018-x](https://doi.org/10.1016/s0167-0115(99)00018-x) | [10395407](https://www.ncbi.nlm.nih.gov/pubmed/10395407) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T13:15:28.498575+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lindén_1999 | irrelevant | 0 | 0 | In-vitro mechanistic study of nedocromil's effects on guinea pig bronchi with no pharmacokinetic parameters reported. |
| PGx | Wu_2009 | not_relevant | 0 | 0 | No gene variant/genotype effects on nedocromil PK/PD parameters are reported; the study assesses repeatability (ICC) of asthma phenotypes by treatment group only. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | This is a genetics study of longitudinal FEV1 in asthma; nedocromil is only a treatment arm, with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:15 UTC</sub>
