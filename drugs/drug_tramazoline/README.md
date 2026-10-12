<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;tramazoline&quot;}]"></div>

# tramazoline

- **generic name:** tramazoline
- **ATC codes:** `R01AA09`
- **DrugBank:** [DB13064](https://go.drugbank.com/drugs/DB13064) · **PubChem:** [CID 5524](https://pubchem.ncbi.nlm.nih.gov/compound/5524)
- **molar mass:** 215.3 g/mol (C13H17N3) — DrugBank
- **groups:** investigational

## About

Tramazoline is a sympathomimetic drug classified as a nasal decongestant for topical use. It is not an approved medicine in the European Union and is considered investigational, so it does not appear to be in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412102](https://www.wikidata.org/wiki/Q412102) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:18 | 0:15 | 0/0/0 | 1/0/0 | 0/0/0 | 28,311/573 | ollama / glm-5.3-flash | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Pratt_1987_melatonin_release](drugs/drug_tramazoline/pd_Pratt_1987_melatonin_release.md) | Melatonin release (normalized % of baseline night, inhibited by adrenergic agonist) ← tramazoline · direct sigmoid Emax (Hill) effect | — | Pratt BL et al., Alpha-2 adrenergic regulation of melato…, The Journal of neuroscience… (1987) | [10.1523/JNEUROSCI.07-11-03665.1987](https://doi.org/10.1523/JNEUROSCI.07-11-03665.1987) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pratt_1987 | irrelevant | 0 | 0 | Tramazoline is only an alpha-2 agonist used in receptor pharmacology (EC50 potency), with no pharmacokinetic disposition parameters reported. |
| popPK | Ruffolo_1982 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study (rat/rabbit aorta) with tramazoline as an agonist; no PK disposition parameters reported. |
| popPK | Sakurai_1983 | irrelevant | 0 | 0 | In-vitro pharmacology study of tramazoline as an alpha-2 agonist in isolated adrenal medullary cells; no PK parameters. |
| popPK | Starke_1975 | irrelevant | 0 | 0 | In-vitro pharmacology study of receptor potencies in rabbit pulmonary artery; no PK parameters for tramazoline. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
