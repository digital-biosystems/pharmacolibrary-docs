<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;lifitegrast&quot;}]"></div>

# lifitegrast

- **generic name:** lifitegrast
- **ATC codes:** `S01XA25`
- **DrugBank:** [DB11611](https://go.drugbank.com/drugs/DB11611) · **PubChem:** [CID 11965427](https://pubchem.ncbi.nlm.nih.gov/compound/11965427)
- **molar mass:** 615.48 g/mol (C29H24Cl2N2O7S) — DrugBank
- **groups:** approved, investigational

## About

Lifitegrast is an eye drop used to treat dry eye disease. It is approved and used in the United States, but a marketing application in the European Union was withdrawn, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q23044263](https://www.wikidata.org/wiki/Q23044263) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:21 | 0:34 | 0/0/0 | 0/1/0 | 0/0/0 | 78,532/639 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Du_2022_IC50](drugs/drug_lifitegrast/pd_Du_2022_IC50.md) | Jurkat cell attachment to ICAM-1 (LFA-1/ICAM-1 antagonist activity) ← Lifitegrast · direct sigmoid Emax (Hill) effect | — | Du G et al., Design, synthesis, and LFA-1/ICAM-1 ant…, Medicinal chemistry researc… (2022) | [10.1007/s00044-022-02851-9](https://doi.org/10.1007/s00044-022-02851-9) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lifitegrast).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` substrate | DrugBank actor |
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `SLCO1A2` substrate, `SLCO2B1` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ICAM1 (inhibitor), ITGAL (target).</sub>

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
| popPK | Du_2022 | irrelevant | 0 | 0 | Medicinal chemistry study of Lifitegrast analogues (synthesis, IC50, mouse dry-efficacy); no PK/disposition parameters for lifitegrast. |
| popPK | Genovese_2026 | irrelevant | 0 | 0 | This is a narrative review of efficacy/safety of topical immunomodulators with no PK parameters for lifitegrast. |
| popPK | Periman_2020 | irrelevant | 0 | 0 | A narrative review of dry eye immunopathology and topical treatments; lifitegrast is discussed qualitatively with no PK parameters or numeric disposition values. |
| popPK | Pflugfelder_2017 | irrelevant | 0 | 0 | This is a narrative review of LFA-1/ICAM-1 immunology and lifitegrast's mechanism/efficacy; no PK parameters (CL, V, ka, half-life) are reported, only qualitative statements about rapid absorption/clearance. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
