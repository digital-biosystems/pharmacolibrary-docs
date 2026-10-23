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

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Borella_2022_FERRITIN](drugs/drug_deferasirox/pd_Borella_2022_FERRITIN.md) | serum ferritin biomarker turnover ← deferasirox | — | Borella E et al., Characterisation of individual ferritin…, British journal of clinical… (2022) | [10.1111/bcp.15290](https://doi.org/10.1111/bcp.15290) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:47 | 0:23 | 0/0/0 | 0/1/0 | 0/0/0 | 41,679/1,021 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
