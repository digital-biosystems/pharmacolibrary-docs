<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;etelcalcetide&quot;}]"></div>

# etelcalcetide

- **generic name:** etelcalcetide
- **ATC codes:** `H05BX04`
- **DrugBank:** [DB12865](https://go.drugbank.com/drugs/DB12865) · **PubChem:** [CID 71511839](https://pubchem.ncbi.nlm.nih.gov/compound/71511839)
- **molar mass:** 1048.26 g/mol (C38H73N21O10S2) — DrugBank
- **groups:** approved, investigational

## About

Etelcalcetide is a calcimimetic medicine used to treat secondary hyperparathyroidism. It is authorised in the European Union and is an approved drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098973](https://www.wikidata.org/wiki/Q21098973) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| etelcalcetide | parent | 1048.26 | C38H73N21O10S2 | DrugBank | [71511839](https://pubchem.ncbi.nlm.nih.gov/compound/71511839) | Chen_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Chen_2018_reference](drugs/drug_etelcalcetide/Etelcalcetide_Chen2018_reference.md) | — | general linear (no model) | 3 | Chen P et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0550-4](https://doi.org/10.1007/s40262-017-0550-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chen_2018_PTH](drugs/drug_etelcalcetide/pd_Chen_2018_PTH.md) | serum parathyroid hormone ← etelcalcetide · indirect response — drug inhibits the production of serum parathyroid hormone | — | Chen P et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0550-4](https://doi.org/10.1007/s40262-017-0550-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=etelcalcetide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CASR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:28 | 0:39 | 0/1/0 | 1/0/0 | 0/0/0 | 21,290/1,780 | einfracz / qwen3.8-27b | 2 | 1/1 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2018.pdf` | Chen P et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0550-4](https://doi.org/10.1007/s40262-017-0550-4) | [28508378](https://pubmed.ncbi.nlm.nih.gov/28508378) | The paper reports a population PK model for etelcalcetide with specific numeric values for clearance (0.472 L/h) and central volume of distribution (49.9 L) provided in the text. |

<sub>queue written 2026-10-07T10:27:57.742043+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2016 | irrelevant | 4 | 2 | The paper reports a population PK/PD model for etelcalcetide in humans, but the specific PK parameter values (CL, V, Q) are stated to have been developed previously and are not provided in the text, which focuses on PD parameters. |
| popPK | Harada_2019 | irrelevant | 0 | 0 | The paper focuses on the in vitro pharmacological profile and in vivo pharmacodynamic effects (PTH/Ca levels) rather than pharmacokinetic disposition parameters. |
| popPK | Wu_2017 | relevant | 7 | 2 | The paper describes a population PK model and provides mass balance data (50.8% in dialysate) but lacks explicit numeric values for clearance, volume, or half-life in the provided text. |
| popPK | Wu_2018 | irrelevant | 3 | 2 | The paper is a clinical pharmacokinetics/pharmacodynamics review/summary that describes qualitative mechanisms (dialysis clearance, albumin binding) and efficacy, but does not report specific numeric compartmental parameters (CL, V, Q, ka) for etelcalcetide, mentioning only a qualitative half-life range and qualitative clearance mechanisms. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:27 UTC</sub>
