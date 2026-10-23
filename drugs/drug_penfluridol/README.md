<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;penfluridol&quot;}]"></div>

# penfluridol

- **generic name:** penfluridol
- **ATC codes:** `N05AG03`
- **DrugBank:** [DB13791](https://go.drugbank.com/drugs/DB13791) · **PubChem:** not captured
- **molar mass:** 523.97 g/mol (C28H27ClF5NO) — DrugBank
- **groups:** investigational

## About

Penfluridol is an antipsychotic of the diphenylbutylpiperidine class that acts as a dopamine antagonist and was used to treat psychotic disorders such as schizophrenia. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2149707](https://www.wikidata.org/wiki/Q2149707) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Enyeart_1996_cortisol_secretion](drugs/drug_penfluridol/pd_Enyeart_1996_cortisol_secretion.md) | 8-pcpt-cAMP-induced cortisol secretion ← penfluridol · inhibition effect | — | Enyeart JJ et al., Adrenocorticotropic hormone and cAMP in…, The Journal of general phys… (1996) | [10.1085/jgp.108.4.251](https://doi.org/10.1085/jgp.108.4.251) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schettini_1983_PRL](drugs/drug_penfluridol/pd_Schettini_1983_PRL.md) | basal PRL secretion ← penfluridol · direct Emax (saturable) effect | — | Schettini G et al., In vitro studies on basal and stimulate…, Endocrinology (1983) | [10.1210/endo-112-1-64](https://doi.org/10.1210/endo-112-1-64) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schettini_1983_PRL_2](drugs/drug_penfluridol/pd_Schettini_1983_PRL_2.md) | secretagogue-stimulated PRL secretion ← penfluridol · direct Emax (saturable) effect | — | Schettini G et al., In vitro studies on basal and stimulate…, Endocrinology (1983) | [10.1210/endo-112-1-64](https://doi.org/10.1210/endo-112-1-64) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=penfluridol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1G (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:22 | 0:12 | 0/0/0 | 0/2/0 | 0/0/0 | 9,150/1,015 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Enyeart_1996 | irrelevant | 0 | 0 | This is an electrophysiology study of K+ channels in bovine adrenal cells; penfluridol is only a tool (Ca2+ channel antagonist) with an IC50, no PK disposition parameters. |
| popPK | Lafond_1986 | irrelevant | 0 | 0 | In-vitro mechanistic study of pituitary cAMP/PRL effects; penfluridol is a pharmacological tool, no PK parameters. |
| popPK | Schettini_1983 | irrelevant | 0 | 0 | In vitro mechanistic study of prolactin secretion with no PK disposition parameters for penfluridol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
