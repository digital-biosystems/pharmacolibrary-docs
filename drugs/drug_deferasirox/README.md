<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;deferasirox&quot;}]"></div>

# deferasirox

- **generic name:** deferasirox
- **ATC codes:** `V03AC03`
- **DrugBank:** [DB01609](https://go.drugbank.com/drugs/DB01609) · **PubChem:** [CID 5493381](https://pubchem.ncbi.nlm.nih.gov/compound/5493381)
- **molar mass:** 373.3615 g/mol (C21H15N3O4) — DrugBank
- **groups:** approved, investigational

## About

Deferasirox is an iron chelating agent used to treat iron overload, for example in patients with thalassemia and other anemias requiring repeated transfusions. It is an approved medicine authorised in the European Union, where it is widely used for iron overload, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5251502](https://www.wikidata.org/wiki/Q5251502) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:47 | 0:23 | 0/0/0 | 0/1/0 | 0/0/0 | 41,679/1,021 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> | [Borella_2022_FERRITIN](drugs/drug_deferasirox/pd_Borella_2022_FERRITIN.md) | serum ferritin biomarker turnover ← deferasirox | — | Borella E et al., Characterisation of individual ferritin…, British journal of clinical… (2022) | [10.1111/bcp.15290](https://doi.org/10.1111/bcp.15290) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=deferasirox).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C8` inhibitor, `CYP3A4` inducer, `UGT1A1` inhibitor/substrate, `UGT1A3` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Iron (chelator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borella_2022 | irrelevant | 2 | 1 | This is a drug–disease (ferritin/iron turnover) PD model; deferasirox PK is only cited from a prior publication, and no deferasirox CL/V/ka values appear in the evidence. |
| popPK | Essmann_2022 | irrelevant | 2 | 3 | Deferasirox is only a co-administered drug; the quantitative PK parameters (clearance, AUC, volume) reported are for busulfan, not deferasirox. |
| popPK | Galeotti_2021 | relevant | 9 | 4 | A population PK model (one-compartment, F1, ka, CL, V with covariates) for deferasirox in children is presented, but the actual numeric parameter estimates are in Table 3/equations not fully provided in the evidence. |
| popPK | Peppe_2024 | irrelevant | 0 | 0 | This is a nanoparticle formulation/efficacy study of deferasirox with no PK disposition parameters (no CL, V, half-life, or population-PK model); only release kinetics and biodistribution imaging. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
