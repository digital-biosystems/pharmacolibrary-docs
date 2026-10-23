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

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Du_2022_IC50](drugs/drug_lifitegrast/pd_Du_2022_IC50.md) | Jurkat cell attachment to ICAM-1 (LFA-1/ICAM-1 antagonist activity) ← Lifitegrast · direct sigmoid Emax (Hill) effect | — | Du G et al., Design, synthesis, and LFA-1/ICAM-1 ant…, Medicinal chemistry researc… (2022) | [10.1007/s00044-022-02851-9](https://doi.org/10.1007/s00044-022-02851-9) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lifitegrast).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `SLCO1A2` substrate, `SLCO2B1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `SLCO1A2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ICAM1 (inhibitor), ITGAL (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:21 | 0:34 | 0/0/0 | 0/1/0 | 0/0/0 | 78,532/639 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
